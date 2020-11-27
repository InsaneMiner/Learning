---
title: The do-while Loop
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

The **do-while** loop looks like this:

```c
do {
  this;
  and this;
  and this;
  and this;
} while (this condition is true);
```

There is a minor difference between the working of **while** and **do-while**
loops. This difference is the place where the condition is tested. The **while**
tests the condition before executing any of the statements within the **while**
loop. As against this, the **do-while** tests the condition after having
executed the statements within the loop.

![](/img/courses/c_beginners/do-while.png)

This means that **do-while** would execute its statements at least once, even if
the condition fails for the first time. The **while**, on the other hand will
not execute its statements if the condition fails for the first time. This
difference is brought about more clearly by the following program:

```c
int main() {
  while (4 < 1) {
    printf("Hello there\n");
  }

  return 0;
}
```

Here, since the condition fails for the first time itself, the **printf()** will
not get executed at all. Let's now write the same program using a **do-while**
loop.

```c
int main() {
  do {
    printf("Hello there\n");
  } while (4 < 1);

  return 0;
}
```

In this program, the **printf()** would be executed once, since first the body
of the loop is executed and then the condition is tested.

There are some occasions when we want to execute a loop at least once no matter
what. This is illustrated in the following example:

**break** and **continue** are used with **do-while** just as they would be in a
**while** or a **for** loop. A **break** takes you out of the **do-while**
bypassing the conditional test. A **continue** sends you straight to the test
at the end of the loop.
