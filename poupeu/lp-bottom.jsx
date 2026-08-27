function NoJudgement() {
  return (
    <section className="pu-sec">
      <div className="pu-wrap" style={{ maxWidth: 880, textAlign: 'center' }}>
        <Reveal>
          <Mascot state="thinking" size={160} className="pu-mascot-nudge" style={{ margin: '0 auto 32px' }} />
          <h2 className="pu-h2">Seu dinheiro. Suas escolhas.</h2>
          <p className="pu-lead" style={{ margin: '20px auto 0', font: 'var(--weight-regular) 19px/1.6 var(--font-sans)' }}>O Poupeu não está aqui para dizer como você deve viver. Ele ajuda você a entender suas escolhas para tomar decisões melhores — do seu jeito.</p>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  { n: '1', icon: 'wallet', title: 'Cadastre seu dinheiro.', text: 'Adicione suas receitas e despesas.' },
  { n: '2', icon: 'chart-pie', title: 'Entenda seus gastos.', text: 'Veja para onde seu dinheiro está indo.' },
  { n: '3', icon: 'target', title: 'Cuide dos seus planos.', text: 'Crie metas e acompanhe seu progresso.' },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="pu-cream pu-sec">
      <div className="pu-wrap">
        <SectionHead eyebrow="Como funciona" title="Comece em poucos minutos." align="center" />
        <div className="pu-grid3" style={{ marginTop: 56, position: 'relative' }}>
          <div className="pu-hide-sm" style={{ position: 'absolute', top: 27, left: '16%', right: '16%', height: 2, background: 'repeating-linear-gradient(90deg,var(--green-200) 0 10px,transparent 10px 20px)' }}></div>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} style={{ position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
                <span style={{ width: 56, height: 56, borderRadius: 'var(--radius-full)', background: 'var(--green-900)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', font: 'var(--weight-bold) 20px/1 var(--font-numeric)', boxShadow: 'var(--shadow-md)' }}>{s.n}</span>
                <Icon name={s.icon} size={22} color="var(--green-600)" />
                <h3 className="pu-h3" style={{ font: 'var(--type-h4)' }}>{s.title}</h3>
                <p className="pu-body" style={{ font: 'var(--type-body-sm)', maxWidth: 260 }}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140} style={{ marginTop: 56 }}>
          <CTASection title="Pronto para começar do seu jeito?" subtitle="Leva poucos minutos e o Poupeu segue com você depois." />
        </Reveal>
      </div>
    </section>
  );
}

const PROOF = [
  { label: 'Início', caption: 'Seu saldo e o resumo do mês.', screen: <ScreenHome compact /> },
  { label: 'Transações', caption: 'Tudo organizado por categoria.', screen: <ScreenTransactions /> },
  { label: 'Metas', caption: 'Seu progresso, passo a passo.', screen: <ScreenGoals /> },
];

function ProductProof() {
  return (
    <section className="pu-sec">
      <div className="pu-wrap">
        <SectionHead eyebrow="Por dentro do app" title="Simples de olhar. Fácil de entender." sub="As mesmas informações, sem ruído: o que entrou, o que saiu e para onde você está indo." align="center" max={660} />
        <div className="pu-trio" style={{ marginTop: 56 }}>
          {PROOF.map((p, i) => (
            <Reveal key={p.label} delay={i * 110} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <PhoneFrame width={296}>{p.screen}</PhoneFrame>
              <div style={{ textAlign: 'center' }}>
                <div style={{ font: 'var(--weight-semibold) 16px/1.3 var(--font-sans)', color: 'var(--green-900)' }}>{p.label}</div>
                <p className="pu-body" style={{ font: 'var(--type-body-sm)', marginTop: 4 }}>{p.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ background: 'var(--green-900)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 14, height: 14, borderRadius: 999, background: 'var(--yellow-500)', top: '18%', left: '8%', opacity: .9 }}></div>
      <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: 999, background: 'var(--yellow-300)', bottom: '22%', left: '16%', opacity: .8 }}></div>
      <div style={{ position: 'absolute', width: 10, height: 10, borderRadius: 999, background: 'var(--yellow-500)', top: '26%', right: '10%', opacity: .7 }}></div>
      <div className="pu-wrap pu-split" style={{ padding: '88px 24px', gap: 48, position: 'relative' }}>
        <Reveal>
          <h2 className="pu-display" style={{ color: '#fff' }}>Seu dinheiro.<br />Do seu jeito.</h2>
          <p className="pu-lead" style={{ color: 'rgba(255,255,255,.82)' }}>Comece a entender, organizar e cuidar melhor das suas finanças.</p>
          <div className="pu-actions">
            <Button variant="accent" size="lg" iconRight="arrow-right" as="a" href="https://www.nossasfinancas.com/">Começar agora</Button>
          </div>
        </Reveal>
        <Reveal delay={120} style={{ display: 'flex', justifyContent: 'center' }}>
          <Mascot state="celebrating" size={280} className="pu-mascot-nudge" style={{ filter: 'drop-shadow(0 18px 32px rgba(0,0,0,.22))' }} />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <SiteFooter
      logoSrc="assets/mascot-cut/logo-horizontal.png"
      trust={[{ title: 'Seu dinheiro, do seu jeito.', detail: 'Organização financeira pessoal, feita no Brasil.' }]}
      columns={[
        { title: 'Produto', links: ['Produto', 'Como funciona', 'Benefícios'] },
        { title: 'Legal', links: ['Privacidade', 'Termos'] },
      ]}
      legal="© 2026 Poupeu. Todos os direitos reservados."
    />
  );
}

Object.assign(window, { NoJudgement, HowItWorks, ProductProof, FinalCTA, Footer, STEPS, PROOF });
