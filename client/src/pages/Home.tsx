/**
 * 2026 Campaign Contacts & Vendor Dashboard
 * Design Philosophy: Professional Political Data Interface
 * - Clean, data-dense layout optimized for quick scanning
 * - Color-coded priority system for instant recognition
 * - Card-based architecture with subtle depth
 * - Two main sections: Campaigns (direct outreach) + Vendors (media firms)
 */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { campaigns, insights, stats, type Campaign } from "@/data/campaigns";
import { demVendors, repVendors, vendorStats, type Vendor } from "@/data/vendors";
import { Building2, DollarSign, Mail, MapPin, Phone, Search, Star, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

const BATTLEGROUND_STATES = ["GA", "MI", "NC", "NH", "ME", "AZ", "PA", "OH", "NV", "WI", "FL", "NY", "CA"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [vendorSearch, setVendorSearch] = useState("");
  const [vendorParty, setVendorParty] = useState<string>("dem");
  const [vendorTypeFilter, setVendorTypeFilter] = useState<string>("all");
  const [vendorStateFilter, setVendorStateFilter] = useState<string>("all");
  const [mainTab, setMainTab] = useState("campaigns");

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.race.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.contacts.some(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      selectedCategory === "all" ||
      campaign.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const tier1Campaigns = filteredCampaigns.filter(c => c.tier === 1);
  const tier2Campaigns = filteredCampaigns.filter(c => c.tier === 2);

  const vendorList = vendorParty === "dem" ? demVendors : repVendors;
  const filteredVendors = vendorList.filter(v => {
    const matchesSearch =
      v.name.toLowerCase().includes(vendorSearch.toLowerCase()) ||
      v.city.toLowerCase().includes(vendorSearch.toLowerCase()) ||
      v.state.toLowerCase().includes(vendorSearch.toLowerCase()) ||
      (v.notes || "").toLowerCase().includes(vendorSearch.toLowerCase());
    const matchesType = vendorTypeFilter === "all" || v.type === vendorTypeFilter;
    const matchesState =
      vendorStateFilter === "all" ||
      (v.battlegroundStates || []).includes(vendorStateFilter) ||
      v.state === vendorStateFilter;
    return matchesSearch && matchesType && matchesState;
  });

  const priorityVendors = vendorList.filter(v => v.priority === 5);

  const getPriorityColor = (priority: number) => {
    if (priority === 5) return "text-amber-500";
    if (priority >= 4) return "text-blue-500";
    if (priority >= 3) return "text-slate-500";
    return "text-slate-400";
  };

  const getTierBadge = (tier: number) => {
    if (tier === 1) return <Badge className="bg-emerald-500 text-white">Tier 1: Ready Now</Badge>;
    if (tier === 2) return <Badge variant="outline" className="border-blue-500 text-blue-600">Tier 2: Test Emails</Badge>;
    return <Badge variant="outline">Tier 3: Research</Badge>;
  };

  const formatSpend = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
    return `$${n}`;
  };

  const getVendorTypeBadge = (type: Vendor["type"]) => {
    const map: Record<Vendor["type"], { label: string; className: string }> = {
      "media-consulting": { label: "Media Consulting", className: "bg-purple-100 text-purple-800 border-purple-200" },
      "production": { label: "Production", className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
      "digital": { label: "Digital", className: "bg-blue-100 text-blue-800 border-blue-200" },
      "buying": { label: "Media Buying", className: "bg-amber-100 text-amber-800 border-amber-200" },
      "direct-mail": { label: "Direct Mail", className: "bg-slate-100 text-slate-700 border-slate-200" },
    };
    const { label, className } = map[type];
    return <Badge variant="outline" className={className}>{label}</Badge>;
  };

  const totalVendorCount = vendorStats.totalDemFirms + vendorStats.totalRepFirms;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container py-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">Left Flank / Deep State Media</h1>
                  <p className="text-slate-500 text-xs">2026 Election Cycle Outreach Intelligence</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center">
                <div className="font-bold text-slate-900">{stats.totalCampaigns}</div>
                <div className="text-slate-500 text-xs">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-slate-900">{totalVendorCount}</div>
                <div className="text-slate-500 text-xs">Media Firms</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-emerald-600">$10.8B</div>
                <div className="text-slate-500 text-xs">2026 Est. Ad Spend</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-6">
        {/* Main Navigation Tabs */}
        <Tabs value={mainTab} onValueChange={setMainTab}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="campaigns" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="vendors" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Media Firms
            </TabsTrigger>
          </TabsList>

          {/* ===================== CAMPAIGNS TAB ===================== */}
          <TabsContent value="campaigns" className="space-y-6 mt-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-emerald-900">Confirmed Contacts</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-emerald-600">{stats.confirmedContacts}</div>
                  <p className="text-xs text-emerald-700 mt-1">Ready today</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-blue-900">Staff + Emails</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-blue-600">{stats.staffNamesWithEmails}</div>
                  <p className="text-xs text-blue-700 mt-1">Test addresses</p>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-slate-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-slate-900">Direct Phones</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-slate-600">{stats.congressionalOffices}+</div>
                  <p className="text-xs text-slate-700 mt-1">Congressional offices</p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-amber-900">Hiring Now</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-amber-600">3</div>
                  <p className="text-xs text-amber-700 mt-1">Open comms roles</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Insights */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  Key Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-xs text-slate-900 mb-2 uppercase tracking-wide">Timing</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {insights.timingOpportunities.map((opp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">•</span>
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-900 mb-2 uppercase tracking-wide">Best Targets</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    {insights.bestOpportunities.slice(0, 3).map((opp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 mt-0.5">•</span>
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search campaigns, contacts, or states..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="senate">Senate</TabsTrigger>
                  <TabsTrigger value="house">House</TabsTrigger>
                  <TabsTrigger value="ballot">Ballot</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Campaigns List */}
            <div className="space-y-6">
              {tier1Campaigns.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-bold text-slate-900">Tier 1: Ready to Contact</h2>
                    <Badge className="bg-emerald-500 text-white">{tier1Campaigns.length}</Badge>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {tier1Campaigns.map((campaign) => (
                      <CampaignCard key={campaign.id} campaign={campaign} getPriorityColor={getPriorityColor} getTierBadge={getTierBadge} />
                    ))}
                  </div>
                </div>
              )}
              {tier2Campaigns.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-bold text-slate-900">Tier 2: Test Emails Available</h2>
                    <Badge variant="outline" className="border-blue-500 text-blue-600">{tier2Campaigns.length}</Badge>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {tier2Campaigns.map((campaign) => (
                      <CampaignCard key={campaign.id} campaign={campaign} getPriorityColor={getPriorityColor} getTierBadge={getTierBadge} />
                    ))}
                  </div>
                </div>
              )}
              {filteredCampaigns.length === 0 && (
                <Card className="p-12 text-center">
                  <p className="text-slate-500">No campaigns match your search criteria.</p>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* ===================== VENDORS TAB ===================== */}
          <TabsContent value="vendors" className="space-y-6 mt-6">
            {/* Vendor Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-blue-900">Dem Media Firms</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-blue-600">{demVendors.length}</div>
                  <p className="text-xs text-blue-700 mt-1">Left Flank targets</p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-red-900">Rep Media Firms</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-red-600">{repVendors.length}</div>
                  <p className="text-xs text-red-700 mt-1">Deep State targets</p>
                </CardContent>
              </Card>
              <Card className="border-emerald-200 bg-emerald-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-emerald-900">2026 Est. Ad Spend</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-emerald-600">$10.8B</div>
                  <p className="text-xs text-emerald-700 mt-1">Record midterm cycle</p>
                </CardContent>
              </Card>
              <Card className="border-amber-200 bg-amber-50/50">
                <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-xs font-medium text-amber-900">FEC Vendors Found</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <div className="text-3xl font-bold text-amber-600">{vendorStats.totalFECVendors.toLocaleString()}</div>
                  <p className="text-xs text-amber-700 mt-1">2024 disbursement data</p>
                </CardContent>
              </Card>
            </div>

            {/* Strategy Note */}
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <DollarSign className="h-4 w-4 text-purple-600" />
                  The Strategy: Firms First, Campaigns Second
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                <p><strong>These firms are your primary targets</strong> — not the campaigns directly. Media consulting firms subcontract production work to shops like Left Flank and Deep State Media. One firm relationship = multiple campaigns worth of work.</p>
                <p><strong>The pitch:</strong> "We saw you worked heavily in Georgia and Michigan in 2024. Those are two of the biggest races in 2026. We're available for the cycle." — This is a warm, informed pitch, not a cold call.</p>
                <p><strong>The model:</strong> Become the go-to remote production shop for 2–3 firms. They call you when they're buried in October. You deliver fast, broadcast-ready, on deadline.</p>
                <p className="text-purple-700 font-medium text-xs">Source: FEC 2024 Bulk Disbursement Data ({vendorStats.totalFECVendors.toLocaleString()} vendors analyzed) • Updated {vendorStats.lastUpdated}</p>
              </CardContent>
            </Card>

            {/* Priority Firms Section */}
            {priorityVendors.length > 0 && vendorSearch === "" && vendorTypeFilter === "all" && vendorStateFilter === "all" && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-lg font-bold text-slate-900">
                    {vendorParty === "dem" ? "🔵 Left Flank Priority Targets" : "🔴 Deep State Media Priority Targets"}
                  </h2>
                  <Badge className="bg-amber-500 text-white">{priorityVendors.length} firms</Badge>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
                  {priorityVendors.map((vendor, idx) => (
                    <VendorCard key={vendor.id} vendor={vendor} rank={idx + 1} formatSpend={formatSpend} getPriorityColor={getPriorityColor} getVendorTypeBadge={getVendorTypeBadge} highlight />
                  ))}
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-base font-semibold text-slate-700 mb-4">All {vendorParty === "dem" ? "Democratic" : "Republican"} Firms</h3>
                </div>
              </div>
            )}

            {/* Search + Filters */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search firms by name, city, state, or notes..."
                    value={vendorSearch}
                    onChange={(e) => setVendorSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Tabs value={vendorParty} onValueChange={(v) => { setVendorParty(v); setVendorStateFilter("all"); setVendorTypeFilter("all"); }} className="w-full sm:w-auto">
                  <TabsList>
                    <TabsTrigger value="dem" className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                      Dem ({demVendors.length})
                    </TabsTrigger>
                    <TabsTrigger value="rep" className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                      Rep ({repVendors.length})
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Secondary Filters */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-slate-500 font-medium">Filter by type:</span>
                {(["all", "media-consulting", "production", "digital", "buying"] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setVendorTypeFilter(t)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      vendorTypeFilter === t
                        ? "bg-slate-800 text-white border-slate-800"
                        : "bg-white text-slate-600 border-slate-300 hover:border-slate-500"
                    }`}
                  >
                    {t === "all" ? "All Types" : t === "media-consulting" ? "Media Consulting" : t === "production" ? "Production" : t === "digital" ? "Digital" : "Media Buying"}
                  </button>
                ))}
                <span className="text-xs text-slate-400 mx-1">|</span>
                <span className="text-xs text-slate-500 font-medium">Battleground:</span>
                <button
                  onClick={() => setVendorStateFilter("all")}
                  className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                    vendorStateFilter === "all"
                      ? "bg-slate-800 text-white border-slate-800"
                      : "bg-white text-slate-600 border-slate-300 hover:border-slate-500"
                  }`}
                >
                  All States
                </button>
                {BATTLEGROUND_STATES.map(s => (
                  <button
                    key={s}
                    onClick={() => setVendorStateFilter(s)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      vendorStateFilter === s
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-600 border-slate-300 hover:border-blue-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-slate-500">
              Showing {filteredVendors.length} of {vendorList.length} firms
              {vendorTypeFilter !== "all" && ` • Type: ${vendorTypeFilter}`}
              {vendorStateFilter !== "all" && ` • Battleground: ${vendorStateFilter}`}
            </div>

            {/* Vendor List */}
            <div className="space-y-3">
              {filteredVendors.map((vendor, idx) => (
                <VendorCard
                  key={vendor.id}
                  vendor={vendor}
                  rank={idx + 1}
                  formatSpend={formatSpend}
                  getPriorityColor={getPriorityColor}
                  getVendorTypeBadge={getVendorTypeBadge}
                />
              ))}
              {filteredVendors.length === 0 && (
                <Card className="p-12 text-center">
                  <p className="text-slate-500">No vendors match your filters. Try adjusting the search or filters above.</p>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-white mt-16 py-6">
        <div className="container text-center text-sm text-slate-500">
          <p>Left Flank / Deep State Media • 2026 Election Cycle Intelligence • Data: FEC Bulk Disbursements + Direct Research</p>
        </div>
      </footer>
    </div>
  );
}

function CampaignCard({
  campaign,
  getPriorityColor,
  getTierBadge
}: {
  campaign: Campaign;
  getPriorityColor: (priority: number) => string;
  getTierBadge: (tier: number) => React.ReactElement;
}) {
  const categoryIcon = {
    senate: <Building2 className="h-4 w-4" />,
    house: <Users className="h-4 w-4" />,
    ballot: <TrendingUp className="h-4 w-4" />
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-slate-200">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {categoryIcon[campaign.category]}
              <CardTitle className="text-lg">{campaign.name}</CardTitle>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: campaign.priority }).map((_, i) => (
                  <Star key={i} className={`h-3 w-3 fill-current ${getPriorityColor(campaign.priority)}`} />
                ))}
              </div>
            </div>
            <CardDescription className="text-sm">
              {campaign.race} • {campaign.state}
            </CardDescription>
          </div>
          {getTierBadge(campaign.tier)}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {campaign.contacts.map((contact, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="font-semibold text-sm text-slate-900">{contact.name}</div>
              <div className="text-xs text-slate-600 mb-2">{contact.title}</div>
              <div className="space-y-1">
                {contact.email && (
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-slate-400" />
                    <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                      {contact.email}
                    </a>
                  </div>
                )}
                {contact.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-slate-400" />
                    <a href={`tel:${contact.phone}`} className="text-slate-700">
                      {contact.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {campaign.status && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-xs font-semibold text-blue-900 mb-1">STATUS</div>
            <div className="text-sm text-blue-800">{campaign.status}</div>
          </div>
        )}
        {campaign.intel && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-xs font-semibold text-amber-900 mb-1">INTEL</div>
            <div className="text-sm text-amber-800">{campaign.intel}</div>
          </div>
        )}
        {campaign.website && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={`https://${campaign.website}`} target="_blank" rel="noopener noreferrer">
              Visit Website →
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function VendorCard({
  vendor,
  rank,
  formatSpend,
  getPriorityColor,
  getVendorTypeBadge,
  highlight = false,
}: {
  vendor: Vendor;
  rank: number;
  formatSpend: (n: number) => string;
  getPriorityColor: (priority: number) => string;
  getVendorTypeBadge: (type: Vendor["type"]) => React.ReactElement;
  highlight?: boolean;
}) {
  const isHighPriority = vendor.priority >= 5;
  const cardClass = highlight
    ? "border-amber-300 bg-gradient-to-br from-amber-50/40 to-white shadow-sm"
    : isHighPriority
    ? "border-amber-200 bg-amber-50/10"
    : "border-slate-200";

  return (
    <Card className={`hover:shadow-md transition-shadow duration-200 ${cardClass}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${vendor.party === "dem" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>
              {rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-slate-900">{vendor.name}</h3>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: vendor.priority }).map((_, i) => (
                    <Star key={i} className={`h-3 w-3 fill-current ${getPriorityColor(vendor.priority)}`} />
                  ))}
                </div>
                {isHighPriority && <Badge className="bg-amber-500 text-white text-xs">Priority</Badge>}
              </div>
              <div className="flex items-center gap-1 text-sm text-slate-500 mt-0.5">
                <MapPin className="h-3 w-3" />
                {vendor.city}, {vendor.state}
              </div>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {getVendorTypeBadge(vendor.type)}
                <span className="text-sm font-semibold text-emerald-700">{formatSpend(vendor.spend2024)}</span>
                <span className="text-xs text-slate-500">{vendor.paymentCount} payments in 2024</span>
              </div>
              {vendor.battlegroundStates && vendor.battlegroundStates.length > 0 && (
                <div className="flex items-center gap-1 mt-2 flex-wrap">
                  <span className="text-xs text-slate-500">2026 states:</span>
                  {vendor.battlegroundStates.map(s => (
                    <span key={s} className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">{s}</span>
                  ))}
                </div>
              )}
              {vendor.notes && (
                <div className="mt-2 text-sm text-slate-600 bg-slate-50 rounded px-3 py-2 border border-slate-200">
                  {vendor.notes}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end shrink-0">
            {vendor.website && (
              <Button variant="outline" size="sm" asChild>
                <a href={`https://${vendor.website}`} target="_blank" rel="noopener noreferrer">
                  Visit →
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
