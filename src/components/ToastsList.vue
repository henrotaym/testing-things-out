<template>
  <div>
    <div>
      Toasteo contains
      {{ toasteo.toasts.length }}
      toasts
    </div>
    <ul>
      <li
        v-for="toast in toasteo.toasts"
        :key="toast.uuid"
        @click="toasteo.deleteToast(toast.uuid)"
      >
        {{ toast.uuid }}
      </li>
    </ul>
    <button @click="toasteo.addToast('super')">Add toast</button>
  </div>
</template>

<script setup lang="ts">
import { UnwrapNestedRefs } from "vue";
import { Toasteo } from "../toasteo";
const props = defineProps<{
  toasteo: UnwrapNestedRefs<Toasteo>;
}>();
</script>
