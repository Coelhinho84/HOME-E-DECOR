import { 
  TrendingUp, 
  BookOpen, 
  Target, 
  Share2, 
  BarChart3, 
  Flag, 
  ArrowRight, 
  User, 
  Globe, 
  Users,
  Menu,
  LucideIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import { DeliverableCard } from './components/DeliverableCard';

interface Deliverable {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function App() {
  const deliverables: Deliverable[] = [
    {
      icon: TrendingUp,
      title: "Diagnóstico Organizacional",
      description: "Análise das forças, fraquezas, oportunidades e ameaças da GRANDLAR."
    },
    {
      icon: BookOpen,
      title: "Mapeamento de Processos",
      description: "Mapeamento e modelagem dos processos internos da GRANDLAR."
    },
    {
      icon: Target,
      title: "Plano de Ação Estratégico",
      description: "Plano com iniciativas prioritárias e cronograma de implementação."
    },
    {
      icon: Share2,
      title: "Procedimento Operacional",
      description: "Documentação dos processos críticos da GRANDLAR, com seus responsáveis."
    },
    {
      icon: BarChart3,
      title: "Painel de Indicadores (KPIs)",
      description: "Quadro de indicadores estratégicos e operacionais da GRANDLAR."
    },
    {
      icon: Flag,
      title: "Relatório de Encerramento",
      description: "Relatório final com resultados alcançados e próximos passos."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-bold text-2xl leading-none">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 tracking-tight leading-none mb-0.5">Produtiva Júnior</span>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase leading-none">Kinetic Monolith</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-12">
            <a href="#" className="relative text-xs font-bold text-gray-900 px-1 py-1 group uppercase tracking-widest">
              Visão Geral
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500 rounded-full" />
            </a>
            <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 px-1 py-1 group uppercase tracking-widest transition-colors">
              Projetos
            </a>
            <a href="#" className="text-xs font-bold text-gray-400 hover:text-gray-900 px-1 py-1 group uppercase tracking-widest transition-colors">
              Documentação
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-xs font-bold text-gray-900">Felipe Coelho</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Administrador</span>
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-100 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
              <User size={20} />
            </button>
            <button className="lg:hidden p-2 text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-24 md:pt-40 md:pb-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-20">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="flex-1 max-w-2xl text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-extrabold tracking-[0.2em] text-orange-500 uppercase">
                  PORTAL GRANDLAR
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold text-[#1a1c23] mb-10 leading-[1] tracking-tight">
                <span className="text-orange-500">Hub</span> de Entregáveis GRANDLAR
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-xl mb-12 mx-auto md:mx-0">
                Esta plataforma centraliza todos os entregáveis do seu projeto, garantindo <span className="text-gray-900 font-semibold">transparência, agilidade</span> e o mais alto padrão de excelência da GrandLar.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button className="group bg-orange-500 hover:bg-black text-white font-bold py-5 px-10 rounded-2xl shadow-[0_20px_40px_rgba(242,101,34,0.25)] hover:shadow-none transition-all duration-300 flex items-center gap-3 active:scale-95">
                  Acessar Documentos
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="font-bold py-5 px-8 text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
                  Ver Demonstração
                </button>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="flex-1 relative w-full max-w-lg perspective-1000"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500 aspect-square group">
                  <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                      <span className="text-gray-900 font-black text-3xl tracking-tighter italic">di<span className="text-orange-500">Casa</span></span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Parceiro Oficial</span>
                </div>
                
                <div className="bg-[#1a1c23] p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 transform hover:scale-105 transition-transform duration-500 aspect-square hover:bg-orange-600 transition-colors">
                  <div className="flex flex-col items-center gap-1">
                     <span className="text-white font-black text-2xl tracking-tight leading-none">Home</span>
                     <span className="text-orange-400 text-lg font-bold leading-none">&Decor</span>
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10 w-full justify-center">
                    <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-[10px] text-white font-bold italic">GL</div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/40">GrandLar</span>
                  </div>
                </div>

                <div className="col-span-2 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-orange-500/20">
                    <Users size={32} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-xl leading-none mb-2">Equipe GrandLar</h4>
                    <p className="text-sm text-gray-500 leading-snug">Time de alta performance responsável pela realização e sucesso do projeto.</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-200/40 rounded-full blur-[80px] -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-[60px] -z-10" />
            </motion.div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="bg-[#f8f9fa] py-32 border-t border-gray-100 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-end justify-between mb-20 gap-8">
              <div className="max-w-lg">
                <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-orange-500 uppercase mb-4">CRONOGRAMA</span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">Entregas do Projeto</h2>
                <div className="w-24 h-2 bg-orange-500 rounded-full mx-auto md:mx-0" />
              </div>
              <div className="flex items-center gap-4 bg-white py-3 px-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-[11px] font-black tracking-[0.1em] text-gray-400 uppercase">
                  Status: <span className="text-emerald-500">Em Desenvolvimento</span>
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="h-4 w-px bg-gray-100" />
                <span className="text-[11px] font-black tracking-[0.1em] text-gray-900 uppercase">
                  6 Entregáveis
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {deliverables.map((item, index) => (
                <DeliverableCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
          
          {/* Subtle bg text */}
          <div className="absolute top-20 right-0 text-[20vw] font-black text-gray-200/10 leading-none select-none pointer-events-none tracking-tighter">
            GRANDLAR
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 border-t border-gray-100 text-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <section>
              <h3 className="font-black text-orange-500 text-lg uppercase tracking-widest mb-8">KINETIC MONOLITH</h3>
              <p className="text-gray-500 leading-relaxed mb-8 pr-4">
                Consultoria de excelência focada em resultados reais e transformação organizacional acelerada.
              </p>
              <div className="flex gap-4">
                <a href="https://produtivajunior.com.br" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-200 transition-all group">
                   <Globe size={18} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-200 transition-all group">
                   <Users size={18} />
                </a>
              </div>
            </section>

            <section>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] block mb-8">COORDENAÇÃO</span>
              <div className="flex items-start gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base mb-1">Thiago Melo</h4>
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider mb-3">Gerente de Projetos</p>
                  <ul className="space-y-2 text-gray-500 text-xs mt-4">
                    <li className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-pointer">
                      <span className="font-bold text-gray-300">T:</span> (84) 99105-0060
                    </li>
                    <li className="flex items-center gap-2 hover:text-gray-900 transition-colors cursor-pointer">
                      <span className="font-bold text-gray-300">E:</span> nataliamorais@grandlar.com.br
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] block mb-8">CONSULTORES</span>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { name: "Felipe Coelho", phone: "(84) 98158-0714", role: "Estratégia" },
                  { name: "Manuela Procópio", phone: "(84) 99617-7774", role: "Processos" },
                  { name: "Rafael Leitão", phone: "(84) 99234-5678", role: "BI" },
                  { name: "Aquiles Adelino", phone: "(84) 99345-6789", role: "Operações" }
                ].map((consultant, idx) => (
                  <div key={idx} className="group cursor-default">
                    <h5 className="font-extrabold text-gray-900 text-xs mb-1 group-hover:text-orange-500 transition-colors">{consultant.name}</h5>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-gray-300 uppercase tracking-tighter">{consultant.role}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-200" />
                      <span className="text-gray-500 text-[11px] font-medium">{consultant.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col items-end">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] block mb-8 text-right underline underline-offset-8 decoration-orange-500">LINKS ÚTEIS</span>
              <ul className="space-y-4 text-right">
                {['Portal Interno', 'Relatórios Mensais', 'Suporte Técnico', 'Acesso Restrito'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-gray-900 transition-all text-xs font-bold uppercase tracking-wider block hover:-translate-x-1">{link}</a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-16 bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-3">Newsletter</p>
                <div className="flex gap-2">
                   <input type="text" placeholder="Seu email" className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-[11px] flex-grow outline-none focus:border-orange-500 transition-colors" />
                   <button className="bg-black text-white px-3 rounded-lg"><ArrowRight size={14} /></button>
                </div>
              </div>
            </section>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black text-gray-300 tracking-[0.3em] uppercase">
            <div className="flex items-center gap-6">
              <span>© 2024 GRANDLAR HUB.</span>
              <span className="hidden md:inline text-gray-100">|</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-900 transition-colors">Termos</a>
                <a href="#" className="hover:text-gray-900 transition-colors">Privacidade</a>
              </div>
            </div>
            <div className="flex items-center gap-3 group skew-x-[-10deg]">
              <span className="group-hover:text-gray-900 transition-colors">POWERED BY</span>
              <div className="flex gap-1">
                 <div className="w-4 h-4 bg-orange-500 rounded-sm" />
                 <div className="w-4 h-4 bg-black rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

