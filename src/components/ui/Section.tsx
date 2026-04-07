'use client';

import styled from '@emotion/styled';
import { theme } from '@/lib/theme';

interface SectionProps {
  bg?: 'dark' | 'navy' | 'white' | 'gradient';
  paddingY?: string;
}

export const Section = styled.section<SectionProps>`
  position: relative;
  padding: ${({ paddingY }) => paddingY || '100px'} 0;
  overflow: hidden;

  ${({ bg = 'dark' }) => {
    switch (bg) {
      case 'dark':
        return `background-color: ${theme.colors.dark};`;
      case 'navy':
        return `background-color: ${theme.colors.navy};`;
      case 'white':
        return `
          background-color: ${theme.colors.gray100};
          color: ${theme.colors.dark};
        `;
      case 'gradient':
        return `background: ${theme.gradients.navy};`;
    }
  }}

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${({ paddingY }) => paddingY ? `calc(${paddingY} * 0.6)` : '60px'} 0;
  }
`;
