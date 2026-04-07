'use client';

import styled from '@emotion/styled';
import { theme } from '@/lib/theme';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { padding: '10px 24px', fontSize: '14px' },
  md: { padding: '14px 32px', fontSize: '15px' },
  lg: { padding: '18px 40px', fontSize: '16px' },
};

export const Button = styled.a<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: ${({ size = 'md' }) => sizeMap[size].fontSize};
  padding: ${({ size = 'md' }) => sizeMap[size].padding};
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  text-decoration: none;
  border: 2px solid transparent;
  letter-spacing: 0.3px;
  white-space: nowrap;

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'primary':
        return `
          background: ${theme.gradients.gold};
          color: ${theme.colors.dark};
          border-color: transparent;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 30px rgba(200, 168, 78, 0.35);
          }
        `;
      case 'secondary':
        return `
          background: ${theme.colors.navy};
          color: ${theme.colors.white};
          border-color: ${theme.colors.navyLight};

          &:hover {
            background: ${theme.colors.navyLight};
            border-color: ${theme.colors.purple};
            transform: translateY(-2px);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.white};
          border-color: rgba(255, 255, 255, 0.25);

          &:hover {
            border-color: ${theme.colors.gold};
            color: ${theme.colors.gold};
            transform: translateY(-2px);
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${theme.colors.gold};
          border-color: transparent;
          padding-left: 0;
          padding-right: 0;

          &:hover {
            opacity: 0.8;
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }
`;
