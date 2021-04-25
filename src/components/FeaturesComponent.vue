<template>
  <div class="features-component">
    <img :src="feature.tall" alt="Feature" class="shadow feature-image my-3">
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    feature: {
      type: Object,
      required: true
    }
  },
  setup() {
    return { }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.feature-image {
  max-width: 100%;
  height: auto;
}
</style>
