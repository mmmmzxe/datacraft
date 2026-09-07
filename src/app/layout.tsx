import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://datacraft.sh";

export const metadata: Metadata = {
  title: {
    default: "DataCraft Academy | Hands-On Data Engineering Training",
    template: "%s | DataCraft Academy",
  },
  description:
    "DataCraft Academy is a hands-on training academy dedicated to transforming students, fresh graduates, and career shifters into professional Data Engineers. Structured 3-level track from Beginner to Advanced.",
  keywords: [
    "data engineering",
    "data engineering course",
    "data engineering training",
    "learn data engineering",
    "data engineer bootcamp",
    "SQL training",
    "Python for data engineering",
    "ETL pipelines",
    "Apache Spark course",
    "cloud data engineering",
    "data engineering career",
    "career shifter to data engineer",
    "professional training",
    "DataCraft Academy",
  ],
  authors: [{ name: "DataCraft Academy" }],
  creator: "DataCraft Academy",
  publisher: "DataCraft Academy",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DataCraft Academy",
    title: "DataCraft Academy | Hands-On Data Engineering Training",
    description:
      "Transform your career with hands-on data engineering training. Structured 3-level track — Beginner, Intermediate, Advanced — with real-world projects, live mentorship, and industry tools.",
    images: [
      {
        url: "/images/cover-banner.jpg",
        width: 1130,
        height: 192,
        alt: "DataCraft Academy — Hands-On Data Engineering Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DataCraft Academy | Hands-On Data Engineering Training",
    description:
      "Transform your career with hands-on data engineering training. Beginner to Advanced tracks with real-world projects & live mentorship.",
    images: ["/images/cover-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education",
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${siteUrl}/#organization`,
    name: "DataCraft Academy",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo-light.png`,
      width: 1000,
      height: 1000,
    },
    description:
      "Hands-on training academy dedicated to transforming students, fresh graduates, and career shifters into professional Data Engineers.",
    foundingDate: "2025",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    knowsAbout: [
      "Data Engineering",
      "SQL",
      "Python",
      "Apache Spark",
      "ETL Pipelines",
      "Cloud Data Engineering",
      "Apache Kafka",
      "Data Warehousing",
    ],
    sameAs: [],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "DataCraft Academy",
    description:
      "Hands-on data engineering training — from Beginner to Advanced.",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Data Engineering — Beginner Level",
    description:
      "Covers all the essential foundations and tools used by real-world data engineers. SQL, Python, data modeling, and introductory ETL pipelines.",
    provider: { "@id": `${siteUrl}/#organization` },
    educationalLevel: "Beginner",
    coursePrerequisites:
      "None — designed for students, fresh graduates, and career shifters",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "blended",
      instructor: {
        "@type": "Organization",
        name: "DataCraft Academy",
      },
    },
  };

  const jsonLdArray = [organizationLd, websiteLd, courseLd];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-light.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-light.png" />
        {jsonLdArray.map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
