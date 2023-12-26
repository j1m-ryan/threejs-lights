import * as THREE from "three";

import { woodTexture } from "./loadingManager";

const material = new THREE.MeshStandardMaterial({
  map: woodTexture,
});
material.side = THREE.DoubleSide;

const geometry = new THREE.PlaneGeometry(20, 20, 20);

const floor = new THREE.Mesh(geometry, material);
floor.rotation.x = Math.PI / 2;
floor.position.y = -2;

export default floor;
