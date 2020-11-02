export default {
    state: {
        id: ""
    },
    mutations: {
        UPDATE_USER_ID(state, id) {
state.id = id
        }
    },
    actions: {
       SET_USER_ID(ctx, id) {
            ctx.commit('UPDATE_USER_ID', id) 
            
        }
    },
    getters: {
      GET_USER_ID(state) {
         return state.id
     }   
    }
}