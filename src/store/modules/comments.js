import axios from "axios";

export default {
    state: {
        comments: []
    },
    mutations: {
        UPDATE_POST_COMMENTS(state, comments) {
state.comments = comments
        }
    },
    actions: {
       async FETCH_POST_COMMENTS(ctx, id) {
            await axios
            .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => {
              const comments = response.data;
            ctx.commit('UPDATE_POST_COMMENTS', comments)
            });
            
        }
    },
    getters: {
     GET_POST_COMMENTS(state) {
         return state.comments
     }   
    }
}