<template>
  <div class="container_error">
    <h1 v-if="error.statusCode === 404">
      音速で探しましたがページが見つかりません
    </h1>
    <h1 v-else>
      エラーが発生しました
    </h1>
    <nuxt-link to="/">
      ホーム
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.container_error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}
</style>
