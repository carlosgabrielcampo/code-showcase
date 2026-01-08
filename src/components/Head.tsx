import { Helmet } from 'react-helmet-async';

export function Head() {
    const pageDescription = `Portfolio showcasing projects`;
    return (
        <Helmet>
            <title>{'Carlos Roman'} | Developer Portfolio</title>
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={'Carlos Roman'} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    )
 }