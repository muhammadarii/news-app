import React from "react";

type SkeletonLoadingProps = {
  className?: string;
};

export const SkeletonLoadingInput: React.FC<SkeletonLoadingProps> = ({
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className="animate-pulse w-[250px] lg:w-[500px] h-[40px] rounded-full bg-gray-300" />
    </div>
  );
};
