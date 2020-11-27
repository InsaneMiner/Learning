---
title: Nesting of Loops
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

The way **if** statements can be nested, similarly **whiles** and **for**s can
also be nested. To understand how nested loops work, look at the program given
below.

```c
int main() {
  int r, c, sum;

  for (r = 1; r <= 3; r++) {
    // Outer loop
    for (c = 1; c <= 2; c++) {
      // Inner loop
      sum = r + c;
      printf("r = %d c = %d sum = %d\n", r, c, sum);
    }
  }

  return 0;
}
```

When you run this program, you will get the following output:

```plaintext
r = 1 c = 1 sum = 2
r = 1 c = 2 sum = 3
r = 2 c = 1 sum = 3
r = 2 c = 2 sum = 4
r = 3 c = 1 sum = 4
r = 3 c = 2 sum = 5
```

Here, for each value of **r**, the inner loop is cycled through twice with the
variable **c** taking values from 1 to 2. The inner loop terminates when the
value of **c** exceeds 2 and the outer loop terminates when the value of **r**
exceeds 3.

As you can see, the body of the outer **for** loop is indented and the body of
the inner **for** loop is further indented. These multiple indentations make the
program easier to understand.

Instead of using two statements, one to calculate **sum** and another to print
it out, we can compact this into one single statement by saying:

```c
printf("r = %d c = %d sum = %d\n", r, c, r + c);
```

The way **for** loops can be nested here, similarly, two **while** loops can
also be nested. Not only this, a **for** loop can occur within a **while** loop
or viceversa.
