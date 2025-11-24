import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Calculator, MapPin, CheckCircle, Clock, UserCog, Phone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Package,
      title: "Bulk Supply",
      description: "We specialize in large-volume supply for construction projects of all sizes. Benefit from competitive volume discounts, flexible payment terms tailored to your business needs, and custom packaging options. Our supply contract programs ensure consistent availability and pricing stability for your ongoing projects."
    },
    {
      icon: CheckCircle,
      title: "Technical Support",
      description: "Our experienced technical team provides comprehensive product guidance to help you select the right materials for your specific applications. We offer detailed application methods, troubleshooting assistance, and on-site training sessions to ensure your team achieves optimal results with our products."
    },
    {
      icon: Calculator,
      title: "Contractor Discounts",
      description: "Licensed contractors and construction companies enjoy exclusive pricing rates that improve your project margins. Take advantage of priority order processing, flexible credit account options, and detailed project quotations with itemized breakdowns to support your bidding and budgeting processes."
    },
    {
      icon: Truck,
      title: "Site Delivery",
      description: "We deliver directly to your construction site across the UAE with same-day delivery available in Sharjah for urgent requirements. Our scheduled delivery service ensures materials arrive exactly when you need them, and our real-time tracking system keeps you informed every step of the way."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Request Quote",
      description: "Share your requirements with us via phone, WhatsApp, email, or our online quote form. Simply provide the product details, quantities needed, and your delivery location."
    },
    {
      step: "02",
      title: "We Confirm",
      description: "Our team processes your request promptly, verifies product availability, and provides competitive pricing with clear delivery timeframes—typically within 24 hours."
    },
    {
      step: "03",
      title: "Fast Delivery",
      description: "Once you approve the quote, we prepare your order and arrange efficient delivery to your specified location with complete documentation and quality assurance."
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open from 7:00 AM to 8:00 PM, six days a week to accommodate your schedule"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategically located in Al Sajaa, Sharjah with easy access to major highways"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Large stock availability ensures we can fulfill orders quickly and reliably"
    },
    {
      icon: UserCog,
      title: "Account Management",
      description: "Dedicated account managers for corporate clients and regular contractors"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-28 bg-[#0b0b0b] overflow-hidden">
        {/* Yellow glow behind content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f5c51822,transparent_70%)]" />

        {/* Subtle top yellow edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5C518]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F5C518]" />

        <div className="container relative mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_20px_rgba(245,197,24,0.45)]">
            Our Services
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive support services designed for construction professionals across the UAE
          </p>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="services-list-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="services-list-title">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services that support your projects from planning to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="bg-card card-hover" data-testid={`service-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent text-accent-foreground w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-accent" data-testid={`service-title-${index}`}>
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary" data-testid="process-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="process-title">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, efficient process to get you the materials you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative" data-testid={`process-step-${index}`}>
                <div className="text-center">
                  <div className="bg-accent text-accent-foreground w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-accent" data-testid={`process-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`process-description-${index}`}>
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-accent/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="additional-services-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="additional-services-title">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extra benefits that make working with SMT even better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="bg-card card-hover" data-testid={`additional-service-card-${index}`}>
                  <CardContent className="p-6 text-center">
                    <div className="bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-accent" data-testid={`additional-service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`additional-service-description-${index}`}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#121212]" data-testid="services-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-[#1c1c1c] rounded-xl border border-[#2a2a2a] shadow-xl">
              <CardContent className="p-10 text-center">
                <h2 className="text-white font-semibold text-3xl mb-6">
                  Need Bulk Pricing?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Contact us today for competitive quotes on large orders with fast delivery across the UAE
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-[#F5C518] text-black font-semibold h-10 px-6 rounded-lg shadow-sm transition-all hover:bg-[#d9ad15]"
                  >
                    <a 
                      href="https://wa.me/971503821352?text=Hello,%20I%20need%20bulk%20pricing"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="button-get-bulk-quote"
                    >
                      Get Bulk Quote
                    </a>
                  </Button>
                  <Button 
                    asChild
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold h-10 px-6 rounded-lg border border-[#F5C518] text-[#F5C518] bg-transparent shadow-sm transition-all hover:bg-[#F5C518] hover:text-black hover:shadow-md"
                  >
                    <a 
                      href="tel:+971503821352" 
                      className="inline-flex items-center justify-center"
                      data-testid="button-call-now"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
