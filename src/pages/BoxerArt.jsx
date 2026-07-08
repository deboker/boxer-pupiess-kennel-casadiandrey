import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import ArtDecoration from "../components/art/ArtDecoration";
import { artworkFormats, artworkLicenseNotes, artworks } from "../data/artworks";

const featuredArtwork = artworks.find((artwork) => artwork.featured) || artworks[0];

const protectedImageProps = {
  draggable: "false",
  onContextMenu: (event) => event.preventDefault(),
};

const archiveNotes = [
  {
    title: "Existing Casa di Andrey artwork",
    text: "Each piece is already finished and based on an original kennel photograph.",
  },
  {
    title: "Formats are informational",
    text: "Digital artwork, poster, framed print, and canvas are possible future directions, not active products.",
  },
  {
    title: "No online sales",
    text: "There is currently no live checkout, payment flow, download, or print ordering on this website.",
  },
  {
    title: "Contact for information",
    text: "Use the contact page only if you want to ask about the artworks or the Casa di Andrey collection.",
  },
];

const collectionValues = [
  "Original Casa di Andrey source photographs",
  "Finished artworks only",
  "Reviewed for a consistent kennel art style",
];

export default function BoxerArt() {
  return (
    <div className="boxer-art-page">
      <Meta
        title="Boxer Art"
        description="The Casa di Andrey Art Collection presents existing fine-art Boxer artworks created from original Casa di Andrey photographs."
        path="/boxer-art"
      />

      <section className="boxer-art-hero">
        <ArtDecoration variant="brush" className="art-decoration--hero" />
        <div className="boxer-art-hero__content">
          <p className="boxer-art-eyebrow">Casa di Andrey Art Collection</p>
          <h1>Existing Boxer artworks by Casa di Andrey.</h1>
          <p>
            A curated collection of finished fine-art Boxer portraits created
            from original Casa di Andrey photographs. This section is an art
            archive and presentation, not an active online shop.
          </p>
          <div className="boxer-art-actions">
            <a className="button button--primary" href="#art-collection">
              View collection
            </a>
            <a className="button button--secondary" href="#art-status">
              Artwork information
            </a>
          </div>
        </div>
        <figure className="boxer-art-hero__visual">
          <img src={featuredArtwork.image} alt={featuredArtwork.alt} {...protectedImageProps} />
          <figcaption>{featuredArtwork.title}</figcaption>
        </figure>
      </section>

      <section className="boxer-art-featured" aria-labelledby="featured-artwork-title">
        <div className="boxer-art-featured__image">
          <img
            src={featuredArtwork.image}
            alt={featuredArtwork.alt}
            loading="lazy"
            {...protectedImageProps}
          />
        </div>
        <div className="boxer-art-featured__content">
          <p className="boxer-art-eyebrow">Featured artwork</p>
          <h2 id="featured-artwork-title">{featuredArtwork.title}</h2>
          <p className="boxer-art-kicker">{featuredArtwork.dogName}</p>
          <p>{featuredArtwork.shortDescription}</p>
          <span className="boxer-art-label">{featuredArtwork.sourceNote}</span>
          <div className="boxer-art-actions">
            <Link className="button button--primary" to={`/boxer-art/${featuredArtwork.slug}`}>
              View artwork
            </Link>
          </div>
        </div>
      </section>

      <section className="boxer-art-section" id="art-collection" aria-labelledby="art-collection-title">
        <ArtDecoration variant="palette" className="art-decoration--collection" />
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Collection</p>
          <h2 id="art-collection-title">Finished Casa di Andrey artworks</h2>
          <p>
            Every artwork begins with a real Casa di Andrey Boxer, an original
            kennel-owned photograph, and a reviewed fine-art transformation.
          </p>
        </div>

        <div className="boxer-art-grid">
          {artworks.map((artwork) => (
            <article className="boxer-art-card" id={artwork.id} key={artwork.id}>
              <Link className="boxer-art-card__image" to={`/boxer-art/${artwork.slug}`}>
                <img
                  src={artwork.image}
                  alt={artwork.alt}
                  loading="lazy"
                  {...protectedImageProps}
                />
              </Link>
              <div className="boxer-art-card__body">
                <span className="boxer-art-label">{artwork.collection}</span>
                <h3>{artwork.title}</h3>
                <p className="boxer-art-card__dog">{artwork.dogName}</p>
                <p>{artwork.shortDescription}</p>
                <div className="boxer-art-chip-list">
                  {artwork.formats.slice(0, 3).map((format) => (
                    <span key={format}>{format}</span>
                  ))}
                </div>
                <div className="boxer-art-card__actions">
                  <Link className="text-link" to={`/boxer-art/${artwork.slug}`}>
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-section boxer-art-prints" aria-labelledby="art-formats-title">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Formats</p>
          <h2 id="art-formats-title">Possible artwork formats</h2>
          <p>
            These formats describe how the finished artworks may be presented in
            the future. They are not active products on this website.
          </p>
        </div>
        <div className="boxer-art-format-grid">
          {artworkFormats.map((format) => (
            <article className="boxer-art-format" key={format.title}>
              <span className="boxer-art-label">Format</span>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
        <p className="boxer-art-note">
          Planned print sizes include 20 x 25 cm, 40 x 50 cm, and 60 x 75 cm.
          No prices, checkout, downloads, or print orders are active.
        </p>
      </section>

      <section className="boxer-art-section boxer-art-process" id="art-status" aria-labelledby="art-status-title">
        <ArtDecoration variant="stroke" className="art-decoration--process" />
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Artwork status</p>
          <h2 id="art-status-title">Presentation only, no checkout</h2>
          <p>
            Boxer Art is currently a Casa di Andrey gallery section. It does not
            offer custom portraits, customer uploads, made-to-order artwork, or
            online purchasing.
          </p>
        </div>
        <div className="boxer-art-steps">
          {archiveNotes.map((step, index) => (
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
          <h2 id="art-values-title">Existing artworks only</h2>
          <p>
            Casa di Andrey artworks are created from original kennel
            photographs. The collection does not include customer photo uploads
            or custom portrait services.
          </p>
        </div>
        <div className="boxer-art-values__grid">
          {collectionValues.map((value) => (
            <article key={value}>
              <span aria-hidden="true" />
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-section boxer-art-license" aria-labelledby="art-license-title">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">Licensing</p>
          <h2 id="art-license-title">Clear personal-use licensing</h2>
          <p>
            The artworks are displayed as protected Casa di Andrey images.
            Licensing notes clarify that no download or resale permission is
            granted by viewing this page.
          </p>
        </div>
        <div className="boxer-art-values__grid">
          {artworkLicenseNotes.map((note) => (
            <article key={note}>
              <span aria-hidden="true" />
              <h3>{note}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="boxer-art-final" aria-labelledby="art-final-title">
        <h2 id="art-final-title">Casa di Andrey art, prepared carefully.</h2>
        <p>
          Browse the finished artworks and contact Casa di Andrey if you are
          interested in learning more about the art collection.
        </p>
        <div className="boxer-art-actions">
          <Link className="button button--primary" to="/contact">
            Contact Casa di Andrey
          </Link>
        </div>
      </section>
    </div>
  );
}
