"use client";

import { useEffect, useState } from "react";
import { PageLoading } from "@/components/page-loading";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="h-full">
      <div className="hidden md:flex w-[200px] flex-col fixed inset-y-0">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[200px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
