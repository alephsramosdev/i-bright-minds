export const theme = {
  colors: {
    dark: '#0B0B0B',
    navy: '#151A3A',
    navyLight: '#1E2450',
    purple: '#665685',
    white: '#FFFFFF',
    gold: '#C8A84E',
    goldLight: '#E8D48B',
    gray100: '#F5F5F7',
    gray200: '#E8E8ED',
    gray300: '#D1D1D6',
    gray400: '#A1A1A6',
    gray500: '#6E6E73',
  },
  gradients: {
    gold: 'linear-gradient(135deg, #C8A84E 0%, #E8D48B 50%, #C8A84E 100%)',
    goldText: 'linear-gradient(135deg, #C8A84E 0%, #E8D48B 40%, #C8A84E 100%)',
    goldSubtle: 'linear-gradient(135deg, rgba(200,168,78,0.08) 0%, rgba(232,212,139,0.04) 100%)',
    navy: 'linear-gradient(180deg, #151A3A 0%, #0B0B0B 100%)',
    navyReverse: 'linear-gradient(180deg, #0B0B0B 0%, #151A3A 100%)',
    heroOverlay: 'radial-gradient(ellipse at 20% 50%, rgba(21, 26, 58, 0.6) 0%, rgba(11, 11, 11, 0.95) 70%)',
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
    wide: '1440px',
  },
  spacing: {
    sectionY: '120px',
    sectionYMobile: '64px',
    containerMax: '1200px',
    containerPadding: '24px',
    gap: '32px',
    gapSmall: '16px',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.6s ease',
    spring: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const;

export const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

export type Theme = typeof theme;
