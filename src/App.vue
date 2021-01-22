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
    this.topPageAnime();
    this.scrollAbout();
    this.scrollDaily();
    this.informationAnime();
    this.noticeAnime();
    new MobileMenu();
  },

  methods: {
    topPageAnime() {
      gsap.timeline({
        defaults: { ease: "power2.out", duration: 1.2 },
      })
      .to(".header", {
        opacity: 1,
        y: 0,
      })
      .to(".top-page__img", {
        opacity: 1,
        x: 0,
      })
      .to(".top-page__concept__area", {
        opacity: 1,
        x: 0,
      }, "-=0.6")
      .to(".top-page__concept__messeage > span",{
        opacity: 1,
        y: 0,
        stagger: {
          from: "start",
          amount: 0.6,
        }
      })
    },
    scrollAbout() {
      gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
        scrollTrigger: {
          trigger: ".about__inner",
          start: "top 50%",
          end: "bottom 25%",
          toggleActions: "play none none none",
        }
      })
      .to(".about__img > .img", {
        opacity: 1,
        x: 0,
      })
      .to(".about__texts > h3", {
        opacity: 1,
        x: 0,
      }, "-=0.1")
      .to(".about__texts > p", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
      .to(".about__texts > .button", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
    },
    scrollDaily() {
      gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
        scrollTrigger: {
          trigger: ".daily__inner",
          start: "top 50%",
          end: "bottom 25%",
          toggleActions: "play none none none",
        }
      })
      .to(".daily__img > .img", {
        opacity: 1,
        x: 0,
      })
      .to(".daily__texts > h3", {
        opacity: 1,
        x: 0,
      }, "-=0.1")
      .to(".daily__texts > p", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
      .to(".daily__texts > .button", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
    },
    informationAnime() {
      gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
        scrollTrigger: {
          trigger: ".info",
          start: "top 50%",
          end: "bottom 25%",
        }
      })
      .to(".info__headline", {
        opacity: 1,
        y: 0,
      })
      .to(".info__card", {
        opacity: 1,
        y: 0,
          stagger: {
          from: "start",
          amount: 0.6
        }
      })
    },
    noticeAnime() {
      gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
        scrollTrigger: {
          trigger: ".notice",
          start: "top 50%",
          end: "bottom 25%",
        }
      })
      .to(".notice__headline", {
        opacity: 1,
        y: 0,
      })
      .to(".notice__inner", {
        opacity: 1,
        x: 0,
      }, "-=0.2")
      .to(".notice > .button", {
        opacity: 1,
        y: 0,
      }, "-=0.2")
    }
  }
}

class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.container = document.querySelector('#app');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
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
.header {
  opacity: 0;
  transform: translateY(-10px);
}

.top-page {
  &__img {
    opacity: 0;
    transform: translateX(120px);
  }
  &__concept {
    &__area {
      opacity: 0;
      transform: translateX(-120px);
    }
    &__messeage {
      > span {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
  }
}

.about {
  &__img {
    > .img {
      opacity: 0;
      transform: translateX(-30px);
    }
  }
  &__texts {
    h3,
    p,
    .button {
      opacity: 0;
      transform: translateX(30px);
    }
  }
}

.daily {
  &__img {
    > .img {
      opacity: 0;
      transform: translateX(30px);
    }
  }
  &__texts {
    h3,
    p,
    .button {
      opacity: 0;
      transform: translateX(-30px);
    }
  }
}

.info {
  &__headline {
    opacity: 0;
    transform: translateY(-30px);
  }
  &__card {
    opacity: 0;
    transform: translateY(-30px);
  }
}

.notice {
  &__headline {
    opacity: 0;
    transform: translateY(-30px);
  }

  &__inner {
    opacity: 0;
    transform: translateX(120px);
  }

  > .button {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>