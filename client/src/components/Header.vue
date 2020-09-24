<template>
  <div class="header-container">
    <div class="header-content">
      <img class="icon" alt="97" src="public/svgs/dropdown-icon.svg">
      <img class="logo" alt="97 Degree Cider" src="public/svgs/logo-nondoodle.svg">
      <img class="icon" alt="97" src="public/svgs/dropdown-icon.svg">
    </div>
    <div class="shadow-bar"></div>
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
  
  @import "../scss/palettes.scss";

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .header-container {
    background: $intro-light;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .logo {
    width: 253px;
    height: 50px;
  }

  .blog-description {
    color: #4d4d4d;
    position: relative;
    padding-left:10px;
    width: 120px;
  }
  
  .blog-flavor-text {
    position:absolute;
    bottom: 10px;
    right:0;
  }

  .shadow-bar {
    width: 100%;
    height: 5px;
    background-color: $intro-highlight;
  }

</style>
