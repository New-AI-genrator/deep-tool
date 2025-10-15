import { NextResponse } from 'next/server';

export async function GET() {
	const events = [
		{ id: '1', type: 'price_change', tool: 'Runway', detail: 'Updated pricing tiers', time: new Date().toISOString() },
		{ id: '2', type: 'release', tool: 'Midjourney', detail: 'v6.5 style controls', time: new Date().toISOString() },
		{ id: '3', type: 'benchmark_update', tool: 'Claude', detail: 'Latency -12%', time: new Date().toISOString() }
	];
	return NextResponse.json({ events });
}
