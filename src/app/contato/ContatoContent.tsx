'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import {
    WhatsappLogo,
    EnvelopeSimple,
    Phone,
    MapPin,
    LinkedinLogo,
    InstagramLogo,
    ArrowRight,
    Clock,
} from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { FAQ } from '@/components/sections/FAQ';
import { WHATSAPP_URL } from '@/lib/constants';

const ContactLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const WhatsAppBanner = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 40px 48px;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: 20px;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  position: relative;
  overflow: hidden;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -30%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.12) 0%, transparent 50%);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(37, 211, 102, 0.3);
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 32px 28px;
    text-align: center;
  }
`;

const WhatsAppContent = styled.div`
  position: relative;
  z-index: 1;
`;

const WhatsAppTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 700;
  color: ${theme.colors.white};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const WhatsAppText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
`;

const WhatsAppButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  font-family: ${theme.fonts.heading};
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.white};
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  transition: all ${theme.transitions.default};

  ${WhatsAppBanner}:hover & {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const InfoCard = styled(motion.div)`
  background: rgba(21, 26, 58, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 36px 32px;
  transition: all ${theme.transitions.default};

  &:hover {
    background: rgba(21, 26, 58, 0.4);
    border-color: rgba(200, 168, 78, 0.12);
    transform: translateY(-3px);
  }
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(200, 168, 78, 0.06);
  border: 1px solid rgba(200, 168, 78, 0.12);
  color: ${theme.colors.gold};
  margin-bottom: 20px;
`;

const InfoLabel = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 13px;
  color: ${theme.colors.gray500};
  margin-bottom: 6px;
  letter-spacing: 0.3px;
`;

const InfoValue = styled.strong`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 15px;
  font-weight: 500;
  color: ${theme.colors.white};
  line-height: 1.5;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`;

const BottomText = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  color: ${theme.colors.gray400};
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${theme.colors.gold};
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  gap: 12px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
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

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT },
    }),
};

export function ContatoContent() {
    return (
        <>
            <PageHero
                label="Contato"
                title={<>Vamos conversar sobre o <span>futuro</span> da sua empresa</>}
                description="Fale diretamente com nossos especialistas pelo WhatsApp e descubra como a inteligência financeira pode transformar seu negócio."
            />

            <Section bg="dark">
                <Container>
                    <ContactLayout>
                        <WhatsAppBanner
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE_OUT }}
                        >
                            <WhatsAppContent>
                                <WhatsAppTitle>
                                    <WhatsappLogo size={32} weight="fill" />
                                    Fale conosco pelo WhatsApp
                                </WhatsAppTitle>
                                <WhatsAppText>
                                    Atendimento rápido e personalizado. Resposta em menos de 2 horas durante o horário comercial.
                                </WhatsAppText>
                            </WhatsAppContent>
                            <WhatsAppButton>
                                Iniciar conversa
                                <ArrowRight size={18} weight="bold" />
                            </WhatsAppButton>
                        </WhatsAppBanner>

                        <InfoGrid>
                            <InfoCard
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0}
                                variants={fadeInUp}
                            >
                                <InfoIcon>
                                    <EnvelopeSimple size={24} weight="duotone" />
                                </InfoIcon>
                                <InfoLabel>E-mail</InfoLabel>
                                <InfoValue>contato@brightminds.com.br</InfoValue>
                            </InfoCard>

                            <InfoCard
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={1}
                                variants={fadeInUp}
                            >
                                <InfoIcon>
                                    <Phone size={24} weight="duotone" />
                                </InfoIcon>
                                <InfoLabel>Telefone</InfoLabel>
                                <InfoValue>+55 (11) 99999-9999</InfoValue>
                            </InfoCard>

                            <InfoCard
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={2}
                                variants={fadeInUp}
                            >
                                <InfoIcon>
                                    <MapPin size={24} weight="duotone" />
                                </InfoIcon>
                                <InfoLabel>Localização</InfoLabel>
                                <InfoValue>São Paulo, SP — Brasil</InfoValue>
                            </InfoCard>
                        </InfoGrid>

                        <BottomRow>
                            <BottomText
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0}
                                variants={fadeInUp}
                            >
                                <Clock size={20} weight="duotone" />
                                Seg. a Sex. das 9h às 18h — Respondemos em até 2 horas
                            </BottomText>
                            <SocialRow
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={1}
                                variants={fadeInUp}
                            >
                                <SocialIcon
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedinLogo size={22} weight="fill" />
                                </SocialIcon>
                                <SocialIcon
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <InstagramLogo size={22} weight="fill" />
                                </SocialIcon>
                            </SocialRow>
                        </BottomRow>
                    </ContactLayout>
                </Container>
            </Section>

            <FAQ />
        </>
    );
}
