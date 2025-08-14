import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
  avatar?: boolean;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  lines = 3, 
  avatar = false 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {avatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="skeleton rounded-full h-12 w-12"></div>
          <div className="space-y-2 flex-1">
            <div className="skeleton h-4 rounded w-3/4"></div>
            <div className="skeleton h-3 rounded w-1/2"></div>
          </div>
        </div>
      )}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`skeleton h-4 rounded ${
              index === lines - 1 ? 'w-2/3' : 'w-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;