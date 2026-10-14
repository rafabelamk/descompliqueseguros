"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/site";

const ease = [0.2, 0.7, 0.2, 1];

const MIN = 50000;
const MAX = 2000000;

const formatBRL = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

const labelClass = "mb-1.5 block text-[13px] font-medium text-black/60";

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

  const pct = ((valor - MIN) / (MAX - MIN)) * 100;

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease }}
      className="grid gap-12 rounded-[28px] bg-surface p-8 sm:grid-cols-2 sm:p-12"
    >
      <div className="flex flex-col justify-center">
        <p className="eyebrow text-accent">Valor do seguro</p>
        <p className="mt-2 text-[52px] font-bold leading-none tracking-[-0.045em] tabular-nums text-ink sm:text-[64px]">
          {formatBRL(valor)}
        </p>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10000}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          aria-label="Valor do seguro"
          style={{ "--pct": `${pct}%` }}
          className="range-apple mt-8"
        />
        <p className="mt-2 text-[13px] text-muted">Arraste pra simular outro valor</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-[17px] leading-snug text-muted">
          Preencha seus dados e receba, no WhatsApp, uma simulação real pra
          essa cobertura.
        </p>
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Idade</label>
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
            <label className={labelClass}>Profissão</label>
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
            <label className={labelClass}>Renda mensal</label>
            <input
              value={renda}
              onChange={(e) => setRenda(e.target.value)}
              className="input-field"
              placeholder="R$ 5.000"
            />
          </div>
          <div>
            <label className={labelClass}>Média de gasto no mês</label>
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
          className="focus-ring micro-transition min-h-[48px] w-full rounded-full bg-accent text-[17px] text-white hover:brightness-110 active:scale-[0.99]"
        >
          {ctaLabel}
        </button>
      </form>
    </motion.div>
  );
}
