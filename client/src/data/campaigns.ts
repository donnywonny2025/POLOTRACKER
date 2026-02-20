export interface Contact {
  name: string;
  title: string;
  email?: string;
  phone?: string;
}

export interface Campaign {
  id: string;
  name: string;
  race: string;
  state: string;
  tier: 1 | 2 | 3;
  priority: number; // 1-5 stars
  contacts: Contact[];
  website?: string;
  status: string;
  intel?: string;
  category: 'senate' | 'house' | 'ballot';
}

export const campaigns: Campaign[] = [
  // TIER 1 - SENATE
  {
    id: 'cooper-nc',
    name: 'Roy Cooper',
    race: 'NC Senate',
    state: 'NC',
    tier: 1,
    priority: 5,
    category: 'senate',
    contacts: [
      {
        name: 'Jeff Allen',
        title: 'Campaign Manager',
        email: 'ATIILGHMAN@ROYCOOPER.COM',
        phone: '(919) 673-7115'
      }
    ],
    website: 'roycooper.com',
    status: 'NO media vendor hired yet - PERFECT TIMING',
    intel: 'Jeff Allen managed Josh Stein\'s winning 2024 gubernatorial campaign. Confirmed via FEC payments $14K.'
  },
  {
    id: 'pappas-nh',
    name: 'Chris Pappas',
    race: 'NH Senate',
    state: 'NH',
    tier: 1,
    priority: 5,
    category: 'senate',
    contacts: [
      {
        name: 'Rachel Petri',
        title: 'Campaign Manager',
        email: 'rachel@chrispappas.org',
        phone: '(202) 225-5456'
      },
      {
        name: 'Kristen Morris',
        title: 'Communications Director',
        email: 'kristen@chrispappas.org'
      }
    ],
    website: 'chrispappas.org',
    status: 'Leading in polls, TOP PRIORITY Senate race',
    intel: 'Pete Buttigieg campaigned with him today. $1.8M raised, 92% under $100. Congressional: (603) 285-4300'
  },
  {
    id: 'brown-oh',
    name: 'Sherrod Brown',
    race: 'OH Senate',
    state: 'OH',
    tier: 1,
    priority: 5,
    category: 'senate',
    contacts: [
      {
        name: 'Communications Director',
        title: 'HIRING NOW',
        email: 'info@sherrodbrown.com',
        phone: '(614) 469-2083'
      }
    ],
    website: 'sherrodbrown.com',
    status: 'HIRING Communications Director NOW (Arena.run)',
    intel: 'Special election, leading fundraising vs. Jon Husted. Ohio AFL-CIO endorsed. Toll-free: 1-888-896-6446'
  },
  {
    id: 'mills-me',
    name: 'Janet Mills',
    race: 'ME Senate',
    state: 'ME',
    tier: 1,
    priority: 3,
    category: 'senate',
    contacts: [
      {
        name: 'Press Contact',
        title: 'Campaign',
        email: 'press@janetmills.com'
      }
    ],
    website: 'janetmills.com',
    status: 'Building team',
    intel: 'Was interviewing campaign managers Sept 2025. Mailing: 110 Marginal Way, #722, Portland, ME 04101'
  },
  // TIER 1 - HOUSE
  {
    id: 'moskowitz-fl',
    name: 'Jared Moskowitz',
    race: 'FL-23 House',
    state: 'FL',
    tier: 1,
    priority: 4,
    category: 'house',
    contacts: [
      {
        name: 'Morgan Cintron',
        title: 'Chief of Staff',
        phone: '(202) 225-7931'
      }
    ],
    status: 'HIRING Communications Director NOW',
    intel: 'GOP target, actively hiring comms director. Job posted.'
  },
  {
    id: 'kaptur-oh',
    name: 'Marcy Kaptur',
    race: 'OH-09 House',
    state: 'OH',
    tier: 1,
    priority: 3,
    category: 'house',
    contacts: [
      {
        name: 'Toledo Office',
        title: 'Congressional Office',
        phone: '(419) 259-7500'
      }
    ],
    website: 'marcykaptur.com',
    status: 'DCCC Frontline',
    intel: 'Longest-serving woman in House history. DC: (202) 225-4146'
  },
  // TIER 1 - BALLOT
  {
    id: 'abortion-mo',
    name: 'Abortion Action Missouri',
    race: 'Reproductive Rights',
    state: 'MO',
    tier: 1,
    priority: 4,
    category: 'ballot',
    contacts: [
      {
        name: 'Paige Spindler-Richardson',
        title: 'Communications Manager',
        email: 'paige@abortionactionmissouri.org'
      }
    ],
    website: 'abortionactionmissouri.org',
    status: 'Active campaign organization',
    intel: 'Reproductive rights ballot measure campaign'
  },
  // TIER 2 - SENATE
  {
    id: 'elsayed-mi',
    name: 'Abdul El-Sayed',
    race: 'MI Senate',
    state: 'MI',
    tier: 2,
    priority: 3,
    category: 'senate',
    contacts: [
      {
        name: 'Alia Kapasi',
        title: 'Campaign Manager',
        email: 'alia@abdulforsenate.com'
      },
      {
        name: 'Roxie Richner',
        title: 'Communications Director',
        email: 'press@abdulforsenate.com'
      }
    ],
    website: 'abdulforsenate.com',
    status: 'Test emails',
    intel: '@aliakapasi on Twitter'
  },
  {
    id: 'stevens-mi',
    name: 'Haley Stevens',
    race: 'MI Senate',
    state: 'MI',
    tier: 2,
    priority: 3,
    category: 'senate',
    contacts: [
      {
        name: 'Sam Knapke',
        title: 'Campaign Manager',
        email: 'sam@haleyformi.com'
      },
      {
        name: 'Arik Wolk',
        title: 'Communications Director',
        email: 'arik@haleyformi.com'
      }
    ],
    website: 'haleyformi.com',
    status: 'Test emails',
    intel: 'Congressional: Sam.Knapke2@mail.house.gov'
  },
  {
    id: 'mcmorrow-mi',
    name: 'Mallory McMorrow',
    race: 'MI Senate',
    state: 'MI',
    tier: 2,
    priority: 2,
    category: 'senate',
    contacts: [
      {
        name: 'Emily Collins',
        title: 'Chief of Staff',
        email: 'emily@mallorymcmorrow.com'
      }
    ],
    status: 'Test emails',
    intel: 'Already has RWT Production ($360K) - major video vendor'
  },
  {
    id: 'talarico-tx',
    name: 'James Talarico',
    race: 'TX Senate',
    state: 'TX',
    tier: 2,
    priority: 5,
    category: 'senate',
    contacts: [
      {
        name: 'Seth Krasne',
        title: 'Campaign Manager',
        email: 'seth@talarico.org'
      },
      {
        name: 'Antonio Esparza',
        title: 'Communications Director',
        email: 'antonio@talarico.org'
      }
    ],
    status: 'Test emails',
    intel: 'Raised $2.5M in 24 hours - HOT campaign with momentum'
  },
  {
    id: 'crockett-tx',
    name: 'Jasmine Crockett',
    race: 'TX Senate',
    state: 'TX',
    tier: 2,
    priority: 3,
    category: 'senate',
    contacts: [
      {
        name: 'Kendyll Locke',
        title: 'Deputy Chief of Staff',
        email: 'kendyll.locke@mail.house.gov',
        phone: '(214) 922-8885'
      }
    ],
    status: 'Test emails',
    intel: 'District phone available'
  },
  // TIER 2 - HOUSE (sample of key ones)
  {
    id: 'gray-ca',
    name: 'Adam Gray',
    race: 'CA-13 House',
    state: 'CA',
    tier: 2,
    priority: 3,
    category: 'house',
    contacts: [
      {
        name: 'Ben Rodriguez',
        title: 'Chief of Staff',
        email: 'ben.rodriguez@mail.house.gov',
        phone: '(202) 225-4540'
      }
    ],
    status: 'DCCC Frontline',
    intel: 'Trump endorsed opponent'
  },
  {
    id: 'lee-nv',
    name: 'Susie Lee',
    race: 'NV-03 House',
    state: 'NV',
    tier: 2,
    priority: 4,
    category: 'house',
    contacts: [
      {
        name: 'Campaign Contact',
        title: 'Press',
        email: 'press@susieleeforcongress.com',
        phone: '(202) 225-3252'
      }
    ],
    status: 'DCCC Frontline',
    intel: '"One of most competitive House seats in country", Trump-won district. Leading 2026 fundraising.'
  },
  {
    id: 'horsford-nv',
    name: 'Steven Horsford',
    race: 'NV-04 House',
    state: 'NV',
    tier: 2,
    priority: 4,
    category: 'house',
    contacts: [
      {
        name: 'Director of Communications',
        title: 'HIRING NOW',
        email: 'info@horsfordforcongress.com',
        phone: '(202) 225-9894'
      }
    ],
    status: 'HIRING Director of Communications NOW',
    intel: 'Job posted on House Democrats Resume Bank. Largest/most diverse NV district.'
  },
  {
    id: 'gillen-ny',
    name: 'Laura Gillen',
    race: 'NY-04 House',
    state: 'NY',
    tier: 2,
    priority: 4,
    category: 'house',
    contacts: [
      {
        name: 'Sarah Carlson',
        title: 'Chief of Staff'
      },
      {
        name: 'Eric Vinton Jones',
        title: 'Communications Director',
        email: 'press@lauragillen.com',
        phone: '(202) 225-7896'
      }
    ],
    website: 'lauragillen.com',
    status: 'DCCC Frontline',
    intel: 'Freshman, Long Island'
  },
  {
    id: 'vindman-va',
    name: 'Eugene Vindman',
    race: 'VA-07 House',
    state: 'VA',
    tier: 2,
    priority: 5,
    category: 'house',
    contacts: [
      {
        name: 'Amanda Farnan',
        title: 'Communications Director',
        email: 'amanda.farnan@mail.house.gov',
        phone: '(202) 225-2815'
      }
    ],
    website: 'vindmanforcongress.com',
    status: 'DCCC Frontline',
    intel: 'Brother of Alex Vindman (FL Senate candidate) - family connection opportunity'
  },
  // TIER 2 - BALLOT
  {
    id: 'nevada-q6',
    name: 'Nevada Question 6',
    race: 'Abortion Rights Initiative',
    state: 'NV',
    tier: 2,
    priority: 5,
    category: 'ballot',
    contacts: [
      {
        name: 'Planned Parenthood Votes Nevada',
        title: 'Lead Organization',
        email: 'nevada@plannedparenthoodaction.org'
      }
    ],
    website: 'plannedparenthoodaction.org/planned-parenthood-votes-nevada',
    status: 'Test emails',
    intel: 'Passed first vote Nov 2024, needs second vote Nov 2026. Major ballot measure in swing state, coordinated with 3 NV House races.'
  },
  {
    id: 'idaho-ballot',
    name: 'Back to Idaho',
    race: 'Reproductive Freedom Act',
    state: 'ID',
    tier: 2,
    priority: 4,
    category: 'ballot',
    contacts: [
      {
        name: 'Idahoans United for Women & Families',
        title: 'Lead Organization',
        email: 'press@backtoidaho.com'
      }
    ],
    website: 'backtoidaho.com',
    status: 'Signature gathering',
    intel: 'Need 70,700 signatures by April 30, 2026. Ballot vote Nov 2026. Nearly 1,000 volunteers.'
  }
];

export const stats = {
  totalCampaigns: 29,
  confirmedContacts: 7,
  staffNamesWithEmails: 18,
  congressionalOffices: 15,
  lastUpdated: 'February 20, 2026'
};

export const insights = {
  timingOpportunities: [
    'Roy Cooper, Chris Pappas, Sherrod Brown - Haven\'t hired media vendors yet',
    'Jared Moskowitz, Steven Horsford, Sherrod Brown - Actively hiring communications staff NOW',
    'James Talarico - Hot momentum campaign, raised $2.5M in 24 hours',
    'Nevada (4 campaigns) - Coordinated campaigns = volume opportunity',
    'Vindman brothers - Eugene (VA House) & Alex (FL Senate) = family connection'
  ],
  competition: [
    'RWT Production: $62.6M in 2024 from DCCC, DSCC, DNC',
    'GMMB: Major media firm',
    'Most campaigns in EARLY STAGE - haven\'t locked in vendors yet'
  ],
  bestOpportunities: [
    'Senate races - Bigger budgets, more media spending',
    'DCCC Frontline - Get DCCC resources, coordinated spending',
    'Ballot measures - Need 30-second spots for awareness/education',
    'Nevada cluster - 4 campaigns = volume discount opportunity',
    'Campaigns hiring NOW - Moskowitz, Horsford, Brown'
  ]
};
