<template>
    <div id="container"></div>
</template>

<script>
const Three = require('three');

export default {
  name: 'Renderer',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
        this.camera.position.z = 1;

        this.scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        this.mesh = new Three.Mesh( geometry, material );
        this.scene.add( this.mesh );

        this.renderer = new Three.WebGLRenderer( {antialias: true, alpha: true} );
        this.renderer.setSize( container.clientWidth, container.clientHeight );
        this.renderer.setPixelRatio( window.devicePixelRatio );

        container.appendChild( this.renderer.domElement );
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function() {
      let container = document.getElementById('container');
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( container.clientWidth, container.clientHeight );
    }
  },
  created() {
    window.addEventListener( 'resize', this.onWindowResize );
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style scoped>
#container {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  display: block;
  line-height:0;
  max-height: 100vh;
}
</style>