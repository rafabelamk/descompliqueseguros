import { contact } from "@/lib/site";

export default function WhatsAppButton({
  children = "Solicitar cotação",
  variant = "solid",
  className = "",
}) {
  const base =
    "focus-ring micro-transition inline-flex min-h-[44px] items-center justify-center rounded-full px-7 text-[17px]";
  const styles =
    variant === "solid"
      ? "bg-accent text-white hover:brightness-110"
      : "border border-accent text-accent hover:bg-accent hover:text-white";

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
