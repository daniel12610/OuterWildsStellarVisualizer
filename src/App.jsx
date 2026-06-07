import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import StellarBody from "./components/StellarBody";
import OrbitingBody from "./components/OrbitingBody";
import OrbitRing from "./components/OrbitRing";
import { useAudioUnlock } from "./components/AudioUnlock";
import { useState } from "react";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  useAudioUnlock();

  return (
    <div className="app-container">
      <div className="overlay">
        <h1>Outer Wilds Solar System</h1>
      </div>

      {!started && (
        <div className="start-overlay" onClick={() => setPlaying((p) => !p)}>
          {playing ? "Mute" : "Play"}
        </div>
      )}

      <Canvas camera={{ position: [0, 500, 0], fov: 60 }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={1} />
        <directionalLight color="white" position={[0, 10, 0]} intensity={10} />
        <axesHelper args={[20]} />
        <gridHelper args={[500, 4]} />

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[25, 32, 32]} />
          <meshBasicMaterial color="orange" />
        </mesh>

        <OrbitingBody
          name="Solar Station"
          modelPath="/models/Proxy_SS.glb"
          scale={0.009}
          radius={30}
          speed={0.2}
        />

        <OrbitingBody
          name="Hourglass Twins"
          modelPath="/models/Proxy_HGT.glb"
          scale={0.012}
          radius={45}
          speed={0.2}
          sound="/sound/TravelerTheme_drums.ogg"
          playing={playing}
        />
        <OrbitingBody
          name="Timber Hearth"
          modelPath="/models/Proxy_TH.glb"
          scale={0.01}
          radius={80}
          speed={0.12}
          sound="/sound/TravelerTheme_whistling.ogg"
          playing={playing}
        />
        <OrbitingBody
          name="Brittle Hollow"
          modelPath="/models/Proxy_BH.glb"
          scale={0.011}
          radius={120}
          speed={0.09}
          sound="/sound/TravelerTheme_banjo.ogg"
          playing={playing}
        />
        <OrbitingBody
          name="Giant's Deep"
          modelPath="/models/Proxy_GD.glb"
          scale={0.009}
          radius={160}
          speed={0.06}
          sound="/sound/TravelerTheme_flute.ogg"
          playing={playing}
        />
        <OrbitingBody
          name="Dark Bramble"
          modelPath="/models/Proxy_DB.glb"
          scale={0.02}
          radius={220}
          speed={0.04}
          sound="/sound/TravelerTheme_harmonica.ogg"
          playing={playing}
        />

        <OrbitControls minDistance={1} maxDistance={500} />
      </Canvas>
    </div>
  );
}

export default App;
