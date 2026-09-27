"use client";

import { useState } from "react";
import { contact } from "@/lib/site";

const assuntos = ["Dúvidas", "Coberturas", "Sinistro", "Outros"];

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      form.telefone && `Telefone: ${form.telefone}`,
      form.assunto && `Assunto: ${form.assunto}`,
      "",
      form.mensagem,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${text}`,
      "_blank"
    );
  }

  return (
    <div className="card mx-auto max-w-3xl p-8 sm:p-14">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <h2 className="text-[28px] leading-tight text-navy sm:text-[32px]">
            Como podemos te ajudar?
          </h2>
          <p className="mt-4 text-sm font-light text-black/60">
            Preencha o formulário para que a nossa equipe analise suas
            necessidades e entre em contato — a mensagem é enviada direto
            para o nosso WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Digite seu nome</label>
            <input
              required
              value={form.nome}
              onChange={update("nome")}
              className="input-field"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Digite seu melhor e-mail</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              className="input-field"
              placeholder="exemplo@email.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Telefone</label>
            <input
              value={form.telefone}
              onChange={update("telefone")}
              className="input-field"
              placeholder="(00) 12345-6789"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Assunto</label>
            <select value={form.assunto} onChange={update("assunto")} className="input-field">
              <option value="">Selecione...</option>
              {assuntos.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-black/60">Mensagem</label>
            <textarea
              required
              rows={4}
              value={form.mensagem}
              onChange={update("mensagem")}
              className="input-field"
              placeholder="Escreva sobre o que quer falar aqui..."
            />
          </div>

          <button
            type="submit"
            className="focus-ring micro-transition w-full rounded-input bg-orange py-4 text-base font-medium text-white hover:opacity-90"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
