import * as THREE from "three";
import { lightFolder } from "./libgui";

const ambientLight = new THREE.AmbientLight("white", 1);

lightFolder
  .add(ambientLight, "intensity")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Ambient Light Intensity");

const directionalLight = new THREE.DirectionalLight("blue", 1);

lightFolder
  .add(directionalLight, "intensity")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Directional Light Intensity");

lightFolder
  .add(directionalLight.position, "x")
  .min(-5)
  .max(5)
  .step(0.01)
  .name("Directional Light Position X");

lightFolder
  .add(directionalLight.position, "y")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Directional Light Position Y");

lightFolder
  .add(directionalLight.position, "z")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Directional Light Position Z");

const hemisphereLight = new THREE.HemisphereLight("lightblue", "green", 1);
lightFolder
  .add(hemisphereLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("hemisphere light intensity");

const pointLight = new THREE.PointLight("white", 1);

lightFolder
  .add(pointLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("point light intensity");

lightFolder
  .add(pointLight.position, "y")
  .min(0)
  .max(10)
  .step(0.01)
  .name("point light height");

const rectAreaLight = new THREE.RectAreaLight("blue", 6, 1, 1);

lightFolder
  .add(rectAreaLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("rect area light intensity");

lightFolder
  .add(rectAreaLight, "width")
  .min(0)
  .max(10)
  .step(0.01)
  .name("rect area light width");

lightFolder
  .add(rectAreaLight, "height")
  .min(0)
  .max(10)
  .step(0.01)
  .name("rect area light height");

const spotLight = new THREE.SpotLight("green", 5, 10, Math.PI * 0.1, 0.25, 1);

const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  1
);

const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  0.4
);

export {
  ambientLight,
  directionalLight,
  hemisphereLight,
  pointLight,
  rectAreaLight,
  spotLight,
  hemisphereLightHelper,
  directionalLightHelper,
};
