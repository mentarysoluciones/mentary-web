"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const countries = [
    { code: "CO", name: "Colombia", flag: "🇨🇴" },
    { code: "MX", name: "México", flag: "🇲🇽" },
    { code: "ES", name: "España", flag: "🇪🇸" },
    { code: "US", name: "Estados Unidos", flag: "🇺🇸" },
    { code: "EC", name: "Ecuador", flag: "🇪🇨" },
    { code: "PE", name: "Perú", flag: "🇵🇪" },
    { code: "CL", name: "Chile", flag: "🇨🇱" },
    { code: "AR", name: "Argentina", flag: "🇦🇷" },
];

export default function International() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold mb-6"
                    >
                        <Globe2 size={18} />
                        <span>Cobertura Global</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Sin Fronteras. <br />
                        <span className="text-[var(--brand-blue)]">Excelencia Internacional.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Nuestros expertos entienden los estándares académicos de múltiples países, asegurando que tu trabajo cumpla con las normativas locales (APA, Harvard, IEEE, etc.).
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.code}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <span className="text-4xl mb-2" role="img" aria-label={`Bandera de ${country.name}`}>
                                {country.flag}
                            </span>
                            <span className="text-sm font-medium text-slate-300">{country.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
