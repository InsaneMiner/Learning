---
title: MAC address
course: mitm
section: "Networking theory"
layout: lesson
---

Each network card has a **physical static address** assigned by the card
manufacturer called _MAC_ address (_Media Access Control_), this address is used
between devices to identify each other and each packet has a source and
destination MAC address so they can be transferred to the right place.

This address is actually written, it's phisically written, which means that it
is never going to change, because of this, it can be used to trace you back and
identify your device. Also, as they are used to identify each device in the
network, they can be a connection moderor for some networks, they can use a
blacklist and blacklist your address so you can not be able to connect to that
network.

As the MAC address is static and phisically written, there is no way to change
it, but the address stored in the RAM can be changed. So, it will be changed for
this session, but once you restart your device you will have to change it again.

If you want to change the MAC address stored in the ram, you can do it by using
a tool called `macchanger` and it can be used the following way:

1. First, you will need to install some necessary programs:

    ```bash
    # On Kali linux
    sudo apt install macchanger net-tools

    # On Black Arch
    sudo pacman -S macchanger net-tools
    ```

2. Once it is installed, you will need to identify your in-use network
   interface, by issuing the command:

   ```bash
   ip addr
   ```

   If you are using a wired connection an interface like `eth0` or `enp1s0`
   would be the one you are using, if you are running a Wi-Fi connection, an
   interface like `wlan0` would be your interface (it can also be checked
   through the Ip address)

3. Once you identified your interface (in my case it is _eth0_), run the
   following command to shut your interface down (this will shut down your
   connection too)

   ```bash
   ip link set eth0 down
   ```

4. Then, run the following command to generate a random MAC address:

    ```bash
    macchanger -r eth0
    ```

    **Note:** You can access the `macchanger` help by running:

    ```bash
    macchanger --help
    ```

5. Finally, bring your interface up again by running:

  ```bash
  ip link set eth0 up
  ```
