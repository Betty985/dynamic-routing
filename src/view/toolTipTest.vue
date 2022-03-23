<script setup lang="ts"></script>

<template>
  <div>
    <toolTip content="i am a tooltip">
      <template #reference>
        <span class="tool">hi,tooltip</span>
      </template>
    </toolTip>
  </div>
</template>

<style scoped lang="scss">
@import "@p/color.scss";
.tool {
  border: 1px solid $success;
  font-size: 20px;
  padding: 0.6rem;
}
</style>
