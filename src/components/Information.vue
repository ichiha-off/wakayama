<template>
  <section class="info">
    <h3 class="info__headline">入園情報</h3>
    <div class="info__inner">
      <div class="info__card">
        <img src="@/assets/memo.svg" alt="" class="info__img">
        <div class="info__card__title">募集要項</div>
      </div>
      <div class="info__card">
        <img src="@/assets/clock.svg" alt="" class="info__img">
        <div class="info__card__title">保育時間・料金</div>
      </div>
      <div class="info__card">
        <img src="@/assets/course.svg" alt="" class="info__img">
        <div class="info__card__title">保育コース</div>
      </div>
      <div class="info__card">
        <img src="@/assets/apron.svg" alt="" class="info__img">
        <div class="info__card__title">体験入園</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Information',
}
</script>

<style lang="scss">
.info {
  margin: 80px 24px 0;
  &__headline {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  &__inner {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 32px;
    width: 100%;
  }
  &__card {
    background-color: $cMainOrange;
    height: 120px;
    width: min(47%, 160px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &:nth-child(n+3) {
      margin-top: 24px;
    }
    &__title {
      color: $cTextW;
      margin-top: 8px;
    }
  }
}
</style>