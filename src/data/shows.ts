export type Show = {
  id: string;
  titleLines: string[];
  href: string;
  bgColor: string;
  textColor: string;
};

export const shows: Show[] = [
  {
    id: "inside-tennis-with-the-koz",
    titleLines: ["INSIDE TENNIS", "WITH", "THE KOZ"],
    href: "/show/inside-tennis-with-the-koz",
    bgColor: "hsl(215, 70%, 55%)",
    textColor: "hsl(0, 0%, 100%)",
  },
  {
    id: "the-resort-channel",
    titleLines: ["THE RESORT", "CHANNEL"],
    href: "/show/the-resort-channel",
    bgColor: "hsl(80, 75%, 55%)",
    textColor: "hsl(0, 0%, 15%)",
  },
  {
    id: "tennis-today-with-dr-jack-ditty",
    titleLines: ["TENNIS TODAY", "WITH", "DR. JACK DITTY"],
    href: "/show/tennis-today-with-dr-jack-ditty",
    bgColor: "hsl(40, 25%, 70%)",
    textColor: "hsl(0, 0%, 10%)",
  },
  {
    id: "kwik-tips",
    titleLines: ["KWIK", "TIPS"],
    href: "/show/kwik-tips",
    bgColor: "hsl(35, 85%, 60%)",
    textColor: "hsl(0, 0%, 100%)",
  },
];
