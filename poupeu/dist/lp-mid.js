function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FEATURES = [{
  icon: 'wallet',
  title: 'Controle de gastos',
  text: 'Saiba exatamente para onde seu dinheiro está indo.'
}, {
  icon: 'banknote',
  title: 'Receitas',
  text: 'Tenha clareza sobre quanto entra todos os meses.'
}, {
  icon: 'chart-pie',
  title: 'Categorias',
  text: 'Entenda seus hábitos de consumo.'
}, {
  icon: 'target',
  title: 'Metas',
  text: 'Organize seu dinheiro para aquilo que realmente importa.'
}, {
  icon: 'trending-up',
  title: 'Progresso',
  text: 'Acompanhe sua evolução ao longo do tempo.'
}, {
  icon: 'lightbulb',
  title: 'Insights',
  text: 'Receba informações simples para tomar decisões melhores.'
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "beneficios",
    className: "pu-cream pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Benef\xEDcios",
    title: "Tudo o que voc\xEA precisa para cuidar do seu dinheiro.",
    sub: "Uma vis\xE3o simples para voc\xEA entender, organizar e planejar sua vida financeira.",
    align: "center",
    max: 680
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-grid3",
    style: {
      marginTop: 48
    }
  }, FEATURES.map((f, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: f.title,
    delay: i % 3 * 80
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: f.icon,
    title: f.title,
    style: {
      height: '100%'
    }
  }, f.text))))));
}
const SHOWCASE_POINTS = [{
  icon: 'arrow-down',
  title: 'Veja quanto entrou.',
  text: 'Todas as suas receitas do mês reunidas em um número claro.'
}, {
  icon: 'arrow-up',
  title: 'Entenda quanto saiu.',
  text: 'Sem susto no fim do mês: cada gasto no seu devido lugar.'
}, {
  icon: 'chart-pie',
  title: 'Descubra onde você mais gasta.',
  text: 'Categorias organizadas automaticamente para você entender seus hábitos.'
}, {
  icon: 'trending-up',
  title: 'Acompanhe sua evolução.',
  text: 'Compare seus meses e veja seu progresso acontecer.'
}];
function ProductShowcase() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap pu-split",
    style: {
      gap: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-showcase-visual",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-showcase-blob",
    style: {
      position: 'absolute',
      inset: '6% -12%',
      background: 'var(--green-100)',
      borderRadius: 'var(--radius-card-special)'
    }
  }), /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 358,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ScreenHome, null)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "pu-eyebrow"
  }, "O produto"), /*#__PURE__*/React.createElement("h2", {
    className: "pu-h2"
  }, "Seu dinheiro em um s\xF3 lugar."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead"
  }, "Uma vis\xE3o clara da sua vida financeira, sem planilhas complicadas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      marginTop: 40
    }
  }, SHOWCASE_POINTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-100)',
      color: 'var(--green-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 17px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "pu-body",
    style: {
      font: 'var(--type-body-sm)',
      marginTop: 4
    }
  }, p.text))))))));
}
const GOAL_CHIPS = [{
  icon: 'house',
  label: 'Minha casa'
}, {
  icon: 'car-front',
  label: 'Meu carro'
}, {
  icon: 'plane',
  label: 'Minha viagem'
}, {
  icon: 'piggy-bank',
  label: 'Minha reserva'
}];
function Goals() {
  return /*#__PURE__*/React.createElement("section", {
    id: "metas",
    className: "pu-cream pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Metas",
    title: "Seu dinheiro tem um prop\xF3sito.",
    sub: "Organize suas finan\xE7as para conquistar aquilo que realmente importa.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-grid4",
    style: {
      marginTop: 48
    }
  }, GOAL_CHIPS.map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: g.label,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "compact",
    radius: "var(--radius-card-feature)",
    interactive: true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--yellow-100)',
      color: 'var(--yellow-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, g.label))))), /*#__PURE__*/React.createElement("div", {
    className: "pu-split",
    style: {
      marginTop: 64,
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Card, {
    padding: "roomy",
    radius: "var(--radius-card-special)",
    elevation: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-goal-head",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pu-eyebrow",
    style: {
      margin: 0
    }
  }, "Viagem"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pu-goal-amount",
    style: {
      font: 'var(--weight-extrabold) 30px/1.1 var(--font-numeric)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--green-900)'
    }
  }, "R$ 3.250"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)'
    }
  }, "/ R$ 5.000"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "plane"
  }, "65%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 3250,
    max: 5000,
    size: "lg",
    showValue: true
  }), /*#__PURE__*/React.createElement("p", {
    className: "pu-body",
    style: {
      font: 'var(--type-body-sm)'
    }
  }, "Faltam R$ 1.750 para realizar."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    className: "pu-goals-celebrate",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: "celebrating",
    size: 150,
    className: "pu-mascot-nudge",
    style: {
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "pu-h3"
  }, "Voc\xEA est\xE1 mais perto do que imagina."), /*#__PURE__*/React.createElement("p", {
    className: "pu-body",
    style: {
      marginTop: 10
    }
  }, "Cada valor guardado aparece aqui. O Poupeu comemora com voc\xEA a cada passo."))))));
}
const BUBBLES = [{
  side: 'in',
  text: 'Boa! Você está indo bem.'
}, {
  side: 'in',
  text: 'Você gastou 12% menos com alimentação este mês.'
}, {
  side: 'in',
  text: 'Quer ver onde seu dinheiro está indo?'
}, {
  side: 'in',
  text: 'Você já chegou a 65% da sua meta!'
}, {
  side: 'in',
  text: 'Mandou bem! Meta alcançada! 🎉'
}, {
  side: 'in',
  text: 'Ops! Esse gasto ficou um pouquinho acima do planejado.'
}];
function Bubble({
  side,
  text,
  delay
}) {
  const mine = side === 'out';
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: delay,
    style: {
      display: 'flex',
      justifyContent: mine ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '82%',
      padding: '14px 18px',
      borderRadius: mine ? '20px 20px 6px 20px' : '20px 20px 20px 6px',
      background: mine ? 'var(--green-900)' : 'var(--surface-card)',
      color: mine ? '#fff' : 'var(--text-primary)',
      border: mine ? 'none' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      font: 'var(--weight-medium) 15px/1.5 var(--font-sans)'
    }
  }, text));
}
function MascotGuide() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap pu-split",
    style: {
      gap: 72
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "pu-eyebrow"
  }, "O diferencial"), /*#__PURE__*/React.createElement("h2", {
    className: "pu-h2"
  }, "N\xE3o \xE9 s\xF3 um app. \xC9 algu\xE9m para ajudar."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead"
  }, "O Poupeu transforma n\xFAmeros em informa\xE7\xF5es f\xE1ceis de entender."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: "happy",
    size: 140,
    className: "pu-mascot-nudge"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "Poupeu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-body-sm)',
      color: 'var(--money-in)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 14
  }), "Sempre por aqui")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      background: 'var(--cream-bg)',
      padding: 24,
      borderRadius: 'var(--radius-card-special)'
    }
  }, BUBBLES.map((b, i) => /*#__PURE__*/React.createElement(Bubble, _extends({
    key: b.text
  }, b, {
    delay: i * 90
  }))))));
}
Object.assign(window, {
  Features,
  ProductShowcase,
  Goals,
  MascotGuide,
  Bubble,
  FEATURES,
  GOAL_CHIPS,
  BUBBLES,
  SHOWCASE_POINTS
});