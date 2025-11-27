import React from 'react';

interface SnowflakeProps {
  left: number;
  animationDelay: number;
  animationDuration: number;
  size: number;
  opacity: number;
}

const Snowflake: React.FC<SnowflakeProps> = ({
  left,
  animationDelay,
  animationDuration,
  size,
  opacity
}) => {
  return (
    <div
      className="snowflake absolute text-white pointer-events-none"
      style={{
        left: `${left}%`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${animationDuration}s`,
        fontSize: `${size}px`,
        opacity: opacity,
      }}
    >
      ❄
    </div>
  );
};

export default Snowflake;
