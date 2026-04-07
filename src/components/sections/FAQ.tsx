'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { FAQ_ITEMS } from '@/lib/constants';

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: flex-start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FAQLeft = styled.div``;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FAQItem = styled.div<{ open: boolean }>`
  background: ${({ open }) =>
    open ? 'rgba(21, 26, 58, 0.4)' : 'rgba(255, 255, 255, 0.02)'};
  border: 1px solid
    ${({ open }) =>
      open ? 'rgba(200, 168, 78, 0.15)' : 'rgba(255, 255, 255, 0.06)'};
  border-radius: 14px;
  overflow: hidden;
  transition: all ${theme.transitions.default};

  &:hover {
    border-color: ${({ open }) =>
      open ? 'rgba(200, 168, 78, 0.25)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  span {
    font-family: ${theme.fonts.heading};
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.white};
    line-height: 1.4;
  }
`;

const ToggleIcon = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  flex-shrink: 0;
  background: ${({ open }) =>
    open ? 'rgba(200, 168, 78, 0.15)' : 'rgba(255, 255, 255, 0.04)'};
  color: ${({ open }) => (open ? theme.colors.gold : theme.colors.gray400)};
  transition: all ${theme.transitions.default};
`;

const FAQAnswer = styled(motion.div)`
  overflow: hidden;
`;

const FAQAnswerContent = styled.div`
  padding: 0 28px 24px;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 1.8;
  color: ${theme.colors.gray400};
`;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section bg="dark" paddingY="100px">
      <Container>
        <FAQGrid>
          <FAQLeft>
            <SectionTitle
              label="Dúvidas Frequentes"
              title="Perguntas que recebemos com frequência"
              subtitle="Se a sua dúvida não está aqui, entre em contato conosco. Nossa equipe está pronta para ajudar."
            />
          </FAQLeft>

          <FAQList>
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem key={index} open={openIndex === index}>
                <FAQQuestion onClick={() => toggle(index)}>
                  <span>{item.question}</span>
                  <ToggleIcon open={openIndex === index}>
                    {openIndex === index ? (
                      <Minus size={16} weight="bold" />
                    ) : (
                      <Plus size={16} weight="bold" />
                    )}
                  </ToggleIcon>
                </FAQQuestion>
                <AnimatePresence>
                  {openIndex === index && (
                    <FAQAnswer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                    >
                      <FAQAnswerContent>{item.answer}</FAQAnswerContent>
                    </FAQAnswer>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQList>
        </FAQGrid>
      </Container>
    </Section>
  );
}
