'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
    ChartLineUp,
    Scales,
    ShieldCheck,
    Compass,
    ArrowUpRight,
    CheckCircle,
} from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { Pillars } from '@/components/sections/Pillars';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
    ChartLineUp,
    Scales,
    ShieldCheck,
    Compass,
};

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
`;

const ServiceBlock = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  background: rgba(21, 26, 58, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 56px 48px;
  transition: all ${theme.transitions.slow};

  &:hover {
    background: rgba(21, 26, 58, 0.35);
    border-color: rgba(200, 168, 78, 0.12);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 40px 28px;
  }
`;

const ServiceInfo = styled.div``;

const ServiceIconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(200, 168, 78, 0.08);
  border: 1px solid rgba(200, 168, 78, 0.15);
  color: ${theme.colors.gold};
`;

const ServiceTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(24px, 2.5vw, 32px);
  font-weight: 700;
  color: ${theme.colors.white};
  letter-spacing: -0.3px;
`;

const ServiceDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.8;
  color: ${theme.colors.gray400};
  margin-bottom: 32px;
`;

const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: ${theme.colors.gray300};

  svg {
    flex-shrink: 0;
    color: ${theme.colors.gold};
  }
`;

const ServiceVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatCard = styled.div`
  background: rgba(11, 11, 11, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 40px;
  text-align: center;
  width: 100%;
  max-width: 320px;
`;

const StatValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 48px;
  font-weight: 700;
  background: ${theme.gradients.goldText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${theme.colors.gray400};
`;

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT },
    }),
};

const serviceBenefits: Record<string, string[]> = {
    estruturacao: [
        'Organização de fluxo de caixa e demonstrações financeiras',
        'Construção de projeções financeiras realistas',
        'Dashboards de indicadores financeiros chave',
        'Base sólida para captação de investimentos',
    ],
    tributario: [
        'Análise completa do regime tributário vigente',
        'Identificação de créditos e oportunidades fiscais',
        'Planejamento de carga tributária otimizada',
        'Total conformidade com a legislação vigente',
    ],
    governanca: [
        'Implementação de processos e controles internos',
        'Estruturação de conselhos e comitês',
        'Práticas de transparência e compliance',
        'Preparação para auditorias e investidores',
    ],
    consultoria: [
        'Diagnóstico financeiro profundo e personalizado',
        'Definição de metas e KPIs estratégicos',
        'Acompanhamento executivo mensal',
        'Orientação para tomada de decisão em momentos críticos',
    ],
};

const serviceStats: Record<string, { value: string; label: string }> = {
    estruturacao: { value: '150+', label: 'Empresas Estruturadas' },
    tributario: { value: 'R$40M+', label: 'Em Economia Tributária' },
    governanca: { value: '98%', label: 'Satisfação dos Clientes' },
    consultoria: { value: '12+', label: 'Anos de Experiência' },
};

export function ServicosContent() {
    return (
        <>
            <PageHero
                label="Nossos Serviços"
                title={<>Soluções que <span>transformam</span> a gestão financeira</>}
                description="Cada serviço é desenhado a partir de um diagnóstico profundo, com foco em resultados mensuráveis e sustentáveis para o seu negócio."
            />

            <Section bg="dark">
                <Container>
                    <ServicesGrid>
                        {SERVICES.map((service, index) => {
                            const Icon = iconMap[service.icon];
                            const benefits = serviceBenefits[service.id];
                            const stat = serviceStats[service.id];
                            return (
                                <ServiceBlock
                                    key={service.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-60px' }}
                                    custom={index}
                                    variants={cardVariants}
                                >
                                    <ServiceInfo>
                                        <ServiceIconRow>
                                            <IconWrapper>
                                                <Icon size={28} weight="duotone" />
                                            </IconWrapper>
                                        </ServiceIconRow>
                                        <ServiceTitle>{service.title}</ServiceTitle>
                                        <ServiceDescription>{service.description}</ServiceDescription>
                                        <BenefitsList>
                                            {benefits.map((benefit) => (
                                                <BenefitItem key={benefit}>
                                                    <CheckCircle size={20} weight="fill" />
                                                    {benefit}
                                                </BenefitItem>
                                            ))}
                                        </BenefitsList>
                                    </ServiceInfo>
                                    <ServiceVisual>
                                        <StatCard>
                                            <StatValue>{stat.value}</StatValue>
                                            <StatLabel>{stat.label}</StatLabel>
                                        </StatCard>
                                    </ServiceVisual>
                                </ServiceBlock>
                            );
                        })}
                    </ServicesGrid>
                </Container>
            </Section>

            <Pillars />
            <Testimonials />
            <CTA />
        </>
    );
}
