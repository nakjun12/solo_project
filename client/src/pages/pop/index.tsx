import { Canvas } from "@react-three/fiber";
import Box from "@/lib/Box";

export default function Home() {
  return (
    <div style={{ width: "800px", height: "800px" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
