---
title: 'How To Make An Object Oriented WordPress Plugin'
description: 'You just learned how to create a simple WordPress plugin, and now you hear people talking about how WordPress is becoming more object-oriented. What does that mean? Lets take a step back and start with the basics.'
date: '2014-02-05T00:00:00.000Z'
draft: false
---

You just learned how to create a simple WordPress plugin, and now you hear people talking about how WordPress is becoming more object-oriented. What does that mean? Lets take a step back and start with the basics.

Most simple WordPress plugins are written using procedural programming. This means that your code excited from top to bottom; calling functions and setting variables along the way. A prime example of this is the default WordPress plugin: [Hello Dolly](https://github.com/WordPress/WordPress/blob/7ee6ad566d5b28bcbb105432f1dbf06751c1aeda/wp-content/plugins/hello.php). Lets take this simple plugin and restructure it to be object-oriented.

### Step 1: The Class

There are a few parts of an object in object-oriented programming that you will need to know. The first of being the “Class”. A Class is the object wrapper. For example we are going to make a Class with the name HelloDolly. We can call this Class by setting a variable equal to a new instance of the class. This is done by using the reserved word ‘new’ before the Class name.

<pre><code class="php">Class HelloDolly
{
	...
} // End Class

$hello_dolly_oop = new HelloDolly;
</code></pre>

Step 2: The Constructor

Once the class is created we need to put in the classes constructor. The constructor will be called when the Class is instantiated. In other words, this is the ‘main’ function of the Class.

<pre><code class="php">Class HelloDolly
{
	public function __construct()
	{
		...
	}

} // End Class

$hello_dolly_oop = new HelloDolly;
</code></pre>

Step 3: The Functions

Next lets simply add in the functions of the plugin. There will be some changes to these functions in step 4, but for now just copy and paste them into the Class.

<pre><code class="php">Class HelloDolly
{
	public function __construct()
	{
		...
	}

	public function hello_dolly()
	{
		...
	}

	public function dolly_css()
	{
		...
	}

	public function hello_dolly_get_lyric()
	{
		...
	}

} // End Class

$hello_dolly_oop = new HelloDolly;
</code></pre>

Step 4: Using $this

This leads us to the last step: calling the functions within the Class. There are two lines that start with ‘add_action(‘. These lines are going to be placed into the constructor of the Class, but need to changed slightly. The function name that is being called needs to be instructed to call the function within the Class. To do this wrap the function name in an array with the first element in the array being the variable $this. The variable $this is a variable that is automatically set when the Class is instantiated. It reverences the current Class. This trick also needs to be done in one other place, but in a slightly different way. when calling the ‘hello_dolly_get_lyric’ function, call it using $this->hello_dolly_get_lyric();

<pre><code class="php html">Class HelloDolly
{
	public function __construct()
	{
		add_action( 'admin_head', array( $this, 'dolly_css' ) );
		add_action( 'admin_notices', array( $this, 'hello_dolly' ) );
	}

	public function hello_dolly()
	{
		$chosen = $this->hello_dolly_get_lyric();
		echo "&lt;p id='dolly'&gt;$chosen&lt;/p&gt;";
	}

	public function dolly_css()
	{
		...
	}

	public function hello_dolly_get_lyric()
	{
		...
	}

} // End Class

$hello_dolly_oop = new HelloDolly;
</code></pre>

I hope this very simple tutorial has helped your understanding of how an object-oriented WordPress plugin can be created. I have taken the liberty of cleaning up the code within the plugins function. This Code is on GitHub: [https://gist.github.com/michaelcurry/8819401](https://gist.github.com/michaelcurry/8819401)
