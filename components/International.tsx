"use client";

import { motion } from "framer-motion";
import { Globe2, FileCheck, Clock, Award } from "lucide-react";

export default function International() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold mb-8"
                        >
                            <Globe2 size={18} />
                            <span>Alcance Mundial</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                        >
                            Tu Tesis <br />
                            <span className="text-[var(--brand-blue)]">Sin Fronteras.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg max-w-xl mb-8 leading-relaxed"
                        >
                            No importa dónde estudies. Nuestros expertos dominan los estándares académicos de Latinoamérica, España y USA, garantizando cumplimiento normativo al 100%.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            {/* Badges */}
                            {["APA 7", "Harvard", "Vancouver", "IEEE", "Chicago"].map((norm, i) => (
                                <span key={i} className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">
                                    {norm}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1: Countries */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 sm:col-span-2"
                        >
                            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
                                <Globe2 size={24} />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-lg font-semibold text-slate-200 mb-1">Países Cubiertos</div>
                            <p className="text-slate-400 text-sm">Desde México hasta Argentina, incluyendo España y USA.</p>
                        </motion.div>

                        {/* Card 2: Standards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 text-purple-400">
                                <FileCheck size={24} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">100%</div>
                            <div className="text-base font-semibold text-slate-200">Normativa</div>
                            <p className="text-slate-400 text-xs mt-2">Adaptación perfecta a tu guía de estilo.</p>
                        </motion.div>

                        {/* Card 3: Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 text-emerald-400">
                                <Award size={24} />
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">Top 1%</div>
                            <div className="text-base font-semibold text-slate-200">Talento</div>
                            <p className="text-slate-400 text-xs mt-2">Redactores seleccionados rigurosamente.</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
