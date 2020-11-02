<template>
  <div>
    <HeaderMessage msg="ALL USERS" />
    <!-- this message displays our current position -->
    <ModalInfo
      v-bind:company="company"
      v-if="modalIsOpen"
      @onCloseModalClick="closeModal"
    />
    <!-- Modal overlay component -->
    <div class="all_users-wrapper">
      <table>
        <!-- table with all users -->
        <tr class="user_wrapper">
          <th class="id">ID</th>
          <th class="name table">NAME</th>
          <th class="email table">EMAIL</th>
          <th class="website table">WEBSITE</th>
          <th class="info table">INFO</th>
        </tr>
        <tr v-for="(user, ind) in users" :key="ind" class="user_wrapper">
          <td class="id">{{ user.id }}</td>
          <td class="name table">{{ user.name }}</td>
          <td class="email table">{{ user.email }}</td>
          <td class="website table">{{ user.website }}</td>
          <td class="info table">
            <button v-on:click="showModalInfo(user.company)">INFO</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import HeaderMessage from "../components/HeaderMessage";
import ModalInfo from "../components/ModalInfo";
import axios from "axios";
export default {
  name: "all-users",
  data() {
    return {
      users: [],
      company: {},
      modalIsOpen: false,
    };
  },
  computed: {
    ...mapGetters([
      "GET_ALL_USERS",
      "GET_MODAL_IS_OPEN",
      "GET_USER_BUTTON_HIDDEN",
    ]),
  },
  methods: {
    ...mapActions([
      "FETCH_ALL_USERS",
      "SET_MODAL_IS_OPEN",
      "SET_IS_HIDDEN_HOME_BUTTON",
      "SET_IS_HIDDEN_NEW_POST_BUTTON",
      "SET_USER_BUTTON_HIDDEN",
    ]),
    showModalInfo(company) {
      // here we bind info to modal overlay component
      //  and setting true, which will show modal component
      this.company = company;
      this.modalIsOpen = true;
    },
    closeModal() {
      // here we onclick hiding our overlay
      this.modalIsOpen = false;
    },
  },
  watch: {
    GET_ALL_USERS() {
      // watching array with all users
      this.users = this.GET_ALL_USERS;
    },
  },

  components: {
    HeaderMessage,
    ModalInfo,
  },

  async mounted() {
    this.SET_IS_HIDDEN_HOME_BUTTON(false); // showing home button in current component
    this.SET_IS_HIDDEN_NEW_POST_BUTTON(false); //  showing button for new post in current component
    this.SET_USER_BUTTON_HIDDEN(true); // hiding all users button in current component, sinse we're here
    this.FETCH_ALL_USERS(); // get array of all users from server
  },
};
</script>

<style scoped>
.all_users-wrapper {
  padding: 10px 20px;
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #5b6164;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.33);
}
.user_wrapper {
  font-size: 1.4em;
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
}
.id {
  width: 4%;
  display: flex;
  justify-content: center;
  border-right: 1px solid gray;
}

table {
  width: 100%;
  text-shadow: 1px 2px 3px rgb(233 227 227 / 30%);
}
.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 32%;
  border-right: 1px solid gray;
  border-right: 1px solid gray;
  padding-left: 10px;
}
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
}
.info button {
  width: 100%;
  border-radius: 8px;
  background-color: #c6d05f8f;
  color: white;
  cursor: pointer;
}
button {
  cursor: pointer;
}
@media only screen and (max-width: 1400px) {
  .all_users-wrapper {
    width: 90%;
  }
}
@media only screen and (max-width: 1200px) {
  .all_users-wrapper {
    width: 90%;
    display: block;
    overflow-x: scroll;
  }
  table {
    display: block;
    min-width: 820px;
    white-space: nowrap;
    table-layout: fixed;
    /* width: 100%; */
  }
  .user_wrapper {
    font-size: 1em;
  }
  .info button {
    width: 80%;
    font-size: 0.7em;
  }
}
@media only screen and (max-width: 992px) {
  .info button {
    width: 65%;
    font-size: 0.5em;
  }
  .website {
    width: 20%;
  }
  .info {
    width: 13%;
  }
  /* .table {
    width: 34%;
  } */
}

/* @media only screen and (max-width: 768px) {
  .info button {
    width: 65%;
    font-size: 0.2em;
  }
  .website {
    width: 20%;
  }
  .info {
    width: 13%;
  }
} */
</style>