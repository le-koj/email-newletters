import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface KBCapitalFixFlipPremierProps {
  unsubscribeUrl?: string;
}

const styles = {
  body: { backgroundColor: "#ffffff", margin: 0, padding: 0 },
  headerBg: { backgroundColor: "#e8f4fc" },
  heroBg: { backgroundColor: "#ffffff" },
  programBg: { backgroundColor: "#f5f5f5" },
  featureBg: { backgroundColor: "#ffffff" },
  qualifyBg: { backgroundColor: "#e8f4fc" },
  ctaBg: { backgroundColor: "#e8f4fc" },
  contactBg: { backgroundColor: "#ffffff" },
  footerBg: { backgroundColor: "#f5f5f5" },
  merriweather: {
    fontFamily: "Merriweather, Georgia, serif",
  },
  nunito: {
    fontFamily: "Nunito, Arial, Helvetica Neue, Helvetica, sans-serif",
  },
  brandBlue: "#258fd2",
  darkBlue: "#033047",
  textGray: "#44464a",
  featureBox: {
    backgroundColor: "#e8f4fc",
    borderRadius: "8px",
    padding: "16px 14px",
  },
};

export default function KBCapitalFixFlipPremier({
  unsubscribeUrl = "{{UNSUBSCRIBE_URL}}",
}: KBCapitalFixFlipPremierProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>KB Capital Group — 100% Fix & Flip Premier Loan</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Body style={styles.body}>
        {/* Header */}
        <Section style={styles.headerBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: "28px 20px 20px 20px" }}>
              <Section align="center" style={{ paddingBottom: 16 }}>
                <Link href="https://www.kbcapitalgrp.com" target="_blank">
                  <Img
                    src="https://ik.imagekit.io/lekoj2500/KB-Capital/KB_CAPITAL_LOGO_2024.png"
                    width={180}
                    alt="KB Capital Group"
                    style={{ display: "block", margin: "0 auto", border: 0 }}
                  />
                </Link>
              </Section>
              <Section align="center">
                <Text
                  style={{
                    margin: 0,
                    ...styles.merriweather,
                    fontSize: 20,
                    fontWeight: 700,
                    color: styles.darkBlue,
                    textAlign: "center" as const,
                    letterSpacing: "0.5px",
                  }}
                >
                  WHY KB CAPITAL GROUP?
                </Text>
                <Text
                  style={{
                    margin: "8px 0 0 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    textAlign: "center" as const,
                  }}
                >
                  When Other Lenders Won&apos;t, KB Capital Will.
                </Text>
              </Section>
            </Section>
          </Container>
        </Section>

        {/* Hero: Product name + badges */}
        <Section style={styles.heroBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: "28px 24px 20px 24px" }}>
              <Section align="center" style={{ paddingBottom: 16 }}>
                <Text
                  style={{
                    margin: 0,
                    ...styles.merriweather,
                    fontSize: 24,
                    fontWeight: 700,
                    color: styles.brandBlue,
                    textAlign: "center" as const,
                  }}
                >
                  100% Fix &amp; Flip Premier Loan
                </Text>
                <Text
                  style={{
                    margin: "12px 0 0 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    textAlign: "center" as const,
                  }}
                >
                  No Down Payment &nbsp;|&nbsp; Rate: as low as 10.99%
                </Text>
              </Section>
              <Section
                align="center"
                style={{
                  padding: "12px 0",
                  backgroundColor: "#e8f4fc",
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    margin: 0,
                    ...styles.nunito,
                    fontSize: 18,
                    fontWeight: 700,
                    color: styles.darkBlue,
                    textAlign: "center" as const,
                  }}
                >
                  100% FINANCING OF PURCHASE AND REHAB FUNDS &nbsp;•&nbsp; Up to
                  75% ARV
                </Text>
              </Section>
              <Section style={{ paddingTop: 20 }}>
                <Text
                  style={{
                    margin: 0,
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    lineHeight: 1.6,
                  }}
                >
                  <strong>Best For:</strong> The 100% Fix &amp; Flip Premier Loan
                  is perfect for the real estate investor looking to minimize
                  cash needed at closing with same-day approval and fast
                  funding.
                </Text>
              </Section>
            </Section>
          </Container>
        </Section>

        {/* Program details */}
        <Section style={styles.programBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: "20px 24px" }}>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>Term:</strong> 9-month loan with 3-month optional
                extension (extension fee applies).
              </Text>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>Loan Amount:</strong> $100k – $1.25M
              </Text>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>Points:</strong> As low as 2.0%
              </Text>
              <Text
                style={{
                  margin: 0,
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                Easy draw process and in-house loan servicing.
              </Text>
              <Text
                style={{
                  margin: "12px 0 0 0",
                  ...styles.nunito,
                  fontSize: 14,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>18 States:</strong> AL, CT, DE, FL, GA, IN, KY, MA, MD,
                MO, NC, NJ, OH, PA, SC, TN, TX, VA
              </Text>
            </Section>
          </Container>
        </Section>

        {/* Feature boxes */}
        <Section style={styles.featureBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: 24 }}>
              <Row>
                <Column style={{ padding: 8, width: "33.33%" }}>
                  <Section style={styles.featureBox}>
                    <Text
                      style={{
                        margin: "0 0 8px 0",
                        ...styles.nunito,
                        fontSize: 17,
                        fontWeight: 700,
                        color: styles.brandBlue,
                        lineHeight: 1.3,
                      }}
                    >
                      Fast Closing
                    </Text>
                    <Text
                      style={{
                        margin: 0,
                        ...styles.nunito,
                        fontSize: 14,
                        color: styles.textGray,
                        lineHeight: 1.45,
                      }}
                    >
                      Same-day approval. Funding as fast as 5–10 business days.
                    </Text>
                  </Section>
                </Column>
                <Column style={{ padding: 8, width: "33.33%" }}>
                  <Section style={styles.featureBox}>
                    <Text
                      style={{
                        margin: "0 0 8px 0",
                        ...styles.nunito,
                        fontSize: 17,
                        fontWeight: 700,
                        color: styles.brandBlue,
                        lineHeight: 1.3,
                      }}
                    >
                      Reliable Funding
                    </Text>
                    <Text
                      style={{
                        margin: 0,
                        ...styles.nunito,
                        fontSize: 14,
                        color: styles.textGray,
                        lineHeight: 1.45,
                      }}
                    >
                      A direct lender without relying on third-party approval.
                      Easy draw process with in-house loan servicing.
                    </Text>
                  </Section>
                </Column>
                <Column style={{ padding: 8, width: "33.33%" }}>
                  <Section style={styles.featureBox}>
                    <Text
                      style={{
                        margin: "0 0 8px 0",
                        ...styles.nunito,
                        fontSize: 17,
                        fontWeight: 700,
                        color: styles.brandBlue,
                        lineHeight: 1.3,
                      }}
                    >
                      No Down Payment
                    </Text>
                    <Text
                      style={{
                        margin: 0,
                        ...styles.nunito,
                        fontSize: 14,
                        color: styles.textGray,
                        lineHeight: 1.45,
                      }}
                    >
                      Keep your hard-earned cash. Only pay closing costs.
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>
          </Container>
        </Section>

        {/* Do You Qualify? */}
        <Section style={styles.qualifyBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: 24 }}>
              <Heading
                as="h2"
                style={{
                  margin: "0 0 12px 0",
                  ...styles.merriweather,
                  fontSize: 20,
                  fontWeight: 600,
                  color: styles.brandBlue,
                  letterSpacing: "0.5px",
                }}
              >
                DO YOU QUALIFY?
              </Heading>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>Cash:</strong> $15,000 or 25% of rehab budget, whichever is
                greater, plus closing costs.
              </Text>
              <Text
                style={{
                  margin: "0 0 8px 0",
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>Credit:</strong> Minimum 650 credit score.
              </Text>
              <Text
                style={{
                  margin: 0,
                  ...styles.nunito,
                  fontSize: 16,
                  color: styles.textGray,
                  lineHeight: 1.5,
                }}
              >
                <strong>Only Six Documents Required:</strong> 1) Completed
                Application 2) Signed Business Entity Documents 3) Signed
                Agreement of Sale 4) Three months of Bank Statements 5) Valid
                Government Issued Photo ID 6) Itemized List of Repairs.
              </Text>
              <Text
                style={{
                  margin: "16px 0 0 0",
                  ...styles.nunito,
                  fontSize: 16,
                  fontWeight: 600,
                  color: styles.darkBlue,
                  lineHeight: 1.5,
                }}
              >
                Ground Up Loan Options Available
              </Text>
            </Section>
          </Container>
        </Section>

        {/* CTA */}
        <Section style={styles.ctaBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: "28px 24px" }}>
              <Section align="center" style={{ paddingBottom: 20 }}>
                <Text
                  style={{
                    margin: 0,
                    ...styles.merriweather,
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#000000",
                    textAlign: "center" as const,
                    letterSpacing: "0.5px",
                  }}
                >
                  SCHEDULE A LOAN REVIEW WITH YOUR ACCOUNT EXECUTIVE
                </Text>
              </Section>
              <Section align="center">
                <Button
                  href="https://www.kbcapitalgrp.com/loan-programs/"
                  style={{
                    backgroundColor: styles.darkBlue,
                    color: "#ffffff",
                    fontFamily: "Nunito, Arial, sans-serif",
                    fontSize: 16,
                    padding: "12px 32px",
                    borderRadius: 22,
                    textAlign: "center" as const,
                  }}
                >
                  Quick Scenario
                </Button>
              </Section>
            </Section>
          </Container>
        </Section>

        {/* Contact block */}
        <Section style={styles.contactBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: "32px 24px" }}>
              <Section style={{ padding: "0 20px" }}>
                <Text
                  style={{
                    margin: "0 0 4px 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    lineHeight: 1.5,
                  }}
                >
                  Kind Regards,
                </Text>
                <Text
                  style={{
                    margin: "0 0 2px 0",
                    ...styles.nunito,
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#131313",
                    lineHeight: 1.5,
                  }}
                >
                  Kory Balogun
                </Text>
                <Text
                  style={{
                    margin: "0 0 12px 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    lineHeight: 1.5,
                  }}
                >
                  Account Manager
                </Text>
                <Text
                  style={{
                    margin: "0 0 4px 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    lineHeight: 1.5,
                  }}
                >
                  5652 Fallbrook Ave, Woodland Hills CA 91367
                </Text>
                <Text
                  style={{
                    margin: "0 0 4px 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    lineHeight: 1.5,
                  }}
                >
                  Phone: 888-886-6115
                </Text>
                <Text
                  style={{
                    margin: "0 0 24px 0",
                    ...styles.nunito,
                    fontSize: 16,
                    color: styles.textGray,
                    lineHeight: 1.5,
                  }}
                >
                  Email:{" "}
                  <Link
                    href="mailto:kory@kbcapitalgrp.com"
                    style={{ color: "#00aeef", textDecoration: "underline" }}
                  >
                    kory@kbcapitalgrp.com
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Section>

        {/* Footer */}
        <Section style={styles.footerBg}>
          <Container style={{ width: 680, maxWidth: 680 }}>
            <Section style={{ padding: "20px 24px" }}>
              <Section align="center">
                <Text
                  style={{
                    margin: 0,
                    ...styles.nunito,
                    fontSize: 12,
                    color: "#9d9d9d",
                    lineHeight: 1.5,
                    textAlign: "center" as const,
                  }}
                >
                  © Copyright 2026. KB Capital Group. All Rights Reserved.
                </Text>
                <Text
                  style={{
                    margin: "8px 0 0 0",
                    ...styles.nunito,
                    fontSize: 12,
                    textAlign: "center" as const,
                  }}
                >
                  <Link
                    href={unsubscribeUrl}
                    style={{ color: "#00aeef", textDecoration: "underline" }}
                  >
                    Unsubscribe
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}
