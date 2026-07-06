import maleFawnVideo from "../assets/egon_7weeks.mp4";
import femaleBrindleVideo from "../assets/aurora_7weeks.mp4";
import femaleFawnVideo from "../assets/nova_7weeks.mp4";
import maleBrindleVideo from "../assets/titian_7weeks.mp4";
import maleBrindleWhiteMaskVideo from "../assets/magnus_7weeks.mp4";
import auroraEightWeeksVideo from "../assets/aurora_8weeks.mp4";
import titanEightWeeksVideo from "../assets/titan_8weeks.mp4";
import magnusEightWeeksVideo from "../assets/magnus_8weeks.mp4";
import egonEightWeeksVideo from "../assets/egon_8weeks.mp4";
import novaEightWeeksVideo from "../assets/nova_8weeks.mp4";

export const sevenWeekPuppies = [
  {
    name: "Egon Imperius Casa di Andrey",
    weekGroup: "7 weeks",
    note: "male fawn, wide white blaze, white chest, white socks",
    video: maleFawnVideo,
    reserved: true,
    status: "Reserved",
    gender: "male",
  },
  {
    name: "Eos Aurora Casa di Andrey",
    weekGroup: "7 weeks",
    note: "female dark brindle with a white chest",
    video: femaleBrindleVideo,
    reserved: true,
    status: "Reserved",
    gender: "female",
  },
  {
    name: "Elysia Nova Casa di Andrey",
    weekGroup: "7 weeks",
    note: "female fawn, white blaze and white chest",
    video: femaleFawnVideo,
    reserved: true,
    status: "Reserved",
    gender: "female",
  },
  {
    name: "Eros Titan Casa di Andrey",
    weekGroup: "7 weeks",
    note: "male golden brindle, white blaze and white chest",
    video: maleBrindleVideo,
    reserved: false,
    status: "Available",
    gender: "male",
  },
  {
    name: "Eros Magnus Casa di Andrey",
    weekGroup: "7 weeks",
    note: "male golden brindle, wide white blaze, white chest, white socks",
    video: maleBrindleWhiteMaskVideo,
    reserved: true,
    status: "Reserved",
    gender: "male",
  },
];

export const eightWeekPuppies = [
  {
    name: "Egon Imperius Casa di Andrey",
    weekGroup: "8 weeks",
    note: "8 weeks update video coming soon",
    video: egonEightWeeksVideo,
    reserved: true,
    status: "Reserved",
    gender: "male",
  },
  {
    name: "Eos Aurora Casa di Andrey",
    weekGroup: "8 weeks",
    note: "female dark brindle with a white chest",
    video: auroraEightWeeksVideo,
    reserved: true,
    status: "Reserved",
    gender: "female",
  },
  {
    name: "Elysia Nova Casa di Andrey",
    weekGroup: "8 weeks",
    note: "8 weeks update video coming soon",
    video: novaEightWeeksVideo,
    reserved: true,
    status: "Reserved",
    gender: "female",
  },
  {
    name: "Eros Titan Casa di Andrey",
    weekGroup: "8 weeks",
    note: "male golden brindle, white blaze and white chest",
    video: titanEightWeeksVideo,
    reserved: false,
    status: "Available",
    gender: "male",
  },
  {
    name: "Eros Magnus Casa di Andrey",
    weekGroup: "8 weeks",
    note: "8 weeks update video coming soon",
    video: magnusEightWeeksVideo,
    reserved: true,
    status: "Reserved",
    gender: "male",
  },
];

export const currentPuppies = eightWeekPuppies.map((currentPuppy) => {
  const previousUpdate = sevenWeekPuppies.find(
    (puppy) => puppy.name === currentPuppy.name
  );

  return {
    ...currentPuppy,
    updates: [currentPuppy, previousUpdate].filter(Boolean),
  };
});
