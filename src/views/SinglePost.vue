<template>
  <div>
    <HeaderMessage msg="Post Page" />
    <div class="single_post_wrapper">
      <div class="post">
        <h2 class="header_post">{{ post.title }}</h2>
        <p class="body_post">{{ post.body }}</p>
      </div>
    </div>
    <CommentsBlock v-bind:comments="comments" />
    <!-- in this component we binding props with comments -->
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import HeaderMessage from "../components/HeaderMessage";
import CommentsBlock from "../components/CommentsBlock";

export default {
  name: "singlePost",
  data() {
    return {
      post: {},
      id: "",
      comments: [],
    };
  },

  computed: {
    ...mapGetters(["GET_USER_ID", "GET_SINGLE_POST", "GET_POST_COMMENTS"]),
  },

  methods: {
    ...mapActions([
      "fetchPost",
      "SET_IS_HIDDEN_HOME_BUTTON",
      "FETCH_POST_COMMENTS",
      "SET_IS_HIDDEN_NEW_POST_BUTTON",
      "SET_USER_BUTTON_HIDDEN",
    ]),
  },
  watch: {
    GET_SINGLE_POST() {
      // watching single post object
      this.post = this.GET_SINGLE_POST;
    },
    GET_POST_COMMENTS() {
      // watching comments to this post
      this.comments = this.GET_POST_COMMENTS;
    },
  },
  components: {
    HeaderMessage,
    CommentsBlock,
  },
  async mounted() {
    this.SET_IS_HIDDEN_NEW_POST_BUTTON(false); // showing "new post" button
    this.SET_USER_BUTTON_HIDDEN(false); // showing "users" button
    let actualIdOfPost;
    if (this.$route.params.id) {
      // if we have typed post id in Url,
      // we want to use it insted of we already have in the store
      actualIdOfPost = this.$route.params.id;
    } else {
      actualIdOfPost = this.GET_USER_ID;
    }
    this.fetchPost(actualIdOfPost); // fetching single post
    this.FETCH_POST_COMMENTS(actualIdOfPost); // fething comments to same post
    this.SET_IS_HIDDEN_HOME_BUTTON(false); // showing "home button"
  },
};
</script>


<style >
.single_post_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

@media only screen and (max-width: 992px) {
  /* .single_post_wrapper {
    font-size: 1em;
  } */
}
</style>