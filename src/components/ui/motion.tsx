
import React, { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation: 
    | "fade-in" 
    | "fade-up" 
    | "subtle-pulse" 
    | "none";
  threshold?: number;
  once?: boolean;
}

export const Animate: React.FC<AnimateProps> = ({
  children,
  className,
  delay = 0,
  duration = 700,
  animation = "fade-up",
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!entry.isIntersecting && !once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = document.getElementById(`animate-${Math.random()}`);
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "fade-up":
        return "animate-fade-up";
      case "subtle-pulse":
        return "animate-subtle-pulse";
      case "none":
        return "opacity-100";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      id={`animate-${Math.random()}`}
      className={cn(
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationDuration: `${duration}ms`,
        animationFillMode: "both" 
      }}
    >
      {children}
    </div>
  );
};

export const GlassCard: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      {children}
    </div>
  );
};

export const NeomorphicCard: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("neo-card", className)}>
      {children}
    </div>
  );
};
