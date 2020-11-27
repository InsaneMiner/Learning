---
title: The continue Statement
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

In some programming situations we want to take control to the beginning of the
loop, bypassing the statements inside the loop, which have not yet been
executed. The keyword **continue** allows us to do this. When **continue** is
encountered inside any loop, control automatically passes to the beginning of
the loop.

A **continue** is usually associated with an **if**. As an example, let's
consider the following program:

```c
int main() {
  int i, j;

  for (i = 1; i < = 2; i++) {
    for (j = 1; j <= 2; j++) {
      if (i == j) {
        continue;
      }

      printf("%d %d\n", i, j);
    }
  }

  return 0;
}
```

The output of the above program would be:

```plaintext
1 2
2 1
```

Note that when the value of **i** is equals to **j**, the **continue** statement
takes the control to the **for** loop (_inner_) bypassing rest of the statements
pending execution in the **for** loop (_inner_).
