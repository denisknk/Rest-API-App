<template>
  <div class="new_post_wrapper">
    <form method="POST" v-on:submit.prevent="submitForm">
      <label for="text">
        <input
          type="text"
          id="text"
          v-model.lazy="post.title"
          placeholder="title"
        />
      </label>
      <label for="">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model.lazy="post.body"
        ></textarea>
      </label>
      <button>Submit</button>
    </form>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "new-post-page",
  data() {
    return {
      post: {
        title: "",
        body: "",
        userId: 1,
      },
    };
  },
  methods: {
    ...mapActions([
      "SET_IS_HIDDEN_HOME_BUTTON",
      "SET_IS_HIDDEN_NEW_POST_BUTTON",
      "SET_USER_BUTTON_HIDDEN",
    ]),
    submitForm() {
      if (this.post.title.length < 5 || this.post.body.length < 5) {
        // here we want to check if there is minimum 5 characters in title or body before submit
        alert("Title and body should not be shorter than 5 characters");
        return;
      }
      // if everything is ok, we submit form
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.post)
        .then((res) => {
          // here is success alert
          alert(
            `YOUR POST HAS BEEN UPLOADED \n Title: ${res.data.title}  \n Body: ${res.data.body}`
          );
          this.post.title = "";
          this.post.body = "";
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {});
    },
  },

  mounted() {
    this.SET_IS_HIDDEN_HOME_BUTTON(false); // showing "home button"
    this.SET_IS_HIDDEN_NEW_POST_BUTTON(true); // hiding "new post" button
    this.SET_USER_BUTTON_HIDDEN(false); // showing "users" button
  },
};
</script>

<style scoped>
.new_post_wrapper {
  margin: 0 auto;
  width: 50%;
  border-radius: 8px;
  background-color: #5b6164;
  display: flex;
  justify-content: center;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form > label {
  width: 100%;
  display: flex;
  justify-content: center;
}
input {
  width: 60%;
  font-size: 2.6em;
  margin: 20px 0;
  color: gray;
}
textarea {
  width: 60%;
  font-size: 1.8em;
  color: gray;
  margin-bottom: 20px;
}
button {
  margin-bottom: 20px;
  width: 20%;
  font-size: 1.8em;
  color: gray;
  border-radius: 8px;
}

@media only screen and (max-width: 1200px) {
  input {
    font-size: 1.8em;
  }
  textarea {
    font-size: 1.2em;
  }
}
@media only screen and (max-width: 992px) {
  input {
    font-size: 1.2em;
  }
  textarea {
    font-size: 0.8em;
  }
  button {
    font-size: 1.2em;
  }
}
@media only screen and (max-width: 768px) {
  input {
    font-size: 1em;
    width: 75%;
  }
  textarea {
    font-size: 0.7em;
    width: 75%;
  }
  button {
    font-size: 1.2em;
    width: 40%;
  }
  .new_post_wrapper {
    width: 85%;
  }
}
</style>