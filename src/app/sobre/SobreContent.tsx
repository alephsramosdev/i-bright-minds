'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TrendUp, Target, UsersThree, Lightbulb, Handshake, ChartLineUp } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { Methodology } from '@/components/sections/Methodology';
import { Metrics } from '@/components/sections/Metrics';
import { CTA } from '@/components/sections/CTA';

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const StoryText = styled.div``;

const Label = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${theme.fonts.heading};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.gold};
  margin-bottom: 20px;

  &::before {
    content: '';
    width: 32px;
    height: 1px;
    background: ${theme.gradients.gold};
  }
`;

const Title = styled(motion.h2)`
  font-family: ${theme.fonts.heading};
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 700;
  color: ${theme.colors.white};
  letter-spacing: -0.5px;
  margin-bottom: 28px;
  line-height: 1.15;
`;

const Paragraph = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 16px;
  line-height: 1.85;
  color: ${theme.colors.gray400};
  margin-bottom: 24px;

  strong {
    color: ${theme.colors.white};
    font-weight: 600;
  }
`;

const LogoShowcase = styled(motion.div)`
  background: ${theme.colors.navy};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 280px;
    height: auto;
    filter: drop-shadow(0 4px 24px rgba(200, 168, 78, 0.2));
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 40px 32px;
  transition: all ${theme.transitions.slow};

  &:hover {
    background: rgba(21, 26, 58, 0.4);
    border-color: rgba(200, 168, 78, 0.15);
    transform: translateY(-4px);
  }
`;

const ValueIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(200, 168, 78, 0.06);
  border: 1px solid rgba(200, 168, 78, 0.12);
  margin-bottom: 24px;
  color: ${theme.colors.gold};
`;

const ValueTitle = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.white};
  margin-bottom: 12px;
`;

const ValueText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 15px;
  line-height: 1.75;
  color: ${theme.colors.gray400};
`;

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: EASE_OUT },
    }),
};

const values = [
    {
        icon: Target,
        title: 'Clareza Estratégica',
        text: 'Transformamos complexidade financeira em direção clara, para que cada decisão seja fundamentada em dados concretos.',
    },
    {
        icon: Handshake,
        title: 'Parceria de Longo Prazo',
        text: 'Não somos fornecedores. Somos parceiros estratégicos comprometidos com o crescimento sustentável do seu negócio.',
    },
    {
        icon: Lightbulb,
        title: 'Inovação com Método',
        text: 'Combinamos as melhores práticas do mercado com soluções inovadoras, sempre dentro de processos estruturados.',
    },
];

export function SobreContent() {
    return (
        <>
            <PageHero
                label="Quem Somos"
                title={<>Inteligência financeira para empresas que <span>pensam grande</span></>}
                description="Mais do que contabilidade. Somos a parceira estratégica que organiza sua base financeira, tributária e de governança."
            />

            <Section bg="dark">
                <Container>
                    <StoryGrid>
                        <StoryText>
                            <Label
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={0}
                                variants={fadeInUp}
                            >
                                Nossa História
                            </Label>
                            <Title
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={1}
                                variants={fadeInUp}
                            >
                                Nascemos da convicção de que empresas merecem mais
                            </Title>
                            <Paragraph
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={2}
                                variants={fadeInUp}
                            >
                                A <strong>BM Bright Minds Accelerator</strong> nasceu da convicção
                                de que empresas em crescimento merecem mais do que uma contabilidade
                                operacional. Elas precisam de uma parceira estratégica que organize
                                sua base financeira, tributária e de governança.
                            </Paragraph>
                            <Paragraph
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={3}
                                variants={fadeInUp}
                            >
                                Nosso trabalho é <strong>transformar dados financeiros em direção
                                    estratégica</strong>, permitindo que empresários tenham clareza
                                total sobre seus números e a confiança para tomar decisões
                                que impulsionam resultados reais.
                            </Paragraph>
                        </StoryText>

                        <LogoShowcase
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: EASE_OUT }}
                        >
                            <img
                                src="/images/DOURADA.svg"
                                alt="BM Bright Minds Logo"
                            />
                        </LogoShowcase>
                    </StoryGrid>
                </Container>
            </Section>

            <Section bg="navy">
                <Container>
                    <div style={{ textAlign: 'center', marginBottom: 64 }}>
                        <Label
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={0}
                            variants={fadeInUp}
                            style={{ justifyContent: 'center' }}
                        >
                            Nossos Valores
                        </Label>
                        <Title
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            variants={fadeInUp}
                            style={{ margin: '0 auto 20px' }}
                        >
                            O que nos move
                        </Title>
                    </div>

                    <ValuesGrid>
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <ValueCard
                                    key={value.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={index}
                                    variants={fadeInUp}
                                >
                                    <ValueIcon>
                                        <Icon size={28} weight="duotone" />
                                    </ValueIcon>
                                    <ValueTitle>{value.title}</ValueTitle>
                                    <ValueText>{value.text}</ValueText>
                                </ValueCard>
                            );
                        })}
                    </ValuesGrid>
                </Container>
            </Section>

            <Methodology />
            <Metrics />
            <CTA />
        </>
    );
}
