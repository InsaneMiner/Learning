---
title: Network Basics
course: mitm
section: "Networking theory"
layout: lesson
---

Before we start trying to hack into networks, I will spend a few lessons to
explain what it is, what is a network, how it works and many details that will
help you to understand what are you doing, why and what is its reason.

A network is a number of devices connected together, they are connected so they
can share data (_files, resources, etc_), your home network, for example, is a
source of data.

All networks (_Wi-Fi and Wired_) achieve this sharing of data, using the same
principle, which I call, the device server. Basically, you need a device that acts
as a server and then all the devices communicate with it, the server has access
to the resources and all the other devices on the network are connected to it so
they can access it too.

In a network, only one device has access to the internet (_the server_) and all
the other devices have no access, but they can access it by connecting to the
router. Consider the following example: One user (computer) connected to the
network wanted to open the _https://learninglms.gq_ website. The computer asked
the router for the website, the router asked the internet, got an answer and it
sends it directly to the device that asked for that website. That's how a
network works.

All of this data (_requests and responses_) are transferred as packets. In Wi-Fi
networks, these packets are sent through the air, which means, that they are
being broadcasted from the server to the device. If you are within range with
these packets, you can sniff them, capture them and read them.
