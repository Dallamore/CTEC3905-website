let div = document.getElementsByClassName('news-story')[0];
let h5 = div.getElementsByTagName('h5');
let p = div.getElementsByTagName('p');

let imgHolder = document.getElementById("imgHolder");


let data = {
        "items": [
            {
            "title": "sample 1",
            "author": "author 1"},
        {
            "title": "sample 2",
            "author": "author 2"}
        ]
    };


data.items.forEach(function(v, i) {
    h5[i].innerHTML = v.title;
    p[i].innerHTML = "By: " + v.author;
});
