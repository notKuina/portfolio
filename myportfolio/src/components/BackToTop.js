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
        aria-label="Scroll to top"
        tabIndex={0}
        className="fixed bottom-4 right-4 w-10 h-10 p-3 rounded-full flex items-center justify-center bg-green-600 text-white shadow-lg hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        ↑
      </button>
    )
  );
}

export default BackToTop;
