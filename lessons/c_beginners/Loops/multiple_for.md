---
title: Multiple Initialisations in the for Loop
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

The initialisation expression of the **for** loop can contain more than one
statement separated by a comma. For example:

```c
for (int i = 0, j = 2; j <= 10; j++) {
  // Loop content here
}
```

Multiple statements can also be used in the incrementation expression of the
**for** loop; for example, you can increment (_or decrement_) two or more
variables at the same time. However, only one expression is allowed in the test
expression. This expression may contain several conditions linked together using
logical operators.

Use of multiple statements in the initialisation also demonstrates why
semicolons are used to separate the three expressions in the **for** loop. If
commas had been used, they could not also have been used to separate multiple
statements in the initialisation expression, without confusing the compiler.
