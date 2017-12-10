+++
title = "Array Manipulation in PHP, The Correct Way"
description = "More often than not, when PHP developers debug others’ code, the majority of each method is taken up by array manipulations. Spending this much time on array manipulations is a huge hassle when trying to understand any given method."
date = 2013-10-31
+++

*UPDATE:* Migrated from a [post](https://web.archive.org/web/20140718092350/http://leve.rs:80/blog/correct-array-manipulation-in-php/) I wrote when working on leve.rs

---

More often than not, when PHP developers debug others’ code, the majority of each method is taken up by array manipulations. Spending this much time on array manipulations is a huge hassle when trying to understand any given method.

In order to speed up the debugging process, it’s important to start writing array manipulations the correct way, first. Here are a few examples of code I have either written myself or had to fix in the past. It is time every PHP developer knows how to manipulate arrays properly!

### Merging Arrays

The seemingly simple merging of arrays is something that comes up all the time. The first code snippet is something that is seen all the time (long way, wrong way). The second takes advantage of PHP’s array functions.

##### The Wrong Way

```
// Init Arrays
$arrayMerged = [];
$arrayOne = [1, 2, 3];
$arrayTwo = [4, 5, 6];

// Merge arrayOne
foreach ($arrayOne as $element)
{
        $arrayMerged[] = $element;
}

// Merge arrayTwo
foreach ($arrayTwo as $element)
{
        $arrayMerged[] = $element;
}

// Print
var_dump($arrayMerged);
```

##### The Correct Way

```
// Init Arrays
$arrayOne = [1, 2, 3];
$arrayTwo = [4, 5, 6];

// Merge Arrays
$arrayMerged = array_merge($arrayOne, $arrayTwo);

// Print
var_dump($arrayMerged);
```

By simplifying these lines, the code is not only more readable, it eliminates 10 lines!

### Array Value Manipulation

No mater how many times you look at code, you will always find foreach statements that do not need to be there. To be fair, in some cases foreach statements are the way to go, but not all the time. The below example “slug-ifies” the array values.

##### The Wrong Way

```
// Init Arrays
$arrayAfter = [];
$arrayBefore = ['John Doe', 'Michael Smith', 'Alice Staples'];

// Sanitize everything
foreach($arrayBefore as $element)
{
        $element = preg_replace('/[^A-Za-z0-9-]+/', '-', $element);
        $element = strtolower($element);
        $arrayAfter[] = $element;
}

// Print
var_dump($arrayAfter);
```

##### The Correct Way

```
// Init Arrays
$arraySlugs = ['John Doe', 'Michael Smith', 'Alice Staples'];

array_walk($arraySlugs, function(&amp;$element)
{
        $element = preg_replace('/[^A-Za-z0-9-]+/', '-', $element);
        $element = strtolower($element);
});

// Print
var_dump($arraySlugs);
```

As can be seen, the solution using array_walk manipulates the existing array. This means you do not have to instantiate another array, thus, saving resources. There are many different solutions to this particular problem, but this is one solution that is easy to read.

### Array Value Manipulation Continued

Although the previous examples are very common and good to know, this example is something that will actually cause errors. It is very apparent when people do not know the difference between array_merge() and the ‘+’ operator when it comes to arrays. Lets look at the code first.

#####  Know the Difference

```
// Init Arrays
$arrayOne = ['one' => 1, 'two' => 2, 'three' => 3];
$arrayTwo = ['one' => 9, 'two' => 9, 'four' => 4];

var_dump($arrayOne + $arrayTwo);
var_dump(array_merge($arrayOne, $arrayTwo));
```

Using the ‘+’ operator with an array will only merge elements for keys that don’t already exist. This means that if arrayOne has keys ’0′ and ’2′ and arrayTwo has keys ’0′, ’1′ and ’2′ the returned array will contain arrayOne’s keys ’0′ and ’2′ with arrayTwo’s key ’1′

The array_merge function merges arrayTwo into arrayOne. In other words, all elements from arrayTwo will overwrite values with the same key in arrayOne.

##### Output

```
// ($arrayOne + $arrayTwo)
array(4) {
        ["one"]   => int(1)
        ["two"]   => int(2)
        ["three"] => int(3)
        ["four"]  => int(4)
}
// array_merge($arrayOne, $arrayTwo)
array(4) {
        ["one"]   => int(9)
        ["two"]   => int(9)
        ["three"] => int(3)
        ["four"]  => int(4)
}
```

Array manipulation is something every programmer should know. By understanding the available functions, your life will become easier and your code more elegant. Take the time to rewrite your code the correct way – It’s definitely worth it!