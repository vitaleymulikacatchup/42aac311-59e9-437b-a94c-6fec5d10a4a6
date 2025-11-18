"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroOverlay from "@/components/sections/hero/HeroOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardFour from "@/components/sections/feature/FeatureCardFour";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Award, Coffee, Flame, Handshake, Heart, Instagram, Facebook, Twitter, Leaf, Mail, Star, Truck } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Coffee", id: "feature" },
            { name: "Menu", id: "product" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BrewCraft Coffee"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Crafted Coffee, Perfected Daily"
          description="Experience the finest coffee beans sourced from sustainable farms and roasted to perfection. Every cup tells a story of quality, passion, and craftsmanship."
          tag="Fresh Roasted"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Shop Coffee",
              href: "product"
            },
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474232922-4cqla99l.jpg"
          imageAlt="Coffee shop interior with warm lighting"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Coffee Story"
          description={[
            "For over three decades, we've been dedicated to sourcing the finest coffee beans from sustainable farms around the world. Our master roasters bring out the unique characteristics of each origin.",
            "From bean to cup, we maintain the highest standards of quality and craftsmanship. Every batch is carefully roasted in small quantities to ensure maximum freshness and flavor."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Why Choose Our Coffee"
          description="Discover what makes our coffee exceptional, from sourcing to brewing"
          tag="Quality First"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Artisan Roasting",
              description: "Our master roasters use traditional techniques combined with modern precision to bring out the best in every bean, creating complex flavor profiles that coffee enthusiasts love.",
              icon: Flame
            },
            {
              title: "Sustainable Sourcing",
              description: "We partner directly with coffee farms that practice sustainable agriculture, ensuring fair wages for farmers and environmental responsibility in every cup you enjoy.",
              icon: Leaf
            },
            {
              title: "Fresh Delivery",
              description: "Coffee is roasted to order and shipped within 48 hours to guarantee maximum freshness. Experience the difference that truly fresh coffee makes in your daily routine.",
              icon: Truck
            },
            {
              title: "Expert Brewing",
              description: "Our baristas are trained in multiple brewing methods from espresso to pour-over, ensuring every cup meets our exacting standards for flavor, aroma, and presentation.",
              icon: Coffee
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Premium Coffee Selection"
          description="Explore our carefully curated collection of exceptional coffee beans"
          tag="Bestsellers"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "BrewCraft",
              name: "Ethiopian Highland Blend",
              price: "$24.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474241118-tpgvvmx2.jpg",
              imageAlt: "Ethiopian Highland coffee blend package"
            },
            {
              id: "2",
              brand: "BrewCraft",
              name: "Colombian Gold Roast",
              price: "$22.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474242410-nj5tmb5j.jpg",
              imageAlt: "Colombian Gold roast coffee bag"
            },
            {
              id: "3",
              brand: "BrewCraft",
              name: "Guatemala Sunrise",
              price: "$26.99",
              rating: 4,
              reviewCount: "1.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474243627-a0i8swmz.jpg",
              imageAlt: "Guatemala Sunrise coffee packaging"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Coffee Lovers Say"
          description="Real feedback from our valued customers who appreciate exceptional coffee"
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Coffee Enthusiast",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474245974-jmict5lz.jpg",
              imageAlt: "Portrait of Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Torres",
              role: "Restaurant Owner",
              company: "Fine Dining",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474247519-nnbyhthw.jpg",
              imageAlt: "Portrait of Michael Torres"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Barista Trainer",
              company: "Coffee Academy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474248805-hpfmmnho.jpg",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Café Manager",
              company: "Local Coffee House",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474250035-2gw9w94n.jpg",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="Working with the finest farms and organizations in the coffee industry"
          tag="Partnerships"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474251391-ckjdj22x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474253208-f297npzd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474255307-2z12a1ef.png",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474257049-m0rqsj0t.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474258890-bwft18gd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474260486-33bub0hc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474261827-gxtwunxu.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready for Great Coffee?"
          description="Subscribe to our newsletter for exclusive offers, brewing tips, and be the first to know about new coffee arrivals."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and can unsubscribe anytime."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763474263445-yit766lm.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          brandName="BrewCraft Coffee"
          copyrightText="© 2025 BrewCraft Coffee. All rights reserved."
          columns={[
            {
              title: "Coffee",
              items: [
                {
                  label: "Our Beans",
                  href: "product"
                },
                {
                  label: "Brewing Guide",
                  href: "feature"
                },
                {
                  label: "Subscriptions",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "contact"
                },
                {
                  label: "Shipping Info",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/brewcraft",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/brewcraft",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/brewcraft",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}