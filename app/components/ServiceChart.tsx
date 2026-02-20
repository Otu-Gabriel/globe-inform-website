'use client';

import { useEffect, useState } from 'react';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface ServiceChartProps {
  data: ChartData[];
}

export default function ServiceChart({ data }: ServiceChartProps) {
  const [animatedData, setAnimatedData] = useState<ChartData[]>(data.map(d => ({ ...d, value: 0 })));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('service-chart');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const stepValue = data.map(d => d.value / steps);
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setAnimatedData(prev => 
        prev.map((item, index) => ({
          ...item,
          value: Math.min(stepValue[index] * currentStep, data[index].value)
        }))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedData(data);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, data]);

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div id="service-chart" className="space-y-4">
      {animatedData.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-32 text-sm font-medium text-gray-700">{item.label}</div>
          <div className="flex-1 relative">
            <div className="w-full bg-gray-200 rounded-lg h-10 overflow-hidden">
              <div
                className="h-full rounded-lg transition-all duration-300 flex items-center justify-end pr-4"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                }}
              >
                <span className="text-white font-semibold text-sm">
                  {Math.round(item.value)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
