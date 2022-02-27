import React from "react";
import { Layout } from "antd";

interface LayoutProps {
  children?: any;
  background?: string;
  className?: string;
}

const AppLayout: React.FC<LayoutProps> = ({
  children,
  background,
  className,
}) => {
  return (
    <Layout
      style={{ backgroundImage: `url(${background})` }}
      className={`page ${className}`}
    >
      {children}
    </Layout>
  );
};

export default AppLayout;
