<template>
  <div class="header-container">
    <div class="header-content">
      <img class="icon" alt="97" src="public/images/icon-base.png">
      <img class="logo" alt="97 Degree Cider" src="public/images/logo.png">
      <div class="blog-description">
        <span class="blog-flavor-text">
          <i>A Relaxing Blog</i>
        </span>
      </div>
    </div>
    <div class="header-color-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
  
  .header-content {
    padding-left: 5%;
    display: flex;
  }

  .header-container {
       background: #e6ddde;
  }

  .icon {
    width: 39px;
    height: 69px;

    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    padding-top: 10px;
    padding-bottom: 10px;

    position: relative;
  }

  .logo {
    padding-top: 10px;
    padding-left: 30px;
    width: 267px;
    height: 82px;

    position: relative;
  }

  .blog-description {
    color: #4d4d4d;
    position: relative;
    padding-left:10px;
    width: 120px;
  }
  
  .blog-flavor-text {
    position:absolute;
    bottom: 15px;
    right:0;
  }

</style>
