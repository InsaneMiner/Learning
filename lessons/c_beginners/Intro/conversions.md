---
title: Integer and Float Conversions
course: c_beginners
section: "Introduction"
layout: lesson
---

In order to effectively develop C programs, it will be necessary to understand
the rules that are used for the implicit conversion of floating point and
integer values in C. These are mentioned below.

* An arithmetic operation between an integer and integer always yields an
  integer result
* An operation between a real and real always yields a real result
* An operation between an integer and real always yields a real result. In this
  operation, the integer is first promoted to a real and then the operation is
  performed. Hence, the result is real.

A few practical examples are shown in the following table:

| Operation | Result | Operation | Result |
| --------- | ------ | --------- | ------ |
| 5 / 2 | 2 | 2 / 5 | 0
| 5.0 / 2 | 2.5 | 2.0 / 5 | 0.4
| 5 / 2.0 | 2.5 | 2 / 5.0 | 0.4
| 5.0 / 2.0 | 2.5 | 2.0 / 5.0 | 0.4

## Type Conversion in Assignments

It may so happen, that the type of the expression and the type of the variable
on the left-hand side of the assignment operator may not be same. In such a
case, the value of the expression is promoted or demoted depending on the type
of the variable on left-hand side of "**=**".

For example, consider the following assignment statements:

```c
int i;
float b;
i = 3.5;
b = 30;
```

Here, in the first assignment statement though the expression's vlue is a
**float** (3.5) it cannot be stored in **i** as it is an **int**. In such a
case, the **float** is demoted to an **int** and then its value is stored.
Hence, what gets stored in **i** is _3_. Exactly opposite happens in the next
statement. Here, **30** is promoted to **30.000000** and then stored in **b**,
since **b** is a float variable, it cannot hold anything but a **float**
value.

Instead of a simple expression used in the above examples, if a complex
expression occurs, still the same rules apply. For example, consider the
following program fragment:

```c
float a, b, c;
int s;
s = a * b * c / 100 + 32 / 4 - 3 * 1.1;
```

Here, in the assignment statement some operands are **int**s whereas others are
**float**s. As we know, during evaluation of the expression, the **int**s would
be promoted to **float**s and the result of the expression would be a **float**.
But when this **float** value is assigned again to **s**, it is demoted to an
**int** and then stored in **s**.

Observe the following arithmetic statements. It's been assumed that **k** is an
integer variable and **a** is a real variable.

| Arithmetic Instruction | Result | Arithmetic Instruction | Result |
| ---------------------- | ------ | ---------------------- | ------ |
| k = 2/ 9               | 0      | a = 2 / 9              | 0.0    |
| k = 2.0 / 9            | 0      | a = 2.0 / 9            | 0.2222 |
| k = 2 / 9.0            | 0      | a = 2 / 9.0            | 0.2222 |
| k = 2.0 / 9.0          | 0      | a = 2.0 / 9.0          | 0.2222 |
| k = 9 / 2              | 4      | a = 9 / 2              | 4.0    |
| k = 9.0 / 2            | 4      | a = 9 / 2              | 4.5    |
| k = 9 / 2              | 4      | a = 9.0 / 2            | 4.5    |
| k = 9 / 2.0            | 4      | a = 9 / 2.0            | 4.5    |
| k = 9.0 / 2.0          | 4      | a = 9.0 / 2.0          | 4.5    |

Note that though the following statements give the same result, **0**, the
results are obtained differently.

```c
k = 2 / 9;
k = 2.0 / 9;
```

In the first statement, since both 2 and 9 are integers, the result is an
integer, i.e. **0**. This **0** is then assigned to **k**. In the second
statement **9** is promoted to **9.0** and then the division is performed. The
division yields 0.222222. However, this cannot be stored in **k**, **k** being an
**int**. Hence, it gets demoted to 9 and then stored in **k**.
