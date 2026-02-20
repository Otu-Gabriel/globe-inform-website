'use client';

import { useEffect, useState } from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  delay?: number;
}

export default function ProgressBar({ 
  label, 
  percentage, 
  color = '#1E4DB7',
  delay = 0 
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`progress-${label.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [label, percentage, delay]);

  return (
    <div id={`progress-${label.replace(/\s+/g, '-')}`} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-600 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${isVisible ? width : 0}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
