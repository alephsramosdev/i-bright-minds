'use client';

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, X, ArrowRight } from '@phosphor-icons/react';
import { theme } from '@/lib/theme';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';
import { Container } from '@/components/ui/Container';

const HeaderWrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ scrolled }) => (scrolled ? '10px 0' : '18px 0')};
  transition: all ${theme.transitions.default};
  background: ${({ scrolled }) =>
    scrolled ? 'rgba(11, 11, 11, 0.92)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(24px) saturate(180%)' : 'none')};
  border-bottom: 1px solid
    ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.05)' : 'transparent')};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity ${theme.transitions.default};

  &:hover {
    opacity: 0.85;
  }

  img {
    height: 42px;
    width: auto;
  }
`;

const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    max-width: 85vw;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 100px 32px 32px;
    background: rgba(11, 11, 11, 0.98);
    backdrop-filter: blur(24px);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
    transform: translateX(${({ open }) => (open ? '0' : '110%')});
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 999;
  }
`;

const NavItem = styled.li``;

const NavAnchor = styled(Link) <{ $active?: boolean }>`
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  color: ${({ $active }) => ($active ? theme.colors.white : theme.colors.gray400)};
  letter-spacing: 0.3px;
  transition: color ${theme.transitions.default};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 1.5px;
    background: ${theme.gradients.gold};
    transition: width ${theme.transitions.default};
  }

  &:hover {
    color: ${theme.colors.white};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
    padding: 16px 0;
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 13px;
  padding: 9px 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  text-decoration: none;
  border: 1.5px solid rgba(200, 168, 78, 0.5);
  letter-spacing: 0.4px;
  white-space: nowrap;
  background: transparent;
  color: ${theme.colors.gold};

  &:hover {
    background: rgba(200, 168, 78, 0.08);
    border-color: ${theme.colors.gold};
    transform: translateY(-1px);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;
  padding: 8px;
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const Overlay = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    z-index: 998;
  }
`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.includes('#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <HeaderWrapper scrolled={scrolled}>
        <Container>
          <Nav>
            <LogoLink href="/" aria-label="BM Bright Minds - Início">
              <img
                src="/images/DOURADA_BRANCO.svg"
                alt="BM Bright Minds Accelerator"
              />
            </LogoLink>

            <NavLinks open={menuOpen}>
              {NAV_LINKS.map((link) => (
                <NavItem key={link.href}>
                  <NavAnchor
                    href={link.href}
                    $active={isActive(link.href)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavAnchor>
                </NavItem>
              ))}
            </NavLinks>

            <HeaderRight>
              <CTALink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Fale Conosco
                <ArrowRight size={14} weight="bold" />
              </CTALink>
              <MobileToggle
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {menuOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
              </MobileToggle>
            </HeaderRight>
          </Nav>
        </Container>
      </HeaderWrapper>
      <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
}
