"use client";

import { motion } from "framer-motion";
import BlurWords from "@/components/motion/BlurWords";
import { IconPaw, IconStethoscope, IconBed, IconShieldPlus } from "@/components/icons";
import { contact } from "@/lib/site";
import { petPlans, petFeatures, petPlanMessage } from "@/lib/petPlans";

const ease = [0.2, 0.7, 0.2, 1];

// Um ícone por plano, que sobe de nível junto com a cobertura:
// cuidado básico, rotina, internação e proteção máxima.
const planIcons = {
  leve: <IconPaw />,
  tranquilo: <IconStethoscope />,
  ideal: <IconBed />,
  essencial: <IconShieldPlus />,
};

const shortName = (plan) => plan.name.replace("Petlove ", "");

const linkFor = (plan) => contact.whatsappLink(petPlanMessage(plan.name));

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mx-auto h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

const pillButton =
  "focus-ring micro-transition inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-full bg-accent px-6 text-[16px] text-white hover:brightness-110";

export default function PetPlans() {
  return (
    <>
      <section id="planos" className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
        <BlurWords
          as="h2"
          text="Escolha o plano ideal para o seu pet"
          className="mx-auto block max-w-3xl text-center text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {petPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.9, ease }}
              className="card flex flex-col items-center p-8 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-accent">
                {planIcons[plan.id]}
              </span>
              <h3 className="mt-4 text-[24px] leading-[1.15] tracking-[-0.02em] text-ink">
                {plan.name}
              </h3>
              <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[13px] text-muted">
                {plan.tagline}
              </span>
              <p className="mt-6 flex items-baseline justify-center gap-1 whitespace-nowrap text-ink">
                <span className="text-[18px] font-semibold">R$</span>
                <span className="text-[36px] font-bold leading-none tracking-[-0.04em] tabular-nums">
                  {plan.price}
                </span>
                <span className="text-[16px] text-muted">/mês</span>
              </p>
              <p className="mt-2 text-[13px] text-muted">Economize 2 meses no plano anual</p>
              <a
                href={linkFor(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillButton} mt-8 w-full`}
              >
                Quero o {shortName(plan)}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="comparar" className="bg-surface px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-content">
          <BlurWords
            as="h2"
            text="Compare as coberturas"
            className="block text-center text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] text-ink"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-[19px] leading-snug text-muted">
            Veja o que cada plano inclui e escolha o que combina com o momento
            do seu pet.
          </p>

          <p className="mt-8 text-center text-[13px] text-muted sm:hidden">
            Deslize a tabela para o lado para comparar os planos
          </p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease }}
            className="mt-4 overflow-x-auto rounded-[28px] bg-white p-4 sm:mt-12 sm:p-8"
          >
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">Comparação das coberturas dos planos de saúde pet</caption>
              <thead>
                <tr>
                  <th scope="col" className="sticky left-0 w-[30%] bg-white pb-6 pr-4 align-bottom text-[13px] font-normal text-muted">
                    Coberturas
                  </th>
                  {petPlans.map((plan) => (
                    <th key={plan.id} scope="col" className="px-2 pb-6 text-center align-bottom">
                      <span className="block text-[18px] font-semibold tracking-[-0.02em] text-ink">
                        {plan.name}
                      </span>
                      <span className="mt-1 block text-[15px] font-normal tabular-nums text-muted">
                        R$ {plan.price}/mês
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {petFeatures.map((feature) => (
                  <tr key={feature.label} className="border-t border-line">
                    <th scope="row" className="sticky left-0 bg-white py-4 pr-4 text-left text-[15px] font-normal text-ink">
                      {feature.label}
                    </th>
                    {petPlans.map((plan) => {
                      const has = feature.in.includes(plan.id);
                      return (
                        <td key={plan.id} className="px-2 py-4 text-center">
                          {has ? (
                            <>
                              <Check />
                              <span className="sr-only">Inclui</span>
                            </>
                          ) : (
                            <>
                              <span aria-hidden="true" className="text-[18px] leading-none text-line">
                                —
                              </span>
                              <span className="sr-only">Não inclui</span>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-line">
                  <td className="sticky left-0 bg-white" />
                  {petPlans.map((plan) => (
                    <td key={plan.id} className="px-2 pt-6 text-center">
                      <a
                        href={linkFor(plan)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${pillButton} min-h-[40px] w-full px-3 text-[14px]`}
                      >
                        Quero o {shortName(plan)}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </motion.div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-muted">
            Valores mensais de referência, sujeitos a variação por região e às
            condições vigentes na contratação. Coberturas, carências e
            coparticipação seguem o regulamento de cada plano.
          </p>
        </div>
      </section>
    </>
  );
}
