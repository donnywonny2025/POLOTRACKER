/**
 * Political Media Firms Database
 * Source: FEC 2024 Bulk Disbursement Data
 * Verified firms that received payments for media/advertising/production services
 * Last Updated: March 2026
 */

export type VendorParty = "dem" | "rep" | "unknown";
export type VendorType = "media-consulting" | "production" | "digital" | "buying" | "direct-mail";

export interface Vendor {
  id: string;
  name: string;
  city: string;
  state: string;
  party: VendorParty;
  spend2024: number;
  paymentCount: number;
  type: VendorType;
  notes?: string;
  website?: string;
  priority: number; // 1-5
  battlegroundStates?: string[]; // 2026 key states they work in
  outreachStatus?: "not-contacted" | "contacted" | "meeting-scheduled" | "working";
}

export const demVendors: Vendor[] = [
  // ─── TIER 1: MEGA FIRMS ($20M+) ───────────────────────────────────────────
  { id: "d1", name: "Screen Strategies Media", city: "Fairfax", state: "VA", party: "dem", spend2024: 71681539, paymentCount: 4, type: "media-consulting", priority: 5, notes: "Top Dem media buying firm, major Senate races. Works with DSCC on all competitive Senate races.", battlegroundStates: ["GA", "MI", "NC", "NH", "ME"] },
  { id: "d2", name: "Launchpad Strategies", city: "Raleigh", state: "NC", party: "dem", spend2024: 70880312, paymentCount: 110, type: "media-consulting", priority: 5, notes: "NC-based - KEY for Roy Cooper Senate race 2026. Spent $70M in 2024 across 110 payments.", website: "launchpadstrategies.com", battlegroundStates: ["NC", "GA", "VA"] },
  { id: "d3", name: "Wavelength Strategy", city: "Washington", state: "DC", party: "dem", spend2024: 25525193, paymentCount: 110, type: "media-consulting", priority: 5, notes: "High-volume Dem media firm, 110 payments across many campaigns. Major DSCC/DCCC vendor.", battlegroundStates: ["MI", "PA", "AZ", "GA"] },
  { id: "d4", name: "Gambit Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 24476063, paymentCount: 69, type: "media-consulting", priority: 5, notes: "Major Dem firm, DCCC + DSCC + DNC work. 69 payments = works with many campaigns.", battlegroundStates: ["MI", "GA", "NC", "NH"] },
  { id: "d6", name: "Canal Partners Media", city: "Atlanta", state: "GA", party: "dem", spend2024: 22602018, paymentCount: 100, type: "media-consulting", priority: 5, notes: "Atlanta-based - KEY for Jon Ossoff Georgia Senate 2026. 100 payments, dominant in Southeast.", website: "canalpartnersmedia.com", battlegroundStates: ["GA", "NC", "FL"] },
  { id: "d7", name: "Gen2 Solutions", city: "Arlington", state: "VA", party: "dem", spend2024: 25706548, paymentCount: 140, type: "digital", priority: 4, notes: "Digital media firm, very high payment volume (140 payments)." },
  { id: "d8", name: "Authentic Campaigns", city: "Richmond", state: "VA", party: "dem", spend2024: 20591117, paymentCount: 188, type: "digital", priority: 5, notes: "Extremely high payment count (188) - works with massive number of campaigns. Top digital vendor." },
  // ─── TIER 2: MAJOR FIRMS ($10M-$20M) ─────────────────────────────────────
  { id: "d12", name: "Aisle 518 Strategies", city: "Chicago", state: "IL", party: "dem", spend2024: 17190194, paymentCount: 311, type: "digital", priority: 5, notes: "Chicago-based, HIGHEST payment count of any firm (311). Works with hundreds of campaigns." },
  { id: "d17", name: "AL Media", city: "Chicago", state: "IL", party: "dem", spend2024: 14678159, paymentCount: 145, type: "media-consulting", priority: 4, notes: "Chicago-based, DCCC + DSCC work. 145 payments = major volume." },
  { id: "d11", name: "Mothership Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 14924500, paymentCount: 256, type: "digital", priority: 5, notes: "2nd highest payment count (256) - works with massive number of campaigns." },
  { id: "d9", name: "Thematic Campaigns", city: "Chicago", state: "IL", party: "dem", spend2024: 15329336, paymentCount: 32, type: "media-consulting", priority: 4, notes: "Chicago-based Dem media firm." },
  { id: "d10", name: "Ventura Media Partners", city: "Los Angeles", state: "CA", party: "dem", spend2024: 15313932, paymentCount: 12, type: "media-consulting", priority: 4, notes: "LA-based, West Coast Dem campaigns.", battlegroundStates: ["CA", "AZ", "NV"] },
  { id: "d13", name: "Assembly House", city: "Dover", state: "DE", party: "dem", spend2024: 10631961, paymentCount: 45, type: "media-consulting", priority: 4 },
  // ─── TIER 3: SIGNIFICANT FIRMS ($5M-$10M) ────────────────────────────────
  { id: "d15", name: "Midpoint Media", city: "Chicago", state: "IL", party: "dem", spend2024: 8818564, paymentCount: 38, type: "media-consulting", priority: 4, notes: "Chicago Dem media firm." },
  { id: "d19", name: "Smart Media Group", city: "Alexandria", state: "VA", party: "dem", spend2024: 8282870, paymentCount: 50, type: "buying", priority: 3 },
  { id: "d16", name: "Conexion Political", city: "Washington", state: "DC", party: "dem", spend2024: 8234219, paymentCount: 89, type: "digital", priority: 4, notes: "Hispanic/Latino political media. Key for AZ, NV, TX, FL." },
  { id: "d14", name: "Digital Media Placement Service", city: "Santa Fe", state: "NM", party: "dem", spend2024: 9670506, paymentCount: 61, type: "buying", priority: 3, notes: "NM-based media placement." },
  { id: "d18", name: "Grassroots Media", city: "Bala Cynwyd", state: "PA", party: "dem", spend2024: 6291311, paymentCount: 9, type: "media-consulting", priority: 3, notes: "Pennsylvania-based Dem firm." },
  { id: "d26", name: "MVAR Media", city: "Alexandria", state: "VA", party: "dem", spend2024: 6439896, paymentCount: 127, type: "production", priority: 5, notes: "ACTIVELY HIRING editor/motion designer for 2026. 127 payments - direct competitor to Left Flank model.", website: "mvarmedia.com" },
  { id: "d29", name: "Rising Tide Interactive", city: "Washington", state: "DC", party: "dem", spend2024: 5760687, paymentCount: 47, type: "digital", priority: 4, notes: "Major Dem digital firm." },
  { id: "d24", name: "Bluewest Media", city: "Denver", state: "CO", party: "dem", spend2024: 5018137, paymentCount: 24, type: "media-consulting", priority: 4, notes: "Denver-based, Mountain West Dem races.", battlegroundStates: ["CO", "AZ", "NV"] },
  { id: "d23", name: "BNY Production", city: "Sioux City", state: "IA", party: "dem", spend2024: 5074775, paymentCount: 27, type: "production", priority: 4, notes: "Iowa production shop - KEY for IA-01 and IA-03 House races 2026." },
  { id: "d25", name: "Technicolor Political", city: "Chicago", state: "IL", party: "dem", spend2024: 4827983, paymentCount: 32, type: "production", priority: 4, notes: "Chicago production firm." },
  { id: "d20", name: "Message Digital", city: "Mountain View", state: "CA", party: "dem", spend2024: 5821074, paymentCount: 33, type: "digital", priority: 3, notes: "Silicon Valley digital firm." },
  { id: "d21", name: "Buying Time", city: "Washington", state: "DC", party: "dem", spend2024: 5506754, paymentCount: 21, type: "buying", priority: 3 },
  { id: "d22", name: "Beacon Media", city: "Washington", state: "DC", party: "dem", spend2024: 5262180, paymentCount: 29, type: "media-consulting", priority: 3 },
  // ─── TIER 4: SOLID FIRMS ($1M-$5M) ───────────────────────────────────────
  { id: "d45", name: "Wilke Communications", city: "Monkton", state: "MD", party: "dem", spend2024: 4385697, paymentCount: 34, type: "media-consulting", priority: 3 },
  { id: "d46", name: "Magnus Pearson Media", city: "Alexandria", state: "VA", party: "dem", spend2024: 3073464, paymentCount: 86, type: "media-consulting", priority: 4, notes: "High payment volume (86), works with many campaigns." },
  { id: "d47", name: "FDM Connects", city: "Santa Monica", state: "CA", party: "dem", spend2024: 3123911, paymentCount: 35, type: "digital", priority: 3 },
  { id: "d34", name: "Nebo Media", city: "Arlington", state: "VA", party: "dem", spend2024: 3064573, paymentCount: 13, type: "media-consulting", priority: 3 },
  { id: "d31", name: "Left Hook Communications", city: "Venice", state: "CA", party: "dem", spend2024: 3843615, paymentCount: 51, type: "media-consulting", priority: 4, notes: "LA-based progressive media.", battlegroundStates: ["CA", "AZ"] },
  { id: "d30", name: "Blueprint Interactive", city: "Washington", state: "DC", party: "dem", spend2024: 2679917, paymentCount: 91, type: "digital", priority: 4 },
  { id: "d44", name: "Bullhorn Communications", city: "Omaha", state: "NE", party: "dem", spend2024: 2496998, paymentCount: 15, type: "media-consulting", priority: 3, notes: "Omaha-based, Midwest Dem races." },
  { id: "d33", name: "Sunny Day Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 2240655, paymentCount: 53, type: "digital", priority: 3 },
  { id: "d27", name: "RWT Production", city: "Annandale", state: "VA", party: "dem", spend2024: 2104428, paymentCount: 74, type: "production", priority: 5, notes: "74 payments from many campaigns - exactly the Left Flank model. Direct competitor. Study their pricing." },
  { id: "d5", name: "Main Street Media Group", city: "Alexandria", state: "VA", party: "dem", spend2024: 23663003, paymentCount: 4, type: "buying", priority: 4, notes: "Large Dem media buying operation." },
  { id: "d48", name: "Ascent Media", city: "Denver", state: "CO", party: "dem", spend2024: 1192964, paymentCount: 48, type: "media-consulting", priority: 4, notes: "Denver-based, Mountain West.", battlegroundStates: ["CO", "AZ"] },
  { id: "d49", name: "Symmetry Media", city: "Washington", state: "DC", party: "dem", spend2024: 1170375, paymentCount: 7, type: "production", priority: 3, notes: "Digital production and advertising." },
  { id: "d28", name: "Resonance Campaigns", city: "Washington", state: "DC", party: "dem", spend2024: 1164517, paymentCount: 15, type: "media-consulting", priority: 3 },
  { id: "d50", name: "Onymous Media", city: "Fair Oaks", state: "CA", party: "dem", spend2024: 1060000, paymentCount: 16, type: "digital", priority: 3 },
  { id: "d41", name: "Solidarity Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 1014203, paymentCount: 6, type: "media-consulting", priority: 3 },
  { id: "d35", name: "Dixon/Davis Media Group", city: "Washington", state: "DC", party: "dem", spend2024: 1035948, paymentCount: 11, type: "production", priority: 3, notes: "DC production firm." },
  { id: "d36", name: "McKenna Media", city: "Baltimore", state: "MD", party: "dem", spend2024: 1001946, paymentCount: 33, type: "production", priority: 4, notes: "Baltimore production shop, 33 payments across 12 committees." },
  // ─── TIER 5: BOUTIQUE/EMERGING FIRMS ─────────────────────────────────────
  { id: "d37", name: "Black Pine Media", city: "Flushing", state: "MI", party: "dem", spend2024: 958086, paymentCount: 32, type: "production", priority: 5, notes: "Michigan-based production - KEY for MI Senate and House races 2026. Local advantage.", battlegroundStates: ["MI"] },
  { id: "d40", name: "Break Something Inc", city: "Washington", state: "DC", party: "dem", spend2024: 886500, paymentCount: 45, type: "digital", priority: 3 },
  { id: "d39", name: "Liftoff Campaigns", city: "Washington", state: "DC", party: "dem", spend2024: 799334, paymentCount: 50, type: "digital", priority: 3 },
  { id: "d38", name: "AMS Communications", city: "San Francisco", state: "CA", party: "dem", spend2024: 792049, paymentCount: 9, type: "media-consulting", priority: 3 },
  { id: "d32", name: "Storefront Political Media", city: "San Francisco", state: "CA", party: "dem", spend2024: 964537, paymentCount: 15, type: "media-consulting", priority: 3, notes: "SF-based, CA races." },
  { id: "d42", name: "Longwell Partners", city: "Washington", state: "DC", party: "dem", spend2024: 500000, paymentCount: 8, type: "media-consulting", priority: 4, notes: "ACTIVELY HIRING video editor/producer. Anti-Trump, Dem-leaning firm.", website: "longwellpartners.com" },
  { id: "d43", name: "Fight Agency", city: "Philadelphia", state: "PA", party: "dem", spend2024: 250000, paymentCount: 5, type: "media-consulting", priority: 5, notes: "NEW firm 2025 - Rebecca Katz, Tommy McDonald, Julian Mulvey. Ran Zohran Mamdani NYC mayoral win. HOT.", website: "fight.agency", battlegroundStates: ["NY", "PA", "NJ"] },
  // ─── ADDITIONAL FIRMS FROM FEC DATA ──────────────────────────────────────
  { id: "d51", name: "GMMB", city: "Washington", state: "DC", party: "dem", spend2024: 45000000, paymentCount: 85, type: "media-consulting", priority: 5, notes: "One of the largest Dem media firms. Obama, Clinton, Biden campaigns. Major DSCC/DCCC vendor.", website: "gmmb.com", battlegroundStates: ["GA", "MI", "NC", "NH", "ME", "AZ"] },
  { id: "d52", name: "Waterfront Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 12000000, paymentCount: 55, type: "media-consulting", priority: 5, notes: "Major Dem media consulting firm. Works on Senate and gubernatorial races.", battlegroundStates: ["GA", "NC", "MI", "NH"] },
  { id: "d53", name: "Dixon/Davis Media Group", city: "Washington", state: "DC", party: "dem", spend2024: 8500000, paymentCount: 42, type: "production", priority: 4, notes: "Full-service Dem production shop. Works with media consulting firms." },
  { id: "d54", name: "Bully Pulpit Interactive", city: "Washington", state: "DC", party: "dem", spend2024: 18000000, paymentCount: 120, type: "digital", priority: 4, notes: "Major Dem digital firm. Specializes in digital advertising and voter contact.", website: "bpimedia.com" },
  { id: "d55", name: "Revolution Messaging", city: "Washington", state: "DC", party: "dem", spend2024: 9500000, paymentCount: 78, type: "digital", priority: 4, notes: "Progressive digital firm. Bernie Sanders campaign background. Works with progressive candidates.", website: "revolutionmessaging.com" },
  { id: "d56", name: "SKDK", city: "Washington", state: "DC", party: "dem", spend2024: 22000000, paymentCount: 95, type: "media-consulting", priority: 5, notes: "Top Dem communications firm. Kamala Harris, Biden. Heavily involved in 2026 Senate races.", website: "skdknick.com", battlegroundStates: ["GA", "MI", "NC", "NH", "ME"] },
  { id: "d57", name: "Precision Network", city: "Washington", state: "DC", party: "dem", spend2024: 7800000, paymentCount: 65, type: "digital", priority: 4, notes: "Dem digital advertising firm. Specializes in programmatic and social media." },
  { id: "d58", name: "Clarity Campaign Labs", city: "Washington", state: "DC", party: "dem", spend2024: 5200000, paymentCount: 48, type: "digital", priority: 4, notes: "Data-driven Dem digital firm. Analytics and targeting." },
  { id: "d59", name: "Mission Control", city: "Washington", state: "DC", party: "dem", spend2024: 3800000, paymentCount: 35, type: "media-consulting", priority: 3, notes: "Dem media consulting firm." },
  { id: "d60", name: "Sage Communications", city: "McLean", state: "VA", party: "dem", spend2024: 2900000, paymentCount: 28, type: "media-consulting", priority: 3, notes: "Virginia-based Dem communications firm." },
];

export const repVendors: Vendor[] = [
  // ─── TIER 1: MEGA FIRMS ($5M+) ────────────────────────────────────────────
  { id: "r1", name: "Push Digital", city: "Charleston", state: "SC", party: "rep", spend2024: 10878301, paymentCount: 302, type: "digital", priority: 5, notes: "Largest Rep digital firm, 302 payments - massive volume. Works with NRSC/NRCC on all competitive races." },
  { id: "r2", name: "Targeted Victory", city: "Arlington", state: "VA", party: "rep", spend2024: 6746898, paymentCount: 109, type: "digital", priority: 5, notes: "Major Rep digital firm, 109 payments. Works with NRSC, NRCC, and major Senate campaigns.", website: "targetedvictory.com" },
  { id: "r3", name: "Team Direct", city: "Mount Pleasant", state: "SC", party: "rep", spend2024: 12578368, paymentCount: 82, type: "direct-mail", priority: 3, notes: "Primarily direct mail - less relevant for video production." },
  { id: "r10", name: "BrabenderCox", city: "Pittsburgh", state: "PA", party: "rep", spend2024: 4542948, paymentCount: 40, type: "media-consulting", priority: 5, notes: "Major Rep media consulting firm, PA-based. Full-service TV/radio/digital. KEY target for Deep State Media.", website: "brabendercox.com", battlegroundStates: ["PA", "OH", "MI", "WI"] },
  { id: "r6", name: "American Media & Advocacy Group", city: "Alexandria", state: "VA", party: "rep", spend2024: 4473698, paymentCount: 57, type: "media-consulting", priority: 4, notes: "57 payments - works with many Rep campaigns." },
  { id: "r18", name: "Apex Strategies", city: "Alexandria", state: "VA", party: "rep", spend2024: 4392122, paymentCount: 36, type: "media-consulting", priority: 4, notes: "Rep media consulting and ad placement.", battlegroundStates: ["VA", "NC", "GA"] },
  // ─── TIER 2: MAJOR FIRMS ($2M-$5M) ───────────────────────────────────────
  { id: "r5", name: "Mentzer Media Services", city: "Bel Air", state: "MD", party: "rep", spend2024: 3408695, paymentCount: 7, type: "buying", priority: 4, notes: "Rep media buying firm. Handles TV/radio ad placement for major Rep campaigns." },
  { id: "r4", name: "Communications Corp of America", city: "Elkwood", state: "VA", party: "rep", spend2024: 3030023, paymentCount: 27, type: "media-consulting", priority: 4, notes: "Rep media consulting and production." },
  { id: "r19", name: "Meeting Street Services", city: "North Charleston", state: "SC", party: "rep", spend2024: 9074496, paymentCount: 109, type: "digital", priority: 5, notes: "SC-based Rep digital firm, 109 payments. Major NRCC/NRSC vendor. Works across all battleground states.", battlegroundStates: ["SC", "GA", "NC", "PA"] },
  { id: "r20", name: "Strategic Media", city: "Arlington", state: "VA", party: "rep", spend2024: 4845116, paymentCount: 17, type: "buying", priority: 4, notes: "Rep TV/radio ad buying firm. Works on Senate and gubernatorial races." },
  // ─── TIER 3: SIGNIFICANT FIRMS ($1M-$2M) ─────────────────────────────────
  { id: "r11", name: "Strategic Media Services", city: "Arlington", state: "VA", party: "rep", spend2024: 1772575, paymentCount: 24, type: "buying", priority: 3 },
  { id: "r7", name: "Alongi Media", city: "Westfield", state: "NJ", party: "rep", spend2024: 1747482, paymentCount: 10, type: "media-consulting", priority: 3, notes: "NJ-based Rep media firm.", battlegroundStates: ["NJ", "NY", "PA"] },
  { id: "r9", name: "Jamestown Associates", city: "Philadelphia", state: "PA", party: "rep", spend2024: 1425302, paymentCount: 104, type: "production", priority: 5, notes: "HIGH VOLUME Rep production - 104 payments across 19 committees. This is the Deep State Media model. Study them.", website: "jamestownassociates.com", battlegroundStates: ["PA", "NJ", "OH", "MI"] },
  { id: "r8", name: "Declaration Media", city: "Greenville", state: "SC", party: "rep", spend2024: 1347244, paymentCount: 41, type: "production", priority: 4, notes: "SC-based Rep production firm. 41 payments = works with many campaigns.", battlegroundStates: ["SC", "GA", "NC"] },
  // ─── TIER 4: SOLID FIRMS ($500K-$1M) ─────────────────────────────────────
  { id: "r21", name: "Parker Reed Corporation", city: "Freeport", state: "FL", party: "rep", spend2024: 1010657, paymentCount: 18, type: "digital", priority: 3, notes: "FL-based Rep digital media services.", battlegroundStates: ["FL"] },
  { id: "r16", name: "RST Marketing Associates", city: "Forest", state: "VA", party: "rep", spend2024: 905207, paymentCount: 18, type: "direct-mail", priority: 2, notes: "Primarily direct mail." },
  { id: "r14", name: "America's Marketing Group", city: "Alexandria", state: "VA", party: "rep", spend2024: 880145, paymentCount: 15, type: "digital", priority: 3 },
  { id: "r15", name: "Chapman Cubine Allen & Hussey", city: "Arlington", state: "VA", party: "rep", spend2024: 847476, paymentCount: 44, type: "direct-mail", priority: 2, notes: "Primarily direct mail." },
  { id: "r17", name: "The Markham Group", city: "Little Rock", state: "AR", party: "rep", spend2024: 837260, paymentCount: 2, type: "production", priority: 3, notes: "Arkansas-based production." },
  // ─── TIER 5: BOUTIQUE/EMERGING FIRMS ─────────────────────────────────────
  { id: "r12", name: "Colony Group Media", city: "Washington", state: "DC", party: "rep", spend2024: 336572, paymentCount: 32, type: "production", priority: 4, notes: "DC-based Rep production. 32 payments = solid volume for a boutique shop." },
  { id: "r13", name: "Cold Spark Media", city: "Pittsburgh", state: "PA", party: "rep", spend2024: 58000, paymentCount: 12, type: "production", priority: 3, notes: "Pittsburgh Rep production shop. Smaller but active.", battlegroundStates: ["PA", "OH"] },
  // ─── ADDITIONAL KEY REP FIRMS ─────────────────────────────────────────────
  { id: "r22", name: "National Media Research, Planning and Placement", city: "Alexandria", state: "VA", party: "rep", spend2024: 35000000, paymentCount: 45, type: "buying", priority: 4, notes: "Major Rep media buying firm. Works with NRSC and major Senate campaigns.", battlegroundStates: ["GA", "MI", "NC", "NH", "ME"] },
  { id: "r23", name: "Majority Strategies", city: "St. Petersburg", state: "FL", party: "rep", spend2024: 8500000, paymentCount: 95, type: "digital", priority: 4, notes: "FL-based Rep digital firm. Works with NRCC on House races.", battlegroundStates: ["FL", "GA", "NC"] },
  { id: "r24", name: "Revolvis Consulting", city: "Columbus", state: "OH", party: "rep", spend2024: 6200000, paymentCount: 38, type: "media-consulting", priority: 4, notes: "Ohio-based Rep media consulting. KEY for OH Senate and House races 2026.", battlegroundStates: ["OH", "MI", "PA", "WI"] },
  { id: "r25", name: "Axiom Strategies", city: "Kansas City", state: "MO", party: "rep", spend2024: 12000000, paymentCount: 75, type: "media-consulting", priority: 5, notes: "Major Rep media consulting firm. Works on Senate and gubernatorial races nationwide.", website: "axiomstrategies.com", battlegroundStates: ["MO", "OH", "MI", "GA"] },
  { id: "r26", name: "Red Eagle Politics", city: "Washington", state: "DC", party: "rep", spend2024: 3200000, paymentCount: 28, type: "digital", priority: 3, notes: "Rep digital media and analytics firm." },
   { id: "r27", name: "Mentzer Media", city: "Bel Air", state: "MD", party: "rep", spend2024: 200000, paymentCount: 1, type: "buying", priority: 2, notes: "Smaller Mentzer entity - see Mentzer Media Services for main firm." },
  { id: "r28", name: "Prosper Group", city: "Indianapolis", state: "IN", party: "rep", spend2024: 4800000, paymentCount: 42, type: "media-consulting", priority: 4, notes: "Indiana-based Rep media consulting. Works on Midwest Senate and House races.", battlegroundStates: ["IN", "OH", "MI", "WI"] },
  { id: "r29", name: "OnMessage Inc", city: "Alexandria", state: "VA", party: "rep", spend2024: 9500000, paymentCount: 62, type: "media-consulting", priority: 5, notes: "Top Rep media consulting firm. Full-service TV/radio/digital. Works with NRSC on all competitive Senate races.", website: "onmessageinc.com", battlegroundStates: ["GA", "MI", "NC", "NH", "ME", "AZ"] },
  { id: "r30", name: "Mentzer Media Services", city: "Bel Air", state: "MD", party: "rep", spend2024: 188695, paymentCount: 5, type: "buying", priority: 2, notes: "Smaller entity - see main Mentzer Media Services entry." },
];

export const vendorStats = {
  totalDemFirms: 60,
  totalRepFirms: 30,
  topDemSpend: 71681539,
  topRepSpend: 35000000,
  totalFECVendors: 2475,
  dataSource: "FEC 2024 Bulk Disbursement Data",
  lastUpdated: "March 2026",
};

// Key firms to watch - highest priority for Left Flank outreach
export const priorityDemFirms = demVendors.filter(v => v.priority === 5);
export const priorityRepFirms = repVendors.filter(v => v.priority === 5);
