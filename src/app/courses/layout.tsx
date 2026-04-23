import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chess Courses Online | Beginner to Advanced Training Programs",
  description: "Explore structured chess courses from beginner to advanced levels. Learn strategies, tactics, and competitive play with professional coaching at Glorious Chess Academy.",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
