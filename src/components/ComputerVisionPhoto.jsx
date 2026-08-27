import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scan, Eye, Cpu, CheckCircle2 } from 'lucide-react';

export const ComputerVisionPhoto = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 20, y: y * -20 });
  };

  return (
    <div
      className="relative group perspective-1000 w-full max-w-[340px] sm:max-w-[380px] mx-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden glass-card p-3 shadow-3d-card border border-paper-300 dark:border-paper-700 transition-all duration-300 transform-gpu"
        animate={{
          rotateY: mousePos.x,
          rotateX: mousePos.y,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Loading Spinner */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-paper-100 dark:bg-paper-900 rounded-xl">
            <div className="w-8 h-8 border-2 border-tealAccent-600 border-t-transparent rounded-full animate-spin mb-2" />
            <span className="font-mono text-xs text-paper-500">Initializing CV Model...</span>
          </div>
        )}

        {/* Outer Frame with Bounding Box Telemetry */}
        <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-paper-200 dark:bg-paper-800">
          <img
            src="/kalyani_prof_image.jpeg"
            alt="Kalyani Agarwal"
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-105 filter brightness-105 contrast-110' : 'scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = "/yourphoto.jpg";
            }}
          />

          {/* Futuristic Computer Vision HUD Mesh Overlay on Hover */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-4 bg-tealAccent-900/20 backdrop-brightness-110"
            >
              {/* Scanning Lines Sweeping Down */}
              <div className="cv-hud-line top-0 left-0" />

              {/* Target Corner Reticles */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-tealAccent-500" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-tealAccent-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-tealAccent-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-tealAccent-500" />

              {/* Wireframe Grid Overlay */}
              <div className="absolute inset-0 cv-grid-overlay opacity-40" />

              {/* Facial Landmark Keypoints Simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-48 border border-tealAccent-500/50 rounded-full flex items-center justify-center animate-pulse-subtle">
                  <div className="w-2 h-2 rounded-full bg-tealAccent-500 absolute top-10 left-12" />
                  <div className="w-2 h-2 rounded-full bg-tealAccent-500 absolute top-10 right-12" />
                  <div className="w-2 h-2 rounded-full bg-terracotta-500 absolute top-24" />
                  <div className="w-8 h-1 border-b border-tealAccent-500 absolute bottom-12" />

                  {/* Wireframe Connecting Nodes */}
                  <svg className="absolute inset-0 w-full h-full stroke-tealAccent-500/40 fill-none stroke-1">
                    <line x1="48" y1="40" x2="80" y2="96" />
                    <line x1="112" y1="40" x2="80" y2="96" />
                    <line x1="80" y1="96" x2="80" y2="144" />
                  </svg>
                </div>
              </div>

              {/* Telemetry Header */}
              <div className="flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5 bg-paper-900/85 text-tealAccent-400 text-[10px] font-mono px-2.5 py-1 rounded-md border border-tealAccent-500/40 shadow-sm">
                  <Cpu className="w-3 h-3 animate-spin" />
                  <span>CV MESH: ACTIVE</span>
                </div>
                <div className="flex items-center gap-1 bg-terracotta-600/90 text-white text-[10px] font-mono px-2 py-1 rounded-md shadow-sm">
                  <Eye className="w-3 h-3" />
                  <span>99.4% CONF</span>
                </div>
              </div>

              {/* Real-Time Matrix Coordinates Telemetry */}
              <div className="flex items-end justify-between z-20">
                <div className="bg-paper-900/85 text-paper-200 text-[10px] font-mono p-2 rounded-md border border-paper-700 space-y-0.5">
                  <div>FPS: 60.0</div>
                  <div>XYZ: [104.2, 88.5, 12.1]</div>
                  <div>MODEL: RESNET-50+XAI</div>
                </div>
                <div className="bg-tealAccent-600 text-white text-[10px] font-mono px-2 py-1 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Card Footer Tag */}
        <div className="mt-3 px-1 flex items-center justify-between text-xs font-mono">
          <span className="text-paper-600 dark:text-paper-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-tealAccent-600 animate-pulse" />
            Kalyani Agarwal
          </span>
          <span className="text-tealAccent-700 dark:text-tealAccent-500 font-medium">
            AI & DS · Amrita
          </span>
        </div>
      </motion.div>
    </div>
  );
};
