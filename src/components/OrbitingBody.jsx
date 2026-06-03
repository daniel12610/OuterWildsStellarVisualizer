import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import StellarBody from "./StellarBody";
import OrbitRing from "./OrbitRing";

function OrbitingBody({ name, modelPath, scale, radius, speed }) {
  const orbitRef = useRef();
  useFrame((state, delta) => {
    orbitRef.current.rotation.y += delta * speed;
  });
  return (
    <group>
      <OrbitRing radius={radius} />
      <group
        ref={orbitRef}
        onClick={() => {
          console.log(`${name} clicked`);
        }}
      >
        <group position={[radius, 0, 0]}>
          <StellarBody name={name} modelPath={modelPath} scale={scale} />
        </group>
      </group>
    </group>
  );
}

export default OrbitingBody;
