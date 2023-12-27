"use client";

import { useEffect, useState } from "react";
import { PageLoading } from "@/components/page-loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <PageLoading />;
  }
  return <div>home</div>;
}
