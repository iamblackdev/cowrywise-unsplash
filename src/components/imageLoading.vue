<template>
  <div class="placeholder-content">
    <div class="placeholder-content_item"></div>
    <div class="placeholder-content_item"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.placeholder-content {
  max-width: 300px;
  height: 350px;
  overflow: hidden;
  position: relative;
  animation-duration: 1.7s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: placeholderAnimate;
  background: #f5f5f5;
  background: linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%);
  background-size: 1300px;
}
.placeholder-content_item {
  width: 100%;
  height: 20px;
  position: absolute;
  background: #fff;
  background: #f5f5f5;
  z-index: 2;
}
.placeholder-content_item:after,
.placeholder-content_item:before {
  width: inherit;
  height: inherit;
  content: "";
  position: absolute;
}
.placeholder-content_item:nth-child(1) {
  width: 50%;
  left: 10px;
  bottom: 50px;
}
.placeholder-content_item:nth-child(2) {
  width: 30%;
  left: 10px;
  bottom: 20px;
}
@keyframes placeholderAnimate {
  0% {
    background-position: -650px 0;
  }
  100% {
    background-position: 650px 0;
  }
}
@media (max-width: 567px) {
  .placeholder-content {
    max-width: 100%;
  }
}
</style>
