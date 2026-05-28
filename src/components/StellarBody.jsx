import { useFBX } from "@react-three/drei";

function StellarBody({ name, modelPath, scale, position }) {
  const model = useFBX(modelPath);

  return (
    <primitive
      object={model}
      scale={scale}
      position={position}
      onClick={() => {
        console.log(`${name} clicked`);
      }}
    />
  );
}

export default StellarBody;