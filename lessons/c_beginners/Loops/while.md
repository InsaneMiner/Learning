---
title: The while Loop
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

It is often the case in programming that you want to do something a fixed number
of times. Perhaps you want to calculate gross salaries of ten different persons
or you want to convert temperatures from centigrade to fahrenheit for 15
different cities.

The **while** loop is ideally suited for such cases. Let's look at a simply
example, which uses a **while** loop. The flowchart shown below would help you
to understand the operation of a **while** loop.

![](/img/courses/c_beginners/while-loop.png)

```c
/* Calculation of simple interest for 3 sets of principle, number of years worked and rate */
int main() {
  int principle, noy, count;
  float rate, si;

  count = 1;

  while (count <= 3) {
    printf("Enter the values of \"Principle\", \"Number of years\" and \"Rate\": ");
    scanf("%d %d %f", &p, &n, &r);
    si = principle * noy * rate / 100;
    print("Simple interest = Rs. %f\n", si);

    count = count + 1;
  }
}
```

the program executes all statements after the **while** 3 times. The logic for
calculating the simple interest is written within a pair of braces immediately
after the **while** keyword. These statements form what is called the '_body_'
of the **while** loop. The parentheses after the **while** contain a condition.
So, as long as this condition remains true, all statements within the body of
the **while** loop keep getting executed repeatedly. To being with the variable
**count** is initialised to 1 and every time the simple interest logic is
executed, the value of **count** is incremented by one. The variable **count**
is many times called either a '_loop counter_' or an '_index variable_'.

The operation of the **while** loop is illustrated in the following figure:

![](/img/courses/c_beginners/while-loop-body.png)

# Tips and Traps

The general form of **while** is as shown below:

```c
initialise loop counter;
while (test loop counter using a condition) {
  do this;
  and this;
  increment loop counter;
}
```

Note the following points about **while**:

1. The statements within the **while** loop would keep on getting executed until
   the condition being tested remains true. When the condition becomes false,
   the control passes to the first statement that follows the body of the while
   loop.

    In place of the condition there can be any other valid expression. So, as long
    as the expression evaluates to a non-zero value, the statements within the
    loop would get executed.

2. The condition being tested may use relational or logical operators as shown
   in the following examples:

   ```c
while (i <= 10);
while (i >= 10 && j < 15);
while (j > 10 && (b < 15 || c < 20))
   ```

3. The statements within the loop may be a single line or a block of statements.
   In the first case, the parentheses are optional. For example:


   ```c
while (i <= 10) {
  i = i + 1;
}
   ```

   is same as:

   ```c
while (i < 10)
  i = i + 1
   ```

4. As a rule, the while must test a condition that will eventually become false,
   otherwise the loop would be executed forever:

   ```c
int main() {
  int i = 1;
  while (i <= 10) {
    printf("%d\n", i);
  }
}
   ```

    This is an indefinite loop, since **i** remains equal to 1 forever. The
    correct form would be as under:

    ```c
int main() {
  int i = 1;
  while (i <= 10) {
    printf("%d\n", i);
    i = i + 1;
  }
}
    ```

5. Instead of incrementing a loop counter, we can decrement it and still manage
   to get the body of the loop executed repeatedly. This is shown below:

   ```c
int main() {
  int i = 5;
  while (i >= 1) {
    printf("Make the computer iterate\n");
    i = i - 1;
  }
}
   ```

6. It is not necessary that a loop counter must only be an int. It can even be a
   float:

   ```c
int main() {
  float a = 10.0;
  while (a <= 10.5) {
    printf("Raindrops on roses...\n");
    printf("...and whiskers on kitten\n");
    a = a + 0.1;
  }
}
   ```
