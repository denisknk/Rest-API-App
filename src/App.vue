<template>
  <div id="app">
    <Routes />
    <!-- our component with routes  -->
  </div>
</template>

<script>
import Routes from "./components/Routes";
export default {
  name: "App",
  components: {
    Routes,
  },
};
</script>
