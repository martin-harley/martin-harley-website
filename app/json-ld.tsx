import Script from "next/script"

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martin Harley",
    url: "https://damilareoo.xyz",
    image: "https://damilareoo.xyz/api/og-image",
    jobTitle: "Engineer & Developer",
    description: "Portfolio of Martin Harley, engineer building secure, reliable, and scalable digital infrastructure.",
    sameAs: [
      "https://linkedin.com/in/harleyyy/",
      "https://github.com/martin-harley",
      "https://instagram.com/m.artinh.arley/#"
    ],
  }

  return (
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(jsonLd)}
    </Script>
  )
}
