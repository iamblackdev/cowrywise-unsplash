<template>
  <div class="search_result_wrapper">
    <div class="top_bg">
      <div class="container">
        <div class="search_palceholder" v-if="searching && !error">
          Searching for <span>"{{ value }}"</span>
        </div>
        <div class="search_palceholder" v-if="!searching && !error">
          Search Results for <span>"{{ value }}"</span>
        </div>
        <div class="search_palceholder" v-if="error">
          {{ errorMessage }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="grid_images" v-if="searching">
        <imageLoading />
        <imageLoading />
        <imageLoading />
      </div>
      <div class="grid_images" v-if="!searching">
        <imageCard
          v-for="photo in photos"
          :key="photo.id"
          :imgUrl="photo.urls.regular"
          :author="photo.user.name"
          :imgId="photo.id"
          :imgLocation="photo.location.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import getPhotos from "@/api/getPhotos";
import imageLoading from "../components/imageLoading.vue";
import ImageCard from "../components/imageCard.vue";
export default {
  components: { imageLoading, ImageCard },
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      searching: true,
      photos: [],
      error: false,
      errorMessage: "",
    };
  },
  async created() {
    // getting images related to the the search value
    this.searching = true;
    let { data, error } = await getPhotos({ value: this.value });
    this.searching = false;
    if (error) {
      this.error = true;
      this.errorMessage = error;
      return;
    }
    this.photos = data;
  },
};
</script>

<style scoped>
.search_result_wrapper .search_palceholder {
  font-size: 40px;
  color: #263958;
  font-weight: 600;
  line-height: 45px;
}
.search_palceholder span {
  color: #6d7b91;
}
@media (max-width: 767px) {
  .search_result_wrapper .search_palceholder {
    font-size: 20px;
  }
}
</style>
