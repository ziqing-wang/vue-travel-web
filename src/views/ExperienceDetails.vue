<template>
  <section class="experience">
    <div class="experience-details">
      <img :src="require('../assets/'+ experience.image)" :alt="experience.slug" />
      <div>
        <h2 class="des-title">{{experience.name}}</h2>
        <p>{{experience.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../store";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        experience => experience.slug === this.experienceSlug
      );
    }
  }
};
</script>

<style scoped>
h1{
    font-size: 1.5rem;
}
img{
  max-height: 300px;
  max-width: 500px;
}
.experience {
  position: relative;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
.des-title{
 margin: 0 auto 20px 40px;
 text-align: left;
}
p{
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
@media screen and (max-width: 1000px) {
  .experience-details{
    flex-direction: column;
  }
}
</style>