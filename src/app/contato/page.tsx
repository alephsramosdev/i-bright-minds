import type { Metadata } from 'next';
import { ContatoContent } from './ContatoContent';

export const metadata: Metadata = {
    title: 'Contato | BM Bright Minds Accelerator',
    description:
        'Entre em contato com a BM Bright Minds Accelerator. Agende uma consultoria estratégica financeira para sua empresa.',
};

export default function ContatoPage() {
    return <ContatoContent />;
}
