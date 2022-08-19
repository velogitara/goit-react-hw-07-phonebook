import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Box(props) {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh {...props} ref={ref} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      {/* <sphereGeometry args={[1, 32, 32, 4, 6]} /> */}
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}

export const Example = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.8, 2, 0]} />
        <Box position={[1.8, 0, 0]} />
      </Canvas>
    </div>
  );
};
