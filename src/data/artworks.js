import novaPortrait from "../assets/nova_cda_portret.webp";
import ariaDigitalArt from "../assets/aria_digital_art_Regal_brindle_dog_grand_interior.webp";
import ariaClassicalGarden from "../assets/Aria_Regal_boxer_in_classical_garden_setting.webp";
import daenerysTerrace from "../assets/Daenerys_Khaleesi_Relaxing_on_a_sunlit_terrace.webp";
import adamGuardian from "../assets/adam_dblack_Noble_guardian.webp";
import adamPuppy from "../assets/adam_dblack_puppy_classical_setting.webp";
import adamSweetPuppy from "../assets/adam_dblack_Sweet_puppy_portrait.webp";
import aprilliaPortrait from "../assets/Aprillia_Von_der_Drachenwiese_Regal_boxer_in_classical_portrait_style.webp";
import aprilliaGarden from "../assets/Aprillia_Von_der_DrachenwieseBoxer_dog_classical_garden.webp";
import erosTitanTerrace from "../assets/Eros_titan_Regal_canine_on_a_classical_terrace.webp";
import cartierDramaticPortrait from "../assets/Cartier_VAF_E_PLURIBUS_UNUMNoble_boxer_in_dramatic_portrait.webp";
import threePuppiesGoldenWarmth from "../assets/eros-magnus-eros-titan-elysia-nova_Three_boxer_puppies_in_golden_warmth.webp";

const defaultFormats = [
  "Digital artwork",
  "Fine-art poster",
  "Framed print",
  "Canvas",
];

const defaultSizes = ["20 x 25 cm", "40 x 50 cm", "60 x 75 cm"];

const createArtwork = ({
  id,
  slug,
  title,
  dogName,
  shortDescription,
  description,
  image,
  aspectRatio = "4:5",
  featured = false,
}) => ({
  id,
  slug,
  title,
  dogName,
  collection: "Casa di Andrey Art Collection",
  shortDescription,
  description,
  image,
  alt: `${title}, a Casa di Andrey fine-art Boxer artwork featuring ${dogName}`,
  originalPhotoAvailable: true,
  sourceNote: "Created from an original Casa di Andrey photograph",
  featured,
  status: "preview",
  formats: defaultFormats,
  aspectRatio,
  sizes: defaultSizes,
  digitalPrice: null,
  printPrices: {},
  printFileReady: false,
  availableForSale: false,
});

export const artworks = [
  createArtwork({
    id: "eros-titan-regal-canine-classical-terrace",
    slug: "regal-canine-classical-terrace",
    title: "Regal Canine on a Classical Terrace",
    dogName: "Eros Titan",
    image: erosTitanTerrace,
    shortDescription:
      "A noble fine-art portrait of Eros Titan posed on a classical terrace.",
    description:
      "A refined Eros Titan artwork shaped around classical architecture, warm light, and a calm regal Boxer presence.",
  }),
  createArtwork({
    id: "elysia-nova-noble-presence",
    slug: "the-noble-presence",
    title: "The Noble Presence",
    dogName: "Elysia Nova",
    image: novaPortrait,
    featured: true,
    shortDescription:
      "A regal fine-art portrait created from an original photograph of Elysia Nova.",
    description:
      "A study of warmth, dignity, character, and quiet presence, shaped for a refined Casa di Andrey wall-art collection.",
  }),
  createArtwork({
    id: "eros-magnus-eros-titan-elysia-nova-golden-warmth",
    slug: "three-boxer-puppies-in-golden-warmth",
    title: "Three Boxer Puppies in Golden Warmth",
    dogName: "Eros Magnus, Eros Titan, and Elysia Nova",
    image: threePuppiesGoldenWarmth,
    shortDescription:
      "A warm fine-art portrait of three Casa di Andrey puppies in soft golden light.",
    description:
      "A gentle Casa di Andrey puppy artwork shaped around warmth, closeness, and the early family character of Eros Magnus, Eros Titan, and Elysia Nova.",
  }),
  createArtwork({
    id: "aria-regal-interior",
    slug: "regal-interior",
    title: "Regal Interior",
    dogName: "Aria",
    image: ariaDigitalArt,
    shortDescription:
      "A dramatic interior portrait with warm bronze tones and a composed brindle presence.",
    description:
      "Created from an original Aria photograph and reviewed for a consistent Casa di Andrey fine-art style.",
  }),
  createArtwork({
    id: "aria-classical-garden-reverie",
    slug: "classical-garden-reverie",
    title: "Classical Garden Reverie",
    dogName: "Aria",
    image: ariaClassicalGarden,
    shortDescription:
      "A serene garden portrait framed by classical stone, soft greenery, and Aria's poised brindle character.",
    description:
      "Aria stands with quiet confidence in a romantic classical garden, where warm natural light and timeless architecture create an elegant Casa di Andrey fine-art portrait.",
  }),
  createArtwork({
    id: "daenerys-sunlit-terrace",
    slug: "sunlit-terrace",
    title: "Sunlit Terrace",
    dogName: "Daenerys Khaleesi",
    image: daenerysTerrace,
    shortDescription:
      "A warm terrace artwork with soft light, elegance, and calm family-home atmosphere.",
    description:
      "A gentle Casa di Andrey artwork built around sunlight, relaxed posture, and quiet Boxer expression.",
  }),
  createArtwork({
    id: "adam-d-black-noble-guardian",
    slug: "noble-guardian",
    title: "Noble Guardian",
    dogName: "Adam D Black",
    image: adamGuardian,
    shortDescription:
      "A strong guardian portrait with a composed expression and classical atmosphere.",
    description:
      "A confident Adam D Black artwork focused on strength, balance, and the dignified character of the Boxer.",
  }),
  createArtwork({
    id: "adam-d-black-classical-puppy",
    slug: "classical-puppy-portrait",
    title: "Classical Puppy Portrait",
    dogName: "Adam D Black",
    image: adamPuppy,
    shortDescription:
      "A tender puppy portrait in a classical setting with warm gallery tones.",
    description:
      "A softer Adam D Black artwork preserving the early puppy expression in a finished Casa di Andrey art style.",
  }),
  createArtwork({
    id: "adam-d-black-blue-eyed-puppy",
    slug: "blue-eyed-puppy-portrait",
    title: "Blue-Eyed Puppy Portrait",
    dogName: "Adam D Black",
    image: adamSweetPuppy,
    shortDescription:
      "A delicate puppy portrait inspired by Adam D Black when he was very small.",
    description:
      "A warm and intimate puppy artwork focused on the softness of the early blue-eyed stage.",
  }),
  createArtwork({
    id: "aprillia-regal-classical-portrait",
    slug: "classical-regal-portrait",
    title: "Classical Regal Portrait",
    dogName: "Aprillia Von der Drachenwiese",
    image: aprilliaPortrait,
    shortDescription:
      "A dignified classical portrait with rich tones and a timeless gallery feeling.",
    description:
      "A refined Aprillia artwork with a calm, noble pose and a presentation suited for premium wall art.",
  }),
  createArtwork({
    id: "aprillia-classical-garden",
    slug: "classical-garden-portrait",
    title: "Classical Garden Portrait",
    dogName: "Aprillia Von der Drachenwiese",
    image: aprilliaGarden,
    shortDescription:
      "A classical garden artwork with natural light and a calm noble presence.",
    description:
      "A garden-inspired Aprillia portrait prepared as part of the existing Casa di Andrey Art Collection.",
  }),
  createArtwork({
    id: "cartier-vaf-e-pluribus-unum-dramatic-portrait",
    slug: "noble-boxer-dramatic-portrait",
    title: "Noble Boxer in Dramatic Portrait",
    dogName: "Cartier VAF E Pluribus Unum",
    image: cartierDramaticPortrait,
    shortDescription:
      "A noble Cartier portrait with dramatic lighting and a refined gallery presence.",
    description:
      "A dramatic fine-art Boxer portrait focused on Cartier's strong expression, depth, and classical kennel character.",
  }),
];

export const artworkFormats = [
  {
    title: "Digital artwork",
    description:
      "A finished digital file option for personal display. Download delivery will be enabled only when final files and licensing are confirmed.",
  },
  {
    title: "Fine-art poster",
    description:
      "A clean museum-style wall-art format planned for selected existing artworks.",
  },
  {
    title: "Framed print",
    description:
      "A complete presentation option for homes, offices, and kennel-inspired interiors.",
  },
  {
    title: "Canvas",
    description:
      "A textured wall-art option planned for a softer gallery-style presentation.",
  },
];

export const artworkLicenseNotes = [
  "Artwork images are shown for personal viewing and kennel presentation.",
  "Copyright and original image rights remain with Casa di Andrey.",
  "Files may not be resold, redistributed, edited, or used for commercial branding.",
  "No online purchase, download, or checkout is currently available.",
];
