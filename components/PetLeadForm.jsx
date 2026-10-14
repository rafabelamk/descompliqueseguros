"use client";

import { useState } from "react";
import { contact } from "@/lib/site";
import { petPlans } from "@/lib/petPlans";

const labelClass = "mb-1.5 block text-[13px] font-medium text-black/60";

// Formulário que monta a mensagem e abre o WhatsApp já com o contexto
// (plano de interesse, tipo de pet e dados da pessoa).
export default function PetLeadForm() {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [pet, setPet] = useState("Cão");
  const [plano, setPlano] = useState("Ainda não sei qual plano");

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      "Olá! Quero saber mais sobre o plano de saúde pet.",
      `Plano de interesse: ${plano}`,
      `Meu pet: ${pet}`,
      nome && `Nome: ${nome}`,
      celular && `Celular: ${celular}`,
    ].filter(Boolean);
    window.open(contact.whatsappLink(lines.join("\n")), "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Nome</label>
        <input
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="input-field"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label className={labelClass}>Celular</label>
        <input
          type="tel"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          className="input-field"
          placeholder="(00) 12345-6789"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Meu pet é</label>
          <select value={pet} onChange={(e) => setPet(e.target.value)} className="input-field">
            <option>Cão</option>
            <option>Gato</option>
            <option>Cão e gato</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Plano de interesse</label>
          <select value={plano} onChange={(e) => setPlano(e.target.value)} className="input-field">
            <option>Ainda não sei qual plano</option>
            {petPlans.map((p) => (
              <option key={p.id}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="focus-ring micro-transition min-h-[48px] w-full rounded-full bg-accent text-[17px] text-white hover:brightness-110 active:scale-[0.99]"
      >
        Falar no WhatsApp
      </button>
    </form>
  );
}
