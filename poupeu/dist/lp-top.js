const NAV = [{
  label: 'Produto',
  href: '#produto'
}, {
  label: 'Como funciona',
  href: '#como-funciona'
}, {
  label: 'Benefícios',
  href: '#beneficios'
}, {
  label: 'Metas',
  href: '#metas'
}];
function Header() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "pu-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-header-in"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "pu-nav",
    "aria-label": "Navega\xE7\xE3o principal"
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href
  }, n.label))), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Poupeu \u2014 in\xEDcio",
    className: "pu-logo",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mascot-cut/logo-horizontal.png",
    alt: "Poupeu",
    style: {
      height: 56,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "pu-header-actions",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pu-hide-sm"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    as: "a",
    href: APP_URL
  }, "Come\xE7ar agora")), /*#__PURE__*/React.createElement("button", {
    className: "pu-burger",
    "aria-expanded": open,
    "aria-label": open ? 'Fechar menu' : 'Abrir menu',
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'x' : 'menu',
    size: 22,
    color: "var(--green-900)"
  })))), /*#__PURE__*/React.createElement("div", {
    className: 'pu-mobile-menu' + (open ? ' open' : '')
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    href: n.href,
    onClick: () => setOpen(false)
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    as: "a",
    href: APP_URL,
    onClick: () => setOpen(false)
  }, "Come\xE7ar agora")));
}
function FloatCard({
  icon,
  label,
  value,
  style,
  cls = 'pu-float',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: cls + (className ? ' ' + className : ''),
    style: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding: '10px 14px',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-full)',
      background: 'var(--yellow-100)',
      color: 'var(--yellow-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--weight-bold) 14px/1.2 var(--font-numeric)',
      color: 'var(--text-primary)'
    }
  }, value)));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "pu-wrap pu-hero"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    icon: "paw-print",
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      padding: '7px 14px'
    }
  }, "Seu guia financeiro")), /*#__PURE__*/React.createElement("h1", {
    className: "pu-display",
    style: {
      margin: '20px 0 0'
    }
  }, "Seu dinheiro,", /*#__PURE__*/React.createElement("br", null), "do seu jeito."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead"
  }, "Organize suas finan\xE7as, acompanhe seus gastos e entenda melhor o seu dinheiro \u2014 de um jeito simples e sem complica\xE7\xE3o."), /*#__PURE__*/React.createElement("div", {
    className: "pu-hero-cta",
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right",
    as: "a",
    href: APP_URL
  }, "Come\xE7ar agora"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    as: "a",
    href: "#produto"
  }, "Conhe\xE7a o Poupeu")), /*#__PURE__*/React.createElement("p", {
    style: {
      width: '100%',
      margin: '16px 0 0',
      font: 'var(--weight-regular) 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Simples para come\xE7ar. Feito para acompanhar voc\xEA."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    className: "pu-hero-visual-wrap",
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-hero-blob",
    style: {
      position: 'absolute',
      inset: '-6% -4% 8%',
      background: 'var(--cream-bg)',
      borderRadius: '48% 42% 46% 44%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-hero-visual",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 352
  }, /*#__PURE__*/React.createElement(ScreenHome, null)), /*#__PURE__*/React.createElement(Mascot, {
    state: "welcome",
    size: 190,
    className: "pu-mascot-nudge pu-hero-mascot",
    style: {
      position: 'absolute',
      left: -132,
      bottom: -14,
      filter: 'drop-shadow(0 12px 24px rgba(13,91,46,.16))'
    }
  }), /*#__PURE__*/React.createElement(FloatCard, {
    icon: "target",
    label: "Minha viagem",
    value: "65%",
    className: "pu-hero-fc",
    style: {
      top: 44,
      right: -78
    }
  }), /*#__PURE__*/React.createElement(FloatCard, {
    icon: "piggy-bank",
    label: "Sobrou",
    value: "R$ 2.610",
    cls: "pu-float-b",
    className: "pu-hero-fc",
    style: {
      bottom: 96,
      right: -66
    }
  }))));
}
function BrandIntroduction() {
  return /*#__PURE__*/React.createElement("section", {
    id: "produto",
    className: "pu-cream pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap pu-split"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    className: "pu-eyebrow"
  }, "O seu guia"), /*#__PURE__*/React.createElement("h2", {
    className: "pu-h2"
  }, "Conhe\xE7a o Poupeu."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead",
    style: {
      font: 'var(--weight-semibold) 19px/1.5 var(--font-sans)',
      color: 'var(--green-900)'
    }
  }, "Seu guia financeiro para cuidar do seu dinheiro do seu jeito."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead"
  }, "Organizar dinheiro n\xE3o precisa ser complicado. O Poupeu acompanha voc\xEA, ajuda a entender o que est\xE1 acontecendo e mostra caminhos para tomar decis\xF5es melhores.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "roomy",
    radius: "var(--radius-card-special)",
    elevation: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: "thinking",
    size: 56,
    framed: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "Resumo de agosto"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Vamos olhar isso juntos?"))), /*#__PURE__*/React.createElement("div", {
    className: "pu-row",
    style: {
      gap: 10,
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Entrou",
    amount: "R$ 6.500",
    tone: "in"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Saiu",
    amount: "R$ 3.890",
    tone: "out"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Sobrou",
    amount: "R$ 2.610",
    tone: "left"
  })), /*#__PURE__*/React.createElement(DonutChart, {
    data: CAT_SLICES,
    size: 148,
    centerLabel: "Gastos",
    centerValue: "R$ 3.890"
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    icon: "trending-up",
    style: {
      position: 'absolute',
      top: -14,
      right: 16,
      boxShadow: 'var(--shadow-md)'
    }
  }, "12% menos com alimenta\xE7\xE3o")))));
}
const PERSONALITY = [{
  tag: 'Amigo',
  icon: 'heart-handshake',
  state: 'happy',
  title: 'Um amigo para suas finanças.',
  text: 'Próximo, acolhedor e sem julgamentos.'
}, {
  tag: 'Organizado',
  icon: 'layout-grid',
  state: 'thinking',
  title: 'Tudo no seu lugar.',
  text: 'Tenha uma visão clara do seu dinheiro sem complicação.'
}, {
  tag: 'Incentivador',
  icon: 'trophy',
  state: 'celebrating',
  title: 'Cada conquista conta.',
  text: 'Acompanhe seu progresso e continue avançando.'
}];
function BrandPersonality() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Personalidade",
    title: "Um guia, n\xE3o um fiscal.",
    sub: "O Poupeu \xE9 o mesmo companheiro em todo momento da sua vida financeira.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-grid3",
    style: {
      marginTop: 48
    }
  }, PERSONALITY.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.tag,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "roomy",
    radius: "var(--radius-card-feature)",
    interactive: true,
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: p.state,
    size: 64,
    framed: true
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    icon: p.icon
  }, p.tag)), /*#__PURE__*/React.createElement("h3", {
    className: "pu-h3",
    style: {
      font: 'var(--type-h4)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "pu-body",
    style: {
      font: 'var(--type-body-sm)'
    }
  }, p.text)))))));
}
Object.assign(window, {
  Header,
  Hero,
  BrandIntroduction,
  BrandPersonality,
  FloatCard,
  NAV
});