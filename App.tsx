
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
  UserCheck
} from 'lucide-react';

// --- Helper Components ---

const CHECKOUT_URL = "https://pay.lowify.com.br/checkout.php?product_id=5ho0Or";

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string; light?: boolean }> = ({ children, subtitle, light }) => (
  <div className="text-center mb-12 px-4">
    <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'gold-gradient'}`}>
      {children}
    </h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const CTAButton: React.FC<{ children: React.ReactNode; className?: string; href?: string }> = ({ children, className, href = CHECKOUT_URL }) => (
  <a 
    href={href} 
    className={`gold-bg text-slate-950 font-bold py-4 px-8 rounded-full text-xl cta-glow transform hover:scale-105 transition duration-300 flex items-center justify-center gap-2 group ${className}`}
  >
    {children}
    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
  </a>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-amber-400 transition"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="pb-6 text-slate-400 leading-relaxed animate-fade-in">{answer}</p>}
    </div>
  );
};

// --- Page Sections ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 glass-card px-4 py-3 flex justify-between items-center md:hidden">
        <span className="gold-gradient font-bold text-sm leading-tight uppercase">21 Dias Propósito</span>
        <a href={CHECKOUT_URL} className="gold-bg text-slate-950 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">QUERO ME INSCREVER</a>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none"></div>
        
        <div className="container mx-auto max-w-6xl flex flex-col items-center text-center relative z-10">
          <div className="inline-block bg-slate-800/80 border border-amber-500/30 text-amber-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔥 PARA CRISTÃOS QUE BUSCAM PROVISÃO
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 max-w-4xl">
            Você ora, jejua, é fiel… mas o dinheiro continua <span className="gold-gradient">acabando antes do fim do mês?</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
            Descubra como viver 21 dias de propósito com Deus para romper o ciclo de escassez e destravar a provisão que já foi prometida.
          </p>
          
          <CTAButton className="mb-16">
            SIM! QUERO DESTRAVAR MINHA VIDA
          </CTAButton>

          <div className="relative mt-8 w-full max-w-4xl mx-auto flex justify-center">
            <div className="absolute -inset-10 bg-amber-500/10 blur-[100px] rounded-full"></div>
            <div className="relative glass-card rounded-3xl p-2 md:p-6 border border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
              <img 
                src="https://i.postimg.cc/7L6NjDcr/mockup-1.png" 
                alt="21 Dias de Propósito com Deus - Mockup Principal" 
                className="w-full h-auto rounded-2xl max-w-[800px] block"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md border border-amber-500/20 p-4 rounded-xl hidden md:flex items-center gap-8 shadow-2xl">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-amber-500 w-8 h-8" />
                  <div className="text-left">
                    <p className="text-white font-bold leading-tight">Guia Digital Completo</p>
                    <p className="text-slate-400 text-xs">Acesso imediato e vitalício</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-700"></div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-amber-400 text-xs font-bold">+5.420 inscritos</p>
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
            <div className="glass-card p-6 rounded-2xl flex gap-4 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <XCircle className="w-12 h-12 text-red-500 shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Ciclo de Escassez</h3>
                <p className="text-slate-400">O dinheiro acaba no dia 15 e o cartão está sempre estourado.</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex gap-4 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <Lock className="w-12 h-12 text-red-500 shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Culpa Espiritual</h3>
                <p className="text-slate-400">Você se sente egoísta por querer uma vida melhor ou prosperar.</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex gap-4 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <TrendingUp className="w-12 h-12 text-red-500 shrink-0 rotate-180" />
              <div>
                <h3 className="text-lg font-bold mb-2">Vergonha e Medo</h3>
                <p className="text-slate-400">O medo de que pensem: "Será que tem algo errado com a fé dele?"</p>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl flex gap-4 border-l-4 border-l-red-500/50 hover:bg-slate-800/40 transition">
              <HandHelping className="w-12 h-12 text-red-500 shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Oração Desesperada</h3>
                <p className="text-slate-400">Sua conversa com Deus virou apenas um pedido de socorro financeiro.</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 border-l-4 border-amber-500 p-8 rounded-r-2xl italic text-lg text-slate-300 leading-relaxed shadow-lg">
            "Não é falta de fé. É cansaço emocional e espiritual. Enquanto você vê quem não serve a Deus prosperando, você se pergunta: 'Senhor, o que estou fazendo de errado?'"
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
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
                <p className="text-lg text-slate-200 italic mb-4">
                  "Eu não acreditava que em apenas 21 dias minha visão sobre dinheiro mudaria tanto. Hoje durmo em paz, sabendo que Deus é meu provedor e que as amarras da escassez foram quebradas."
                </p>
                <p className="font-bold text-amber-400">— Maria S., Aluna do Propósito</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-amber-500/10">
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg text-slate-200 italic mb-4">
                  "O Pastor Carlos traz uma palavra que confronta e liberta ao mesmo tempo. Minha família toda foi abençoada."
                </p>
                <p className="font-bold text-amber-400">— João P., Empresário</p>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="relative w-full max-w-[450px] glass-card p-3 rounded-[2rem] border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.1)]">
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

      {/* The Solution */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
               <div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-full"></div>
               <div className="relative glass-card p-4 rounded-3xl border-amber-500/20 shadow-2xl overflow-hidden">
                 <img 
                  src="https://i.postimg.cc/XYnLc9kZ/mockup-2.png" 
                  alt="Conteúdo Interno do Guia" 
                  className="relative rounded-2xl w-full h-auto object-contain"
                />
               </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                E se o desbloqueio não começasse no banco… <span className="gold-gradient">mas no propósito?</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                O 21 Dias de Propósito com Deus foi criado para cristãos que cansaram de viver no aperto e precisam alinhar fé, mentalidade e decisões práticas.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Direcionamento espiritual diário",
                  "Quebra de crenças de escassez",
                  "Reflexão prática e realinhamento",
                  "Organização emocional e financeira",
                  "Linguagem bíblica aplicável à vida real"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton>COMEÇAR MEU DESBLOQUEIO AGORA</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section (Pastor Carlos) */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src="https://i.postimg.cc/3wTfk6pT/pastor-carlos.jpg" 
                  alt="Pastor Carlos - Criador do Propósito" 
                  className="relative rounded-[3rem] shadow-2xl border-4 border-slate-800 w-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-1 rounded-full text-sm font-bold mb-6">
                <UserCheck className="w-4 h-4" /> O CRIADOR DO MÉTODO
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Quem é o <span className="gold-gradient">Pastor Carlos?</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Com anos de experiência ministerial e aconselhamento, o <span className="text-white font-semibold">Pastor Carlos</span> identificou um padrão comum em muitos lares cristãos: a luta constante contra a escassez, mesmo com a prática da fidelidade e da oração.
                </p>
                <p>
                  Sua missão é ensinar que a prosperidade bíblica não é sobre ganância, mas sobre <span className="text-white font-semibold">propósito e liberdade para servir.</span> Ele desenvolveu esta jornada de 21 dias para ser o guia prático e espiritual que ele mesmo gostaria de ter tido no início de sua caminhada.
                </p>
                <p className="italic border-l-2 border-amber-500 pl-6 text-slate-300">
                  "Minha maior alegria é ver um filho de Deus sair do desespero das dívidas e entrar na paz da provisão, podendo finalmente ser uma benção na vida de outros."
                </p>
              </div>
              <div className="mt-10 flex gap-6">
                 <div>
                    <p className="text-3xl font-black text-white">15+</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Anos de Ministério</p>
                 </div>
                 <div className="h-10 w-px bg-slate-800"></div>
                 <div>
                    <p className="text-3xl font-black text-white">10k+</p>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Vidas Impactadas</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle subtitle="Identifique-se com o perfil certo">Para quem é esse Guia?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-3xl border-green-500/20 bg-green-500/5">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8" /> É PARA VOCÊ SE:
              </h3>
              <ul className="space-y-4">
                {[
                  "Trabalha muito e continua apertado",
                  "Vive no limite do cartão e cheque especial",
                  "Sente vergonha de sua situação financeira",
                  "Quer prosperar sem culpa espiritual",
                  "Acredita na provisão, mas sente o fluxo travado"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl border-red-500/20 bg-red-500/5">
              <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-2">
                <XCircle className="w-8 h-8" /> NÃO É PARA:
              </h3>
              <ul className="space-y-4">
                {[
                  "Quem busca milagre mágico sem ação",
                  "Quem quer enriquecer passando os outros para trás",
                  "Quem não está disposto a alinhar princípios",
                  "Pessoas que não valorizam princípios bíblicos"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle subtitle="Transformação em 21 dias">O que esperar após a jornada?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Fim da sabotagem" },
              { icon: <CheckCircle2 />, title: "Clareza de decisões" },
              { icon: <Star />, title: "Paz com o saldo" },
              { icon: <TrendingUp />, title: "Confiança familiar" },
              { icon: <HandHelping />, title: "Liberdade para ofertar" },
              { icon: <Cross />, title: "Alívio emocional" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 group hover:bg-amber-500/5 transition duration-300">
                <div className="p-4 bg-amber-500/10 text-amber-500 rounded-2xl group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
              </div>
            ))}
          </div>
          <p className="mt-16 text-2xl md:text-3xl font-bold gold-gradient italic leading-relaxed max-w-2xl mx-auto">
            "Você deixa de ser o que sempre pede emprestado... Para se tornar alguém que ajuda, empresta e constrói."
          </p>
        </div>
      </section>

      {/* Bonus/Includes */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Tudo o que você terá acesso imediato">O que você recebe</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative glass-card p-4 rounded-3xl border-amber-500/20 shadow-[0_0_50px_rgba(217,119,6,0.1)]">
                <img 
                  src="https://i.postimg.cc/fRMCjYf7/mockup-bonus.jpg" 
                  alt="Mockup de Bônus e Guia" 
                  className="relative rounded-2xl w-full h-auto object-contain shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 gold-bg text-slate-950 px-6 py-2 rounded-xl font-black uppercase tracking-wider shadow-2xl scale-110">
                  + Bônus VIP
                </div>
              </div>
            </div>
            <div className="space-y-6">
               <div className="glass-card p-6 rounded-2xl border-l-4 border-l-amber-500 hover:bg-slate-800/40 hover:translate-x-2 transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-2 text-white">
                    <BookOpen className="text-amber-500 shrink-0" /> 📘 Guia Digital Completo
                  </h3>
                  <p className="text-slate-400">21 dias de direcionamento espiritual e prático com leituras e exercícios diários simples e transformadores.</p>
               </div>
               <div className="glass-card p-6 rounded-2xl border-l-4 border-l-amber-500/40 hover:bg-slate-800/40 hover:translate-x-2 transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-2 text-white">
                    <Zap className="text-amber-500 shrink-0" /> 🔥 BÔNUS: Oração contra Escassez
                  </h3>
                  <p className="text-slate-400">Para orar com clareza, sem barganha e sem culpa. Um roteiro bíblico poderoso de ativação.</p>
               </div>
               <div className="glass-card p-6 rounded-2xl border-l-4 border-l-amber-500/40 hover:bg-slate-800/40 hover:translate-x-2 transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-3 mb-2 text-white">
                    <CalendarDays className="text-amber-500 shrink-0" /> 🔥 BÔNUS: Checklist Cristão
                  </h3>
                  <p className="text-slate-400">Identifique hoje mesmo os hábitos e atitudes silenciosas que estão bloqueando sua prosperidade.</p>
               </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div id="checkout" className="max-w-xl mx-auto glass-card p-10 rounded-3xl border-2 border-amber-500/50 text-center relative overflow-hidden shadow-[0_0_80px_rgba(217,119,6,0.15)]">
             <div className="absolute top-0 right-0 gold-bg text-slate-950 px-12 py-2 rotate-45 translate-x-12 translate-y-6 font-bold text-xs shadow-xl uppercase tracking-widest">
                OFERTA ÚNICA
             </div>
             <p className="text-slate-400 uppercase tracking-widest font-bold mb-4">Acesso Vitalício Imediato</p>
             <div className="flex justify-center items-end gap-2 mb-6">
                <span className="text-2xl text-slate-500 line-through mb-2">R$ 97</span>
                <span className="text-7xl font-black gold-gradient tracking-tighter">R$ 27</span>
             </div>
             <p className="text-amber-400 text-sm font-semibold mb-8 italic flex items-center justify-center gap-2">
               <Star className="w-4 h-4" /> Pagamento único, sem mensalidades
             </p>
             <CTAButton className="w-full mb-8 py-6 text-2xl shadow-[0_0_30px_rgba(217,119,6,0.3)]">
                QUERO MEU ACESSO AGORA
             </CTAButton>
             <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition duration-300">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-5.png" alt="Visa" className="h-4 brightness-0 invert" />
                <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" className="h-4 brightness-0 invert" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix.png/1200px-Logo_Pix.png" alt="Pix" className="h-4 brightness-0 invert" />
                <img src="https://logodownload.org/wp-content/uploads/2019/08/hotmart-logo-0.png" alt="Hotmart" className="h-4 brightness-0 invert" />
             </div>
             <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Ambiente de Pagamento 100% Seguro
             </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-20 animate-pulse"></div>
            <ShieldCheck className="w-24 h-24 text-amber-500 relative drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gold-gradient">Garantia Incondicional de 7 Dias</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Se por qualquer motivo você sentir que esse guia não é para você, basta pedir o reembolso dentro de 7 dias através da plataforma. Sem perguntas. Sem constrangimento. Sem culpa.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm border border-slate-800 px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" /> Risco Zero para você
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-3xl">
          <SectionTitle>Dúvidas Frequentes</SectionTitle>
          <div className="glass-card p-8 md:p-12 rounded-[2rem] shadow-2xl">
            <FAQItem 
              question="Isso é religioso demais?" 
              answer="Não. É espiritual, bíblico e focado em princípios que funcionam na vida real, tanto na alma quanto nas suas finanças. É aplicável para qualquer cristão que deseja alinhar sua vida com a Palavra." 
            />
            <FAQItem 
              question="Vou ficar rico em 21 dias?" 
              answer="Não prometemos riqueza instantânea ou fórmulas mágicas. Prometemos o desbloqueio da mentalidade de escassez e a clareza para que você construa sua prosperidade sob os princípios do Reino." 
            />
            <FAQItem 
              question="Preciso ser um cristão perfeito?" 
              answer="Não. Ninguém é perfeito. O guia foi feito para quem está em busca de alinhamento, com o coração disposto a aprender e aplicar as orientações práticas." 
            />
            <FAQItem 
              question="Funciona mesmo estando endividado?" 
              answer="Principalmente para quem está endividado. A dívida muitas vezes é o sintoma de algo travado no propósito ou na má gestão emocional. O guia te ajuda a atacar a causa raiz do problema." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <footer className="py-24 px-4 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 gold-bg shadow-[0_0_20px_rgba(217,119,6,0.5)]"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-8">Pare de viver no aperto. <br/><span className="gold-gradient">Comece seu propósito hoje.</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Dê o primeiro passo para destravar sua vida financeira. O seu futuro próspero começa no alinhamento com Deus.
          </p>
          <CTAButton className="mx-auto mb-20 px-12 py-8 text-2xl">
            QUERO MEU ACESSO POR APENAS R$ 27
          </CTAButton>
          
          <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-3 group">
               <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Cross className="w-5 h-5 text-amber-500" />
               </div>
               <div className="text-left">
                 <span className="font-black text-slate-300 block leading-none uppercase tracking-tighter">21 Dias de Propósito</span>
                 <span className="text-[10px] text-slate-600 uppercase tracking-widest">Vida Financeira Desbloqueada</span>
               </div>
            </div>
            <p className="font-medium">&copy; 2024. Todos os direitos reservados. Este site não é afiliado ao Facebook ou Google.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-amber-500 transition-colors font-semibold underline underline-offset-4 decoration-slate-800">Termos</a>
              <a href="#" className="hover:text-amber-500 transition-colors font-semibold underline underline-offset-4 decoration-slate-800">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
