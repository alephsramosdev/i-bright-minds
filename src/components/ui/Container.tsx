'use client';

import styled from '@emotion/styled';
import { theme } from '@/lib/theme';

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.spacing.containerMax};
  margin: 0 auto;
  padding: 0 ${theme.spacing.containerPadding};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 20px;
  }
`;
