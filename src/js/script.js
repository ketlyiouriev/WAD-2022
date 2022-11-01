import posts from '/res/json/posts.json' assert {type: 'json'};

window.onload = function() {
    fetch('http://myjson.dit.upm.es/api/bins/e7re')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            appendData(data);

            function appendData(data) {
                var mainContainer = document.getElementsByClassName("main-body");
                for (var i = 0; i < data.length; i++) {
                    var post_box = document.createElement("div");
                    create_header_content(i, post_box);
                    create_body_content(i, post_box);
                    create_footer_content(i, post_box);
                    mainContainer.appendChild(post_box);
                }
            }
    
            function create_header_content(i, post_box) {
                var div_header = document.createElement("div");
                var img = document.createElement("img");
                img.src = posts[i].user_icon;
                div_header.appendChild(img);
                var p = document.createElement("p");
                var text_node = document.createTextNode(posts[i].datetime);
                p.appendChild(text_node);
                div_header.appendChild(p);
                post_box.appendChild(div_header);
            }
    
            function create_body_content(i, post_box) {
                var div_content = document.createElement("div");
                var p = document.createElement("p");
                var text_node = document.createTextNode(posts[i].datetime);
                p.appendChild(text_node);
                div_content.appendChild(p);
                var img = document.createElement("img");
                img.src = posts[i].image;
                div_content.appendChild(img);
                post_box.appendChild(div_content);
                
            }
    
            function create_footer_content(i, post_box) {
                var div_footer = document.createElement("div");
                var img = document.createElement("img");
                img.src = posts[i].like_button;
                div_footer.appendChild(img);
                post_box.appendChild(div_footer);
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