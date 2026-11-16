queue = [("Annie", "Dancing Queen"), ("Allen", "Country Roads")]

def show_queue(queue):
  """Print everyone currently in the queue"""
  print("[the queue goes here]")

# Function stubs go here
def add_singer(queue):
  """Ask for the singer and add them to the queue"""
  print("[add a singer]")


def remove_singer(queue): 
  """Remove singer fron the queue"""
  print("[remove a singer]")

def run_app(queue):
    print("=" * 44)
    print("Welcome to Sing Out: A Karaoke Queue Manager")
    print("=" * 44)

    is_running = True 

    while is_running: 
      show_queue(queue)
      print()
      print("Options:  add / remove / quit")
      command = input("> ")

      if command == "quit": 
        is_running = False
        print("The queue is closed. Good night!")
      # your commands go here 
      elif command == "add": 
        add_singer(queue)
      elif command == "remove":
        remove_singer(queue)
      else: 
        print(f"Sorry, I don't know the command '{command}'")

run_app(queue)
