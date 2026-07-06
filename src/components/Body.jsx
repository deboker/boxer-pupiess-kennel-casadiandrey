import ContactForm from "./forms/ContactForm";
import BackToTopButton from "./home/BackToTopButton";
import LitterVideoSection from "./home/LitterVideoSection";
import MeetingSection from "./home/MeetingSection";
import PuppySection from "./home/PuppySection";
import SocialLinks from "./home/SocialLinks";
import { kennelInfo } from "../data/kennel";
import { litters } from "../data/litters";
import { eightWeekPuppies, sevenWeekPuppies } from "../data/puppies";
import "../index.css";

export default function Body({ darkMode }) {
  const currentLitter = litters[0];

  return (
    <div>
      <MeetingSection darkMode={darkMode} />

      <PuppySection
        id="available"
        title="AVAILABLE FOR RESERVATION"
        lead="Watch the newest puppy clips and get to know each of our five pups, now 7 weeks old; available puppies can be reserved now."
        puppies={sevenWeekPuppies}
        darkMode={darkMode}
      >
        <LitterVideoSection litter={currentLitter} darkMode={darkMode} />
      </PuppySection>

      <PuppySection
        id="available-8weeks"
        title="8 WEEKS OLD PUPPIES"
        lead="The puppies are now 8 weeks old and growing beautifully. Watch the latest videos and see their playful personalities."
        puppies={eightWeekPuppies}
        darkMode={darkMode}
        className="available-follow-up"
      >
        <div className="reserve-text">
          <p>{kennelInfo.reserveText}</p>
          <p>{kennelInfo.upcomingLittersText}</p>
        </div>
      </PuppySection>

      <ContactForm />
      <SocialLinks darkMode={darkMode} />
      <BackToTopButton />
    </div>
  );
}
