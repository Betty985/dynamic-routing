<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  content: {
    type: String,
  },
});
// let text = props.content;
// text = text.replace(/\S/g, "<span @click='alert(1)'>$&</span>");
function add(i) {
  // 需要改写成vue
  // 问题是给事件触发的目标元素添加属性
  document.querySelector(`#${i}`).classList.add("active");
  console.log(i);
}
</script>

<template>
  <div class="text">
    <span v-for="(c, i) in content" :key="i" @mouseover="add(i)" :id="i + ''">
      {{ c }}
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
