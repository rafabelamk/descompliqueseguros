"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

const formatBRL = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

// Adaptação honesta do bloco "exemplo de cotação" do site de referência:
// lá era um exemplo fictício fixo (nome, foto de banco de imagens e valor
// inventados). Aqui virou uma calculadora de verdade — o visitante
// preenche os próprios dados e manda a simulação pelo WhatsApp.
export default function QuoteWidget({ productLabel, ctaLabel = "Cotar agora" }) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [renda, setRenda] = useState("");
  const [gasto, setGasto] = useState("");
  const [valor, setValor] = useState(200000);

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Quero simular: ${productLabel}`,
      `Valor desejado: ${formatBRL(valor)}`,
      nome && `Nome: ${nome}`,
      idade && `Idade: ${idade}`,
      profissao && `Profissão: ${profissao}`,
      renda && `Renda mensal: ${renda}`,
      gasto && `Média de gasto no mês: ${gasto}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${text}`,
      "_blank"
    );
  }

  return (
    <div className="card grid gap-10 p-8 sm:grid-cols-2 sm:p-12">
      <div>
        <p className="eyebrow text-orange">Valor do seguro</p>
        <p className="mt-2 text-[56px] leading-none text-navy sm:text-[64px]">
          {formatBRL(valor)}
        </p>
        <input
          type="range"
          min={50000}
          max={2000000}
          step={10000}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          className="mt-6 w-full accent-orange"
        />
        <p className="mt-2 text-xs text-black/50">Arraste pra simular outro valor</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-sm font-light text-black/70">
          Preencha seus dados e receba, no WhatsApp, uma simulação real pra
          essa cobertura.
        </p>
        <div>
          <label className="mb-1.5 block text-xs text-black/60">Nome</label>
          <input
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input-field"
            placeholder="Seu nome"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Idade</label>
            <input
              required
              type="number"
              min={0}
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="input-field"
              placeholder="35"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Profissão</label>
            <input
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
              className="input-field"
              placeholder="Sua profissão"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Renda mensal</label>
            <input
              value={renda}
              onChange={(e) => setRenda(e.target.value)}
              className="input-field"
              placeholder="R$ 5.000"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-black/60">
              Média de gasto no mês
            </label>
            <input
              value={gasto}
              onChange={(e) => setGasto(e.target.value)}
              className="input-field"
              placeholder="R$ 3.000"
            />
          </div>
        </div>
        <button
          type="submit"
          className="focus-ring micro-transition w-full rounded-input bg-orange py-4 text-base font-medium text-white hover:opacity-90"
        >
          {ctaLabel}
        </button>
      </form>
    </div>
  );
}
