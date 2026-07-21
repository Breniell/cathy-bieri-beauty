import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../lib/content";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("Soins du visage personnalisés", "Découvrez l’approche des soins du visage Cathy Bieri Beauty.", "/prestations/soins-du-visage", { noIndex: true, image: "/images/v2/service-facial.jpg" });
export default function Page() { return <ServiceDetail service={services[1]} />; }
