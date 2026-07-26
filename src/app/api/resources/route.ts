import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET all resources
export async function GET() {
  try {
    const resources = await db.resource.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 });
  }
}

// POST create a new resource
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, type, description, category, downloadUrl, icon } = body;

    if (!title || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resource = await db.resource.create({
      data: {
        title,
        type: type || 'Study Guide',
        description,
        category: category || 'Bible Study Guides',
        downloadUrl: downloadUrl || '',
        icon: icon || 'BookOpen',
      },
    });

    return NextResponse.json(resource, { status: 201 });
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json({ error: 'Failed to create resource' }, { status: 500 });
  }
}
