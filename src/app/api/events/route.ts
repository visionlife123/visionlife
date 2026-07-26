import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET all events
export async function GET() {
  try {
    const events = await db.event.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST create a new event
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, date, time, location, description, category, icon, featured } = body;

    if (!title || !date || !time || !location || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const event = await db.event.create({
      data: {
        title,
        date,
        time,
        location,
        description,
        category: category || 'Celebration',
        icon: icon || 'Calendar',
        featured: featured || false,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
