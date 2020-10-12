---
title: Nested if-elses
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---
 It is perfectly all right if we write an entire **if-else** construct within
 either the body of the **if** statement or the body of an **else** statement.
 This is called '_nesting_' of **if**s. This is shown in the following program:

 ```c
/* A quick demo of nested if-elses */
int main() {
  int i;

  printf("Enter either 1 or 2: ");
  scanf("%d", &i);

  if (i == 1) {
    printf("You would go to heaven!\n");
  } else {
    if (i == 2) {
      printf("Hell was created with you in mind\n");
    } else {
      printf("What about mother earth\n");
    }
  }

  return 0;
}
 ```

 Note that the second **if-else** construct is nested in the first **else**
 statement. If the condition in the first **if** statement is false, then the
 condition in the second **if** statement is checked. If it is false as well,
 then the final **else** statement is executed.

 You can see in the program how each time an **if-else** construct is nested
 with another **if-else** construct, it is also indented to add clarity to the
 program. Inculcate this habit of indentation, otherwise you would en up writing
 program which nobody (you included) can understand easily at a later date.

In the above program, an **if-else** occurs within the **else** block of the
first **if** statement. Similarly, in some other program, an **if-else** may
occur in the **if** block as well. There is no limit on how deeply the **if**s
and **else**s can be nested.
