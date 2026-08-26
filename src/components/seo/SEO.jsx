import { Helmet } from "react-helmet";

const SEO = ({
  title = "Ringruby Hotel Oduduwa | Luxury Accommodation in Ikeja GRA, Lagos",
  description = "Ring Ruby Hotel Oduduwa provides upscale comfort in Ikeja GRA, on Sade Onigbanjo Close off Oduduwa Way.",
  keywords = "hotel, lagos, accommodation, ringruby, oduduwa, ikeja gra, oduduwa way, luxury hotel, nigeria, business hotel, vacation",
  image = 'https://oduduwa.ringrubyhotel.com/ring-ruby-logo.webp',
  url = typeof window !== "undefined"
    ? window.location.href
    : "https://oduduwa.ringrubyhotel.com",
  type = "website",
  noindex = false,
}) => {
  const siteName = "Ringruby Hotel Oduduwa";
  const siteUrl = "https://oduduwa.ringrubyhotel.com";
  const twitterHandle = "@fivecloverhotel";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      {/* Viewport should only be in the root HTML */}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/ring-ruby-logo.webp" />
      <link rel="apple-touch-icon" href="/ring-ruby-logo.webp" />

      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
    </Helmet>
  );
};

export default SEO;
