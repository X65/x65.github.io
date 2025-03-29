---
title: OS/816 - Multitasking and System Calls
category: news
author: smokku
---

During past weeks I've made solid progress on OS/816. The multitasking scheduler and I/O is up and running.

First was a simple test - one task increments its A register, the other decrements its own version of A register. Basic, but it proves context switching works.

<video controls height="480">
  <source src="/media/2025-03-04_COP-scheduler.mp4" type="video/mp4" />
  Download the <a href="/media/2025-03-04_COP-scheduler.mp4">MP4 video</a>.
</video>

Also got the COP-based syscall framework implemented. This part took some effort to get right - making sure system calls don't interfere with task switching. Now, if a task switch happens during a syscall, the kernel finishes up the syscall work but resumes execution with the next scheduled task instead of the original caller. Works like a proper modern OS should.

For testing this, I got two tasks running:

1. A basic counter task to validate context switching.
2. A UART echo task using `read()` and `write()` syscalls - reads input into a buffer, then writes it back.

![UART echo](/media/2025-03-18_UART-echo.png)

The syscall mechanism itself is a joy to work with. Just push the arguments to the stack, load the API index into `A`, `COP $21`, and that's it. Result comes back in `A`, and all other registers stay untouched. No need to worry about JSR addresses or register clobbering.

And for the sharp-eyed folks: Yes, $21 was chosen on purpose. 😉

Also started working on the CLI shell. So far, it has `help` and `echo`, and adding new commands is really simple.

![CLI shell](/media/2025-03-28_CLI-says-hello.png)

This was a big step - things are starting to really come together.
