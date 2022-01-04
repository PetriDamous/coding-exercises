var button = document.getElementsByTagName('button')[0];

var header = document.getElementById('myHeader');

console.log(button);

const randomColor = () => (
    Math.floor(Math.random() * 255) + 1
)


    


button.addEventListener('click', () => header.style.color =  `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`);