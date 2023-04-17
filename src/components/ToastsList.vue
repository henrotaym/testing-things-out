<template>
  <div>
    <div>
      Toasteo container is named "{{ toasteo.name }}" and contains
      {{ toasteo.toasts.length }} toasts
    </div>
    <ul>
      <li v-for="toast in toasteo.toasts" :key="toast.uuid">
        {{ toast.uuid }}
      </li>
    </ul>
    <button @click="toasteo.addToast('super')">Add toast</button>
  </div>
</template>

<script setup lang="ts">
import { UnwrapNestedRefs } from "vue";
import { useToasteo } from "../composables";
import { Toasteo } from "../toasteo";
defineProps<{
  toasteo: UnwrapNestedRefs<Toasteo>;
}>();

const toasteo = useToasteo();
</script>
