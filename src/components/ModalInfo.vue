<template>
  <div class="modal_overlay">
    <div class="modal_block">
      <div class="modal_header">
        <p>{{ company.name }}</p>
        <FontAwesomeIcon :icon="appIcon" @click="closeModal()" class="icon" />
      </div>
      <hr />
      <p class="catchPhrase">{{ company.catchPhrase }}</p>
      <p>{{ company.bs }}</p>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "ModalInfo",
  props: {
    company: Object,
  },
  computed: {
    appIcon() {
      return faTimes;
    },
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    closeModal() {
      this.$emit("onCloseModalClick");
    },
  },
};
</script>

<style scoped>
.modal_overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_block {
  padding: 10px 10px;
  width: 40%;
  background-color: #efecdd;
  box-shadow: 0px 0px 12px 0px rgba(192, 179, 179, 0.589);
  border-radius: 8px;
  font-size: 2em;
  color: #5b6164;
}
.modal_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.catchPhrase {
  margin-bottom: 10px;
  background-color: rgb(194, 169, 169);
  color: white;
}
.icon {
  cursor: pointer;
}
</style>