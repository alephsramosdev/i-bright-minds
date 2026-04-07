'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';

const HeroSection = styled.section`
  position: relative;
  padding: 160px 0 80px;
  background: ${theme.colors.dark};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 130px 0 56px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -15%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(21, 26, 58, 0.5) 0%, transparent 70%);
  }
`;

const Label = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.gold};
  margin-bottom: 20px;

  &::before {
    content: '';
    width: 40px;
    height: 1px;
    background: ${theme.gradients.gold};
  }
`;

const Title = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.1;
  color: ${theme.colors.white};
  letter-spacing: -1px;
  margin-bottom: 20px;
  max-width: 720px;

  span {
    background: ${theme.gradients.goldText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Description = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: clamp(16px, 1.4vw, 18px);
  line-height: 1.75;
  color: ${theme.colors.gray400};
  max-width: 560px;
`;

const Divider = styled(motion.div)`
  width: 60px;
  height: 2px;
  background: ${theme.gradients.gold};
  margin-top: 40px;
`;

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: EASE_OUT },
    }),
};

interface PageHeroProps {
    label: string;
    title: React.ReactNode;
    description?: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
    return (
        <HeroSection>
            <HeroBg />
            <Container>
                <Label initial="hidden" animate="visible" custom={0} variants={fadeUp}>
                    {label}
                </Label>
                <Title initial="hidden" animate="visible" custom={1} variants={fadeUp}>
                    {title}
                </Title>
                {description && (
                    <Description initial="hidden" animate="visible" custom={2} variants={fadeUp}>
                        {description}
                    </Description>
                )}
                <Divider initial="hidden" animate="visible" custom={3} variants={fadeUp} />
            </Container>
        </HeroSection>
    );
}
