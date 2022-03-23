<script setup lang="ts">
import myMessage from "@c/message/index.vue";
</script>

<template>
  <div>
    <my-message type="danger" round>
      <template #msg>i am a message </template>
    </my-message>
  </div>
</template>

<style scoped></style>
