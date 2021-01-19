<template>
  <header class="header">
    <div class="header__inner">
      <div class="logo">
        <img class="logo__img" src="../assets/wakayama-logo.svg" alt="logo-image">
        <span>わかやま幼稚園</span>
      </div>
      <button class="mobile-menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  <div class="top-page">
    <img src="@/assets/top-img.png" alt="top-image" class="top-page__img">
    <div class="top-page__concept__area">
      <div class="top-page__concept__messeage">
        <span>のびのびと、</span>
        <span>そして、</span>
        <span>たのしく。</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TopPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/styles/index';

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $hMobileHight;
    background-color: $cSubOrange;
    z-index: 10;
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      margin: 0 16px;
    }
  }

  .logo {
      font-size: 1rem;
    &__img {
      width: 1.6rem;
      margin-right: 4px;
      vertical-align: bottom;
    }
    > span {
      color: $cTextB;
    }
  }

  .mobile-menu__btn {
    background-color: unset;
    border: none;
    outline: none;
    > span {
      background-color: black;
      width: 32px;
      height: 1px;
      display: block;
      margin-bottom: 6px;
      &:nth-child(2) {
        width: 24px;
        margin-left: auto;
      }
      &:last-child {
        margin: 0;
      }
    }
  }

  .top-page {
    position: relative;
    background-color: $cSubOrange;
    padding-top: $hMobileHight;
    height: calc(100vh - #{$hMobileHight});
    &__img {
      width: calc(100% - 16px);
      height: 100%;
      display: block;
      margin-left: auto;
    }
    &__concept {
      &__area {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 90%;
        background-color: $cMainOrange;
        text-align: center;
      }
      &__messeage {
        display: inline-block;
        margin: 8px 0;
        > span {
          display: block;
          text-align: left;
          color: $cTextW;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: 0.08em;
        }
      }
    }
  }
</style>
