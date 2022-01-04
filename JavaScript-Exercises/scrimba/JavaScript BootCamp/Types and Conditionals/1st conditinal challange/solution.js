// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement

const time = "morning" // could be "afternoon", "evening" and "night"

// Challenge 1:

if (time === "morning") {
    console.log(`Good ${time}`);
} else if (time === "afternoon") {
    console.log(`Good ${time}`);
} else if (time === "evening") {

} else {
    console.log(`Good ${time}`);
}

// Challenge 2:

switch (time) {
    case "morning":
        console.log(`Good ${time}`);
        break;
    case "afternoon":
        console.log(`Good ${time}`);
        break;
    case "evening":
        console.log(`Good ${time}`);
        break;
    default:
        console.log(`Good ${time}`);
}