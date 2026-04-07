'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(21, 26, 58, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 56px 48px;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 48px;
    right: 48px;
    height: 2px;
    background: ${theme.gradients.gold};
    border-radius: 0 0 2px 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 40px 24px;

    &::before {
      left: 24px;
      right: 24px;
    }
  }
`;

const QuoteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(200, 168, 78, 0.08);
  border: 1px solid rgba(200, 168, 78, 0.15);
  margin: 0 auto 32px;
  color: ${theme.colors.gold};
`;

const TestimonialText = styled.blockquote`
  font-family: ${theme.fonts.body};
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.8;
  color: ${theme.colors.gray300};
  font-style: italic;
  margin-bottom: 36px;
`;

const AuthorName = styled.strong`
  display: block;
  font-family: ${theme.fonts.heading};
  font-size: 17px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 4px;
  font-style: normal;
`;

const AuthorRole = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  color: ${theme.colors.gold};
  font-style: normal;
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${theme.colors.gray400};
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    background: rgba(200, 168, 78, 0.1);
    border-color: rgba(200, 168, 78, 0.3);
    color: ${theme.colors.gold};
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: ${({ active }) => (active ? '24px' : '8px')};
  height: 8px;
  border-radius: 4px;
  background: ${({ active }) => (active ? theme.colors.gold : 'rgba(255, 255, 255, 0.15)')};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${({ active }) =>
    active ? theme.colors.gold : 'rgba(255, 255, 255, 0.25)'};
  }
`;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const navigate = (newIndex: number) => {
    setCurrent([newIndex, newIndex > current ? 1 : -1]);
  };

  const prev = () => navigate(current === 0 ? TESTIMONIALS.length - 1 : current - 1);
  const next = () => navigate(current === TESTIMONIALS.length - 1 ? 0 : current + 1);

  const testimonial = TESTIMONIALS[current];

  return (
    <Section id="resultados" bg="dark">
      <Container>
        <SectionTitle
          label="Depoimentos"
          title="O que dizem sobre nós"
          subtitle="A confiança dos nossos clientes é o maior indicador do nosso trabalho."
          align="center"
        />

        <TestimonialsWrapper>
          <AnimatePresence mode="wait" custom={direction}>
            <TestimonialCard
              key={testimonial.id}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              transition={{ duration: 0.4, ease: EASE_OUT }}
            >
              <QuoteIcon>
                <Quotes size={28} weight="fill" />
              </QuoteIcon>
              <TestimonialText>&ldquo;{testimonial.text}&rdquo;</TestimonialText>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorRole>{testimonial.role}</AuthorRole>
            </TestimonialCard>
          </AnimatePresence>

          <NavButtons>
            <NavButton onClick={prev} aria-label="Depoimento anterior">
              <CaretLeft size={20} weight="bold" />
            </NavButton>
            <Dots>
              {TESTIMONIALS.map((_, index) => (
                <Dot
                  key={index}
                  active={index === current}
                  onClick={() => navigate(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </Dots>
            <NavButton onClick={next} aria-label="Próximo depoimento">
              <CaretRight size={20} weight="bold" />
            </NavButton>
          </NavButtons>
        </TestimonialsWrapper>
      </Container>
    </Section>
  );
}
