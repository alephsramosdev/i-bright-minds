'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { WHATSAPP_URL } from '@/lib/constants';

const CTASection = styled.section`
  position: relative;
  padding: 100px 0;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 60px 0;
  }
`;

const CTAInner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 20px;
  }
`;

const CTACard = styled(motion.div)`
  position: relative;
  background: ${theme.gradients.gold};
  border-radius: 20px;
  padding: 56px 48px;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 40%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 40px solid rgba(255, 255, 255, 0.06);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 44px 24px;
  }
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 700;
  color: ${theme.colors.dark};
  line-height: 1.2;
  margin-bottom: 28px;
  letter-spacing: -0.5px;
  position: relative;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 15px;
  padding: 14px 32px;
  border-radius: 10px;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  text-decoration: none;
  letter-spacing: 0.3px;
  white-space: nowrap;
  background: ${theme.colors.dark};
  color: ${theme.colors.white};
  border: none;
  position: relative;

  &:hover {
    background: ${theme.colors.navy};
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 320px;
    font-size: 14px;
    padding: 14px 24px;
  }
`;

export function CTA() {
  return (
    <CTASection>
      <CTAInner>
        <CTACard
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <CTATitle>
            Pronto para acelerar seu crescimento?
          </CTATitle>
          <CTAButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Fale com um especialista
            <ArrowRight size={16} weight="bold" />
          </CTAButton>
        </CTACard>
      </CTAInner>
    </CTASection>
  );
}
