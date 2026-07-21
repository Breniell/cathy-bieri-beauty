import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../lib/content";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("Regard et maquillage personnalisés", "Découvrez l’approche regard et maquillage de Cathy Bieri Beauty.", "/prestations/regard-maquillage", { noIndex: true, image: "/images/v2/service-makeup.jpg" });
export default function Page() { return <ServiceDetail service={services[3]} />; }
