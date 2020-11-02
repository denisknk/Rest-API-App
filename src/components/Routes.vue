<template>
  <div id="routes">
    <div id="nav">
      <span class="span_bottom"
        ><router-link to="/" v-if="!isHidden" v-on:click="handleClick()"
          >Home</router-link
        ></span
      >
      <span v-if="!isHiddenNew" class="span_bottom"
        ><router-link to="/new">Create new post</router-link></span
      >
      <span class="span_bottom" v-if="!usersButtonHidden"
        ><router-link to="/users">Users</router-link></span
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Routes",
  data() {
    return {
      isHidden: true,
      isHiddenNew: false,
      usersButtonHidden: false,
    };
  },
  computed: {
    ...mapGetters([
      "GET_IS_HIDDEN_HOME_BUTTON",
      "GET_IS_HIDDEN_NEW_POST_BUTTON",
      "GET_USER_BUTTON_HIDDEN",
    ]),
  },
  mounted() {
    this.usersButtonHidden - this.GET_USER_BUTTON_HIDDEN;
    this.isHidden = this.GET_IS_HIDDEN_HOME_BUTTON;
  },
  methods: {
    ...mapActions(["SET_IS_HIDDEN_HOME_BUTTON"]),
    handleClick() {
      this.SET_IS_HIDDEN_HOME_BUTTON(true);
    },
  },
  watch: {
    GET_IS_HIDDEN_NEW_POST_BUTTON() {
      // wathing condition for a "new post" button
      this.isHiddenNew = this.GET_IS_HIDDEN_NEW_POST_BUTTON;
    },
    GET_IS_HIDDEN_HOME_BUTTON() {
      // wathing condition for a home button
      this.isHidden = this.GET_IS_HIDDEN_HOME_BUTTON;
    },
    GET_USER_BUTTON_HIDDEN() {
      // wathing condition for a "users" button
      this.usersButtonHidden = this.GET_USER_BUTTON_HIDDEN;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#routes {
  background-color: #dff6fd;
  min-height: 100vh;
  padding-top: 20px;
}
a {
  text-decoration: none;
  color: #818080d2;
}
#nav {
  font-size: 2em;
  padding: 0.5em 1em;
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: azure;
  border-radius: 8px;
  width: 20%;
}

.span_bottom {
  background-color: rgb(238, 236, 236);
  margin-bottom: 10px;
}

@media only screen and (max-width: 1200px) {
  #nav {
    font-size: 1.5em;
    width: 25%;
  }
}
@media only screen and (max-width: 1400px) {
  #nav {
    font-size: 1.6em;
  }
}

@media only screen and (max-width: 992px) {
  #nav {
    font-size: 1em;
    width: 20%;
  }
}
@media only screen and (max-width: 768px) {
  #nav {
    font-size: 0.8em;
    width: 40%;
  }
  #routes {
    padding-top: 100px;
  }
}
</style>
