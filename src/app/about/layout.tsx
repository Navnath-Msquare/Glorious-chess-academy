import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Glorious Chess Academy | Leading Chess Academy in India",
  description: "Glorious Chess Academy is a fast-growing chess platform in India, leading in Marathwada. Learn about our mission, vision, and expert coaching approach",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
