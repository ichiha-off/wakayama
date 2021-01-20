<template>
  <section class="about">
    <div class="about__inner">
      <div class="about__img">
        <img class="img" src="../assets/about.jpg" alt="わかやま幼稚園についてのイメージ画像です。">
      </div>
      <div class="about__texts">
        <h3 class="title">
          こどもたちがのびのびと
          <br>たのしくそだつ。
        </h3>
        <p class="text">
          わかやま幼稚園では、子供たちが持っている可能性を引き出し、個性を育むことで、のびのびと楽しくできることを第一に考えています。
        </p>
        <div class="button">
          <a href="#">
              わかやま幼稚園について
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss">
.about {
  width: calc(100% - 24px);
  margin-top: 120px;
  &__img {
    .img {
      width: 100%;
      height: 240px;
    }
  }
  &__texts {
    margin-left: 24px;
    > .title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.6;
    }
    > .text {
      font-size: 16px;
      line-height: 1.2;
    }
    > .title,
    > .text,
    > .button {
      margin-top: 16px;
    }
  }
}
</style>