---
title: Selection
course: python_hacking
section: "Introduction"
layout: lesson
---

Like most programming languages, Python provides a method for conditional select
statements. The IF statement evaluates a logical expression in order to make a
decision based on the result of the evaluation. Continuing with our
banner-grabbing script, we would like to know if the specific FTP server is
vulnerable to attack. To do this, we will compare our results against some known
vulnerable FTP server versions.

```python
>>> import socket
>>> socket.setdefaulttimeout(2)
>>> s = socket.socket()
>>> s.connect(("192.168.1.5", 21))
>>> ans = s.recv(1024)
>>> if ("FreeFloat Ftp Server (Version 1.00)" in ans):
...   print("[+] FreeFloat FTP Server is vulnerable")
... elif("3Com 3CDaemon FTP Server Version 2.0" in ans):
...   print("[+] 3CDaemon FTP Server is vulnerable")
... elif("Ability Server 2.34" in ans):
...   print("[+] Ability FTP Server is vulnerable")
... elif("Sami FTP Server 2.0.2" in ans):
...   print("[+] Sami FTP Server is vulnerable")
... else:
...   print("[-] FTP Server is not vulnerable")
```
