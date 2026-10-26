
# Challenge: Update the Excuse Generator to accept user input.

# Right now all the variables are hardcoded. Let's fix that.
# 1. Replace each variable's value with an input() prompt.
# 2. Print and test — make sure your output still looks like this:
#    "Sorry [Ted], I can't go to [the movies] — I have [345] [bees] to [crochet]
#     and honestly it's taking longer than expected."

name = input("The fucks your name? ")
event = input("What fuckin event are you going to? ")
number = input("Enter a fuckin number. ")
noun = input("Pick a fuckin noun already. ")
verb = input("Pick a fuckin verb or else. ")

excuse = f"Sorry {name}, I can't go to {event} — I have {number} {noun} to {verb} and honestly it's taking longer than expected."

print(excuse)