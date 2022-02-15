---
draft: false

title: "2 Dimensional Array To CSV Download Using PHP"
abstract: "Have you ever needed to convert a 2 dimensional array into a CSV then force a download?  Well, I have, and here is how I did it..."
date: 2014-01-28T00:00:00.000Z
image: "main.jpg"
---

Have you ever needed to convert a 2 dimensional array into a CSV then force a download? Well, I have, and here is how I did it:

### Array

Every internal array must have the same keys. These keys may be set to null, but the key must exist. Below is a sample array that we can work with through this example.

``` php{numberLines: false}
[
    [
        'title'=>'How to be Good at Life',
        'author'=>'@GRTaylor2',
        'url'=>'https://medium.com/better-humans/56302026d56e'
    ],
    [
        'title'=>'Clean URLs for Good SEO',
        'author'=>'@ChuckReynolds',
        'url'=>'http://rynoweb.com/clean-urls-good-seo/'
    ]
]
```

### Code

The code (below) takes the array (above) and converts it into a CSV string with the keys being the header row. After the string is generated, it is placed into output buffer then forced to be downloaded by the browser.

``` php{numberLines: false}
// Generate Array.
$array = [ /* Array From Above */ ];

// Clear Output Buffer
ob_clean();
header("Content-type: text/x-csv");
header("Content-Transfer-Encoding: binary");
header("Content-Disposition: attachment; filename=csv".date('YmdHis',strtotime('now')).".csv");
header("Pragma: no-cache");
header("Expires: 0");

// Generate CSV in Memory
$file = fopen('php://temp/maxmemory:'. (12*1024*1024), 'r+'); // 128mb

// Write CSV to memory
fputcsv($file, array_keys(call_user_func_array('array_merge', $array)));
foreach($csv as $row)
{
    fputcsv($file, $row);
}

// Fetch CSV contents
rewind($file);
$output = stream_get_contents($file);
fclose($file);

// Echo CSV
echo $output;
die();
```

### Output

Once the CSV is generated, it will be downloaded. This is what the CSV file will look like:

``` text{numberLines: false}
title,author,url
"How to be Good at Life",@GRTaylor2,https://medium.com/better-humans/56302026d56e
"Clean URLs for Good SEO",@ChuckReynolds,http://rynoweb.com/clean-urls-good-seo/
```

CSV output is an annoying part of reporting in PHP. Hopefully this simple solution makes it easier in the future.