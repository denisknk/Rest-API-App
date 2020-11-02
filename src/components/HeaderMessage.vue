<template>
  <div class="all_posts_wrapper">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Pagination from "../components/Pagination";
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.all_posts_wrapper {
  margin-top: 100px;
  color: #818080d2;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
