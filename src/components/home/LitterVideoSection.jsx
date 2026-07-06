export default function LitterVideoSection({ litter, darkMode }) {
  return (
    <div className={`litter-video-block ${darkMode ? "dark-mode" : ""}`}>
      <div className="litter-copy">
        <h3>{litter.currentWeekTitle}</h3>
        <p>{litter.currentWeekDescription}</p>
      </div>
      <div className="litter-video-row">
        {litter.updateVideos.map((video, index) => (
          <video
            key={video}
            className="litter-video"
            src={video}
            controls
            muted
            playsInline
            preload="none"
            poster="/aria_puppy.webp"
            aria-label={`${litter.updateVideoAriaLabel} ${index + 1}`}
          />
        ))}
      </div>
      <div className="litter-copy litter-copy-bottom">
        <p>{litter.updateFooterText}</p>
      </div>
    </div>
  );
}
