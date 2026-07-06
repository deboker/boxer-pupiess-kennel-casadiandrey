import { useEffect } from "react";

const SITE_URL = "https://casa-di-andrey.com";
const DEFAULT_IMAGE = `${SITE_URL}/aria_puppy.webp`;

export default function Meta({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = title.includes("Casa di Andrey")
    ? title
    : `${title} | Casa di Andrey`;
  const canonicalPath = path === "/" ? "" : path;
  const canonical = `${SITE_URL}${canonicalPath}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("description", description);
    setLink("canonical", canonical);
    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:url", canonical);
    setProperty("og:type", "website");
    setProperty("og:image", image);
    setMeta("twitter:image", image);
  }, [canonical, description, fullTitle, image]);

  return null;
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}
