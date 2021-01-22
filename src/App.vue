<template>
  <TopPage/>
  <main class="main-content">
    <About/>
    <Daily/>
    <Information/>
    <Notice/>
    <Contact/>
  </main>
  <SharedFooter/>
</template>

<script>
import 'reset-css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TopPage from '@/components/TopPage';
import About from '@/components/About';
import Daily from '@/components/Daily';
import Information from '@/components/Information';
import Notice from '@/components/Notice';
import Contact from '@/components/Contact';
import SharedFooter from '@/components/SharedFooter';

gsap.registerPlugin(ScrollTrigger)

export default {
  components: { 
    TopPage,
    About,
    Daily,
    Information,
    Notice,
    Contact,
    SharedFooter,
  },

  name: 'App',

  mounted() {
    this.scrollItem();
  },

  methods: {
    scrollItem() {
      gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
        scrollTrigger: {
          markers: true,
          trigger: ".about__texts",
          start: "top 50%",
          end: "bottom 25%",
          toggleActions: "restart none none none",
        }
      })
      .to(".about__texts > h3", {
        opacity: 1,
        x: 0,
      })
      .to(".about__texts > p", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
      .to(".about__texts > .button", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Noto Sans JP', sans-serif;
}

.main-content {
  letter-spacing: 0.08em;
  overflow: hidden;
}

// Gsapアニメーション 初期状態
.about__texts {
  h3,
  p,
  .button {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>