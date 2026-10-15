import type { Metadata } from 'next';
import ProfileClient from './profile-client';

type Props = {
  params: Promise<{ id: string }>;
};

// Next.js Server Metadata: Sets the browser tab title permanently on initial load and refreshes
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const memberName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Member';

  return {
    title: `Potato Archives • ${memberName}`,
    description: `Personal lore, stats, quotes, and individual history for ${memberName}.`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params;
  return <ProfileClient id={id} />;
}