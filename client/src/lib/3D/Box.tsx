import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface BoxProps {
  position: [x: number, y: number, z: number];
}

const Box: React.FC<BoxProps> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Box;
