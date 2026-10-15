import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProfileClient from './profile-client';
import { PROFILES_DATA } from '../data';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const member = PROFILES_DATA[id.toLowerCase()];

  if (!member) {
    return { title: 'Profile Not Found • Potato Archives' };
  }

  return {
    title: `Potato Archives • ${member.name}'s Profile`,
    description: `View profile statistics, hardware, favorites, and Steam stats for ${member.name}.`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params;
  const member = PROFILES_DATA[id.toLowerCase()];

  if (!member) {
    notFound();
  }

  return <ProfileClient memberId={id.toLowerCase()} />;
}