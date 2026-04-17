"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  nombre: string;
  telefono: string;
  correo: string;
  cvLink: string;
  pasion: string;
};

const TOTAL_STEPS = 4;

const WHATSAPP_NUMBER = "523310450389";

function buildWhatsAppMessage(data: FormData): string {
  return (
    `Hola Harmony! 💅 Me interesa la vacante de técnica en manicura.\n\n` +
    `*Nombre completo:* ${data.nombre}\n` +
    `*Teléfono:* ${data.telefono}\n` +
    `*Correo:* ${data.correo}\n` +
    `*CV:* ${data.cvLink || "Se adjunta por separado"}\n\n` +
    `*¿Qué es lo que más me gusta del mundo de las uñas?*\n${data.pasion}`
  );
}

const inputClass =
  "w-full bg-white border border-secondary rounded-xl px-4 py-3 font-montserrat text-[14px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200";
const labelClass =
  "block font-montserrat font-semibold text-[12px] uppercase tracking-[0.15em] text-primary mb-2";

function StepDots({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div
            animate={{
              scale: i === current ? 1.25 : 1,
              backgroundColor: i < current ? "#E91E8C" : i === current ? "#E91E8C" : "#F9C6D9",
            }}
            transition={{ duration: 0.3 }}
            className="w-3 h-3 rounded-full"
          />
          {i < TOTAL_STEPS - 1 && (
            <motion.div
              animate={{ backgroundColor: i < current ? "#E91E8C" : "#F9C6D9" }}
              transition={{ duration: 0.3 }}
              className="w-8 sm:w-12 h-[2px] rounded-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function JobWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormData>({
    nombre: "",
    telefono: "",
    correo: "",
    cvLink: "",
    pasion: "",
  });

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const canNext = () => {
    if (step === 0) return form.nombre.trim() !== "" && form.telefono.trim() !== "";
    if (step === 1) return form.correo.trim() !== "";
    if (step === 2) return form.pasion.trim() !== "";
    return true;
  };

  const goNext = () => {
    if (!canNext()) return;
    setDir(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    setDir(-1);
    setStep((s) => s - 1);
  };

  const handleSend = () => {
    const msg = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <section id="vacante" className="py-16 sm:py-20 md:py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #FFF5F0 0%, #FDE8EF 50%, #FFF5F0 100%)" }}>
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="block font-inter text-[11px] sm:text-[12px] text-primary uppercase tracking-[0.25em] mb-3">
            Únete a nuestro equipo
          </span>
          <h2 className="font-montserrat font-bold text-[26px] sm:text-[32px] lg:text-[38px] text-primary uppercase leading-tight mb-4">
            Trabaja con Nosotras
          </h2>
          <p className="font-montserrat text-[14px] sm:text-[15px] text-muted leading-relaxed max-w-md mx-auto">
            Buscamos <span className="font-semibold text-foreground">técnicas en manicura</span> apasionadas, con mínimo{" "}
            <span className="font-semibold text-foreground">2 años de experiencia</span>. Si el arte en uñas es tu mundo, queremos conocerte.
          </p>

          {/* Decorative gems */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-primary/40 text-lg">◆</span>
            <span className="text-primary text-sm">◆</span>
            <span className="text-primary/40 text-lg">◆</span>
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(233,30,140,0.10)] border border-secondary/60 px-6 sm:px-10 py-8 sm:py-10"
        >
          {!sent ? (
            <>
              <StepDots current={step} />

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* ── STEP 0: Datos personales ── */}
                  {step === 0 && (
                    <div>
                      <p className="font-montserrat font-bold text-[17px] sm:text-[19px] text-foreground mb-1">
                        Cuéntanos quién eres
                      </p>
                      <p className="font-montserrat text-[13px] text-muted mb-6">Paso 1 de 4 — Datos personales</p>

                      <div className="space-y-5">
                        <div>
                          <label className={labelClass}>Nombre completo *</label>
                          <input
                            type="text"
                            value={form.nombre}
                            onChange={set("nombre")}
                            placeholder="Ej. María García López"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Número de contacto *</label>
                          <input
                            type="tel"
                            value={form.telefono}
                            onChange={set("telefono")}
                            placeholder="Ej. 3312345678"
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 1: Contacto digital ── */}
                  {step === 1 && (
                    <div>
                      <p className="font-montserrat font-bold text-[17px] sm:text-[19px] text-foreground mb-1">
                        Tu contacto digital
                      </p>
                      <p className="font-montserrat text-[13px] text-muted mb-6">Paso 2 de 4 — Correo y CV</p>

                      <div className="space-y-5">
                        <div>
                          <label className={labelClass}>Correo electrónico *</label>
                          <input
                            type="email"
                            value={form.correo}
                            onChange={set("correo")}
                            placeholder="tu@correo.com"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>
                            Link de tu CV{" "}
                            <span className="normal-case text-muted/80 font-normal tracking-normal">(opcional)</span>
                          </label>
                          <input
                            type="url"
                            value={form.cvLink}
                            onChange={set("cvLink")}
                            placeholder="Google Drive, Dropbox, etc."
                            className={inputClass}
                          />
                          <p className="font-montserrat text-[11px] text-muted/70 mt-1.5 leading-relaxed">
                            Sube tu CV a Google Drive o Dropbox y pega el enlace aquí. Si no tienes, puedes enviarlo por separado.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 2: Pregunta creativa ── */}
                  {step === 2 && (
                    <div>
                      <p className="font-montserrat font-bold text-[17px] sm:text-[19px] text-foreground mb-1">
                        Tu pasión por las uñas
                      </p>
                      <p className="font-montserrat text-[13px] text-muted mb-6">Paso 3 de 4 — Cuéntanos más</p>

                      <div>
                        <label className={labelClass}>
                          ¿Qué es lo que más te gusta del mundo de las uñas? *
                        </label>
                        <textarea
                          value={form.pasion}
                          onChange={set("pasion")}
                          rows={5}
                          placeholder="Cuéntanos con tus palabras qué significa para ti el arte en uñas..."
                          className={`${inputClass} resize-none`}
                        />
                        <p className="font-montserrat text-[11px] text-muted/70 mt-1.5">
                          No hay respuesta incorrecta. Sé tú misma. 💕
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ── STEP 3: Resumen ── */}
                  {step === 3 && (
                    <div>
                      <p className="font-montserrat font-bold text-[17px] sm:text-[19px] text-foreground mb-1">
                        Revisa tu solicitud
                      </p>
                      <p className="font-montserrat text-[13px] text-muted mb-6">
                        Paso 4 de 4 — Todo listo para enviar
                      </p>

                      <div className="bg-light rounded-2xl px-5 py-5 space-y-4 mb-6">
                        {[
                          { label: "Nombre", value: form.nombre },
                          { label: "Teléfono", value: form.telefono },
                          { label: "Correo", value: form.correo },
                          { label: "CV", value: form.cvLink || "Se adjunta por separado" },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-0.5 sm:gap-3">
                            <span className="font-montserrat font-semibold text-[11px] uppercase tracking-widest text-primary min-w-[80px]">
                              {label}
                            </span>
                            <span className="font-montserrat text-[13px] sm:text-[14px] text-foreground break-all">
                              {value}
                            </span>
                          </div>
                        ))}
                        <div className="border-t border-secondary/60 pt-4">
                          <span className="font-montserrat font-semibold text-[11px] uppercase tracking-widest text-primary block mb-1">
                            Mi pasión
                          </span>
                          <p className="font-montserrat text-[13px] sm:text-[14px] text-foreground leading-relaxed italic">
                            &ldquo;{form.pasion}&rdquo;
                          </p>
                        </div>
                      </div>

                      <p className="font-montserrat text-[12px] text-muted/70 text-center leading-relaxed mb-1">
                        Al pulsar el botón se abrirá WhatsApp con tu mensaje listo para enviar al número de Harmony.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className={`flex mt-8 gap-3 ${step > 0 ? "justify-between" : "justify-end"}`}>
                {step > 0 && (
                  <button
                    onClick={goBack}
                    className="font-montserrat font-semibold text-[13px] uppercase tracking-wider text-muted border border-secondary rounded-full px-6 py-3 hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    Atrás
                  </button>
                )}

                {step < TOTAL_STEPS - 1 ? (
                  <button
                    onClick={goNext}
                    disabled={!canNext()}
                    className="font-montserrat font-semibold text-[13px] uppercase tracking-wider text-white bg-primary rounded-full px-8 py-3 hover:bg-primary/90 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continuar
                  </button>
                ) : (
                  <motion.button
                    onClick={handleSend}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 font-montserrat font-bold text-[13px] uppercase tracking-wider text-white bg-[#25D366] rounded-full px-8 py-3 hover:bg-[#1fb855] transition-all duration-200 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
                  >
                    {/* WhatsApp icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar por WhatsApp
                  </motion.button>
                )}
              </div>
            </>
          ) : (
            /* Sent confirmation */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-6"
            >
              <div className="text-5xl mb-4">💅✨</div>
              <h3 className="font-montserrat font-bold text-[20px] sm:text-[22px] text-primary mb-3 uppercase">
                ¡Gracias, {form.nombre.split(" ")[0]}!
              </h3>
              <p className="font-montserrat text-[14px] sm:text-[15px] text-muted leading-relaxed max-w-xs mx-auto mb-6">
                Tu solicitud fue enviada a Harmony. Pronto te contactarán para los siguientes pasos. ¡Mucho éxito! 🌸
              </p>
              <button
                onClick={() => {
                  setForm({ nombre: "", telefono: "", correo: "", cvLink: "", pasion: "" });
                  setStep(0);
                  setSent(false);
                }}
                className="font-montserrat font-semibold text-[12px] uppercase tracking-wider text-primary border border-primary rounded-full px-6 py-2.5 hover:bg-primary hover:text-white transition-all duration-200"
              >
                Enviar otra solicitud
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-montserrat text-[11px] sm:text-[12px] text-muted/60 mt-5"
        >
          Para más informes puedes escribirnos directamente al{" "}
          <a
            href="https://wa.me/523310450389"
            target="_blank"
            className="text-primary hover:underline"
          >
            33 1045 0389
          </a>
        </motion.p>
      </div>
    </section>
  );
}
