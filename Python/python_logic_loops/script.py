# Remember to give JS compares as well!!!

# Strip
# "   hello".strip()
# print("50%".strip('%'))

# recipe = "     tiramisu    "
# print(recipe.strip())

# Join
# .join()

# Upper
# recipe = "chicken tikka masala"
# print(recipe.upper())

# ecipe = "chicken tikka masala"
# header = recipe.upper()

# print(recipe)
# print(header)

# recipe = "chicken tikka masala"
# header = recipe.upper()

# Lower
# search = "PASTA CARBONARA"
# print(search.lower())

# Title
# chef = "grace smith"
# print(chef.title())

# Method Chaining
# raw = "    CHiCKen TIKKA MasALA"
# query = raw.strip().lower()
# print(query)

# Challenge: Data Cleanup
# You're building a sign-up form that tidies up whatever users type in.
# Each value below comes in messy. Figure out which string method (or
# methods) gets it to the clean version, then print the result. Some need
# just one method, and some need two chained together:
# 1. promo_code    "spring25"             ->  "SPRING25"
# 2. full_name     "jamie rivera"         ->  "Jamie Rivera"
# 3. email         "  Jamie@Example.COM"  ->  "jamie@example.com"
# 4. display_name  "  the ROCK  "         ->  "The Rock"

promo_code = "spring25"
full_name = "jamie rivera"
email = "  Jamie@Example.COM"
display_name = "  the ROCK  "

print(promo_code.upper())
print(full_name.title())
print(email.strip().lower())
print(display_name.strip().title())