
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingAxe = () => {
  const axeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (axeRef.current) {
      axeRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      axeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={axeRef}>
      {/* Axe Handle */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 3]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Axe Head */}
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[1.5, 0.8, 0.2]} />
        <meshStandardMaterial
          color="#4A90E2"
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
};

const RuneStone = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 1.5, 0.3]} />
      <meshStandardMaterial
        color="#666666"
        emissive="#00ffff"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const RuneStones = () => {
  const stonesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (stonesRef.current) {
      stonesRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const positions: [number, number, number][] = [
    [3, 0, 0],
    [-3, 0, 0],
    [0, 0, 3],
    [0, 0, -3],
    [2.1, 0, 2.1],
    [-2.1, 0, -2.1]
  ];

  return (
    <group ref={stonesRef}>
      {positions.map((position, index) => (
        <RuneStone key={index} position={position} />
      ))}
    </group>
  );
};

const MagicOrb = () => {
  const orbRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.5 + 2;
    }
  });

  return (
    <mesh ref={orbRef} position={[0, 2, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#ff0066"
        emissive="#ff0066"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border border-primary/30 box-glow">
      <Canvas camera={{ position: [8, 5, 8], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Lighting Setup */}
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ffff" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#ff3366" />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
            color="#ffffff"
          />
          
          {/* Scene Elements */}
          <RotatingAxe />
          <RuneStones />
          <MagicOrb />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={true}
            autoRotate
            autoRotateSpeed={1}
            maxDistance={15}
            minDistance={5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
