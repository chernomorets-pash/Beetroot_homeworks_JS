// Створити сторінку, що показує нумерований список пісень:
const playList = [{
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];
// creating listeners and connect elements js-dom
const createBtn = document.getElementById('btn_create');
const ul = document.getElementsByClassName('playlist')[0];
const ol = document.getElementsByClassName('orderPlaylist')[0];
const songs = document.querySelectorAll('.playlist-item');
// function that create LI elements
const liCreator = function (array, parentElementUL, className) {
    //make a shelf with items from array, expecting that each element in array is object element
    array.map((item) => {
        for (key in item) {
            let listSong = item[key];
            let newLi = document.createElement('li');
            newLi.textContent = listSong;
            newLi.classList.add(`'${className}'`);
            parentElementUL.append(newLi);
        }
    });
};
// Another function for creating lists
const liCreatorTwo = function (arrayToWork, parentElementOL, className) {
    arrayToWork.forEach(element => {
        let newLi = document.createElement('li');
        newLi.textContent = (`${element.author} - ${element.song}`);
        newLi.classList.add(`'${className}'`);
        parentElementOL.append(newLi);
    });
}
// Event listener
createBtn.addEventListener('click', () => {
    liCreatorTwo(playList, ol, 'playlist-item')
});