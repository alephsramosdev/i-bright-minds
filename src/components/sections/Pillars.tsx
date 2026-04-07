'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Buildings, Lamp, CurrencyDollar } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { PILLARS } from '@/lib/constants';

const iconMap = [Buildings, Lamp, CurrencyDollar];

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const PillarCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 48px 36px 44px;
  overflow: hidden;
  transition: all ${theme.transitions.slow};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${theme.gradients.gold};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 32px;
    right: 32px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(200, 168, 78, 0.1), transparent);
  }

  &:hover {
    background: rgba(21, 26, 58, 0.4);
    border-color: rgba(200, 168, 78, 0.15);
    transform: translateY(-6px);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const PillarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(200, 168, 78, 0.06);
  border: 1px solid rgba(200, 168, 78, 0.12);
  margin-bottom: 28px;
  color: ${theme.colors.gold};
  transition: all ${theme.transitions.default};

  ${PillarCard}:hover & {
    background: rgba(200, 168, 78, 0.12);
    border-color: rgba(200, 168, 78, 0.25);
    transform: scale(1.05);
  }
`;

const PillarTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 26px;
  font-weight: 700;
  color: ${theme.colors.white};
  line-height: 1.2;
  margin-bottom: 6px;
  letter-spacing: -0.3px;
`;

const PillarSubtitle = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: 16px;
  font-weight: 500;
  color: ${theme.colors.gold};
  display: block;
  margin-bottom: 20px;
`;

const PillarDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 1.75;
  color: ${theme.colors.gray400};
`;

const PillarNumber = styled.span`
  position: absolute;
  top: 36px;
  right: 36px;
  font-family: ${theme.fonts.heading};
  font-size: 64px;
  font-weight: 800;
  line-height: 1;
  color: rgba(255, 255, 255, 0.03);
  user-select: none;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: EASE_OUT },
  }),
};

export function Pillars() {
  return (
    <Section id="pilares" bg="navy">
      <Container>
        <SectionTitle
          label="Nossos Pilares"
          title="A base de tudo o que construímos"
          subtitle="Três pilares que sustentam nosso trabalho e garantem resultados consistentes para cada cliente."
        />

        <PillarsGrid>
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[index];
            return (
              <PillarCard
                key={pillar.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={index}
                variants={cardVariants}
              >
                <PillarNumber>{String(index + 1).padStart(2, '0')}</PillarNumber>
                <PillarIcon>
                  <Icon size={30} weight="duotone" />
                </PillarIcon>
                <PillarTitle>{pillar.title}</PillarTitle>
                <PillarSubtitle>{pillar.subtitle}</PillarSubtitle>
                <PillarDescription>{pillar.description}</PillarDescription>
              </PillarCard>
            );
          })}
        </PillarsGrid>
      </Container>
    </Section>
  );
}
