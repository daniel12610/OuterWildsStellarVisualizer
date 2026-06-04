import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import StellarBody from "./StellarBody";
import OrbitRing from "./OrbitRing";
import PositionalSound from "./PositionalAudio";

function OrbitingBody({ name, modelPath, scale, radius, speed, sound, playing}) {
  const orbitRef = useRef();
  const planetRef = useRef();

  useFrame((state, delta) => {
    orbitRef.current.rotation.y += delta * speed;
  });

  return (
    <group>
      <OrbitRing radius={radius} />

      <group ref={orbitRef}>
        <group position={[radius, 0, 0]}>
          <group ref={planetRef}>
            <StellarBody
              name={name}
              modelPath={modelPath}
              scale={scale}
            />
          </group>

          {sound && (
            <PositionalSound
              url={sound}
              targetRef={planetRef}
              distance={20}
              playing={playing}
            />
          )}
        </group>
      </group>
    </group>
  );
}

export default OrbitingBody;