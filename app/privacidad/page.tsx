import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Política de Privacidad</h1>
                    <p className="text-xl text-slate-500 mb-12">Tu privacidad es nuestra prioridad. Transparencia total en el manejo de tus datos.</p>

                    <div className="prose prose-slate max-w-none hover:prose-a:text-[var(--brand-blue)]">
                        <h2>1. Introducción</h2>
                        <p>
                            En Mentary, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política te informará sobre cómo cuidamos tu información cuando visitas nuestro sitio web y utilizas nuestros servicios, y te explicará tus derechos de privacidad y cómo la ley te protege.
                        </p>

                        <h2>2. Datos que Recopilamos</h2>
                        <p>Para poder proporcionarte una cotización y prestarte nuestros servicios de asesoría, recopilamos la información mínima necesaria:</p>
                        <ul>
                            <li><strong>Datos de la Solicitud:</strong> Nivel académico, tipo de servicio, materia, país y los detalles específicos de tu trabajo.</li>
                            <li><strong>Datos de Contacto:</strong> Tu dirección de correo electrónico y número de WhatsApp.</li>
                            <li><strong>Datos Técnicos:</strong> Información básica como tu dirección IP para fines de seguridad.</li>
                        </ul>

                        <h2>3. Finalidad y Uso de tus Datos</h2>
                        <p>Utilizamos tus datos exclusivamente para:</p>
                        <ul>
                            <li>Generar y comunicarte una cotización personalizada.</li>
                            <li>Contactarte para dar seguimiento a tu solicitud.</li>
                            <li>Prestar el servicio de asesoría académica.</li>
                            <li>Fines administrativos internos y prevención de fraude.</li>
                        </ul>

                        <h2>4. Medidas de Seguridad</h2>
                        <p>
                            Nos tomamos la seguridad de tus datos muy en serio. La información personal sensible es cifrada antes de ser procesada o almacenada para protegerla de accesos no autorizados.
                        </p>

                        <h2>5. Conservación de los Datos</h2>
                        <p>
                            Conservaremos tus datos personales solo durante el tiempo razonablemente necesario para cumplir con los fines para los que fueron recopilados, incluyendo la prestación del servicio y el cumplimiento de obligaciones legales.
                        </p>

                        <h2>6. Tus Derechos</h2>
                        <p>
                            Tienes derecho a acceder, rectificar o suprimir tus datos personales. Para ejercer estos derechos, contáctanos a través de nuestros canales oficiales.
                        </p>

                        <h2>7. Cookies</h2>
                        <p>
                            Nuestro sitio web utiliza únicamente cookies técnicas para mantener el estado de tu sesión y mejorar tu experiencia. No utilizamos cookies de seguimiento de terceros.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
