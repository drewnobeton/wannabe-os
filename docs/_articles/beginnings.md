---
order_number: 2
title: Beginnings
---
### Clean slate
I have no idea on higher or lower level concepts of an OS. **Thats why I won't use proper names to describe things, sorry :(** 

I take that as a plus tho, I'll try to stay away from legacy ideas and all the shit that built up over all those years.
I don't care how things worked back in the 80's or whatever, I don't have to be compatible with anything. 

My idea is to create an OS capable of running multiple C progras at once. Here is the general description on how do I want to achieve this:
- **Initialise my system:** boot (preferably via UEFI), check for external devices (optional xD, even if i'll stick to just disks and USB, plus a monitor) ,initialise fs (most likely FAT)
- **Start the system-master process** I might rename this, but this will be the process(a running program) that gives and takes other processes resources. 
- **Start the system-watchdog process (optional)** This will be a process, that checks if a process(excluding system-master) is working OK, if not (f.e. is deadlocked or crashed or something) it shuts it down.
- **Start system-user process** This will be the process that a user will see as a command line. From there he can do stuff like open up proceses he wants, with desired arguments.

**NETWORKING NOT PLANNED SORRY** wannabeOS won't be able to do most crucial function an OS has to do - open up a web browser. What a failure. But one day who knows?

### Some high-level ideas

**First of all i have no idea, if those are feasible xD, they're subject to change**

I'll put some when i get some that make sense.

