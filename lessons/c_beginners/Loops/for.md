---
title: The for Loop
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

Perhaps one reason why few programmers use **while** is that they are too busy
using the **for**, which is probably the most popular looping instruction. The
**for** allows us to specify three things about a loop in a single line:

1. Setting a loop counter to an initial value.
2. Testing the loop counter to determine whether its value has reached the
   number of repetitions desired.
3. Increasing the value of loop counter each time the program segment within the
   loop has been executed.

The general form of **for** statement is as under:

```c
for (initialise counter; test counter; increment counter) {
  do this;
  and this;
  and this;
}
```

Let us write down the simple interest program using **for**. Compare this
program with the one, which we wrote using **while** the flowchart is also given
below for a better understanding.

![](/img/courses/c_beginners/flowchart_for_example1.png)

```c
// Calculation of simple interest for 3 sets of principle, noy and rate
int main() {
  int principle, noy, count;
  float rate, si;

  for (count = 1; count <= 3; count++) {
    printf("Enter values of principle, number of years and rate: ");
    scanf("%d %d %f", &principle, &noy, &rate);

    si = principle * noy * rate / 100;
    printf("Simple Interest = Rs.%f\n", si);
  }

  return 0;
}
```

If this program is compared with the one written using **while**, it can be seen
that the three steps - _initialisation, testing and incrementation_ - required
for the loop construct have now been incorporated in the **for** statement.

Let's now examine how the **for** statament gets executed:

* When the **for** statament is executed for the first time, the value of
    **count** is set to an initial value of 1.
* Now the condition **count <= 3** is tested. Since **count** is 1, the
    condition is satisfied and the body of the loop is executed for the first
  time.
* Upon reaching the closing brace of **for**, control is sent back to the
  **for** statement, where the value of **count** gets incremented by 1.
* Again, the test is performed to check whether the new vlaue of **count**
  exceeds 3.
* If the value of **count** is still within the range 1 to 3, the statements
  within braces of **for** are executed again.
* The body of the **for** loop continues to get executed until **count** doesn't
  exceed the final value of 3.
* When **count** reaches the value 4, the control exits from the loop and is
  transferred to the next statement (if any).

The following figure would help in further clarifying the concept of execution
for the **for** loop.

![](/img/courses/c_beginners/for_figure.png)

It is important to note that the initialisation, testing and incrementation part
of a **for** loop can be replaced by any valid expression. Thus, the following
**for** loops are perfectly okay:

```c
for (int i = 10; i; i--) {
  printf("%d\n", i);
}

for (i < 4; j = 5; j = 0) {
  printf("%d\n", i);
}

for (int i = 0; i <= 10; printf("%d\n", i++));

for (scanf("%d", &i), i <= 10; i++) {
  printf("%d\n", i);
}
```

Let's now write down the program to print numbers from 1 to 10 in different
ways. This time, we would use a **for** loop instead of a **while** loop.

1. 
  ```c
int main() {
  int i;
  for (i = 1; i <= 10; i = i + 1) {
    printf("%d\n", i);
  }
}
  ```

    Note that the initialisation, testing and incrementation of loop counter is
  done in the **for** statement itself. Instead of **i = i + 1**, the statements
  **i++** or **i += 1** can also be used.

    Since there is only one statement in the body of the **for** loop, the pair of
  braces have been dropped. As with the **while**, the default scope of **for** is
  immediately the next statement after **for**.

2. 
  ```c
int main() {
  int i;
  for (i = 1; i <= 10; ) {
    printf("%d\n", i);
    i = i + 1;
  }
}
  ```

    Here, the incrementation is done within the body of the **for** loop and not
  in the **for** statement. Note that despite of this, the semicolor after the
  condition is necessary.

3. 
  ```c
int main() {
  int i = 1;
  for (; i <= 10; i = i + 1) {
    printf("%d\n", i);
  }
}
  ```

    Here, the initialisation is done in the declaration statement itself, but
the semicolon still is necessary.

4. 
  ```c
int main() {
  int i = 1;
  for (; i <= 10;) {
    printf("%d\n", i);
    i = i + 1;
  }
}
  ```

    Here, neither the initialisation, nor the incrementation is done in the
**for** statement, but still the two semicolons are necessary.

5. 
  ```c
int main() {
  int i;
  for (i = 0; i++ < 10;) {
    printf("%d\n", i);
  }
}
  ```

    Here, the comparison as well as the incrementation is done through the same
statement, **i++ < 10**. Since the **++** operator comes after **i**, firstly
comparison is done, followed by incrementation. Note that it is necessary to
initialise **i** to 0.

6. 
  ```c
int main() {
  int i;
  for (i = 0; ++i <= 10;) {
    printf("%d\n", i);
  }
}
  ```

    Here, both the comparison and the incrementation is done through the same
statement, **++i <= 10**. Since **++** precedes **i**, firstly incrementation is
done, followed by comparison. Note that it is necessary to initialise **i** to
0.
