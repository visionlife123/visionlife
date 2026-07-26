'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen, Calendar, FileText, Plus, Trash2, Edit3,
  Save, X, RefreshCw, Clock, MapPin, User, ChevronDown,
  LayoutDashboard, Sermon as SermonIcon, Download
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Types
interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  category: string;
  description: string;
  scripture: string;
  imageUrl: string;
  featured: boolean;
  createdAt: string;
}

interface Resource {
  id: string;
  title: string;
  type: string;
  description: string;
  category: string;
  downloadUrl: string;
  icon: string;
  createdAt: string;
}

interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  icon: string;
  featured: boolean;
  createdAt: string;
}

type TabType = 'sermons' | 'resources' | 'events';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const sermonCategories = ['Sunday Service', 'Healing Service', 'Bible Study', 'Missions Sunday'];
const resourceTypes = ['Study Guide', 'Audio Teaching', 'Video Teaching', 'Devotional', 'Worship Music', 'Prayer Guide'];
const resourceCategories = ['Bible Study Guides', 'Devotionals', 'Audio Teachings', 'Video Sermons', 'Prayer Resources', 'Worship Music'];
const eventCategories = ['Celebration', 'Youth', 'Crusade', 'Workshop', 'Outreach', 'Prayer'];

export function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>('sermons');
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const { toast } = useToast();

  // Form states
  const [sermonForm, setSermonForm] = useState({
    title: '', preacher: '', date: '', duration: '45 min', category: 'Sunday Service',
    description: '', scripture: '', imageUrl: '/images/sermon.png', featured: false,
  });
  const [resourceForm, setResourceForm] = useState({
    title: '', type: 'Study Guide', description: '', category: 'Bible Study Guides',
    downloadUrl: '', icon: 'BookOpen',
  });
  const [eventForm, setEventForm] = useState({
    title: '', date: '', time: '', location: '', description: '',
    category: 'Celebration', icon: 'Calendar', featured: false,
  });

  // Fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [sermonsRes, resourcesRes, eventsRes] = await Promise.all([
        fetch('/api/sermons'),
        fetch('/api/resources'),
        fetch('/api/events'),
      ]);
      if (sermonsRes.ok) setSermons(await sermonsRes.json());
      if (resourcesRes.ok) setResources(await resourcesRes.json());
      if (eventsRes.ok) setEvents(await eventsRes.json());
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({ title: 'Error', description: 'Failed to load data', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Seed database
  const handleSeed = async () => {
    setSeeding(true);
    try {
      const res = await fetch('/api/seed', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        toast({
          title: 'Database Seeded!',
          description: `Created ${data.counts.sermons} sermons, ${data.counts.resources} resources, ${data.counts.events} events`,
        });
        fetchData();
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to seed database', variant: 'destructive' });
    } finally {
      setSeeding(false);
    }
  };

  // CRUD Operations
  const handleCreate = async () => {
    try {
      let endpoint = '';
      let body = {};
      if (activeTab === 'sermons') { endpoint = '/api/sermons'; body = sermonForm; }
      else if (activeTab === 'resources') { endpoint = '/api/resources'; body = resourceForm; }
      else { endpoint = '/api/events'; body = eventForm; }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast({ title: 'Created!', description: `${activeTab.slice(0, -1)} created successfully` });
        resetForm();
        fetchData();
      } else {
        const data = await res.json();
        toast({ title: 'Error', description: data.error || 'Failed to create', variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to create', variant: 'destructive' });
    }
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    try {
      let endpoint = '';
      let body = {};
      if (activeTab === 'sermons') { endpoint = `/api/sermons/${editingId}`; body = sermonForm; }
      else if (activeTab === 'resources') { endpoint = `/api/resources/${editingId}`; body = resourceForm; }
      else { endpoint = `/api/events/${editingId}`; body = eventForm; }

      const res = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast({ title: 'Updated!', description: `${activeTab.slice(0, -1)} updated successfully` });
        resetForm();
        fetchData();
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update', variant: 'destructive' });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      let endpoint = '';
      if (activeTab === 'sermons') endpoint = `/api/sermons/${id}`;
      else if (activeTab === 'resources') endpoint = `/api/resources/${id}`;
      else endpoint = `/api/events/${id}`;

      const res = await fetch(endpoint, { method: 'DELETE' });
      if (res.ok) {
        toast({ title: 'Deleted!', description: 'Item deleted successfully' });
        fetchData();
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete', variant: 'destructive' });
    }
  };

  const handleEdit = (item: Sermon | Resource | ChurchEvent) => {
    setEditingId(item.id);
    setShowForm(true);
    if (activeTab === 'sermons') {
      const s = item as Sermon;
      setSermonForm({
        title: s.title, preacher: s.preacher, date: s.date, duration: s.duration,
        category: s.category, description: s.description, scripture: s.scripture,
        imageUrl: s.imageUrl, featured: s.featured,
      });
    } else if (activeTab === 'resources') {
      const r = item as Resource;
      setResourceForm({
        title: r.title, type: r.type, description: r.description,
        category: r.category, downloadUrl: r.downloadUrl, icon: r.icon,
      });
    } else {
      const e = item as ChurchEvent;
      setEventForm({
        title: e.title, date: e.date, time: e.time, location: e.location,
        description: e.description, category: e.category, icon: e.icon, featured: e.featured,
      });
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setSermonForm({
      title: '', preacher: '', date: '', duration: '45 min', category: 'Sunday Service',
      description: '', scripture: '', imageUrl: '/images/sermon.png', featured: false,
    });
    setResourceForm({
      title: '', type: 'Study Guide', description: '', category: 'Bible Study Guides',
      downloadUrl: '', icon: 'BookOpen',
    });
    setEventForm({
      title: '', date: '', time: '', location: '', description: '',
      category: 'Celebration', icon: 'Calendar', featured: false,
    });
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode; count: number }[] = [
    { id: 'sermons', label: 'Sermons', icon: <BookOpen className="w-4 h-4" />, count: sermons.length },
    { id: 'resources', label: 'Resources', icon: <FileText className="w-4 h-4" />, count: resources.length },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" />, count: events.length },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-dark pt-28 pb-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <LayoutDashboard className="w-8 h-8 text-gold" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Admin <span className="text-gold-gradient">Dashboard</span>
                </h1>
              </div>
              <p className="text-white/50 text-sm">Manage sermons, resources, and events for Vision Life Ministries</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleSeed}
                disabled={seeding}
                className="bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 text-xs tracking-wider uppercase rounded-sm"
              >
                <RefreshCw className={`w-3 h-3 mr-1.5 ${seeding ? 'animate-spin' : ''}`} />
                {seeding ? 'Seeding...' : 'Seed Data'}
              </Button>
              <Button
                onClick={fetchData}
                className="bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 text-xs tracking-wider uppercase rounded-sm"
              >
                <RefreshCw className="w-3 h-3 mr-1.5" />
                Refresh
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {tabs.map((tab) => (
              <Card key={tab.id} className="bg-white/5 border-gold/10 rounded-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    {tab.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{tab.count}</p>
                    <p className="text-white/40 text-xs">{tab.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-8 min-h-[60vh]">
        <div className="max-w-7xl mx-auto section-padding">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-8 border-b border-dark/10 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); resetForm(); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-burgundy text-white shadow-lg'
                    : 'bg-white text-dark/60 hover:bg-gold/10 hover:text-gold-dark'
                }`}
              >
                {tab.icon}
                {tab.label}
                <Badge className={`${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-dark/10 text-dark/50'
                } text-[10px] px-1.5 py-0`}>
                  {tab.count}
                </Badge>
              </button>
            ))}
            <div className="ml-auto">
              <Button
                onClick={() => { setShowForm(true); setEditingId(null); }}
                className="bg-gold hover:bg-gold-dark text-dark font-semibold text-xs tracking-wider uppercase rounded-sm"
              >
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                New {activeTab.slice(0, -1)}
              </Button>
            </div>
          </div>

          {/* Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <Card className="bg-white border-0 shadow-lg rounded-sm overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-gold/10 to-burgundy/10 pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-dark text-base flex items-center gap-2">
                        <Edit3 className="w-4 h-4" />
                        {editingId ? 'Edit' : 'Create'} {activeTab.slice(0, -1)}
                      </CardTitle>
                      <Button variant="ghost" size="icon" onClick={resetForm} className="text-dark/40 hover:text-dark h-8 w-8">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    {activeTab === 'sermons' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Title *</label>
                          <Input value={sermonForm.title} onChange={(e) => setSermonForm({ ...sermonForm, title: e.target.value })} placeholder="Sermon title" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Preacher *</label>
                          <Input value={sermonForm.preacher} onChange={(e) => setSermonForm({ ...sermonForm, preacher: e.target.value })} placeholder="Pastor name" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Date *</label>
                          <Input value={sermonForm.date} onChange={(e) => setSermonForm({ ...sermonForm, date: e.target.value })} placeholder="January 12, 2025" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Duration</label>
                          <Input value={sermonForm.duration} onChange={(e) => setSermonForm({ ...sermonForm, duration: e.target.value })} placeholder="45 min" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Category</label>
                          <select
                            value={sermonForm.category}
                            onChange={(e) => setSermonForm({ ...sermonForm, category: e.target.value })}
                            className="w-full h-9 rounded-sm border border-input bg-background px-3 text-sm"
                          >
                            {sermonCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Scripture *</label>
                          <Input value={sermonForm.scripture} onChange={(e) => setSermonForm({ ...sermonForm, scripture: e.target.value })} placeholder="1 Corinthians 15:1-4" className="rounded-sm" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Description *</label>
                          <Textarea value={sermonForm.description} onChange={(e) => setSermonForm({ ...sermonForm, description: e.target.value })} placeholder="Sermon description..." rows={3} className="rounded-sm resize-none" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Image URL</label>
                          <Input value={sermonForm.imageUrl} onChange={(e) => setSermonForm({ ...sermonForm, imageUrl: e.target.value })} placeholder="/images/sermon.png" className="rounded-sm" />
                        </div>
                        <div className="flex items-end gap-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={sermonForm.featured}
                              onChange={(e) => setSermonForm({ ...sermonForm, featured: e.target.checked })}
                              className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold"
                            />
                            <span className="text-dark/60 text-xs font-medium">Featured Sermon</span>
                          </label>
                        </div>
                      </div>
                    )}

                    {activeTab === 'resources' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Title *</label>
                          <Input value={resourceForm.title} onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })} placeholder="Resource title" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Type</label>
                          <select
                            value={resourceForm.type}
                            onChange={(e) => setResourceForm({ ...resourceForm, type: e.target.value })}
                            className="w-full h-9 rounded-sm border border-input bg-background px-3 text-sm"
                          >
                            {resourceTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Category</label>
                          <select
                            value={resourceForm.category}
                            onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value })}
                            className="w-full h-9 rounded-sm border border-input bg-background px-3 text-sm"
                          >
                            {resourceCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Download URL</label>
                          <Input value={resourceForm.downloadUrl} onChange={(e) => setResourceForm({ ...resourceForm, downloadUrl: e.target.value })} placeholder="https://..." className="rounded-sm" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Description *</label>
                          <Textarea value={resourceForm.description} onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })} placeholder="Resource description..." rows={3} className="rounded-sm resize-none" />
                        </div>
                      </div>
                    )}

                    {activeTab === 'events' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Title *</label>
                          <Input value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} placeholder="Event title" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Date *</label>
                          <Input value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} placeholder="March 15, 2025" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Time *</label>
                          <Input value={eventForm.time} onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })} placeholder="9:00 AM — 5:00 PM" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Location *</label>
                          <Input value={eventForm.location} onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })} placeholder="Rakai District" className="rounded-sm" />
                        </div>
                        <div>
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Category</label>
                          <select
                            value={eventForm.category}
                            onChange={(e) => setEventForm({ ...eventForm, category: e.target.value })}
                            className="w-full h-9 rounded-sm border border-input bg-background px-3 text-sm"
                          >
                            {eventCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="flex items-end gap-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={eventForm.featured}
                              onChange={(e) => setEventForm({ ...eventForm, featured: e.target.checked })}
                              className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold"
                            />
                            <span className="text-dark/60 text-xs font-medium">Featured Event</span>
                          </label>
                        </div>
                        <div className="md:col-span-2">
                          <label className="text-dark/60 text-xs font-medium mb-1.5 block">Description *</label>
                          <Textarea value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} placeholder="Event description..." rows={3} className="rounded-sm resize-none" />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-dark/5">
                      <Button
                        onClick={editingId ? handleUpdate : handleCreate}
                        className="bg-gold hover:bg-gold-dark text-dark font-semibold text-xs tracking-wider uppercase rounded-sm"
                      >
                        <Save className="w-3.5 h-3.5 mr-1.5" />
                        {editingId ? 'Update' : 'Create'} {activeTab.slice(0, -1)}
                      </Button>
                      <Button variant="outline" onClick={resetForm} className="text-xs rounded-sm">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Data Table */}
          <Card className="bg-white border-0 shadow-lg rounded-sm overflow-hidden">
            <CardContent className="p-0">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <RefreshCw className="w-6 h-6 text-gold animate-spin" />
                  <span className="ml-2 text-dark/50 text-sm">Loading...</span>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {/* Sermons Table */}
                  {activeTab === 'sermons' && (
                    <table className="w-full">
                      <thead>
                        <tr className="bg-dark/5 text-left">
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider">Title</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden md:table-cell">Preacher</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden sm:table-cell">Date</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden lg:table-cell">Category</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark/5">
                        {sermons.length === 0 ? (
                          <tr><td colSpan={6} className="px-4 py-12 text-center text-dark/40 text-sm">No sermons yet. Click "New Sermon" or "Seed Data" to get started.</td></tr>
                        ) : (
                          sermons.map((sermon) => (
                            <tr key={sermon.id} className="hover:bg-gold/5 transition-colors">
                              <td className="px-4 py-3">
                                <p className="text-dark font-medium text-sm truncate max-w-48">{sermon.title}</p>
                                <p className="text-dark/40 text-xs truncate max-w-48">{sermon.scripture}</p>
                              </td>
                              <td className="px-4 py-3 text-dark/60 text-sm hidden md:table-cell">{sermon.preacher}</td>
                              <td className="px-4 py-3 text-dark/60 text-xs hidden sm:table-cell">{sermon.date}</td>
                              <td className="px-4 py-3 hidden lg:table-cell">
                                <Badge className="bg-burgundy/10 text-burgundy text-[10px]">{sermon.category}</Badge>
                              </td>
                              <td className="px-4 py-3">
                                {sermon.featured && (
                                  <Badge className="bg-gold/10 text-gold-dark text-[10px]">Featured</Badge>
                                )}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <Button variant="ghost" size="icon" onClick={() => handleEdit(sermon)} className="h-7 w-7 text-dark/40 hover:text-gold-dark">
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </Button>
                                  <Button variant="ghost" size="icon" onClick={() => handleDelete(sermon.id)} className="h-7 w-7 text-dark/40 hover:text-red-500">
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  )}

                  {/* Resources Table */}
                  {activeTab === 'resources' && (
                    <table className="w-full">
                      <thead>
                        <tr className="bg-dark/5 text-left">
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider">Title</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden md:table-cell">Type</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden sm:table-cell">Category</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark/5">
                        {resources.length === 0 ? (
                          <tr><td colSpan={4} className="px-4 py-12 text-center text-dark/40 text-sm">No resources yet. Click "New Resource" or "Seed Data" to get started.</td></tr>
                        ) : (
                          resources.map((resource) => (
                            <tr key={resource.id} className="hover:bg-gold/5 transition-colors">
                              <td className="px-4 py-3">
                                <p className="text-dark font-medium text-sm truncate max-w-64">{resource.title}</p>
                                <p className="text-dark/40 text-xs truncate max-w-64">{resource.description}</p>
                              </td>
                              <td className="px-4 py-3 hidden md:table-cell">
                                <Badge className="bg-gold/10 text-gold-dark text-[10px]">{resource.type}</Badge>
                              </td>
                              <td className="px-4 py-3 text-dark/60 text-xs hidden sm:table-cell">{resource.category}</td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <Button variant="ghost" size="icon" onClick={() => handleEdit(resource)} className="h-7 w-7 text-dark/40 hover:text-gold-dark">
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </Button>
                                  <Button variant="ghost" size="icon" onClick={() => handleDelete(resource.id)} className="h-7 w-7 text-dark/40 hover:text-red-500">
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  )}

                  {/* Events Table */}
                  {activeTab === 'events' && (
                    <table className="w-full">
                      <thead>
                        <tr className="bg-dark/5 text-left">
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider">Title</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden md:table-cell">Date</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden sm:table-cell">Location</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider hidden lg:table-cell">Category</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider">Status</th>
                          <th className="px-4 py-3 text-xs font-semibold text-dark/60 uppercase tracking-wider text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dark/5">
                        {events.length === 0 ? (
                          <tr><td colSpan={6} className="px-4 py-12 text-center text-dark/40 text-sm">No events yet. Click "New Event" or "Seed Data" to get started.</td></tr>
                        ) : (
                          events.map((event) => (
                            <tr key={event.id} className="hover:bg-gold/5 transition-colors">
                              <td className="px-4 py-3">
                                <p className="text-dark font-medium text-sm truncate max-w-48">{event.title}</p>
                                <p className="text-dark/40 text-xs">{event.time}</p>
                              </td>
                              <td className="px-4 py-3 text-dark/60 text-sm hidden md:table-cell">{event.date}</td>
                              <td className="px-4 py-3 text-dark/60 text-xs hidden sm:table-cell truncate max-w-36">{event.location}</td>
                              <td className="px-4 py-3 hidden lg:table-cell">
                                <Badge className="bg-burgundy/10 text-burgundy text-[10px]">{event.category}</Badge>
                              </td>
                              <td className="px-4 py-3">
                                {event.featured && (
                                  <Badge className="bg-gold/10 text-gold-dark text-[10px]">Featured</Badge>
                                )}
                              </td>
                              <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                  <Button variant="ghost" size="icon" onClick={() => handleEdit(event)} className="h-7 w-7 text-dark/40 hover:text-gold-dark">
                                    <Edit3 className="w-3.5 h-3.5" />
                                  </Button>
                                  <Button variant="ghost" size="icon" onClick={() => handleDelete(event.id)} className="h-7 w-7 text-dark/40 hover:text-red-500">
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
