import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Image src="/logo_transparent.png" alt="Mentary Logo" width={120} height={48} className="h-8 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Asesoría académica profesional y confiable para estudiantes universitarios que buscan excelencia sin compromisos.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Plataforma</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Servicios</Link></li>
                            <li><Link href="/garantias" className="hover:text-white transition-colors">Garantías</Link></li>
                            <li><Link href="/#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/garantias" className="hover:text-white transition-colors">Política de Reembolso</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li>mentarysoluciones@gmail.com</li>
                            <li>+57 333 4318264</li>
                            <li className="pt-4">
                                <button className="w-full py-2 rounded bg-[var(--brand-blue)] text-white font-semibold hover:brightness-110 transition-all">
                                    Contactar Soporte
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} Mentary. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons placeholders */}
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" />
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" />
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
