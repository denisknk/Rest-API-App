export default {
    state: {
        usersButtonHidden: ""
    },
    mutations: {
        UPDATE_USER_BUTTON_HIDDEN(state, bool) {
            state.usersButtonHidden = bool
        }
    },
    actions: {
        SET_USER_BUTTON_HIDDEN(ctx, bool) {
            ctx.commit('UPDATE_USER_BUTTON_HIDDEN', bool) 
        }
    },
    getters: {
        GET_USER_BUTTON_HIDDEN(state) {
         return state.usersButtonHidden
     }   
    }
}