import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import BrandCarousel from "@/components/BrandCarousel";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  // Slideshow effect
  useEffect(() => {
    let index = 0;
    const total = 6; // number of images

    const interval = setInterval(() => {
      const root = document.documentElement;

      for (let i = 0; i < total; i++) {
        root.style.setProperty(`--slide-${i}`, i === index ? "1" : "0");
      }

      index = (index + 1) % total;
    }, 4000); // Slide speed (ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION WITH SLIDESHOW */}
      <section 
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden"
        data-testid="hero-section"
      >
        {/* Background slideshow images */}
        <div className="absolute inset-0">
          {[
            "/SMTCarousel/1.png",
            "/SMTCarousel/2.png",
            "/SMTCarousel/3.png",
            "/SMTCarousel/4.png",
            "/SMTCarousel/5.png",
            "/SMTCarousel/6.png"
          ].map((src, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity"
              style={{
                backgroundImage: `url(${src})`,
                opacity: `var(--slide-${index})`,
                transitionDuration: '1500ms'
              }}
            />
          ))}
        </div>

        {/* Strong adaptive overlay for readability */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.65),rgba(0,0,0,0.85))]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white" data-testid="hero-title">
            Your Trusted Partner in <span className="text-yellow-500">Hardware</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="hero-subtitle">
            Construction Materials & Professional Tools since 2012
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Browse Products */}
            <Link href="/products" className="w-full sm:w-auto">
              <Button 
                className="
                  w-full 
                  sm:w-56
                  h-14
                  bg-yellow-500 
                  text-black 
                  hover:bg-yellow-400
                  text-lg 
                  rounded-md 
                  font-semibold
                "
                data-testid="button-browse-products"
              >
                Browse Products
              </Button>
            </Link>

            {/* Contact Sales */}
            <Button 
              variant="outline"
              className="
                w-full 
                sm:w-56
                h-14
                border-2 
                border-white 
                text-white 
                hover:bg-white 
                hover:text-black 
                text-lg 
                rounded-md 
                font-semibold
              "
              asChild
            >
              <a href="tel:+971503821352" data-testid="button-contact-sales">
                Contact Sales
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* BRANDS CAROUSEL */}
      <BrandCarousel />

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-black" data-testid="about-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="about-title">
              About SMT Hardware
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Saleh Mohsin Trading LLC has been serving the UAE construction industry since 2012. We provide a comprehensive range of hardware, construction materials, and professional tools to both B2B and retail customers across Sharjah and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center" data-testid="stat-experience">
              <div className="text-5xl font-bold text-yellow-500 mb-2">12+</div>
              <div className="text-lg text-neutral-400">Years Experience</div>
            </div>
            <div className="text-center" data-testid="stat-products">
              <div className="text-5xl font-bold text-yellow-500 mb-2">1000+</div>
              <div className="text-lg text-neutral-400">Products Available</div>
            </div>
            <div className="text-center" data-testid="stat-customers">
              <div className="text-5xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-lg text-neutral-400">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 md:py-24 bg-neutral-900" data-testid="products-preview-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="products-preview-title">
              Our Top Sellers
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              Explore our selection of quality construction materials and professional tools
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button 
                className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 py-6 rounded-md font-semibold"
                data-testid="button-view-all-products"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
