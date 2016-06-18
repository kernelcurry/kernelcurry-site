---
categories: project
title: "BNF First and Follow Sets Finder"
active: 0
language: java
external_url: https://github.com/michaelcurry/cse340-first-and-follow-sets
description: "Easily find all BNF first and follow sets given grammar"
---

NOTE: This was a class assignment for CSE340 (Operating Systems) at Arizona State University.

This project implements lexical analyzer on a given language then finds the first and follow sets of a given BNF grammar basted on the given language.

##Compilation & Execution Instructions
>####Compile
- Execute 'make.sh' in the root directory of the project.

>####Execute
- Execute 'run.sh' in the root directory of the project with an input file as an argument.

##Documentation
>####Usage:
```run.sh <input file path>```

>####Output:
- Output files are saved in the 'output' directory.
- The naming convention for this files is: ```<input file basename>.out```

##Directory Structure
```
root    Project root directory
	|___bin		Contains compiles project files
	|___input  	Contains example input files
	|___output 	Contains generated output files
	|___src		Contains project source files
```
