import { NextRequest, NextResponse } from 'next/server';
import { getToken } from '@/lib/auth';
import { exercisesService } from '@/lib/services/exercises';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = await getToken();
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id } = await params;
    const exerciseId = parseInt(id);

    await exercisesService.update(exerciseId, body, token);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Update exercise error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update exercise' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = await getToken();
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const exerciseId = parseInt(id);
    
    console.log('Attempting to delete exercise:', exerciseId);
    await exercisesService.delete(exerciseId, token);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Delete exercise error:', error);
    console.error('Error data:', error.data);
    console.error('Error status:', error.status);
    
    return NextResponse.json(
      { 
        error: error.message || 'Failed to delete exercise',
        details: error.data || undefined 
      },
      { status: error.status || 400 }
    );
  }
}

