<template>
  <div class="custom-item">
    <slot v-bind:user="user" name="first">
      {{ user.lastName }}
    </slot>
  </div>
</template>
<script>

export default {
  data: function() {
    return {
      user: {
        lastName: "myLastName",
        firstName: "myName"
      }
    }
  }
};
</script>
