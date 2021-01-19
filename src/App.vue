<template>
  <TopPage/>
</template>

<script>
import 'reset-css';
import TopPage from './components/TopPage.vue'

export default {
  components: { 
    TopPage,
  },
    name: 'App',
}
</script>

<style lang="scss">

body {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
