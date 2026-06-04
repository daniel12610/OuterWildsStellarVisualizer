import { useGLTF } from "@react-three/drei";

function StellarBody({ name, modelPath, scale }) {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} scale={scale} />;
}

export default StellarBody;
