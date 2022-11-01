import posts from 'res/json/posts.json' assert {type: 'json'};


console.log(posts.user_name)

window.onload = function() {
    fetch(posts)
        .then((response) => response.json())
        .then(json => {
            console.log(json);

        })
}

/*
window.onload = function() {



    
    fetch('http://myjson.dit.upm.es/api/bins/e7re')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

        })
    



}
*/