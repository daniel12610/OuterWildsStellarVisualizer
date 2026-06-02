import { useFBX } from "@react-three/drei";

function StellarBody({ name, modelPath, scale }) {
  const model = useFBX(modelPath);

  return (
    <primitive
      object={model}
      scale={scale}
    />
  );
}

export default StellarBody;