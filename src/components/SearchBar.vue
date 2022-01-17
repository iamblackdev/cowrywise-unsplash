<template>
  <form class="search_bar" @submit.prevent="onSearch">
    <img src="@/assets/searcIcon.png" alt="" />
    <input type="search" placeholder="Search for photo" v-model="value" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
      this.$router.push({ name: "Search", params: { value: this.value } });
    },
  },
};
</script>

<style scoped>
.search_bar {
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
}
.search_bar input {
  border: none;
  outline: 0;
  height: 100%;
  width: 100%;
  padding-left: 50px;
  padding-right: 20px;
  font-weight: bold;
}
.search_bar input:focus {
  border: none;
  outline: 0;
}
.search_bar img {
  position: absolute;
  left: 24px;
}
</style>
