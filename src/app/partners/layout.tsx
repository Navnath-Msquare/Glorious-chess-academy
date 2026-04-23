import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Start Your Chess Academy | Become a Chess Partner in India",
  description: "Become a chess partner and start your own academy. Get platform support, student leads, and training to grow your coaching business with Glorious Chess Academy.",
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
