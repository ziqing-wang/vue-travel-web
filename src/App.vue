<template>
  <div id="app">
    <TheNavigation />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation";
export default {
  components: {
    TheNavigation
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* .moveUp-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveUp-leave-active{
  animation: moveUp 0.3s ease-in;
} */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
</style>
