---
title: Use of Logical Operators
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

C allows the usage of three logical operators, namely, **&&**, **||** and **!**.
These are to be read as '_AND_', '_OR_', and '_NOT_' respectively.

There are several things to note about these three logical operators. Most
obviously, two of then are composed of double symbols: **||** and **&&**. Don't
use the single symbol **|** and **&**. These single symbols also has a meaning.
They are bitwise operators, which we would examine later in more detail.

The first two operators, **&&** and **||**, allow two or more conditions to be
combined in an **if** statement. Let's see how they are used in a program.
Consider the following example:

**Example:** The marks obtained by a student in 5 different subjects are input
through the keyboard. The student gets a division as per the following rules:

Percentage above or equal to 60 - _First division_

Percentage between 50 and 59 - _Second Division_

Percentage between 40 and 49 - _Third Division_

Percentage less than 40 - _Fail_

Write a program to calculate the division ibtained by the student.

There are two ways in which we can write a program for this example. These
methods are given below:

```c
/* Method - 1 */

int main() {
  int m1, m2, m3, m4, m5, per;

  printf("Enter marks in five subjects: ");
  scanf("%d %d %d %d %d", &m1, &m2, &m3, &m4, &5);
  per = (m1 + m2 + m3 + m4 + m5) / 5;

  if (per >= 60) {
    printf("First division\n");
  } else {
    if (per >= 50) {
      printf("Second division\n");
    } else {
      if (per >= 40) {
        printf("Third division\n");
      } else {
        printf("Fail\n");
      }
    }
  }

  return 0;
}
```

This is a straight forward program. Observe that the program uses nested
**if-else**s. This leads to three disadvantages:

1. As the number of conditions go on increasing the level of indentation also
   goes on increasing. As a result, the whole program creeps to the right.
2. Care needs to be exercised to math the corresponding **if**s and **else**s.
3. Care needs ot be exercised to math the corresponding pair of brackets.

All these three problems can be elimintaed by the usage of '_Logical
Operators_'. The following program illustrates this:

```c
/* Method - 2 */
int main() {
  int m1, m2, m3, m4, m5, per;

  printf("Enter marks in five subjects: ");
  scanf("%d %d %d %d %d", &m1, &m2, &m3, &m4, &5);
  per = (m1 + m2 + m3 + m4 + m5) / 5;

  if (per >= 60)
    printf("First division\n");

  if ((per > 50) && (per < 60))
    printf("Second division\n");

  if ((per >= 40) && (per < 50))
    printf("Third division\n");

  if (per < 40)
    printf("Fail\n");

  return 0;
}
```

As can be seen from the second **if** statement, the **&&** operator is used to
combine two conditions. '_Second Division_' gets printed if both the conditions
evaluate to true. If one of the conditions is evaluated to false, the whole
condition is trated as false.

Two distinct advantages can be cited in favour of this program:

1. The matching (or do I say mismatching) of the **if**s with their
   corresponding **else**s gets avoided, since there are no **else**s in this
   program.
2. In spite of using several conditions, the program doesn't creep to the right.
   In the previous program the statements were creeping to the right. This
   effect becomes more pronounced as the number of conditions go on increasing.
   This would make the task of matching the **if**s with their corresponding
   **else**s and matching the opening and closing braces that would be much more
   difficult.
