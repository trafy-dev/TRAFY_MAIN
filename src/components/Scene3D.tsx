import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import type { Line2 } from "three/examples/jsm/lines/Line2.js";
import type { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

const RADIUS = 1.6;
const ACCENTS = ["#ff20f6", "#335aff", "#ffd628"];

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    points.push(
      new THREE.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r).multiplyScalar(radius),
    );
  }
  return points;
}

function arcPoints(a: THREE.Vector3, b: THREE.Vector3, lift = 0.4) {
  const mid = a.clone().add(b).multiplyScalar(0.5);
  mid.normalize().multiplyScalar(a.length() * (1 + lift));
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  return curve.getPoints(32);
}

function AnimatedArc({ points, color, speed }: { points: THREE.Vector3[]; color: string; speed: number }) {
  const ref = useRef<Line2>(null);

  useFrame((_, delta) => {
    const material = ref.current?.material as LineMaterial | undefined;
    if (material) material.dashOffset -= delta * speed;
  });

  return (
    <Line
      ref={ref}
      points={points}
      color={color}
      lineWidth={1.6}
      transparent
      opacity={0.85}
      dashed
      dashScale={6}
      dashSize={0.5}
      gapSize={0.9}
    />
  );
}

function GlobeGroup({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);

  const dust = useMemo(() => fibonacciSphere(150, RADIUS), []);
  const nodes = useMemo(() => {
    const idx = [6, 24, 43, 61, 82, 101, 121, 139];
    return idx.map((i) => dust[i]);
  }, [dust]);
  const nodeColors = useMemo(
    () => nodes.map((_, i) => (i % 3 === 0 ? color : ACCENTS[i % ACCENTS.length])),
    [nodes, color],
  );
  const arcs = useMemo(() => {
    const pairs: [number, number][] = [
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
      [5, 7],
      [0, 5],
      [1, 6],
    ];
    return pairs.map(([a, b], i) => ({
      points: arcPoints(nodes[a], nodes[b]),
      color: nodeColors[b] ?? color,
      speed: 0.5 + (i % 4) * 0.18,
    }));
  }, [nodes, nodeColors, color]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[RADIUS, 3]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.06} />
      </mesh>

      {dust.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.014, 6, 6]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
        </mesh>
      ))}

      {arcs.map((arc, i) => (
        <AnimatedArc key={i} points={arc.points} color={arc.color} speed={arc.speed} />
      ))}

      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color={nodeColors[i]}
            emissive={nodeColors[i]}
            emissiveIntensity={0.9}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

type Scene3DProps = {
  color?: string;
  className?: string;
};

export default function Scene3D({ color = "#c6ff33", className = "" }: Scene3DProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 5]} intensity={1} />
        <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#335aff" />
        <GlobeGroup color={color} />
      </Canvas>
    </div>
  );
}
