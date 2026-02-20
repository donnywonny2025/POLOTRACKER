/**
 * 2026 Campaign Contacts Dashboard
 * Design Philosophy: Professional Political Data Interface
 * - Clean, data-dense layout optimized for quick scanning
 * - Color-coded priority system for instant recognition
 * - Card-based architecture with subtle depth
 * - Typography hierarchy: Inter for UI, system fonts for data
 */

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { campaigns, insights, stats, type Campaign } from "@/data/campaigns";
import { Building2, Mail, Phone, Search, Star, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                2026 Campaign Contacts
              </h1>
              <p className="text-slate-600 mt-1">Video Production Outreach Database</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right text-sm">
                <div className="font-semibold text-slate-900">{stats.totalCampaigns} Campaigns</div>
                <div className="text-slate-500">Last updated: {stats.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-emerald-900">Confirmed Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">{stats.confirmedContacts}</div>
              <p className="text-xs text-emerald-700 mt-1">Ready to contact today</p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-900">Staff Names + Emails</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.staffNamesWithEmails}</div>
              <p className="text-xs text-blue-700 mt-1">Test email addresses</p>
            </CardContent>
          </Card>
          
          <Card className="border-slate-200 bg-slate-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-slate-900">Congressional Offices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-600">{stats.congressionalOffices}+</div>
              <p className="text-xs text-slate-700 mt-1">Direct phone numbers</p>
            </CardContent>
          </Card>
          
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-amber-900">Hiring Now</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600">3</div>
              <p className="text-xs text-amber-700 mt-1">Open comms positions</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              Key Opportunities
            </CardTitle>
            <CardDescription>Strategic timing and high-value targets</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-slate-900 mb-2">🎯 Timing Opportunities</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                {insights.timingOpportunities.map((opp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{opp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-slate-900 mb-2">💼 Best Opportunities</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                {insights.bestOpportunities.slice(0, 3).map((opp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
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
          {/* Tier 1 */}
          {tier1Campaigns.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Tier 1: Ready to Contact</h2>
                <Badge className="bg-emerald-500 text-white">{tier1Campaigns.length} campaigns</Badge>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {tier1Campaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} getPriorityColor={getPriorityColor} getTierBadge={getTierBadge} />
                ))}
              </div>
            </div>
          )}

          {/* Tier 2 */}
          {tier2Campaigns.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Tier 2: Test Emails Available</h2>
                <Badge variant="outline" className="border-blue-500 text-blue-600">{tier2Campaigns.length} campaigns</Badge>
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
      </main>

      <footer className="border-t bg-white mt-16 py-8">
        <div className="container text-center text-sm text-slate-600">
          <p>Campaign Contacts Database • Video Production Outreach • 2026 Election Cycle</p>
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
        {/* Contacts */}
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

        {/* Status */}
        {campaign.status && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="text-xs font-semibold text-blue-900 mb-1">STATUS</div>
            <div className="text-sm text-blue-800">{campaign.status}</div>
          </div>
        )}

        {/* Intel */}
        {campaign.intel && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="text-xs font-semibold text-amber-900 mb-1">INTEL</div>
            <div className="text-sm text-amber-800">{campaign.intel}</div>
          </div>
        )}

        {/* Website */}
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
