import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import novaPortrait from "../assets/nova_cda_portret.webp";
import ariaPortrait from "../assets/aria-vlajko-meet-new.webp";
import ariaClassic from "../assets/aria_vlajko.webp";
import cartierFree from "../assets/cartier&free.webp";
import ariaCompanion from "../assets/aria&xxx.jpg";

// Future Gelato order creation, price retrieval, and checkout must be handled
// through a secure backend or serverless function. Secret credentials must never
// be stored in frontend code.
const artworks = [
  {
    id: "art-elysia-nova",
    slug: "elysia-nova",
    title: "The Noble Presence",
    dogName: "Elysia Nova",
    image: novaPortrait,
    alt: "Fine-art portrait of Elysia Nova Casa di Andrey as an elegant Boxer artwork",
    description: "A regal fine-art Boxer portrait built around presence, warmth, and character.",
    featured: true,
    printAvailable: false,
    gelatoProductId: null,
    productUid: null,
    printFormats: ["Fine-art poster", "Framed print", "Canvas"],
    availableSizes: [],
    frameOptions: [],
    price: null,
    currency: null,
    checkoutEnabled: false,
  },
  {
    id: "art-aria-portrait",
    slug: "aria-portrait",
    title: "Quiet Strength",
    dogName: "Aria",
    image: ariaPortrait,
    alt: "Casa di Andrey Boxer portrait prepared as future wall art",
    description: "A warm portrait direction focused on the Boxer expression and gentle strength.",
    featured: false,
    printAvailable: false,
    gelatoProductId: null,
    productUid: null,
    printFormats: ["Fine-art poster", "Framed print", "Canvas"],
    availableSizes: [],
    frameOptions: [],
    price: null,
    currency: null,
    checkoutEnabled: false,
  },
  {
    id: "art-aria-classic",
    slug: "aria-classic",
    title: "Classic Boxer Study",
    dogName: "Aria",
    image: ariaClassic,
    alt: "Vertical Casa di Andrey Boxer portrait study for future art print",
    description: "A classic portrait composition for a timeless Casa di Andrey wall piece.",
    featured: false,
    printAvailable: false,
    gelatoProductId: null,
    productUid: null,
    printFormats: ["Fine-art poster", "Framed print", "Canvas"],
    availableSizes: [],
    frameOptions: [],
    price: null,
    currency: null,
    checkoutEnabled: false,
  },
  {
    id: "art-cartier-free",
    slug: "cartier-free",
    title: "Companions",
    dogName: "Cartier and Free",
    image: cartierFree,
    alt: "Two Casa di Andrey Boxers photographed together for future fine-art print",
    description: "A composed double portrait concept with a calm, family-focused character.",
    featured: false,
    printAvailable: false,
    gelatoProductId: null,
    productUid: null,
    printFormats: ["Fine-art poster", "Framed print", "Canvas"],
    availableSizes: [],
    frameOptions: [],
    price: null,
    currency: null,
    checkoutEnabled: false,
  },
  {
    id: "art-aria-companion",
    slug: "aria-companion",
    title: "Golden Companion",
    dogName: "Casa di Andrey Boxer",
    image: ariaCompanion,
    alt: "Vertical Boxer portrait photograph selected for a future Casa di Andrey artwork",
    description: "A character-led portrait concept planned for the growing art collection.",
    featured: false,
    printAvailable: false,
    gelatoProductId: null,
    productUid: null,
    printFormats: ["Fine-art poster", "Framed print", "Canvas"],
    availableSizes: [],
    frameOptions: [],
    price: null,
    currency: null,
    checkoutEnabled: false,
  },
];

const featuredArtwork = artworks.find((artwork) => artwork.featured);

const printFormats = [
  {
    title: "Fine-art poster",
    description: "Clean museum-style wall art for warm, modern interiors.",
    icon: "poster",
  },
  {
    title: "Framed print",
    description: "A finished presentation option planned for selected portraits.",
    icon: "frame",
  },
  {
    title: "Canvas",
    description: "A gallery-inspired format for a softer, tactile wall piece.",
    icon: "canvas",
  },
];

const orderingSteps = [
  {
    title: "Choose your artwork",
    text: "Select your favourite Casa di Andrey portrait.",
  },
  {
    title: "Select a format",
    text: "Choose the print type, size, and optional frame.",
  },
  {
    title: "Complete your order",
    text: "Enter your delivery information and complete secure payment.",
  },
  {
    title: "Printed and delivered",
    text: "Your artwork will be printed on demand and delivered directly to your address.",
  },
];

const customSteps = [
  "Send several clear photographs.",
  "Choose an artistic direction.",
  "Review and approve the portrait.",
  "Receive the digital version or request a printed version.",
];

const portraitConcepts = [
  "Classic Boxer portrait",
  "Puppy portrait",
  "Memorial portrait",
  "Breeder and kennel artwork",
  "Digital artwork",
  "Physical wall print",
];

const brandValues = [
  "Based on real photographs",
  "Personally reviewed",
  "Created with respect for the breed",
];

export default function BoxerArt() {
  return (
    <div className="boxer-art-page">
      <Meta
        title="Boxer Art"
        description="Fine-art Casa di Andrey Boxer portraits, planned physical prints, and custom Boxer portrait inquiries."
        path="/boxer-art"
      />

      <section className="boxer-art-hero">
        <div className="boxer-art-hero__content">
          <p className="boxer-art-eyebrow">Boxer Art by Casa di Andrey</p>
          <h1>Real Boxers. Timeless Portraits.</h1>
          <p>
            Fine-art portraits inspired by real Casa di Andrey Boxers, their
            character, and their stories. Discover existing artwork or create a
            personalised portrait of your own Boxer.
          </p>
          <div className="boxer-art-actions">
            <a className="button button--primary" href="#art-collection">
              Explore the collection
            </a>
            <a className="button button--secondary" href="#custom-portrait">
              Create a custom portrait
            </a>
          </div>
        </div>
        <figure className="boxer-art-hero__visual">
          <img src={featuredArtwork.image} alt={featuredArtwork.alt} />
          <figcaption>{featuredArtwork.title}</figcaption>
        </figure>
      </section>

      <section className="boxer-art-featured" id="featured-artwork" aria-labelledby="featured-artwork-title">
        <div className="boxer-art-featured__image">
          <img src={featuredArtwork.image} alt={featuredArtwork.alt} loading="lazy" />
        </div>
        <div className="boxer-art-featured__content">
          <p className="boxer-art-eyebrow">Featured portrait</p>
          <h2 id="featured-artwork-title">Elysia Nova</h2>
          <p className="boxer-art-kicker">Casa di Andrey Fine-Art Portrait</p>
          <p>
            Inspired by a real Casa di Andrey Boxer, this portrait transforms
            her expression, character, and presence into a timeless work of art.
          </p>
          <span className="boxer-art-label">Created from an original Casa di Andrey photograph</span>
          <div className="boxer-art-actions">
            <a
              className="button button--secondary"
              href={featuredArtwork.image}
              target="_blank"
              rel="noreferrer"
            >
              View artwork
            </a>
            <Link className="button button--primary" to="/contact">
              Ask about this print
            </Link>
          </div>
        </div>
      </section>

      <section className="boxer-art-section" id="art-collection" aria-labelledby="art-collection-title">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Collection</p>
          <h2 id="art-collection-title">The Casa di Andrey Art Collection</h2>
          <p>
            A growing collection of fine-art portraits inspired by the Boxers of
            Casa di Andrey.
          </p>
        </div>

        <div className="boxer-art-grid">
          {artworks.map((artwork) => (
            <article className="boxer-art-card" id={artwork.id} key={artwork.id}>
              <div className="boxer-art-card__image">
                <img src={artwork.image} alt={artwork.alt} loading="lazy" />
              </div>
              <div className="boxer-art-card__body">
                <span className="boxer-art-label">Fine-art print planned</span>
                <h3>{artwork.title}</h3>
                <p className="boxer-art-card__dog">{artwork.dogName}</p>
                <p>{artwork.description}</p>
                <div className="boxer-art-card__actions">
                  <a className="text-link" href={artwork.image} target="_blank" rel="noreferrer">
                    View artwork
                  </a>
                  <Link className="text-link" to="/contact">
                    Ask about this print
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-section boxer-art-prints" aria-labelledby="art-prints-title">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Coming soon</p>
          <h2 id="art-prints-title">Art made for your home</h2>
          <p>
            Selected Casa di Andrey portraits are being prepared as
            professionally produced wall art, printed on demand and delivered
            directly to your address.
          </p>
        </div>
        <div className="boxer-art-format-grid">
          {printFormats.map((format) => (
            <article className="boxer-art-format" key={format.title}>
              <span className={`boxer-art-format__icon boxer-art-format__icon--${format.icon}`} aria-hidden="true" />
              <span className="boxer-art-label">Coming soon</span>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
        <p className="boxer-art-note">
          Available sizes, framing options, prices, and delivery information
          will be published when the online print shop launches.
        </p>
        <Link className="button button--primary" to="/contact">
          Ask about availability
        </Link>
      </section>

      <section className="boxer-art-section boxer-art-process" aria-labelledby="ordering-title">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Planned print shop</p>
          <h2 id="ordering-title">How ordering will work</h2>
          <p>
            This is the planned future ordering process. Online checkout is not
            active yet.
          </p>
        </div>
        <div className="boxer-art-steps">
          {orderingSteps.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-custom" id="custom-portrait" aria-labelledby="custom-portrait-title">
        <div className="boxer-art-custom__content">
          <p className="boxer-art-eyebrow">Your Boxer. Your story.</p>
          <h2 id="custom-portrait-title">Create a custom Boxer portrait</h2>
          <p>
            Send us several clear photographs of your Boxer. Together, we choose
            the visual direction before your personalised artwork is created.
          </p>
          <div className="boxer-art-actions">
            <Link className="button button--primary" to="/contact">
              Start your portrait
            </Link>
            <a className="button button--secondary" href="#custom-process">
              View the process
            </a>
          </div>
        </div>
        <div className="boxer-art-concepts" aria-label="Available portrait concepts">
          {portraitConcepts.map((concept) => (
            <span key={concept}>{concept}</span>
          ))}
        </div>
      </section>

      <section className="boxer-art-section" id="custom-process" aria-labelledby="custom-process-title">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Custom process</p>
          <h2 id="custom-process-title">From photograph to portrait</h2>
        </div>
        <div className="boxer-art-steps boxer-art-steps--custom">
          {customSteps.map((step, index) => (
            <article key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-values" aria-labelledby="art-values-title">
        <div>
          <h2 id="art-values-title">Created from real stories</h2>
          <p>
            Every Casa di Andrey portrait begins with a real dog, a real
            photograph, and the unique character that makes every Boxer
            unforgettable.
          </p>
        </div>
        <div className="boxer-art-values__grid">
          {brandValues.map((value) => (
            <article key={value}>
              <span aria-hidden="true" />
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-final" aria-labelledby="art-final-title">
        <h2 id="art-final-title">Turn your Boxer&apos;s character into art.</h2>
        <p>
          Ask about an existing Casa di Andrey print or begin a custom portrait
          created from your own photographs.
        </p>
        <div className="boxer-art-actions">
          <Link className="button button--primary" to="/contact">
            Ask about a print
          </Link>
          <Link className="button button--secondary" to="/contact">
            Create a custom portrait
          </Link>
        </div>
      </section>
    </div>
  );
}
