<template>
  <div>
    <GoBack />
     <h1>{{destination.name}}</h1>
    <section class="destination">
        <img :src="require('../assets/' + destination.image)" :alt="destination.name" />
        <p>{{destination.description}}</p>
    </section>

    <section class="experiences">
      <h2>Top experiences in {{destination.name}}</h2>
      <div class="cards" id="experience">
        <div v-for="experience in destination.experiences" :key="experience.slug" class="card">
          <router-link
            :to="{
            name:'experienceDetails',
            params: {experienceSlug: experience.slug},
            hash: '#experience'
            }"
          >
            <img :src="require('../assets/'+ experience.image)" :alt="experience.name" />
            <span class="card_text">{{experience.name}}</span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "../store";
import GoBack from "../views/GoBack";
export default {
  components: {
    GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>
<style scoped>
img {
  max-width: 500px;
  max-height: 400px;
  height: auto;
  width: 100%;
}

.destination {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.experiences{
  padding: 40px 0;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
  display: inline;
}
.card {
  padding: 20px;
  position: relative;
}
.card_text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
@media screen and (max-width:1000px) {
  .destination, .cards{
    flex-direction: column;
  }
 img{
   margin: auto 10px;
  }
}
</style>