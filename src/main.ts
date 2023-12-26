import { createDoubleClickListener } from "./utils/fullscreen";
import scene from "./scene";
import canvas from "./canvas";
import cube from "./cube";
import {
  ambientLight,
  directionalLight,
  directionalLightHelper,
  hemisphereLight,
  hemisphereLightHelper,
  pointLight,
  rectAreaLight,
  spotLight,
} from "./lights";
import { tick } from "./timer";
import sphere from "./sphere";
import torus from "./torus";
import floor from "./floor";

function main() {
  scene.add(cube);
  scene.add(sphere);
  scene.add(torus);
  scene.add(floor);

  scene.add(ambientLight);
  scene.add(directionalLight);
  scene.add(hemisphereLight);
  scene.add(pointLight);
  scene.add(rectAreaLight);
  scene.add(spotLight);
  scene.add(hemisphereLightHelper);
  scene.add(directionalLightHelper);

  createDoubleClickListener(canvas);

  tick();
}

main();
