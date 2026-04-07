'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { WHATSAPP_URL } from '@/lib/constants';

const Fab = styled(motion.a)`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: #25D366;
  color: ${theme.colors.white};
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  transition: all ${theme.transitions.default};
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37, 211, 102, 0.4);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    border-radius: 14px;
  }
`;

export function WhatsAppFab() {
    return (
        <Fab
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5, ease: EASE_OUT }}
        >
            <WhatsappLogo size={26} weight="fill" />
        </Fab>
    );
}
