---
title: Dictionaries
course: python_hacking
section: "Introduction"
layout: lesson
---

The Python dictionary data structure provides a hash table that can store any
number of Python objects. The dictionary consists of pairs of items that contain
a key and value. Let's continue with our example of a vulnerability scanner to
illustrate a Python dictionary. When scanning specific TCP ports, it may prove
useful to have a dictionary that contains the common service names for each
port. Creating a dictionary, we can lookup for a key like _ftp_ and return the
associated value _21_ for that port.

When constructing a dictionary, each key is separated from its value by a colon,
and we separate items by commas. Notice that the method _.keys()_ will return a
list of all keys in the dictionary and that the method _.items()_ will return an
entire list of items in the dictionary. Next, we verify that the dictionary
contains a specific key (_ftp_). Referencing this key returns the value 21.

```python
>>> services = {'ftp': 21, 'ssh': 22, 'smtp': 25, 'http': 80}
>>> services.keys()
dict_keys(['ftp', 'smtp', 'ssh', 'http'])
>>> services.items()
dict_items([('ftp', 21), ('ssh', 22), ('smtp', 25), ('http', 80)])
>>> 'ftp' in services
True
>>> services['ftp']
21
>>> print("[+] Found a vulnerability with FTP on port " + str(services['ftp']))
[+] Found a vulnerability with FTP on port 21
```
