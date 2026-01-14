
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ShieldCheck, 
  ArrowRight, 
  Cross, 
  Lock, 
  TrendingUp, 
  HandHelping,
  Star,
  Zap,
  BookOpen,
  CalendarDays,
  UserCheck,
  MessageCircle,
  Heart,
  Crown
} from 'lucide-react';

// --- Helper Components ---

const CHECKOUT_BASIC_URL = "https://pay.lowify.com.br/go.php?offer=ifakq9j";
const CHECKOUT_COMPLETE_URL = "https://pay.lowify.com.br/checkout.php?product_id=5ho0Or";

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean; id?: string }> = ({ children, subtitle, light, id }) => (
  <div className="text-center mb-12 px-4" id={id}>
    <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'gold-gradient'}`}>
      {children}
    </h2>
    {subtitle && <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-amber-400 transition"
      >
        <span className="text-lg md:text-xl font-bold">{question}</span>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="pb-6 text-slate-300 text-base md:text-lg leading-relaxed animate-fade-in">{answer}</p>}
    </div>
  );
};

const ValueBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-2 py-0.5 rounded text-xs md:text-sm font-bold border border-red-600/30 mb-2">
    <span className="line-through">R$ 49,90</span>
    <span className="text-white">HOJE: GRÁTIS</span>
  </div>
);

// --- Page Sections ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass-card px-4 py-3 flex justify-between items-center md:hidden">
        <span className="gold-gradient font-bold text-base leading-tight uppercase">21 Dias Propósito</span>
        <a href="#checkout" className="gold-bg text-slate-950 px-4 py-1.5 rounded-full text-xs font-black shadow-lg">VER PLANOS</a>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl flex flex-col items-center text-center relative z-10">
          <div className="inline-block bg-slate-800/80 border border-amber-500/30 text-amber-400 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse uppercase tracking-wide">
            🔥 PARA CRISTÃOS QUE BUSCAM PROVISÃO
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 max-w-4xl">
            Você ora, jejua, é fiel… mas o dinheiro continua <span className="gold-gradient">acabando antes do fim do mês?</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl leading-relaxed font-medium">
            Descubra como viver 21 dias de propósito com Deus para romper o ciclo de escassez e destravar a provisão que já foi prometida.
          </p>
          
          <a 
            href="#checkout" 
            className="gold-bg text-slate-950 font-black py-4 px-10 rounded-full text-xl md:text-2xl cta-glow transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2 group mb-16"
          >
            SIM! QUERO DESTRAVAR MINHA VIDA
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="relative mt-8 w-full max-w-4xl mx-auto flex justify-center">
            <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full"></div>
            <div className="relative glass-card rounded-[2rem] p-2 md:p-6 border border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
              <img 
                src="https://i.postimg.cc/7L6NjDcr/mockup-1.png" 
                alt="21 Dias de Propósito com Deus - Mockup Principal" 
                className="w-full h-auto rounded-[1.5rem] max-w-[800px] block"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-xl border border-amber-500/20 p-4 rounded-xl hidden md:flex items-center gap-8 shadow-2xl min-w-[500px]">
                <div className="flex items-center gap-4">
                  <BookOpen className="text-amber-500 w-8 h-8" />
                  <div className="text-left">
                    <p className="text-white font-black text-lg leading-tight">Guia Digital Completo</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Acesso Vitalício</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-700"></div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-amber-400 text-base font-black">+5.420 inscritos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-slate-900/50 py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle subtitle="A realidade de muitos cristãos hoje">Você sente que algo está travado?</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl flex gap-5 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <XCircle className="w-12 h-12 text-red-500 shrink-0" />
              <div>
                <h3 className="text-xl font-black mb-2 text-white">Ciclo de Escassez</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">O dinheiro acaba no dia 15 e o cartão está sempre estourado.</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex gap-5 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <Lock className="w-12 h-12 text-red-500 shrink-0" />
              <div>
                <h3 className="text-xl font-black mb-2 text-white">Culpa Espiritual</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">Você se sente egoísta por querer uma vida melhor ou prosperar.</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex gap-5 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <TrendingUp className="w-12 h-12 text-red-500 shrink-0 rotate-180" />
              <div>
                <h3 className="text-xl font-black mb-2 text-white">Vergonha e Medo</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">O medo de que pensem: "Será que tem algo errado com a fé dele?"</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex gap-5 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <HandHelping className="w-12 h-12 text-red-500 shrink-0" />
              <div>
                <h3 className="text-xl font-black mb-2 text-white">Oração Desesperada</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">Sua conversa com Deus virou apenas um pedido de socorro financeiro.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-8 rounded-r-2xl italic text-xl md:text-2xl text-slate-200 leading-relaxed shadow-xl font-medium text-center">
            "Não é falta de fé. É cansaço emocional e espiritual. Enquanto você vê quem não serve a Deus prosperando, você se pergunta: 'Senhor, o que estou fazendo de errado?'"
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-4 bg-slate-900/30 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle subtitle="Milhares de vidas já foram tocadas e transformadas através deste propósito">
            Vidas Transformadas
          </SectionTitle>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="glass-card p-6 rounded-2xl border-amber-500/10">
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-200 italic mb-4 leading-relaxed font-medium">
                  "Eu não acreditava que em apenas 21 dias minha visão sobre dinheiro mudaria tanto. Hoje durmo em paz, sabendo que Deus é meu provedor."
                </p>
                <p className="font-black text-amber-400 text-base uppercase tracking-wider">— Maria S., Aluna do Propósito</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-amber-500/10">
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-200 italic mb-4 leading-relaxed font-medium">
                  "O Pastor Carlos traz uma palavra que confronta e liberta ao mesmo tempo. Minha família toda foi abençoada."
                </p>
                <p className="font-black text-amber-400 text-base uppercase tracking-wider">— João P., Empresário</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] glass-card p-3 rounded-[2rem] border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.1)]">
                {/* @ts-ignore - LiteVideo Custom Element */}
                <lite-video-player 
                  video-id="766fe085-e515-4adf-b9b7-7b6a4217b618" 
                  aspect-ratio="square" 
                  base-url="https://app.litevideo.net" 
                  params="aspectRatio=square&coverColor=%23000f5c&progressSpeed=normal&progressBarHeight=8&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=large&showTitle=false&showControls=false&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=100&progressBarColor=%23ff0000&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false"
                ></lite-video-player>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VITRINE VISUAL DE BÔNUS E GUIAS */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle subtitle="Tudo o que você terá acesso imediato ao escolher o Plano Completo">A Experiência Completa</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* ITEM 1: GUIA 21 DIAS */}
            <div className="group flex flex-col h-full">
              <div className="relative glass-card p-4 rounded-[2rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 group-hover:scale-[1.02] transition duration-500">
                <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase z-10">Produto Base</div>
                <img 
                  src="https://i.postimg.cc/XYnLc9kZ/mockup-2.png" 
                  alt="Guia 21 Dias de Propósito" 
                  className="relative rounded-xl w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white text-center mb-3">Guia 21 Dias de Propósito</h3>
              <p className="text-slate-300 text-base md:text-lg text-center px-4 leading-relaxed font-medium">Sua jornada diária de alinhamento espiritual e financeiro com direcionamento claro.</p>
            </div>

            {/* ITEM 2: DEVOCIONAL TERAPIA */}
            <div className="group flex flex-col h-full">
              <div className="relative glass-card p-4 rounded-[2rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 group-hover:scale-[1.02] transition duration-500">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase z-10">Bônus Especial</div>
                <img 
                  src="https://devocional-terapia-com-deus.vercel.app/images/devocional-tablet.jpg" 
                  alt="Devocional Terapia com Deus" 
                  className="relative rounded-xl w-full h-auto object-contain"
                />
              </div>
              <div className="text-center px-4">
                <ValueBadge />
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">Devocional: Terapia com Deus</h3>
                <p className="text-slate-200 text-base leading-relaxed italic font-medium">
                  "O Guia diário para transformar a sua vida com Deus! Cada Dia é um convite para uma conversa íntima e inspiradora com ELE."
                </p>
              </div>
            </div>

            {/* ITEM 3: PACK DE BÔNUS VIP */}
            <div className="group flex flex-col h-full">
              <div className="relative glass-card p-4 rounded-[2rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 group-hover:scale-[1.02] transition duration-500">
                <div className="absolute top-4 left-4 bg-green-500 text-slate-950 px-3 py-1 rounded-full text-[10px] font-black uppercase z-10">Pack Premium</div>
                <img 
                  src="https://i.postimg.cc/fRMCjYf7/mockup-bonus.jpg" 
                  alt="Bônus VIP e Checklist" 
                  className="relative rounded-xl w-full h-auto object-contain shadow-2xl"
                />
              </div>
              <div className="text-center px-4">
                <ValueBadge />
                <h3 className="text-xl md:text-2xl font-black text-white mb-3">Pack de Bônus VIP</h3>
                <div className="space-y-3 text-slate-300 text-base leading-relaxed font-medium">
                   <p><strong className="text-amber-400">Oração contra escassez:</strong> como declarar provisão na sua vida!</p>
                   <p><strong className="text-amber-400">Checklist Financeiro:</strong> Planilhas práticas para organizar suas contas!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
             <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-green-500 hover:bg-slate-800/40 transition-all flex flex-col justify-between">
                <div>
                  <ValueBadge />
                  <h3 className="text-xl md:text-2xl font-black flex items-center gap-3 mb-3 text-white">
                    <MessageCircle className="text-green-500 shrink-0 w-7 h-7" /> Grupo VIP de WhatsApp
                  </h3>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium">Receba ÁUDIOS e DICAS diárias diretamente do Pastor Carlos para te guiar no propósito.</p>
                </div>
             </div>
             <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-amber-500 hover:bg-slate-800/40 transition-all flex flex-col justify-between">
                <div>
                  <ValueBadge />
                  <h3 className="text-xl md:text-2xl font-black flex items-center gap-3 mb-3 text-white">
                    <Heart className="text-amber-500 shrink-0 w-7 h-7" /> Inteligência Emocional Bíblica
                  </h3>
                  <p className="text-slate-200 text-lg leading-relaxed font-medium">Entenda como suas emoções afetam seu bolso e como curar essa raiz com a Palavra.</p>
                </div>
             </div>
          </div>

          {/* PRICING SECTION */}
          <SectionTitle id="checkout" subtitle="Invista no seu alinhamento com Deus e desbloqueie o que já é seu">Escolha o seu plano</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* PLANO BÁSICO */}
            <div className="glass-card p-8 rounded-[2.5rem] border-slate-800 hover:border-slate-700 transition relative flex flex-col h-full shadow-lg">
              <p className="text-slate-500 uppercase tracking-widest font-black text-xs mb-4">Essencial</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter">Plano Básico</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">R$ 17,90</span>
                <span className="text-slate-500 mb-1 font-bold">Único</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-slate-200 text-lg font-medium leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  Guia Digital 21 Dias de Propósito
                </li>
                <li className="flex items-start gap-3 text-slate-200 text-lg font-medium leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  Acesso Vitalício ao Guia
                </li>
                <li className="flex items-start gap-3 text-slate-500 text-base font-bold line-through opacity-30">
                  <XCircle className="w-6 h-6 text-slate-700 shrink-0" />
                  Grupo VIP WhatsApp (Áudios)
                </li>
                <li className="flex items-start gap-3 text-slate-500 text-base font-bold line-through opacity-30">
                  <XCircle className="w-6 h-6 text-slate-700 shrink-0" />
                  Devocional: Terapia com Deus
                </li>
              </ul>
              
              <a 
                href={CHECKOUT_BASIC_URL} 
                className="w-full bg-slate-800 text-white font-black py-4 rounded-xl text-lg hover:bg-slate-700 transition flex items-center justify-center gap-2"
              >
                QUERO O BÁSICO
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* PLANO COMPLETO */}
            <div className="glass-card p-8 rounded-[2.5rem] border-2 border-amber-500/50 relative overflow-hidden flex flex-col h-full shadow-[0_0_50px_rgba(217,119,6,0.15)] md:scale-105">
              <div className="absolute top-0 right-0 gold-bg text-slate-950 px-8 py-1 rotate-45 translate-x-6 translate-y-4 font-black text-[10px] uppercase tracking-widest shadow-xl">
                 RECOMENDADO
              </div>
              <p className="text-amber-500 uppercase tracking-widest font-black text-xs mb-4 flex items-center gap-2">
                <Crown className="w-3 h-3" /> Transformação Total
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter">Plano Completo</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-black gold-gradient tracking-tighter">R$ 27,00</span>
                <span className="text-slate-500 mb-1 font-bold">Único</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-white text-lg font-black leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  Guia Digital 21 Dias de Propósito
                </li>
                <li className="flex items-start gap-3 text-white text-lg font-black leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  Grupo VIP WhatsApp (ÁUDIOS DIÁRIOS)
                </li>
                <li className="flex items-start gap-3 text-white text-lg font-black leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  Devocional: Terapia com Deus (GRÁTIS)
                </li>
                <li className="flex items-start gap-3 text-white text-lg font-black leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  Oração e Planilhas Financeiras (GRÁTIS)
                </li>
                <li className="flex items-start gap-3 text-white text-lg font-black leading-tight">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                  Bônus: Inteligência Emocional Bíblica
                </li>
              </ul>
              
              <a 
                href={CHECKOUT_COMPLETE_URL} 
                className="w-full gold-bg text-slate-950 font-black py-5 rounded-xl text-xl hover:scale-105 transition shadow-[0_0_30px_rgba(217,119,6,0.3)] flex items-center justify-center gap-2"
              >
                QUERO O COMPLETO
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-1 uppercase font-black tracking-widest">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Acesso Seguro e Imediato
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Guarantee & FAQ */}
      <section className="py-24 px-4 relative overflow-hidden text-center flex flex-col items-center">
        <ShieldCheck className="w-20 h-20 text-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(217,119,6,0.3)]" />
        <h2 className="text-3xl md:text-5xl font-black mb-6 gold-gradient">7 Dias de Garantia</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-16 max-w-2xl leading-relaxed font-medium">
          Sua satisfação ou seu dinheiro de volta. Devolvemos 100% do seu investimento se não estiver satisfeito.
        </p>
        
        <div className="w-full max-w-3xl text-left">
          <FAQItem 
            question="O que vem no Plano Completo?" 
            answer="No Plano Completo você leva o Guia 21 Dias + Devocional 'Terapia com Deus' + Grupo de WhatsApp com áudios diários do Pastor + Oração contra escassez + Checklist de Alinhamento com planilhas financeiras + Bônus de Inteligência Emocional." 
          />
          <FAQItem 
            question="Como funcionam as planilhas financeiras?" 
            answer="São ferramentas práticas incluídas no Checklist de Alinhamento para você listar suas dívidas, gastos e entradas de forma simples e direta sob princípios cristãos." 
          />
          <FAQItem 
            question="Os áudios do Pastor Carlos são ao vivo?" 
            answer="Os áudios são enviados diariamente no grupo VIP de WhatsApp, trazendo orientações e palavras de ânimo exclusivas. Você pode ouvir a qualquer momento." 
          />
        </div>
      </section>

      {/* Final CTA Footer */}
      <footer className="py-24 px-4 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 gold-bg"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-10 uppercase leading-tight">A sua nova história <br/><span className="gold-gradient">começa agora.</span></h2>
          <a 
            href="#checkout" 
            className="mx-auto gold-bg text-slate-950 font-black py-6 px-12 rounded-full text-2xl shadow-[0_0_30px_rgba(217,119,6,0.4)] hover:scale-105 transition block w-fit"
          >
            QUERO COMEÇAR AGORA
          </a>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-5.png" alt="Visa" className="h-4 brightness-0 invert" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" className="h-4 brightness-0 invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" alt="Pix" className="h-4 brightness-0 invert" />
          </div>

          <div className="border-t border-slate-900 mt-20 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-[10px] uppercase font-bold tracking-widest">
            <p>&copy; 2024 - 21 DIAS DE PROPÓSITO FINANCEIRO. TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-amber-500 transition-colors">Termos</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
