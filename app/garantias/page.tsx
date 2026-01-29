import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle2, ShieldCheck, RefreshCcw, Clock } from "lucide-react";

export default function GuaranteesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">

                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">Garantías y Política de Revisión</h1>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Tu éxito es nuestro compromiso. Conoce cómo protegemos tu inversión y aseguramos la calidad de cada entrega.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <ShieldCheck className="w-10 h-10 text-[var(--brand-blue)] mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Garantía de Calidad</h3>
                            <p className="text-slate-600">
                                Nos comprometemos a entregar un trabajo que cumpla estrictamente con los requisitos acordados. La asesoría será conforme al nivel académico seleccionado.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <RefreshCcw className="w-10 h-10 text-[var(--brand-blue)] mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Ajustes Ilimitados</h3>
                            <p className="text-slate-600">
                                Incluye ajustes ilimitados sin costo adicional durante 30 días calendario tras la entrega. Cubre correcciones de errores u omisiones sobre los requisitos originales.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <Clock className="w-10 h-10 text-[var(--brand-blue)] mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">3. Garantía Extendida (Tesis)</h3>
                            <p className="text-slate-600">
                                Para proyectos y tesis, la garantía se extiende hasta por **6 meses**. Se renueva automáticamente con cada avance entregado.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <CheckCircle2 className="w-10 h-10 text-[var(--brand-blue)] mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">4. Errores Atribuibles</h3>
                            <p className="text-slate-600">
                                Si hay un error atribuible a nuestro equipo, realizaremos las correcciones sin costo incluso fuera del periodo inicial.
                            </p>
                        </div>
                    </div>

                    <div className="prose prose-slate max-w-none hover:prose-a:text-[var(--brand-blue)]">
                        <h2>5. Política de Reembolsos</h2>
                        <p>Ofrecemos un sistema de reembolsos basado en la calificación obtenida (plazo máx. 15 días después de recibir la nota):</p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm whitespace-nowrap">
                                <thead className="uppercase tracking-wider border-b-2 border-slate-200 bg-slate-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Calificación</th>
                                        <th scope="col" className="px-6 py-4">Reembolso</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900">Menor a 3.0 (Reprobado)</th>
                                        <td className="px-6 py-4 text-green-600 font-bold">100% Reembolso</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900">Entre 3.0 y 3.5</th>
                                        <td className="px-6 py-4 text-[var(--brand-blue)] font-bold">30% Compensación</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900">Entre 3.5 y 4.0</th>
                                        <td className="px-6 py-4 text-blue-400 font-bold">15% Gesto de mejora</td>
                                    </tr>
                                    <tr className="border-b border-slate-100">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900">Mayor a 4.1</th>
                                        <td className="px-6 py-4 text-slate-400">Sin reembolso (Éxito)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="mt-12">6. Limitaciones</h2>
                        <p>
                            Nuestra garantía se limita a la calidad y conformidad del trabajo. No garantizamos una nota específica, pero respaldamos nuestro trabajo con la política de reembolsos anterior. La responsabilidad ética recae en el cliente.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
