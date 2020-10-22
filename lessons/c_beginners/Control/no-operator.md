---
title: The "!" Operator
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

So ftar, we have used only the logical operators **&&** and **||**. The third
logical operator is the _NOT_ operator, written as **!**. This operator reverses
the result of the expression it operates on. For example, if the expression
evaluates to a non-zero value, then applying the **!** operator to it results
into a 0. Vice versa, if the expression evaluates to zero, then applying the
**!** operator to it makes it 1, a non-zero value. The final result (after
applying **!**) 0 or 1 is considered to be false or true respectively. Here's an
example of the _NOT_ operator applied to a relational expression:

```c
if (y != 10) {
  // This code is executed only if "y" is not equal to ten
}
```

This means "**y** is not equals to 10". In other words, if **y** is not equals
to 10, the expression will be false, since **(y == 10)** is true.

The _NOT_ operator is often used to reverse the logical value of a single value,
as in the expression:

```c
if (!flag) {
}
```

This is another way of saying:

```c
if (flag == 0) {
}
```
