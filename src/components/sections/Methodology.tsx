'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Crosshair, TreeStructure, Heartbeat, Rocket } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';

const MethodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StepConnector = styled.div`
  position: absolute;
  top: 48px;
  left: 12.5%;
  right: 12.5%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(200, 168, 78, 0.15) 0%,
    rgba(200, 168, 78, 0.4) 50%,
    rgba(200, 168, 78, 0.15) 100%
  );
  z-index: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StepCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: ${theme.colors.dark};
  border: 2px solid rgba(200, 168, 78, 0.25);
  margin-bottom: 32px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(200, 168, 78, 0.08);
  }

  svg {
    color: ${theme.colors.gold};
  }
`;

const StepIndex = styled.span`
  position: absolute;
  top: -8px;
  right: -4px;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.dark};
  background: ${theme.gradients.gold};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 12px;
`;

const StepText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  line-height: 1.7;
  color: ${theme.colors.gray400};
  max-width: 220px;
`;

const steps = [
  {
    icon: Crosshair,
    title: 'Diagnóstico',
    text: 'Mapeamento completo da situação financeira, tributária e de governança.',
  },
  {
    icon: TreeStructure,
    title: 'Planejamento',
    text: 'Plano de ação personalizado com metas claras e prazos definidos.',
  },
  {
    icon: Heartbeat,
    title: 'Implementação',
    text: 'Execução estruturada com acompanhamento constante de cada etapa.',
  },
  {
    icon: Rocket,
    title: 'Aceleração',
    text: 'Monitoramento de resultados e ajustes estratégicos contínuos.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: EASE_OUT },
  }),
};

export function Methodology() {
  return (
    <Section bg="dark">
      <Container>
        <SectionTitle
          label="Metodologia"
          title="Como trabalhamos"
          subtitle="Um processo claro e estruturado que transforma complexidade financeira em clareza estratégica."
          align="center"
        />

        <MethodGrid>
          <StepConnector />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StepCard
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={index}
                variants={cardVariants}
              >
                <StepNumber>
                  <Icon size={36} weight="duotone" />
                  <StepIndex>{String(index + 1).padStart(2, '0')}</StepIndex>
                </StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
              </StepCard>
            );
          })}
        </MethodGrid>
      </Container>
    </Section>
  );
}
