import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
import OrbitingBody from "./components/OrbitingBody";
import { useAudioUnlock } from "./components/AudioUnlock";
import { useState, Suspense } from "react";
import SpaceBackground from "./components/SpaceBackground";
import "./App.css";

function App() {
  //Audio
  const [playing, setPlaying] = useState(false);
  useAudioUnlock();

  return (
    <div className="app-container">
      <div className="overlay">
        <h1>Outer Wilds Solar System</h1>
      </div>

      <div className="start-overlay" onClick={() => setPlaying((p) => !p)}>
        {playing ? "🔇 Mute" : "🔊 Play"}
      </div>

      <Canvas camera={{ position: [0, 500, 0], fov: 65 }}>
        <Stars
          radius={450}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <Suspense fallback={null}>
          <SpaceBackground />
        </Suspense>

        <ambientLight intensity={0.05} />
        <pointLight
          position={[0, 0, 0]}
          intensity={500000}
          distance={400}
          color="orange"
        />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[25, 32, 32]} />
          <meshBasicMaterial color="orange" />
        </mesh>

        <OrbitingBody
          name="Solar Station"
          modelPath="/models/Proxy_SS.glb"
          scale={0.009}
          radius={30}
          speed={0.02}
        />
        <OrbitingBody
          name="Hourglass Twins"
          modelPath="/models/Proxy_HGT.glb"
          scale={0.012}
          radius={90}
          speed={0.02}
          rotationSpeed={0.07}
          sound="/sound/TravelerTheme_drums.ogg"
          playing={playing}
        />
        <OrbitingBody
          name="Timber Hearth"
          modelPath="/models/Proxy_TH.glb"
          scale={0.01}
          radius={150}
          speed={0.012}
          rotationSpeed={0.2}
          playing={playing}
        >
          <OrbitingBody
            name="The Attlerock (Timber Hearth's Moon)"
            modelPath="/models/Proxy_THM.glb"
            scale={0.01}
            radius={10}
            speed={0.1}
            rotationSpeed={0.1}
            sound="/sound/TravelerTheme_whistling.ogg"
            playing={playing}
          />
        </OrbitingBody>

        <OrbitingBody
          name="Brittle Hollow"
          modelPath="/models/Proxy_BH.glb"
          scale={0.011}
          radius={210}
          speed={0.009}
          rotationSpeed={0.2}
          sound="/sound/TravelerTheme_banjo.ogg"
          playing={playing}
        />
        <OrbitingBody
          name="Giant's Deep"
          modelPath="/models/Proxy_GD.glb"
          scale={0.009}
          radius={270}
          speed={0.006}
          rotationSpeed={0.9}
          sound="/sound/TravelerTheme_flute.ogg"
          playing={playing}
        >
          <OrbitingBody
            name="Quantum Moon"
            modelPath="/models/Proxy_QM.glb"
            scale={0.5}
            radius={15}
            speed={0.2}
            rotationSpeed={0.5}
            sound="/sound/TravelerTheme_piano.ogg"
            playing={playing}
          />
        </OrbitingBody>
        <OrbitingBody
          name="Dark Bramble"
          modelPath="/models/Proxy_DB.glb"
          scale={0.02}
          radius={330}
          speed={0.004}
          rotationSpeed={0.003}
          sound="/sound/TravelerTheme_harmonica.ogg"
          playing={playing}
        />
        <OrbitControls minDistance={1} maxDistance={500} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/Proxy_SS.glb");
useGLTF.preload("/models/Proxy_HGT.glb");
useGLTF.preload("/models/Proxy_QM.glb");
useGLTF.preload("/models/Proxy_TH.glb");
useGLTF.preload("/models/Proxy_BH.glb");
useGLTF.preload("/models/Proxy_GD.glb");
useGLTF.preload("/models/Proxy_DB.glb");

export default App;
