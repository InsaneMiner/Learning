---
title: The if statement
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

Like most languages, C uses the keyword **if** to implement the decision control
instruction. The general for of the **if** statement looks like this:

```c
if (this condition is true) {
  execute this statement;
}
```

The keyword **if** tells the compiler that what follows is a decision control
structure. The condition folowing the keyword **if** is always enclosed within a
pair of parentheses. If the condition, whatever it is, is true, then the
statement is executed. If the condition is not true, then the statement is not
executed; instead the program skips past it. But how do we express the condition
itself in C? And how we evaluate its truth or falsity? As a general rule, we
express a condition using C's "_relational_" operators. The relational operators
allow us to compare two values to see whether they are equal to each other,
unequal, or whether one is greater than the other. Here's how they look and how
they are evaluated in C:

| This expression | Is true if... |
| --------------- | ------------- |
| x == y          | x is equal to y |
| x != y          | x is not equal to y |
| x < y           | x is less than y |
| x > y           | x is greater than y |
| x <= y          | x is less than or equal to y |
| x >= y          | x is greater than or equal to y |

The relational operators should be familiar to you except for the equality
operator **==** and the inequality operator **!=**. Note that **=** is used for
assignment, whereas **==**, is used for comparison of two quantities. Here is a
simple program, which demonstrates the use of **if** and the relational
operators:

```c
/* Demonstration of the if statement */
int main() {
  int num;

  printf("Enter a number less than 10: ");
  scanf("%d", &num);

  if (num <= 10) {
    printf("What an obedient servant you are!");
    return 0;
  }

  return 0;
}
```

This program when executed, if you type a number less than or equal to 10, you
get a message on the screen through **printf()**. If you type some other number,
the program doesn't do anything. The following flowchart would help you
understand the flow of control in the program:

![](/img/courses/c_beginners/flowchart_if_example1.png)

## The Real Thing

We mentioned earlier that the general form of the if statement is as follows:

```c
if (condition) {
  statement;
}
```

Truly speaking, the general form is as follows:

```c
if (expression) {
  statement;
}
```

Here the expression can be any valid expression including a relational
expression. We can even use arithmetic expressions in the **if** statement. For
example, all the following **if** statements are valid:

```c
if (3 + 2 % 5) {
  printf("This works");
}
```

```c
if (a = 10) {
  printf("Even this works");
}
```

```c
if (-5) {
  printf("Surprisingly even this works");
}
```

Note that in C a non-zero value is considered true, whereas 0 is considered to
be false. In the first **if**, the expression evaluates to **5** and since **5**
is non-zero it is considered to be true. Hence the **printf()** gets executed.

In the second **if**, 10 gets assigned to **a**, so the **if** is now reduced to
**if (a)** or **if (10)**. Since 10 is a non-zero, it is true. Hence, again
**printf()** goes to work.

In the third **if**, -5 is a non-zero number, hence true. So again, **printf()**
goes to work. In place of -5 even if a float like 3.14 were used, it would be
considered to be true. So the issue is not whether the number is integer or
float, or whether it is positive or negative. Issues is whether it is zero or
non-zero.

## Multiple Statements withing __if__

It may so happen that in a program we want more than one statement to be
executed if the expression following **if** is satisfied. If such multiple
statements are to be executed then they must be placed withing a pair of braces
as illustrated in the following example:

```c
int main() {
  int a, b, c;

  a = 200;
  b = 10;
  c = 50;

  if(a >= 200 && b == 10) {
    printf("The program entered the If statement\n");
    return 0;
  }

  return 0;
}
```

As you can see we are checking if a is greater than or equals to **200** and
(the **&&** symbol) b is equals to ten. If that condition is met, what's in the
if block is executed.
