<template>
  <div class="lubricating-oil-consumption">
    {{ $route.meta.title }}
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
  </div>

</template>

<script>

export default {
  name: 'LubricatingOilConsumption',
  data() {
    return {}
  }
}

</script>

<style lang="scss" scoped>

</style>
