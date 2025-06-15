
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const ThreeScene = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
          <mesh>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial
              color="#00ffff"
              wireframe
              emissive="#00ffff"
              emissiveIntensity={0.5}
            />
          </mesh>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
