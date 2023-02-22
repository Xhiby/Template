<template>
  <div class="index">
    <p>您好 {{ userName }}</p>
  </div>
</template>

<script setup>
  import { useUserStore } from '../../stores/user'

  // Pinia对象
  const store = useUserStore()

  const userName = store.userInfo.userName
</script>

<style lang="scss" scoped>
  .index {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
