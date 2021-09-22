<template>
  <div class="test">
    <div class="main" ref="main">

    </div>
  </div>
</template>

<script>

import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
// import { DragControls } from 'three/examples/jsm/controls/DragControls'

export default {
  name: 'Test',
  data() {
    return {
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      geometry: null,
      material: null,
      cube: null,
      ambient: null,
      controls: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {



      this.container = this.$refs.main

      // 创建场景 相机 渲染器
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
      this.renderer = new THREE.WebGLRenderer({ antialias: true });

      this.scene.background = new THREE.Color(0xcfcfcf);

      this.camera.position.set( 0, 100, 0 );

      this.camera.lookAt(this.scene.position);

      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.shadowMap.enabled = true

      this.container.appendChild( this.renderer.domElement );


      this.loadLight()
      this.loadGLB()

      this.controls = new OrbitControls( this.camera, this.renderer.domElement );
      this.controls.addEventListener( 'change', this.render ); // use if there is no animation loop
      this.controls.minDistance = 400;
      this.controls.maxDistance = 1000;
      this.controls.target.set( 10, 90, - 16 );
      this.controls.update();

    },

    loadLight() {
      const ambient = new THREE.AmbientLight(0xFFFFFF)
      this.scene.add(ambient)
    },

    loadGLB() {
      const loader = new GLTFLoader();

      loader.load('static/model/连续工艺模型.glb', ( gltf ) => {

        let model = gltf.scene

        this.scene.add( model );

        this.render()
      }, (p) => {
        console.log('p', p)
      }, ( error ) => {
        console.error( error );
      });
    },

    render() {
      this.renderer.render( this.scene, this.camera );
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    }

  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: 800px;
    height: 600px;
  }
</style>
