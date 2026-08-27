import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D = ({ isDark }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Color theme definition
    const primaryColor = isDark ? 0x14B8A6 : 0x0D9488;
    const accentColor = isDark ? 0x38BDF8 : 0x0284C7;
    const wireframeColor = isDark ? 0x334155 : 0xCBD5E1;

    // 1. Geodesic Core Wireframe Globe
    const globeGeometry = new THREE.IcosahedronGeometry(1.6, 2);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: wireframeColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.45
    });
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globeMesh);

    // 2. Inner Nodes (Particles at vertices)
    const vertices = [];
    const posAttribute = globeGeometry.attributes.position;
    for (let i = 0; i < posAttribute.count; i++) {
      vertices.push(
        posAttribute.getX(i),
        posAttribute.getY(i),
        posAttribute.getZ(i)
      );
    }
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const pointsMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.06,
      transparent: true,
      opacity: 0.9
    });
    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    globeMesh.add(pointsMesh);

    // 3. Satellite Orbital Rings
    const ringGroup = new THREE.Group();

    const ringGeometry = new THREE.RingGeometry(2.1, 2.12, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: accentColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    ringGroup.add(ring2);

    // Satellite point on ring
    const satGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const satMaterial = new THREE.MeshBasicMaterial({ color: primaryColor });
    const satMesh = new THREE.Mesh(satGeometry, satMaterial);
    satMesh.position.set(2.1, 0, 0);
    ring1.add(satMesh);

    scene.add(ringGroup);

    // Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / container.clientWidth - 0.5;
      const y = (e.clientY - rect.top) / container.clientHeight - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      globeMesh.rotation.y += 0.003;
      globeMesh.rotation.x += 0.001;

      ringGroup.rotation.y -= 0.004;
      ringGroup.rotation.z += 0.002;

      scene.rotation.y = targetX * 0.4;
      scene.rotation.x = -targetY * 0.4;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      globeGeometry.dispose();
      globeMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      satGeometry.dispose();
      satMaterial.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] sm:h-[400px] lg:h-[480px] relative flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
};
