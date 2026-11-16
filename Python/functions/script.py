# guests = [("Marcus", "lasagna"), ("Lena", "salad"), ("Sarah", "brownies")]

# for guest in guests: 
#   name, dish = guest
#   print(f"{name} is bringing {dish}")

# Challenge: Festival Lineup
# Each act in this festival lineup is a tuple: the band, their genre, and how many
# minutes they play.

lineup = [
    ("The Wailers", "reggae", 45),
    ("Daft Punk", "electronic", 90),
    ("Adele", "pop", 60),
    ("Metallica", "metal", 100),
]

# Loop over the lineup, unpacking each act into band, genre, and minutes. Use if/else to
# print a "long set" line for any act playing 90 minutes or more, and a normal line for
# the rest:
#    The Wailers (reggae) plays 45 minutes
#    Daft Punk (electronic) plays a long set: 90 minutes
#    Adele (pop) plays 60 minutes
#    Metallica (metal) plays a long set: 100 minutes

for band in lineup:
    name, genre, minutes = band
    if minutes >= 90:
        print(f"{name} ({genre}) plays a long set: {minutes} minutes")
    else:
        print(f"{name} ({genre}) plays {minutes} minutes")