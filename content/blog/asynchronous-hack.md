+++
title = "Asynchronous Functions In Hack"
description = "The ability for PHP programs to execute asynchronous functions… Yeah, I said it and now it exists. By coding in Facebook’s new Hack Language, using your CPU’s cycles correctly has never been so easy. Let’s delve into this new language head first!"
date = 2014-04-22
draft = false
+++

The ability for PHP programs to execute asynchronous functions… Yeah, I said it and now it exists. By coding in Facebook’s new Hack Language, using your CPU’s cycles correctly has never been so easy. Let’s delve into this new language head first!

<pre><code class="php">/**
* This function calls async functions
*/
function main() : void
{
    echo '[main] Calling Async Function'."\n";
    $asyncCall = getInfo();

    echo '[main] Triangulating Atlantis'."\n";
    echo '[main] Calculating the Meaning Of Life'."\n";
    echo '[main] Triangulating Atlantis'."\n";

    echo '[main] Time To Request Async Return Information'."\n";
    $output = $asyncCall->join();

    // Output Vector Data
    foreach ($output as $key => $value)
    {
        echo '['.$key.'] => '.$value."\n";
    }
}
</code></pre>

As can be see, this function is no different than any normal PHP function. The only thing you have to notice is the function ‘join()’ called on line 14. This function calls the data from the asynchronous function initialized on line 7.

<pre><code class="php">/**
* This async function calls more async functions
*
* @return Vector<T>
*/
async function getInfo() : Awaitable&lt;Vector&lt;T&gt;&gt;
{
    $info = Vector {};

    for ($i = 0; $i < 5; $i++)
    {
        $info[] = genInfo($i);
    }

    echo '[getInfo] Now Awaiting'."\n";

    return await GenVectorWaitHandle::create($info);
}
</pre></code>

Note the async attribute of the function. This lets the compiler know the function is an asynchronous function. Secondly note the Awaitable return type. This will allow the function to use the ‘await’ reserved word.

The ‘await’ token tells the function that everything preceding runs asynchronously but has to wait for $info to be completed before continuing.

<pre><code class="php">/**
* This async function generates information
*
* @return String
*/
async function genInfo(int $id): Awaitable&lt;String&gt; {
    echo '[getInfo] Generating '.$id."\n";

    $tmp = [];
    $tmp['id'] = $id;
    $tmp['start'] = date('H:i:s');

    await SleepWaitHandle::create(mt_rand(1000000,5000000));

    $tmp['end'] = date('H:i:s');

    echo "[getInfo] Completed $id\n";

    return json_encode($tmp);
}
</code></pre>

This function just sets a random time for ‘calculations’ to be completed to simulate work that could be done. The reason this function exists is to save the start and end times of the function.

The last thing that must be noted about these function is the WaitHandle. This allows async function to call other functions asynchronously.

Below is the final output. The last 5 lines say it all!

<pre><code class="php">[main] Calling Async Function
[getInfo] Generating 0
[getInfo] Generating 1
[getInfo] Generating 2
[getInfo] Generating 3
[getInfo] Generating 4
[getInfo] Now Awaiting
[main] Triangulating Atlantis
[main] Calculating the Meaning Of Life
[main] Triangulating Atlantis
[main] Time To Request Async Return Information
[getInfo] Completed 2
[getInfo] Completed 0
[getInfo] Completed 4
[getInfo] Completed 1
[getInfo] Completed 3
[0] => {"id":0,"start":"22:20:34","end":"22:20:36"}
[1] => {"id":1,"start":"22:20:34","end":"22:20:37"}
[2] => {"id":2,"start":"22:20:34","end":"22:20:35"}
[3] => {"id":3,"start":"22:20:34","end":"22:20:39"}
[4] => {"id":4,"start":"22:20:34","end":"22:20:36"}
</code></pre>

All said and done, this is the feature that made me want to start using Hack as a production language. Even if this language crashes and burns, like too many in the past, this feature alone allows me to be hopeful for the future.

Github: [https://github.com/kernelcurry/hack-examples/blob/master/async.php](https://github.com/kernelcurry/hack-examples/blob/master/async.php)
