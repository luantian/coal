<template>
  <div class="__three-model" ref="_three_model">
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

let cache = {}

let container = null
let scene = null
let camera = null
let renderer = null
let controls = null
let rafId = null

export default {
  name: 'ThreeModel',
  props: {
    modelName: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.init()
    // this.render();
  },
  methods: {
    init() {

      const { width, height } = this.$refs._three_model.getBoundingClientRect()

      container = this.$refs.main

      // 创建场景 相机 渲染器
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      renderer = new THREE.WebGLRenderer({ antialias: true });

      scene.background = new THREE.Color(0xcfcfcf);

      camera.position.set( 0, 0, 10 );

      camera.lookAt(scene.position);

      renderer.setPixelRatio(width);
      renderer.setSize( width, height );
      renderer.shadowMap.enabled = true

      container.appendChild( renderer.domElement );

      this.loadLight()
      this.loadGLB()

      controls = new OrbitControls( camera, renderer.domElement );
      controls.addEventListener( 'change', this.render ); // use if there is no animation loop

      controls.target = (0, 0, 0);
      // controls.update();

      // this.animate()

    },

    loadLight() {
      const ambient = new THREE.AmbientLight(0xFFFFFF)
      scene.add(ambient)
    },

    loadGLB() {

      console.log('___________loadGLB______________')

      const gltf = cache[this.modelName]

      if (gltf) {
        let model = gltf.scene
        scene.add( model );
        // this.setContent(model)
        console.log(this.render)
        this.render()
        return
      }

      const loader = new GLTFLoader();

      loader.load(`static/newmodel/${this.modelName}.glb`, ( gltf ) => {
        console.log('this.modelName', this.modelName)
        cache[this.modelName] = gltf
        let model = gltf.scene
        scene.add( model );
        // this.setContent(model)
        this.render()
      }, (p) => {
        console.log('p', p)
      }, ( error ) => {
        console.error( error );
      });
    },

    render() {
      renderer.render( scene, camera );
    },

    animate() {
      rafId = requestAnimationFrame(this.animate)
      this.render()
    },
    setContent(object) {
      object.updateMatrixWorld();
      // 获得包围盒得min和max
      const box = new THREE.Box3().setFromObject(object);
      // 返回包围盒的宽度，高度，和深度
      // const boxSize = box.getSize();
      // 返回包围盒的中心点
      const center = box.getCenter(new THREE.Vector3());
      object.position.x += object.position.x - center.x;
      object.position.y += object.position.y - center.y;
      object.position.z += object.position.z - center.z;
    },

  },

  beforeDestroy() {
    cancelAnimationFrame(rafId)
    container = null
    scene = null
    camera = null
    renderer = null
    controls = null
  },
  watch: {
    modelName() {
      this.loadGLB()
    }
  }
}
</script>

<style lang="scss" scoped>


   .__three-model, .main {
    width: 100%;
    height: 100%;
  }
</style>
