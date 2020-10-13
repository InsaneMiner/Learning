---
title: The else-if Clause
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

There is one more way in which we can write the program shown in the previous
example. In this one, we will be using **else if** blocks:

```c
int main() {
  int m1, m2, m3, m4, m5, per;

  per = (m1 + m2 + m3 + m4 + m5) / per;

  if (per >= 60)
    printf("First Division\n");
  else if (per >= 50)
    printf("Second Division\n");
  else if (per >= 40)
    printf("Third Division\n");
  else
    printf("Fail\n");

  return 0;
}
```

You can note that this program reduces the indentation of the statements. In
this case, every **else** is associated with its previous **if**. The last
**else** goes to work only if all the conditions fail.

Note that the **else if** clause is nothing different. is just a way of
rearranging the **else** with the **if** that follows it. This would be evident
if you look at the following code:

```c
if (i == 2)
  printf("With you...\n");
else {
  if (j == 2)
    printf("...All the time\n");
}
```

Becomes:

```c
if (i == 2)
  printf("With you...\n");
else if (j == 2)
  printf("...All the time\n");
```

Another place where logical operators are useful, is when we want to write
programs for complicated logics that ultimately boil down to only two answers.
Consider the following example:

**Example:** A company insures its drivers in the following cases:

1. If the driver is married.
2. If the driver is unmarried, male and above 30 years of age.
3. If the driver is unmarried, female and above 25 years of age.

In all other cases, the driver is not insured. If the marital status, sex and
age of the driver are the inputs, write a program to determine whether the
driver is to be insured or not.

Here after checking a set of instructions, the final output of the program would
be one of the two - _Either the driver should be ensured or not_. As mentioned
above, since these are the only two outcomes this problem can be solved using
logical operators. But before we do that, let's write a program that doesn't
make use of logical operators:

```c
/* Insurance driver - Without using logical operators */
int main() {
  char* sex, maritalStatus;
  int age;

  printf("Enter age, sex and marital status");
  scanf("%d %c %c", &age, &sex, &maritalStatus);

  if (maritalStatus == "Married")
    printf("Driver is insured\n");
  else {
    if (sex == "Masculine") {
      if (age > 30)
        printf("Driver is insured\n");
      else
        printf("Driver is not insured\n");
    } else {
      if (age > 25)
        printf("Driver is insured\n");
      else
        printf("Driver is not insured\n");
    }
  }

  return 0;
}
```

From the program, it's evident that we are required to match several **if**s,
**else**s and pair of brackets. In a more real-life situation, there would be
more conditions to check leading to the program creeping to the right. Let's
now see how to avoid these problems by using logical operators.

As mentioned above, in this example we expect the answer to be either '_Driver
is insured_' or '_Driver is not insured_'. If we list down all those cases in
which the driver is insured, they would be:

1. Driver is married
2. Driver is an unmarried male above 30 years of mage
3. Driver is an unmarried female above 25 years of age

Since all these cases lead to the driver being insured, they can be combined
together using **&&** and **||** as shown in the program below:

```c
/* Insurance of driver - using logical operators */

int main() {
  char* sex, maritalStatus;
  int age;

  printf("Enter age, sex and marital status: ");
  scanf("%d %c %c", &age, &sex, &maritalStatus);

  if ((maritalStatus == "Married") || (maritalStatus == "Unmarried" && sex == "Masculine" && age > 30) || (maritalStatus = "Unmarried" && sex == "Female" && age > 25)) {
    printf("Driver is insured\n");
  } else {
    printf("Driver is not insured\n");
  }

  return 0;
}
```

In this program, it is important to note that:

1. The driver will be insured only if one of the conditions enclosed in the
   parentheses evaluates to true.
2. For the second pair of parentheses to evalue to true, each condition in the
   parentheses separated by **&&** must evaluate to true.
3. Even if one of the conditions in the second parentheses evaluates to false,
   then the whole of the second parentheses evalues to false.
4. The last two of above arguments apply to third pair of parentheses as well.

Thus, we can conclude that the **&&** and **||** are useful in the following
programming situations:

1. When it is to be tested whether a value falls within a particular range or
   not.
2. When after testing several conditions the outcome is only one of the two
   answers (This problem is often called _yes/no problem_)
