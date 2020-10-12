---
title: The if-else statement
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

The **if** statement by itself will execute a single statement, or a group of
statements, when the expression following **if** evaluates to true. It does
nothing when the expression is evaluated to false. Can we execute a group of
statements if the expression evaluates to true and another group of statements
if the expression evaluates to false? Of course! This is what is the purpose of
  the **else** statement that is demonstrated in the following example:

**Example**: In a company an employee is paid under:

If his basic salary is less than Rs. 1500, then HRA = 10% of basic salary and DA
= 90% of basic salary. If his salary is either equal to or above Rs. 1500, then
HRA = Rs. 500 and DA = 98% of basic salary. If the employee's salary is input
through the keyboard write a program to find his gross salary:

```c
/* Calculation of gross salary */
int main() {
  float, bs, gs, da, hra;

  printf("Enter basic salary: ");
  scanf("%f", &bs);

  if (bs < 1500) {
    hra = bs * 10 / 100;
    da = bs * 90 / 100;
  } else {
    hra = 500;
    da = bs * 98 / 100;
  }

  gs = bs + hra + da;
  printf("Gross salary = Rs. %f\n", gs);
  return 0;
}
```

![](/img/courses/c_beginners/if_else_figure.png)

A few points worth noting:

1. The group of statements after the **if** up to and not including the **else**
   is calle an '_if block_'. Similarly, the statements after the **else** form
   the '_else block_'.
2. Notice that the **else** is written exactly below the **if**. The statements
   in the **if** block and those in the **else** block have been indented to the
   right. This formatting convention is followed throughout the course to enable
   you to understand the working of the program better.
3. Had there been only one statement to be executed in the **if** block and only
   one statement in the **else** block, we could have dropped the pair of
   braces.
4. As with the **if** statement, the default scope of else is also the statement
   immediately after the **else**. To override this default scope, a pair of
   braces as shown in the above example must be used.
