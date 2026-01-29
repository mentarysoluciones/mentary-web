import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Términos y Condiciones</h1>
                    <p className="text-xl text-slate-500 mb-12">Marco legal que rige nuestros servicios académicos.</p>

                    <div className="prose prose-slate max-w-none hover:prose-a:text-[var(--brand-blue)]">
                        <h2>1. Objeto y Aceptación</h2>
                        <p>
                            Al utilizar los servicios de Mentary ("Servicio"), usted ("Cliente") acepta estos términos. Nuestro servicio consiste en la prestación de asesoría académica y apoyo educativo para fortalecer la comprensión del Cliente en sus áreas de estudio.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[var(--brand-blue)] my-6">
                            <strong>Importante:</strong> El Cliente es el único responsable del uso ético y adecuado del material proporcionado, de acuerdo con las políticas de integridad académica de su institución.
                        </div>

                        <h2>2. Alcance del Servicio</h2>
                        <p>Ofrecemos apoyo en la elaboración de resúmenes, guías, ensayos, análisis y proyectos.</p>
                        <p><strong>Exclusiones:</strong> No realizamos suplantación de identidad en exámenes ni promovemos el plagio.</p>

                        <h2>3. Proceso del Servicio</h2>
                        <ol>
                            <li><strong>Solicitud:</strong> El Cliente completa el formulario o contacta por WhatsApp.</li>
                            <li><strong>Cotización:</strong> Enviamos una oferta detallada.</li>
                            <li><strong>Pago:</strong> El Cliente realiza el pago acordado.</li>
                            <li><strong>Entrega:</strong> Entregamos el trabajo en la fecha pactada.</li>
                            <li><strong>Ajustes:</strong> Según nuestra Política de Garantías.</li>
                        </ol>

                        <h2>4. Responsabilidades del Cliente</h2>
                        <ul>
                            <li>Proporcionar información clara y veraz.</li>
                            <li>Establecer fechas de entrega realistas.</li>
                            <li>Realizar el pago completo antes del inicio (según el esquema acordado).</li>
                        </ul>

                        <h2>5. Propiedad Intelectual</h2>
                        <p>
                            Una vez completado el pago total, los derechos sobre el material se transfieren al Cliente. Antes del pago total, la autoría permanece con Mentary.
                        </p>

                        <h2>6. Pagos y Reembolsos</h2>
                        <p>
                            Los servicios son prepagados. Los criterios de reembolso se detallan en nuestra <a href="/garantias" className="text-[var(--brand-blue)] font-bold">Política de Garantías</a>.
                        </p>

                        <h2>7. Ley Aplicable</h2>
                        <p>Cualquier disputa se regirá por las leyes de Colombia.</p>
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
