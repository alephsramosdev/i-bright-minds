import type { Metadata } from 'next';
import { SobreContent } from './SobreContent';

export const metadata: Metadata = {
    title: 'Sobre | BM Bright Minds Accelerator',
    description:
        'Conheça a BM Bright Minds Accelerator. Consultoria estratégica focada na estruturação financeira de empresas em crescimento.',
};

export default function SobrePage() {
    return <SobreContent />;
}
