export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: 'best-independent-tennis-shows-podcasts',
    title: 'The Best Independent Tennis Shows and Podcasts You\'re Not Watching',
    excerpt: 'Beyond ESPN and the Tennis Channel, a thriving world of independent tennis media has been building for years. Here\'s where to find the coverage that actually goes deep.',
    author: 'IndieTennis',
    publishedDate: '2025-04-28',
    category: 'Media',
    tags: ['independent tennis', 'tennis podcasts', 'tennis shows', 'tennis media', 'indie tennis'],
    metaTitle: 'Best Independent Tennis Shows and Podcasts | IndieTennis',
    metaDescription: 'Discover the best independent tennis shows and podcasts beyond the mainstream broadcast. In-depth analysis, resort coverage, wellness tips, and quick technique guides from the IndieTennis network.',
    content: `The mainstream tennis broadcast does many things well. The major tournaments are covered in depth, the production values are high, and the commentary is professional. What it rarely does is go beyond the surface.

Independent tennis media fills that gap. Over the past decade and a half, a growing number of creators — analysts, coaches, former players, and passionate fans — have built shows and podcasts that cover the game the way serious fans actually want it covered. More tactical depth. More history. More honest conversation about what the tour looks like from the inside.

IndieTennis was built on that premise. Since 2008, we have been the home of independent tennis coverage — and these are the shows that define what independent tennis media can be.

## Inside Tennis with The Koz

The flagship of the IndieTennis network, Inside Tennis with The Koz is the standard for long-form tennis analysis. Each episode goes deep on a player, a match, or a technique — not the thirty-second highlight version, but the full breakdown.

The episode on Roger Federer's legacy runs forty-two minutes. That is not an accident. The Koz believes that if a player spent twenty years developing a game, you owe the discussion more than a listicle. The result is coverage that ages well: you can watch an episode from years ago and still find something useful.

What makes The Koz format work is the combination of genuine knowledge and genuine curiosity. There is no gap-filling, no padding, no manufactured controversy. Just a deep reader of the game sharing what they have learned over a long career of watching it closely.

If you follow tennis seriously and you are not watching Inside Tennis with The Koz, you are missing the best analysis available outside the major broadcast networks.

## The Resort Channel

Independent tennis media does not have to be analytical to be valuable. The Resort Channel proved that when it launched, and it has been the most distinctive show on the IndieTennis network ever since.

The premise is simple: visit the world's most significant tennis resort destinations and document what you find. The execution is anything but simple. The Resort Channel has covered facilities in Hawaii, the French Riviera, the Dominican Republic, and the Swiss Alps — not as travel brochures, but as genuine explorations of what tennis culture looks like in different parts of the world.

What the show captures that mainstream coverage misses entirely is the social dimension of tennis. The game is not only played at Wimbledon and Roland Garros. It is played at resorts and clubs and community courts around the world, by people whose relationship with the game is shaped as much by where they play as by who they watch.

The Resort Channel is the only show that takes that world seriously.

## Tennis Today with Dr. Jack Ditty

The conversation about what keeps players on the court — and what takes them off it — rarely gets the airtime it deserves. Tennis Today with Dr. Jack Ditty addresses that directly.

Dr. Ditty brings a sports medicine perspective to tennis coverage that is genuinely rare. The episodes on injury prevention and nutrition for peak performance are not generic wellness content — they are specific to the demands of competitive tennis, built from real clinical experience with players at every level.

The mental game episode is particularly worth your time. Sports psychology in tennis gets talked about constantly in broadcast coverage — "she needs to stay focused," "he has to believe in himself" — but almost never examined. Dr. Ditty actually examines it. The tools he describes are real, they are specific, and they are applicable whether you play at a professional level or a club level.

If you are a player, not just a fan, Tennis Today belongs in your regular rotation.

## Kwik Tips

Not every tennis problem requires forty minutes to solve. Kwik Tips was built for the player who wants one specific thing to work on, explained clearly and concisely, with enough detail to actually implement it.

The episodes are short by design — four to five minutes — and they are dense. The backhand slice episode covers grip adjustment, contact point, and follow-through in the time it takes most shows to finish their introduction.

What makes Kwik Tips work as a format is the constraint. When you have four minutes, you cannot waste them. Every second has to carry information. The result is some of the most efficient tennis instruction available anywhere — not just in independent media, but across the board.

---

## Why Independent Tennis Media Matters

The major broadcast networks cover tennis where the cameras and the sponsors already are. That means the four Grand Slams get exhaustive coverage. It means the top ten players get exhaustive coverage. It means everything else gets thirty seconds of highlights or nothing at all.

Independent tennis media covers the rest. The tactical evolution of the game that does not fit into a broadcast window. The players who never quite broke through but had something worth watching. The culture of the game at the club and resort level. The physical and mental demands that the broadcast treats as color commentary rather than substance.

That is what IndieTennis has been building since 2008. A network where the game gets covered the way it deserves — in depth, without deadline pressure, by people who actually love it.

The shows are here. The archive is deep. Start anywhere.`,
  },
];
