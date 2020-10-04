---
title: Compilation and Execution
course: c_beginners
section: "Introduction"
layout: lesson
---

Once you have written the program you need to type it and instruct the machine
to execute it. To type your C program you need another program called Editor.
Once the program has been written, it needs to be converted to machine language
(0s and 1s) before the machine can execute it. To carry out this conversion we
need another program called Compiler. Compiler vendors usually provide an
Integrated Development Environment (IDE) which consists of an Editor as well as
the Compiler.

There are several such IDEs available in the market targeted towards different
operating systems. For example, Visual Studio for Microsoft Windows and gcc for
Linux. Most of the programs in this book will work with all the compilers.

Assuming you are running gcc over Linux, go to your program's directory by using
a terminal and type:

```c
gcc {Filename}
```

Replacing "**{Filename}**" with the name of the file of your program. When the
compilation process ends, it will return another file (if not output name was
specified then it would be "**a.out**") which is written in machine language.
You can execute the returning new file. If we copy that file to another computer
we can execute it there without being required to recompile it. In fact, the
other machine doesn't even need to have a compiler to be able to execute the
file.
