<script setup>
let props = defineProps({
  id: String,
  src: String,
  alt: String,
});
</script>

<template>
  <div>
    <img :src="src" :alt="alt" />
  </div>
</template>

<style scoped>
div {
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
img {
  display: block;
  height: 100%;
  max-width: 100%;
  border-style: none;
  border-radius: 50%;
}
</style>
