---
title: Hierarchy of Operations
course: c_beginners
section: "Instruction"
layout: lesson
---

While executing an arithmetic statement, which has two or more operators, we may
have some problems as to how exactly it gets executed. For example, does the
expression **2 * x - 3 * y** corresponds to **(2x)-(3y)** or to **2(x-3y)**?
Similarly, does **A / B * C**, corresponds to **A / (B * C)** or to **(A / B) *
C**? To answer these questions satisfactorily one has to understand the
'hierarchy' of operations. The priority or precedence in which the operations in
an arithmetic statement are performed is called the hierarchy of operations. The
hierarchy of commonly used operators is the following:

| Priority | Operators | Description |
| -------- | --------- | ----------- |
| 1 st     | * / %     | Multiplication, division, modular division
| 2 nd     | + -       | Addition, subtraction

Now a few tips about the usage of operators in general.

* Within parentheses the same hierarchy as mentioned above is operative. Also,
  if there are more than one set of parentheses, the operations within the
  innermost  parentheses would be performed first, followed by the operations
  between the second innermost pair and so on.
* We must always remember to use pairs of parentheses. A careless imbalance of
  the right and left parentheses is a common error. The best way to avoid this
  error is to type **(** **)** and then type an expression between them.

Consider the stepwise of this expression:

**i = 2 * 2 / 4 + 4 / 4 + 8 - 2 + 5 / 8;**

i = 6 / 4 + 4 / 4 + 8 - 2 + 5 / 8; Operation: *

i = 1 + 4 / 4 + 8 - 2 + 5 / 8;     Operation: /

i = 1 + 1 + 8 - 2 + 5 / 8;         Operation: /

i = 1 + 1 + 8 - 2 + 0;             Operation: /

i = 2 + 8 - 2 + 0;                 Operation: +

i = 10 - 2 + 0;                    Operation: +

i = 8 + 0;                         Operation: -

i = 8;                             Operation: +

Note that **6 / 4** gives **1** and not **1.5**. This so happens because **6**
and **4** are both integers and therefore, would evaluate to only an integer
constant. Similarly **5 / 8** evaluates to zero, since **5** and **8** are
integer contents. Hence, it must return an integer value.

All operators in C are ranked according to their precedence. And mind you there
are as many as 45 odd operators in C, and these can affect the evaluation of an
expression in subtle and unexpected ways if we are not careful. Unfortunately,
there are no simple rules that we can follow, such as "**BODMAS**" that tells
algebra students in which order does an expression evaluates. We have not
encountered many out of these 45 operators, so we won't pursue the subject of
precedence any further here. However, it can be realised at this stage that it
would be almost impossible to remember the precedence of all these operators.

So far we have seen how the computer evalues an arithmetic statement written in
C. But our knowledge would be incomplete, unless we know how to convert a
general arithmetic statement to a C statement. C can handle any complex
expression with ease. Some examples will be shown in the following image:

![Algebric expressions ported to C](/images/courses/c_beginners/c_algebraic.png)
