import * as THREE from 'three';
import { GrannyKnot } from '../misc/CurvesExtra';
import * as dat from 'dat.gui';

//Initiating GUI Helper
const gui = new dat.GUI();

//Initiating Clock instance
var clock;
clock = new THREE.Clock();

//Initiating Scene
const scene = new THREE.Scene();

//Initiating Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  3000
);

//Initiating Knot Geometry
const curve = new GrannyKnot();
const geometry = new THREE.TubeGeometry(curve, 100, 1, 8, true);
const material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const tube = new THREE.Mesh(geometry, material);

//Initiating Earth geometry
const geometry2 = new THREE.SphereGeometry();
const material2 = new THREE.MeshStandardMaterial({
  color: 0xff6347,
});
const earth = new THREE.Mesh(geometry2, material2);
earth.position.x = -2;
earth.position.y = 4;
earth.position.z = 2;
scene.add(earth);

//Creating lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);
scene.add(ambientLight);

camera.position.z = 20;

//Creating renderer
let renderer;

//Function for camera path
const updateCamera = () => {
  const time = clock.getElapsedTime();
  const looptime = 75;

  const t = (time % looptime) / looptime;
  const t2 = ((time + 0.1) % looptime) / looptime;

  const pos = tube.geometry.parameters.path.getPointAt(t);
  const pos2 = tube.geometry.parameters.path.getPointAt(t2);

  camera.position.copy(pos);
  camera.lookAt(pos2);
};

//Animate function
const animate = () => {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  earth.rotation.y += 0.005;
  // cube.rotation.z += 0.01;
  updateCamera();
  renderer.render(scene, camera);
};

//Function that triggers on resize
const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

//Adding resize event listener
window.addEventListener('resize', resize);

//Function that creates and adds a star
const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.035, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x, y, z);
  scene.add(star);
};

//Adding stars to scene
Array(600).fill().forEach(addStar);

//Adding background texture
const spaceTexture = new THREE.TextureLoader().load('../src/assets/galaxy.jpg');
spaceTexture.minFilter = THREE.LinearFilter;
scene.background = spaceTexture;

//Creating main function
export const createScene = (element) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: element });
  resize();
  animate();
};

gui.add(earth.position, 'x').min(-20).max(20).step(0.1);
gui.add(earth.position, 'y').min(-20).max(20).step(0.1);
gui.add(earth.position, 'z').min(-20).max(20).step(0.1);
