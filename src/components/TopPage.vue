<template>
  <header class="header ">
    <div class="header__inner">
      <div class="logo">
        <img class="logo__img" src="../assets/wakayama-logo.svg" alt="logo-image">
        <span>わかやま幼稚園</span>
      </div>
      <nav class="header__nav">
        <ul class="header__ul">
          <li class="header__item"><a href="#">園について</a></li>
          <li class="header__item"><a href="#">1日の流れ</a></li>
          <li class="header__item"><a href="#">入園情報</a></li>
          <li class="header__item"><a href="#">お知らせ</a></li>
          <li class="header__item"><a href="#">お問い合わせ</a></li>
          <li class="header__item"><a href="#">採用情報</a></li>
        </ul>
      </nav>
      <button class="mobile-menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
  <div class="top-page">
    <picture>
      <source media="(min-width: 960px)" srcset="@/assets/top-img-pc.png">
      <img src="@/assets/top-img.png" alt="top-image" class="top-page__img">
    </picture>
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


<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: $cSubOrange;
  z-index: 10;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0 16px;
  }

  &__nav {
    justify-content: space-between;
    align-items: center;
    text-align: center;
    display: none;
  }

  &__ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__item {
    margin-left: 32px;
    > a {
      color: $cTextB;
      text-decoration: none;
    }
  }
}

.logo {
    font-size: 16px;
  &__img {
    width: 1.6rem;
    margin-right: 4px;
    vertical-align: bottom;
  }
  > span {
    color: #373737;
    font-family: 'Yusei Magic', sans-serif;
  }
}

.mobile-menu__btn {
  background-color: unset;
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
  padding-top: 64px;
  text-align: right;
  &__img {
    width: calc(100% - 16px);
    height: 100%;
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
