---
title: Getting started
course: c_beginners
section: "Introduction"
layout: lesson
---

Communicating with a computer involves speaking the language the computer
understands, which immediately rules out English as the language of
communication with a computer. However, there is a close analogy between
learning English language and learning C language. The classical method of
learning English to first learn the alphabets used in the language, then learn
to combine these alphabets to form words, which in turn are combined to form
sentences and sentences are combined to form paragraphs. Learning C is similar
and easier. Instead of straight-away learning how to write programs, we must
first know what alphabets, numbers and special symbols are used in C, then know
how using them to construct constants, variables and keywords, finally, how
these are combinated to form an instruction. A group of instructions would be
combined later on to form a program.

![](/images/courses/c_beginners/c_learning_analogy.png)

## The C Character set

A character denotes any alphabet, digit or special symbol used to represent
information. The following image shows the valid alphabets, numbers and special
symbols allowed in C.

![](/images/courses/c_beginners/c_alphabet.png)

## Constants, Variables and Keywords

The alphabets, numbers and special symbols when properly combined form
constants, variables and keywords. Let us see what are 'constants' and
'variables' in C. A constant is an entity that doesn't change whereas a variable
is an entity that may change.

In any program, we typically do lots of calculations. The results of these
calculations are stored in the computer's memory. Like human memory, the
computer memory also consists of millions of cells. The calculated values are
stored in these memory cells. To make the retrieval and usage of these values
easy, these memory cells (also called memory locations) are given names. Since
the value stored in each location may change the names given to these locations,
are called variable names. Consider the following example:

Here 3 is stored in a memory location and a name "**x**" is given to it. Then we
are assigning a new value 5 to the same memory location **x**. This would
overwrite the earlier value 3, since a memory location can hold only one value
at a time.

![](/images/courses/c_beginners/x_memory.png)

Since the location whose name is **x** can hold different values at different
times, **x** is known as a variable. As against this, 3 or 5 do not change,
hence are known as constants.

## Types of C Constants

C constants can be divided into two major categories:

1. Primary constants
2. Secondary constants

These are further categorised in the following image:

![](/images/courses/c_beginners/constants_classification.png)

At this stage, we will restrict our discussion to only Primary Constants,
namely, Integer, Real and character constants. Let's see the details of rach of
these constants. For constructing these different types of constants, certain
rules havwe been laid down. These rules are the following:

### Rules for constructing Integer Constants

1. An integer constant must have at least one digit
2. It must not have a decimal point
3. It can be either positive or negative
4. If no sign precedes an integer constant it is assumed to be positive
5. No commas or blanks are allowed within an integer constant
6. The allowable range for integer constants is -32768 to 32768

Truly speaking, the range of an Integer Constant depends upon the compiler. For
a 16-bit compiler (like Turbo C or Turbo C++) the range is -32768 to 32768. For
a 32-bit compiler, the range would be even greater and so on. Question like what
exactly do you mean by a 16-bit or a 32-bit compiler, what range of an integer
has to do with the type of compiler and such questions are discussed later.
Until that time, it would be assumed that we are working with a 16-bit
compilter. The following are examples of an integer constant:

* 426
* +782
* -8000
* -7605

### Rules for Constructing Real Constants

Real constants are often called Floating Point constants. The real constants
could be written in two forms. Fractional and Exponential form.

Following rules must be observed while constructing real constants expressed in
fractional form:

1. A real constant must have at least one digit
2. It must have a decimal point
3. It could be either positive or negative
4. Default sign is positive
5. No commans or blanks are allowed within a real constant.

The following are examples of a real constant:

* +325.34
* 426.0
* -32.76
* -48.5792

The exponential form of representation of real constants is usually used if the
value of the constant is either too small or too large. It however doesn't
restrict us in any way from using exponential form of representation for other
real constants.

In exponential form of representation, the real constant is represented in two
parts. The part appearing before '_e_' is called mantissa, where as the part
follow '_e_' is called exponent.

Following rules must be observer while constructing real constants expressed in
exponential form:

1. The mantissa part and the exponential part should be separated by a letter e
2. The mantissa part may have a positive or negative sign
3. Default sign of mantissa part is positive
4. The exponent must have at least one digit, which must be a positive or
   negative integer. Default sign is positive
5. Range of real constants expressed in exponential form is -3.4e38 to 3.4e38

The following are examples of a real constant expressed in exponential form:

* +3.2e-5
* 4.1e8
* -0.2+3
* -3.2e-5

## Rules for Constructing Character Constants

1. A character constant is a single alphabet, a single digit or a single special
   symbol enclosed within commas.
2. The maximum length of a character constant can be 1 character

The following are examples of a character constant:

* 'A'
* 'l'
* '5'
* '='

# Types of C variables

As we saw earlier, an entity that may vary during program execution is called a
variable. Variable names are names given to locations in memory. These locations
can contain integer, real or character constants. In any language, the types of
variables that it can support depends of constants that it can handle. This is
because a particular type of variable can hold only the same type of constant.
For example, an integer variable can hold only an integer constant, a real
variable can hold only a real constant and a character variable can hold only a
character constant.

The rules for constructing different types of constants are different. However,
for constructing variable names of all types the same set of rules apply. These
rules are given below:

## Rules for constructing Variable Names

1. A variable name is a combination of 1 to 31 alphabets, digits or underscores.
   Some compilers allow variable names whose length could be up to 247
   characters. Still, it would be safer to stick to the rule of 31 characters.
   Do not create unnecessarily long variable names as it adds to your typing
   effort
2. The first character in the variable name must be an alphabet or underscore
3. No commas or blanks are allowed within a variable name
4. No special symbol other than an underscore can be used in avariable name

The following are examples of a variable name:

* si_int
* m_hra
* pop_e_89

These rules remain same for all the types of primary and seconday variables.
Naturally, the question follows... How is C able to differentiate between these
variables? This is a rather simple matter. C compiler is able to distinguish
between the variable names by making it compulsory for you to declare the type
of any variable name that you wish to use in a program. This type declaration is
done at the beginning of the program. Following are examples of type declaration
statements:

* int si, m_hra;
* float bassal;
* char code;

Since, the maximum allowable length of a variable name is 31 characters, an
enormous number of variable names can be constructed using the above-mentioned
rules. It is a good practise to exploit this enormouse choice in naming
variables by using meaningful variable names.

Thus, if we want to calculate simple interest, it is always advisable to
construct meaningful variable like prin, roi, noy to represent Principle, Rate
of Interest and Number of Years rather than using the variables **a**, **b**,
**c**.

# C Keywords

Keywords are the words whose meaning has already been explained to the C
compiler (or in a broad sense to the computer). The keywords **cannot** be used
as variable names because if we do so we are trying to assign a new meaning to
the keyword, which is not allowed by the computer. Some C compilters allow you
to construct variable names that exactly resemble the keywords. However, it
would be safer not to mix up the variable names and the keywords. The keywords
are also called '_Reserved Words_'.

There are only 32 keywords available in C. The following image gives a list of
these keywords for your ready reference. A detailed discussion of each of these
keywords would be taken up in later sections wherever their use relevant.

![](/images/courses/c_beginners/c_keywords.png)

Note that compiler vendors (like Microsoft, Borland, etc) provide their own
keywords apart from the ones mentioned aboved. These include extended keywords
like **near**, **far**, **asm**, etcetera. Though it has been suggested by the
ANSI committee that every such compiler specefic keyword should be preceded by
two underscores (as in **__asm**), not every vendor follows this rule.
