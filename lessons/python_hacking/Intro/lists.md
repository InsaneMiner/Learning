---
title: Lists
course: python_hacking
section: "Introduction"
layout: lesson
---

The list data structure in Python provides an excellent method for storing
arrays of objects in Python. A programmer can construct lists of any data type.
Furthermore, built-in methods exist for performing actions such as appending,
inserting, removing, popping, indexing, counting, sorting and reversing lists.
Consider the following example: a programmer can construct a list by appending
items using the _append()_ method, print the items and then sort them before
printing again. The programmer can find the index of a particular item (the
integer 80 in this example). Furthermore, specific items can be removed (the
integer 443 in this example).

```python
>>> portList = []
>>> portList.append(21)
>>> portList.append(80)
>>> portList.append(443)
>>> portList.append(25)
>>> print(portList)
[21, 80, 443, 25]
>>> portList.sort()
[21, 25, 80, 443]
>>> pos = portList.index(80)
>>> print("[+] There are " + str(pos) + " ports to scan before 80.")
[+] There are 2 ports to scan before 80.
>>> portList.remove(443)
>>> print(portList)
[21, 25, 80]
>>> cnt = len(portList)
>>> print("[+] Scanning " + str(cnt) + " Total ports.")
[+] Scanning 3 Total ports.
```
