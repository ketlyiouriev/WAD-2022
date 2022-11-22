import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        "datetime": "10.10.2022",
        "user_name": "sunflower_123",
        "user_icon": "res/images/profile_logo.png",
        "post_title": "Afternoon library visit",
        "post_content": "Went to the University of Tartu Library for the first time today!",
        "image": "res/images/ut_library.jpg",
        "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "23.10.2022",
          "user_name": "aster_010",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "WAD lecture room information",
          "post_content": "Anyone knows in which room is the lecture today?",
          "image": null,
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "04.08.2022",
          "user_name": "lotus_456",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Books are life",
          "post_content": "Any book recommendations?",
          "image": "res/images/library.jpg",
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "15.09.2022",
          "user_name": "orchid_444",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Book recommendation",
          "post_content": "I really enjoyed 'Beautiful World, Where Are You' by Sally Rooney! ;)",
          "image": null,
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "23.10.2022",
          "user_name": "lavender_987",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "WAD lecture room clarification",
          "post_content": "Today it's in room 1008! ;)",
          "image": "res/images/delta_rooms.jpg",
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "22.10.2022",
          "user_name": "tulip_777",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Pets are the cutest",
          "post_content": "Hey guys, do you have any pets? I have a rabbit.",
          "image": "res/images/rabbit.jpg",
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "31.10.2022",
          "user_name": "rose_222",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Pets are the cutest - I agree",
          "post_content": "Love your rabbit! I have 3 dogs :)",
          "image": null,
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "02.11.2022",
          "user_name": "daisy_000",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Curious me",
          "post_content": "Tell me something I already don't know!",
          "image": null,
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "01.09.2022",
          "user_name": "iris_876",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Funniest joke I've ever heard",
          "post_content": "Funny joke - I would like to make the world a better place, but they wont't give me the source code!",
          "image": null,
          "like_button": "res/images/like_button.png"
      },

      {
          "datetime": "01.11.2022",
          "user_name": "Check this out",
          "user_icon": "res/images/profile_logo.png",
          "post_title": "Went to skydiving yesterday!",
          "post_content": "Check this out!",
          "image": "res/images/skydiving.jpg",
          "like_button": "res/images/like_button.png"
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    IncreaseLikesAct: act => {
      setTimeout(function() {
          act.commit("IncreaseLikes")
      }, 1000)
    },
    ResetLikesAct: act => {
      setTimeout(function() {
        act.commit("ResetLikes")
    }, 1000)
    }
  },
  modules: {
  }
})