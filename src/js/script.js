import posts from '/res/json/posts.json' assert {type: 'json'};

window.onload = function() {
    fetch('http://myjson.dit.upm.es/api/bins/e7re')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            appendData(data);

            function appendData(data) {
                var mainContainer = document.getElementById("main-body");
                for (var i = 0; i < data.length; i++) {
                    var post_box = document.createElement("div");
                    post_box.className = "post-box";
                    create_header_content(i, post_box);
                    create_body_content(i, post_box);
                    create_footer_content(i, post_box);
                    console.log(post_box)
                    mainContainer.appendChild(post_box);
                }
                console.log(mainContainer);
            }
    
            function create_header_content(i, post_box) {
                var div_header = document.createElement("div");
                div_header.className = "post-header";
                var img = document.createElement("img");
                img.className = "profile_logo";
                img.src = posts[i].user_icon;
                img.width = 60; img.height = 60; img.alt = "My profile"
                div_header.appendChild(img);
                var p = document.createElement("p");
                var text_node = document.createTextNode(posts[i].datetime);
                p.appendChild(text_node);
                div_header.appendChild(p);
                post_box.appendChild(div_header);
            }
    
            function create_body_content(i, post_box) {
                var div_content = document.createElement("div");
                div_content.className = "post-body";
                var p = document.createElement("p");
                var text_node = document.createTextNode(posts[i].post_content);
                p.appendChild(text_node);
                div_content.appendChild(p);
                if (posts[i].image != null) {
                    var img = document.createElement("img");
                    img.src = posts[i].image;
                    img.alt = "Post content picture"
                    div_content.appendChild(img);
                }
                post_box.appendChild(div_content);
                
            }
    
            function create_footer_content(i, post_box) {
                var div_footer = document.createElement("div");
                div_footer.className = "post-footer";
                var img = document.createElement("img");
                img.src = posts[i].like_button;
                img.width = 50; img.height = 50; img.alt = "Like button"
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