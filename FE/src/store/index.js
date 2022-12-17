import { createStore } from 'vuex'

const store = createStore({
  state: {
    posts: []
  },
  getters: {
  },
  mutations: {
    incrementPostLike (state, post_id) {
        state.posts[post_id].likes_count += 1
    },
    resetPostsLikes (state) {
        state.posts.forEach(post => post.likes_count = 0)
    },
    setAllPosts (state, posts) {
        state.posts = posts.posts;
    },

  },
  actions: {
    async getPosts ({ commit }) {
        const result = await fetch("http://localhost:3000/posts", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: 'include', //  Don't forget to specify this if you need cookies
            })
            .then((response) => response.json())
                .then((data) => {
                    return data
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error");
                    return []
        });
        commit("setAllPosts", result)

    }
  },
  modules: {
  }
})



export default store;