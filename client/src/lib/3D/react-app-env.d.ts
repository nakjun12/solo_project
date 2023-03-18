import { Group, Plane, Sphere } from "three";
import { Object3DNode } from "react-three-fiber";
import { MeshDistortMaterialImpl } from "three/examples/jsm/materials/MeshDistortMaterial";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<Group, typeof Group>;
      plane: Object3DNode<Plane, typeof Plane>;
      sphere: Object3DNode<Sphere, typeof Sphere>;
      primitive: {
        object: THREE.Object3D;
      };
    }
  }
}
