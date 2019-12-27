<template>
  <Field>
    <template #first="{user}">
      {{ user.firstName }}
    </template>
  </Field>
</template>
<script>
import Field from './Field.vue';

export default {
  components: {
    Field
  }
};
</script>
