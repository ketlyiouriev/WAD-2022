window.onload = function() {



    fetch('http://myjson.dit.upm.es/api/bins/e7re')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

        })



}