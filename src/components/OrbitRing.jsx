import { Line } from "@react-three/drei";

function OrbitRing({radius}) {
  const segments = 64;

  const angleIncrement = 360 / segments;
  
  const positionArray = [];

  for (let i = 0; i <= segments; i++) {
    let angle = angleIncrement * i;
    const angleInRadians = angle * (Math.PI / 180);

    const x = radius * Math.cos(angleInRadians);
    const z = radius * Math.sin(angleInRadians);

    positionArray.push([x, 0, z]);
    //console.log(`X: ${x}, Z: ${z}`);
  }

  return <Line points={positionArray}
  lineWidth={0.5} />;
}

export default OrbitRing;
