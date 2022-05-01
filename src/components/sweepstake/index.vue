<script setup>
import sweepstake from "./item.vue";
import myBtn from "@/components/button/index.vue";
import myCard from "@c/card/index.vue";
import { ref } from "vue";
let userList = ref([
  { id: 0, name: "123" },
  {
    id: 1,
    name: "456",
    url: "https://th.bing.com/th/id/OIP.e77JQuwAt6-LWIOel0AnqgAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 2,
    name: "fr",
    url: "https://th.bing.com/th/id/OIP.8_tCUnUXLMr4aMlurgfCuAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  { id: 3, name: "ds" },
  {
    id: 4,
    name: "商务",
    url: "https://th.bing.com/th/id/OIP.2Fja4kkkezPnAXfravPuvQAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  { id: 5, name: "德芙" },
  {
    id: 6,
    name: "华润",
    url: "https://th.bing.com/th/id/OIP.bEruUmis5PCUbDyE5zx8vwHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 7,
    name: "奋斗",
    url: "https://th.bing.com/th/id/OIP.EauELX_ST6b6680nY-zHRQAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 8,
    name: "形参",
    url: "https://th.bing.com/th/id/OIP.Gp1DOiJmfGxtbvv2KBORLwAAAA?w=204&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  { id: 9, name: "否认" },
]);
// 之前的id   幸运用户  结果是否出现
let old,
  luck,
  res = ref(false);
let timer = null;
const n = userList.value.length;
let selected = [];
// 100毫秒选中一个幸运用户
function start() {
  res.value = false;
  timer = setInterval(() => {
    let num = Math.floor(Math.random() * n);
    console.log(num);
    for (let item of userList.value) {
      if (item.id == num) {
        item.active = true;
        let { name, id, url } = item;
        luck = { name, id, url };
      }
      if (old != undefined && item.id == old) {
        item.active = false;
      }
    }
    old = num;
  }, 200);
}

function stop() {
  clearInterval(timer);
  console.log(luck?.name);
  res.value = true;
  selected.push(luck);
}
</script>
<template>
  <div class="box">
    <div v-for="item in userList" :key="item.id">
      <sweepstake :item="item" :class="{ active: item.active }"></sweepstake>
    </div>
  </div>

  <my-btn type="success" @click="start">开始</my-btn>
  <my-btn type="warning" @click="stop">停止</my-btn>
  <my-card v-show="res">
    <template #title>恭喜！{{ luck?.name ?? luck?.id }}</template>
    <sweepstake :item="luck"></sweepstake>
  </my-card>
</template>

<style scoped>
.active {
  background-color: rgb(241, 139, 139);
}
.box {
  display: flex;
  flex-wrap: wrap;
  padding-right: 80px;
}
</style>
