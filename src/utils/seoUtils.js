export const generateHotelSchema = (hotelData = {}) => {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Ring Ruby Hotel Oduduwa",
    description:
      "Luxury hotel accommodation at Ikeja GRA, Lagos. Experience comfort and excellent service at Ring Ruby Hotel Oduduwa.",
    url: "https://ringrubyoduduwa.fivecloverhotels.com",
    logo: "https://ringrubyoduduwa.fivecloverhotels.com/ring%20ruby%20logo.webp",
    priceRange: "$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "4.5",
      bestRating: "5",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "7, Sade Onigbanjo Close, off 34, Oduduwa Way, Ikeja GRA",
      addressLocality: "Lagos",
      postalCode: "100001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.572854524694361",
      longitude: "3.355539995781598",
    },
    telephone: "+2347017393412",
    email: "info@ringrubyhoteloduduwaikejagra.com",
    sameAs: [
      "https://www.facebook.com/RingrubyHotel?_rdc=1&_rdr#",
      "https://www.instagram.com/ringruby_hotel/",
      "https://twitter.com/fivecloverhotel",
      "https://www.tiktok.com/@ringrubyhotels",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return JSON.stringify({ ...defaultData, ...hotelData });
};

export const generateBreadcrumbSchema = (items = []) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ringrubyoduduwa.fivecloverhotels.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Rooms",
      item: "https://ringrubyoduduwa.fivecloverhotels.com/rooms",
    },
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.length > 0 ? items : defaultItems,
  };

  return JSON.stringify(breadcrumbList);
};
