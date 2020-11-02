<template>
  <div class="home">
    <HeaderMessage msg="ALL POSTS" />
    <Pagination
      @onPaginationClick="choosePage"
      :pages="parseInt(pages)"
      :page="parseInt(page)"
    />
    <!-- we bind some data to Pagination component, and listen click event from it -->
    <div
      class="post"
      v-for="post in posts"
      :key="post.id"
      @click="goToPage(post.id)"
    >
      <h2 class="header_post">{{ post.title }}</h2>
      <p class="body_post">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import HeaderMessage from "@/components/HeaderMessage.vue";
import Pagination from "../components/Pagination";
import { mapGetters, mapActions } from "vuex";
import router from "../router/index";
export default {
  name: "home",
  data() {
    return {
      posts: [],
      page: 1,
      perPage: 10,
      pages: 0,
    };
  },
  computed: {
    ...mapGetters(["ALL_POSTS"]),
    ...mapGetters(["GET_IS_HIDDEN_HOME_BUTTON"]),
  },
  watch: {
    ALL_POSTS() {
      // watching all posts array
      this.posts = this.pagination(1);
      this.pages = this.posts.length;
    },
  },
  methods: {
    ...mapActions([
      "FETCH_ALL_POSTS",
      "SET_USER_ID",
      "SET_IS_HIDDEN_HOME_BUTTON",
      "SET_IS_HIDDEN_NEW_POST_BUTTON",
      "SET_USER_BUTTON_HIDDEN",
    ]),
    pagination(index) {
      //  this function returns new smaller array to fill one page
      const posts = [...this.ALL_POSTS];
      this.page = index;
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      const sp = posts.slice(from, to);
      return sp;
    },
    choosePage(index) {
      // choosing a page by number
      this.posts = this.pagination(index);
    },
    goToPage(id) {
      this.SET_IS_HIDDEN_HOME_BUTTON(false); /// showing "home" button
      this.SET_USER_ID(id); // setting current user id to store
      router.push({ name: "Post", params: { id: id } }); // redirecting to a "single post" page
    },
  },

  async mounted() {
    this.SET_IS_HIDDEN_NEW_POST_BUTTON(false); // showing "new post button"
    this.SET_USER_BUTTON_HIDDEN(false); // showing "users" button
    this.FETCH_ALL_POSTS(); // fetching all posts from server
    if (!this.$route.params.id) {
      this.SET_IS_HIDDEN_HOME_BUTTON(true); // hiding "home" button
    }
  },
  name: "Home",
  components: {
    HeaderMessage,
    Pagination,
  },
};
</script>


<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post {
  border: 1px solid rgba(202, 152, 95, 0.37);
  width: 40%;
  margin: 10px 0;
  padding: 0 3%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.33);
}
.header_post {
  margin: 10px 0 20px 0;
  text-align: center;
  text-transform: uppercase;
  color: #757474;
}

.body_post {
  margin-bottom: 20px;
  text-align: center;
}

@media only screen and (max-width: 1200px) {
  .post {
    width: 60%;
  }
}
@media only screen and (max-width: 992px) {
  .post {
    width: 75%;
  }
}
</style>



