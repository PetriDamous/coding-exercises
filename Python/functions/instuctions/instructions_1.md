Challenge: Get the App Running

The app has show_queue stubbed and the "quit" command wired up. 
Two more functions need stubs, and the loop only handles "quit" so far.

1. Stub add_singer and remove_singer, following the show_queue example: each takes
   queue, has a one-sentence docstring, and prints a placeholder like "[add a singer]".

2. Finish the if/elif/else chain. When the command is "add" or
   "remove", call the matching function.

3. Add an else that handles when the app receives an unrecognized command (see the example below).

4. Call run_app(queue) and test it. Make sure add, remove, and quit each work, and that
  typing a command that doesn't exist, like "sing", prints your message and doesn't
  crash the app.

Example output:

============================================
Welcome to Sing Out: A Karaoke Queue Manager
============================================

[the queue goes here]

Options: add / remove / quit
 > add

[add a singer]

> sing

Sorry, I don't know the command 'sing'.

> quit

The queue is closed. Good night!