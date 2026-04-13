'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
    UsersThree,
    GearSix,
    Megaphone,
    Target,
    CalendarCheck,
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
    UsersThree,
    GearSix,
    Megaphone,
    Target,
    CalendarCheck,
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

const IntroText = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 18px;
  line-height: 1.85;
  color: ${theme.colors.gray300};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ResultCard = styled(motion.div)`
  background: rgba(21, 26, 58, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 40px 32px;
  transition: all ${theme.transitions.slow};

  &:hover {
    background: rgba(21, 26, 58, 0.4);
    border-color: rgba(200, 168, 78, 0.15);
    transform: translateY(-4px);
  }
`;

const ResultTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    color: ${theme.colors.gold};
    flex-shrink: 0;
  }
`;

const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ResultItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: ${theme.colors.gray300};
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    color: ${theme.colors.gold};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

const SectionLabel = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.gold};
  margin-bottom: 16px;

  &::before,
  &::after {
    content: '';
    width: 32px;
    height: 1px;
    background: ${theme.gradients.gold};
  }
`;

const SectionHeading = styled(motion.h2)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 700;
  color: ${theme.colors.white};
  letter-spacing: -0.5px;
  margin-top: 16px;
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
    'gestao-pessoas': [
        'Redução de riscos trabalhistas',
        'Aumento da produtividade da equipe',
        'Clareza de papéis e responsabilidades',
        'Melhoria no desempenho e engajamento',
    ],
    processos: [
        'Redução de erros e retrabalho',
        'Ganho de produtividade operacional',
        'Processos padronizados e escaláveis',
        'Maior controle e organização interna',
    ],
    'marketing-vendas': [
        'Aumento na geração de leads qualificados',
        'Crescimento no faturamento',
        'Estrutura comercial mais organizada',
        'Maior previsibilidade de vendas',
    ],
    'metas-kpis': [
        'Métricas claras e objetivas',
        'Acompanhamento de performance em tempo real',
        'Tomada de decisão baseada em dados',
        'Alinhamento de metas entre áreas',
    ],
    acompanhamento: [
        'Suporte executivo contínuo',
        'Ajustes estratégicos mensais',
        'Garantia de execução do plano',
        'Evolução constante do negócio',
    ],
};

const serviceStats: Record<string, { value: string; label: string }> = {
    'gestao-pessoas': { value: '150+', label: 'Empresas Atendidas' },
    processos: { value: '98%', label: 'Satisfação dos Clientes' },
    'marketing-vendas': { value: '12+', label: 'Anos de Experiência' },
    'metas-kpis': { value: '500+', label: 'KPIs Implementados' },
    acompanhamento: { value: '100%', label: 'Foco em Resultados' },
};

export function ServicosContent() {
    return (
        <>
            <PageHero
                label="Nossos Serviços"
                title={<>Soluções que <span>transformam</span> a gestão da sua empresa</>}
                description="Atuamos na transformação e evolução de empresas, integrando gestão, operação e crescimento, com foco em performance, escala e geração de valor sustentável."
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

            <Section bg="navy">
                <Container>
                    <SectionHeader>
                        <SectionLabel
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE_OUT }}
                        >
                            Resultados
                        </SectionLabel>
                        <SectionHeading
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
                        >
                            Resultados por frente de atuação
                        </SectionHeading>
                    </SectionHeader>

                    <ResultsGrid>
                        <ResultCard
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            variants={cardVariants}
                        >
                            <ResultTitle>
                                <UsersThree size={24} weight="duotone" />
                                Gestão de Pessoas
                            </ResultTitle>
                            <ResultList>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Redução de riscos trabalhistas
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Aumento da produtividade da equipe
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Clareza de papéis e responsabilidades
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Melhoria no desempenho e engajamento
                                </ResultItem>
                            </ResultList>
                        </ResultCard>

                        <ResultCard
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            variants={cardVariants}
                        >
                            <ResultTitle>
                                <GearSix size={24} weight="duotone" />
                                Processos e Eficiência Operacional
                            </ResultTitle>
                            <ResultList>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Redução de erros e retrabalho
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Ganho de produtividade operacional
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Processos padronizados e escaláveis
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Maior controle e organização interna
                                </ResultItem>
                            </ResultList>
                        </ResultCard>

                        <ResultCard
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            variants={cardVariants}
                        >
                            <ResultTitle>
                                <Megaphone size={24} weight="duotone" />
                                Marketing e Vendas
                            </ResultTitle>
                            <ResultList>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Aumento na geração de leads qualificados
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Crescimento no faturamento
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Estrutura comercial mais organizada
                                </ResultItem>
                                <ResultItem>
                                    <CheckCircle size={18} weight="fill" />
                                    Maior previsibilidade de vendas
                                </ResultItem>
                            </ResultList>
                        </ResultCard>
                    </ResultsGrid>
                </Container>
            </Section>

            <Pillars />
            <Testimonials />
            <CTA />
        </>
    );
}
