---
title: The Conditional operators
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

The conditional operators **?** and **:** are sometimes called ternary operators
since they take three arguments. In fact, they form a kind of foreshortened
if-then-else. Their general form is:

```c
expression1 ? expression2 : expression3;
```

What this expression says is: "_if **expression1** is true (that is, if its
value is non-zero), then the value returned will be **expression2**, otherwise,
the value returned will be **expression3**_". Let's understand this with the
help of a few examples:

1.  ```c
    int x, y;
    scanf("%d", &x);
    y = (x > 5 ? 3 : 4);
    ```

    This statement will store 3 in **y** if **x** is greater than 5, otherwise
    it will store 4 in y.

    The equivalent **if** statement will be:

    ```c
if (x > 5) {
  y = 3;
} else {
  y = 4;
}
    ```

2. ```c
    char a;
    int y;
    scanf("%c", &a);
    y = (a >= 65 && a <= 90 ? 1 : 0);
    ```

    Here 1 would be assigned to **y** if **a >= 65 && a <= 90** evalutes to true,
    otherwise 0 would be assigned.

    The following points may be noted about the conditional operators:

    a. It is not necessary that the conditional operators should be used only on
    arithmetic statements. This is illustrated in the following examples:

      ```c
int i;
scanf("%d", &i);
(i == 1 ? printf("Amit\n") : printf("All and sundry\n"));
      ```

      ```c
char a = 'z';
printf("%c", (a >= 'a' ? a : '!'));
      ```

    b. The conditional operators can be nested as shown below:

    ```c
int big, a, b, c;
big = (a > b ? (a > c ? 3 : 4) : (b > c ? 6 : 8));
    ```
