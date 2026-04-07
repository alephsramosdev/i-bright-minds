import type { Metadata } from 'next';
import { ServicosContent } from './ServicosContent';

export const metadata: Metadata = {
    title: 'Serviços | BM Bright Minds Accelerator',
    description:
        'Estruturação financeira, planejamento tributário, governança corporativa e consultoria estratégica para empresas em crescimento.',
};

export default function ServicosPage() {
    return <ServicosContent />;
}
