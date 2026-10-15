import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProfileClient from './profile-client';
import { PROFILES_DATA } from '../data';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = PROFILES_DATA[params.id.toLowerCase()];

  if (!member) {
    return { title: 'Profile Not Found • Potato Archives' };
  }

  return {
    title: `Potato Archives • ${member.name}'s Profile`,
    description: `View profile statistics, hardware, favorites, and Steam stats for ${member.name}.`,
  };
}

export default function ProfilePage({ params }: Props) {
  const member = PROFILES_DATA[params.id.toLowerCase()];

  if (!member) {
    notFound();
  }

  return <ProfileClient memberId={params.id.toLowerCase()} />;
}