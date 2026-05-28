import { Canvas } from "@react-three/fiber";
import { useFBX, OrbitControls } from "@react-three/drei";
import StellarBody from "./components/StellarBody";
import "./App.css";

function PlanetModel() {
  const model = useFBX("/models/Proxy_TH.fbx");

  return <primitive object={model} scale={0.01} position={[0, 0, 0]} />;
}

function App() {
  return (
    <div className="app-container">
      {/* Title text */}
      <div className="overlay">
        <h1>Outer Wilds Solar System</h1>
      </div>

      {/* 3D Scene */}
      <Canvas
        camera={{
          position: [0, 10, 100],
          fov: 45,
        }}
      >
        <color attach="background" args={["black"]} />

        <ambientLight intensity={1} />

        <directionalLight color="white" position={[0, 10, 0]} intensity={100} />

        <axesHelper args={[20]} />
        <gridHelper args={[500, 20]} />

        {/* Sun */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[15, 32, 32]} />
          <meshBasicMaterial color="orange" />
        </mesh>

        {/* Hourglass Twins */}
        <StellarBody
          name={"Hourglass Twins"}
          modelPath={"/models/Proxy_HGT.fbx"}
          scale={0.01}
          position={[25, 0, 0]}
        />

        {/* Timber Hearth */}
        <StellarBody
          name={"Timber Hearth"}
          modelPath={"/models/Proxy_TH.fbx"}
          scale={0.01}
          position={[50, 0, 0]}
        />

        {/* Brittle Hollow */}
        <StellarBody
          name={"Brittle Hollow"}
          modelPath={"/models/Proxy_BH.fbx"}
          scale={0.01}
          position={[75, 0, 0]}
        />

        {/* Giant's Deep */}
        <StellarBody
          name={"Giant's Deep"}
          modelPath={"/models/Proxy_GD.fbx"}
          scale={0.008}
          position={[100, 0, 0]}
        />

        {/* Dark Bramble */}
        <StellarBody
          name={"Dark Bramble"}
          modelPath={"/models/Proxy_DB.fbx"}
          scale={0.01}
          position={[125, 0, 0]}
        />

        <OrbitControls minDistance={10} maxDistance={250} />
      </Canvas>
    </div>
  );
}

export default App;
