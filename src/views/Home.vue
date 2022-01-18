<template>
  <div class="home">
    <div class="top_bg">
      <div class="container">
        <searchBar></searchBar>
      </div>
    </div>

    <div class="container">
      <div class="grid_images" v-if="!loading && !error">
        <imageCard
          v-for="photo in photos"
          :key="photo.id"
          :imgUrl="photo.urls.regular"
          :author="photo.user.name"
          :imgId="photo.id"
          :imgLocation="photo.location.name"
        />
      </div>
      <div class="grid_images" v-if="loading && !error">
        <imageLoading />
        <imageLoading />
        <imageLoading />
      </div>
      <span class="error">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
import getPhotos from "@/api/getPhotos";
import searchBar from "@/components/SearchBar";
import imageCard from "@/components/imageCard.vue";
import imageLoading from "@/components/imageLoading.vue";

export default {
  name: "Home",
  components: {
    searchBar,
    imageCard,
    imageLoading,
  },
  data() {
    return {
      photos: [],
      loading: true,
      errorMessage: "",
      error: false,
    };
  },
  async created() {
    // getting images related to the word "African"
    let { data, error } = await getPhotos({ value: "African" });

    this.loading = false;
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
.home .error {
  margin-top: 20px;
  display: block;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: #263958;
  text-transform: uppercase;
}
</style>
