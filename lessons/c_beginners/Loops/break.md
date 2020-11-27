---
title: The break Statement
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

We often come across situations where we want to jump out of a loop instantly,
without waiting to get back to the conditional test. The keyword **break**
allows us to do this. When **break** is encountered inside any loop, control
automatically passes to the first statement after the loop. A **break** is
usually associated with an **if**. As an example, let's consider the following
example:

**Example:** Write a program to determine whether a number is prime or not. A
prime number is one, which is divisible only by 1 or itself.

All we have to do, is to test whether a number is prime or not, is to divide it
successively by all numbers from 2 to one less than itself. If remained of any
of these divisions is zero, the number is not a prime. If no division yields a
zero, then the number is a prime number. Following program implements this
logic:

```c
int main() {
  int num, i;

  printf("Enter a number: ");
  scanf("%d", &num);

  i = 2;
  while (i <= num - 1) {
    if (num % i == 0) {
      printf("%d not a prime number.\n", num);
      break;
    }

    i++;
  }

  if (i == num) {
    printf("%d is a prime number.\n", num);
  }

  return 0;
}
```

In this program, if "**num % i**" turns out to be zero, (which means **num** is
exactly divisible by **i**) the message "_**num** not a prime number._" is
printed and the control breaks out of the **while** loop. Why does the program
require the **if** statement after the **while** loop at all? Well, there are
two ways the control could have reached outside the **while** loop:

1. It jumped out because the number proved to be not a prime.
2. The loop came to an end because the value of **i** became equal to **num**.

When the loop terminates in the second case, it means that there was not number
between 2 to "**num - 1**" that could exactly divide **num**. That is, **num**
is indeed a prime. If this is true, the program should print out the message
"_**num** is a prime number_".

The keyword **break**, breaks the control only from the **while** in which it is
placed. Consider the following program, which illustrates this fact:

```c
int main() {
  int i = 1, j = 1;

  while (i++ <= 100) {
    while (j++ <= 200) {
      if (j == 150) {
        break;
      } else {
        printf("%d %d\n", i, j);
      }
    }
  }

  return 0;{
}
```

In this program when **j** equals 150, **break** takes the control outside the
inner **while** only, since it is placed inside the inner **while**.
