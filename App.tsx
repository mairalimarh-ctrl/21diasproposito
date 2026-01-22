
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

const CHECKOUT_BASIC_URL = "https://pay.kiwify.com.br/J7a1ih9";
const CHECKOUT_COMPLETE_URL = "https://pay.kiwify.com.br/0BhuSJD";

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
    <span className="line-through">R$ 49,90</span>
    <span className="text-white">HOJE: GRÁTIS</span>
  </div>
);

// --- Page Sections ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617] overflow-x-hidden">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass-card px-4 py-3 flex justify-between items-center md:hidden border-b border-amber-500/20">
        <span className="gold-gradient font-black text-sm uppercase tracking-tighter">21 Dias Propósito</span>
        <a href="#checkout" className="gold-bg text-slate-950 px-5 py-2 rounded-full text-xs font-black shadow-lg active:scale-95 transition">VER PLANOS</a>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl flex flex-col items-center text-center relative z-10">
          <div className="inline-block bg-slate-800/80 border border-amber-500/30 text-amber-400 px-4 md:px-5 py-2 rounded-full text-xs md:text-base font-bold mb-6 md:mb-8 animate-pulse uppercase tracking-wide">
            🔥 PARA CRISTÃOS QUE BUSCAM PROVISÃO
          </div>
          <h1 className="text-3xl md:text-7xl font-bold leading-tight mb-6 md:mb-8 max-w-5xl px-2">
            Você ora, jejua, é fiel… mas o dinheiro continua <span className="gold-gradient">acabando antes do fim do mês?</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-4xl leading-relaxed font-medium px-2">
            Descubra como viver 21 dias de propósito com Deus para romper o ciclo de escassez, parar de viver no aperto e destravar a provisão que já foi prometida — sem culpa por querer prosperar.
          </p>
          
          <div className="flex flex-col items-center gap-5 mb-16 w-full max-w-md md:max-w-none">
            <a 
              href="#checkout" 
              className="gold-bg text-slate-950 font-black py-5 px-8 md:px-10 rounded-full text-xl md:text-3xl cta-glow transform hover:scale-105 active:scale-95 transition duration-300 flex items-center justify-center gap-3 group w-full md:w-fit"
            >
              SIM! QUERO DESTRAVAR MINHA VIDA
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-amber-500 font-bold flex items-center gap-2 text-sm md:text-base px-4">
              <AlertCircle className="w-5 h-5 shrink-0" /> Um guia para quem está cansado de viver pela fé… mas no cheque especial.
            </p>
          </div>

          <div className="relative mt-8 w-full max-w-4xl mx-auto flex justify-center px-2">
            <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full"></div>
            
            <div className="relative glass-card rounded-[1.5rem] md:rounded-[2.5rem] p-2 md:p-8 border border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
              {/* Floating Badges - Optimized for Mobile */}
              <div className="absolute -left-2 md:-left-4 top-4 md:top-10 z-20 flex flex-col gap-2">
                <div className="glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-amber-500/40 shadow-xl backdrop-blur-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <p className="text-amber-400 font-black text-[10px] md:text-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" /> Guia Completo
                  </p>
                </div>
                <div className="glass-card px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-amber-500/40 shadow-xl backdrop-blur-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-tighter flex items-center gap-1.5">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-500 fill-amber-500" /> Acesso Vitalício
                  </p>
                </div>
              </div>

              {/* Social Proof Badge - Optimized for Mobile */}
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
                src="https://i.postimg.cc/7L6NjDcr/mockup-1.png" 
                alt="21 Dias de Propósito com Deus - Mockup Principal" 
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
            <p>Você ama a Deus. Você é fiel na igreja. Você ouve sobre prosperidade, provisão, colheita…</p>
            <p className="text-white font-black text-xl md:text-3xl border-l-4 border-amber-500 pl-5 md:pl-6 text-left py-4 bg-amber-500/5 rounded-r-lg">
              Mas quando abre o aplicativo do banco, o saldo não confirma a Palavra.
            </p>
          </div>
        </div>
      </section>

      {/* Video de Depoimento */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-2xl text-center">
          <SectionTitle subtitle="Veja o impacto deste propósito na vida de quem já aceitou o desafio">Veja o que Deus está fazendo</SectionTitle>
          <div className="glass-card p-1.5 md:p-4 rounded-[1.5rem] md:rounded-[2rem] border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.15)] overflow-hidden">
            <lite-video-player 
              video-id="766fe085-e515-4adf-b9b7-7b6a4217b618" 
              base-url="https://app.litevideo.net" 
              aspect-ratio="square"
              params="aspectRatio=square&coverColor=%23000f5c&progressSpeed=normal&progressBarHeight=8&showCover=true&coverStyle=gradient&playIconStyle=circle&playIconSize=large&showTitle=true&showControls=false&showProgressBar=true&iconColor=%23ffffff&iconBackgroundColor=%23ff0000&iconBackgroundOpacity=100&progressBarColor=%23ff0000&controlsStyle=default&controlsPosition=bottom&controlsColor=%23ffffff&controlsBackground=gradient&hoverEffect=fade&autoPlay=true&loop=false&liveSimulatorEnabled=false&liveSimulatorViewersMin=10&liveSimulatorViewersMax=50&liveSimulatorGrowthRate=moderate&domainLockEnabled=false&domainLockDomains=&showComments=false">
            </lite-video-player>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle subtitle="A realidade de muitos cristãos hoje">Você sente que algo está travado?</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
            {[
              { icon: <XCircle className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0" />, title: "Ciclo de Escassez", desc: "O dinheiro acaba no dia 15 e o cartão está sempre estourado." },
              { icon: <Lock className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0" />, title: "Culpa Espiritual", desc: "Você se sente egoísta por querer uma vida melhor ou prosperar." },
              { icon: <TrendingUp className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0 rotate-180" />, title: "Vergonha e Medo", desc: "O medo de que pensem: 'Será que tem algo errado com a fé dele?'" },
              { icon: <HandHelping className="w-10 h-10 md:w-14 md:h-14 text-red-500 shrink-0" />, title: "Oração Desesperada", desc: "Sua conversa com Deus virou apenas um pedido de socorro financeiro." }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex gap-4 md:gap-6 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
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
              "Não é falta de fé. É cansaço emocional e espiritual. Enquanto você vê quem não serve a Deus prosperando, você se pergunta: <span className="text-white font-bold">'Senhor, o que estou fazendo de errado?'</span>"
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="E se o desbloqueio não começasse no banco… mas no propósito?">A Solução para sua Vida Financeira!</SectionTitle>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <div className="md:w-1/2 relative w-full px-2">
               <div className="absolute -inset-4 bg-amber-500/20 blur-3xl rounded-full opacity-50"></div>
               <div className="relative glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/30 shadow-2xl">
                 <img 
                  src="https://i.postimg.cc/XYnLc9kZ/mockup-2.png" 
                  alt="Conteúdo Interno do Guia" 
                  className="rounded-xl md:rounded-2xl w-full h-auto object-contain"
                />
               </div>
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-lg md:text-2xl text-slate-200 mb-8 md:mb-10 leading-relaxed font-medium">
                O 21 Dias de Propósito com Deus para Desbloquear sua Vida Financeira foi criado para cristãos que querem sair da escassez sem barganhar com Deus.
              </p>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                {[
                  "Direcionamento espiritual diário",
                  "Reflexão prática e realinhamento de atitudes",
                  "Quebra de crenças de escassez",
                  "Organização emocional e financeira",
                  "Linguagem bíblica aplicável à vida real"
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
                QUERO COMEÇAR MINHA JORNADA
                <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é esse Guia? */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Identifique-se com o perfil certo">Para quem é esse Guia?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border-green-500/20 shadow-xl">
              <h3 className="text-xl md:text-3xl font-black text-green-500 mb-6 md:mb-8 flex items-center gap-3 uppercase tracking-tight">
                <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8" /> É PARA VOCÊ SE:
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {[
                  "Trabalha muito e continua apertado",
                  "Vive no limite do cartão e cheque especial",
                  "Sente vergonha de sua situação financeira",
                  "Quer prosperar sem culpa espiritual",
                  "Acredita na provisão, mas sente o fluxo travado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-200 text-sm md:text-xl font-medium leading-snug">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500/70 shrink-0 mt-0.5 md:mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border-red-500/20 shadow-xl">
              <h3 className="text-xl md:text-3xl font-black text-red-500 mb-6 md:mb-8 flex items-center gap-3 uppercase tracking-tight">
                <XCircle className="w-7 h-7 md:w-8 md:h-8" /> NÃO É PARA:
              </h3>
              <ul className="space-y-4 md:space-y-5">
                {[
                  "Quem busca milagre mágico sem ação",
                  "Quem quer enriquecer passando os outros para trás",
                  "Quem não está disposto a alinhar princípios",
                  "Pessoas que não valorizam princípios bíblicos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 text-slate-400 text-sm md:text-xl font-medium leading-snug">
                    <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500/70 shrink-0 mt-0.5 md:mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
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
                <UserCheck className="w-4 h-4 md:w-5 md:h-5" /> O CRIADOR DO MÉTODO
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-white leading-tight">
                Quem é o <br/><span className="gold-gradient">Pastor Carlos?</span>
              </h2>
              <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-slate-200 leading-relaxed font-medium">
                <p>
                  Com anos de experiência ministerial, o <span className="text-white font-black underline decoration-amber-500 underline-offset-4">Pastor Carlos</span> identificou um padrão: a luta contra a escassez, mesmo com a fidelidade.
                </p>
                <p>
                  Sua missão é ensinar que prosperidade bíblica é sobre propósito e liberdade para servir. Este guia é o caminho prático para o seu realinhamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que esperar após a jornada? */}
      <section className="py-16 md:py-24 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Transformação em 21 dias">O que esperar após a jornada?</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: "Fim da sabotagem", icon: <Lock className="w-8 h-8 md:w-10 md:h-10 text-amber-500" /> },
              { title: "Clareza de decisões", icon: <Target className="w-8 h-8 md:w-10 md:h-10 text-amber-500" /> },
              { title: "Paz com o saldo", icon: <Coins className="w-8 h-8 md:w-10 md:h-10 text-amber-500" /> },
              { title: "Confiança familiar", icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-amber-500" /> },
              { title: "Liberdade para ofertar", icon: <HandHelping className="w-8 h-8 md:w-10 md:h-10 text-amber-500" /> },
              { title: "Alívio emocional", icon: <Smile className="w-8 h-8 md:w-10 md:h-10 text-amber-500" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 md:p-8 rounded-xl md:rounded-[2rem] flex flex-col items-center text-center hover:bg-slate-800/40 transition group">
                <div className="mb-3 md:mb-6 transform group-hover:scale-110 transition duration-300">{item.icon}</div>
                <h4 className="text-sm md:text-2xl font-black text-white leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos / Prova Social */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Histórias reais de quem destravou a vida financeira">O que as pessoas estão dizendo</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Maria Silva", text: "Eu achava que prosperar era pecado. Depois dos 21 dias, entendi que é propósito. Minhas dívidas estão sendo pagas e tenho paz.", role: "54 anos, São Paulo" },
              { name: "João Pereira", text: "O grupo VIP com os áudios do Pastor foi o diferencial. Todo dia uma palavra que me levantava e me dava direção prática.", role: "61 anos, Curitiba" },
              { name: "Ana Santos", text: "O checklist financeiro me abriu os olhos. Consegui economizar o que eu nem sabia que estava jogando fora.", role: "48 anos, Salvador" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/10 hover:border-amber-500/40 transition group">
                <div className="flex gap-1 mb-3 md:mb-4 text-amber-500">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                </div>
                <p className="text-slate-200 text-base md:text-xl leading-relaxed mb-6 italic font-medium">"{item.text}"</p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 flex items-center justify-center font-black text-amber-500 border border-amber-500/30 shrink-0 text-sm md:text-base">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-black text-sm md:text-lg leading-tight">{item.name}</p>
                    <p className="text-slate-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Showcase */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle subtitle="Tudo o que você terá acesso imediato ao escolher o Plano Completo">A Experiência Completa</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10 md:mb-16">
            <div className="flex flex-col h-full text-center group">
              <div className="glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 md:mb-8 group-hover:scale-105 transition duration-500">
                <img src="https://i.postimg.cc/XYnLc9kZ/mockup-2.png" alt="Guia 21 Dias" className="rounded-lg md:rounded-xl w-full h-auto" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 px-4">Guia 21 Dias de Propósito</h3>
              <p className="text-slate-200 text-sm md:text-xl leading-relaxed font-medium px-6">Sua jornada diária de alinhamento espiritual e financeiro.</p>
            </div>

            <div className="flex flex-col h-full text-center group mt-8 md:mt-0">
              <div className="glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 md:mb-8 group-hover:scale-105 transition duration-500">
                <img src="https://i.postimg.cc/QMYYDRKj/mockup-devocional-tablet.png" alt="Devocional" className="rounded-lg md:rounded-xl w-full h-auto" />
              </div>
              <ValueBadge />
              <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 px-4">Devocional: Terapia com Deus</h3>
              <p className="text-slate-100 text-sm md:text-xl leading-relaxed italic font-medium px-6">"O Guia diário para transformar a sua vida com Deus! Cada Dia é um convite para uma conversa íntima."</p>
            </div>

            <div className="flex flex-col h-full text-center group mt-8 md:mt-0">
              <div className="glass-card p-2 md:p-4 rounded-[1.5rem] md:rounded-[2.5rem] border-amber-500/20 shadow-xl overflow-hidden mb-6 md:mb-8 group-hover:scale-105 transition duration-500">
                <img src="https://i.postimg.cc/fRMCjYf7/mockup-bonus.jpg" alt="Pack Bônus" className="rounded-lg md:rounded-xl w-full h-auto" />
              </div>
              <ValueBadge />
              <h3 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 px-4">Pack de Bônus VIP</h3>
              <div className="space-y-2 md:space-y-4 text-slate-200 text-sm md:text-xl leading-relaxed font-medium px-6">
                 <p><strong className="text-amber-400">Oração contra escassez:</strong> declarar provisão e abundancia!</p>
                 <p><strong className="text-amber-400">Checklist Financeiro:</strong> Planilhas para organizar a vida financeira!</p>
              </div>
            </div>
          </div>

          {/* WhatsApp and Emotional Bonuses */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
             <div className="glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border-l-8 border-l-green-500 flex flex-col justify-between hover:bg-slate-800/40 transition">
                <div>
                  <ValueBadge />
                  <h3 className="text-lg md:text-3xl font-black flex items-center gap-3 md:gap-4 mb-3 md:mb-4 text-white uppercase tracking-tight">
                    <MessageCircle className="text-green-500 shrink-0 w-6 h-6 md:w-8 md:h-8" /> Grupo VIP de WhatsApp
                  </h3>
                  <p className="text-slate-100 text-sm md:text-xl leading-relaxed font-medium">Receba ÁUDIOS e DICAS diárias diretamente do Pastor Carlos para te guiar no propósito.</p>
                </div>
             </div>
             <div className="glass-card p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border-l-8 border-l-amber-500 flex flex-col justify-between hover:bg-slate-800/40 transition">
                <div>
                  <ValueBadge />
                  <h3 className="text-lg md:text-3xl font-black flex items-center gap-3 md:gap-4 mb-3 md:mb-4 text-white uppercase tracking-tight">
                    <Heart className="text-amber-500 shrink-0 w-6 h-6 md:w-8 md:h-8" /> Inteligência Emocional
                  </h3>
                  <p className="text-slate-100 text-sm md:text-xl leading-relaxed font-medium">Entenda como suas emoções afetam seu bolso e como curar essa raiz com a Palavra.</p>
                </div>
             </div>
          </div>

          {/* PRICING SECTION */}
          <SectionTitle id="checkout">Escolha o seu plano</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto px-2">
            
            {/* PLANO BÁSICO */}
            <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-slate-800 flex flex-col h-full shadow-lg">
              <p className="text-slate-500 uppercase tracking-widest font-black text-xs md:text-sm mb-4 md:mb-6">Essencial</p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter">Plano Básico</h3>
              <div className="flex items-end gap-2 md:gap-3 mb-8 md:mb-10">
                <span className="text-5xl md:text-7xl font-black text-white tracking-tighter">R$ 17,90</span>
                <span className="text-slate-400 mb-1.5 md:mb-2 font-bold text-lg md:text-xl">Único</span>
              </div>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                <li className="flex items-start gap-3 md:gap-4 text-slate-100 text-base md:text-xl font-medium leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Guia Digital 21 Dias
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-slate-100 text-base md:text-xl font-medium leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Acesso Vitalício
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-slate-500 text-base md:text-lg font-bold line-through opacity-30">
                  <XCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-700 shrink-0 mt-0.5" /> 
                  Grupo VIP WhatsApp
                </li>
              </ul>
              <a href={CHECKOUT_BASIC_URL} className="w-full bg-slate-800 text-white font-black py-4 md:py-5 rounded-2xl text-lg md:text-2xl flex items-center justify-center gap-3 hover:bg-slate-700 active:scale-95 transition">
                QUERO O BÁSICO <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            {/* PLANO COMPLETO */}
            <div className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-4 border-amber-500/50 relative overflow-hidden flex flex-col h-full shadow-[0_0_80px_rgba(217,119,6,0.25)] md:scale-105 mt-6 md:mt-0">
              <div className="absolute top-0 right-0 gold-bg text-slate-950 px-8 py-2 rotate-45 translate-x-8 translate-y-6 font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl">RECOMENDADO</div>
              <p className="text-amber-500 uppercase tracking-widest font-black text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                <Crown className="w-4 h-4 md:w-5 md:h-5" /> Transformação Total
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter">Plano Completo</h3>
              <div className="flex items-end gap-2 md:gap-3 mb-8 md:mb-10">
                <span className="text-5xl md:text-7xl font-black gold-gradient tracking-tighter">R$ 27,00</span>
                <span className="text-slate-400 mb-1.5 md:mb-2 font-bold text-lg md:text-xl">Único</span>
              </div>
              <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 flex-grow">
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Guia Digital 21 Dias
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-green-500 shrink-0 mt-0.5" /> 
                  Grupo VIP (ÁUDIOS DIÁRIOS)
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Devocional: Terapia com Deus
                </li>
                <li className="flex items-start gap-3 md:gap-4 text-white text-base md:text-xl font-black leading-tight">
                  <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7 text-amber-500 shrink-0 mt-0.5" /> 
                  Oração e Planilhas Financeiras
                </li>
              </ul>
              <a href={CHECKOUT_COMPLETE_URL} className="w-full gold-bg text-slate-950 font-black py-5 md:py-6 rounded-2xl text-xl md:text-3xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition shadow-2xl">
                QUERO O COMPLETO <ArrowRight className="w-7 h-7 md:w-8 md:h-8" />
              </a>
              <p className="mt-6 text-xs md:text-sm text-slate-400 flex items-center justify-center gap-2 uppercase font-black tracking-widest">
                <ShieldCheck className="w-5 h-5 text-green-500" /> Acesso Seguro e Imediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee & FAQ */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden text-center flex flex-col items-center">
        <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-amber-500 mb-6 md:mb-8 drop-shadow-[0_0_20px_rgba(217,119,6,0.4)]" />
        <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 gold-gradient">7 Dias de Garantia</h2>
        <p className="text-base md:text-2xl text-slate-200 mb-12 md:mb-20 max-w-3xl leading-relaxed font-medium px-4">
          Garantia Incondicional: Se por qualquer motivo você sentir que esse guia não é para você, basta pedir o reembolso dentro de 7 dias. Sem perguntas. Sem constrangimento. Sem culpa.
        </p>
        
        <div className="w-full max-w-4xl text-left px-2">
          <FAQItem question="O que vem no Plano Completo?" answer="No Plano Completo você leva o Guia 21 Dias + Devocional 'Terapia com Deus' + Grupo de WhatsApp com áudios diários do Pastor + Oração contra escassez + Checklist de Alinhamento com planilhas financeiras + Bônus de Inteligência Emocional Bíblica." />
          <FAQItem question="Como funcionam as planilhas financeiras?" answer="São ferramentas práticas incluídas no Checklist de Alinhamento para você listar suas dívidas, gastos e entradas de forma simples e direta sob princípios cristãos." />
          <FAQItem question="Os áudios do Pastor Carlos são ao vivo?" answer="Os áudios são enviados diariamente no grupo VIP de WhatsApp, trazendo orientações, orações e palavras de ânimo exclusivas para quem está na jornada." />
          <FAQItem question="Isso é religioso demais?" answer="Não. É espiritual, bíblico e aplicável à vida real. O propósito é focado em transformação prática e realinhamento da sua vida com Deus." />
          <FAQItem question="Vou ficar rico em 21 dias?" answer="Não prometemos riqueza mágica. Prometemos desbloqueio, clareza e direção espiritual para que você saia da escassez e entre no fluxo da provisão prometida." />
          <FAQItem question="Preciso ser um cristão perfeito?" answer="Não. Precisa apenas estar disposto a se alinhar e seguir os princípios de mordomia e propósito ensinados no guia." />
          <FAQItem question="Funciona mesmo estando endividado?" answer="Principalmente para quem está endividado. O guia traz a clareza emocional e a direção espiritual necessária para começar a sair do buraco financeiro." />
        </div>
      </section>

      {/* Final CTA Footer */}
      <footer className="py-16 md:py-24 px-4 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2 gold-bg"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-7xl font-black mb-8 md:mb-12 uppercase leading-tight px-2">
            Pare de viver no aperto. <br/>
            <span className="gold-gradient">Comece seu propósito hoje.</span>
          </h2>
          <p className="text-base md:text-2xl text-slate-300 mb-10 md:mb-12 max-w-3xl mx-auto font-medium px-4">
            Dê o primeiro passo para destravar sua vida financeira com propósito. O seu futuro próspero começa no alinhamento com Deus.
          </p>
          
          <a href="#checkout" className="mx-auto gold-bg text-slate-950 font-black py-5 md:py-7 px-8 md:px-14 rounded-full text-lg md:text-3xl shadow-[0_0_40px_rgba(217,119,6,0.5)] hover:scale-105 active:scale-95 transition block w-full md:w-fit uppercase tracking-tight">
            QUERO DESTRAVAR MINHA VIDA
          </a>
          
          <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 opacity-40 grayscale hover:opacity-100 transition duration-500">
            <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-5.png" alt="Visa" className="h-4 md:h-6 brightness-0 invert" />
            <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" className="h-4 md:h-6 brightness-0 invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" alt="Pix" className="h-4 md:h-6 brightness-0 invert" />
          </div>

          <div className="border-t border-slate-900 mt-16 md:mt-24 pt-12 md:pt-16 text-slate-500 text-[10px] md:text-sm font-bold max-w-4xl mx-auto space-y-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
              <p className="uppercase tracking-[0.1em] md:tracking-[0.2em] font-black leading-tight">21 Dias de Propósito - Vida Financeira Desbloqueada</p>
              <div className="flex gap-6 md:gap-8 uppercase tracking-widest text-[10px] md:text-xs font-black">
                <a href="#" className="hover:text-amber-500 transition">Termos</a>
                <a href="#" className="hover:text-amber-500 transition">Privacidade</a>
              </div>
            </div>
            <p className="text-[10px] opacity-60 font-medium">
              © 2024. Todos os direitos reservados. Este site não é afiliado ao Facebook ou Google.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
