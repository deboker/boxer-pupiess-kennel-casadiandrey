import oneMonthClipOne from "../assets/video_1.mp4";
import oneMonthClipTwo from "../assets/video_2.mp4";
import oneMonthClipThree from "../assets/video_3.mp4";
import litterDBanner from "../assets/aria&xxx.jpg";
import litterCBanner from "../assets/alexsandar&aprilia.jpg";
import litterBBanner from "../assets/fireghost&croma_meet.jpg";
import litterABanner from "../assets/cartier&free.jpg";

export const litters = [
  {
    slug: "litter-e",
    name: "Litter E",
    birthDate: "26.02.2026",
    parentInformation:
      "Litter E comes from fully health-tested parents and top European bloodlines.",
    currentWeekTitle: "7-weeks Pup Update",
    currentWeekDescription:
      "Our little ones are 7 weeks old, curious and growing fast, with more of their sweet personalities showing every day.",
    updateVideos: [oneMonthClipOne, oneMonthClipTwo, oneMonthClipThree],
    updateVideoAriaLabel: "One-month puppy update clip",
    updateFooterText:
      "Three fresh clips below capture their playful energy, calm temperaments and how nicely they are developing.",
  },
  {
    slug: "litter-d",
    name: "Litter D",
    birthDate: "26.12.2024",
    parentInformation: "Previous Casa di Andrey litter archive.",
    banner: litterDBanner,
    bannerAlt: "Casa di Andrey Litter D banner",
  },
  {
    slug: "litter-c",
    name: "Litter C",
    birthDate: "25.07.2023",
    parentInformation: "Previous Casa di Andrey litter archive.",
    banner: litterCBanner,
    bannerAlt: "Casa di Andrey Litter C banner",
  },
  {
    slug: "litter-b",
    name: "Litter B",
    birthDate: "03.01.2023",
    parentInformation: "Previous Casa di Andrey litter archive.",
    banner: litterBBanner,
    bannerAlt: "Casa di Andrey Litter B banner",
  },
  {
    slug: "litter-a",
    name: "Litter A",
    birthDate: "18.12.2022",
    parentInformation: "Previous Casa di Andrey litter archive.",
    banner: litterABanner,
    bannerAlt: "Casa di Andrey Litter A banner",
  },
];
