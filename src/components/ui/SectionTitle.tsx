'use client';

import styled from '@emotion/styled';
import { theme } from '@/lib/theme';

interface SectionTitleProps {
  align?: 'left' | 'center';
  light?: boolean;
}

const Wrapper = styled.div<SectionTitleProps>`
  margin-bottom: 56px;
  text-align: ${({ align = 'left' }) => align};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: 36px;
  }
`;

const Label = styled.span`
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

  &::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 1px;
    background: ${theme.gradients.gold};
  }
`;

const Title = styled.h2<{ light?: boolean }>`
  font-family: ${theme.fonts.heading};
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  color: ${({ light }) => (light ? theme.colors.dark : theme.colors.white)};
  letter-spacing: -0.5px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p<{ light?: boolean; $centered?: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: clamp(16px, 1.5vw, 18px);
  line-height: 1.7;
  color: ${({ light }) => (light ? theme.colors.gray500 : theme.colors.gray400)};
  max-width: 600px;
  ${({ $centered }) => $centered && 'margin: 0 auto;'}
`;

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionTitle({ label, title, subtitle, align = 'left', light = false }: Props) {
  return (
    <Wrapper align={align}>
      {label && <Label>{label}</Label>}
      <Title light={light}>{title}</Title>
      {subtitle && <Subtitle light={light} $centered={align === 'center'}>{subtitle}</Subtitle>}
    </Wrapper>
  );
}
