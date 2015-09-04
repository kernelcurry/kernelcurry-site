---
layout: post
categories: blog
title: "Why You Should Use C with PHP"
date: 2014-01-07
image: /img/blog/2014-01-07-why-you-should-use-c-with-php/main.jpg
description: "A few months ago, I calculated the top Magic: The Gathering cards in the games modern format ... It took 30 minutes in PHP.  How long would it take in C?"
redirect_from:
  - "/blog/why-you-should-use-c-with-php.html"
  - "/blog/why-you-should-use-c-with-php/"
---

A few months ago, I calculated the top Magic: The Gathering cards in the games modern format [[LINK]](http://leve.rs/?utm_source=kernelcurry&utm_medium=referral&utm_campaign=using+historical+data+to+rank+the+top+magic+the+gathering+cards&utm_term=blog). This was accomplished using pure PHP. In total it took about 30 minutes to calculate. With a 30 minute runtime, I wanted to find a faster way to crunch the numbers. What better way than to use C.

As I did not want to spend the time rewriting code if it did not make a difference, I thought I would use a simple application for this experiment: Calculating the nth term of the fibonacci sequence.

### Results
To start, let’s look at the big picture. the graph below shows the runtime in micro seconds of executing pure PHP & PHP using C from term 0 to 100,000 tested every 1000 terms.

fibonacci-100000.png [Image Missing]

As can been seen, there is a huge difference in runtime between the 2 applications. With lots of calculations, using pure PHP does not stand a chance against its counterpart of using C to do the heavy lifting.

Although there is a huge difference when calculating a large term, let’s drill down a little deeper. This next graph shows the runtime of the nth term being calculated from 0 to 1000 tested every term.

fibonacci-1000.png  [Image Missing]

It looks like there is a grace period where pure PHP out performs PHP using C. When calculating the terms 0 to 728 using pure PHP is faster. But, you are only saving, at most, 6000 microseconds (0.006 Seconds).

### Conclusion
Although using C to do the heavy lifting of calculations is overall faster, it may be overkill for some situations. But when it comes down to brass tacks, I am going to use C.

### Specifics
Source Code: [kernelcurry/fibonacci-php-c](https://github.com/kernelcurry/fibonacci-php-c)

Computer: All tests were completed on a Macbook Air.

Data Collected: All data was collected using [xhprof](https://github.com/facebook/xhprof)

Data Points: Tests were run 4 times at each data point.