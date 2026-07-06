import { Link, Navigate, useParams } from "react-router-dom";
import Meta from "../components/Meta";
import { artworkLicenseNotes, artworks } from "../data/artworks";

const protectedImageProps = {
  draggable: "false",
  onContextMenu: (event) => event.preventDefault(),
};

export default function ArtworkDetail() {
  const { slug } = useParams();
  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    return <Navigate to="/boxer-art" replace />;
  }

  return (
    <div className="boxer-art-page">
      <Meta
        title={`${artwork.title} | Boxer Art`}
        description={artwork.shortDescription}
        path={`/boxer-art/${artwork.slug}`}
      />

      <section className="boxer-art-detail-hero">
        <div className="boxer-art-detail-hero__copy">
          <Link className="text-link" to="/boxer-art">
            Back to collection
          </Link>
          <p className="boxer-art-eyebrow">{artwork.collection}</p>
          <h1>{artwork.title}</h1>
          <p className="boxer-art-kicker">{artwork.dogName}</p>
          <p>{artwork.description}</p>
          <span className="boxer-art-label">{artwork.sourceNote}</span>
          <div className="boxer-art-actions">
            <a className="button button--primary" href="#artwork-formats">
              View formats
            </a>
            <Link className="button button--secondary" to="/contact">
              Ask for artwork information
            </Link>
          </div>
        </div>
        <figure className="boxer-art-detail-hero__image">
          <img src={artwork.image} alt={artwork.alt} {...protectedImageProps} />
        </figure>
      </section>

      <section className="boxer-art-section boxer-art-detail-grid" id="artwork-formats">
        <article>
          <p className="boxer-art-eyebrow">Formats</p>
          <h2>Possible display formats</h2>
          <div className="boxer-art-chip-list">
            {artwork.formats.map((format) => (
              <span key={format}>{format}</span>
            ))}
          </div>
        </article>
        <article>
          <p className="boxer-art-eyebrow">Sizes</p>
          <h2>Reference print sizes</h2>
          <div className="boxer-art-chip-list">
            {artwork.sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="boxer-art-section boxer-art-shop-panel">
        <div>
          <p className="boxer-art-eyebrow">Artwork status</p>
          <h2>This artwork is not for online purchase.</h2>
          <p>
            This artwork is part of the existing Casa di Andrey Art Collection.
            The page is for presentation and information only. There is no
            active checkout, payment, download, or print-order flow.
          </p>
        </div>
        <button className="button button--primary" type="button" disabled>
          Not available for online purchase
        </button>
      </section>

      <section className="boxer-art-section boxer-art-license">
        <div className="boxer-art-section__heading">
          <p className="boxer-art-eyebrow">License</p>
          <h2>Personal art use only</h2>
          <p>
            Every artwork starts from an original Casa di Andrey photograph and
            remains part of the kennel's protected art collection.
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
    </div>
  );
}
