<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__map">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.882049274086!2d135.16527831571406!3d34.226029980558984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b2bf9a8ff55f%3A0xa35ff149d750dc0c!2z5ZKM5q2M5bGx55yM5bqB!5e0!3m2!1sja!2sjp!4v1611235368546!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="footer__texts">
        <div class="footer__texts__logo">
          <div class="logo">
            <img class="logo__img" src="../assets/wakayama-logo.svg" alt="logo-image">
            <span>わかやま幼稚園</span>
          </div>
        </div>
        <div class="footer__texts__item">
          <span>住所</span>
          〒111-1111 和歌山県和歌山市 1-1-1
        </div>
        <div class="footer__texts__item">
          <span>TEL</span>
          010-010-0101
        </div>
        <div class="footer__texts__item">
          <span>開園時間</span>
          7:00 ~ 19:00
        </div>
        <div class="footer__texts__item">
          <span>休園日</span>
          土日、祝日
        </div>
        <div class="footer__copyright">
          &copy; 2021 Wakayama hoikuen all rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SharedFooter',
}
</script>

<style lang="scss">
.footer {
  margin-top: 80px;
  background-color: $cSubOrange;

  &__map {
    margin-bottom: 24px;

    > .map {
      width: 100%;
      height: 240px;
    }
  }

  &__texts {
    margin-left: 24px;

    &__logo {
      margin-bottom: 24px;

      > .logo {
        font-size: 24px;

        > img {
          width: 32px;
          height: 32px;
          vertical-align: text-bottom;
        }
      }
    }

    &__item {
      font-size: 12px;

      &:nth-child(n+2) {
        margin-top: 16px;
      }

      > span {
        display: inline-block;
        width: 24%;
      }
    }
  }

  &__copyright {
    padding: 32px 0 32px 24px;
    font-size: 12px;
  }
}
</style>