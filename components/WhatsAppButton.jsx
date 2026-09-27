import { contact } from "@/lib/site";

export default function WhatsAppButton({
  children = "Solicitar cotação",
  variant = "solid",
  className = "",
}) {
  const base =
    "focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold-soft"
      : "border border-current text-inherit hover:bg-white/10";

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
