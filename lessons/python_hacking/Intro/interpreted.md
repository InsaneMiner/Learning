---
name: Interpreted Python Versus Interactive Python
course: python_hacking
section: "Introduction"
layout: lesson
---

Similar to other scripting languages, Python is an interpreted language. At
runtime an interpreter processes the code and executes it. To demonstrate the
use of the Python Interpreter, we write "_print("Hello World!")_" to a file with
a "_.py_" extension. To interpreter this new script we invoke the Python
interpreter followed by the name of the newly created script:

```bash
echo print\(\"Hello world\!\"\) > hello.py
python hello.py
Hello world!
```

Additionally, Python provides interactive capability. A programmer can invoke
the python interpreter and interact with the interpreter directly. To start the
interpreter, the programmer executes python with no arguments. Next, the
interpreter presents the programmer with a _>>>_ prompt, indicating it can
accept a command. Here, the programmer again types "_print("Hello world!")_".
Upon hitting return, the Python interactive interpreter immediately executes the
statement:

```bash
# python
Python 3.8.6 (default, Sep 30 2020, 04:00:38)
[GCC 10.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

To initially understand some of the semantics behind the language, this section
occasionally utilizes the interactive capability of the Python interpreter. You
can spot the interactive interpreter in usage by looking for the _>>>_ prompt in
the examples.

As we explain the Python examples in the following sections, we will build our
scripts out of several functional blocks of code known as methods or functions.
As we initialise each script, we will show how to reassemble these methods and
invoke them from the _main()_ method. Trying to run a script that just contains
the isolated function definitions without a call to invoke them will prove
unhelpful. For the most part, you can spot the completed scripts because they
will have a _main()_ function defined. Before we start writing our first program
though, we will illustrate several of the key components of the Python standard
library.
