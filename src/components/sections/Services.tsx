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
} from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  UsersThree,
  GearSix,
  Megaphone,
  Target,
  CalendarCheck,
} as const;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  background: rgba(21, 26, 58, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 44px 36px;
  transition: all ${theme.transitions.default};
  overflow: hidden;
  cursor: default;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 32px;
    right: 32px;
    height: 2px;
    background: ${theme.gradients.gold};
    opacity: 0;
    transform: scaleX(0.3);
    transition: all 0.4s ease;
  }

  &:hover {
    background: rgba(21, 26, 58, 0.5);
    border-color: rgba(200, 168, 78, 0.12);
    transform: translateY(-6px);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);

    &::before {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(200, 168, 78, 0.06);
  border: 1px solid rgba(200, 168, 78, 0.12);
  color: ${theme.colors.gold};
  transition: all ${theme.transitions.default};

  ${ServiceCard}:hover & {
    background: rgba(200, 168, 78, 0.12);
    border-color: rgba(200, 168, 78, 0.25);
  }
`;

const ArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  color: ${theme.colors.gray500};
  transition: all ${theme.transitions.default};

  ${ServiceCard}:hover & {
    background: rgba(200, 168, 78, 0.12);
    color: ${theme.colors.gold};
  }
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 14px;
  letter-spacing: -0.3px;
  transition: color ${theme.transitions.default};

  ${ServiceCard}:hover & {
    color: ${theme.colors.goldLight};
  }
`;

const CardDescription = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 1.75;
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

export function Services() {
  return (
    <Section id="servicos" bg="gradient">
      <Container>
        <SectionTitle
          label="Serviços"
          title="O que fazemos pela sua empresa"
          subtitle="Cada solução é desenhada a partir de um diagnóstico profundo, com foco em resultados mensuráveis e sustentáveis."
        />

        <ServicesGrid>
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ServiceCard
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={index}
                variants={cardVariants}
              >
                <CardHeader>
                  <IconWrapper>
                    <Icon size={28} weight="duotone" />
                  </IconWrapper>
                  <ArrowIcon>
                    <ArrowUpRight size={18} weight="bold" />
                  </ArrowIcon>
                </CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </ServiceCard>
            );
          })}
        </ServicesGrid>
      </Container>
    </Section>
  );
}
