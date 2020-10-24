---
title: Exception
course: python_hacking
section: "Introduction"
layout: lesson
---

Even when a programmer writes a syntactically correct program, the program may
still get an error at runtime or execution. Consider the classic runtime error -
_division by zero_. Because zero cannot divide a number, the Python interpreter
displays a message informing the programmer of the error message. This error
ceases program execution.

```python
>>> print(1337/0)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

What happens if we just wanted to handle the error within the context of the
running program or script? The python language provides exception-handling
capability to do just this. Let's update the previous example. We use try/except
statements to provide exception handling. Now, the program tries to execute the
division by zero. When the error occurs, our exception handling catches the
error and prints a message to the screen.

```python
>>> try:
...   print("[+] 1337 / 0 = " + str(1337/0))
... except:
...   print("[-] Error.")
...
[-] Error.
```

Unfortunately, this gives us very little information about the exact exception
that caused the error. It might be useful to provide the user with an error
message about the specific error that occurred. To do this, we will store the
exception in a variable _e_ to print the exception.

```python
>>> try:
...   print("[+] 1337 / 0 = " + str(1337/0))
... except Exception as e:
...   print("[-] Error = " + e)
...
[-] Error = division by zero
```

Let's now use the exception handling to update our banner-grabbing script. We
will wrap the network connection code with exception handling. Next, we try to
connect to a machine that is not running a FTP Server on TCP port 21. If we wait
for the connection timeout, we see a message indicating the network connection
operation timed out. Our program can now continue:

```python
>>> import socket
>>> socket.setdefaulttimeout(2)
>>> s = socket.socket()
>>> try:
...   s.connect(("192.168.1.5", 21))
... except Exception as e:
...   print("[-] Error = " + e)
...
[-] Error = Operation timed out
```
