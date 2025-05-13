
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3 } from 'three';

interface NeuronNodeProps {
  position: [number, number, number];
  color: string;
  pulse?: boolean;
}

const NeuronNode: React.FC<NeuronNodeProps> = ({ position, color, pulse = false }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (meshRef.current && pulse) {
      meshRef.current.scale.x = meshRef.current.scale.y = meshRef.current.scale.z = THREE.MathUtils.lerp(
        meshRef.current.scale.x,
        hovered ? 1.4 : 1,
        0.1
      );
    }
  });
  
  return (
    <Sphere 
      args={[0.2, 16, 16]} 
      position={position}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={hovered ? "#8B5CF6" : color} 
        roughness={0.3} 
        metalness={0.5} 
      />
    </Sphere>
  );
};

interface NeuralConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  width: number;
  opacity: number;
}

const NeuralConnection: React.FC<NeuralConnectionProps> = ({ start, end, color, width, opacity }) => {
  const ref = useRef<THREE.Object3D>(null);
  
  const points = useMemo(() => [
    new Vector3(...start),
    new Vector3(...end)
  ], [start, end]);
  
  return (
    <Line 
      ref={ref}
      points={points}
      color={color}
      lineWidth={width}
      opacity={opacity}
    />
  );
};

interface NeuralLayerProps {
  position: [number, number, number];
  count: number;
  radius: number;
  pulse?: boolean;
}

const NeuralLayer: React.FC<NeuralLayerProps> = ({ position, count, radius, pulse = false }) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return (
      <NeuronNode 
        key={i} 
        position={[x + position[0], y + position[1], position[2]]} 
        color={i % 3 === 0 ? "#6366F1" : "#8B5CF6"}
        pulse={pulse}
      />
    );
  });
};

interface MousePosition {
  x: number;
  y: number;
}

interface NeuralNetworkSceneProps {
  mousePosition: React.RefObject<MousePosition>;
}

const NeuralNetworkScene: React.FC<NeuralNetworkSceneProps> = ({ mousePosition }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Create layers of the neural network
  const layers = [
    { position: [-4, 0, 0] as [number, number, number], count: 6, radius: 2 },
    { position: [0, 0, 0] as [number, number, number], count: 8, radius: 2.5, pulse: true },
    { position: [4, 0, 0] as [number, number, number], count: 4, radius: 1.5 },
  ];

  // Create connections between layers
  const connections = useMemo(() => {
    const conns: NeuralConnectionProps[] = [];
    
    // Connect first layer to second layer
    for (let i = 0; i < layers[0].count; i++) {
      const angleI = (i / layers[0].count) * Math.PI * 2;
      const x1 = Math.cos(angleI) * layers[0].radius + layers[0].position[0];
      const y1 = Math.sin(angleI) * layers[0].radius + layers[0].position[1];
      const z1 = layers[0].position[2];
      
      for (let j = 0; j < layers[1].count; j++) {
        const angleJ = (j / layers[1].count) * Math.PI * 2;
        const x2 = Math.cos(angleJ) * layers[1].radius + layers[1].position[0];
        const y2 = Math.sin(angleJ) * layers[1].radius + layers[1].position[1];
        const z2 = layers[1].position[2];
        
        if ((i + j) % 3 === 0) { // Only connect some nodes for cleaner visualization
          conns.push({
            start: [x1, y1, z1],
            end: [x2, y2, z2],
            color: '#8B5CF6',
            width: 0.5,
            opacity: 0.4,
          });
        }
      }
    }
    
    // Connect second layer to third layer
    for (let i = 0; i < layers[1].count; i++) {
      const angleI = (i / layers[1].count) * Math.PI * 2;
      const x1 = Math.cos(angleI) * layers[1].radius + layers[1].position[0];
      const y1 = Math.sin(angleI) * layers[1].radius + layers[1].position[1];
      const z1 = layers[1].position[2];
      
      for (let j = 0; j < layers[2].count; j++) {
        const angleJ = (j / layers[2].count) * Math.PI * 2;
        const x2 = Math.cos(angleJ) * layers[2].radius + layers[2].position[0];
        const y2 = Math.sin(angleJ) * layers[2].radius + layers[2].position[1];
        const z2 = layers[2].position[2];
        
        if ((i + j) % 2 === 0) { // Only connect some nodes for cleaner visualization
          conns.push({
            start: [x1, y1, z1],
            end: [x2, y2, z2],
            color: '#6366F1',
            width: 0.5,
            opacity: 0.4,
          });
        }
      }
    }
    
    return conns;
  }, []);

  // Rotate the network based on mouse position
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      
      if (mousePosition.current) {
        // Subtle rotation based on mouse position
        const rotX = (mousePosition.current.y * 0.1 - 0.05) * Math.PI;
        const rotY = (mousePosition.current.x * 0.1 - 0.05) * Math.PI;
        
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x || 0,
          rotX,
          0.05
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y || 0,
          rotY,
          0.05
        );
      }
    }
  });
  
  return (
    <group ref={groupRef}>
      {layers.map((layer, i) => (
        <NeuralLayer key={i} {...layer} />
      ))}
      
      {connections.map((conn, i) => (
        <NeuralConnection key={i} {...conn} />
      ))}
    </group>
  );
};

interface NeuralNetwork3DProps {
  className?: string;
}

const NeuralNetwork3D: React.FC<NeuralNetwork3DProps> = ({ className = "" }) => {
  const mousePosition = useRef<MousePosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position from -1 to 1
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <NeuralNetworkScene mousePosition={mousePosition} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default NeuralNetwork3D;
