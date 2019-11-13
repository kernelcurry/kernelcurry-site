---
title: 'From WordPress To Jekyll'
description: 'There are lots of pros and cons when it comes to WordPress vs Jekyll.  Just remember that every tool is used for different tasks and neither WordPress nor Jekyll can be declared 'better' as they are both good in different situations.'
date: '2014-09-08T00:00:00.000Z'
draft: false
---

## Pros and Cons

There are lots of pros and cons when it comes to WordPress vs Jekyll.  After looking through this list you might decide that Jekyll is not for you, and that is fine.  Just remember that every tool is used for different tasks and neither WordPress nor Jekyll can be declared "better" as they are both good in different situations.

#### Jekyll Pros
- Speed : No PHP is called or needs to be executed.  A static HTML page is served and that removes a lot of overhead on the server.
- Free Hosting : Jekyll sites can be hosted on GitHub for free. (This site is hosted on GitHub)
- Markdown Pages / Posts : All pages and posts can be written in Markdown.

#### Jekyll Cons
- No back-end or WYSIWYG : Everything is created / edited in a text editor.
- No user management : Unless you count GitHub user management.
- Not as many plugins : Many do exist, but they are not in a central repository like WordPress.

I am sure there are hundreds of other pros and cons that could be listed, but I am trying to keep it simple.  If there is something huge I missed, please send me a tweet and I will get it added.

## Setting Up Jekyll on GitHub

Setting up a website has never been so simple.  Let's break this process down into steps.

1. Go to [jekyllrb.com](http://jekyllrb.com/) and follow the quick start guide (it is only 4 commands).
2. Create a new GitHub Repository.  Make sure this is a public repo.
3. Create a new branch in your repository named 'gh-pages' (make sure to push master and gh-pages to GitHub).
4. Go to: http://{username}.github.io/{repository-name}/ to make sure it is up and running.
	- It could take up to 10 minutes to deploy after pushing to the branch 'gh-pages'.
	- You can check to make sure the site is being deployed by going into your repository settings and looking under the 'GitHub Pages' section.


That is it! Your new website is up and running.  Now you need to get it running on your domain (example.com).  The documentation for this section can be found at [help.github.com](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages).  All that you need to do is create a file named 'CNAME' with your domain in it and change your DNS to point at the GitHub servers.

## Copying Over The Posts

This is the part that could take a lot of time.  Every post in WordPress will need to be converted into markdown or HTML.  As I write all of my blog posts in markdown before posting them, it took me almost no time to clean them up and pot them into Jekyll.

Luckily there are a few options for exporting from Wordpress.
- [WordPress to Jekyll Exporter Plugin](https://github.com/benbalter/wordpress-to-jekyll-exporter)
- [Jekyll Import Gem](http://import.jekyllrb.com/docs/home/)

Now that all of your posts are in markdown, we just need to make sure the Jekyll headers and filenames are correct.  Below is a sample header that must start on line 1 of the post file.

<pre><code class="ruby">---
layout: post
title:  "From WordPress To Jekyll"
date:   2014-09-08
categories: blog
---
</code></pre>

As you can see, I have this post in category 'blog'.  This will make the URL to this post start with '/blog/'. If you put nothing in the category, it will not have a prefix to the URL.

Now it is time to save the post. Each post must be saved with a specific file name.  The format looks like this: '{YEAR}-{MONTH}-{DAY}-title.md' (Example: '2014-09-08-wordpress-to-jekyll.md').  This is important because the filename is what determines the URL of the post.  Make sure to save all posts in the '_posts' directory.

##  Working Locally

It can be a pain to keep pushing to GitHub to check site.  Fortunately, Jekyll has a build-in server that allows you to check you work locally before pushing your changes. Just run `jekyll serve --watch` and your site will be available at http://localhost:4000.  By using the `--watch` option in the command, it will check for your changes and regenerate the changed pages on the fly.  Just keep in mind; If you change and configuration files, you will need to restart the server for those changes to take effect.

## Conclusion

If you decide to switch from WordPress to Jekyll, I hope this short guide helps you along the way.  If you're having trouble with the migration, please check out these recourses: [Jekyll Documentation](http://jekyllrb.com/docs/home/), [IRC #jekyll](http://webchat.freenode.net/), [StackOverflow](http://stackoverflow.com/questions/tagged/jekyll), [@jekyllrb on Twitter](https://twitter.com/jekyllrb)
