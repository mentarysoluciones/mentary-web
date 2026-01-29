"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10 opacity-60" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--brand-blue)] rounded-full blur-[120px] opacity-20 -z-10" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex flex-wrap items-center gap-3 mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[var(--brand-blue)] text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-[var(--brand-blue)] animate-pulse" />
                            Asesoría Académica Premium
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider border border-slate-200">
                            🌎 Cobertura Internacional
                        </div>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Tus Notas <br />
                        <span className="text-[var(--brand-blue)]">Al Máximo.</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Expertos académicos dedicados a tu éxito. Tesis, ensayos y proyectos con garantía de originalidad y excelencia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/573334318264"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-[var(--brand-blue)] transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                            Solicitar Cotización <ArrowRight size={20} />
                        </a>
                        <Link
                            href="#garantías"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-bold hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] transition-all duration-300"
                        >
                            Ver Garantías
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[var(--brand-blue)]" />
                            <span>100% Humano</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[var(--brand-blue)]" />
                            <span>Cero IA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-[var(--brand-blue)]" />
                            <span>Confidencial</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content - Abstract/Professional */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-md mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                <CheckCircle2 className="text-[var(--brand-blue)]" />
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-slate-400">Estado</div>
                                <div className="font-bold text-green-500">Aprobado</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-4 bg-slate-100 rounded-full w-3/4" />
                            <div className="h-4 bg-slate-100 rounded-full w-full" />
                            <div className="h-4 bg-slate-100 rounded-full w-5/6" />
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-500">Nota Final</span>
                            <span className="text-3xl font-bold text-slate-900">100/100</span>
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-12 -right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 z-20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="font-bold text-slate-800">Entregado a tiempo</span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
