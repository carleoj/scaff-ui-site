import {
  LiveFooter,
  LiveHero,
  LiveNavigation,
  LiveNewsletter,
  LiveTextArea,
} from "./previews";

export const viewportOptions = [
  { id: "mobile", label: "Mobile", width: 375 },
  { id: "small", label: "SM", width: 640 },
  { id: "tablet", label: "MD", width: 768 },
  { id: "desktop", label: "LG", width: 1280 },
];
export const publishedComponents = [
  {
    id: "text-area",
    title: "Text Area",
    category: "Components",
    command: "scf add text-area",
    variants: [
      {
        id: "basic-actions",
        name: "Basic + Actions Outside",
        render: LiveTextArea,
      },
    ],
  },
  {
    id: "newsletter",
    title: "Newsletter",
    category: "Components",
    command: "scf add newsletter",
    variants: [
      {
        id: "basic-newsletter",
        name: "Basic Newsletter",
        render: LiveNewsletter,
      },
    ],
  },
  {
    id: "header",
    title: "Header",
    category: "Commons",
    command: "scf add header",
    variants: [
      { id: "logo-nav-cta", name: "Logo + Nav + CTA", render: LiveNavigation },
    ],
  },
  {
    id: "hero",
    title: "Hero",
    category: "Commons",
    command: "scf add hero",
    variants: [
      {
        id: "heading-description-cta",
        name: "Heading + Description + CTA + Image",
        render: LiveHero,
      },
    ],
  },
  {
    id: "footer",
    title: "Footer",
    category: "Commons",
    command: "scf add footer",
    variants: [
      {
        id: "copyright-navigation",
        name: "Copyright + Navigation Links",
        render: LiveFooter,
      },
    ],
  },
];
export const getCatalogPath = (component) =>
  component.category === "Commons" ? "/commons" : "/components";
