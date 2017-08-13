// write a function to retrieve json from http://rallycoding.herokuapp.com/api/music_albums
// use async await syntax fetch api

// paste this to a modern browser
// function getAlbums() {
//     fetch("https://rallycoding.herokuapp.com/api/music_albums")
//         .then(response => response.json()) // response.json() is another promise
//         .then(data => console.log);
// }

const getAlbums = async () => {
    const response = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
    const data = await response.json();
    console.log(data);
}

getAlbums();