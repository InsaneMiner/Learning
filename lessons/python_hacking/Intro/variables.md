---
title: Variables
course: python_hacking
section: Introduction
layout: lesson
---

In Python, a variable points to data stored in a memory location. This memory
location can store different values such as integers, real numbers, booleans,
string or more complex data such as lists or dictionaries. In the following
code, we define a variable _port_ that stores an integer and _banner_ that
stores a string. To combine two variables together into one string, we must
explicitly cast the post as string using the _str()_ function:

```python
>>> port = 21
>>> banner = "FreeFloat FTP Server"
>>> print("[+] Checking for " + banner + " on port " + str(port))
```

Python reserves memory space for variables when the programmer declares them.
The programmer does not have to explicitly declare the type of variable; rather,
the Python interpreter decides the type of the variable and how much space in
the memory to reserve. Considering the following example, we declare a string,
an integer, a list and a boolean and the interpreter correctly automatically
types each variable:

```python
>>> banner = "FreeFloat FTP Server" # A string
>>> type(banner)
<class 'str'>
>>> port = 21                       # An integer
>>> type(port)
<class 'int'>
>>> portList = [21, 22, 80, 110]
>>> type(portList)
<class 'list'>
>>> portOpen = True
>>> type(portOpen)
<class 'bool'>
```
