// Ícones outline simples (24px), no mesmo espírito visual do site de
// referência: traço fino, sem preenchimento.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconHeart(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <path d="M12 21s-7.5-4.6-10-9.3C.5 8.1 2.4 5 5.8 5c2 0 3.4 1 4.2 2.3C10.8 6 12.2 5 14.2 5c3.4 0 5.3 3.1 3.8 6.7C21.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function IconCross(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z" />
    </svg>
  );
}

export function IconCoins(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <ellipse cx="8" cy="8" rx="6" ry="3.5" />
      <path d="M2 8v4c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5V8" />
      <path d="M10 15c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5-2.7-3.5-6-3.5" />
    </svg>
  );
}

export function IconHeadset(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M19.5 19v.5a3 3 0 0 1-3 3H13" />
    </svg>
  );
}

export function IconInfo(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.5v.01" />
    </svg>
  );
}

export function IconGears(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.2-1.6l1.9-1.4-1.5-2.6-2.2.8a7 7 0 0 0-2.7-1.6L14 3h-3l-.3 2.6a7 7 0 0 0-2.7 1.6l-2.2-.8L4.3 9l1.9 1.4A7 7 0 0 0 6 12c0 .5 0 1.1.2 1.6L4.3 15l1.5 2.6 2.2-.8a7 7 0 0 0 2.7 1.6L11 21h3l.3-2.6a7 7 0 0 0 2.7-1.6l2.2.8 1.5-2.6-1.9-1.4c.1-.5.2-1 .2-1.6z" />
    </svg>
  );
}

export function IconDocument(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3M9 12h6M9 16h6" />
    </svg>
  );
}

export function IconCoffee(props) {
  return (
    <svg {...base} width={28} height={28} {...props}>
      <path d="M4 9h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M8 5c0-1 1-1 1-2M12 5c0-1 1-1 1-2" />
    </svg>
  );
}
