import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import novaPortrait from "../assets/nova_cda_portret.webp";
import ariaDigitalArt from "../assets/aria_digital_art_Regal_brindle_dog_grand_interior.webp";
import daenerysTerrace from "../assets/Daenerys_Khaleesi_Relaxing_on_a_sunlit_terrace.webp";
import adamGuardian from "../assets/adam_dblack_Noble_guardian.webp";
import adamPuppy from "../assets/adam_dblack_puppy_classical_setting.webp";
import adamSweetPuppy from "../assets/adam_dblack_Sweet_puppy_portrait.webp";
import aprilliaPortrait from "../assets/Aprillia_Von_der_Drachenwiese_Regal_boxer_in_classical_portrait_style.webp";
import aprilliaGarden from "../assets/Aprillia_Von_der_DrachenwieseBoxer_dog_classical_garden.webp";

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
    id: "art-aria-regal",
    slug: "aria-regal-digital-art",
    title: "Regal Interior",
    dogName: "Aria",
    image: ariaDigitalArt,
    alt: "Digital fine-art portrait of Aria Casa di Andrey as a regal brindle Boxer in a grand interior",
    description: "A dramatic digital portrait concept with warm bronze tones and a refined gallery mood.",
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
    id: "art-daenerys-terrace",
    slug: "daenerys-khaleesi-sunlit-terrace",
    title: "Sunlit Terrace",
    dogName: "Daenerys Khaleesi",
    image: daenerysTerrace,
    alt: "Digital fine-art portrait of Daenerys Khaleesi relaxing on a sunlit terrace",
    description: "A warm terrace portrait concept with soft light, calm presence, and an elegant home-art feeling.",
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
    id: "art-adam-d-black-guardian",
    slug: "adam-d-black-noble-guardian",
    title: "Noble Guardian",
    dogName: "Adam D Black",
    image: adamGuardian,
    alt: "Digital fine-art portrait of Adam D Black as a noble Boxer guardian",
    description: "A strong guardian portrait concept with a composed expression and classic fine-art atmosphere.",
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
    id: "art-adam-d-black-puppy",
    slug: "adam-d-black-puppy-classical-setting",
    title: "Classical Puppy Portrait",
    dogName: "Adam D Black",
    image: adamPuppy,
    alt: "Digital fine-art puppy portrait of Adam D Black in a classical setting",
    description: "A tender puppy portrait concept with classical styling, warm tones, and a soft gallery mood.",
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
    id: "art-adam-d-black-sweet-puppy",
    slug: "adam-d-black-sweet-puppy-portrait",
    title: "Blue-Eyed Puppy Portrait",
    dogName: "Adam D Black",
    image: adamSweetPuppy,
    alt: "Digital fine-art portrait of Adam D Black as a very young Boxer puppy with blue eyes",
    description: "A soft puppy portrait inspired by Adam D Black when he was tiny and still had blue eyes.",
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
    id: "art-aprillia-von-der-drachenwiese",
    slug: "aprillia-von-der-drachenwiese-regal-portrait",
    title: "Classical Regal Portrait",
    dogName: "Aprillia Von der Drachenwiese",
    image: aprilliaPortrait,
    alt: "Digital fine-art portrait of Aprillia Von der Drachenwiese as a regal Boxer in classical portrait style",
    description: "A classical fine-art Boxer portrait with a dignified pose, rich tones, and a timeless gallery feeling.",
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
    id: "art-aprillia-classical-garden",
    slug: "aprillia-von-der-drachenwiese-classical-garden",
    title: "Classical Garden Portrait",
    dogName: "Aprillia Von der Drachenwiese",
    image: aprilliaGarden,
    alt: "Digital fine-art portrait of Aprillia Von der Drachenwiese as a Boxer dog in a classical garden",
    description: "A refined garden portrait concept with classical styling, natural light, and a calm noble presence.",
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

const brandValues = [
  "Based on real photographs",
  "Personally reviewed",
  "Created with respect for the breed",
];

const protectedImageProps = {
  draggable: "false",
  onContextMenu: (event) => event.preventDefault(),
};

export default function BoxerArt() {
  return (
    <div className="boxer-art-page">
      <Meta
        title="Boxer Art"
        description="Fine-art Casa di Andrey Boxer portraits prepared as future framed prints, posters, and canvas wall art."
        path="/boxer-art"
      />

      <section className="boxer-art-hero">
        <div className="boxer-art-hero__content">
          <p className="boxer-art-eyebrow">Boxer Art by Casa di Andrey</p>
          <h1>Real Boxers. Timeless Portraits.</h1>
          <p>
            Fine-art portraits inspired by real Casa di Andrey Boxers, their
            character, and their stories. Discover our digital art gallery and
            ask about future framed prints, posters, and canvas wall art.
          </p>
          <div className="boxer-art-actions">
            <a className="button button--primary" href="#art-collection">
              Explore the collection
            </a>
            <Link className="button button--secondary" to="/contact">
              Ask about prints
            </Link>
          </div>
        </div>
        <figure className="boxer-art-hero__visual">
          <img src={featuredArtwork.image} alt={featuredArtwork.alt} {...protectedImageProps} />
          <figcaption>{featuredArtwork.title}</figcaption>
        </figure>
      </section>

      <section className="boxer-art-featured" id="featured-artwork" aria-labelledby="featured-artwork-title">
        <div className="boxer-art-featured__image">
          <img
            src={featuredArtwork.image}
            alt={featuredArtwork.alt}
            loading="lazy"
            {...protectedImageProps}
          />
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
                <img
                  src={artwork.image}
                  alt={artwork.alt}
                  loading="lazy"
                  {...protectedImageProps}
                />
              </div>
              <div className="boxer-art-card__body">
                <span className="boxer-art-label">Fine-art print planned</span>
                <h3>{artwork.title}</h3>
                <p className="boxer-art-card__dog">{artwork.dogName}</p>
                <p>{artwork.description}</p>
                <div className="boxer-art-card__actions">
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
        <h2 id="art-final-title">Bring Casa di Andrey art into your home.</h2>
        <p>
          Ask about an existing Casa di Andrey digital artwork prepared for a
          future framed print, poster, or canvas.
        </p>
        <div className="boxer-art-actions">
          <Link className="button button--primary" to="/contact">
            Ask about a print
          </Link>
        </div>
      </section>
    </div>
  );
}
