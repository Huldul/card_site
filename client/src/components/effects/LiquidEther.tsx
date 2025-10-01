import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './LiquidEther.css';

interface LiquidEtherProps {
  mouseForce?: number;
  cursorSize?: number;
  colors?: string[];
  className?: string;
  style?: React.CSSProperties;
}

export default function LiquidEther({
  mouseForce = 15,
  cursorSize = 80,
  colors = ['#6c5ce7', '#a29bfe', '#5227FF'],
  className = '',
  style = {}
}: LiquidEtherProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    container.appendChild(renderer.domElement);

    // Create simple fluid simulation using shaders
    const geometry = new THREE.PlaneGeometry(2, 2);
    
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        mouse: { value: new THREE.Vector2(0.5, 0.5) },
        mouseVel: { value: new THREE.Vector2(0, 0) },
        color1: { value: new THREE.Color(colors[0]) },
        color2: { value: new THREE.Color(colors[1]) },
        color3: { value: new THREE.Color(colors[2]) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        uniform vec2 mouse;
        uniform vec2 mouseVel;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        varying vec2 vUv;

        float noise(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }

        void main() {
          vec2 uv = vUv;
          vec2 center = mouse;
          
          float dist = distance(uv, center);
          float vel = length(mouseVel);
          
          // Create fluid-like distortion
          vec2 offset = vec2(
            sin(uv.y * 10.0 + time * 2.0 + mouseVel.x * 10.0) * 0.02,
            cos(uv.x * 10.0 + time * 2.0 + mouseVel.y * 10.0) * 0.02
          );
          
          vec2 distorted = uv + offset;
          float wave = sin(dist * 20.0 - time * 3.0 + vel * 5.0) * 0.5 + 0.5;
          
          // Mix colors based on position and velocity
          vec3 color = mix(color1, color2, wave);
          color = mix(color, color3, smoothstep(0.3, 0.7, dist));
          
          // Add glow around mouse
          float glow = exp(-dist * 8.0) * vel * 2.0;
          color += color2 * glow;
          
          // Fade based on velocity
          float alpha = smoothstep(0.6, 0.0, dist) * (vel * 0.5 + 0.1);
          
          gl_FragColor = vec4(color, alpha * 0.4);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let mouseX = 0.5;
    let mouseY = 0.5;
    let oldMouseX = 0.5;
    let oldMouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      oldMouseX = mouseX;
      oldMouseY = mouseY;
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    container.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const velX = (mouseX - oldMouseX) * mouseForce;
      const velY = (mouseY - oldMouseY) * mouseForce;
      
      material.uniforms.time.value += 0.016;
      material.uniforms.mouse.value.set(mouseX, mouseY);
      material.uniforms.mouseVel.value.set(velX, velY);
      
      oldMouseX = mouseX;
      oldMouseY = mouseY;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      material.uniforms.resolution.value.set(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mouseForce, cursorSize, colors]);

  return (
    <div 
      ref={mountRef} 
      className={`liquid-ether-container ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        ...style
      }}
    />
  );
}
