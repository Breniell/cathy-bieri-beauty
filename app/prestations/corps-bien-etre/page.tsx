import ServiceDetail from "../../components/ServiceDetail";
import { services } from "../../lib/content";
import { routeMetadata } from "../../lib/seo";
export const metadata = routeMetadata("Soins du corps et bien-être", "Découvrez l’approche corps et bien-être de Cathy Bieri Beauty.", "/prestations/corps-bien-etre", { noIndex: true, image: "/images/v2/service-body.jpg" });
export default function Page() { return <ServiceDetail service={services[2]} />; }
