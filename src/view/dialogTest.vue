<script setup lang="ts">
import myDialog from "@c/dialog/index.vue";
import myButton from "@c/button/index.vue";
import { ref } from "vue";
let model = ref(true);
function torggle() {
  console.log(1);
  return (model.value = !model.value);
}
</script>

<template>
  <div>
    <my-button @click="torggle">show {{ model }}</my-button>
    <my-dialog v-model="model" title="hell" width="70">
      按钮默认有防抖
      <template #footer>
        <my-button size="mini" @click="torggle">确定</my-button>
        <my-button size="mini" type="danger" @click="torggle">取消</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<style scoped></style>
