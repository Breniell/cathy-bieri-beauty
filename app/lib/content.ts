export type Service = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  duration: string;
  highlights: string[];
  process: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "manucure-pedicure",
    index: "01",
    title: "Manucure & pédicure",
    shortTitle: "Onglerie",
    eyebrow: "La précision jusque dans les détails",
    intro: "Des mains et des pieds impeccablement soignés, avec une finition pensée pour votre style et votre quotidien.",
    description: "Chaque rendez-vous associe diagnostic, préparation minutieuse, soin des cuticules, mise en forme et finition personnalisée. La pédicure peut également inclure le soin des callosités et un massage ciblé.",
    image: "/images/v2/service-nails.jpg",
    imageAlt: "Manucure professionnelle dans l’univers Cathy Bieri Beauty",
    duration: "Selon la prestation",
    highlights: ["Manucure professionnelle", "Pédicure complète", "Vernis et finitions", "Gel sur demande", "Soin des cuticules", "Massage mains ou pieds"],
    process: [
      { title: "Écoute", text: "Nous définissons la forme, la couleur et le niveau de soin adapté." },
      { title: "Préparation", text: "Nettoyage, mise en forme et soin précis de l’ongle et des cuticules." },
      { title: "Finition", text: "Application soignée, contrôle du résultat et conseils d’entretien." },
    ],
  },
  {
    slug: "soins-du-visage",
    index: "02",
    title: "Soins du visage",
    shortTitle: "Visage",
    eyebrow: "Révéler l’éclat naturel de la peau",
    intro: "Des rituels personnalisés pour nettoyer, apaiser, hydrater et redonner de la lumière à votre peau.",
    description: "Le soin est choisi après un échange sur vos habitudes, vos sensibilités et le résultat recherché. Chaque protocole privilégie le confort, les gestes précis et une approche respectueuse de la peau.",
    image: "/images/v2/service-facial.jpg",
    imageAlt: "Soin du visage sur peau noire dans un atelier beauté contemporain",
    duration: "Sur consultation",
    highlights: ["Diagnostic beauté", "Nettoyage profond", "Hydratation", "Soin éclat", "Massage du visage", "Conseils de routine"],
    process: [
      { title: "Observer", text: "Un échange permet d’identifier vos besoins et vos priorités." },
      { title: "Traiter", text: "Le rituel combine nettoyage, actifs, massage et temps de pose." },
      { title: "Prolonger", text: "Vous repartez avec des conseils simples pour entretenir le résultat." },
    ],
  },
  {
    slug: "corps-bien-etre",
    index: "03",
    title: "Corps & bien-être",
    shortTitle: "Corps",
    eyebrow: "Une pause pour relâcher et se retrouver",
    intro: "Des soins corporels qui conjuguent détente, confort et attention portée à chaque sensation.",
    description: "Ces rendez-vous sont conçus comme une véritable parenthèse. Le rythme, la pression et les zones travaillées sont adaptés à vos préférences pour créer un moment profondément personnel.",
    image: "/images/v2/service-body.jpg",
    imageAlt: "Soin corporel relaxant dans l’univers Cathy Bieri Beauty",
    duration: "Sur consultation",
    highlights: ["Massage relaxant", "Soin du dos", "Gommage corps", "Rituel hydratant", "Détente ciblée", "Conseils personnalisés"],
    process: [
      { title: "Accueillir", text: "Nous échangeons sur vos attentes, votre confort et les zones sensibles." },
      { title: "Relâcher", text: "Les gestes sont ajustés tout au long du soin pour une détente progressive." },
      { title: "Ressentir", text: "Un temps calme clôture le rituel et permet de retrouver son rythme." },
    ],
  },
  {
    slug: "regard-maquillage",
    index: "04",
    title: "Regard & maquillage",
    shortTitle: "Beauté",
    eyebrow: "Souligner sans jamais masquer",
    intro: "Une mise en beauté précise pour intensifier le regard et créer un résultat cohérent avec votre personnalité.",
    description: "Du détail quotidien à la préparation d’un événement, chaque proposition est construite autour de votre visage, de vos préférences et de l’occasion.",
    image: "/images/v2/service-makeup.jpg",
    imageAlt: "Mise en beauté éditoriale sur peau noire",
    duration: "Selon le projet",
    highlights: ["Sourcils", "Mise en valeur du regard", "Maquillage naturel", "Maquillage événement", "Conseil teintes", "Finition photo"],
    process: [
      { title: "Composer", text: "Nous définissons l’intensité, les teintes et le rendu souhaité." },
      { title: "Sublimer", text: "Le travail des matières et de la lumière respecte vos traits." },
      { title: "Finaliser", text: "Les dernières corrections garantissent tenue et harmonie globale." },
    ],
  },
];

export const contact = {
  phoneDisplay: "078 211 06 03",
  phoneHref: "tel:0782110603",
  email: "cat.bieri@outlook.com",
  instagram: "https://www.instagram.com/komobeauty/",
  tiktok: "https://www.tiktok.com/@komobeauty",
  socialHandle: "@komobeauty",
};
