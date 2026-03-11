/**
 * Political Media Firms Database
 * Source: FEC 2024 Bulk Disbursement Data
 * Verified firms that received payments for media/advertising/production services
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
}

export const demVendors: Vendor[] = [
  { id: "d1", name: "Screen Strategies Media", city: "Fairfax", state: "VA", party: "dem", spend2024: 71681539, paymentCount: 4, type: "media-consulting", priority: 5, notes: "Top Dem media buying firm, major Senate races" },
  { id: "d2", name: "Launchpad Strategies", city: "Raleigh", state: "NC", party: "dem", spend2024: 70880312, paymentCount: 110, type: "media-consulting", priority: 5, notes: "NC-based - KEY for Roy Cooper Senate race 2026", website: "launchpadstrategies.com" },
  { id: "d3", name: "Wavelength Strategy", city: "Washington", state: "DC", party: "dem", spend2024: 25525193, paymentCount: 110, type: "media-consulting", priority: 5, notes: "High-volume Dem media firm, 110 payments across many campaigns" },
  { id: "d4", name: "Gambit Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 24476063, paymentCount: 69, type: "media-consulting", priority: 5, notes: "Major Dem firm, DCCC + DSCC + DNC work" },
  { id: "d5", name: "Main Street Media Group", city: "Alexandria", state: "VA", party: "dem", spend2024: 23663003, paymentCount: 4, type: "buying", priority: 4, notes: "Large Dem media buying operation" },
  { id: "d6", name: "Canal Partners Media", city: "Atlanta", state: "GA", party: "dem", spend2024: 22602018, paymentCount: 100, type: "media-consulting", priority: 5, notes: "Atlanta-based - KEY for Jon Ossoff Georgia Senate 2026", website: "canalpartnersmedia.com" },
  { id: "d7", name: "Gen2 Solutions", city: "Arlington", state: "VA", party: "dem", spend2024: 25706548, paymentCount: 140, type: "digital", priority: 4, notes: "Digital media firm, very high payment volume" },
  { id: "d8", name: "Authentic Campaigns", city: "Richmond", state: "VA", party: "dem", spend2024: 20591117, paymentCount: 188, type: "digital", priority: 5, notes: "Extremely high payment count - works with many campaigns" },
  { id: "d9", name: "Thematic Campaigns", city: "Chicago", state: "IL", party: "dem", spend2024: 15329336, paymentCount: 32, type: "media-consulting", priority: 4, notes: "Chicago-based Dem media firm" },
  { id: "d10", name: "Ventura Media Partners", city: "Los Angeles", state: "CA", party: "dem", spend2024: 15313932, paymentCount: 12, type: "media-consulting", priority: 4, notes: "LA-based, West Coast Dem campaigns" },
  { id: "d11", name: "Mothership Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 14924500, paymentCount: 256, type: "digital", priority: 5, notes: "Highest payment count - works with massive number of campaigns" },
  { id: "d12", name: "Aisle 518 Strategies", city: "Chicago", state: "IL", party: "dem", spend2024: 17190194, paymentCount: 311, type: "digital", priority: 5, notes: "Chicago-based, extremely high volume digital firm" },
  { id: "d13", name: "Assembly House", city: "Dover", state: "DE", party: "dem", spend2024: 10631961, paymentCount: 45, type: "media-consulting", priority: 4 },
  { id: "d14", name: "Digital Media Placement Service", city: "Santa Fe", state: "NM", party: "dem", spend2024: 9670506, paymentCount: 61, type: "buying", priority: 3, notes: "NM-based media placement" },
  { id: "d15", name: "Midpoint Media", city: "Chicago", state: "IL", party: "dem", spend2024: 8818564, paymentCount: 38, type: "media-consulting", priority: 4, notes: "Chicago Dem media firm" },
  { id: "d16", name: "Conexion Political", city: "Washington", state: "DC", party: "dem", spend2024: 8234219, paymentCount: 89, type: "digital", priority: 4, notes: "Hispanic/Latino political media" },
  { id: "d17", name: "AL Media", city: "Chicago", state: "IL", party: "dem", spend2024: 14678159, paymentCount: 145, type: "media-consulting", priority: 4, notes: "Chicago-based, DCCC + DSCC work" },
  { id: "d18", name: "Grassroots Media", city: "Bala Cynwyd", state: "PA", party: "dem", spend2024: 6291311, paymentCount: 9, type: "media-consulting", priority: 3, notes: "Pennsylvania-based Dem firm" },
  { id: "d19", name: "Smart Media Group", city: "Alexandria", state: "VA", party: "dem", spend2024: 8282870, paymentCount: 50, type: "buying", priority: 3 },
  { id: "d20", name: "Message Digital", city: "Mountain View", state: "CA", party: "dem", spend2024: 5821074, paymentCount: 33, type: "digital", priority: 3, notes: "Silicon Valley digital firm" },
  { id: "d21", name: "Buying Time", city: "Washington", state: "DC", party: "dem", spend2024: 5506754, paymentCount: 21, type: "buying", priority: 3 },
  { id: "d22", name: "Beacon Media", city: "Washington", state: "DC", party: "dem", spend2024: 5262180, paymentCount: 29, type: "media-consulting", priority: 3 },
  { id: "d23", name: "BNY Production", city: "Sioux City", state: "IA", party: "dem", spend2024: 5074775, paymentCount: 27, type: "production", priority: 4, notes: "Iowa production shop - KEY for IA-01 and IA-03 House races 2026" },
  { id: "d24", name: "Bluewest Media", city: "Denver", state: "CO", party: "dem", spend2024: 5018137, paymentCount: 24, type: "media-consulting", priority: 4, notes: "Denver-based, Mountain West Dem races" },
  { id: "d25", name: "Technicolor Political", city: "Chicago", state: "IL", party: "dem", spend2024: 4827983, paymentCount: 32, type: "production", priority: 4, notes: "Chicago production firm" },
  { id: "d26", name: "MVAR Media", city: "Alexandria", state: "VA", party: "dem", spend2024: 6439896, paymentCount: 127, type: "production", priority: 5, notes: "ACTIVELY HIRING editor/motion designer for 2026 - direct competitor to Left Flank model", website: "mvarmedia.com" },
  { id: "d27", name: "RWT Production", city: "Annandale", state: "VA", party: "dem", spend2024: 2104428, paymentCount: 74, type: "production", priority: 5, notes: "74 payments from many campaigns - exactly the Left Flank model. Direct comp." },
  { id: "d28", name: "Resonance Campaigns", city: "Washington", state: "DC", party: "dem", spend2024: 1164517, paymentCount: 15, type: "media-consulting", priority: 3 },
  { id: "d29", name: "Rising Tide Interactive", city: "Washington", state: "DC", party: "dem", spend2024: 5760687, paymentCount: 47, type: "digital", priority: 4, notes: "Major Dem digital firm" },
  { id: "d30", name: "Blueprint Interactive", city: "Washington", state: "DC", party: "dem", spend2024: 2679917, paymentCount: 91, type: "digital", priority: 4 },
  { id: "d31", name: "Left Hook Communications", city: "Venice", state: "CA", party: "dem", spend2024: 3843615, paymentCount: 51, type: "media-consulting", priority: 4, notes: "LA-based progressive media" },
  { id: "d32", name: "Storefront Political Media", city: "San Francisco", state: "CA", party: "dem", spend2024: 964537, paymentCount: 15, type: "media-consulting", priority: 3, notes: "SF-based, CA races" },
  { id: "d33", name: "Sunny Day Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 2240655, paymentCount: 53, type: "digital", priority: 3 },
  { id: "d34", name: "Nebo Media", city: "Arlington", state: "VA", party: "dem", spend2024: 3064573, paymentCount: 13, type: "media-consulting", priority: 3 },
  { id: "d35", name: "Dixon/Davis Media Group", city: "Washington", state: "DC", party: "dem", spend2024: 1035948, paymentCount: 11, type: "production", priority: 3, notes: "DC production firm" },
  { id: "d36", name: "McKenna Media", city: "Baltimore", state: "MD", party: "dem", spend2024: 1001946, paymentCount: 33, type: "production", priority: 4, notes: "Baltimore production shop, 33 payments across 12 committees" },
  { id: "d37", name: "Black Pine Media", city: "Flushing", state: "MI", party: "dem", spend2024: 958086, paymentCount: 32, type: "production", priority: 5, notes: "Michigan-based production - KEY for MI Senate and House races 2026" },
  { id: "d38", name: "AMS Communications", city: "San Francisco", state: "CA", party: "dem", spend2024: 792049, paymentCount: 9, type: "media-consulting", priority: 3 },
  { id: "d39", name: "Liftoff Campaigns", city: "Washington", state: "DC", party: "dem", spend2024: 799334, paymentCount: 50, type: "digital", priority: 3 },
  { id: "d40", name: "Break Something Inc", city: "Washington", state: "DC", party: "dem", spend2024: 886500, paymentCount: 45, type: "digital", priority: 3 },
  { id: "d41", name: "Solidarity Strategies", city: "Washington", state: "DC", party: "dem", spend2024: 1014203, paymentCount: 6, type: "media-consulting", priority: 3 },
  { id: "d42", name: "Longwell Partners", city: "Washington", state: "DC", party: "dem", spend2024: 500000, paymentCount: 8, type: "media-consulting", priority: 4, notes: "ACTIVELY HIRING video editor/producer - anti-Trump Dem-leaning firm", website: "longwellpartners.com" },
  { id: "d43", name: "Fight Agency", city: "Philadelphia", state: "PA", party: "dem", spend2024: 250000, paymentCount: 5, type: "media-consulting", priority: 5, notes: "NEW firm 2025 - Rebecca Katz, Tommy McDonald, Julian Mulvey. Ran Zohran Mamdani NYC mayoral win", website: "fight.agency" },
  { id: "d44", name: "Bullhorn Communications", city: "Omaha", state: "NE", party: "dem", spend2024: 2496998, paymentCount: 15, type: "media-consulting", priority: 3, notes: "Omaha-based, Midwest Dem races" },
  { id: "d45", name: "Wilke Communications", city: "Monkton", state: "MD", party: "dem", spend2024: 4385697, paymentCount: 34, type: "media-consulting", priority: 3 },
  { id: "d46", name: "Magnus Pearson Media", city: "Alexandria", state: "VA", party: "dem", spend2024: 3073464, paymentCount: 86, type: "media-consulting", priority: 4, notes: "High payment volume, works with many campaigns" },
  { id: "d47", name: "FDM Connects", city: "Santa Monica", state: "CA", party: "dem", spend2024: 3123911, paymentCount: 35, type: "digital", priority: 3 },
  { id: "d48", name: "Ascent Media", city: "Denver", state: "CO", party: "dem", spend2024: 1192964, paymentCount: 48, type: "media-consulting", priority: 4, notes: "Denver-based, Mountain West" },
  { id: "d49", name: "Symmetry Media", city: "Washington", state: "DC", party: "dem", spend2024: 1170375, paymentCount: 7, type: "production", priority: 3, notes: "Digital production and advertising" },
  { id: "d50", name: "Onymous Media", city: "Fair Oaks", state: "CA", party: "dem", spend2024: 1060000, paymentCount: 16, type: "digital", priority: 3 },
];

export const repVendors: Vendor[] = [
  { id: "r1", name: "Push Digital", city: "Charleston", state: "SC", party: "rep", spend2024: 10878301, paymentCount: 302, type: "digital", priority: 5, notes: "Largest Rep digital firm, 302 payments - massive volume" },
  { id: "r2", name: "Targeted Victory", city: "Arlington", state: "VA", party: "rep", spend2024: 6746898, paymentCount: 109, type: "digital", priority: 5, notes: "Major Rep digital firm" },
  { id: "r3", name: "Team Direct", city: "Mount Pleasant", state: "SC", party: "rep", spend2024: 12578368, paymentCount: 82, type: "direct-mail", priority: 3, notes: "Primarily direct mail" },
  { id: "r4", name: "Communications Corp of America", city: "Elkwood", state: "VA", party: "rep", spend2024: 3030023, paymentCount: 27, type: "media-consulting", priority: 4, notes: "Rep media consulting" },
  { id: "r5", name: "Mentzer Media Services", city: "Bel Air", state: "MD", party: "rep", spend2024: 3408695, paymentCount: 7, type: "buying", priority: 4, notes: "Rep media buying firm" },
  { id: "r6", name: "American Media & Advocacy Group", city: "Alexandria", state: "VA", party: "rep", spend2024: 4473698, paymentCount: 57, type: "media-consulting", priority: 4 },
  { id: "r7", name: "Alongi Media", city: "Westfield", state: "NJ", party: "rep", spend2024: 1747482, paymentCount: 10, type: "media-consulting", priority: 3 },
  { id: "r8", name: "Declaration Media", city: "Greenville", state: "SC", party: "rep", spend2024: 1347244, paymentCount: 41, type: "production", priority: 4, notes: "SC-based Rep production firm" },
  { id: "r9", name: "Jamestown Associates", city: "Philadelphia", state: "PA", party: "rep", spend2024: 1425302, paymentCount: 104, type: "production", priority: 5, notes: "High volume Rep production - 104 payments across 19 committees. Similar model to what Left Flank wants to be" },
  { id: "r10", name: "BrabenderCox", city: "Pittsburgh", state: "PA", party: "rep", spend2024: 4542948, paymentCount: 40, type: "media-consulting", priority: 4, notes: "Major Rep media consulting firm, PA-based" },
  { id: "r11", name: "Strategic Media Services", city: "Arlington", state: "VA", party: "rep", spend2024: 1772575, paymentCount: 24, type: "buying", priority: 3 },
  { id: "r12", name: "Colony Group Media", city: "Washington", state: "DC", party: "rep", spend2024: 336572, paymentCount: 32, type: "production", priority: 4, notes: "DC-based Rep production" },
  { id: "r13", name: "Cold Spark Media", city: "Pittsburgh", state: "PA", party: "rep", spend2024: 58000, paymentCount: 12, type: "production", priority: 3, notes: "Pittsburgh Rep production shop" },
  { id: "r14", name: "America's Marketing Group", city: "Alexandria", state: "VA", party: "rep", spend2024: 880145, paymentCount: 15, type: "digital", priority: 3 },
  { id: "r15", name: "Chapman Cubine Allen & Hussey", city: "Arlington", state: "VA", party: "rep", spend2024: 847476, paymentCount: 44, type: "direct-mail", priority: 2, notes: "Primarily direct mail" },
  { id: "r16", name: "RST Marketing Associates", city: "Forest", state: "VA", party: "rep", spend2024: 905207, paymentCount: 18, type: "direct-mail", priority: 2 },
  { id: "r17", name: "The Markham Group", city: "Little Rock", state: "AR", party: "rep", spend2024: 837260, paymentCount: 2, type: "production", priority: 3, notes: "Arkansas-based production" },
  { id: "r18", name: "Apex Strategies", city: "Alexandria", state: "VA", party: "rep", spend2024: 4392122, paymentCount: 36, type: "media-consulting", priority: 4 },
];

export const vendorStats = {
  totalDemFirms: 119,
  totalRepFirms: 38,
  topDemSpend: 71681539,
  topRepSpend: 12578368,
  totalFECVendors: 2475,
  dataSource: "FEC 2024 Bulk Disbursement Data",
  lastUpdated: "March 2026",
};

// Key firms to watch - highest priority for Left Flank outreach
export const priorityDemFirms = demVendors.filter(v => v.priority === 5);
export const priorityRepFirms = repVendors.filter(v => v.priority >= 4);
