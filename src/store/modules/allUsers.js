import axios from "axios";

export default {
    state: {
        users: []
    },
    mutations: {
        UPDATE_ALL_USERS(state, users) {
state.users = users
        }
    },
    actions: {
       async FETCH_ALL_USERS(ctx) {
            await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
              const users = response.data;
            ctx.commit('UPDATE_ALL_USERS', users)
            });
            
        }
    },
    getters: {
    GET_ALL_USERS(state) {
         return state.users
     }   
    }
}