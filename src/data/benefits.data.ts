import type { ServiceBenefit } from "../types/benefit.types";

export const benefitsData: ServiceBenefit[] = [
  {
    id: "shipping",
    icon: "bi-truck",
    title: "Free Shipping",
    description: "On All Orders",
    iconColor: "text-brand-500",
  },

  {
    id: "payment",
    icon: "bi-credit-card",
    title: "Secure Payment",
    description: "Trusted & Secure Transactions",
    iconColor: "text-cyanbrand-500",
  },

  {
    id: "expertise",
    icon: "bi-people",
    title: "Product Expertise",
    description: "Quality Steel Products",
    iconColor: "text-brand-500",
  },

  {
    id: "gst",
    icon: "bi-receipt",
    title: "GST Billing",
    description: "GST Bill on Order",
    iconColor: "text-logoOrange-500",
  },
];