<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
  },
});
// let text = props.content;
// text = text.replace(/\S/g, "<span @click='alert(1)'>$&</span>");
function add(e) {
  // 需要改写成vue
  // 问题是给事件触发的目标元素添加属性
  e.target.classList.add("active");
}
</script>

<template>
  <section>
    <div class="text">
      <span
        v-for="(c, i) in content"
        :key="i"
        @mouseover="add($event)"
        :id="i + ''"
      >
        {{ c }}
      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "./index.scss";
</style>
