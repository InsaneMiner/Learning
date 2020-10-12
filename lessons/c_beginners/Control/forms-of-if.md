---
title: Forms of if
course: c_beginners
section: "The Decision Control Structure"
layout: lesson
---

The **if** statement can take any of the following forms:

```c
if (condition)
  do this;

if (condition) {
  do this;
  and this;
}

if (condition)
  do this;
else
  do this;

if (condition) {
  do this;
  and this;
} else
  do this;

if (condition) {
  do this;
  and this;
} else {
  do this;
  and this;
}

if (condition)
  do this;
else {
  if (condition)
    do this;
  else {
    do this;
    and this;
  }
}

if (condition) {
  if (condition)
    do this;
  else {
    do this;
    and this;
  }
} else {
  do this;
}
```
