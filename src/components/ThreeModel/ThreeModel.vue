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
      container: null,
      scene: null,
      camera: null,
      renderer: null,
      controls: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {


      const { width, height } = this.$refs._three_model.getBoundingClientRect()

      console.log('width', width)
      console.log('height', height)

      this.container = this.$refs.main

      // 创建场景 相机 渲染器
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
      this.renderer = new THREE.WebGLRenderer({ antialias: true });

      this.scene.background = new THREE.Color(0xcfcfcf);

      this.camera.position.set( 0, 0, 10 );

      this.camera.lookAt(this.scene.position);

      this.renderer.setPixelRatio(width);
      this.renderer.setSize( width, height );
      this.renderer.shadowMap.enabled = true

      this.container.appendChild( this.renderer.domElement );


      this.loadLight()
      this.loadGLB()

      this.controls = new OrbitControls( this.camera, this.renderer.domElement );
      // this.controls.addEventListener( 'change', this.render ); // use if there is no animation loop
      this.controls.minDistance = 400;
      this.controls.maxDistance = 2000;
      this.controls.target = new THREE.Vector3(0, 0, 0);
      this.controls.update();

      this.animate()

    },

    loadLight() {
      const ambient = new THREE.AmbientLight(0xFFFFFF)
      this.scene.add(ambient)
    },

    loadGLB() {

      const gltf = cache[this.modelName]

      console.log('gltf', gltf)


      if (gltf) {
        let model = gltf.scene
        this.scene.add( model );
        this.setContent(model)
        this.render()
        return
      }

      const loader = new GLTFLoader();

      loader.load(`static/model/${this.modelName}.glb`, ( gltf ) => {
        cache[this.modelName] = gltf
        let model = gltf.scene
        this.scene.add( model );
        this.setContent(model)
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
      this.controls.update();
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)
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
    this.scene = new THREE.Scene()
    this.container = null
    this.scene = null
    this.camera = null
    this.renderer = null
    this.controls = null
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
