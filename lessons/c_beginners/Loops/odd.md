---
title: The Odd Loop
course: c_beginners
section: "The Loop Control Structure"
layout: lesson
---

The loops that we have used so far executed the statement within them a finite
number of times. However, in real life programming one comes across a situation
when it is now known beforehand how many times the statements in the loop are to
be executed. This situation can be programmed as shown below:

```c
// Execution of a loop an unknown number of times
int main() {
  char another;
  int num;

  do {
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("Square of %d is %d\n", num, num * num);
    printf("Want to enter another number? [y/n]: ");
    scanf("%c", &another);
  } while (another == "y");

  return 0;
}
```

And here is the sample output:

```plaintext
Enter a number: 5
Square of 5 is 25
Want to enter another number? [y/n]: y
Enter a number: 7
Square of 7 is 49
Want to enter another number? [y/n]: n
```

In this program, the **do-while** loop would keep getting executed until the
user continues to answer _y_. The moment he answers **n**, the loop terminates,
since the condition "**another == 'y'**" fails. Note that this loop ensures that
the statements within it are executed at lease once even if **n** is supplied
the first time itself.

Though it is simpler to program such a requirement using a **do-while** loop,
the same functionality if required can also be accomplished using **for** and
**while** loops as shown below:

```c
// Odd loop using a for loop
int main() {
  char another = 'y';
  int num;
  for (; another == 'y';) {
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("Square of %d is %d\n", num, num * num);
    printf("Want to enter another number? [y/n]: ");
    scanf("%c", &another);
  }

  return 0;
}

// Odd loop using a while loop
int main() {
  char another = 'y';
  int num;
  while (another == 'y') {
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("Square of %d is %d\n", num, num * num);
    printf("Want to enter another number? [y/n]: ");
    scanf("%c", &another);
  }

  return 0;
}
```
