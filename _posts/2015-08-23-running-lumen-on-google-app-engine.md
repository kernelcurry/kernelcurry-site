---
layout: post
title:  "Running Laravel's Lumen On Google App Engine"
date:   2015-08-23
categories: blog
---

When looking for a more stable hosting solution for [mtgapi.com](https://mtgapi.com?utm_source=kernelcurry.com&utm_medium=referral&utm_campaign=running-lumen-on-google-app-engine), I stumbled across Google's App Engine.  If you have not read up on this solution, I would recommend it.

To get Laravel's Lumen running correctly on Google App Engine, there are a few questions that we need to answer.  Lets take these one at a time.

## How does the application know it is running on Google App Engine?
One of the easiest ways to figure out if the application is running on Google App Engine is to check if the `.env` file is present.  This is because the deployment "ignore" RegEx  includes any files that start with a `.` (AKA Unix hidden files).  This function will come in handy when answering the next questions.

```
/**
 * Check if we are running on Google App Engine
 *
 * NOTE: This is determined based on the .env file.  hidden files
 * (files starting with a dot) are not sent over to Google App
 * Engine on deploy.  This is because these files match the
 * Google App Engine ignore regex.
 *
 * Example Deploy Verbose Output:
 * `2015-08-19 15:10:11,380 INFO appcfg.py:2684 Ignoring
 * file '.env': File matches ignore regex.`
 *
 * @return bool
 */
function is_gae() {
    return !file_exists(__DIR__ . '/../.env');
}
```

## How do we make logs work with the Google console?
After researching how to get logs working with Google, a lot of people recommend editing vendor files.  Do not do this, let me repeat, **do not edit the vendor files**.  Let's take the more stable approach and override the function that is causing the issue.  

The first thing we need to do is create the class that will override the logging function.  We can do this by making a new class that extends `Laravel\Lumen\Application`.  Then we can  override the logging function.

*file: app/GoogleApp.php*

```
<?php namespace App;

/**
 * GoogleApp.php
 *
 * @author  michaelcurry
 */
use Laravel\Lumen\Application;
use Monolog\Handler\SyslogHandler;
use Monolog\Logger;

/**
 * Class GoogleApp
 *
 * @package App
 */
class GoogleApp extends Application
{
    /**
     * Get the Monolog handler for the application.
     *
     * @return \Monolog\Handler\AbstractHandler
     */
    protected function getMonologHandler()
    {
        return new SyslogHandler('intranet', 'user', Logger::DEBUG, false, LOG_PID);
    }
}
```

## How do we setup environment variables?
Just like normal, the `.env` file will be used for local environment variables. However, the `.env` file is not deployed to Google App Engine, so we need to find a work around.  The good news is `app.yaml` allows for environment variables.  And even better news, Google App Engine plays nice with these environment variables.

The most important thing to keep in mind is security.  Just as `.env` is ignored in our git repo, we want to ignore `app.yaml` as well.  With this file being excluded from version control, we want to make sure there is a template that users can follow.  We can make `app.yaml.example` that contains the structure with no credentials.  Then we can make `app.yaml` which is a copy of `app.yaml.example` with the correct credentials.

*file: app.yaml*

```
application: mtgapi-service
version: 1
runtime: php55
api_version: 1

handlers:
- url: /favicon\.ico
  static_files: public/favicon.ico
  upload: public/favicon\.ico

- url: /.*
  script: public/index.php

env_variables:
  APP_ENV: production
  APP_DEBUG: false
  APP_KEY: SomeRandomStringHere!!!
  APP_LOCALE: en
  APP_FALLBACK_LOCALE: en
  DB_CONNECTION: mysql
  DB_HOST: localhost
  DB_PORT: 3306
  DB_DATABASE0: homestead
  DB_USERNAME: homestead
  DB_PASSWORD: secret
  CACHE_DRIVER: file
  SESSION_DRIVER: file
  QUEUE_DRIVER: sync
```

## How do we set php.ini settings?

This one is very simple.  We just need to create a file in our application root called `php.ini`.  Here, you can set php.ini settings that will be used.  There are two settings I want to bring to your attention.

1. `google_app_engine.enable_functions` needs to be set to `php_sapi_name` for Lumen to work properly on Google App Engine.  
2. `google_app_engine.enable_curl_lite` needs to be set to `1` if you are using curl in any way.

*file: php.ini*

```
google_app_engine.enable_curl_lite = "1"
google_app_engine.enable_functions = "php_sapi_name"
```

## How does everything fit together?
Now that we have a function that lets us know when we are running on Google App Engine; have a new Google Application class; set our php.ini settings correctly; and have our environment variables set, all we need to do is put the puzzle pieces together.

To do this, we need to edit the file `bootstrap/app.php`.

1. Load the new Google application class if we are running on Google App Engine.
2. Don't load the default `.env` file if we are running on Google App Engine.

*file: bootstrap/app.php*

```
<?php

require_once __DIR__.'/../vendor/autoload.php';

/**
 * Check if we are running on Google App Engine
 *
 * NOTE: This is determined based on the .env file.  hidden files
 * (files starting with a dot) are not sent over to Google App
 * Engine on deploy.  This is because these files match the
 * Google App Engine ignore regex.
 *
 * Example Deploy Verbose Output:
 * `2015-08-19 15:10:11,380 INFO appcfg.py:2684 Ignoring
 * file '.env': File matches ignore regex.`
 *
 * @return bool
 */
function is_gae() {
    return !file_exists(__DIR__ . '/../.env');
}

/*
|—————————————————————————————————————
| Create The Application
|—————————————————————————————————————
|
| Here we will load the environment and create the application instance
| that serves as the central piece of this framework. We'll use this
| application as an "IoC" container and router for this framework.
|
*/

if(is_gae()) {
    $app = new App\GooglweApp(
        realpath(__DIR__ . '/../')
    );
}
else {
    Dotenv::load(__DIR__ . '/../');
    $app = new Laravel\Lumen\Application(
        realpath(__DIR__ . '/../')
    );
}
```

**Note:** This is the top of the file `bootstrap/app.php`.  The lines that state `$app->withFacades();` and `$app->withEloquent();` should immediately follow.

## How do we deploy?
Awesome! Now that we have everything ready to deploy, lets get this new Lumen project running on Google App Engine.  Keep in mind the following steps assume you are running Mac OSX.  You may have to do things a little differently if you are running Windows or Linux. 

1. Download the [Google App Engine Launcher](https://cloud.google.com/appengine/downloads?utm_source=kernelcurry.com&utm_medium=referral&utm_campaign=running-lumen-on-google-app-engine)
2. Open `GoogleAppEngineLauncher-*.*.*.dmg` and move `GoogleAppEngineLauncher.app` into your `Applications` folder
3. Open `GoogleAppEngineLauncher` and accept (click 'yes'/'accept') and pop-ups and enter your system password

From this point, we have to make a decision: do we want to deploy from `GoogleAppEngineLauncher` or the terminal?

#### Deploy From GoogleAppEngineLauncher
**Pro(s)**

- One click deploy
- Deploy multiple apps from a single application

**Con(s)**

- Application root folder must have the same name as the Google App Engine project ID
- Do not have the ability to use the full functionality of `appcfg.py` (the deployment command)

If you're going this route, please make sure the name of your application root folder is the same name as your Google App Engine project ID.  Now, let's get started:

1. Click the `+` button in the bottom left corner of the app
2. Enter your Application Id
3. Select the folder where your application root resides
4. Select Runtime as `PHP`
5. Click 'Create'
6. Highlight the newly created application from the list
7. Click the deploy button in the top right
8. Auth with Google (a webpage will pop up)

#### Deploy From Terminal
**Pro(s)**

- Ability to use full functionality of `appcfg.py` (the deployment command)

**Con(s)**

- You have to remember the command or at least make a bash script to run so you don't have to remember it

Congratulations! It looks like this isn't your first rodeo.  This is by far the most flexible way to deploy your application.

1. Open `terminal`
2. run `appcfg.py -A <application-id> update <application-root-path>`
3. Auth with Google (a webpage will pop up)

## Conclusion
We did it! Everything is running smoothly and you can access your new Lumen project at `http://app-id.appspot.com`

As we are now using Lumen on Google App Engine, there are a few other things that may need to be done to connect to your CloudSql Instance, use queuing, etc…  Stay tuned for more posts on topics like these.