
import posts from '/res/json/posts.json' assert {type: 'json'};


window.onload = function() {
    fetch('http://myjson.dit.upm.es/api/bins/e7re')
        .then((response) => response.json())
        .then(posts => {
            console.log(posts);
            appendData(posts);

            function appendData(posts) {
                console.log("jõudsin siia!")
                var mainContainer = document.getElementsByClassName("main-body");
                for (var i = 0; i < data.length; i++) {
                    var post_box = document.createElement("div");
                    create_header_content(i, mainContainer);
                    create_body_content(i, mainContainer);
                    create_footer_content(i, mainContainer);
                    mainContainer.appendChild(post_box);
                }
              }
    
            function create_header_content(i, mainContainer) {
                var div_header = document.createElement("div");
                var img = document.createElement("img");
                
                img.appendChild(posts[i].user_icon);
                div_header.appendChild(img);
                var p = document.createElement("p");
                p.appendChild(posts[i].datetime);
                div_header.appendChild(p);
                mainContainer.appendChild(div_header);
            }
    
            function create_body_content(i, mainContainer) {
                var div_content = document.createElement("div");
                var p = document.createElement("p");
                p.appendChild(posts[i].post_content);
                div_content.appendChild(p);
                var img = document.createElement("img");
                img.appendChild(posts[i].image);
                div_content.appendChild(img);
                mainContainer.appendChild(div_content);
                
            }
    
            function create_footer_content(i, mainContainer) {
                var div_footer = document.createElement("div");
                var img = document.createElement("img");
                img.appendChild(posts[i].like_button);
                div_footer.appendChild(img);
                mainContainer.appendChild(div_footer);
            }

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