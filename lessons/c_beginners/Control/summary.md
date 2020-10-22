---
name: Summary
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

# Hierarchy of Operators Revisited

Since we have now added the logical operators to the list of operators we know,
it is time to review these operators and their priorities. The following table
shows the operators we have seen so far. The higher the position of an operator
is in the table, higher is its priority.

| Operators | Type |
| --------- | ---- |
| !         | Logical NOT |
| * / %     | Arithmetic and modulus |
| + -       | Arithmetic |
| < > <= >= | Relational |
| == !=     | Relational |
| &&        | Logical AND |
| \|\|        | Logical OR |
| =         | Assignment |

# A word of caution

What will be the output of the following program:

```c
int main() {
  int i;

  print("Enter the value of I: ");
  scanf("%d", &i);
  if (i = 5) {
    printf("You entered 5\n");
  } else {
    printf("You entered something other than 5\n").
  }
}
```

And here's the outputof two runs of this program:

```bash
Enter the value of I: 200
You entered 5
Enter the value of I: 9999
You entered 5
```

Surprising? You have entered 200 and 9999 and still you find in either case the
output is "_You entered 5_". This is because we have written the condition
wrongly. We have used the assignment operator **=** instead of the relational
operator **==**. As a result, the condition gets reduced to **if (5)**,
irrespective of what you supply as the value of **i**. And remember that in C
'_truth_' is always non-zero, whereas '_falsity_' is always zero. Therefore,
**if (5)** always evaluates to true and hence, the result will always be "_You
entered 5_".

Another common mistake while using the **if** statement is to write a semicolon
(**;**) after the condition, as shown below:

```c
int main() {
  int i;

  printf("Enter the value of I: ");
  scanf("%d", &i);

  if (i == 5);
    printf("You entered 5\n");
}
```

The **;** makes the compiler to interpret the statement as if you have written
it in the following manner:

```c
if (i == 5)
  ;
printf("You entered 5\n");
```

Here, if the condition evaluates to true, the **;** (null statement which does
nothing on execution) gets executed, following which **print()** gets executed.
If the condition fails then straightaway the **printf()** gets executed. Thus,
irrespective of whether the condition evaluates to true of false, the
**printf()** is bound to get executed. Remember that the compiler would not
point out this as an error, since as far as the syntax is concerned nothing has
gone wrong, but the logic has certainly gone awry. Moral is, beware of such
pitfalls.

The following table summarizes the working of all the logical operators:

![](/img/courses/c_beginners/word-of-caution.png)
