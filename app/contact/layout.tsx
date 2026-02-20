import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Globe Inform Computer Systems Ltd',
  description: 'Contact Globe Inform for IT consulting, software development, and enterprise solutions.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
