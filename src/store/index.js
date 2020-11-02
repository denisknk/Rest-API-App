import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts';
import singlePost from './modules/singlePost'
import userId from './modules/userId';
import toggleHomeButton from './modules/toggleHomeButton';
import toggleNewPostButton from './modules/toggleNewPostButton'
import comments from './modules/comments';
import allUsers from './modules/allUsers';
import toggleUserButton from './modules/toggleUsersButton'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts, 
    singlePost,
    userId,
    toggleHomeButton,
    comments,
    toggleNewPostButton,
    allUsers, 
    toggleUserButton
  }
})
