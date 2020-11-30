---
title: Decisions Using switch
course: c_beginners
section: "The Case Control Structure"
layout: lesson
---

In real life, we are often faced with situations where we are required to make a
choice between a number of alternatives, rather than only one or two. For
example, which school to join or which hotel to visit. Serious C programming is
same; the coice we are asked to make is more complicated than merely selecting
two alternatives. C provides a special control statement that allows us to
handle such cases effectively; rather than using a series of **if** statements.
This control instruction is in fact, the topic of this section. Towards the end
of the section, we'd also study a keyword called **goto** and understand why we
should avoid its usage in C programming.

The control statement that allows us to make a decision from the number of
choices is called a **switch** or more correctly a **switch-case-default**,
since these three keywords go together to make up the control statement. They
most often appear as follows:

```c
switch(integer expression) {
  case constant 1:
    do this;
  case constant 2:
    do this;
  case constant 3:
    do this;
  default:
    do this;
}
```

The integer expression following the keyword **switch** is any C expression
that will yield an integer value. It could be an integer constant like 1, 2 or
3, or an expression that evaluates to an integer. The keyword **case** is
followed by an integer or a character constant. Each constant in each **case**
must be different from all the others. The "_do this_" lines in the above form
of **switch** represent any valid C statement.

What happenes when we run a program containing a **switch**? First, the integer
expression following the keyword **switch** is evaluated. The value it gives is
then matched, oneby one, against the constant values that follow the **case**
statements. When a match is found, the program executes the statements following
that **case** and all the subsequent **case** and **defalt** statements as well.
If no match is found with any of the **case** statements, only the statements
following the **default** are executed. A few examples will show how this
control structure works.

Consider the following program:

```c
int main() {
  int i = 2;

  switch(i) {
    case 1:
      printf("I am in case 1\n");
    case 2:
      printf("I am in case 2\n");
    case 3:
      printf("I am in case 3\n");
    default:
      printf("I am in default\n");
  }

  return 0;
}
```

The output of this program would be:

```plaintext
I am in case 2
I am in case 3
I am in default
```

The output is definitely not what we expected! We didn't expect the second and
third line in about output. The program prints case 2 and 3 and the default
case. Well, yes. We said the **switch** executes the case where a match is found
and all the subsequent **case**s and the **default** as well.

If you want only case 2 should get executed, it is up to you to get out of the
switch then and there by using a **break** statement. The following example
shows how this is done. Note that there is no need for a **break** statement
after the **default**, since the control comes out of the **switch** anyway.

```c
int main() {
  int i = 2;

  switch (i) {
    case 1:
      printf("I am in case 1\n");
      break;
    case 2:
      printf("I am in case 2\n");
      break;
    case 3:
      printf("I am in case 3\n");
      break;
    default:
      printf("I am in default\n");
  }

  return 0;
}
```

The output of this program would be:

```plaintext
I am in case 2
```

The operation of **switch** is shown below in the form of a flowchart for a
better understanding.

![](/img/courses/c_beginners/flowchart_switch.png)

## The tips and traps

A few useful tips about the usage of **switch** and a few pitfalls to be
avoided:

1. The earlier program that used **switch** may give you the wrong impression
   that you can use only cases arranged in ascending order, 1, 2, 3, and
   default. You can in fact put the cases in any order you please. Here is an
   example of scrambled case order.

   ```c
   int main() {
     int i = 22;

     switch(i) {
       case 121:
          printf("I am in case 121\n");
          break;
       case 7:
          printf("I am in case 7\n");
          break;
       case 22:
          printf("I am in case 22\n");
          break;
       default:
          printf("I am in default\n");
     }

     return 0;
   }
   ```

   The output of this program would be:

   ```plaintext
   I am in case 22
   ```

2. You are also allowed to use **char** values in **case** and **switch** as
   shown in the following program:

    ```c
    int main() {
      char c = 'x';

      switch(c) {
        case 'v':
          printf("I am in case v\n");
          break;
        case 'a':
          printf("I am in case a\n");
          break;
        case 'x':
          printf("I am in case x\n");
          break;
        default:
          printf("I am in default\n");
      }

      return 0;
    }
    ```

    The output of this program would be:

    ```plaintext
    I am in case x
    ```

    In fact here when we use '_v_', '_a_', '_x_' they are actually replaced by the
    ASCII values (118, 97, 120) of these character constants.

3. At times we may want to execute a common set of statements for multiple
   **cases**. How this can be down is shown in the following example:

   ```c
   int main() {
     char ch;

     printf("Enter any of the alphabet letters a, b or c");
     scanf("%c", &ch);

     switch(ch) {
       case 'a':
       case 'A':
          printf("A as in aeroplane\n");
          break;
      case 'b':
      case 'B':
          printf("B as in brain\n");
          break;
      case 'c':
      case 'C':
          printf("C as in cookie\n");
          break;
      default:
          printf("So you are a rebel, uh?");
     }

     return 0;
   }
   ```

   Here, we are making use of the fact that one a **case** satisfied the control
   simply falls through the **case** until it does not encouter a **break**
   statement. That is why if an alphabet **a** is entered the **case 'a'** is
   satisfied and since there are no statements to be executed in this **case**,
   the control automatically reaches the next **case** for example, **case 'A'**
   and executes all the statements in this **case**.

4. Even if there are multiple statements to be executed in each **case** there
   is no need to enclose them within a pair of braces (unlike **if** and
   **else**)

5. Every statement in a **switch** must belong to some **case** or the other. If
   a statement does not belong to any **case** the compiler will not report an
   error. However, the statement would never get executed. For example, in the
   following program the **printf()** never goes to work.

   ```c
   int main() {
     int i, j;

     printf("Enter value of i");
     scanf("%d", &i);

     switch(i) {
       printf("Hello\n");
       case 1:
          j = 10;
          break;
       case 2:
          j = 20;
          break;
     }

     return 0;
   }
   ```

6. If we have no **default** case, then the program simply falls through the
   entire **switch** and continues with the next instruction (if any), that
   follows the closing brace of **switch**.

7. Is **switch** a replacement for **if**? Yes and no. Yes, because it offers a
   better way of writing programs as compared to **if** and no because in
   certain situations we are left with no choice but to use **if**. The
   disadvantage of **switch** is that you can not have a case in a **switch**
   that looks like this:

   ```c
   case i <= 20:
   ```

   All that we can have after the case is an **int** constant or a **char**
   constant or an expression that evaluates to one of these constants. Even a
   **float** is not allowed.

   The advantage of **switch** over **if** is that it leads to a more structured
   program and the level of indentation is manageable, more so if there multiple
   statements within each **case** of a **switch**.

8. We can check the vlaue of any expression in a **switch**. Thus the following
   **switch** statements are legal.

   ```c
   switch (i + j * k)
   switch (23 + 45 % 4 * k)
   switch (a < 4 && b > 7)
   ```

   Expressions can also be used in cases provided they are constant expressions.
   Thus **case 3 + 7** is correct, however **case a + b** is incorrect.

9. The **break** statement when used in a **switch** takes the control outside
   the **switch**. However, use of **continue** will not take the control to the
   beginning of **switch**.

10. In principle, a **switch** statement is very useful while writing menu
    driven programs.
