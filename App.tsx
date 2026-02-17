
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  TrendingUp, 
  HandHelping,
  Star,
  BookOpen,
  UserCheck,
  MessageCircle,
  Heart,
  Crown,
  Target,
  Coins,
  Smile,
  Users,
  Quote,
  AlertCircle
} from 'lucide-react';

// --- Helper Components ---

const CHECKOUT_BASIC_URL = "https://pay.hotmart.com/J104494487U?off=mydkgx3o";
const CHECKOUT_COMPLETE_URL = "https://pay.hotmart.com/J104494487U?off=zk592gx5";

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean; id?: string }> = ({ children, subtitle, light, id }) => (
  <div className="text-center mb-10 md:mb-16 px-4" id={id}>
    <h2 className={`text-3xl md:text-6xl font-bold mb-4 ${light ? 'text-white' : 'gold-gradient'}`}>
      {children}
    </h2>
    {subtitle && <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">{subtitle}</p>}
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left hover:text-amber-400 transition"
      >
        <span className="text-lg md:text-xl font-bold pr-4 leading-tight">{question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="pb-5 text-slate-300 text-base md:text-xl leading-relaxed animate-fade-in font-medium">{answer}</p>}
    </div>
  );
};

const ValueBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded text-sm font-bold border border-red-600/30 mb-2">
    <span className="line-through">$ 49.90</span>
    <span className="text-white">HOY: GRATIS</span>
  </div>
);

// --- Page Sections ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass-card px-4 py-3 flex justify-between items-center md:hidden border-b border-amber-500/20">
        <span className="gold-gradient font-black text-sm uppercase tracking-tighter">21 Días de Propósito</span>
        <a href="#checkout" className="gold-bg text-slate-950 px-5 py-2 rounded-full text-xs font-black shadow-lg active:scale-95 transition">VER PLANES</a>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl flex flex-col items-center text-center relative z-10">
          <div className="inline-block bg-slate-800/80 border border-amber-500/30 text-amber-400 px-4 md:px-5 py-2 rounded-full text-xs md:text-base font-bold mb-6 md:mb-8 animate-pulse uppercase tracking-wide">
            🔥 PARA CRISTIANOS QUE BUSCAN PROVISIÓN
          </div>
          <h1 className="text-3xl md:text-7xl font-bold leading-tight mb-6 md:mb-8 max-w-5xl px-2">
            ¿Oras, ayunas, eres fiel… pero el dinero sigue <span className="gold-gradient">acabándose antes de fin de mes?</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-4xl leading-relaxed font-medium px-2">
            Descubre cómo vivir 21 días de propósito con Dios para romper el ciclo de escasez, dejar de vivir en aprietos y activar la provisión que ya te fue prometida — sin culpa por querer prosperar.
          </p>
          
          <div className="flex flex-col items-center gap-5 mb-16 w-full max-w-md md:max-w-none">
            <a 
              href="#checkout" 
              className="gold-bg text-slate-950 font-black py-5 px-8 md:px-10 rounded-full text-xl md:text-3xl cta-glow transform hover:scale-105 active:scale-95 transition duration-300 flex items-center justify-center gap-3 group w-full md:w-fit"
            >
              ¡SÍ! QUIERO DESBLOQUEAR MI VIDA
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-amber-500 font-bold flex items-center gap-2 text-sm md:text-base px-4">
              <AlertCircle className="w-5 h-5 shrink-0" /> Una guía para quienes están cansados de vivir por fe… pero en saldo negativo.
            </p>
          </div>

          <div className="relative mt-8 w-full max-w-4xl mx-auto flex justify-center px-2">
            <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative glass-card rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-8 border border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
              {/* Floating Badges */}
              <div className="absolute -left-2 md:-left-4 top-4 md:top-10 z-20 flex flex-col gap-2">
                <div className="glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-amber-500/40 shadow-xl backdrop-blur-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <p className="text-amber-400 font-black text-[10px] md:text-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Guía Completa
                  </p>
                </div>
                <div className="glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-amber-500/40 shadow-xl backdrop-blur-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-500 fill-amber-500" /> Acceso Vitalicio
                  </p>
                </div>
              </div>

              <div className="absolute -right-2 md:-right-4 bottom-4 md:bottom-10 z-20 glass-card px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl border border-amber-500/40 shadow-2xl backdrop-blur-xl flex items-center gap-2 md:gap-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?u=1" className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-slate-900" alt="User" />
                  <img src="https://i.pravatar.cc/100?u=2" className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-slate-900" alt="User" />
                </div>
                <div>
                  <p className="text-white font-black text-xs md:text-sm leading-none">+5.420</p>
                  <p className="text-amber-500 font-bold text-[8px] md:text-[10px] uppercase tracking-widest">inscritos</p>
                </div>
              </div>

              <img 
                src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/mockuo%20celular%2021d%20espanhol.jpg" 
                alt="21 Días de Propósito con Dios - Mockup Principal" 
                className="w-full h-auto rounded-[1rem] md:rounded-[1.5rem] max-w-[850px] block relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agitator Section */}
      <section className="py-16 md:py-24 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-slate-200 leading-relaxed font-medium">
            <p>Amas a Dios. Eres fiel en tu iglesia. Escuchas sobre prosperidad, provisión, cosecha…</p>
            <p className="text-white font-black text-xl md:text-3xl border-l-4 border-amber-500 pl-5 md:pl-6 text-left py-4 bg-amber-500/5 rounded-r-lg">
              Pero cuando abres la aplicación del banco, el saldo no confirma la Palabra.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle subtitle="La realidad de muchos cristianos hoy">¿Sientes que algo está bloqueado?</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
            {[
              { icon: <XCircle className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0" />, title: "Ciclo de Escasez", desc: "El dinero se acaba el día 15 y tus tarjetas están siempre al límite." },
              { icon: <Lock className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0" />, title: "Culpa Espiritual", desc: "Te sientes egoísta por querer una vida mejor o prosperar." },
              { icon: <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0 rotate-180" />, title: "Vergüenza y Miedo", desc: "El miedo a lo que piensen: '¿Será que hay algo mal con su fe?'" },
              { icon: <HandHelping className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0" />, title: "Oración Desesperada", desc: "Tu charla con Dios se volvió solo un pedido de auxilio financiero." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex gap-4 md:gap-6 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
                {item.icon}
                <div>
                  <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-3 text-white leading-tight">{item.title}</h3>
                  <p className="text-slate-200 text-sm md:text-xl leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-16 md:mt-20 max-w-4xl mx-auto px-2">
            <Quote className="absolute -top-6 -left-2 md:-top-10 md:-left-6 w-10 h-10 md:w-16 md:h-16 text-amber-500/20" />
            <p className="text-lg md:text-2xl text-slate-300 italic text-center leading-relaxed font-medium px-4 md:px-8 border-t border-b border-slate-800 py-8 md:py-10">
              "No es falta de fe. Es cansancio emocional y espiritual. Mientras ves a quienes no sirven a Dios prosperar, te preguntas: <span className="text-white font-bold">'Señor, ¿qué estoy haciendo mal?'</span>"
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="¿Y si el desbloqueio no comenzara en el banco… sino en el propósito?">¡La Solución para tu Vida Financiera!</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="md:w-1/2 relative w-full px-2">
               <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-50"></div>
               <div className="relative glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/30 shadow-2xl">
                 <img 
                  src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/ipad%20mockuop%2021d%20esp.jpg" 
                  alt="Contenido Interno de la Guía" 
                  className="rounded-xl md:rounded-2xl w-full h-auto object-contain"
                />
               </div>
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-lg md:text-2xl text-slate-200 mb-8 md:mb-10 leading-relaxed font-medium">
                Los 21 Días de Propósito con Dios para Desbloquear tu Vida Financiera fueron creados para cristianos que quieren salir de la escasez sin regatear con Dios.
              </p>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                {[
                  "Direccionamiento espiritual diario",
                  "Reflexión práctica y realineación de actitudes",
                  "Ruptura de creencias de escasez",
                  "Organización emocional y financiera",
                  "Lenguaje bíblico aplicable a la vida real"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4 text-slate-100 text-base md:text-xl font-bold leading-snug">
                    <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5 md:mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <a 
                href="#checkout" 
                className="gold-bg text-slate-950 font-black py-5 px-8 md:px-10 rounded-full text-lg md:text-2xl cta-glow transform hover:scale-105 active:scale-95 transition flex items-center justify-center gap-3 group w-full md:w-fit"
              >
                QUIERO COMENZAR MI JORNADA
                <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Carlos Section */}
      <section className="py-16 md:py-24 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
            <div className="md:w-1/2 w-full px-4">
              <div className="relative group">
                <div className="absolute -inset-4 md:-inset-6 bg-amber-500/10 blur-3xl rounded-full opacity-50"></div>
                <img 
                  src="https://i.postimg.cc/3wTfk6pT/pastor-carlos.jpg" 
                  alt="Pastor Carlos" 
                  className="relative rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-slate-800 w-full object-cover grayscale-[15%]"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left">
              <div className="inline-flex items-center gap-2 md:gap-3 bg-amber-500/15 text-amber-500 px-4 md:px-5 py-2 rounded-full text-xs md:text-base font-bold mb-6 md:mb-8">
                <UserCheck className="w-4 h-4 md:w-5 md:h-5" /> EL CREADOR DEL MÉTODO
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight">
                ¿Quién es el <br/><span className="gold-gradient">Pastor Carlos?</span>
              </h2>
              <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-slate-200 leading-relaxed font-medium">
                <p>
                  Con años de experiencia ministerial, el <span className="text-white font-black underline decoration-amber-500 underline-offset-4">Pastor Carlos</span> identificó un padrão: la lucha contra la escasez, incluso con la fidelidad.
                </p>
                <p>
                  Su misión es enseñar que la prosperidad bíblica trata sobre el propósito y la libertad para servir. Esta guía es el camino práctico para tu realineación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Showcase */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle subtitle="Todo lo que tendrás acceso inmediato al elegir el Plan Completo">La Experiencia Completa</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-16">
            <div className="flex flex-col h-full text-center group">
              <div className="glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 md:mb-8 group-hover:scale-105 transition duration-500">
                <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/mockuo%20celular%2021d%20espanhol.jpg" alt="Guía 21 Días" className="rounded-lg md:rounded-xl w-full h-auto" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 px-4">Guía 21 Días de Propósito</h3>
              <p className="text-slate-200 text-sm md:text-xl leading-relaxed font-medium px-6">Tu jornada diaria de alineación espiritual y financiera.</p>
            </div>

            <div className="flex flex-col h-full text-center group mt-8 md:mt-0">
              <div className="glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 md:mb-8 group-hover:scale-105 transition duration-500">
                <img src="https://i.postimg.cc/QMYYDRKj/mockup-devocional-tablet.png" alt="Devocional" className="rounded-lg md:rounded-xl w-full h-auto" />
              </div>
              <ValueBadge />
              <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 px-4">Devocional: Terapia con Dios</h3>
              <p className="text-slate-100 text-sm md:text-xl leading-relaxed italic font-medium px-6">"¡La Guía diaria para transformar tu vida con Dios! Cada día es una invitación íntima."</p>
            </div>

            <div className="flex flex-col h-full text-center group mt-8 md:mt-0">
              <div className="glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 md:mb-8 group-hover:scale-105 transition duration-500">
                <img src="https://i.postimg.cc/fRMCjYf7/mockup-bonus.jpg" alt="Pack Bônus" className="rounded-lg md:rounded-xl w-full h-auto" />
              </div>
              <ValueBadge />
              <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 px-4">Pack de Bonos VIP</h3>
              <div className="space-y-2 md:space-y-4 text-slate-200 text-sm md:text-xl leading-relaxed font-medium px-6">
                 <p><strong className="text-amber-400">Oración contra la escasez:</strong> ¡declarar provisión y abundancia!</p>
                 <p><strong className="text-amber-400">Checklist Financiero:</strong> ¡Planillas para organizar tu vida financiera!</p>
              </div>
            </div>
          </div>

          {/* PRICING SECTION */}
          <SectionTitle id="checkout">Elige tu plan</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-2">
            
            {/* PLAN BÁSICO */}
            <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-slate-800 flex flex-col h-full shadow-lg">
              <p className="text-slate-500 uppercase tracking-widest font-black text-xs md:text-sm mb-4 md:mb-6">Esencial</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter">Plan Básico</h3>
              <div className="flex items-end gap-2 md:gap-3 mb-8 md:mb-10">
                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">$ 5.90</span>
                <span className="text-slate-400 mb-1.5 md:mb-2 font-bold text-lg md:text-xl">Único</span>
              </div>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                <li className="flex items-start gap-3 md:gap-4 text-slate-100 text-base md:text-xl font-medium leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Guía Digital 21 Días
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-slate-100 text-base md:text-xl font-medium leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Acceso Vitalicio
                </li>
              </ul>
              <a href={CHECKOUT_BASIC_URL} className="w-full bg-slate-800 text-white font-black py-4 md:py-5 rounded-2xl text-lg md:text-2xl flex items-center justify-center gap-3 hover:bg-slate-700 active:scale-95 transition">
                QUIERO EL BÁSICO <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            {/* PLAN COMPLETO */}
            <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-4 border-amber-500/50 relative overflow-hidden flex flex-col h-full shadow-[0_0_80px_rgba(217,119,6,0.25)] md:scale-105 mt-6 md:mt-0">
              <div className="absolute top-0 right-0 gold-bg text-slate-950 px-8 py-2 rotate-45 translate-x-8 translate-y-6 font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl">RECOMENDADO</div>
              <p className="text-amber-500 uppercase tracking-widest font-black text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                <Crown className="w-4 h-4 md:w-5 md:h-5" /> Transformación Total
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter">Plan Completo</h3>
              <div className="flex items-end gap-2 md:gap-3 mb-8 md:mb-10">
                <span className="text-5xl md:text-7xl font-black gold-gradient tracking-tighter">$ 9.90</span>
                <span className="text-slate-400 mb-1.5 md:mb-2 font-bold text-lg md:text-xl">Único</span>
              </div>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Guia Digital 21 Dias
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-green-500 shrink-0 mt-0.5" /> 
                  Grupo VIP (AUDIOS DIARIOS)
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Devocional: Terapia con Dios
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Oración y Planillas Financieras
                </li>
              </ul>
              <a href={CHECKOUT_COMPLETE_URL} className="w-full gold-bg text-slate-950 font-black py-5 md:py-6 rounded-2xl text-xl md:text-3xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition shadow-2xl">
                QUIERO EL COMPLETO <ArrowRight className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <p className="mt-6 text-xs md:text-sm text-slate-400 flex items-center justify-center gap-2 uppercase font-black tracking-widest">
                <ShieldCheck className="w-5 h-5 text-green-500" /> Acceso Seguro e Inmediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee & FAQ */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden text-center flex flex-col items-center">
        <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-amber-500 mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(217,119,6,0.4)]" />
        <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 gold-gradient">7 Días de Garantía</h2>
        <p className="text-base md:text-2xl text-slate-200 mb-12 md:mb-20 max-w-3xl leading-relaxed font-medium px-4">
          Garantía Incondicional: Si por cualquier motivo sientes que esta guía no é para ti, solo pide el reembolso dentro de 7 días. Sin preguntas. Sin culpa.
        </p>
        
        <div className="w-full max-w-4xl text-left px-2">
          <FAQItem question="¿Qué incluye el Plan Completo?" answer="En el Plan Completo obtienes la Guía 21 Días + Devocional 'Terapia con Dios' + Grupo de WhatsApp con audios diarios del Pastor + Oración contra la escasez + Checklist de Alineación con planillas financieras + Bono de Inteligencia Emocional Bíblica." />
          <FAQItem question="¿Cómo funcionan las planillas financieras?" answer="Son herramientas prácticas para que puedas listar tus deudas, gastos e ingresos de forma simple bajo principios cristianos." />
          <FAQItem question="¿Los audios del Pastor Carlos son en vivo?" answer="Los audios se envían diariamente al grupo VIP de WhatsApp, con orientaciones, oraciones y palabras exclusivas para tu jornada." />
          <FAQItem question="¿Es esto demasiado religioso?" answer="No. Es espiritual, bíblico y aplicable a la vida real. El propósito es la transformación práctica y realineación con Dios." />
          <FAQItem question="¿Me haré rico en 21 días?" answer="No prometemos riqueza mágica. Prometemos desbloqueo, claridad y dirección espiritual para que salgas de la escasez y entres en el flujo de la provisión." />
        </div>
      </section>

      {/* Final CTA Footer */}
      <footer className="py-16 md:py-24 px-4 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2 gold-bg"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-12 uppercase leading-tight px-2">
            Deja de vivir en aprietos. <br/>
            <span className="gold-gradient">Comienza tu propósito hoy.</span>
          </h2>
          <p className="text-base md:text-2xl text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto font-medium px-4">
            Da el primer paso para desbloquear tu vida financiera con propósito. Tu futuro próspero comienza con la alineación con Dios.
          </p>
          
          <a href="#checkout" className="mx-auto gold-bg text-slate-950 font-black py-5 md:py-7 px-8 md:px-14 rounded-full text-lg md:text-3xl shadow-[0_0_40px_rgba(217,119,6,0.5)] hover:scale-105 active:scale-95 transition block w-full md:w-fit uppercase tracking-tight">
            QUIERO DESBLOQUEAR MI VIDA
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
