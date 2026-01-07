import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface About3DCardProps {
  children: React.ReactNode;
  className?: string;
}

export function About3DCard({ children, className = "" }: About3DCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position normalized (-0.5..0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smooth springs
  const sx = useSpring(mx, { stiffness: 180, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 180, damping: 20, mass: 0.6 });

  // Tilt ranges
  const rotateY = useTransform(sx, [-0.5, 0.5], reduce ? [0, 0] : [-6, 6]);
  const rotateX = useTransform(sy, [-0.5, 0.5], reduce ? [0, 0] : [6, -6]);

  function onMove(e: React.MouseEvent) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;  // 0..1
    const py = (e.clientY - r.top) / r.height;  // 0..1
    mx.set(px - 0.5);
    my.set(py - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* Subtle lighting overlay */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-primary/5 via-transparent to-transparent"
        style={{
          opacity: reduce ? 0 : 0.5,
        }}
      />
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
    </motion.div>
  );
}

export default About3DCard;
