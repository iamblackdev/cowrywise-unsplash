<template>
  <div>
    <div class="image_card" v-show="imageLoad" @click="openModal">
      <img :src="imgUrl" alt="" @load="onImageLoad" />

      <div class="image_details">
        <span>{{ author }}</span>
        <span>{{ imgLocation }}</span>
      </div>
    </div>

    <imageLoading v-if="!imageLoad"></imageLoading>
    <viewImage
      v-if="showModal"
      v-on:closeModal="closeModal"
      :imgUrl="imgUrl"
      :author="author"
      :location="imgLocation"
    ></viewImage>
  </div>
</template>

<script>
import imageLoading from "./imageLoading.vue";
import viewImage from "./viewImage.vue";
export default {
  components: { imageLoading, viewImage },
  props: {
    imgUrl: {
      type: String,
    },
    author: {
      type: String,
    },
    imgId: {
      type: String,
    },
    imgLocation: {
      type: String,
    },
  },
  data() {
    return {
      imageLoad: false,
      location: "",
      showModal: false,
    };
  },
  methods: {
    onImageLoad() {
      this.imageLoad = true;
    },
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<style scoped>
.image_card {
  position: relative;
  width: 100%;
  height: fit-content;
  max-width: 300px;
  cursor: pointer;
}
.image_card img {
  width: 100%;
}
.image_card .image_details {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1516981792717087) 63%,
    rgba(0, 0, 0, 0.8491771708683473) 100%
  );
  color: white;
  width: 100%;
  padding: 20px 15px;
  position: absolute;
  bottom: 6px;
}
.image_details span {
  display: block;
}
.image_card span:nth-child(1) {
  font-size: 18px;
}
.image_card span:nth-child(2) {
  font-size: 14px;
}
@media (max-width: 567px) {
  .image_card {
    max-width: 100%;
  }
}
</style>
