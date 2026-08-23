import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "971503821352";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hello SMT, I would like to make a product or quotation enquiry."
  );

const MAP_URL =
  "https://maps.app.goo.gl/whXUNJi3RMFV9zjq6";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(
      2,
      "Name must be at least 2 characters"
    ),

  email: z.union([
    z
      .string()
      .email(
        "Please enter a valid email address"
      ),
    z.literal("")
  ]),

  phone: z.string(),

  subject: z.string(),

  message: z
    .string()
    .min(
      10,
      "Please provide a little more detail"
    )
});

type ContactFormData = z.infer<
  typeof contactFormSchema
>;

const contactMethods = [
  {
    icon: Phone,
    label: "Call SMT",
    value: "+971 50 382 1352",
    description:
      "Speak directly with our team about product and supply enquiries.",
    href: "tel:+971503821352"
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@salehmohsin.com",
    description:
      "Send product lists, specifications and general business enquiries.",
    href: "mailto:sales@salehmohsin.com"
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value:
      "Old Tasheel Street, Al Sajaa, Sharjah, UAE",
    description:
      "Visit SMT in Al Sajaa for product and trade enquiries.",
    href: MAP_URL
  }
];

export default function Contact() {
  const form =
    useForm<ContactFormData>({
      resolver: zodResolver(
        contactFormSchema
      ),

      defaultValues: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      }
    });

  const onSubmit = (
    data: ContactFormData
  ) => {
    const message = [
      "Hello SMT, I would like to send an enquiry.",
      "",
      `Name: ${data.name}`,
      `Email: ${
        data.email ||
        "Not provided"
      }`,
      `Phone: ${
        data.phone ||
        "Not provided"
      }`,
      `Subject: ${
        data.subject ||
        "General enquiry"
      }`,
      "",
      "Requirement:",
      data.message
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-black">

      {/* =================================================
          HERO
      ================================================== */}
      <section
        className="
          relative
          overflow-hidden

          border-b
          border-neutral-800

          bg-neutral-950
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40

            h-[450px]
            w-[450px]

            rounded-full

            bg-yellow-500/10

            blur-[130px]
          "
        />

        <div
          className="
            relative

            mx-auto
            max-w-7xl

            px-4
            py-14

            sm:px-6
            sm:py-16

            lg:py-20
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              Contact SMT
            </p>

            <h1
              className="
                mt-3

                text-4xl
                font-black
                leading-tight
                tracking-tight
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Tell Us What
              <span className="text-yellow-500">
                {" "}
                You Need
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl

                text-base
                leading-7
                text-neutral-400

                sm:text-lg
              "
            >
              Contact Saleh Mohsin Trading LLC
              for product information, sourcing,
              quotation requests, BOQs and trade
              supply enquiries.
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  bg-yellow-500

                  px-6

                  text-sm
                  font-bold
                  text-black

                  transition-colors

                  hover:bg-yellow-400
                "
              >
                <FaWhatsapp className="h-5 w-5" />

                WhatsApp SMT
              </a>

              <a
                href="tel:+971503821352"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2

                  rounded-md

                  border
                  border-neutral-700

                  px-6

                  text-sm
                  font-semibold
                  text-white

                  transition-colors

                  hover:border-yellow-500
                  hover:text-yellow-500
                "
              >
                <Phone className="h-4 w-4" />

                +971 50 382 1352
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CONTACT METHODS
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black

          py-10
          md:py-12
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl

            gap-3

            px-4
            sm:px-6

            md:grid-cols-3
          "
        >
          {contactMethods.map(
            (method) => {
              const Icon =
                method.icon;

              const isExternal =
                method.href.startsWith(
                  "http"
                );

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={
                    isExternal
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    isExternal
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group

                    rounded-lg

                    border
                    border-neutral-800

                    bg-neutral-950

                    p-5

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:border-yellow-500/50
                    hover:bg-neutral-900
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        flex-shrink-0
                        items-center
                        justify-center

                        rounded-md

                        bg-yellow-500/10

                        text-yellow-500

                        transition-colors

                        group-hover:bg-yellow-500
                        group-hover:text-black
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowRight
                      className="
                        h-4
                        w-4

                        text-neutral-700

                        transition-all

                        group-hover:translate-x-1
                        group-hover:text-yellow-500
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-5

                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-neutral-500
                    "
                  >
                    {method.label}
                  </p>

                  <h2
                    className="
                      mt-2

                      text-base
                      font-semibold
                      text-white
                    "
                  >
                    {method.value}
                  </h2>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-6
                      text-neutral-500
                    "
                  >
                    {
                      method.description
                    }
                  </p>
                </a>
              );
            }
          )}
        </div>
      </section>

      {/* =================================================
          ENQUIRY FORM
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-neutral-950

          py-16
          md:py-20
        "
        data-testid="contact-info-section"
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl

            gap-10

            px-4
            sm:px-6

            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-14
          "
        >
          {/* Left copy */}
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-yellow-500
              "
            >
              Product Enquiry
            </p>

            <h2
              className="
                mt-3

                text-3xl
                font-bold
                tracking-tight
                text-white

                sm:text-4xl
              "
            >
              Send Your Requirement
            </h2>

            <p
              className="
                mt-4

                max-w-lg

                leading-7
                text-neutral-400
              "
            >
              Provide whatever details you
              have. Product names, model
              numbers, quantities, brands or
              specifications all help our team
              understand the requirement.
            </p>

            <div
              className="
                mt-8

                rounded-lg

                border
                border-neutral-800

                bg-black

                p-5
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <MessageSquareText
                  className="
                    mt-0.5
                    h-5
                    w-5
                    flex-shrink-0
                    text-yellow-500
                  "
                />

                <div>
                  <p
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    Have a BOQ or material list?
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      leading-6
                      text-neutral-500
                    "
                  >
                    You can open WhatsApp after
                    submitting this form and send
                    the document, photos or
                    additional references directly
                    in the chat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="
              rounded-xl

              border
              border-neutral-800

              bg-black

              p-5

              shadow-xl
              shadow-black/20

              sm:p-7
              lg:p-8
            "
          >
            <div className="mb-7">
              <h2
                className="
                  text-2xl
                  font-bold
                  text-white
                "
                data-testid="contact-form-title"
              >
                Enquiry Details
              </h2>

              <p
                className="
                  mt-2

                  text-sm
                  text-neutral-500
                "
              >
                The details below will be
                prepared as a WhatsApp message
                to SMT.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(
                  onSubmit
                )}
                className="space-y-5"
                data-testid="contact-form"
              >
                <div
                  className="
                    grid
                    gap-5

                    sm:grid-cols-2
                  "
                >
                  <FormField
                    control={
                      form.control
                    }
                    name="name"
                    render={({
                      field
                    }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">
                          Name *
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="
                              h-11

                              border-neutral-700

                              bg-neutral-950

                              text-white

                              placeholder:text-neutral-600

                              focus-visible:ring-yellow-500
                            "
                            data-testid="input-contact-name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={
                      form.control
                    }
                    name="phone"
                    render={({
                      field
                    }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">
                          Phone
                        </FormLabel>

                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+971 50 123 4567"
                            className="
                              h-11

                              border-neutral-700

                              bg-neutral-950

                              text-white

                              placeholder:text-neutral-600

                              focus-visible:ring-yellow-500
                            "
                            data-testid="input-contact-phone"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div
                  className="
                    grid
                    gap-5

                    sm:grid-cols-2
                  "
                >
                  <FormField
                    control={
                      form.control
                    }
                    name="email"
                    render={({
                      field
                    }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">
                          Email
                        </FormLabel>

                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="
                              h-11

                              border-neutral-700

                              bg-neutral-950

                              text-white

                              placeholder:text-neutral-600

                              focus-visible:ring-yellow-500
                            "
                            data-testid="input-contact-email"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={
                      form.control
                    }
                    name="subject"
                    render={({
                      field
                    }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-300">
                          Subject
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="e.g. Power tools quotation"
                            className="
                              h-11

                              border-neutral-700

                              bg-neutral-950

                              text-white

                              placeholder:text-neutral-600

                              focus-visible:ring-yellow-500
                            "
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
                  control={
                    form.control
                  }
                  name="message"
                  render={({
                    field
                  }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-300">
                        Requirement *
                      </FormLabel>

                      <FormControl>
                        <Textarea
                          placeholder="Tell us what you need — products, models, quantities, brands, specifications, etc."
                          rows={6}
                          className="
                            resize-none

                            border-neutral-700

                            bg-neutral-950

                            text-white

                            placeholder:text-neutral-600

                            focus-visible:ring-yellow-500
                          "
                          data-testid="textarea-contact-message"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-md

                    bg-yellow-500

                    px-6

                    text-sm
                    font-bold
                    text-black

                    transition-colors

                    hover:bg-yellow-400
                  "
                  data-testid="button-send-message"
                >
                  <FaWhatsapp className="h-5 w-5" />

                  Send via WhatsApp
                </button>

                <p
                  className="
                    text-center

                    text-xs
                    leading-5
                    text-neutral-600
                  "
                >
                  Submitting this form opens
                  WhatsApp with your enquiry
                  pre-filled. Nothing is sent
                  until you send the WhatsApp
                  message yourself.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* =================================================
          MAP
      ================================================== */}
      <section
        className="
          border-b
          border-neutral-800

          bg-black

          py-16
          md:py-20
        "
        data-testid="maps-section"
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
          "
        >
          <div
            className="
              mb-8

              flex
              flex-col
              gap-4

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-yellow-500
                "
              >
                SMT Location
              </p>

              <h2
                className="
                  mt-3

                  text-3xl
                  font-bold
                  tracking-tight
                  text-white

                  sm:text-4xl
                "
                data-testid="maps-title"
              >
                Visit Us in Al Sajaa
              </h2>

              <p
                className="
                  mt-3
                  text-neutral-400
                "
              >
                Old Tasheel Street, Al Sajaa,
                Sharjah, UAE
              </p>
            </div>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2

                text-sm
                font-semibold
                text-yellow-500

                transition-colors

                hover:text-yellow-400
              "
            >
              Open in Google Maps

              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div
            className="
              overflow-hidden

              rounded-xl

              border
              border-neutral-800

              bg-neutral-950

              shadow-xl
              shadow-black/20
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.1992443301974!2d55.626973576211384!3d25.331094326262775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59553b5c87a9%3A0xbd9b77d912131ab7!2sSaleh%20Mohsin%20Trdg%20LLC!5e0!3m2!1sen!2sae!4v1763149764499!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{
                border: 0
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saleh Mohsin Trading LLC location"
            />
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CONTACT CTA
      ================================================== */}
      <section
        className="
          relative
          overflow-hidden

          bg-yellow-500
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-28

            h-96
            w-96

            rounded-full

            border-[70px]
            border-black/5
          "
        />

        <div
          className="
            relative

            mx-auto
            flex
            max-w-7xl

            flex-col
            gap-7

            px-4
            py-12

            sm:px-6

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.18em]
                text-black/60
              "
            >
              Quick Enquiry
            </p>

            <h2
              className="
                mt-2

                text-3xl
                font-black
                tracking-tight
                text-black

                sm:text-4xl
              "
            >
              Need a Product or Quotation?
            </h2>

            <p
              className="
                mt-3

                leading-7
                text-black/70
              "
            >
              Send your requirement directly to
              SMT through WhatsApp or speak with
              our team by phone.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-md

                bg-black

                px-6

                text-sm
                font-bold
                text-white

                transition-colors

                hover:bg-neutral-800
              "
            >
              <FaWhatsapp className="h-5 w-5" />

              WhatsApp SMT
            </a>

            <a
              href="tel:+971503821352"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                gap-2

                rounded-md

                border
                border-black/30

                px-6

                text-sm
                font-bold
                text-black

                transition-colors

                hover:bg-black/10
              "
            >
              <Phone className="h-4 w-4" />

              Call SMT
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}