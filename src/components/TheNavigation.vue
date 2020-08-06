<template>
  <nav id="nav">
    <p class="logo">Travel App</p>
    <ul class="nav-links">
      <li>
        <router-link to="/" class="links">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link :to="{name: 'destinationDetails', params:{slug: destination.slug}}">
          {{destination.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from "../store";
export default {
  data(){
    return {
      destinations: store.destinations,
    }
  }
}
</script>
<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 0 20px;
}
.nav-links{
  display: flex;
  justify-content: center;
}
.nav-links li{
  list-style: none;
}
.links:hover{
  text-decoration: underline;
}
.logo{
  font-size: 20px;
  color: #42b983;
  font-weight: bold;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media screen and (max-width: 1100px) {
  #nav a{
    padding: 0 10px;
  }
}
</style>