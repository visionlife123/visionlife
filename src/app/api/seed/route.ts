import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST() {
  try {
    // Seed Sermons
    const existingSermons = await db.sermon.count();
    if (existingSermons === 0) {
      await db.sermon.createMany({
        data: [
          {
            title: 'The Power of the Gospel',
            preacher: 'Pastor Akampulira Edson',
            date: 'January 12, 2025',
            duration: '45 min',
            category: 'Sunday Service',
            description: 'Exploring the transformative power of the Gospel and how it saves, heals, and delivers. Drawing from 1 Corinthians 15:1-4, we discover why the Gospel is of first importance.',
            scripture: '1 Corinthians 15:1-4',
            imageUrl: '/images/sermon.png',
            featured: true,
          },
          {
            title: 'Walking in Divine Purpose',
            preacher: 'Pastor Akampulira Edson',
            date: 'January 5, 2025',
            duration: '52 min',
            category: 'Sunday Service',
            description: "Discovering God's plans for prosperity and a hopeful future. Understanding that where there is no vision, the people perish, but clarity of purpose leads to thriving.",
            scripture: 'Proverbs 29:18, Jeremiah 29:11',
            imageUrl: '/images/cross-sunrise.png',
            featured: false,
          },
          {
            title: 'Healing for the Brokenhearted',
            preacher: 'Pr. Rwebiaro Benon',
            date: 'December 29, 2024',
            duration: '38 min',
            category: 'Healing Service',
            description: "Vision Life Ministries is a restoration ministry designed to heal the brokenhearted. This sermon explores God's heart for restoration and wholeness.",
            scripture: 'Isaiah 61:1-3',
            imageUrl: '/images/sermon.png',
            featured: false,
          },
          {
            title: 'Kingdom Identity: Who You Are in Christ',
            preacher: 'Pastor Akampulira Edson',
            date: 'December 22, 2024',
            duration: '48 min',
            category: 'Bible Study',
            description: 'Understanding our identity in Christ is foundational to living a purposeful life. This teaching explores what it means to be a new creation in Christ.',
            scripture: '2 Corinthians 5:17',
            imageUrl: '/images/bible-study.png',
            featured: false,
          },
          {
            title: 'The Great Commission: Go Ye Therefore',
            preacher: 'Pastor Akampulira Edson',
            date: 'December 15, 2024',
            duration: '41 min',
            category: 'Missions Sunday',
            description: 'Woe to me if I do not preach the Gospel! A powerful message on the urgency and joy of fulfilling the Great Commission in our generation.',
            scripture: 'Matthew 28:19-20, 1 Corinthians 9:16',
            imageUrl: '/images/community.png',
            featured: false,
          },
          {
            title: "Financial Stewardship: God's Way",
            preacher: 'Pastor Akampulira Edson',
            date: 'December 8, 2024',
            duration: '35 min',
            category: 'Sunday Service',
            description: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion. Understanding biblical principles of financial stewardship and generosity.',
            scripture: '2 Corinthians 9:7',
            imageUrl: '/images/give-hands.png',
            featured: false,
          },
        ],
      });
    }

    // Seed Resources
    const existingResources = await db.resource.count();
    if (existingResources === 0) {
      await db.resource.createMany({
        data: [
          {
            title: 'Understanding Your Identity in Christ',
            type: 'Study Guide',
            description: 'A 30-day journey through Scripture to discover who God says you are.',
            category: 'Bible Study Guides',
            icon: 'BookOpen',
          },
          {
            title: 'The Gospel of Peace: Reconciliation Series',
            type: 'Audio Teaching',
            description: 'A 6-part series on spreading the ministry of peace and reconciliation in communities.',
            category: 'Audio Teachings',
            icon: 'Headphones',
          },
          {
            title: 'Walking in Divine Healing',
            type: 'Video Teaching',
            description: 'Learn biblical principles for receiving and ministering divine healing.',
            category: 'Video Sermons',
            icon: 'Video',
          },
          {
            title: 'Daily Declarations for Kingdom Living',
            type: 'Devotional',
            description: 'Powerful daily declarations rooted in Scripture to build your faith and transform your mindset.',
            category: 'Devotionals',
            icon: 'FileText',
          },
          {
            title: 'Prayer Warfare Guide',
            type: 'Study Guide',
            description: 'A comprehensive guide to spiritual warfare prayers and biblical declarations.',
            category: 'Prayer Resources',
            icon: 'CandlestickChart',
          },
          {
            title: 'Worship Playlist: Enter His Gates',
            type: 'Worship Music',
            description: 'A curated playlist of Spirit-filled worship songs to usher you into God\'s presence.',
            category: 'Worship Music',
            icon: 'Music',
          },
        ],
      });
    }

    // Seed Events
    const existingEvents = await db.event.count();
    if (existingEvents === 0) {
      await db.event.createMany({
        data: [
          {
            title: 'Easter Celebration Service',
            date: 'April 20, 2025',
            time: '9:00 AM — 1:00 PM',
            location: 'Canan Vision Life Church, Rakai',
            description: 'Join us for a powerful Easter celebration as we commemorate the resurrection of our Lord Jesus Christ. Special worship, drama presentation, and the Word.',
            category: 'Celebration',
            icon: 'Cross',
            featured: true,
          },
          {
            title: 'EQUIP | UG BEYOND SUCCESS',
            date: 'Wednesday',
            time: '6:00 PM — 7:00 PM',
            location: 'Via Google Meeting',
            description: 'A leadership training session featuring Pastor Akampulira Edson, focused on equipping young people for purposeful leadership and impact.',
            category: 'Leadership',
            icon: 'Users',
            featured: true,
          },
          {
            title: 'Youth Conference 2025',
            date: 'March 15-16, 2025',
            time: '9:00 AM — 5:00 PM',
            location: 'Vision Life Ministries Center',
            description: 'A two-day conference designed to ignite the fire of purpose in young people. Worship, teaching, mentorship, and creative arts.',
            category: 'Youth',
            icon: 'Users',
            featured: true,
          },
          {
            title: 'Healing & Deliverance Crusade',
            date: 'February 28, 2025',
            time: '2:00 PM — 6:00 PM',
            location: 'Rakai District Community Grounds',
            description: 'Experience the healing power of God. Special prayer for the sick, oppressed, and brokenhearted. Come expectant for a miracle.',
            category: 'Crusade',
            icon: 'Heart',
            featured: false,
          },
          {
            title: 'Marriage Enrichment Workshop',
            date: 'March 8, 2025',
            time: '10:00 AM — 3:00 PM',
            location: 'Vision Life Ministries Center',
            description: 'Strengthening marriages through biblical principles. Interactive sessions on communication, intimacy, and financial stewardship.',
            category: 'Workshop',
            icon: 'Star',
            featured: false,
          },
          {
            title: 'Community Outreach: Clean Water Project',
            date: 'March 22, 2025',
            time: '8:00 AM — 4:00 PM',
            location: 'Various Villages, Rakai District',
            description: 'Bringing clean water to remote villages alongside the Gospel message. Volunteer to serve and make a difference in communities.',
            category: 'Outreach',
            icon: 'Globe',
            featured: false,
          },
          {
            title: 'Monthly Prayer & Fasting',
            date: 'First Week of Every Month',
            time: '5:00 AM — 7:00 AM Daily',
            location: 'Canan Vision Life Church',
            description: "Join us for our monthly prayer and fasting program as we seek God's face for direction, breakthrough, and revival.",
            category: 'Prayer',
            icon: 'Music',
            featured: false,
          },
        ],
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Database seeded successfully',
      counts: {
        sermons: await db.sermon.count(),
        resources: await db.resource.count(),
        events: await db.event.count(),
      },
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
