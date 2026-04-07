import type { Metadata } from 'next';
import './globals.css';
import EmotionRegistry from '@/lib/EmotionRegistry';
import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFab } from '@/components/ui/WhatsAppFab';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'BM Bright Minds Accelerator | Consultoria Estratégica Financeira',
  description:
    'Consultoria estratégica focada na estruturação financeira de empresas em crescimento. Transformamos números em direção estratégica com eficiência tributária, governança corporativa e planejamento de longo prazo.',
  keywords: [
    'consultoria financeira',
    'estruturação financeira',
    'planejamento tributário',
    'governança corporativa',
    'Bright Minds Accelerator',
  ],
  openGraph: {
    title: 'BM Bright Minds Accelerator',
    description:
      'Estruturação financeira para empresas que querem crescer com solidez.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <EmotionRegistry>
          <ScrollToTop />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </EmotionRegistry>
      </body>
    </html>
  );
}
