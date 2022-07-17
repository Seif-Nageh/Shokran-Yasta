<template>
  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div
    class="modal fade"
    :id="this.id"
    tabindex="-1"
    :aria-labelledby="this.id + 'ModalLabel'"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body"><slot></slot></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style></style>
