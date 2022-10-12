import * as THREE from 'three';
import { GrannyKnot } from '../misc/CurvesExtra';
import { EffectComposer } from '../../node_modules/three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from '../../node_modules/three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from '../../node_modules/three/examples/jsm/postprocessing/UnrealBloomPass';

//Initiating Clock instance
var clock;
clock = new THREE.Clock();

//Initiating Scenes
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
earth.layers.set(2);
scene.add(earth);

//Creating "sun light" for Earth
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-32, -18, -20);
pointLight.layers.set(2);
scene.add(pointLight);

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

//Function that creates and adds a star
const addStar = () => {
  const geometry = new THREE.SphereGeometry(0.035, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x, y, z);
  star.layers.set(1);
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

  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight)
  );
  bloomPass.threshold = 0.97;
  bloomPass.strength = 3;
  bloomPass.radius = 1;

  const bloomComposer = new EffectComposer(renderer);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
  bloomComposer.renderToScreen = true;
  bloomComposer.addPass(renderScene);
  bloomComposer.addPass(bloomPass);

  const animate = () => {
    requestAnimationFrame(animate);
    camera.layers.enableAll();
    earth.rotation.y += 0.005;
    updateCamera();
    renderer.autoClear = false;
    renderer.clear();
    bloomComposer.render();
  };
  animate();

  const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
  };
  resize();

  window.addEventListener('resize', resize);
};
