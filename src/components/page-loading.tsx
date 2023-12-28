import { useEffect } from "react";
import loading from "@/assets/animation/loading.json";
import Lottie from "lottie-web";

export const PageLoading = () => {
  useEffect(() => {
    const container: any = document.querySelector("#loading_container");
    const anim = Lottie.loadAnimation({
      container: container,
      animationData: loading,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return <div className="h-full" id="loading_container" />;
};
