<template>
  <section class="notice">
    <h3 class="notice__headline">お知らせ</h3>
    <div class="notice__inner">
      <div class="notice__card">
        <img src="@/assets/no-image.png" alt="お知らせのイメージ画像、デフォルトの画像が表示されます。" class="notice__card__img">
        <div class="notice__card__texts">
          <div class="notice__card__date">
            2020.01.06
          </div>
          <div class="notice__card__title">
            3学期が始まります。
          </div>
        </div>
      </div>
      <div class="notice__card">
        <img src="@/assets/no-image.png" alt="お知らせのイメージ画像、デフォルトの画像が表示されます。" class="notice__card__img">
        <div class="notice__card__texts">
          <div class="notice__card__date">
            2020.01.06
          </div>
          <div class="notice__card__title">
            3学期が始まります。
          </div>
        </div>
      </div>
      <div class="notice__card">
        <img src="@/assets/no-image.png" alt="お知らせのイメージ画像、デフォルトの画像が表示されます。" class="notice__card__img">
        <div class="notice__card__texts">
          <div class="notice__card__date">
            2020.01.06
          </div>
          <div class="notice__card__title">
            3学期が始まります。
          </div>
        </div>
      </div>
      <div class="notice__card">
        <img src="@/assets/no-image.png" alt="お知らせのイメージ画像、デフォルトの画像が表示されます。" class="notice__card__img">
        <div class="notice__card__texts">
          <div class="notice__card__date">
            2020.01.06
          </div>
          <div class="notice__card__title">
            3学期が始まります。
          </div>
        </div>
      </div>
    </div>
    <div class="button">
      <a href="#">
          お知らせ一覧
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Notice',
}
</script>

<style lang="scss">
.notice {
  margin: 80px 24px 0;
  &__headline {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }
  &__card {
    width: 100%;
    display: flex;
    &:nth-child(n+2) {
      margin-top: 16px;
    }
    &__img {
      width: min(25%, 100px);
      height: 80px;
    }
    &__texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 16px;

    }
    &__date {
      font-size: 12px;
      margin-bottom: 8px;
    }
  }
}
</style>