'use client';

import styled from '@emotion/styled';
import Link from 'next/link';
import { LinkedinLogo, InstagramLogo, EnvelopeSimple, Phone, MapPin, WhatsappLogo } from '@phosphor-icons/react';
import { theme } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';

const FooterWrapper = styled.footer`
  background: ${theme.colors.dark};
  border-top: 2px solid transparent;
  border-image: ${theme.gradients.gold} 1;
  padding: 80px 0 32px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 48px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterCol = styled.div``;

const FooterBrand = styled.div`
  img {
    height: 36px;
    width: auto;
  }

  p {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
    color: ${theme.colors.gray400};
    max-width: 280px;
  }
`;

const FooterTitle = styled.h4`
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  margin-bottom: 24px;
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: 14px;
  color: ${theme.colors.gray400};
  margin-bottom: 14px;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.gold};
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: ${theme.colors.gray400};
  margin-bottom: 16px;
  transition: color ${theme.transitions.default};

  svg {
    flex-shrink: 0;
    color: ${theme.colors.gold};
  }

  &:hover {
    color: ${theme.colors.white};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: ${theme.colors.gray400};
  transition: all ${theme.transitions.default};

  &:hover {
    background: rgba(200, 168, 78, 0.1);
    border-color: rgba(200, 168, 78, 0.3);
    color: ${theme.colors.gold};
    transform: translateY(-2px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 48px 0 24px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const Copyright = styled.p`
  font-size: 13px;
  color: ${theme.colors.gray500};
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;

  a {
    font-size: 13px;
    color: ${theme.colors.gray500};
    transition: color ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.gray300};
    }
  }
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterCol>
            <FooterBrand>
              <img
                src="/images/DOURADA_BRANCO.svg"
                alt="BM Bright Minds Accelerator"
              />
              <p>
                Consultoria estratégica focada na estruturação financeira de
                empresas em crescimento. Transformamos números em direção
                estratégica.
              </p>
              <SocialLinks>
                <SocialIcon
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </SocialIcon>
                <SocialIcon
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramLogo size={20} weight="fill" />
                </SocialIcon>
              </SocialLinks>
            </FooterBrand>
          </FooterCol>

          <FooterCol>
            <FooterTitle>Navegação</FooterTitle>
            {NAV_LINKS.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol>
            <FooterTitle>Serviços</FooterTitle>
            <FooterLink href="/servicos">Estruturação Financeira</FooterLink>
            <FooterLink href="/servicos">Planejamento Tributário</FooterLink>
            <FooterLink href="/servicos">Governança Corporativa</FooterLink>
            <FooterLink href="/servicos">Consultoria Estratégica</FooterLink>
          </FooterCol>

          <FooterCol>
            <FooterTitle>Contato</FooterTitle>
            <ContactItem href="mailto:contato@brightminds.com.br">
              <EnvelopeSimple size={18} weight="duotone" />
              contato@brightminds.com.br
            </ContactItem>
            <ContactItem href="tel:+5511999999999">
              <Phone size={18} weight="duotone" />
              +55 (11) 99999-9999
            </ContactItem>
            <ContactItem href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsappLogo size={18} weight="fill" />
              Fale pelo WhatsApp
            </ContactItem>
          </FooterCol>
        </FooterGrid>

        <Divider />

        <Bottom>
          <Copyright>
            &copy; {new Date().getFullYear()} BM Bright Minds Accelerator.
            Todos os direitos reservados.
          </Copyright>
          <BottomLinks>
            <Link href="#">Política de Privacidade</Link>
            <Link href="#">Termos de Uso</Link>
          </BottomLinks>
        </Bottom>
      </Container>
    </FooterWrapper>
  );
}
