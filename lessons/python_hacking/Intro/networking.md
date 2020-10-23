---
title: Networking
course: python_hacking
section: "Introduction"
layout: lesson
---

The socket module provides a library for making network connections using
Python. Let's quickly write a banner-grabbing script. Our script will print the
banner after connecting to a specific IP address and TCP port. After importing
the socket module, we instantiate a new variable from the socket class. Next, we
use the _connect()_ method to make a network connection to the IP address and
port. Once successfully connected, we can read and write from the socket.

the _recv(1024)_ method will read the next 1024 bytes on the socket. We store
the result of this method in a variable and then print the results to the
server.

```python
>>> import socket
>>> socket.setdefaulttimeout(2)
>>> s = socket.socket()
>>> s.connect(("192.168.1.5", 3306))
>>> ans = s.recv(1024)
>>> print(ans)
b"C\x00\x00\x01\xffj\04Host 'sarah' is not allowed to connect to this MariaDB server"
```
