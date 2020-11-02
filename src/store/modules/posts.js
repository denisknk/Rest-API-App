import axios from "axios";

export default {
    state: {
        posts: []
    },
    mutations: {
        UPDATE_ALL_POSTS(state, posts) {
state.posts = posts
        }
    },
    actions: {
       async FETCH_ALL_POSTS(ctx) {
            await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
              const posts = response.data;
            ctx.commit('UPDATE_ALL_POSTS', posts)
            });
            
        }
    },
    getters: {
    ALL_POSTS(state) {
         return state.posts
     }   
    }
}