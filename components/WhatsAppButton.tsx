import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/573334318264"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
        >
            <MessageCircle size={24} />
            <span>Chatea con nosotros</span>
        </a>
    );
}
