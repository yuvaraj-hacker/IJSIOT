import { Helmet } from "react-helmet";

const HelmetComponent = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Journal of Smart Internet of Things and Applications, IJSIOT, Smart IoT research journal, IoT applications journal, Advanced IoT studies, Internet of Things research" />
            <meta name="description" content="The International Journal of Smart Internet of Things and Applications (IJSIOT) publishes high-quality research in IoT, smart applications, AI, and advanced engineering fields." />
            <meta name="author" content="IJSIOT Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Journal of Smart Internet of Things and Applications (IJSIOT)" />
            <meta property="og:description" content="The International Journal of Smart Internet of Things and Applications (IJSIOT) publishes high-quality research in IoT, smart applications, AI, and advanced engineering fields." />
            <meta property="og:url" content="https://www.ijsiot.com/" />
            <meta property="og:image" content="https://www.ijsiot.com//assets/Images/IJSIOT.png" />
            <link rel="canonical" href="https://www.ijsiot.com/" />
            <link rel="icon" type="image/png" href="https://www.ijsiot.com/assets/Images/Fav.png" />
        </Helmet>
    );
};

export default HelmetComponent;