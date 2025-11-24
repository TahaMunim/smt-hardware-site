import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Clock, MapPin, TrendingUp, Award, Users, Package, Shield, Target, Heart, Headphones } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const stats = [
    {
      icon: Building2,
      label: "SMT Warehouse",
      value: "Since 2012"
    },
    {
      icon: MapPin,
      label: "Serving UAE",
      value: "12+ Years"
    },
    {
      icon: Users,
      label: "Satisfied Clients",
      value: "2000+"
    },
    {
      icon: Package,
      label: "Products Range",
      value: "5000+"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We partner exclusively with trusted global brands like Sika, Tuffix, Stanley, and DeWalt to ensure every product meets the highest industry standards. Our rigorous quality control process guarantees that you receive authentic, certified materials for your projects."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Since 2012, we've built our reputation on consistent delivery, transparent pricing, and honest business practices. Our clients know they can count on us for accurate product information, realistic timelines, and dependable supply chains."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your success is our priority. We invest time to understand your specific project requirements and provide tailored solutions, expert recommendations, and responsive support. From initial consultation to after-sales service, we're here for you."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We continuously expand our product range, upgrade our facilities, and enhance our services to meet evolving market demands. By staying current with industry trends and technological advancements, we ensure our clients have access to the latest construction solutions."
    }
  ];

  const teams = [
    {
      icon: Headphones,
      title: "Sales Team",
      description: "Our knowledgeable sales professionals provide expert product advice, pricing guidance, and personalized customer relations. They work closely with contractors and businesses to understand requirements and recommend the most cost-effective solutions for each project."
    },
    {
      icon: Target,
      title: "Technical Team",
      description: "Our technical specialists bring deep product knowledge and practical application expertise. They assist with product selection, provide detailed specifications, offer troubleshooting support, and conduct training sessions to ensure proper product usage and optimal results."
    },
    {
      icon: Package,
      title: "Logistics Team",
      description: "Our dedicated logistics professionals manage inventory, coordinate deliveries, and ensure timely distribution across the UAE. They handle order processing, site coordination, and track shipments to guarantee your materials arrive when and where you need them."
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
            About Saleh Mohsin Trading
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Your trusted partner in construction supplies, serving professionals across the UAE since 2012
          </p>
        </div>
      </section>


      <section className="py-20 bg-background" data-testid="company-story-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" data-testid="company-story-title">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in 2012, Saleh Mohsin Trading LLC began with a clear mission: to provide contractors and construction professionals with reliable access to high-quality tools, sealants, and adhesives. What started as a focused endeavor in Sharjah has evolved into one of the UAE's most trusted suppliers of comprehensive construction materials.
              </p>
              <p>
                Over the past twelve years, we've established ourselves as specialists in construction chemicals, particularly sealants and adhesives from industry leaders such as Sika and Tuffix. Our product range has expanded to include premium power tools and hand tools from Stanley, DeWalt, and other renowned manufacturers, ensuring our clients have access to everything they need under one roof.
              </p>
              <p>
                Our growth has been driven by an unwavering commitment to three core principles: uncompromising quality, steadfast reliability, and exceptional customer service. We don't just supply products—we build lasting partnerships with our clients by understanding their unique needs and delivering solutions that help them succeed.
              </p>
              <p>
                Today, SMT serves a diverse clientele including contractors, construction companies, maintenance professionals, and individual builders across the UAE. Our strategic location in Sharjah, combined with our efficient distribution network, enables us to provide prompt delivery and responsive service throughout the Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary" data-testid="stats-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="stats-title">
              SMT at a Glance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven track record of excellence in the UAE construction supply industry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="bg-card text-center card-hover" data-testid={`stat-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl font-bold text-accent mb-2" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-white" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="values-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="values-title">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at SMT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="bg-card card-hover" data-testid={`value-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent text-accent-foreground w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-accent" data-testid={`value-title-${index}`}>
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`value-description-${index}`}>
                          {value.description}
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

      <section className="py-20 bg-secondary" data-testid="team-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="team-title">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map((team, index) => {
              const Icon = team.icon;
              return (
                <Card key={team.title} className="bg-card card-hover" data-testid={`team-card-${index}`}>
                  <CardContent className="p-8">
                    <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-accent text-center" data-testid={`team-title-${index}`}>
                      {team.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-center" data-testid={`team-description-${index}`}>
                      {team.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="facilities-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="facilities-title">
              Our Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern infrastructure to serve your construction supply needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-card card-hover" data-testid="facility-warehouse">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-accent text-accent-foreground w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-accent">SMT Warehouse</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our strategically located warehouse in Al Sajaa, Sharjah serves as the heart of our operations. This expansive facility houses our comprehensive inventory of construction materials, tools, and equipment, ensuring we can meet the diverse needs of our clients.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The warehouse features organized storage systems, climate-controlled zones for sensitive materials, and efficient loading docks for quick order fulfillment. Our location provides easy access to major highways, enabling swift distribution across the UAE.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card card-hover" data-testid="facility-showroom">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-accent text-accent-foreground w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Package className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-accent">SMT Showroom</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Visit our showroom and office to experience our products firsthand and consult with our knowledgeable team. We've designed this space to showcase our extensive product range, allowing you to see, touch, and evaluate materials before making purchasing decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our sales and technical teams are on-site to provide expert guidance, answer questions, and help you select the right products for your specific applications. Whether you need sealants, adhesives, power tools, or construction supplies, our showroom offers a comprehensive shopping experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary" data-testid="visit-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="visit-title">
              Visit Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Come see us at our Sharjah location
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="bg-card mb-8" data-testid="address-card">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-accent">Our Address</h3>
                      <p className="text-muted-foreground text-lg">
                        Old Tasheel Street, Al Sajaa<br />
                        Sharjah, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card" data-testid="hours-card">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <Clock className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <div className="w-full">
                      <h3 className="text-xl font-semibold mb-4 text-accent">Business Hours</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-border pb-2">
                          <span className="text-muted-foreground">Saturday - Thursday</span>
                          <span className="text-white font-medium">7:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-2">
                          <span className="text-muted-foreground">Friday</span>
                          <span className="text-white font-medium">2:00 PM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Public Holidays</span>
                          <span className="text-white font-medium">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-card h-full" data-testid="map-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-accent">Location Map</h3>
                  <div className="w-full rounded-xl overflow-hidden border border-[#2a2a2a]">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.1992443301974!2d55.626973576211384!3d25.331094326262775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59553b5c87a9%3A0xbd9b77d912131ab7!2sSaleh%20Mohsin%20Trdg%20LLC!5e0!3m2!1sen!2sae!4v1763149764499!5m2!1sen!2sae" 
                      width="100%" 
                      height="420" 
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Saleh Mohsin Trading Location"
                    >
                    </iframe>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Interactive map showing our exact location in Al Sajaa, Sharjah
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]" data-testid="about-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-[#1c1c1c] rounded-xl border border-[#2a2a2a] shadow-xl">
              <CardContent className="p-10 text-center">
                <h2 className="text-white font-semibold text-3xl mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Experience the SMT difference—quality products, competitive pricing, and exceptional service
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    className="bg-[#F5C518] text-black font-semibold h-10 px-6 rounded-lg shadow-sm transition-all hover:bg-[#d9ad15]"
                  >
                    <Link href="/contact" data-testid="button-contact-us">
                      Contact Us Today
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold h-10 px-6 rounded-lg border border-[#F5C518] text-[#F5C518] bg-transparent shadow-sm transition-all hover:bg-[#F5C518] hover:text-black hover:shadow-md"
                  >
                    <Link href="/products" data-testid="button-view-products">
                      View Our Products
                    </Link>
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
