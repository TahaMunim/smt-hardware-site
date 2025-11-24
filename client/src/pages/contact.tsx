import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const message = `Name: ${data.name}%0AMail: ${data.email}%0APhone: ${data.phone || 'Not provided'}%0ASubject: ${data.subject || 'General Inquiry'}%0AMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/971503821352?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+971 50 382 1352",
      link: "tel:+971503821352"
    },
    {
      icon: Mail,
      title: "Email",
      content: "sales@salehmohsin.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sales@salehmohsin.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Old Tasheel Street, Al Sajaa, Sharjah, UAE",
      link: "https://maps.app.goo.gl/whXUNJi3RMFV9zjq6"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Sat-Fri: 7:00 AM - 8:00 PM",
      link: null
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
            Contact Us
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with our team for quotes, product information, or any questions about our services
          </p>
        </div>
      </section>


      <section className="py-20 bg-background" data-testid="contact-info-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
            {/* Left Column: Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card
                    className="rounded-xl bg-[#0d1117] border border-[#1f2937] shadow-lg hover:shadow-xl transition-shadow"
                    data-testid={`contact-info-card-${index}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="bg-accent text-accent-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3
                        className="font-semibold text-lg mb-2 text-accent"
                        data-testid={`contact-info-title-${index}`}
                      >
                        {info.title}
                      </h3>
                      <p
                        className="text-muted-foreground whitespace-pre-line"
                        data-testid={`contact-info-content-${index}`}
                      >
                        {info.content}
                      </p>
                    </CardContent>
                  </Card>
                );

                return info.link ? (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                    data-testid={`link-contact-${info.title.toLowerCase()}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.title}>{content}</div>
                );
              })}
            </div>

            {/* Right Column: Form and WhatsApp Card */}
            <div className="space-y-6 flex flex-col">
            {/* Send Us a Message Form */}
            <Card className="rounded-xl bg-[#0d1117] border border-[#1f2937] shadow-lg" >
              <CardContent className="p-10">
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-accent"
                  data-testid="contact-form-title"
                >
                  Send Us a Message
                </h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-testid="contact-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="bg-input border-border text-white h-12"
                                data-testid="input-contact-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-input border-border text-white h-12"
                                data-testid="input-contact-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+971 50 123 4567"
                                className="bg-input border-border text-white h-12"
                                data-testid="input-contact-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="How can we help?"
                                className="bg-input border-border text-white h-12"
                                data-testid="input-contact-subject"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your requirements..."
                              className="bg-input border-border text-white resize-none"
                              rows={5}
                              data-testid="textarea-contact-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-[#F5C518] text-black font-semibold h-12 px-6 rounded-lg shadow-sm transition-all hover:bg-[#d9ad15]"
                      data-testid="button-send-message"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Bottom Right: WhatsApp Quick Order */}
            <Card className="rounded-xl bg-[#16a34a] border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                  <FaWhatsapp className="w-6 h-6 text-[#16a34a]" />
                </div>

                <h3
                  className="text-xl font-bold mb-2 text-white"
                  data-testid="whatsapp-quick-order-title"
                >
                  WhatsApp Quick Order
                </h3>

                <p className="text-white/90 text-sm mb-4">
                  Need a quick quote? Chat with us directly on WhatsApp.
                </p>

                <Button
                  asChild
                  className="w-full bg-white text-[#16a34a] font-semibold h-10 px-4 rounded-lg shadow-sm transition-all hover:bg-gray-100 text-sm"
                >
                  <a
                    href="https://wa.me/971503821352?text=I%20need%20a%20quick%20order%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                    data-testid="button-whatsapp-quick-order"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary" data-testid="maps-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="maps-title">
              Find Us on the Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our showroom and warehouse in Al Sajaa, Sharjah
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-card overflow-hidden">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.1992443301974!2d55.626973576211384!3d25.331094326262775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59553b5c87a9%3A0xbd9b77d912131ab7!2sSaleh%20Mohsin%20Trdg%20LLC!5e0!3m2!1sen!2sae!4v1763149764499!5m2!1sen!2sae" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saleh Mohsin Trading Location"
                >
                </iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
