<template>
  <div id="container"></div>
</template>
<script>
import * as THREE from 'three'
import mapJson from '../../chinaMap/china.json'
let scene = null,
  camera = null,
  renderer = null,
  mesh = null,
  shape = null

export default {
  name: 'BigScreenScreen',

  data() {
    return {}
  },
  created() {},
  mounted() {
    this.init(), this.animate()
  },

  methods: {
    // init() {
    //   let container = document.getElementById('container')
    //   camera = new THREE.PerspectiveCamera(
    //     70,
    //     container.clientWidth / container.clientHeight,
    //     0.01,
    //     10
    //   )
    //   camera.position.z = 10
    //   scene = new THREE.Scene()

    //   const point = []

    //   mapJson.features.forEach((item) => {
    //     item.geometry.coordinates[0][0].forEach((value) => {
    //       point.push(new THREE.Vector2(value[0], value[1]))
    //     })
    //   })
    //   // console.log(mapJson.features)

    //   shape = new THREE.Shape(point)

    //   let geometry = new THREE.ShapeGeometry(shape)
    //   geometry.center()
    //   geometry.scale(1, 1, 1)
    //   console.log(geometry)

    //   let material = new THREE.MeshNormalMaterial()

    //   mesh = new THREE.Mesh(geometry, material)
    //   scene.add(mesh)

    //   renderer = new THREE.WebGLRenderer({ antialias: true })
    //   renderer.setSize(window.innerWidth, window.innerHeight)
    //   renderer.setClearColor(0x12345)
    //   container.appendChild(renderer.domElement)

    //   console.log(shape)
    // },
    animate() {
      // requestAnimationFrame(this.animate)
      // mesh.rotation.x += 0.01
      // mesh.rotation.y += 0.02
      renderer.render(scene, camera)
    }
  },
  mounted() {
    this.init()
    this.animate()
  }
}
</script>
<style scoped>
#container {
  width: 100vw;
  height: 100vh;
}
</style>
