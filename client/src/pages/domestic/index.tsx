import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
function Model(props: any) {
  const gltf = useLoader(GLTFLoader, "/3d/ferrari_testarossa/scene.gltf");
  return <primitive object={gltf.scene} {...props} />;
}

export default function Home() {
  return (
    <div style={{ width: "1000px", height: "800px" }}>
      <Canvas
        camera={{
          position: [-18, 10, 20],
          near: 1,
          far: 100,
        }}
      >
        <ambientLight />
        <OrbitControls target={[0, 0, 0]} />
        <pointLight position={[0, 10, 10]} />
        <Suspense fallback={null}>
          <Model scale={6} rotation={[0, Math.PI / 4, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
//[-18, 10, 10],
