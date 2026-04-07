'use client';

import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { motion, useInView } from 'framer-motion';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { METRICS } from '@/lib/constants';

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(200, 168, 78, 0.1);
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 56px 32px;
  background: ${theme.colors.navy};
  text-align: center;
`;

const MetricValue = styled.span`
  font-family: ${theme.fonts.heading};
  font-size: clamp(40px, 4vw, 56px);
  font-weight: 700;
  line-height: 1;
  background: ${theme.gradients.goldText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
`;

const MetricLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.gray400};
  letter-spacing: 0.5px;
`;

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let current = 0;
    const duration = 2000;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      if (ref.current) {
        ref.current.textContent = `${Math.floor(current)}${suffix}`;
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, suffix]);

  return <MetricValue ref={ref}>0{suffix}</MetricValue>;
}

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 40px;
  }
`;

const HeaderLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.gold};
  margin-bottom: 20px;

  &::before,
  &::after {
    content: '';
    width: 32px;
    height: 1px;
    background: ${theme.gradients.gold};
  }
`;

const HeaderTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 700;
  color: ${theme.colors.white};
  letter-spacing: -0.5px;
`;

export function Metrics() {
  return (
    <Section bg="navy" paddingY="100px">
      <Container>
        <SectionHeader>
          <HeaderLabel>Resultados</HeaderLabel>
          <HeaderTitle>Números que contam nossa história</HeaderTitle>
        </SectionHeader>

        <MetricsGrid>
          {METRICS.map((metric, index) => (
            <MetricCard
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: EASE_OUT,
              }}
            >
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <MetricLabel>{metric.label}</MetricLabel>
            </MetricCard>
          ))}
        </MetricsGrid>
      </Container>
    </Section>
  );
}
