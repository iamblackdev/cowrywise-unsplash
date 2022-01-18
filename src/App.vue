<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  color: black;
  font-size: 16px;
  line-height: 22px;
  background-color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  color: inherit;
  font-weight: 600;
}

ul {
  list-style-type: none;
}

p,
div {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
  color: #f65d23;
}

body > div {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1320px;
  max-width: 1140px;
}

.top_bg {
  background-color: #dde2e9;
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.grid_images {
  position: relative;
  top: -50px;
  margin: 0 auto;
  max-width: 90%;
  column-count: 3;
}
.grid_images > div {
  margin-bottom: 30px;
  break-before: avoid;
  break-after: avoid;
  break-inside: avoid;
  -webkit-column-break-before: avoid;
  -webkit-column-break-after: avoid;
  -webkit-column-break-inside: avoid;
}

@media (max-width: 768px) {
  .grid_images {
    column-count: 2;
  }
}
@media (max-width: 567px) {
  .container {
    width: 100%;
  }
  .grid_images {
    justify-content: center;
    column-count: 1;
  }
  .grid_images > div {
    margin: 0 auto 30px auto;
  }
}
</style>
