// Task : Use dot notation and bracket notation to put the porperties inside the object:
let myPlaylist = {
  name: "My Awesome Playlist",
};

myPlaylist.EasyOnMe = "Adele"; //  EasyOnMe: 'Adele'
let property = Object.keys(myPlaylist)[1];
const regex = /[A-Z][a-z]+/g;
let newProperty = property.match(regex).join(" ");
// console.log(newProperty);
myPlaylist[newProperty] = "Adele";
delete myPlaylist.EasyOnMe;
// The other one:
let secondSongTitle = "Shake It Off";
myPlaylist[secondSongTitle] = "Taylor Swift";

console.log(myPlaylist);
//Anthough dot notation is completely unnecessary, I needed to practice both before I move on with my tasks further.
