---
title: Setting the stage
course: python_hacking
section: "Introduction"
layout: lesson
---

You can download python through its [official
website](https://www.python.org/download). It provides a repository of python
installers for Windows, Mac OS X and Linux Operating systems. If you are running
Mac OS X or Linux, it is usually already installed in your system. Downloading
an installer provides a programmer with the python interpreter, the standard
library and several built-in modules. The python standard library and built-in
modules provide an extensive range of capabilities, including built-in data
types, exception handling, numeric and math modules, file-handling capabilities,
cryptographic services, interoperability with the operating system, Internet
data handling and interaction with IP protocols, among many other useful
modules. However, a programmer can easily install any third-party packages. A
comprehensive list of third-party packages is available at
[pip](https://pypi.python.org/pypi).

## Installing Third Party Libraries

Later on this course, we will utilize the python-nmap package to handle parsing
of nmap results. The following example depicts how to download and install the
python-nmap package (_or any package, really_). Once we have saved the package
to a local file, we uncompress the contents and change into the uncompressed
directory. From that working directory, we issue the command `python setup.py
install`, which installs the python-nmap package. Installing most third-party
packages will follow the same steps of downloading, uncompressing and then
issuing the command `python setup.py install`.

```bash
wget http://xael.org/norman/python/python-nmap/python-nmap-0.4.1.tar.gz
tar -xzf python-nmap-0.4.1.tar.gz
cd python-nmap-0.4.1/
python setup.py install
```

To make installing Python packages even easier, you can use `pip`.
Running the pip command followed
by the install and the name of the package to install will search through Python repositories to
find the package to install, download it _if found_ and install it
automatically.

```bash
pip install python-nmap
```

When setting up a developmental environment, it may prove useful to download all
of these third-party modules before beginning. You can install most of  the additional
required libraries by issuing the following command:

```bash
pip install pyPdf python-nmap pygeoip mechanize BeautifulSoup4
```
