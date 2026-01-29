"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Calculator, Code2, PenTool, FileText, FlaskConical, Languages } from "lucide-react";

const services = [
    { icon: BookOpen, name: "Tesis de Grado" },
    { icon: GraduationCap, name: "Monografías" },
    { icon: FileText, name: "Ensayos Académicos" },
    { icon: Calculator, name: "Matemáticas y Ecuaciones" },
    { icon: Code2, name: "Programación (IT)" },
    { icon: PenTool, name: "Proyectos de Diseño" },
    { icon: FlaskConical, name: "Ciencias y Química" },
    { icon: Languages, name: "Traducciones" },
];

export default function Services() {
    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-[var(--brand-blue)] font-semibold tracking-wider text-xs md:text-sm uppercase mb-2 block">
                            Nuestras Especialidades
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                            Cubrimos Todas las Áreas Académicas
                        </h2>
                    </div>
                    <a href="https://wa.me/573334318264" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-[var(--brand-blue)] font-bold hover:underline">
                        Cotizar estas materias &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[var(--brand-blue)] hover:bg-white hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
                        >
                            <div className="mx-auto w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 text-slate-400 group-hover:text-[var(--brand-blue)] group-hover:border-[var(--brand-blue)] transition-colors">
                                <service.icon size={24} />
                            </div>
                            <h3 className="font-semibold text-slate-800 group-hover:text-[var(--brand-blue)] transition-colors">
                                {service.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="https://wa.me/573334318264" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--brand-blue)] font-bold">
                        Cotizar estas materias &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
