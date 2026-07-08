export default function ArtDecoration({ variant = "brush", className = "" }) {
  if (variant === "palette") {
    return (
      <svg
        className={`art-decoration art-decoration--palette ${className}`}
        viewBox="0 0 180 170"
        aria-hidden="true"
      >
        <path
          className="art-decoration__ink"
          d="M91 18C46 17 17 47 19 88c2 42 35 68 74 65 13-1 20-9 16-20-3-9 2-16 13-17 26-2 42-19 40-43-3-33-33-54-71-55Z"
        />
        <path
          className="art-decoration__ink art-decoration__ink--fine"
          d="M38 102c13 23 36 34 59 31M35 66c8-18 25-30 46-33"
        />
        <circle className="art-decoration__paint art-decoration__paint--rust" cx="61" cy="55" r="9" />
        <circle className="art-decoration__paint art-decoration__paint--gold" cx="94" cy="45" r="8" />
        <circle className="art-decoration__paint art-decoration__paint--wine" cx="126" cy="60" r="10" />
        <circle className="art-decoration__paint art-decoration__paint--dark" cx="139" cy="89" r="7" />
        <path
          className="art-decoration__ink"
          d="M70 96c6-9 19-10 27-4 8 7 5 19-5 24-12 5-29-6-22-20Z"
        />
      </svg>
    );
  }

  if (variant === "stroke") {
    return (
      <svg
        className={`art-decoration art-decoration--stroke ${className}`}
        viewBox="0 0 260 120"
        aria-hidden="true"
      >
        <path
          className="art-decoration__paint-stroke"
          d="M15 72c41-24 86-28 127-20 34 7 65 3 102-17"
        />
        <path
          className="art-decoration__ink art-decoration__ink--fine"
          d="M19 86c48-17 88-17 126-8 35 8 65 3 98-18M28 98c39-8 74-5 105 2"
        />
        <circle className="art-decoration__paint art-decoration__paint--gold" cx="220" cy="91" r="4" />
        <circle className="art-decoration__paint art-decoration__paint--wine" cx="239" cy="82" r="2.5" />
      </svg>
    );
  }

  return (
    <svg
      className={`art-decoration art-decoration--brush ${className}`}
      viewBox="0 0 250 190"
      aria-hidden="true"
    >
      <path
        className="art-decoration__paint-stroke"
        d="M21 141c36-20 72-28 113-27 34 1 64-7 94-25"
      />
      <g className="art-decoration__brush">
        <path
          className="art-decoration__handle"
          d="m58 136 95-101c7-8 18 3 11 10L70 146Z"
        />
        <path
          className="art-decoration__ferrule"
          d="m48 130 23 22-13 12-25-24Z"
        />
        <path
          className="art-decoration__bristles"
          d="M34 140c-12 7-18 19-17 34 10-7 23-7 34-9 7-1 10-5 9-11Z"
        />
        <path
          className="art-decoration__ink art-decoration__ink--fine"
          d="m39 143 18 17M53 133l17 17"
        />
      </g>
      <path
        className="art-decoration__ink art-decoration__ink--fine"
        d="M97 161c38 8 79 2 117-19"
      />
      <circle className="art-decoration__paint art-decoration__paint--wine" cx="220" cy="129" r="4" />
    </svg>
  );
}
