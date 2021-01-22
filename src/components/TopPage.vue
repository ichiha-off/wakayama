<template>
  <header class="header">
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
  <nav class="mobile-menu">
    <ul class="mobile-menu__main">
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link">
          園について
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link">
          1日の流れ
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link">
          入園情報
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link">
          お知らせ
        </a>
      </li>
      <li class="mobile-menu__item">
        <a href="#" class="mobile-menu__link">
          お問い合わせ
        </a>
      </li>
    </ul>
  </nav>
  <div class="top-page">
    <picture>
      <source media="(min-width: 960px)" srcset="@/assets/top-img-pc.png">
      <img src="@/assets/top-img.png" alt="top-image" class="top-page__img">
    </picture>
    <div class="scroll">
      <img class="scroll__downarrow" src="@/assets/down-arrow.svg" />
      <span class="scroll__scrolltext">scroll</span>
    </div>
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
  transition: transform 0.6s;
  transform-origin: left;
  &__img {
    width: 1.6rem;
    margin-right: 4px;
    vertical-align: text-bottom;
  }
  > span {
    color: #373737;
    font-family: 'Yusei Magic', sans-serif;
  }
}

.mobile-menu {
  position: fixed;
  top: 64px;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: $cSubOrange;
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
  transition: all 0.6s;
  z-index: 200;
  > .logo {
    height: 64px;
    line-height: 64px;
    font-size: 24px;
    margin-left: 24px;
    > img {
      width: 1.6em;
      margin-right: 4px;
      vertical-align: text-bottom;
    }
  }
  &__item {
    margin: 40px 0 40px 24px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);
    transition: transform 0.4s, opacity 0.3s;
  }
  &__link {
    font-size: 24px;
    color: $cTextB;
    text-decoration: none;
  }
  &__btn {
    background-color: unset;
    z-index: 300;
    > span {
      background-color: black;
      width: 32px;
      height: 1px;
      display: block;
      margin-bottom: 6px;
      transition: transform 0.6s;
      &:nth-child(2) {
        width: 24px;
        margin-left: auto;
      }
      &:last-child {
        margin: 0;
      }
    }
  }
}

.menu-open {
  .mobile-menu {
    transform: scaleY(1);
    opacity: 1;
    &__btn {
      & > span {
        &:nth-child(1) {
          transition-delay: 70ms;
          transform: translateY(7px) rotate(135deg);
        }
        &:nth-child(2) {
          transition-delay: 0s;
          transform: translateX(-18px) scaleX(0);
        }
        &:nth-child(3) {
          transition-delay: 140ms;
          transform: translateY(-7px) rotate(-135deg);
        }
      }
    }
    &__item {
      transform: none;
      opacity: 1;
      visibility: visible;
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
  }
  .header {
    .logo {
      transform: scale(1.6);
      transform-origin: left;
    }
  }
}

.top-page {
  position: relative;
  background-color: $cSubOrange;
  padding-top: 64px;
  text-align: right;
  overflow: hidden;
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
