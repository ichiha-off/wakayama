<template>
  <section class="contact">
    <h3 class="contact__headline">
      お問い合わせ
    </h3>
    <div class="contact__inner">
      <div class="contact__text">
        園の資料請求、ご相談やご見学など、
        <br>お気軽にお問い合わせください
      </div>
    </div>
    <div class="button">
      <a href="#">
          お問い合わせはこちら
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss">
.contact {
  margin: 80px auto 0;
  &__headline {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  &__inner {
    margin: 32px 24px 0;
    text-align: center;
  }
  &__text {
    display: inline-block;
    text-align: left;
    line-height: 1.2;
  }
}
</style>