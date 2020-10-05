---
title: Instructions
course: c_beginners
section: "Introduction"
layout: lesson
---

Now that we have written a few programs, let's look at the instructions we have
used in them. There are basically three types of instructions in C:

* Type Declaration Instruction
* Arithmetic Instruction
* Control Instruction

The purpose of each of these instructions are given below:

* Type Declaration Instruction

  `To declare the type of variables used in a C program`

* Arithmetic Instruction

  `To perform arithmetic operations between constants and variables`

* Control Instruction

  `To control the sequence of execution of various statements in a C program`

Since the elementary C programs would usually contain only the type declaration
and the arithmetic instructions; we would discuss only these two instructions at
this section, the other types of them will be discussed in detail in the
subsequent sections.

## Type Declaration Instruction

This instruction is used to declare the type of variables being used in the
program. Any variable used in the program must be declared before using it in
any statement. The type declaration statement is written at the beginning of the
**main()** function. Example:

```c
int bas;
float rs, grossal;
char name, code;
```

There are several stable variations of the type declaration instruction. These
are discussed below:

* While declaring the type of variable, we can also initialise it

  ```c
int i = 0, j = 25;
float a = 1.5, b = 1.99 + 2.4 * 1.44;
  ```

* The order in which we define the variables is important sometimes, some other
  don't. Example:

  ```c
int i = 10, j = 25;
  ```

  Is the same as:

  ```c
int j = 25, i = 10;
  ```

  However,

  ```c
float a = 1.5, b = a + 3.1;
  ```

  Is right, but

  ```c
float b = a + 3.1, a = 1.5;
  ```

  Is not. This is because we are trying to use **a** even before defining it.

* The following statements would work:

  ```c
int a, b, c;
a = b = c = 10;
  ```

  However, the following statement would not work:

  ```c
int a = b = c = 10;
  ```

  Once again, we are trying to use **b** (to assign to **a**) before defining
  it.

## Arithmetic Instruction

An arithmetic instruction consists of a variable name on the left hand side of
an **=** and variable names and constants on the right hand side of **=**. The
variables and constants appearing on the right hand of **=** are connected by
arithmetic operators like **+**, **-**, * and **/**. Example:

```c
int ad;
int kot, delta, alpha, beta, gamma;
ad = 3200;
kot = 0.0056;
deta = alpha * beta / gamma + 3.2 * 2 / 5;
```

Here:

- **/**, **-**, * and **+** are the arithmetic operator
- **=** is the assignment operator
- **2**, **5** and **3200** are integer values
- **3.2** and **0.0056** are real values
- **ad** is an integer value
- **kot**, **delta**, **alpha**, **beta** and **gamma** are real variables

The variables and constants together are called "_operands_" that are operated
upon by the "arithmetic operators" and the result is assigned, using the
assignment operator to the variable on the left-hand side.

A C arithmetic statement could be of three types.

1. Integer mode arithmetic statement. This is an arithmetic statement in which
   all the operands are either integer variables or integer constants. For
   example:

   ```c
int i, king, issac, noteit;
i += 1;
king = issac * 234 + noteit - 7689;
   ```

2. Real mode arithmetic statement. This is an arithmetic statement in which all
   the operands are either real constants or real variables. For example:

   ```c
float qbee, antink, si, prin, anoy, roi;
qbee = antink + 23.123 / 4.5 * 0.3442;
si = prin * anoy * roi / 100.0;
   ```

3. Mixed mode arithmetic statement. This is an arithmetic statement in which
   some of the operands are integers and some of the operands are real. For
   example:

   ```c
float si, prin, anoy, roi, avg;
int a, b, c, num;
si = prin * anoy * roi / 100.0;
avg = (a + b + c + num) / 4;
   ```

It is very important to understand how the execution of an arithmetic statement
takes place. Firstly, the right hand side is evaluated using constants and the
numerical values stored in the variable names. This value is then assigned to
the variable on the left-hand side.

Though arithmetic instructions look simple to use, we often commit mistakes when
writting them down. Let's take a closer look at these statements.

* C allows only one variable on the left-handed side of **=**. That is, **z = k
  / l** is legal, where as **k * l = z** is illegal.
* In addition to the division operator, C also provides a modular division
  operator. This operator returns the remainder on dividing one integer with
  another. Thus, the expression **10 / 2** yields 0, whereas **10 % 2** yields 0.
  Note that the modulus operator (**%**) cannot be applied on a float. Also
  note that on using the **%** the sign of the remained is always the same as
  the sign of the numerator. Thus, **-5 % 2** yields -1, where as **5 % -2**
  yields 1.
* An arithmetic instruction is often used for storing character constants in
  character variables.

  ```c
char a, b, d;
a = 'F';
b = 'G';
d = '+';
  ```

  When we do this, the ASCII values of the characters are stored in the
  variables. ASCII values are used to represent any character in memory. The
  ASCII values of '**F**' and '**G**' are 70 and 71.

* Arithmetic operations can be performed on **int**s, **float**s, and **char**s.

  Thus, the statements:

  ```c
char x, y;
int z;
x = 'a';
y = 'b';
z = x + y;
  ```

  are perfectly valid, since the addition is perform on the ASCII values of the
  characters and not on the characters themselves. The ASCII values of 'a' and
  'b' are 97 and 98. Hence, they can definitely added.

* No operator is assumed to be present. It must be written explicitly. In the
  following example, the multiplication operator after b must be explicitly
  written:

  ```c
a = c.d.b(xy) // Usual arithmetic statement
a = c * d * b * (x * y) // C Arithmetic statement
  ```

* Unlike other high level languages, there is no operator for e=performing
  exponentiation operator. Thus, following statements are invalid:

  ```c
a = 3 ** 2;
b = 3 ^ 2;
  ```

  If we want to do the exponentiation, we can get it done this way:

  ```c
#include <math.h>
int main() {

  int a;
  a = pow(3, 2);
  printf("%i\n", a);
  return 0;
}
  ```

Here the **pow()** function is a standard library function. It is being used to
raise 3 to the power of 2. **#include <math.h>** is a preprocessor directive. It
is being used here to ensure that the **pow()** function works correctly.
