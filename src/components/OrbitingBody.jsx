import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import StellarBody from "./StellarBody";
import OrbitRing from "./OrbitRing";
import PositionalSound from "./PositionalAudio";

function OrbitingBody({
  name,
  modelPath,
  scale,
  radius,
  speed,
  rotationSpeed,
  sound,
  playing,
  children,
}) {
  const orbitRef = useRef();
  const planetRef = useRef();

  useFrame((state, delta) => {
    orbitRef.current.rotation.y += delta * speed;
    if (rotationSpeed) planetRef.current.rotation.y += delta * rotationSpeed;
  });

  return (
    <group>
      <OrbitRing radius={radius} />
      <group ref={orbitRef} >
        <group position={[radius, 0, 0]}>
          <group ref={planetRef} onClick={() => onSelect(planetRef)}>
            <StellarBody name={name} modelPath={modelPath} scale={scale} />
          </group>
          {sound && (
            <PositionalSound url={sound} distance={20} playing={playing} />
          )}
          {children}
        </group>
      </group>
    </group>
  );
}

export default OrbitingBody;
