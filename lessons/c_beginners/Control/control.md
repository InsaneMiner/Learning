---
title: The Decision Control Structure
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

We all need to alter our actions in the face of changing circumstances. If the
weather is fine, then I will go for a stroll. If the highway is busy I would
take a subway. If the pitch takes spin, we would win the match. If she says no,
I would look elsewhere. You can notice that all these decisions depend on some
condition being met.

C language too must be able to perform different sets of actions depending on
the circumstances. In fact, this is what makes it worth its salt. C has three
major decision making instructions (the **if** statement, the **if-else**
statement and the **switch** statement). A fourth, somewhat less important
structure is the one that uses conditional operators. In this section, we will
explore all these ways (except **switch** we will talk about it in a different
section) in which a C program can react to changing circumstances.

## Decisions

In the program written in the previous section, we've used sequence control
structure in which the various steps are executed sequentially, i.e. in the same
order in which they appear in the program. In fact to execute the instructions
sequentially, we don't have to do anything to do anything at all. By default,
the instructions in a program are executed sequentially. However, in serious
programming situations, seldom do we want the instructions to be executed
sequentially. Many a times, we want a set of instructions to be executed in one
situation and an entirely different set of instructions to be executed in
another situation. This kind of situation is dealt in C programs using a
decision control instruction. As mentioned earlier, a decision control
instruction can be implemented in C using:

* The **if** statement
* The **if-else** statement
* The conditional operators
