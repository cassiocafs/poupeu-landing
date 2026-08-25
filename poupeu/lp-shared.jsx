const DS = window.PoupeuDesignSystem_d64c01;
const { Button, Card, Badge, Chip, Icon, Mascot, MascotMessage, InsightCard, FeatureCard, CTASection, SiteFooter, FinancialCard, StatCard, GoalCard, ProgressBar, TransactionItem, DonutChart, BarChart, LineChart } = DS;

function Reveal({ children, delay = 0, as = 'div', className = '', style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { el.classList.add('pu-in'); io.unobserve(el); } }), { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const El = as;
  return <El ref={ref} className={'pu-rev ' + className} style={{ transitionDelay: delay + 'ms', ...style }}>{children}</El>;
}

function SectionHead({ eyebrow, title, sub, align = 'left', max = 620 }) {
  return (
    <Reveal style={{ textAlign: align, maxWidth: align === 'center' ? max : undefined, margin: align === 'center' ? '0 auto' : undefined }}>
      {eyebrow && <p className="pu-eyebrow">{eyebrow}</p>}
      <h2 className="pu-h2">{title}</h2>
      {sub && <p className="pu-lead" style={{ margin: align === 'center' ? '16px auto 0' : '16px 0 0' }}>{sub}</p>}
    </Reveal>
  );
}

function PhoneFrame({ children, width = 320, label, style }) {
  return (
    <div className="pu-phone" style={{
      width, flex: 'none', background: 'var(--neutral-900)', borderRadius: 44, padding: 9,
      boxShadow: 'var(--shadow-lg)', ...style,
    }}>
      <div style={{ background: 'var(--bg-page-app)', borderRadius: 36, overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 4px', font: 'var(--weight-semibold) 11px/1 var(--font-sans)', color: 'var(--text-muted)' }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 5 }}><Icon name="signal" size={12} /><Icon name="wifi" size={12} /><Icon name="battery-full" size={12} /></span>
        </div>
        <div style={{ padding: '8px 16px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>{children}</div>
      </div>
      {label && <div style={{ textAlign: 'center', padding: '10px 0 2px', font: 'var(--type-caption)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'rgba(255,255,255,.7)' }}>{label}</div>}
    </div>
  );
}

function AppGreeting({ name = 'Marina' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Mascot state="happy" size={34} framed />
        <div>
          <div style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>Oi, {name} 👋</div>
          <div style={{ font: 'var(--weight-semibold) 13px/1.2 var(--font-sans)', color: 'var(--text-primary)' }}>Agosto de 2026</div>
        </div>
      </div>
      <Icon name="bell" size={18} color="var(--neutral-500)" />
    </div>
  );
}

const CAT_SLICES = [
  { label: 'Casa', value: 1450, color: 'var(--cat-casa)' },
  { label: 'Alimentação', value: 980, color: 'var(--cat-alimentacao)' },
  { label: 'Transporte', value: 620, color: 'var(--cat-transporte)' },
  { label: 'Lazer', value: 410, color: 'var(--cat-lazer)' },
  { label: 'Outros', value: 430, color: 'var(--cat-outros)' },
];

const MONTH_BARS = [
  { label: 'Abr', entrou: 6100, saiu: 4200 },
  { label: 'Mai', entrou: 6300, saiu: 4050 },
  { label: 'Jun', entrou: 6200, saiu: 3980 },
  { label: 'Jul', entrou: 6400, saiu: 4100 },
  { label: 'Ago', entrou: 6500, saiu: 3890 },
];
const BAR_SERIES = [
  { key: 'entrou', color: 'var(--chart-2)', label: 'Entrou' },
  { key: 'saiu', color: 'var(--chart-6)', label: 'Saiu' },
];

function ScreenHome({ compact = false }) {
  return (
    <React.Fragment>
      <AppGreeting />
      <FinancialCard label="Seu saldo" amount="R$ 4.250,00" delta="+8,4% este mês" footer="Atualizado hoje, 9:12" />
      <div className="pu-row" style={{ gap: 10, flexWrap: 'nowrap' }}>
        <StatCard label="Entrou" amount="R$ 6.500" tone="in" />
        <StatCard label="Saiu" amount="R$ 3.890" tone="out" />
        <StatCard label="Sobrou" amount="R$ 2.610" tone="left" />
      </div>
      <Card padding="compact">
        <div style={{ font: 'var(--type-label)', color: 'var(--text-muted)', marginBottom: 8 }}>Entrou e saiu</div>
        <BarChart data={MONTH_BARS} series={BAR_SERIES} height={104} />
      </Card>
      {compact ? (
        <Card padding="none" style={{ overflow: 'hidden' }}>
          <TransactionItem title="Salário" category="receita" amount={6500} time="01 ago" />
          <TransactionItem title="Mercado" category="alimentacao" amount={-386.4} time="09 ago" />
        </Card>
      ) : (
        <InsightCard>Você gastou 12% menos com alimentação este mês.</InsightCard>
      )}
    </React.Fragment>
  );
}

function ScreenTransactions() {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Transações</span>
        <Icon name="sliders-horizontal" size={18} color="var(--neutral-500)" />
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {['Todos', 'Receitas', 'Despesas'].map((c, i) => <Chip key={c} selected={i === 0} style={{ padding: '0 11px', fontSize: 12, height: 30 }}>{c}</Chip>)}
      </div>
      <Card padding="none" style={{ overflow: 'hidden' }}>
        <TransactionItem title="Salário" category="receita" amount={6500} time="01 ago" />
        <TransactionItem title="Aluguel" category="casa" amount={-1450} time="05 ago" />
        <TransactionItem title="Mercado" category="alimentacao" amount={-386.4} time="09 ago" />
        <TransactionItem title="Uber" category="transporte" amount={-23.8} time="Hoje" />
        <TransactionItem title="Assinatura de streaming" category="assinaturas" amount={-39.9} time="Hoje" />
      </Card>
      <Card padding="compact">
        <div style={{ font: 'var(--type-label)', color: 'var(--text-muted)', marginBottom: 10 }}>Onde você mais gasta</div>
        <DonutChart data={CAT_SLICES} size={124} centerLabel="Gastos" centerValue="R$ 3.890" />
      </Card>
    </React.Fragment>
  );
}

function ScreenGoals() {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ font: 'var(--type-h4)', color: 'var(--text-primary)' }}>Metas</span>
        <Icon name="target" size={18} color="var(--neutral-500)" />
      </div>
      <GoalCard name="Minha viagem" icon="plane" current={3250} target={5000} note="Faltam R$ 1.750 para realizar." />
      <GoalCard name="Minha reserva" icon="piggy-bank" current={2610} target={6000} />
      <GoalCard name="Minha casa" icon="house" current={12000} target={40000} />
    </React.Fragment>
  );
}

Object.assign(window, { DS, Button, Card, Badge, Chip, Icon, Mascot, MascotMessage, InsightCard, FeatureCard, CTASection, SiteFooter, FinancialCard, StatCard, GoalCard, ProgressBar, TransactionItem, DonutChart, BarChart, LineChart, Reveal, SectionHead, PhoneFrame, AppGreeting, ScreenHome, ScreenTransactions, ScreenGoals, CAT_SLICES, MONTH_BARS, BAR_SERIES });
