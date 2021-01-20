<template>
  <section class="daily">
    <div class="daily__inner">
      <div class="daily__img">
        <img class="img" src="../assets/daily.jpg" alt="わかやま幼稚園についてのイメージ画像です。">
      </div>
      <div class="daily__texts">
        <h3 class="title">
          まいにちあそぶ、
          <br>まいにちまなぶ。
        </h3>
        <p class="text">
          子供たちの日々、成長します。その生活や遊びを安心して行えるように1日を流れを考えています。
        </p>
        <div class="button">
          <a href="#">
            1日の流れ
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Daily',
}
</script>

<style lang="scss">
.daily {
  width: calc(100% - 24px);
  margin-top: 120px;
  margin-left: auto;
  &__img {
    .img {
      width: 100%;
      height: 240px;
    }
  }
  &__texts {
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