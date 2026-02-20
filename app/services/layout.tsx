import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Globe Inform Computer Systems Ltd',
  description: 'IT consulting, insurance applications, tax systems, database analytics, and software development.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
