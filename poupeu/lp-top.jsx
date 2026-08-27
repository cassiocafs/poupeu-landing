const NAV = [
  { label: 'Produto', href: '#produto' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Metas', href: '#metas' },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="pu-header">
      <div className="pu-header-in">
        <a href="#top" aria-label="Poupeu — início" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="assets/mascot-cut/logo-horizontal.png" alt="Poupeu" style={{ height: 40, width: 'auto' }} />
        </a>
        <nav className="pu-nav" aria-label="Navegação principal">
          {NAV.map(n => <a key={n.label} href={n.href}>{n.label}</a>)}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="pu-hide-sm"><Button size="sm" as="a" href="https://www.nossasfinancas.com/">Começar agora</Button></span>
          <button className="pu-burger" aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'x' : 'menu'} size={22} color="var(--green-900)" />
          </button>
        </div>
      </div>
      <div className={'pu-mobile-menu' + (open ? ' open' : '')}>
        {NAV.map(n => <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
        <Button fullWidth as="a" href="https://www.nossasfinancas.com/" onClick={() => setOpen(false)}>Começar agora</Button>
      </div>
    </header>
  );
}

function FloatCard({ icon, label, value, style, cls = 'pu-float' }) {
  return (
    <div className={cls} style={{
      position: 'absolute', display: 'flex', alignItems: 'center', gap: 10,
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)', padding: '10px 14px', boxShadow: 'var(--shadow-md)', ...style,
    }}>
      <span style={{ width: 30, height: 30, borderRadius: 'var(--radius-full)', background: 'var(--yellow-100)', color: 'var(--yellow-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={15} />
      </span>
      <span>
        <span style={{ display: 'block', font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{label}</span>
        <span style={{ display: 'block', font: 'var(--weight-bold) 14px/1.2 var(--font-numeric)', color: 'var(--text-primary)' }}>{value}</span>
      </span>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pu-wrap pu-hero">
      <Reveal>
        <Badge tone="accent" icon="paw-print">Seu guia financeiro</Badge>
        <h1 className="pu-display" style={{ margin: '20px 0 0' }}>Seu dinheiro,<br />do seu jeito.</h1>
        <p className="pu-lead">Organize suas finanças, acompanhe seus gastos e entenda melhor o seu dinheiro — de um jeito simples e sem complicação.</p>
        <div className="pu-actions">
          <Button size="lg" iconRight="arrow-right" as="a" href="https://www.nossasfinancas.com/">Começar agora</Button>
          <Button size="lg" variant="secondary" as="a" href="#produto">Conheça o Poupeu</Button>
        </div>
        <p style={{ margin: '20px 0 0', font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>Simples para começar. Feito para acompanhar você.</p>
      </Reveal>
      <Reveal delay={120} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: '-6% -4% 8%', background: 'var(--cream-bg)', borderRadius: '48% 42% 46% 44%' }}></div>
        <div style={{ position: 'relative' }}>
          <PhoneFrame width={352}><ScreenHome /></PhoneFrame>
          <Mascot state="welcome" size={190} className="pu-mascot-nudge" style={{ position: 'absolute', left: -132, bottom: -14, filter: 'drop-shadow(0 12px 24px rgba(13,91,46,.16))' }} />
          <FloatCard icon="target" label="Minha viagem" value="65%" style={{ top: 44, right: -78 }} />
          <FloatCard icon="piggy-bank" label="Sobrou" value="R$ 2.610" cls="pu-float-b" style={{ bottom: 96, right: -66 }} />
        </div>
      </Reveal>
    </section>
  );
}

function BrandIntroduction() {
  return (
    <section id="produto" className="pu-cream pu-sec">
      <div className="pu-wrap pu-split">
        <Reveal>
          <p className="pu-eyebrow">O seu guia</p>
          <h2 className="pu-h2">Conheça o Poupeu.</h2>
          <p className="pu-lead" style={{ font: 'var(--weight-semibold) 19px/1.5 var(--font-sans)', color: 'var(--green-900)' }}>Seu guia financeiro para cuidar do seu dinheiro do seu jeito.</p>
          <p className="pu-lead">Organizar dinheiro não precisa ser complicado. O Poupeu acompanha você, ajuda a entender o que está acontecendo e mostra caminhos para tomar decisões melhores.</p>
        </Reveal>
        <Reveal delay={120} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 440 }}>
            <Card padding="roomy" radius="var(--radius-card-special)" elevation="md" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Mascot state="thinking" size={56} framed />
                <div>
                  <div style={{ font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)', color: 'var(--text-primary)' }}>Resumo de agosto</div>
                  <div style={{ font: 'var(--type-body-sm)', color: 'var(--text-muted)' }}>Vamos olhar isso juntos?</div>
                </div>
              </div>
              <div className="pu-row" style={{ gap: 10, flexWrap: 'nowrap' }}>
                <StatCard label="Entrou" amount="R$ 6.500" tone="in" />
                <StatCard label="Saiu" amount="R$ 3.890" tone="out" />
                <StatCard label="Sobrou" amount="R$ 2.610" tone="left" />
              </div>
              <DonutChart data={CAT_SLICES} size={148} centerLabel="Gastos" centerValue="R$ 3.890" />
            </Card>
            <Badge tone="success" icon="trending-up" style={{ position: 'absolute', top: -14, right: 16, boxShadow: 'var(--shadow-md)' }}>12% menos com alimentação</Badge>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PERSONALITY = [
  { tag: 'Amigo', icon: 'heart-handshake', state: 'happy', title: 'Um amigo para suas finanças.', text: 'Próximo, acolhedor e sem julgamentos.' },
  { tag: 'Organizado', icon: 'layout-grid', state: 'thinking', title: 'Tudo no seu lugar.', text: 'Tenha uma visão clara do seu dinheiro sem complicação.' },
  { tag: 'Incentivador', icon: 'trophy', state: 'celebrating', title: 'Cada conquista conta.', text: 'Acompanhe seu progresso e continue avançando.' },
];

function BrandPersonality() {
  return (
    <section className="pu-sec">
      <div className="pu-wrap">
        <SectionHead eyebrow="Personalidade" title="Um guia, não um fiscal." sub="O Poupeu é o mesmo companheiro em todo momento da sua vida financeira." align="center" />
        <div className="pu-grid3" style={{ marginTop: 48 }}>
          {PERSONALITY.map((p, i) => (
            <Reveal key={p.tag} delay={i * 90}>
              <Card padding="roomy" radius="var(--radius-card-feature)" interactive style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Mascot state={p.state} size={64} framed />
                  <Badge tone="brand" icon={p.icon}>{p.tag}</Badge>
                </div>
                <h3 className="pu-h3" style={{ font: 'var(--type-h4)' }}>{p.title}</h3>
                <p className="pu-body" style={{ font: 'var(--type-body-sm)' }}>{p.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Header, Hero, BrandIntroduction, BrandPersonality, FloatCard, NAV });
