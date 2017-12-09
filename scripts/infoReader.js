

let div = document.getElementsByClassName('news-story')[0];
let h5 = div.getElementsByTagName('h5');
let p = div.getElementsByTagName('p');
// let data = {
//         "items": [
//             {
//             "title": "sample 1",
//             "author": "author 1"},
//         {
//             "title": "sample 2",
//             "author": "author 2"}
//         ]
//     };

let json = require('/content.json');
console.log(json);


data.items.forEach(function(v, i) {
    h5[i].innerHTML = v.title;
    p[i].innerHTML = "By: " + v.author;
});
