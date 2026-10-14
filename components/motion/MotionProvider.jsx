"use client";

import { MotionConfig } from "framer-motion";

// Respeita a preferência "reduzir movimento" do sistema em todas as
// animações do site (some o deslocamento, mantém só o fade).
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
