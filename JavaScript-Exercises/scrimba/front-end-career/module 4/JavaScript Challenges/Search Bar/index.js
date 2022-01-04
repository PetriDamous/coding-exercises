const navBar = document.getElementById("nav-bar");
const userSearch = document.getElementById("user-search");
const userDisplay = document.getElementById("user-display");

const userArray = [
    "Bob",
    "Karl",
    "Doug",
    "Winters",
    "Bitch ass nigga",
    "Akky",
    "Nu Type",
    "PetriD",
    "Mario",
    "Chris",
    "Jill",
    "Yoshi"
];

const filter = (userQuery) => {
    
    let filteredUsers = userArray.filter((user) => {
        return user.toLocaleLowerCase().includes(userQuery);
    });

    userDisplay.innerHTML = "";
    
    render(filteredUsers);
}

const render = (users) => {
    users.forEach((user) => {
        const card = document.createElement("li");
        card.textContent = user;
        userDisplay.appendChild(card);
    });
}



window.addEventListener("scroll", (e) => {   

    if (navBar.offsetTop < e.currentTarget.scrollY) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
    
});

userSearch.addEventListener("input", (e) => {
    let userQuery = e.currentTarget.value.toLowerCase();
    // console.log(userQuery)
    filter(userQuery);
});

render(userArray);