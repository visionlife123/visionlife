import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET all sermons
export async function GET() {
  try {
    const sermons = await db.sermon.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(sermons);
  } catch (error) {
    console.error('Error fetching sermons:', error);
    return NextResponse.json({ error: 'Failed to fetch sermons' }, { status: 500 });
  }
}

// POST create a new sermon
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, preacher, date, duration, category, description, scripture, imageUrl, featured } = body;

    if (!title || !preacher || !date || !description || !scripture) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const sermon = await db.sermon.create({
      data: {
        title,
        preacher,
        date,
        duration: duration || '45 min',
        category: category || 'Sunday Service',
        description,
        scripture,
        imageUrl: imageUrl || '/images/sermon.png',
        featured: featured || false,
      },
    });

    return NextResponse.json(sermon, { status: 201 });
  } catch (error) {
    console.error('Error creating sermon:', error);
    return NextResponse.json({ error: 'Failed to create sermon' }, { status: 500 });
  }
}
