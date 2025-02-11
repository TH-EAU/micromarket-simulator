import * as THREE from "three";

export const cloneGLTF = (gltf) => {
  const clone = {
    scene: gltf.scene.clone(),
    animations: gltf.animations,
    cameras: gltf.cameras,
  };

  // Clone animations
  clone.animations = gltf.animations.map((anim) => anim.clone());

  // Clone cameras
  clone.cameras = gltf.cameras.map((cam) => cam.clone());

  return clone;
};
