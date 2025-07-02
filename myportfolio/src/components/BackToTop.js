"use client";

import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
      >
        ↑
      </button>
    )
  );
}

export default BackToTop;
