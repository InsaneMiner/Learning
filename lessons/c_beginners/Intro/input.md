---
title: Receiving input
course: c_beginners
section: "Introduction"
layout: lesson
---

In the program discussed before, we assumed the values of **principle**, **noy**
(number of years) and **rate** to be 1000, 3 and 8.5. Every time we run the
program, we would get the same value for simple interest. If we want to
calculate simple interest with some other set of values, then we will need to
make the relevant change in the program, compile it and execute it again. Thus,
the program is not general enough to calculate simple interest for any set of
values without being required to make a change in the program. Moreover, if you
distribute the compiled file to somebody, he would not be able to make changes
in the program. Hence, it is a good practise to create a program that is general
enough to work for any set of values.

To make the program general, it should ask the values of **principle**, **noy**
and **rate** itself. This can be achieved using a function called **scanf()**.
This function is a counter-part of the **printf()** function. **printf()**
outputs the values to the screen, whereas **scanf()** receives them from the
keyboard. This is shown in the following program:

```c
/**
 * Calculation of simple interest
 * Author gekay - Date 2004/05/25
 * Modified by Sarah - Date 2020/10/05
 */
#include <stdio.h>

int main() {
  int principle, noy;
  float rate, si;

  printf("Enter the values for principle, noy and rate: ");
  scanf("%d %d %f", &principle, &noy, &rate);

  si = principle * noy * rate / 100;
  printf("%f\n", si);

  return 0;
}
```

The first **printf()** outputs the message '_Enter the values for principle, noy
and rate_' on the terminal. We haven't used any expression in **printf()** which
means that using expressions in **printf()** is optional.

Note that the ampersand (**&**) before the variables in the **scanf()** is a
must. **&** is an 'Address of' operator. It gives the location number used by
the variable in memory. When we say **&a**, we are telling **scanf()** at which
memory location it should store the value supplied by the user from the
keyboard. The detailed working of the **&** operator will be taken up later in
the following sections.

Note that a blank, a tab or a newline must separate the values supplied to
**scanf()**. This is shown below:

- Enter three values separed by blank
  ```
1000 5 15.5
  ```
- The three values separated by tab
  ```
1000    5    15.5
  ```
- The three values separated by newline
  ```
1000
5
15.5
  ```
