# in keyword

# bingo_numbers = ["B-7", "I-22", "N-33", "G-51", "O-68", "B-3", "I-19", "O-72"]
# already_called = ["B-7", "I-22", "G-51"]

# print("B-7" in already_called)
# print("O-68" in already_called)

# import random

# pick = random.choice(bingo_numbers)

# while pick in already_called:
#   pick = random.choice(bingo_numbers)

# print(f"Next call: {pick}")
# already_called.append(pick)
# print(already_called)

# Challenge: Raffle Drawing
# Build a feature that manages a charity raffle. The program picks a random winner but
# makes sure nobody wins twice. If the random winner has already won a prize, keep 
# drawing a random winner until you land on someone new.
# 1. Draw a random name from entrants.
# 2. If that name is already in winners, keep drawing until you get one
#    that isn't.
# 3. Add the new winner to winners and print: "Winner: <name>"

import random

entrants = ["Amara", "Diego", "Priya", "Leo", "Sofia", "Kwame"]
winners = ["Diego", "Sofia"]

entrant = random.choice(entrants)

while entrant in winners:
    entrant = random.choice(entrants)

winners.append(entrant)

print(f"Winner: {entrant}")