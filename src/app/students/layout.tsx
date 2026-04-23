import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Chess Classes for Kids & Beginners | Learn Chess in India",
  description: "Join online chess classes for beginners and kids. Learn from expert coaches with structured training, practice sessions, and tournaments. Book your free demo today.",
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
