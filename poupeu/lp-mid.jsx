const FEATURES = [
  { icon: 'wallet', title: 'Controle de gastos', text: 'Saiba exatamente para onde seu dinheiro está indo.' },
  { icon: 'banknote', title: 'Receitas', text: 'Tenha clareza sobre quanto entra todos os meses.' },
  { icon: 'chart-pie', title: 'Categorias', text: 'Entenda seus hábitos de consumo.' },
  { icon: 'target', title: 'Metas', text: 'Organize seu dinheiro para aquilo que realmente importa.' },
  { icon: 'trending-up', title: 'Progresso', text: 'Acompanhe sua evolução ao longo do tempo.' },
  { icon: 'lightbulb', title: 'Insights', text: 'Receba informações simples para tomar decisões melhores.' },
];

function Features() {
  return (
    <section id="beneficios" className="pu-cream pu-sec">
      <div className="pu-wrap">
        <SectionHead eyebrow="Benefícios" title="Tudo o que você precisa para cuidar do seu dinheiro." sub="Uma visão simples para você entender, organizar e planejar sua vida financeira." align="center" max={680} />
        <div className="pu-grid3" style={{ marginTop: 48 }}>
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <FeatureCard icon={f.icon} title={f.title} style={{ height: '100%' }}>{f.text}</FeatureCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SHOWCASE_POINTS = [
  { icon: 'arrow-down', title: 'Veja quanto entrou.', text: 'Todas as suas receitas do mês reunidas em um número claro.' },
  { icon: 'arrow-up', title: 'Entenda quanto saiu.', text: 'Sem susto no fim do mês: cada gasto no seu devido lugar.' },
  { icon: 'chart-pie', title: 'Descubra onde você mais gasta.', text: 'Categorias organizadas automaticamente para você entender seus hábitos.' },
  { icon: 'trending-up', title: 'Acompanhe sua evolução.', text: 'Compare seus meses e veja seu progresso acontecer.' },
];

function ProductShowcase() {
  return (
    <section className="pu-sec">
      <div className="pu-wrap pu-split" style={{ gap: 72 }}>
        <Reveal style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '6% -12%', background: 'var(--green-100)', borderRadius: 'var(--radius-card-special)' }}></div>
            <PhoneFrame width={358} style={{ position: 'relative' }}><ScreenHome /></PhoneFrame>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="pu-eyebrow">O produto</p>
          <h2 className="pu-h2">Seu dinheiro em um só lugar.</h2>
          <p className="pu-lead">Uma visão clara da sua vida financeira, sem planilhas complicadas.</p>
          <div style={{ display: 'grid', gap: 20, marginTop: 40 }}>
            {SHOWCASE_POINTS.map(p => (
              <div key={p.title} style={{ display: 'flex', gap: 14 }}>
                <span style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--green-100)', color: 'var(--green-900)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={p.icon} size={19} />
                </span>
                <div>
                  <div style={{ font: 'var(--weight-semibold) 17px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>{p.title}</div>
                  <p className="pu-body" style={{ font: 'var(--type-body-sm)', marginTop: 4 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const GOAL_CHIPS = [
  { icon: 'house', label: 'Minha casa' },
  { icon: 'car-front', label: 'Meu carro' },
  { icon: 'plane', label: 'Minha viagem' },
  { icon: 'piggy-bank', label: 'Minha reserva' },
];

function Goals() {
  return (
    <section id="metas" className="pu-cream pu-sec">
      <div className="pu-wrap">
        <SectionHead eyebrow="Metas" title="Seu dinheiro tem um propósito." sub="Organize suas finanças para conquistar aquilo que realmente importa." align="center" />
        <div className="pu-grid4" style={{ marginTop: 48 }}>
          {GOAL_CHIPS.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <Card padding="compact" radius="var(--radius-card-feature)" interactive style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 42, height: 42, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--yellow-100)', color: 'var(--yellow-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={g.icon} size={20} />
                </span>
                <span style={{ font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>{g.label}</span>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="pu-split" style={{ marginTop: 64, gap: 56 }}>
          <Reveal>
            <Card padding="roomy" radius="var(--radius-card-special)" elevation="md" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                <div>
                  <p className="pu-eyebrow" style={{ margin: 0 }}>Viagem</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
                    <span style={{ font: 'var(--weight-extrabold) 30px/1.1 var(--font-numeric)', letterSpacing: 'var(--tracking-tight)', color: 'var(--green-900)' }}>R$ 3.250</span>
                    <span style={{ font: 'var(--type-body)', color: 'var(--text-muted)' }}>/ R$ 5.000</span>
                  </div>
                </div>
                <Badge tone="accent" icon="plane">65%</Badge>
              </div>
              <ProgressBar value={3250} max={5000} size="lg" showValue />
              <p className="pu-body" style={{ font: 'var(--type-body-sm)' }}>Faltam R$ 1.750 para realizar.</p>
            </Card>
          </Reveal>
          <Reveal delay={120} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Mascot state="celebrating" size={150} className="pu-mascot-nudge" style={{ flex: 'none' }} />
            <div>
              <h3 className="pu-h3">Você está mais perto do que imagina.</h3>
              <p className="pu-body" style={{ marginTop: 10 }}>Cada valor guardado aparece aqui. O Poupeu comemora com você a cada passo.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const BUBBLES = [
  { side: 'in', text: 'Boa! Você está indo bem.' },
  { side: 'in', text: 'Você gastou 12% menos com alimentação este mês.' },
  { side: 'in', text: 'Quer ver onde seu dinheiro está indo?' },
  { side: 'in', text: 'Você já chegou a 65% da sua meta!' },
  { side: 'in', text: 'Mandou bem! Meta alcançada! 🎉' },
  { side: 'in', text: 'Ops! Esse gasto ficou um pouquinho acima do planejado.' },
];

function Bubble({ side, text, delay }) {
  const mine = side === 'out';
  return (
    <Reveal delay={delay} style={{ display: 'flex', justifyContent: mine ? 'flex-end' : 'flex-start' }}>
      <div style={{
        maxWidth: '82%', padding: '14px 18px',
        borderRadius: mine ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
        background: mine ? 'var(--green-900)' : 'var(--surface-card)',
        color: mine ? '#fff' : 'var(--text-primary)',
        border: mine ? 'none' : '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)', font: 'var(--weight-medium) 15px/1.5 var(--font-sans)',
      }}>{text}</div>
    </Reveal>
  );
}

function MascotGuide() {
  return (
    <section className="pu-sec">
      <div className="pu-wrap pu-split" style={{ gap: 72 }}>
        <Reveal>
          <p className="pu-eyebrow">O diferencial</p>
          <h2 className="pu-h2">Não é só um app. É alguém para ajudar.</h2>
          <p className="pu-lead">O Poupeu transforma números em informações fáceis de entender.</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginTop: 40 }}>
            <Mascot state="happy" size={140} className="pu-mascot-nudge" />
            <div style={{ paddingBottom: 12 }}>
              <div style={{ font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>Poupeu</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--type-body-sm)', color: 'var(--money-in)' }}>
                <Icon name="circle-check" size={14} />Sempre por aqui
              </div>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--cream-bg)', padding: 24, borderRadius: 'var(--radius-card-special)' }}>
          {BUBBLES.map((b, i) => <Bubble key={b.text} {...b} delay={i * 90} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Features, ProductShowcase, Goals, MascotGuide, Bubble, FEATURES, GOAL_CHIPS, BUBBLES, SHOWCASE_POINTS });
