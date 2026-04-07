'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, WhatsappLogo, TrendUp, Users, ShieldCheck, ChartLineUp } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { WHATSAPP_URL } from '@/lib/constants';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${theme.colors.dark};
  overflow: hidden;
  padding: 160px 0 100px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 130px 0 64px;
    min-height: auto;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 55%;
    height: 100%;
    background: radial-gradient(ellipse at 70% 40%, rgba(21, 26, 58, 0.6) 0%, transparent 65%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 60%;
    background: radial-gradient(ellipse at 20% 80%, rgba(102, 86, 133, 0.12) 0%, transparent 55%);
  }
`;

const GoldOrb = styled.div`
  position: absolute;
  top: 20%;
  right: 15%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 168, 78, 0.05) 0%, transparent 55%);
  pointer-events: none;
  filter: blur(60px);

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const GridLine = styled.div<{ position: string }>`
  position: absolute;
  ${({ position }) => position}
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(200, 168, 78, 0.05) 40%,
    rgba(200, 168, 78, 0.05) 60%,
    transparent 100%
  );
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 80px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const HeroContent = styled.div``;

const HeroLabel = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${theme.colors.gold};
  margin-bottom: 24px;
  padding: 8px 18px 8px 0;
  border-left: 2px solid ${theme.colors.gold};
  padding-left: 16px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(38px, 5vw, 60px);
  font-weight: 700;
  line-height: 1.1;
  color: ${theme.colors.white};
  letter-spacing: -1.5px;
  margin-bottom: 24px;

  span {
    background: ${theme.gradients.goldText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroDescription = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: clamp(16px, 1.3vw, 18px);
  line-height: 1.8;
  color: ${theme.colors.gray400};
  max-width: 500px;
  margin-bottom: 40px;
`;

const HeroActions = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 40px;
  }
`;

const HeroCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 15px;
  padding: 16px 36px;
  border-radius: 10px;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  text-decoration: none;
  letter-spacing: 0.3px;
  white-space: nowrap;
  background: ${theme.gradients.gold};
  color: ${theme.colors.dark};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(200, 168, 78, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 15px;
  padding: 16px 32px;
  border-radius: 10px;
  color: ${theme.colors.gray300};
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  transition: all ${theme.transitions.default};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.white};
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
  }
`;

const TrustBar = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${theme.colors.gold};
    flex-shrink: 0;
  }
`;

const TrustText = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.gray400};
  white-space: nowrap;

  strong {
    color: ${theme.colors.gray300};
    font-weight: 600;
  }
`;

const HeroVisual = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.div)`
  background: rgba(21, 26, 58, 0.35);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 28px;
  transition: all ${theme.transitions.default};

  &:hover {
    border-color: rgba(200, 168, 78, 0.15);
    background: rgba(21, 26, 58, 0.5);
  }
`;

const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const MetricIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(200, 168, 78, 0.08);
  border: 1px solid rgba(200, 168, 78, 0.12);
  color: ${theme.colors.gold};
`;

const MetricBadge = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 11px;
  font-weight: 600;
  color: ${theme.colors.gold};
  background: rgba(200, 168, 78, 0.1);
  border: 1px solid rgba(200, 168, 78, 0.15);
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.3px;
`;

const MetricValue = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: 32px;
  font-weight: 700;
  color: ${theme.colors.white};
  letter-spacing: -1px;
  margin-bottom: 4px;
`;

const MetricLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${theme.colors.gray400};
`;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE_OUT },
  }),
};

const cardFade = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.5 + i * 0.12, ease: EASE_OUT },
  }),
};

export function Hero() {
  return (
    <HeroSection id="inicio">
      <HeroBg>
        <GridLine position="left: 25%;" />
        <GridLine position="left: 50%;" />
        <GridLine position="left: 75%;" />
        <GoldOrb />
      </HeroBg>

      <Container>
        <HeroInner>
          <HeroContent>
            <HeroLabel
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              BM Bright Minds Accelerator
            </HeroLabel>

            <HeroTitle
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
            >
              Transformamos números em <span>direção estratégica</span>
            </HeroTitle>

            <HeroDescription
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
            >
              Estruturação financeira para empresas que querem crescer com
              solidez, eficiência tributária e governança que inspira confiança.
            </HeroDescription>

            <HeroActions
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
            >
              <HeroCTA href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agende uma Consultoria
                <ArrowRight size={18} weight="bold" />
              </HeroCTA>
              <SecondaryLink href="/servicos">
                Nossos Serviços
              </SecondaryLink>
            </HeroActions>

            <TrustBar
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
            >
              <TrustItem>
                <Users size={18} weight="duotone" />
                <TrustText><strong>150+</strong> empresas</TrustText>
              </TrustItem>
              <TrustItem>
                <ShieldCheck size={18} weight="duotone" />
                <TrustText><strong>98%</strong> satisfação</TrustText>
              </TrustItem>
              <TrustItem>
                <TrendUp size={18} weight="duotone" />
                <TrustText><strong>R$ 2.4M</strong> economizados</TrustText>
              </TrustItem>
            </TrustBar>
          </HeroContent>

          <HeroVisual>
            <MetricCard
              initial="hidden"
              animate="visible"
              custom={0}
              variants={cardFade}
            >
              <MetricHeader>
                <MetricIcon>
                  <TrendUp size={22} weight="duotone" />
                </MetricIcon>
                <MetricBadge>+32% trimestral</MetricBadge>
              </MetricHeader>
              <MetricValue>R$ 2.4M</MetricValue>
              <MetricLabel>Economia tributária gerada</MetricLabel>
            </MetricCard>

            <MetricCard
              initial="hidden"
              animate="visible"
              custom={1}
              variants={cardFade}
            >
              <MetricHeader>
                <MetricIcon>
                  <ChartLineUp size={22} weight="duotone" />
                </MetricIcon>
                <MetricBadge>Crescimento</MetricBadge>
              </MetricHeader>
              <MetricValue>47%</MetricValue>
              <MetricLabel>Crescimento médio dos clientes</MetricLabel>
            </MetricCard>

            <MetricCard
              initial="hidden"
              animate="visible"
              custom={2}
              variants={cardFade}
            >
              <MetricHeader>
                <MetricIcon>
                  <Users size={22} weight="duotone" />
                </MetricIcon>
                <MetricBadge>Confiança</MetricBadge>
              </MetricHeader>
              <MetricValue>98%</MetricValue>
              <MetricLabel>Índice de satisfação dos clientes</MetricLabel>
            </MetricCard>
          </HeroVisual>
        </HeroInner>
      </Container>
    </HeroSection>
  );
}
