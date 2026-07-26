import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET single sermon
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sermon = await db.sermon.findUnique({ where: { id } });
    if (!sermon) {
      return NextResponse.json({ error: 'Sermon not found' }, { status: 404 });
    }
    return NextResponse.json(sermon);
  } catch (error) {
    console.error('Error fetching sermon:', error);
    return NextResponse.json({ error: 'Failed to fetch sermon' }, { status: 500 });
  }
}

// PUT update a sermon
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const sermon = await db.sermon.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(sermon);
  } catch (error) {
    console.error('Error updating sermon:', error);
    return NextResponse.json({ error: 'Failed to update sermon' }, { status: 500 });
  }
}

// DELETE a sermon
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await db.sermon.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting sermon:', error);
    return NextResponse.json({ error: 'Failed to delete sermon' }, { status: 500 });
  }
}
