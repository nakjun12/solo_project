import { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type ModelProps = {
  modelPath: string;

  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
  onLoaded?: (gltf: GLTF) => void;
  style?: React.CSSProperties; // style 속성 추가
};

const Model = ({
  modelPath,

  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  castShadow = false,
  receiveShadow = false,
  onLoaded,
  ...props
}: ModelProps) => {
  const [model, setModel] = useState<THREE.Object3D>();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf: GLTF) => {
      const model = gltf.scene.children[0];
      model.castShadow = castShadow;
      model.receiveShadow = receiveShadow;
      model.position.set(position[0], position[1], position[2]);
      model.rotation.set(rotation[0], rotation[1], rotation[2]);
      model.scale.set(scale, scale, scale);

      setModel(model);
      if (onLoaded) {
        onLoaded(gltf);
      }
    });
  }, [
    modelPath,
    castShadow,
    receiveShadow,
    position,
    rotation,
    scale,
    onLoaded,
  ]);

  return <group>{model && <primitive object={model} />}</group>;
};

export default Model;
