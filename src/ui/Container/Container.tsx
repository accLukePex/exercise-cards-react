import React, { ReactNode } from "react";
import "./Container.css";

interface ContainerProps {
  children: ReactNode;
  classname?: string;
}

const Container: React.FC<ContainerProps> = ({ children, classname }) => {
  return <div className={`container ${classname}`}>{children}</div>;
};

export default Container;
