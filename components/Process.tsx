"use client";

import { motion } from "framer-motion";
import { MessageSquare, UserPlus, CreditCard, FileCheck } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "1. Cotiza tu Pedido",
        description: "Envíanos los detalles de tu trabajo. Te responderemos en minutos con un presupuesto personalizado.",
    },
    {
        icon: UserPlus,
        title: "2. Asignación de Experto",
        description: "Seleccionamos al mejor especialista en tu área académica para garantizar la máxima calidad.",
    },
    {
        icon: CreditCard,
        title: "3. Pago Seguro",
        description: "Realiza tu pago de forma 100% segura. Aceptamos múltiples métodos para tu comodidad.",
    },
    {
        icon: FileCheck,
        title: "4. Recibe y Aprueba",
        description: "Recibe tu trabajo en el plazo acordado. Tienes garantía de revisiones hasta que estés satisfecho.",
    },
];

export default function Process() {
    return (
        <section id="cómo-funciona" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-50 -translate-y-1/2 hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <span className="text-[var(--brand-blue)] font-bold tracking-wider text-sm uppercase mb-3 block">
                        Proceso Simple
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Tu Trabajo Listo en <span className="text-[var(--brand-blue)]">4 Pasos</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="w-16 h-16 mx-auto bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:border-[var(--brand-blue)] group-hover:text-[var(--brand-blue)] transition-all duration-300 shadow-sm relative z-10">
                                <step.icon size={28} />
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="text-center px-2">
                                <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
