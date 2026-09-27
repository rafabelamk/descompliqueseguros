import { contact } from "@/lib/site";

export default function WhatsAppButton({
  children = "Solicitar cotação",
  variant = "solid",
  className = "",
}) {
  const base =
    "focus-ring micro-transition inline-flex items-center justify-center rounded-input px-9 py-4 text-base font-medium tracking-wide";
  const styles =
    variant === "solid"
      ? "bg-orange text-white hover:opacity-90"
      : "border-2 border-orange text-orange hover:opacity-70";

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
