<template>
  <div>
    <div>
      Toasteo container is named "{{ toasteo.name }}" and contains
      {{ toasteo.toasts.length }} toasts
    </div>
    <ul>
      <li v-for="toast in toasteo.toasts" :key="toast.uuid">
        {{ toast.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useToasteo } from "../composables";
defineProps<{
  name: string;
}>();

const toasteo = useToasteo();
</script>
