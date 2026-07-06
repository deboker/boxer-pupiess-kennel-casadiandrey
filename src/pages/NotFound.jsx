import { Link } from "react-router-dom";
import Meta from "../components/Meta";

export default function NotFound() {
  return (
    <>
      <Meta
        title="Page not found"
        description="The requested Casa di Andrey page could not be found."
        path="/404"
      />
      <section className="page-hero">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page may have moved as the Casa di Andrey website is reorganized.</p>
        <Link className="button button--primary" to="/">
          Return home
        </Link>
      </section>
    </>
  );
}
