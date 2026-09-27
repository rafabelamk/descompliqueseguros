import { contact } from "@/lib/site";

export default function WhatsAppButton({
  children = "Solicitar cotação",
  variant = "solid",
  className = "",
}) {
  const base =
    "focus-ring micro-transition inline-flex items-center justify-center rounded-input px-7 py-3.5 text-sm font-medium tracking-wide";
  const styles =
    variant === "solid"
      ? "bg-navy text-white hover:opacity-90"
      : "border border-current hover:opacity-70";

  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
