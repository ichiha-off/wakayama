<template>
  <TopPage/>
  <main class="main-content">
    <About/>
    <Daily/>
  </main>
</template>

<script>
import 'reset-css';
import TopPage from './components/TopPage.vue'
import About from '@/components/About';
import Daily from '@/components/Daily';

export default {
  components: { 
    TopPage,
    About,
    Daily,
  },
  name: 'App',
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans JP', sans-serif;
}

.main-content {
  letter-spacing: 0.08em;
}
</style>