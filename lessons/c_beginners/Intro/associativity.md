---
title: Associativity of Operators
course: c_beginners
section: "Introduction"
layout: lesson
---

When an expression contains two operators of equals priority the tie between
them is settled using the associativity of the operators. Associativity can be
of two types - Left to Right or Right to Left. Left to Right associativity means
that the left operand must be unambiguous. Unambiguous in what sense? It must
not be involved of any other sub-expression. Similarly, in case of Right to Left
associativity the right operand must be unambiguous. Let's understand this with
an example.

Consider the expression:

```c
a = 3 / 2 * 5;
```

Here there's a tie between operators of same priority, that is between **/** and
*. This tie is settled tha associativity of **/** and *. But both enjoy _Left to
Right_ associativity. The following table shows for each operator which operand
is unambiguous and which is not.

| Operator | Left | Right | Remark |
| -------- | ---- | ----- | ------ |
| /        | 3    | 2 or 2 * 5 | Left operand is unambiguous. Right is not
| *        | 3 / 2 or 2 | 5 | Right operand is unambiguous. Left is not

Since both **/** and * have L to R associativity and only **/** unambiguous left
operand (necessary condition for L to R associativity) it is performed earlier.

Consider one more expression:

```c
a = b = 3;
```

Here both assignment operators have the same priority and same associativity
(Right to Left). The following table shows for each operator which operand is
unambiguous and which is not.

| Operator | Left | Right | Remark |
| -------- | ---- | ----- | ------ |
| =        | a    | b or b = 3 | Left operand is unambiguous. Right is not
| =        | b or a = b | 3 | Right operand is unambiguous. Left is not

Since both **=** have **R** to **L** associativity and only the second **=** has
unambiguous right operand (necessary condition for **R** to **L**
associativity) the second **=** is performed earlier.

Consider yet another expression:

```c
z = a * b + c / d;
```

Here * and **/** enjoys same priority and same associativity (**Left** to
**Right**). The following table shows for each operator which operator is
unambiguous and which is not:

| Operator | Left | Right | Remark |
| -------- | ---- | ----- | ------ |
| *        | a    | b     | Both operands are unambiguous
| /        | c    | d     | Both operands are unambiguous

Here, since left operands for both operators are unambiguous. Compiler is free
to perform * or **/** operation as per its convenience since no matter which is
performer earlier, the result would be the same.
