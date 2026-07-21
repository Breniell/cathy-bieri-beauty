import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../lib/content";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("Manucure et pédicure professionnelles", "Manucure, soin des ongles, pédicure, soin des callosités et finitions personnalisées. Demandez votre rendez-vous.", "/prestations/manucure-pedicure", { image: "/images/v2/service-nails.jpg" });
export default function Page() { return <ServiceDetail service={services[0]} />; }
