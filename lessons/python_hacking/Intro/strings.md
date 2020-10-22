---
title: Strings
course: python_hacking
section: "Introduction"
layout: lesson
---

The Python string module provides a very robust series of methods for strings.
Read the Python documentation at [https://docs.python.org/library/string.html](https://docs.python.org/library/string.html)
for the entire list of available methods. Let's examine a few useful methods.

Consider the use of the following methods: _upper()_, _lower()_, _replace()_,
and _find()_. _Upper()_ convers a string into its uppercase variants. _Lower()_
converts a string to its lowercase variant. _Replace(old, new)_ replaces the old
occurrence of the substring old with the substring new. _Find()_ reports the
offset where the substring occurs:

```python
>>> banner = "FreeFloat FTP Server"
>>> print(banner.upper())
FREEFLOAT FTP SERVER
>>> print(banner.lower())
freefloat ftp server
>>> print(banner.replace('FreeFloat', 'Ability'))
Ability FTP Server
>>> print(banner.find("FTP"))
10
```
