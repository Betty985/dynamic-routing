<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  title: String,
  width: {
    default: 30,
  },
});
const emit = defineEmits(["update:modelValue"]);
const close = function () {
  emit("update:modelValue", false);
};
</script>

<template>
  <transition-group name="dialog" tag="div">
    <div v-if="modelValue" class="my-dialog">
      <div class="my-dialog-box" :style="{ width: `${width}%` }">
        <header class="header">
          <h3>{{ title }}</h3>
          <span @click="close"><i class="iconfont icon-close"></i></span>
        </header>
        <slot></slot>
        <footer v-if="$.slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition-group>
</template>

<style scoped lang="scss">
@import "index.scss";
.dialog-enter-active,
.dialog-leave-active {
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;
}

.dialog-enter-from,
.dialog-leave-to {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  .my-dialog-box {
    width: 0;
    visibility: hidden;
    overflow: hidden;
  }

  transform: translateY(-20px);
}
</style>
