# Challenge: Track the Score
# Tell the player their score and how they did!
# 1. Before the loop, set up a `score` variable to count correct guesses. Initalize to 0.
# 2. Each time the player guesses correctly, increment the score by one.
# 3. Once the game ends, show a final score out of the total rounds. Example: "Final score: 3/5"
# 4. Use an if/elif/else chain to give fun feedback based on their score. Here's an example output, but feel free to write your own:
#    A score of 5: "Flawless! All tests passing, zero bugs."
#    A score of 4: "Near perfect, only one failing test!"
#    A score of 3: "Good effort! The code runs, and that's what counts."
#    A score under 3: "Have you tried turning it off and on again?"

import random

word_bank = [
    ("standup", "Every morning, our fifteen-minute ____ meeting lasts until lunch."),
    ("syntax", "One missing bracket, and Python hits me with a ____ error."),
    ("debug", "I spent four hours trying to ____ my code. Turns out I was missing comma."),
    ("deploy", "It's Friday at 5pm, definitely the best time to ____ new code."),
    ("bandwidth", "Sorry boss, I can't take on more work. I just don't have the ____."),
    ("meeting", "That ninety-minute ____ could have been an email."),
    ("deadline", "Of course we'll hit the ____, no problem! Well, within a couple of days. Maybe a week."),
    ("backup", "We finally made a ____ of everything, the day after the laptop died."),
    ("server", "I'm getting a 500 error, which means the ____ is down again."),
    ("prototype", "It's just an early ____, so please ignore that clicking anywhere crashes it."),
]

score = 0

print("~" * 40)
print()
print("   Welcome to Jargon Jumble!")
print("   A Tech-Themed Word Scramble Game")
print()
print("~" * 40)

ROUNDS = 5
round_num = 1
used = []

while round_num <= ROUNDS:
  
  word, hint = random.choice(word_bank)

  while (word, hint) in used:
    word, hint = random.choice(word_bank)

  used.append((word, hint))

  letters = list(word)
  random.shuffle(letters)
  scrambled_word = "".join(letters).upper()

  print()
  print(f"Round {round_num}")
  print()
  print(f"Scrambled: {scrambled_word}")
  print()
  print(f"Current score: {score} / 5")
  print()

  guess = input("Guess the word (or type 'hint' / 'skip' / 'quit'): ").strip().lower()

  if guess == "hint":
    print()
    print(f"Hint: {hint}")
    print()
    guess = input("Your guess (or 'skip' / 'quit'): ").strip().lower()

  if guess == "quit":
    print("Thanks for playing!")
    break
  elif guess == "skip":
    print(f"Skipped! The word was '{word}'.")
  elif guess == word:
    print("✅  Correct!")
    score += 1
  else:
    print(f"❌ Sorry, the word was '{word}'.")

  round_num += 1

print(f"Final score: {score} / 5")

if score == 5:
  print("Flawless! All tests passing, zero bugs.")
elif score == 4:
  print("Near perfect, only one failing test!")
elif score == 3:
  print("Good effort! The code runs, and that's what counts.")
else:
  print("Have you tried turning it off and on again?")