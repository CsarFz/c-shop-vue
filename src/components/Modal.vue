<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div v-if="header" class="modal-header">
          <slot name="header"> </slot>
        </div>

        <slot></slot>
        <div v-if="footer" class="modal-footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
    header: {
      default: false,
      required: false,
      type: Boolean,
    },
    footer: {
      default: false,
      required: false,
      type: Boolean,
    },
  },
  name: "Modal",
};
</script>

<style scoped>
</style>