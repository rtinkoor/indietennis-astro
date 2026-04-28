export type Episode = {
  id: string;
  title: string;
  description: string;
  duration: string;
  date: string;
};

export const episodesByShow: Record<string, Episode[]> = {
  "inside-tennis-with-the-koz": [
    {
      id: "ep-101",
      title: "Roger Federer: The Maestro's Legacy",
      description: "An in-depth look at Federer's career highlights and his impact on modern tennis. The Koz breaks down the Swiss master's technique and mental game.",
      duration: "42:15",
      date: "March 15, 2008",
    },
    {
      id: "ep-102",
      title: "Wimbledon's Greatest Matches",
      description: "Reliving the most thrilling moments from Centre Court. From Borg vs McEnroe to modern classics, we analyze what made these matches legendary.",
      duration: "38:20",
      date: "March 8, 2008",
    },
    {
      id: "ep-103",
      title: "The Rise of Rafael Nadal",
      description: "How the Spanish sensation conquered clay courts and beyond. The Koz examines Nadal's unique playing style and competitive fire.",
      duration: "45:30",
      date: "March 1, 2008",
    },
    {
      id: "ep-104",
      title: "Tennis Technique: The Perfect Serve",
      description: "Breaking down the mechanics of professional serves. Learn the secrets behind 130+ mph serves from the tour's biggest hitters.",
      duration: "36:45",
      date: "February 22, 2008",
    },
  ],
  "the-resort-channel": [
    {
      id: "ep-201",
      title: "Paradise Tennis: Maui Grand Resort",
      description: "Tour the luxurious tennis facilities at Hawaii's premier resort. Featuring oceanside courts and world-class instruction programs.",
      duration: "28:30",
      date: "March 12, 2008",
    },
    {
      id: "ep-202",
      title: "French Riviera Tennis Getaway",
      description: "Explore the exclusive tennis clubs along the Mediterranean coast. Where European elegance meets championship-level play.",
      duration: "32:15",
      date: "March 5, 2008",
    },
    {
      id: "ep-203",
      title: "Caribbean Clay: Dominican Tennis Resorts",
      description: "Discover hidden gem tennis destinations in the Caribbean. Perfect weather, pristine courts, and island hospitality.",
      duration: "30:00",
      date: "February 26, 2008",
    },
    {
      id: "ep-204",
      title: "Alpine Tennis: Swiss Mountain Resorts",
      description: "High-altitude tennis at Switzerland's most prestigious mountain retreats. Breathtaking views and world-class facilities.",
      duration: "35:20",
      date: "February 19, 2008",
    },
  ],
  "tennis-today-with-dr-jack-ditty": [
    {
      id: "ep-301",
      title: "Preventing Tennis Injuries",
      description: "Dr. Jack Ditty discusses common tennis injuries and prevention strategies. Essential knowledge for players at every level.",
      duration: "25:45",
      date: "March 14, 2008",
    },
    {
      id: "ep-302",
      title: "Nutrition for Peak Performance",
      description: "Fueling your body for competitive tennis. Learn what the pros eat before, during, and after matches.",
      duration: "27:30",
      date: "March 7, 2008",
    },
    {
      id: "ep-303",
      title: "Mental Game Mastery",
      description: "Sports psychology techniques used by top players. Dr. Ditty reveals how to stay focused under pressure.",
      duration: "29:15",
      date: "February 28, 2008",
    },
    {
      id: "ep-304",
      title: "Training for Tennis: Fitness Tips",
      description: "Building strength, speed, and endurance for tennis. A complete conditioning program from a sports medicine expert.",
      duration: "33:00",
      date: "February 21, 2008",
    },
  ],
  "kwik-tips": [
    {
      id: "ep-401",
      title: "Quick Fix: Backhand Slice",
      description: "Master the backhand slice in under 5 minutes. Simple adjustments that will transform your defensive game.",
      duration: "4:30",
      date: "March 16, 2008",
    },
    {
      id: "ep-402",
      title: "Serve Power Boost",
      description: "Three easy changes to add 10+ mph to your serve. Instant results with proper technique tweaks.",
      duration: "3:45",
      date: "March 9, 2008",
    },
    {
      id: "ep-403",
      title: "Net Game Confidence",
      description: "Overcome your fear of the net with these quick drills. Transform into an aggressive net player.",
      duration: "5:00",
      date: "March 2, 2008",
    },
    {
      id: "ep-404",
      title: "Return of Serve Secrets",
      description: "Read your opponent's serve and position yourself perfectly. The quick tip that changed my return game.",
      duration: "4:15",
      date: "February 24, 2008",
    },
  ],
};
