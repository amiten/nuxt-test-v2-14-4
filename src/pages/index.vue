<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-test-2.14.4
      </h1>
      <div class="links">
        <a
          href="https://qiita.com/amishiro/items/11bd642728f6b5838189"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/amiten/nuxt-test-v2-14-4"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link
          to="/about"
          class="button--grey"
        >
          AboutPage
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: false,
      title: '株式会社サイト名'
    }
  }
}
</script>

<style lang="scss">

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 100px;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  font-size: 42px;
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
