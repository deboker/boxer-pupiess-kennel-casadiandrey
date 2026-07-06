import PuppyCard from "./PuppyCard";

export default function PuppySection({
  id,
  title,
  lead,
  puppies,
  darkMode,
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`available ${className} ${darkMode ? "dark-mode" : ""}`}
    >
      <h1>{title}</h1>
      <p className="available-lead">{lead}</p>

      <div className="puppy-grid">
        {puppies.map((puppy) => (
          <PuppyCard puppy={puppy} darkMode={darkMode} key={puppy.name} />
        ))}
      </div>

      {children}
    </section>
  );
}
