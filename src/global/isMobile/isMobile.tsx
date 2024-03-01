"use client";

export const isMobile = () => {
  if (typeof window !== "undefined") {
    return (
      window.innerWidth <= 768 &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }
  return false;
};
