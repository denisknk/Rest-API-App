import axios from "axios";

export default {
    state: {
        post: ''
    },
    mutations: {
        UPDATE_SINGLE_POST(state, post) {
state.post = post
        }
    },
    actions: {
       async fetchPost(ctx, p) {
            await axios
            .get("https://jsonplaceholder.typicode.com/posts/", {
                params: {
                  id: p
                }
              })
            .then((response) => {
              const post = response.data[0];
            ctx.commit('UPDATE_SINGLE_POST', post)
            });
            
        }
    },
    getters: {
     GET_SINGLE_POST(state) {
         return state.post
     }   
    }
}