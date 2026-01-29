"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock, RefreshCcw } from "lucide-react";

const guarantees = [
    {
        icon: ShieldCheck,
        title: "Garantía de Reembolso",
        description: "Si pierdes la nota por un error nuestro, te devolvemos el dinero. Tu inversión está 100% protegida con nosotros.",
    },
    {
        icon: UserCheck,
        title: "100% Humano. Cero IA.",
        description: "Cada trabajo es redactado desde cero por expertos reales. Garantizamos originalidad total y verificada.",
    },
    {
        icon: Lock,
        title: "Confidencialidad Total",
        description: "Tus datos y trabajos son estrictamente confidenciales. Nadie sabrá que recibiste nuestra ayuda.",
    },
    {
        icon: RefreshCcw,
        title: "Correcciones Ilimitadas",
        description: "Te acompañamos hasta la aprobación final. Realizamos todos los ajustes necesarios sin costo adicional.",
    },
];

export default function Guarantees() {
    return (
        <section id="garantías" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Tu Tranquilidad es <span className="text-[var(--brand-blue)]">Nuestra Prioridad</span>
                    </h2>
                    <p className="text-slate-600">
                        No solo hacemos el trabajo, te damos la seguridad que necesitas para triunfar académicamente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guarantees.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-50 text-[var(--brand-blue)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
