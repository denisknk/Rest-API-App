<template>
  <div class="page_pagination_wrapper">
    <div
      class="pagination_number"
      :class="{ number_selected: index === page }"
      v-for="index in pages"
      :key="index"
      @click="choosePage(index)"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    pages: Number,
    page: Number,
  },
  methods: {
    choosePage(index) {
      this.$emit("onPaginationClick", index);
    },
  },
};
</script>

<style >
.page_pagination_wrapper {
  display: flex;
  width: 40%;
  justify-content: center;
}
.pagination_number {
  border: 1px solid rgba(158, 158, 158, 0.39);
  cursor: pointer;
  margin: 0 4px;
  width: 27px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
  color: #b17b29;
  transition: background-color, transform 0.4s ease;
}
.pagination_number:hover {
  background-color: rgba(177, 173, 173, 0.637);
  color: white;
  transform: translateY(-2px);
}
.number_selected {
  background-color: rgba(177, 173, 173, 0.637);
  color: white;
}
@media only screen and (max-width: 768px) {
  .page_pagination_wrapper {
    width: 75%;
  }
}
</style>