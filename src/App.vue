<template>
  <TopPage/>
  <main class="main-content">
    <about/>
    <daily/>
    <information/>
    <notice/>
  </main>
</template>

<script>
import 'reset-css';
import TopPage from '@/components/TopPage';
import About from '@/components/About';
import Daily from '@/components/Daily';
import Information from '@/components/Information';
import Notice from './components/Notice.vue';

export default {
  components: { 
    TopPage,
    About,
    Daily,
    Information,
    Notice,
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