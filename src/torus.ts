import * as THREE from "three";

import { woodTexture } from "./loadingManager";

const material = new THREE.MeshStandardMaterial({
  map: woodTexture,
});

const geometry = new THREE.TorusGeometry(0.3, 0.1, 20);

const torus = new THREE.Mesh(geometry, material);
torus.position.x = 2;

export default torus;
