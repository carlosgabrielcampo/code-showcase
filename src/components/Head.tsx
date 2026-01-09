import { useTheme } from '@/context/ThemeContext';
import { Helmet } from 'react-helmet-async';

export function Head() {
    const pageDescription = `Portfolio showcasing projects`;
    const {theme} = useTheme()
    return (
        <Helmet>
            <title>{'Carlos Roman'} | Developer Portfolio</title>
            {theme === "dark" ? <link rel="icon" href="/darkicon.ico" /> : <link rel="icon" href="/lighticon.ico" />}
            <meta name="description" content={pageDescription} />
            <meta property="og:title" content={'Carlos Roman'} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    )
 }