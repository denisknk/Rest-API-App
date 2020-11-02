<template>
  <div>
    <div class="comments_wrapper">
      <h2>Comments</h2>
      <div
        class="comment_wrapper"
        v-for="(comment, ind) in comments"
        :key="ind"
      >
        <p class="from"><span>From: </span>{{ comment.name }}</p>
        <p class="body">{{ comment.body }}</p>
        <p class="email">{{ comment.email }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments-block",
  props: {
    comments: Array,
  },
};
</script>

<style scoped>
.comments_wrapper {
  padding: 10px 5%;
  margin: 20px auto 0 auto;
  width: 60%;
  color: white;
  font-size: 1.4em;
  background-color: #242526b5;
  border: 1px solid rgba(202, 152, 95, 0.37);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.33);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body {
  margin-bottom: 10px;
  text-shadow: 2px 4px 3px rgb(233 227 227 / 30%);
}
.from {
  color: #fcff3b;
  margin-bottom: 10px;
  margin-top: 10px;
}
.from span {
  color: #afcde7;
}
.email {
  margin-bottom: 10px;
  color: #39c4c4c7;
}
h2 {
  color: #c8d1d8;
}

@media only screen and (max-width: 992px) {
  .comments_wrapper {
    width: 75%;
    font-size: 1.2em;
  }
}
</style>