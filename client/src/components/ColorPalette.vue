<template>
  <div class="color-palette">
    <div class="palette" v-bind:style="{ backgroundColor: this.colorPalette.base }">
      <div class="secondary-color" v-bind:style="{ borderTopColor: this.colorPalette.highlight }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPalette',
  methods : {
      selectPallete () {
          //this.$parent.blahblahblah;
      }
  },
  props: {
    colorPalette: Object
  }
}
</script>

<style lang="scss" scoped>

  .color-palette {
    padding: 4px;
    background: rgb(70, 70, 70);
    border-radius: 5px;
  }

  .palette {
    background-color: black;
  }

  .secondary-color {
    border-top: 32px solid;
    border-left: 32px solid transparent;
    border-right: transparent;
    border-bottom: transparent;
    width: 0;
  }

</style>
