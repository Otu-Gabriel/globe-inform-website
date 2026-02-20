import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Applications - Globe Inform Computer Systems Ltd',
  description: 'Explore our comprehensive software solutions: Life Insurance, School Management, General Insurance, Pensions, Tax Management, Re-insurance, Treasury, and Investment Management Systems.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
