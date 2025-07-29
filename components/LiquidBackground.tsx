"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere } from "@react-three/drei"
import * as THREE from "three"

function LiquidSphere({
  position,
  scale,
  speed,
  distort,
}: { position: [number, number, number]; scale: number; speed: number; distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <Sphere ref={meshRef} position={position} scale={scale} args={[1, 64, 64]}>
      <MeshDistortMaterial
        color="#1E3A8A"
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </Sphere>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#2563EB" size={0.05} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function LiquidWave() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 2
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -2, -5]} rotation={[0, 0, 0]}>
      <torusGeometry args={[3, 0.5, 16, 100]} />
      <MeshDistortMaterial
        color="#1E40AF"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.9}
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />

      {/* Directional light */}
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />

      {/* Point lights for dramatic effect */}
      <pointLight position={[-10, -10, -10]} color="#1E3A8A" intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#2563EB" intensity={0.3} />

      {/* Main liquid spheres */}
      <LiquidSphere position={[-4, 2, -3]} scale={1.5} speed={0.5} distort={0.6} />
      <LiquidSphere position={[4, -1, -4]} scale={1.2} speed={0.3} distort={0.4} />
      <LiquidSphere position={[0, 3, -6]} scale={2} speed={0.2} distort={0.8} />
      <LiquidSphere position={[-2, -3, -2]} scale={0.8} speed={0.7} distort={0.3} />
      <LiquidSphere position={[3, 1, -5]} scale={1} speed={0.4} distort={0.5} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Liquid wave */}
      <LiquidWave />

      {/* Background gradient sphere */}
      <Sphere position={[0, 0, -10]} scale={15}>
        <meshBasicMaterial color="#000000" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>
    </>
  )
}

export default function LiquidBackground() {
  return (
    <div className="w-full h-full relative">
      {/* CSS-based liquid background as base layer */}
      <div className="liquid-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Three.js enhanced liquid effects */}
      <div className="absolute inset-0 opacity-80">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  )
}
