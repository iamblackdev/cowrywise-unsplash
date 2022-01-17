<template>
  <div class="image_view_modal">
    <div class="backdrop" @click="closeModal"></div>
    <div class="modal_content container">
      <img
        src="@/assets/close-btn.png"
        alt=""
        class="close_btn"
        @click="closeModal"
      />
      <img :src="imgUrl" alt="" class="photo" />
      <div class="modal_details">
        <span>{{ author }}</span>
        <span>{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
    },
    author: {
      author: String,
    },
    location: {
      author: String,
    },
  },
  methods: {
    closeModal: function () {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.image_view_modal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
}
.backdrop {
  cursor: pointer;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
}
.image_view_modal .modal_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 70px;
  margin-bottom: 70px;
  background-color: white;
  border-radius: 6px;
  transform: scale(0);
  padding: 0 !important;
  opacity: 0;
  animation-name: modalOpen;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.close_btn {
  position: absolute;
  top: -20px;
  right: -25px;
  cursor: pointer;
}
.modal_content .photo {
  max-height: 600px;
}
.modal_content .modal_details {
  width: 100%;
  padding: 20px 40px;
}
.modal_details span:nth-child(1) {
  display: block;
  color: #263958;
  font-size: 20px;
  font-weight: 600;
}
.modal_details span:nth-child(2) {
  margin-top: 10px;
  display: block;
  color: #3c3b3c;
  font-size: 16px;
  font-weight: 700;
}
@keyframes modalOpen {
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@media (max-width: 1211px) {
  .close_btn {
    top: -30px;
    right: 20px;
  }
}
@media (max-width: 567px) {
  .photo {
    width: 100%;
    max-height: auto;
  }
}
</style>
