<template>
  <div class="home">
    <h1>Hi, check out my comments component <router-link to="/component">here</router-link></h1>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:500,700');
@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css');

a {
  font-weight: bold;
  color: #42b983;
}
</style>

<script>

export default {
  name: 'home',
};
</script>
