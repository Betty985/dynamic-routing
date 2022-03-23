<script setup lang="ts">
let props = defineProps({
  content: {
    type: String,
  },
});
</script>

<template>
  <div class="tooltip">
    <span>{{ content }} </span>
    <div>
      <slot name="reference"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
.tooltip {
  padding: 3rem;
}
</style>
