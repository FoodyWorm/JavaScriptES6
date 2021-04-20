<template>
<!-- 부모 컴포넌트 -->
<div>
  <!-- 자식 컴포넌트 -->
  <event-bus></event-bus>
  <storage-a></storage-a>
  <storage-b></storage-b>
</div>
</template>

<script>
import EventBus from './components/EventBus';
import StorageA from './components/StorageA';
import StorageB from './components/StorageB';

export default {
  name: 'app',
  components: {
    'event-bus': EventBus,
    'storage-a': StorageA,
    'storage-b': StorageB
  }
}
</script>

<style>

</style>
