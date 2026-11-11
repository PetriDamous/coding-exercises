import random

words = ['dog', 'cat', 'monkey']

selected_word = random.choice(words)

split_word = list(selected_word)

random.shuffle(split_word)

scrambled_word = "".join(split_word)

print(scrambled_word)