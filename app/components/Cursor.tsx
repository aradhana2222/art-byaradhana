"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cursor = document.getElementById("cursor");
      if (!cursor) return;

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = e.clientX + "px";
      sparkle.style.top = e.clientY + "px";

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div id="cursor"></div>;
}