
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedGridProps {}

const AnimatedGrid: React.FC<AnimatedGridProps> = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.z = ((clock.getElapsedTime() * 0.15) % 1) - 0.5;
    }
  });
  
  return (
    <Grid
      ref={gridRef}
      position={[0, -2, 0]}
      args={[10.5, 10.5, 10, 10]}
      cellSize={1}
      cellThickness={0.5}
      cellColor="#6366F1"
      sectionSize={3}
      sectionThickness={1}
      sectionColor="#8B5CF6"
      fadeDistance={25}
      fadeStrength={1.5}
    />
  );
};

interface FloatingGridProps {
  className?: string;
}

const FloatingGrid: React.FC<FloatingGridProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      >
        <ambientLight intensity={0.5} />
        <AnimatedGrid />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default FloatingGrid;
