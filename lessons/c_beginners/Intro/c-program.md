---
title: The first C program
course: c_beginners
section: "Introduction"
layout: lesson
---

Armed with the knowledge about the types of variables, constants and keywords
the next logical step is to combine them to form instructions. However, instead
of this, we would write our first C program now. Once we have done that, we
would see in detail the instructions that it made use of.

Before we begin with our first C program, remember the following rules that are
applicable to all C programs:

1. Each instruction in a C program is written as a separate statement.
   Therefore, a complete C program would comprise of a series of statements.
2. The statements in a program must appear in the same order in which we wish
   them to be executed; unless of course the logic of the problem demands a
   deliberate "_jump_" or transfer of control to a statement which is out of
   sequence.
3. Blank spaces may be inserted between two words to improve the readability of
   the statement. However, no blank spaces are allowed within a variable,
   constant or keyword.
4. All statements are entered in lower case letters.
5. C has no specific rules for the position at which a statement is to be
   written. That's why it is often called a free-form language.
6. Every C statement must end with a "**;**". Thus, **;** acts as a statement
   terminator.

Let us now write down our first C program. It would simply calculate simple
interest for a set of values representing principle, number of years and rate of
interest.

```c
/**
 * Calculation of simple interest
 * Author: gekay - Date: 25/05/2004
 * Modified by: Sarah - Date: 2020-10-02
 */

#include <stdio.h>

int main() {
  int principle, noy;
  float rate, si;

  principle = 1000;
  noy = 3;
  rate = 8.5;

  // Formula for simple interest
  si = principle * noy * rate / 100;

  printf("%f\n", si);

  return 0; // 0 represents success
}
```

Now a few useful tips about the program:

* There are two types of comments:
  - Multiline (/* */)
  - Single line ("//")

  Comments should be used for explain parts of your code as they will be ignored
  by the compiler
* The multiline comments not neccesarily needs to be multiline, you can create
  them at any place in your code (as long as it contents is enclosed in "/*
  */"), for example:
  ```c
/* Formula */ si = principle * noy * rate / 100;
si = principle * noy * rate / 100; /* Formula */
si = principle * noy * rate / /* Formula */ 100;
  ```
* Sometimes, it is not so obvious as to what a particular statement in a program
  accomplishes. At such times, it is worthwhile mentioning the purpose of the
  statement (or a set of statements) using a comment. For example:
  ```c
// Formula for simple interest
si = principle * noy * rate / 100;
  ```
* Often, programmers seem to ignore writing of comments. But when a team is
  building up big software, well commented code is almost essential for other
  team members to understand it.
* Although a lot of comments are probably not necessary in this program, it is
  usually the case of programmers that tend to use too few comments rather than
  too many. An adequate number of comments can save hours of misery and
  suffering when you later try to figure out what the program does.
* The normal language rules do not apply to text written within **/* */**. Thus,
  we can type this text is lower case, capital or a combination.
* Comments cannot be nested. For example:
  ```c
/* Calculation of simple interest
  /*
    Author: sam - date 01/01/01
  */
*/
  ```

  Is invalid.
* **int main()** is a collective name given to a set of statements. This name
  has to be **main**, it cannot be anything else. All statements that belong to
  **main** are enclosed within a pair of braces **{** **}** as shown below:

  ```c
int main() {
  statement 1;
  statement 2;
  statement 3;
}
  ```
* Technically speaking, **main** is a function. Every function has a pair of
  parenthesis **(** **)** associated with it. We would discuss functions and
  their working in great detail later.

* Any variable used in the program must be declared before using it. For
  example:

  ```c
int principle, noy;
float rate, si;
  ```

* Any C statement always ends with a "**;**". For example:

  ```c
float r, si;
r = 8.5;
  ```

* In the statement:

  ```c
si = principle * noy * rate / 100;
  ```

  _*_ and **/** are arithmetic operators. The arithmetic operators available in
  C are **+**, **-**, * and **/**. C is very rich in operators. There are about
  45 operators available in C. Surprisingly there is no operator for
  exponentiation... A slip, which can be forgiven considering the fact that C
  has been developed by an individual and not by a committee.

* Once the value **si** is calculated it needs to be displayed on the screen.
  Unlike other languages, C does not contain any instruction to display output
  on the screen. All printed output is achieved by using readymade library
  functions. One such function is **printf()**. We have used it to display on
  the screen the value contained in **si**.

  The general form of **printf** function is:

  ```c
printf("<format string>", <list of variables>);
  ```

  "format string" can contain:

  - **%f** for printing real values
  - **%d** for printing integer values
  - **%c** for printing character values

  In addition to format specifiers like **%f**, **%d** and **%c** the format
  string may also contain any other characters. These characters are printed as
  they are when the **printf** function is called.

  Following are some examples of the usage of the **printf** function:

  ```c
printf("%f", si);
printf("%d %d %f %f", principle, noy, rate, si);
printf("Simple interest = Rs. %f", si);
printf("Principle = %d\nRate = %f\n", principle, rate);
  ```

  The output of the last statement would look like this:

  ```
Principle = 1000
Rate = 8.5
  ```

  What is "**\n**"doing in this statement? It is called newline and it takes the
  cursor to the next line. Therefore, you get the output split over two lines.
  "**\n**" is one of the several Escape Sequences available in C.

  **printf** can not only print values of variables, it can also print the
  result of an expression. An expression is nothing but a valid combination of
  constants, variables and operators. Thus, 3, 3 + 2, c and a + b * c - d all
  are valid expressions. The results of these expressions can be printed as
  shown below:

  ```c
printf("%d %d %d %d", 3, 3 + 2, c, a + b * c - d);
  ```

  Note that **3** and **c** also represent valid expressions.
