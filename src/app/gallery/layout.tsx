import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gallery | Glorious Chess Academy Moments & Tournaments",
  description: "Explore memorable moments, tournaments, student achievements, and events at Glorious Chess Academy through our extensive photo gallery.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
