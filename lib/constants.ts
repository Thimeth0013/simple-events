export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Conf 2026",
    image: "/images/event1.png",
    slug: "react-conf-2026",
    location: "Las Vegas, USA",
    date: "2026-05-15",
    time: "9:00 AM - 5:00 PM"
  },
  {
    title: "PyCon US 2026",
    image: "/images/event2.png",
    slug: "pycon-us-2026",
    location: "Pittsburgh, USA",
    date: "2026-05-17",
    time: "8:00 AM - 6:00 PM"
  },
  {
    title: "Google I/O 2026",
    image: "/images/event3.png",
    slug: "google-io-2026",
    location: "Mountain View, USA",
    date: "2026-05-20",
    time: "10:00 AM - 4:00 PM"
  },
  {
    title: "Microsoft Build 2026",
    image: "/images/event4.png",
    slug: "microsoft-build-2026",
    location: "Seattle, USA",
    date: "2026-05-22",
    time: "9:00 AM - 5:00 PM"
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event5.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-06-01",
    time: "9:00 AM - 6:00 PM"
  },
  {
    title: "Apple WWDC 2026",
    image: "/images/event6.png",
    slug: "apple-wwdc-2026",
    location: "Cupertino, USA",
    date: "2026-06-10",
    time: "10:00 AM - 3:00 PM"
  }
];