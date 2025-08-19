import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Basic meta */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5"
          />
          <meta
            name="description"
            content="IOIT MUN 2025 — A premier Model United Nations conference hosted by IOIT, uniting delegates worldwide to debate, negotiate, and shape global policy."
          />
          <meta
            name="keywords"
            content="IOIT MUN 2025, Model United Nations, IOIT, Debate, Diplomacy, International Relations, Student Conference, Pune"
          />
          <meta name="author" content="IOIT MUN 2025 Secretariat" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content="IOIT MUN 2025 | Model United Nations" />
          <meta
            property="og:description"
            content="Join IOIT MUN 2025 at IOIT, Pune — experience world-class debate, diplomacy, and leadership with future changemakers."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mun.ioittenet.com" />
          <meta
            property="og:image"
            content="https://mun.ioittenet.com/img/mockmun.png"
          />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="IOIT MUN 2025 | Model United Nations" />
          <meta
            name="twitter:description"
            content="Global diplomacy starts here. Be part of IOIT MUN 2025."
          />
          <meta
            name="twitter:image"
            content="https://mun.ioittenet.com/img/mockmun.png"
          />
          <meta name="twitter:site" content="@ioitmun" />

          {/* Favicon & Theme */}
          <link rel="icon" href="/img/favicon.ico" />
          <link rel="apple-touch-icon" href="/img/logo.png" />
          <meta name="theme-color" content="#00274D" />

          {/* JSON-LD Structured Data (Event) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Event",
                name: "IOIT MUN 2025",
                startDate: "2025-10-11",
                endDate: "2025-10-12",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                location: {
                  "@type": "Place",
                  name: "Institute of Information Technology (IOIT), Pune",
                  address: "IOIT Campus, Pune, India"
                },
                image: ["https://mun.ioittenet.com/img/mockmun.png"],
                description:
                  "IOIT MUN 2025 is a premier Model United Nations conference uniting delegates worldwide to debate, negotiate, and shape global policy.",
                organizer: {
                  "@type": "Organization",
                  name: "IOIT MUN Secretariat",
                  url: "https://mun.ioittenet.com"
                }
              }),
            }}
          />
        </Head>
        <body>
          <Analytics />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
