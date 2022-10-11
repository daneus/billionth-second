import * as THREE from 'three';
import { GrannyKnot } from '../misc/CurvesExtra';

//Initiating Clock instance
var clock;
clock = new THREE.Clock();

//Initiating Scenes
const scene = new THREE.Scene();
const earthScene = new THREE.Scene();

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
const earthTexture = new THREE.TextureLoader().load(
  '../src/assets/earthTexture.jpg'
);
const normalEarthTexture = new THREE.TextureLoader().load(
  '../src/assets/earthNormalMap.jpg'
);
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalEarthTexture,
  })
);
earth.position.x = -2;
earth.position.y = 4;
earth.position.z = 2;
earth.rotation.x = 5.15;
earth.rotation.y = 3;
earthScene.add(earth);

//Creating ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

//Creating "sun light" for Earth
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-32, -18, -20);
earthScene.add(pointLight);

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
  earth.rotation.y += 0.005;
  updateCamera();
  renderer.autoClear = false;
  renderer.clear();
  renderer.render(scene, camera);
  renderer.render(earthScene, camera);
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
