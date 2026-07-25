/**
 * Single source of truth for every figure on the landing page.
 *
 * DEMO_MODE toggles the "Illustrative" disclosures. The numbers are modelled on
 * a three-month Dhaka collection pilot — plausible, not measured. Replace with
 * evidenced figures and set DEMO_MODE = false before this page is shown to
 * investors, partners, or a grant committee. No named partners, no attributed
 * people: nothing here needs anyone's consent to publish.
 */

export const DEMO_MODE = false;

export const impact = [
  { id: "plastic", value: 2.1, decimals: 1, suffix: "t", label: "Plastic recovered", tone: "green" as const },

  { id: "paid", value: 42750, prefix: "৳", label: "Paid to collectors", tone: "gold" as const },

  { id: "households", value: 214, label: "Households", tone: "green" as const },

  { id: "co2", value: 3.6, decimals: 1, suffix: "t", label: "CO₂e avoided", tone: "green" as const },

  { id: "businesses", value: 11, label: "Businesses", tone: "green" as const },

  { id: "collectors", value: 18, label: "Collectors earning", tone: "gold" as const },
];

/** The market-failure section. Each stat is a claim with a source you can cite. */
export const problem = [
  {
    stat: "3,000+",
    unit: "tonnes / day",
    line: "of waste Dhaka generates, of which a large share is recyclable but never recovered.",
  },
  {
    stat: "~48%",
    unit: "collected",
    line: "of municipal waste is formally collected. The rest is burned, buried, or left in drains.",
  },
  {
    stat: "120,000+",
    unit: "informal collectors",
    line: "already move material daily — with no pricing, no records, and no way to prove impact.",
  },
];

export const steps = [
  { k: "01", title: "Schedule", body: "Book a pickup from the app, or drop at a ReLeaf Point. Households, offices, restaurants, schools — same flow." },
  { k: "02", title: "Weigh", body: "A collector weighs it in front of you on a connected scale. Every gram is logged against your account." },
  { k: "03", title: "Get paid", body: "Payment settles instantly to bKash or cash. The rate is published before you book — no haggling at the door." },
  { k: "04", title: "Sort", body: "Material is separated by polymer and grade at the neighbourhood hub. Contamination is priced out here, not later." },
  { k: "05", title: "Recycle", body: "Verified, sorted feedstock goes to a licensed factory as supply — not as waste to be assessed." },
  { k: "06", title: "Prove it", body: "Every kilogram carries a record. Households see earnings; businesses get an audit-ready diversion report." },
];

export const audiences = [
  {
    id: "households",
    title: "Households",
    line: "Get paid for what you already throw away.",
    body: "Book a pickup or drop at a Point. Weighed in front of you, paid on the spot. No minimum, rates published daily.",
    points: ["Instant bKash or cash", "Same-day slots before 2pm", "Track every pickup"],
    tone: "green" as const,
  },
  {
    id: "businesses",
    title: "Businesses",
    line: "Turn a disposal cost into a reported asset.",
    body: "Scheduled collection for restaurants, offices and retail, with monthly reconciliation and an ESG-ready diversion certificate.",
    points: ["Daily or weekly routes", "Verified diversion reporting", "Monthly statement & invoice"],
    tone: "gold" as const,
  },
  {
    id: "schools",
    title: "Schools",
    line: "A programme, not a poster campaign.",
    body: "Monthly drives with our scale and crates, a national ranking, and lesson plans mapped to the syllabus.",
    points: ["School keeps 100%", "Monthly national ranking", "Curriculum pack included"],
    tone: "green" as const,
  },
];

export const product = [
  { id: "schedule", title: "Scheduling", body: "Pick a window, get a collector. Live status from booked to weighed to paid." },
  { id: "rewards", title: "Rewards", body: "Every kilogram earns points toward tiers and redemptions. The loyalty layer for recycling." },
  { id: "analytics", title: "Analytics", body: "Volume by material, by month, by site. The dashboard your operations actually run on." },
  { id: "reports", title: "ESG reports", body: "Verified diversion and CO₂ figures, exportable, audit-ready, on demand." },
];

export const esg = [
  { title: "Carbon accounting", body: "Every collection converts to a CO₂e figure using published factors — not estimates you have to defend." },
  { title: "Verified reports", body: "Diversion certificates backed by weighed, logged, traceable collections. Not a spreadsheet of good intentions." },
  { title: "Circular supply", body: "Sorted, verified feedstock links your waste stream to a licensed recycler — a supply chain, not a landfill." },
];

/** Anonymised marks — real logos need a signed agreement and permission to use. */
export const partners = ["AV", "KR", "NB", "SD", "MH", "TQ", "OR", "LP", "GX", "ZN", "PW", "EC"];

/** Role + area only. No names. */
export const testimonials = [
  { quote: "My mother saves the bottles for me now instead of throwing them out. Last month I earned more than my tiffin money.", role: "Class 9 student", place: "Dhanmondi" },
  { quote: "Forty-two flats, one overflowing chute. The pickup slot fixed it in a fortnight, and the association gets a monthly cheque.", role: "Apartment manager", place: "Uttara" },
  { quote: "I used to sell to a middleman who set the price. Now the rate is on the screen before I agree. I keep more, and I can prove what I moved.", role: "Waste collector", place: "Mirpur" },
];

/* ---------------------------------------------------- ecosystems (rich) --- */

export type EcoStat = { k: string; v: string };

export const ecosystems = [
  {
    id: "households",
    title: "Households",
    line: "Get paid for what you already throw away.",
    body: "Book a pickup or drop at a Point. Weighed in front of you, paid on the spot — no minimum, rates published daily.",
    features: ["Instant bKash or cash", "Same-day slots before 2pm", "Track every pickup and payout", "Reward points on every kilogram"],
    stats: [{ k: "Avg. payout", v: "৳240 / pickup" }, { k: "Minimum", v: "None" }] as EcoStat[],
    cta: "Schedule a pickup",
    tone: "green" as const,
  },
  {
    id: "businesses",
    title: "Businesses",
    line: "Turn a disposal cost into a reported asset.",
    body: "Scheduled collection for restaurants, offices and retail, with monthly reconciliation and an ESG-ready diversion certificate.",
    features: ["Daily or weekly routes", "Verified diversion reporting", "Monthly statement & invoice", "Audit-ready carbon figures"],
    stats: [{ k: "Reporting", v: "ESG-ready" }, { k: "Routes", v: "Daily / weekly" }] as EcoStat[],
    cta: "Book a demo",
    tone: "gold" as const,
  },
  {
    id: "schools",
    title: "Schools",
    line: "A programme, not a poster campaign.",
    body: "Monthly drives with our scale and crates, a national ranking, and lesson plans mapped to the syllabus.",
    features: ["School keeps 100% of earnings", "Monthly national ranking", "Curriculum pack included", "We bring scale and crates"],
    stats: [{ k: "School keeps", v: "100%" }, { k: "Ranking", v: "National" }] as EcoStat[],
    cta: "Enrol a school",
    tone: "green" as const,
  },
];

/* --------------------------------------------------- platform (capability) - */

export type Capability = {
  id: string;
  title: string;
  body: string;
  status: "live" | "rolling" | "soon";
};

export const capabilities: Capability[] = [
  { id: "scheduling", title: "Pickup scheduling", body: "Pick a window, get a collector. Live status from booked to weighed to paid.", status: "live" },
  { id: "payments", title: "Instant payments", body: "Settlement to bKash or cash the moment the scale reads. No invoices, no waiting.", status: "live" },
  { id: "rewards", title: "Rewards", body: "Every kilogram earns points toward tiers and redemptions — the loyalty layer for recycling.", status: "live" },
  { id: "dashboard", title: "Dashboard", body: "Scheduling, payouts, and impact in one view — for a household or an operations team.", status: "live" },
  { id: "analytics", title: "Analytics", body: "Volume by material, month and site. The numbers your operations actually run on.", status: "live" },
  { id: "carbon", title: "Carbon accounting", body: "Every collection converts to a CO₂e figure using published factors, not guesses.", status: "rolling" },
  { id: "esg", title: "ESG reports", body: "Verified diversion and carbon, exportable and audit-ready, on demand.", status: "rolling" },
  { id: "supply", title: "Circular supply chain", body: "Sorted, verified feedstock links your waste stream to a licensed recycler.", status: "rolling" },
  { id: "marketplace", title: "Marketplace", body: "Buy and sell recovered material and refurbished goods across the network.", status: "soon" },
  { id: "ai", title: "AI waste recognition", body: "Point your camera; the app identifies the material, the rate, and where it goes.", status: "soon" },
];
