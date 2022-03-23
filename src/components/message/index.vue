<script setup lang="ts">
import { reactive } from "@vue/reactivity";
import myButton from "@/components/button/index.vue";
import { ref } from "vue";

let props = defineProps({
  message: {
    type: String,
    default: "hello world",
  },
  //success/warning/info/error
  type: {
    type: String,
    default: "default",
  },
  showClose: Boolean,
  time: Number,
  offset: Number,
  icon: String,
  round: {
    type: Boolean,
    default: false,
  },
  // 开启弹窗按钮的文字
  open: {
    type: String,
    default: "add",
  },
  // 关闭弹窗按钮的文字
  close: {
    type: String,
    default: "remove",
  },
});
let nextNum = ref(0);
let items = reactive([
  {
    id: nextNum.value++,
  },
  {
    id: nextNum.value++,
  },
  {
    id: nextNum.value++,
  },
]);

// 控制是否出现
function randomIndex() {
  return Math.floor(Math.random() * items.length);
}
function add() {
  let obj = {
    id: nextNum.value++,
  };
  items.splice(randomIndex(), 0, obj);
}
function remove() {
  items.splice(randomIndex(), 1);
}
</script>

<template>
  <div class="my-message">
    <my-button @click="add">{{ open }}</my-button>
    <my-button @click="remove">{{ close }}</my-button>
    <transition-group name="list" tag="div" class="content">
      <p
        v-for="item in items"
        :key="item.id"
        :class="[{ round }, type]"
        class="item"
      >
        <slot name="msg"></slot>
      </p>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
@import "index.scss";
.content {
  background-color: rgb(253, 222, 227);
  // display: grid;
  // place-items: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
