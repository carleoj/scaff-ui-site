import Footer from "scaff-ui/src/templates/react/footer/copyright-navigation.jsx";
import Hero from "scaff-ui/src/templates/react/hero/heading-description-button-image.jsx";
import Header from "scaff-ui/src/templates/react/header/logo-navigation-cta.jsx";
import Newsletter from "scaff-ui/src/templates/react/newsletter/basic-newsletter.jsx";
import TextArea from "scaff-ui/src/templates/react/text-area/actions-outside.jsx";

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
        render: TextArea,
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
        render: Newsletter,
      },
    ],
  },
  {
    id: "header",
    title: "Header",
    category: "Commons",
    command: "scf add header",
    variants: [
      { id: "logo-nav-cta", name: "Logo + Nav + CTA", render: Header },
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
        previewClassName: "preview-hero",
        render: Hero,
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
        render: Footer,
      },
    ],
  },
];
export const getCatalogPath = (component) =>
  component.category === "Commons" ? "/commons" : "/components";
