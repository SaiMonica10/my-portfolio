import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const group = useRef();
  
  // Creates random geometries
  const shapes = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20 - 5
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.5 + 0.1,
      type: Math.floor(Math.random() * 3) // 0: Icosahedron, 1: Torus, 2: Box
    }));
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05;
      group.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={group}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={1} rotationIntensity={2} floatIntensity={3}>
          <mesh
            position={shape.position}
            rotation={shape.rotation}
            scale={shape.scale}
          >
            {shape.type === 0 && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === 1 && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
            {shape.type === 2 && <boxGeometry args={[1, 1, 1]} />}
            <meshStandardMaterial 
              color="#00e5ff" 
              wireframe 
              transparent 
              opacity={0.15} 
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const ConnectingLines = () => {
  const points = useMemo(() => {
    const pts = [];
    for(let i=0; i<30; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10 - 2
        )
      );
    }
    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#b026ff" transparent opacity={0.15} linewidth={1} />
    </line>
  );
};

const Background3D = () => {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00e5ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#b026ff" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ConnectingLines />
        
        {/* Adds realistic reflections to standard materials */}
        <Environment preset="city" />
        
        {/* Subtle fog for distance fading */}
        <fog attach="fog" args={['#050508', 5, 25]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
