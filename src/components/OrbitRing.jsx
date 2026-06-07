import { Line } from "@react-three/drei";
import { useMemo } from "react";

function OrbitRing({ radius }) {
  const points = useMemo(() => {
    const segments = 48;

    return Array.from({ length: segments + 1 }, (_, i) => {
      const t = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(t);
      const z = radius * Math.sin(t);
      return [x, 0, z];
    });

  }, [radius]);

  return <Line points={points} lineWidth={0.5} />;
}

export default OrbitRing;