export type Offer = {
  id: string;
  title: string;
  business: string;
  category: string;
  city: string;
  original: number;
  price: number;
  discount: number;
  total: number;
  booked: number;
  status: "Active" | "Paused" | "Draft" | "Expired" | "Cancelled";
  endsIn: string;
  cover: string;
};

export const CATEGORIES = [
  "All",
  "Gym",
  "Salon",
  "Cafe",
  "Restaurant",
  "Clinic",
  "Coaching",
  "Turf",
  "Spa",
  "Coworking",
  "Activities",
] as const;

export const offers: Offer[] = [
  {
    id: "BK-2041",
    title: "Peak Hour Training · 60 min",
    business: "Northside Fitness",
    category: "Gym",
    city: "Bengaluru",
    original: 1200,
    price: 599,
    discount: 50,
    total: 24,
    booked: 19,
    status: "Active",
    endsIn: "02h 14m",
    cover: "img1",
  },
  {
    id: "BK-2042",
    title: "Weekend Brunch for Two",
    business: "Harbor Café",
    category: "Cafe",
    city: "Mumbai",
    original: 1800,
    price: 999,
    discount: 44,
    total: 30,
    booked: 12,
    status: "Active",
    endsIn: "06h 02m",
    cover: "img2",
  },
  {
    id: "BK-2043",
    title: "5-a-side Turf · Prime Hours",
    business: "City Turf Club",
    category: "Turf",
    city: "Pune",
    original: 3000,
    price: 1799,
    discount: 40,
    total: 8,
    booked: 8,
    status: "Active",
    endsIn: "00h 41m",
    cover: "img3",
  },
  {
    id: "BK-2044",
    title: "Therapeutic Massage · 75 min",
    business: "Serene Wellness",
    category: "Spa",
    city: "Delhi",
    original: 4500,
    price: 2499,
    discount: 44,
    total: 12,
    booked: 7,
    status: "Active",
    endsIn: "1d 04h",
    cover: "img4",
  },
  {
    id: "BK-2045",
    title: "Hair Spa + Cut Combo",
    business: "Studio Linea",
    category: "Salon",
    city: "Hyderabad",
    original: 2200,
    price: 1199,
    discount: 45,
    total: 16,
    booked: 4,
    status: "Active",
    endsIn: "11h 30m",
    cover: "img5",
  },
  {
    id: "BK-2046",
    title: "Trial Week · Strength Program",
    business: "Ironworks Gym",
    category: "Gym",
    city: "Bengaluru",
    original: 2500,
    price: 0,
    discount: 100,
    total: 40,
    booked: 36,
    status: "Active",
    endsIn: "03h 11m",
    cover: "img6",
  },
  {
    id: "BK-2047",
    title: "Chef's Tasting · 7 Courses",
    business: "Ember Kitchen",
    category: "Restaurant",
    city: "Goa",
    original: 4800,
    price: 2999,
    discount: 37,
    total: 20,
    booked: 15,
    status: "Paused",
    endsIn: "—",
    cover: "img7",
  },
  {
    id: "BK-2048",
    title: "Dental Cleaning + X-Ray",
    business: "Clear Smile Clinic",
    category: "Clinic",
    city: "Chennai",
    original: 2000,
    price: 999,
    discount: 50,
    total: 18,
    booked: 9,
    status: "Active",
    endsIn: "1d 12h",
    cover: "img8",
  },
];

export type Booking = {
  ref: string;
  customer: string;
  phone: string;
  offer: string;
  slot: string;
  people: number;
  total: number;
  status: "Pending" | "Confirmed" | "Cancelled" | "Completed" | "No Show";
  bookedAt: string;
};

export const bookings: Booking[] = [
  {
    ref: "BKR-9182",
    customer: "Jordan Kim",
    phone: "+91 98••• 12•••",
    offer: "Peak Hour Training",
    slot: "Today · 6:30 PM",
    people: 2,
    total: 1198,
    status: "Confirmed",
    bookedAt: "2m ago",
  },
  {
    ref: "BKR-9181",
    customer: "Rohan Mehta",
    phone: "+91 99••• 44•••",
    offer: "Trial Week · Strength",
    slot: "Today · 7:00 AM",
    people: 1,
    total: 0,
    status: "Confirmed",
    bookedAt: "8m ago",
  },
  {
    ref: "BKR-9180",
    customer: "Priya Iyer",
    phone: "+91 98••• 21•••",
    offer: "Weekend Brunch",
    slot: "Tomorrow · 11:00 AM",
    people: 2,
    total: 1998,
    status: "Pending",
    bookedAt: "12m ago",
  },
  {
    ref: "BKR-9179",
    customer: "Karan Patel",
    phone: "+91 97••• 03•••",
    offer: "5-a-side Turf",
    slot: "Today · 9:00 PM",
    people: 10,
    total: 1799,
    status: "Confirmed",
    bookedAt: "23m ago",
  },
  {
    ref: "BKR-9178",
    customer: "Meera Nair",
    phone: "+91 98••• 88•••",
    offer: "Therapeutic Massage",
    slot: "Sat · 4:00 PM",
    people: 1,
    total: 2499,
    status: "Pending",
    bookedAt: "31m ago",
  },
  {
    ref: "BKR-9177",
    customer: "Dev Khanna",
    phone: "+91 96••• 56•••",
    offer: "Hair Spa + Cut",
    slot: "Fri · 5:30 PM",
    people: 1,
    total: 1199,
    status: "Completed",
    bookedAt: "1h ago",
  },
  {
    ref: "BKR-9176",
    customer: "Saanvi Rao",
    phone: "+91 90••• 71•••",
    offer: "Chef's Tasting",
    slot: "Sat · 8:00 PM",
    people: 4,
    total: 11996,
    status: "Cancelled",
    bookedAt: "2h ago",
  },
  {
    ref: "BKR-9175",
    customer: "Vikram S.",
    phone: "+91 99••• 19•••",
    offer: "Dental Cleaning",
    slot: "Mon · 11:30 AM",
    people: 1,
    total: 999,
    status: "No Show",
    bookedAt: "3h ago",
  },
];

export const slots = [
  { time: "06:00", label: "Early Access Session", capacity: 16, booked: 14, status: "Available" },
  { time: "07:30", label: "Morning Block", capacity: 20, booked: 20, status: "Full" },
  { time: "10:00", label: "Midday Open Slot", capacity: 12, booked: 6, status: "Available" },
  { time: "12:00", label: "Lunch Hour Slot", capacity: 14, booked: 11, status: "Available" },
  { time: "17:00", label: "Afternoon Session", capacity: 16, booked: 13, status: "Available" },
  { time: "18:30", label: "Peak Hour Training", capacity: 24, booked: 19, status: "Available" },
  { time: "20:00", label: "Evening Block", capacity: 18, booked: 18, status: "Full" },
  { time: "21:30", label: "Late Session", capacity: 12, booked: 0, status: "Closed" },
] as const;
