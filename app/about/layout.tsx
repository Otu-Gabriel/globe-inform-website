import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Globe Inform Computer Systems Ltd',
  description: 'Learn about Globe Inform: our impact, expertise, and why clients choose us for IT consulting and software development.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
