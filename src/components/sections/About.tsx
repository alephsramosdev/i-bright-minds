'use client';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { TrendUp, Target, UsersThree } from '@phosphor-icons/react';
import { theme, EASE_OUT } from '@/lib/theme';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const AboutText = styled.div``;

const AboutParagraph = styled(motion.p)`
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

const HighlightBar = styled(motion.div)`
  margin-top: 40px;
  padding: 28px 32px;
  background: rgba(21, 26, 58, 0.4);
  border: 1px solid rgba(200, 168, 78, 0.12);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  svg {
    flex-shrink: 0;
    color: ${theme.colors.gold};
    margin-top: 2px;
  }

  p {
    font-family: ${theme.fonts.body};
    font-size: 15px;
    line-height: 1.7;
    color: ${theme.colors.gray300};
  }
`;

const AboutVisual = styled(motion.div)`
  position: relative;
`;

const LogoShowcase = styled.div`
  background: ${theme.colors.navy};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 480px;
`;

const LogoMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 240px;
    height: auto;
    filter: drop-shadow(0 4px 20px rgba(200, 168, 78, 0.2));
  }
`;

const LogoMeaning = styled.div`
  text-align: center;

  h4 {
    font-family: ${theme.fonts.heading};
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.white};
    margin-bottom: 12px;
    letter-spacing: 1px;
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    color: ${theme.colors.gray400};
    max-width: 280px;
  }
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  margin-top: 2px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PillarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 16px;
  background: ${theme.colors.navy};
  text-align: center;

  svg {
    color: ${theme.colors.gold};
  }

  span {
    font-family: ${theme.fonts.body};
    font-size: 13px;
    font-weight: 500;
    color: ${theme.colors.gray300};
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export function About() {
  return (
    <Section id="sobre" bg="dark">
      <Container>
        <AboutGrid>
          <AboutText>
            <SectionTitle
              label="Quem Somos"
              title="Mais do que contabilidade. Inteligência financeira para crescer."
            />

            <AboutParagraph
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              A <strong>BM Bright Minds Accelerator</strong> nasceu da convicção
              de que empresas em crescimento merecem mais do que uma contabilidade
              operacional. Elas precisam de uma parceira estratégica que organize
              sua base financeira, tributária e de governança.
            </AboutParagraph>

            <AboutParagraph
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              Nosso trabalho é <strong>transformar dados financeiros em direção
                estratégica</strong>, permitindo que empresários tenham clareza
              total sobre seus números e a confiança para tomar decisões
              que impulsionam resultados reais.
            </AboutParagraph>

            <HighlightBar
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <Target size={28} weight="duotone" />
              <p>
                Acreditamos que o crescimento sustentável depende de três
                pilares: <strong>estrutura, método e inteligência</strong> na
                gestão financeira. Essa é a base de tudo o que entregamos.
              </p>
            </HighlightBar>
          </AboutText>

          <AboutVisual
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            <LogoShowcase>
              <LogoMark>
                <img
                  src="/images/DOURADA.svg"
                  alt="Logograma BM Bright Minds"
                />
              </LogoMark>
              <LogoMeaning>
                <h4>O Significado da Marca</h4>
                <p>
                  As letras B e M se fundem com um gráfico de crescimento
                  ascendente, simbolizando inteligência estratégica e
                  estruturação empresarial.
                </p>
              </LogoMeaning>
              <PillarsGrid>
                <PillarItem>
                  <TrendUp size={22} weight="duotone" />
                  <span>Crescimento</span>
                </PillarItem>
                <PillarItem>
                  <Target size={22} weight="duotone" />
                  <span>Estratégia</span>
                </PillarItem>
                <PillarItem>
                  <UsersThree size={22} weight="duotone" />
                  <span>Governança</span>
                </PillarItem>
              </PillarsGrid>
            </LogoShowcase>
          </AboutVisual>
        </AboutGrid>
      </Container>
    </Section>
  );
}
