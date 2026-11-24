import fs from 'fs';
import path from 'path';

// Define the file path for local mock database storage
const DB_FILE_PATH = path.join(process.cwd(), 'src/lib/db-mock.json');

// Helper to generate a random string ID
function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Interface for general records
interface Record {
  id: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}

// Initial seed data structures
const initialSermons = [
  {
    id: 'sermon-1',
    title: 'The Power of the Gospel',
    preacher: 'Pastor Akampulira Edson',
    date: 'January 12, 2025',
    duration: '45 min',
    category: 'Sunday Service',
    description: 'Exploring the transformative power of the Gospel and how it saves, heals, and delivers. Drawing from 1 Corinthians 15:1-4, we discover why the Gospel is of first importance.',
    scripture: '1 Corinthians 15:1-4',
    imageUrl: '/images/sermon.png',
    featured: true,
    createdAt: new Date('2025-01-12T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2025-01-12T00:00:00.000Z').toISOString()
  },
  {
    id: 'sermon-2',
    title: 'Walking in Divine Purpose',
    preacher: 'Pastor Akampulira Edson',
    date: 'January 5, 2025',
    duration: '52 min',
    category: 'Sunday Service',
    description: "Discovering God's plans for prosperity and a hopeful future. Understanding that where there is no vision, the people perish, but clarity of purpose leads to thriving.",
    scripture: 'Proverbs 29:18, Jeremiah 29:11',
    imageUrl: '/images/cross-sunrise.png',
    featured: false,
    createdAt: new Date('2025-01-05T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2025-01-05T00:00:00.000Z').toISOString()
  },
  {
    id: 'sermon-3',
    title: 'Healing for the Brokenhearted',
    preacher: 'Pr. Rwebiaro Benon',
    date: 'December 29, 2024',
    duration: '38 min',
    category: 'Healing Service',
    description: "Vision Life Ministries is a restoration ministry designed to heal the brokenhearted. This sermon explores God's heart for restoration and wholeness.",
    scripture: 'Isaiah 61:1-3',
    imageUrl: '/images/sermon.png',
    featured: false,
    createdAt: new Date('2024-12-29T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-29T00:00:00.000Z').toISOString()
  },
  {
    id: 'sermon-4',
    title: 'Kingdom Identity: Who You Are in Christ',
    preacher: 'Pastor Akampulira Edson',
    date: 'December 22, 2024',
    duration: '48 min',
    category: 'Bible Study',
    description: 'Understanding our identity in Christ is foundational to living a purposeful life. This teaching explores what it means to be a new creation in Christ.',
    scripture: '2 Corinthians 5:17',
    imageUrl: '/images/bible-study.png',
    featured: false,
    createdAt: new Date('2024-12-22T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-22T00:00:00.000Z').toISOString()
  },
  {
    id: 'sermon-5',
    title: 'The Great Commission: Go Ye Therefore',
    preacher: 'Pastor Akampulira Edson',
    date: 'December 15, 2024',
    duration: '41 min',
    category: 'Missions Sunday',
    description: 'Woe to me if I do not preach the Gospel! A powerful message on the urgency and joy of fulfilling the Great Commission in our generation.',
    scripture: 'Matthew 28:19-20, 1 Corinthians 9:16',
    imageUrl: '/images/community.png',
    featured: false,
    createdAt: new Date('2024-12-15T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-15T00:00:00.000Z').toISOString()
  },
  {
    id: 'sermon-6',
    title: "Financial Stewardship: God's Way",
    preacher: 'Pastor Akampulira Edson',
    date: 'December 8, 2024',
    duration: '35 min',
    category: 'Sunday Service',
    description: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion. Understanding biblical principles of financial stewardship and generosity.',
    scripture: '2 Corinthians 9:7',
    imageUrl: '/images/give-hands.png',
    featured: false,
    createdAt: new Date('2024-12-08T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-08T00:00:00.000Z').toISOString()
  }
];

const initialResources = [
  {
    id: 'resource-1',
    title: 'Understanding Your Identity in Christ',
    type: 'Study Guide',
    description: 'A 30-day journey through Scripture to discover who God says you are.',
    category: 'Bible Study Guides',
    downloadUrl: '',
    icon: 'BookOpen',
    createdAt: new Date('2025-01-12T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2025-01-12T00:00:00.000Z').toISOString()
  },
  {
    id: 'resource-2',
    title: 'The Gospel of Peace: Reconciliation Series',
    type: 'Audio Teaching',
    description: 'A 6-part series on spreading the ministry of peace and reconciliation in communities.',
    category: 'Audio Teachings',
    downloadUrl: '',
    icon: 'Headphones',
    createdAt: new Date('2025-01-05T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2025-01-05T00:00:00.000Z').toISOString()
  },
  {
    id: 'resource-3',
    title: 'Walking in Divine Healing',
    type: 'Video Teaching',
    description: 'Learn biblical principles for receiving and ministering divine healing.',
    category: 'Video Sermons',
    downloadUrl: '',
    icon: 'Video',
    createdAt: new Date('2024-12-29T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-29T00:00:00.000Z').toISOString()
  },
  {
    id: 'resource-4',
    title: 'Daily Declarations for Kingdom Living',
    type: 'Devotional',
    description: 'Powerful daily declarations rooted in Scripture to build your faith and transform your mindset.',
    category: 'Devotionals',
    downloadUrl: '',
    icon: 'FileText',
    createdAt: new Date('2024-12-22T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-22T00:00:00.000Z').toISOString()
  },
  {
    id: 'resource-5',
    title: 'Prayer Warfare Guide',
    type: 'Study Guide',
    description: 'A comprehensive guide to spiritual warfare prayers and biblical declarations.',
    category: 'Prayer Resources',
    downloadUrl: '',
    icon: 'CandlestickChart',
    createdAt: new Date('2024-12-15T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-15T00:00:00.000Z').toISOString()
  },
  {
    id: 'resource-6',
    title: 'Worship Playlist: Enter His Gates',
    type: 'Worship Music',
    description: 'A curated playlist of Spirit-filled worship songs to usher you into God\'s presence.',
    category: 'Worship Music',
    downloadUrl: '',
    icon: 'Music',
    createdAt: new Date('2024-12-08T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-08T00:00:00.000Z').toISOString()
  }
];

const initialEvents = [
  {
    id: 'event-1',
    title: 'Easter Celebration Service',
    date: 'April 20, 2025',
    time: '9:00 AM — 1:00 PM',
    location: 'Canan Vision Life Church, Rakai',
    description: 'Join us for a powerful Easter celebration as we commemorate the resurrection of our Lord Jesus Christ. Special worship, drama presentation, and the Word.',
    category: 'Celebration',
    icon: 'Cross',
    featured: true,
    createdAt: new Date('2025-01-12T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2025-01-12T00:00:00.000Z').toISOString()
  },
  {
    id: 'event-2',
    title: 'EQUIP | UG BEYOND SUCCESS',
    date: 'Wednesday',
    time: '6:00 PM — 7:00 PM',
    location: 'Via Google Meeting',
    description: 'A leadership training session featuring Pastor Akampulira Edson, focused on equipping young people for purposeful leadership and impact.',
    category: 'Leadership',
    icon: 'Users',
    featured: true,
    createdAt: new Date('2025-01-05T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2025-01-05T00:00:00.000Z').toISOString()
  },
  {
    id: 'event-3',
    title: 'Youth Conference 2025',
    date: 'March 15-16, 2025',
    time: '9:00 AM — 5:00 PM',
    location: 'Vision Life Ministries Center',
    description: 'A two-day conference designed to ignite the fire of purpose in young people. Worship, teaching, mentorship, and creative arts.',
    category: 'Youth',
    icon: 'Users',
    featured: true,
    createdAt: new Date('2024-12-29T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-29T00:00:00.000Z').toISOString()
  },
  {
    id: 'event-4',
    title: 'Healing & Deliverance Crusade',
    date: 'February 28, 2025',
    time: '2:00 PM — 6:00 PM',
    location: 'Rakai District Community Grounds',
    description: 'Experience the healing power of God. Special prayer for the sick, oppressed, and brokenhearted. Come expectant for a miracle.',
    category: 'Crusade',
    icon: 'Heart',
    featured: false,
    createdAt: new Date('2024-12-22T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-22T00:00:00.000Z').toISOString()
  },
  {
    id: 'event-5',
    title: 'Marriage Enrichment Workshop',
    date: 'March 8, 2025',
    time: '10:00 AM — 3:00 PM',
    location: 'Vision Life Ministries Center',
    description: 'Strengthening marriages through biblical principles. Interactive sessions on communication, intimacy, and financial stewardship.',
    category: 'Workshop',
    icon: 'Star',
    featured: false,
    createdAt: new Date('2024-12-15T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-15T00:00:00.000Z').toISOString()
  },
  {
    id: 'event-6',
    title: 'Community Outreach: Clean Water Project',
    date: 'March 22, 2025',
    time: '8:00 AM — 4:00 PM',
    location: 'Various Villages, Rakai District',
    description: 'Bringing clean water to remote villages alongside the Gospel message. Volunteer to serve and make a difference in communities.',
    category: 'Outreach',
    icon: 'Globe',
    featured: false,
    createdAt: new Date('2024-12-08T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-08T00:00:00.000Z').toISOString()
  },
  {
    id: 'event-7',
    title: 'Monthly Prayer & Fasting',
    date: 'First Week of Every Month',
    time: '5:00 AM — 7:00 AM Daily',
    location: 'Canan Vision Life Church',
    description: "Join us for our monthly prayer and fasting program as we seek God's face for direction, breakthrough, and revival.",
    category: 'Prayer',
    icon: 'Music',
    featured: false,
    createdAt: new Date('2024-12-01T00:00:00.000Z').toISOString(),
    updatedAt: new Date('2024-12-01T00:00:00.000Z').toISOString()
  }
];

class MockModel<T extends Record> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  private loadAll(): T[] {
    try {
      if (!fs.existsSync(DB_FILE_PATH)) {
        const initialDb = {
          sermons: initialSermons,
          resources: initialResources,
          events: initialEvents,
        };
        fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initialDb, null, 2), 'utf8');
      }
      const data = fs.readFileSync(DB_FILE_PATH, 'utf8');
      const dbObj = JSON.parse(data);
      return dbObj[this.key] || [];
    } catch (err) {
      console.error(`Error loading database file for ${this.key}:`, err);
      return [];
    }
  }

  private saveAll(items: T[]) {
    try {
      let dbObj: any = {};
      if (fs.existsSync(DB_FILE_PATH)) {
        const data = fs.readFileSync(DB_FILE_PATH, 'utf8');
        dbObj = JSON.parse(data);
      }
      dbObj[this.key] = items;
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(dbObj, null, 2), 'utf8');
    } catch (err) {
      console.error(`Error saving database file for ${this.key}:`, err);
    }
  }

  async findMany(args?: { orderBy?: { [key: string]: 'asc' | 'desc' } }) {
    const items = this.loadAll();
    if (args?.orderBy) {
      const orderKeys = Object.keys(args.orderBy);
      if (orderKeys.length > 0) {
        const orderKey = orderKeys[0];
        const direction = args.orderBy[orderKey];
        items.sort((a, b) => {
          const valA = a[orderKey];
          const valB = b[orderKey];
          if (valA < valB) return direction === 'asc' ? -1 : 1;
          if (valA > valB) return direction === 'asc' ? 1 : -1;
          return 0;
        });
      }
    }
    return items;
  }

  async findUnique(args: { where: { id: string } }) {
    const items = this.loadAll();
    return items.find((item) => item.id === args.where.id) || null;
  }

  async create(args: { data: Omit<T, 'id' | 'createdAt' | 'updatedAt'> }) {
    const items = this.loadAll();
    const newRecord = {
      id: generateId(),
      ...args.data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as unknown as T;
    items.push(newRecord);
    this.saveAll(items);
    return newRecord;
  }

  async createMany(args: { data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>[] }) {
    const items = this.loadAll();
    const newRecords = args.data.map((item) => ({
      id: generateId(),
      ...item,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })) as unknown as T[];
    items.push(...newRecords);
    this.saveAll(items);
    return { count: newRecords.length };
  }

  async update(args: { where: { id: string }; data: Partial<T> }) {
    const items = this.loadAll();
    const index = items.findIndex((item) => item.id === args.where.id);
    if (index === -1) {
      throw new Error(`Record with id ${args.where.id} not found`);
    }
    const updatedRecord = {
      ...items[index],
      ...args.data,
      updatedAt: new Date().toISOString(),
    };
    items[index] = updatedRecord;
    this.saveAll(items);
    return updatedRecord;
  }

  async delete(args: { where: { id: string } }) {
    const items = this.loadAll();
    const index = items.findIndex((item) => item.id === args.where.id);
    if (index === -1) {
      throw new Error(`Record with id ${args.where.id} not found`);
    }
    const deleted = items.splice(index, 1)[0];
    this.saveAll(items);
    return deleted;
  }

  async count() {
    const items = this.loadAll();
    return items.length;
  }
}

export const db = {
  sermon: new MockModel<any>('sermons'),
  resource: new MockModel<any>('resources'),
  event: new MockModel<any>('events'),
};