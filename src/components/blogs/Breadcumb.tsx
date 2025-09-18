import { useEffect, useRef } from "react";
import { jarallax } from "jarallax";

export default function Breadcumb() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && parallaxRef.current) {
      jarallax(parallaxRef.current, {
        speed: 0.8,
        imgSize: "cover",
        imgPosition: "50% 50%",
        imgRepeat: "no-repeat",
      });
    }
  }, []);

  return (
    <div className="page-title relative style-2">
      <div
        ref={parallaxRef}
        className="paralaximg"
        data-parallax="scroll"
        style={{ backgroundImage: "url(/images/page-title/page-title-2.jpg)" }}
      />
    </div>
  );
}
