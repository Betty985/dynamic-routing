<script setup>
import myCard from "@c/card/index.vue";
import myAvatar from "@c/avatar/index.vue";
let props = defineProps({
  item: {
    active: { type: Boolean, default: false },
    url: String,
    name: String,
    id: Number,
  },
});
</script>

<template>
  <my-card class="card">
    <div v-if="item?.url">
      <my-avatar :src="item.url" />
    </div>
    <i v-else class="iconfont icon-wode"></i>

    {{ item?.name ?? `用户${item?.id}` }}
  </my-card>
</template>

<style scoped>
.iconfont {
  font-size: 54px;
}

.card {
  margin: 1rem;
  width: 100px;
  text-align: center;
}
</style>
