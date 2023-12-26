import * as THREE from "three";

import { woodTexture } from "./loadingManager";

const material = new THREE.MeshStandardMaterial({
  map: woodTexture,
});

const geometry = new THREE.SphereGeometry(0.5, 20, 20);

const sphere = new THREE.Mesh(geometry, material);
sphere.position.x = -2;

export default sphere;
