
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleCloudProps {
  count?: number;
}

const ParticleCloud: React.FC<ParticleCloudProps> = ({ count = 500 }) => {
  const mesh = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    
    return positions;
  }, [count]);
  
  // Animate particles
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime() * 0.1;
    
    mesh.current.rotation.x = time * 0.05;
    mesh.current.rotation.y = time * 0.075;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        size={0.15}
        sizeAttenuation={true}
        color="#8B5CF6"
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

interface ParticleFieldProps {
  className?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
};

export default ParticleField;
