import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "BloomsGala | Premier Event Management";
    const defaultDescription = "BloomsGala specializes in creating breathtaking weddings, corporate gatherings, and exhibitions in Saudi Arabia. We are architects of memories.";
    const defaultKeywords = "Event Planner Riyadh, Wedding Planner Saudi Arabia, Corporate Events Riyadh, Luxury Weddings KSA, BloomsGala, Event Management";
    const defaultImage = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop"; // Your Hero Image
    const siteUrl = "https://bloomsgala.com"; // Replace with actual domain when live

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EventPlanner",
        "name": "BloomsGala",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`, // You should add a logo file to public folder
        "image": image || defaultImage,
        "description": description || defaultDescription,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Riyadh",
            "addressRegion": "Riyadh",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.7136",
            "longitude": "46.6753"
        },
        "telephone": "+966538402532",
        "priceRange": "$$$"
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | BloomsGala` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title ? `${title} | BloomsGala` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title ? `${title} | BloomsGala` : siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string
};

export default SEO;
