import type { ReactNode } from "react";

import { cn } from "cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-4 md:px-0", className)}
    >
      {children}
    </div>
  );
}
