const notes = [
    {
        title: 'Wash dishes',
        body: 'Remember to was dishes'
    },

    {
        title: 'Clean bathroom',
        body: 'Rembmer to unclog drains and clean bathtub'
    },

    {
        title: 'Pay electric bill',
        body: 'Electric bill is due'
    }
];

// function findNote(note, title) {
    // const idx = note.findIndex(function(note) {
        // return note.title.toLowerCase() === title.toLowerCase();
    // });
// 
    // return note[idx];
// }

// function findNote(note, title) {
    // return note.find(function(elm, idx) {
        // return elm.title.toLowerCase() ===  title.toLowerCase();
    // });
// }
// 
// console.log(findNote(notes, 'Pay electric bill'));
// console.log(findNote(notes, 'balls'));

function findNotes(notes, query) {
    return notes.filter(function(elm, idx) {
        const title = elm.title.toLowerCase().includes(query.toLowerCase());
        const body = elm.body.toLowerCase().includes(query.toLowerCase());
        return title || body;
    });
}

console.log(findNotes(notes, 'uncLog DraIns'));
console.log(findNotes(notes, 'balls'));
