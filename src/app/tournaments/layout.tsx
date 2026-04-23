import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Chess Tournaments in India | Compete & Win",
  description: "Join online chess tournaments and compete with players across India. Improve your skills, gain rankings, and win certificates with Glorious Chess Academy",
};

export default function TournamentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
