import * as React from "react";
import { cn } from "../../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("px-10 md:px-32", className)}>{children}</div>;
}
