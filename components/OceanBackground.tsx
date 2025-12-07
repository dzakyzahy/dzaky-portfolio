"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 2000 }) {
    const mesh = useRef<THREE.Points>(null!);
    const lightMesh = useRef<THREE.Points>(null!);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    // Blue particles (The Abyss/Foam)
    const bluePositions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    // Gold particles (The Treasure)
    const goldPositions = useMemo(() => {
        const positions = new Float32Array(count / 5 * 3); // Fewer gold particles
        for (let i = 0; i < count / 5; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);


    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Animate Blue Particles
        if (mesh.current) {
            const positions = mesh.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count; i++) {
                const { speed, xFactor, yFactor, zFactor } = particles[i];

                // Wave motion
                const x = Math.sin(t * speed + xFactor) * 5 + (Math.cos(t * 0.3) * 2);
                const y = Math.cos(t * speed + yFactor) * 2 + (Math.sin(t * 0.5) * 1);
                const z = Math.sin(t * speed + zFactor) * 5 + (Math.cos(t * 0.2) * 2);

                // Update position
                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;
            }
            mesh.current.geometry.attributes.position.needsUpdate = true;
            mesh.current.rotation.y = t * 0.05;
        }

        // Animate Gold Particles (Slower, deeper)
        if (lightMesh.current) {
            const positions = lightMesh.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count / 5; i++) {
                const { speed, xFactor, yFactor, zFactor } = particles[i]; // Reuse some randomness

                const x = Math.cos(t * speed * 0.8 + xFactor) * 6;
                const y = Math.sin(t * speed * 0.8 + yFactor) * 3;
                const z = Math.cos(t * speed * 0.8 + zFactor) * 6;

                positions[i * 3] = x;
                positions[i * 3 + 1] = y;
                positions[i * 3 + 2] = z;
            }
            lightMesh.current.geometry.attributes.position.needsUpdate = true;
            lightMesh.current.rotation.y = t * 0.02;
        }
    });

    return (
        <>
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        args={[bluePositions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.03}
                    color="#4A90E2" // Lighter blue for visibility against dark bg
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>
            <points ref={lightMesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count / 5}
                        args={[goldPositions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05}
                    color="#D4AF37" // Gold
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </>
    );
}

export default function OceanBackground() {
    return (
        <div className="absolute inset-0 -z-10 bg-primary">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <fog attach="fog" args={["#001A33", 5, 20]} />
                <Particles />
            </Canvas>
        </div>
    );
}
