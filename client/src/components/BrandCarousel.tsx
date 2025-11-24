import { useEffect, useRef } from "react";

export default function BrandCarousel() {
  const brands = [
    { id: 1, name: "bosch", logo: "/brands/bosch-logo.png" },
    { id: 2, name: "dewalt", logo: "/brands/dewalt-logo.png" },
    { id: 3, name: "esab", logo: "/brands/esab-logo.png" },
    { id: 4, name: "kiswel", logo: "/brands/kiswel-logo.png" },
    { id: 5, name: "knipex", logo: "/brands/knipex-logo.png" },
    { id: 6, name: "makita", logo: "/brands/makita-logo.png" },
    { id: 7, name: "ridgid", logo: "/brands/ridgid-logo.png" },
    { id: 8, name: "rothenberger", logo: "/brands/rothenberger-logo.png" },
    { id: 9, name: "tuffix", logo: "/brands/tuffix-logo.png" },
    { id: 10, name: "spit", logo: "/brands/spit-logo.png" },
    { id: 11, name: "stanley", logo: "/brands/stanley-logo.png" },
    { id: 12, name: "sika", logo: "/brands/sika-logo.png" }
  ];

  const allBrands = [...brands, ...brands];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const fullWidth = track.scrollWidth / 2;
    track.style.setProperty("--scroll-distance", `-${fullWidth}px`);
    track.style.setProperty("--scroll-duration", `${fullWidth / 80}s`); // slow, premium speed
  }, []);

  return (
    <div className="bg-neutral-900 py-16 overflow-hidden">
      {/* Heading section */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white">Our Trusted Brands</h2>
        <p className="text-neutral-400 mt-2">We partner with industry-leading manufacturers</p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap min-w-max animate-scrollx"
        >
          {allBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 px-8 flex items-center justify-center"
              style={{ width: "250px" }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 object-contain opacity-70 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
