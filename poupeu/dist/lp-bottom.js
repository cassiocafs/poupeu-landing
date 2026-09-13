function NoJudgement() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap",
    style: {
      maxWidth: 880,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Mascot, {
    state: "thinking",
    size: 160,
    className: "pu-mascot-nudge",
    style: {
      margin: '0 auto 32px'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "pu-h2"
  }, "Seu dinheiro. Suas escolhas."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead",
    style: {
      margin: '20px auto 0',
      font: 'var(--weight-regular) 19px/1.6 var(--font-sans)'
    }
  }, "O Poupeu n\xE3o est\xE1 aqui para dizer como voc\xEA deve viver. Ele ajuda voc\xEA a entender suas escolhas para tomar decis\xF5es melhores \u2014 do seu jeito."))));
}
const STEPS = [{
  n: '1',
  icon: 'wallet',
  title: 'Cadastre seu dinheiro.',
  text: 'Adicione suas receitas e despesas.'
}, {
  n: '2',
  icon: 'chart-pie',
  title: 'Entenda seus gastos.',
  text: 'Veja para onde seu dinheiro está indo.'
}, {
  n: '3',
  icon: 'target',
  title: 'Cuide dos seus planos.',
  text: 'Crie metas e acompanhe seu progresso.'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "como-funciona",
    className: "pu-cream pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Como funciona",
    title: "Comece em poucos minutos.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-grid3",
    style: {
      marginTop: 56,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-hide-sm",
    style: {
      position: 'absolute',
      top: 27,
      left: '16%',
      right: '16%',
      height: 2,
      background: 'repeating-linear-gradient(90deg,var(--green-200) 0 10px,transparent 10px 20px)'
    }
  }), STEPS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i * 110,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-full)',
      background: 'var(--green-900)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--weight-bold) 20px/1 var(--font-numeric)',
      boxShadow: 'var(--shadow-md)'
    }
  }, s.n), /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "pu-h3",
    style: {
      font: 'var(--type-h4)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "pu-body",
    style: {
      font: 'var(--type-body-sm)',
      maxWidth: 260
    }
  }, s.text))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140,
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(ClosingCTA, {
    title: "Pronto para come\xE7ar do seu jeito?",
    subtitle: "Leva poucos minutos e o Poupeu segue com voc\xEA depois."
  }))));
}
const PROOF = [{
  label: 'Início',
  caption: 'Seu saldo e o resumo do mês.',
  screen: /*#__PURE__*/React.createElement(ScreenHome, {
    compact: true
  })
}, {
  label: 'Transações',
  caption: 'Tudo organizado por categoria.',
  screen: /*#__PURE__*/React.createElement(ScreenTransactions, null)
}, {
  label: 'Metas',
  caption: 'Seu progresso, passo a passo.',
  screen: /*#__PURE__*/React.createElement(ScreenGoals, null)
}];
function ProductProof() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Por dentro do app",
    title: "Simples de olhar. F\xE1cil de entender.",
    sub: "As mesmas informa\xE7\xF5es, sem ru\xEDdo: o que entrou, o que saiu e para onde voc\xEA est\xE1 indo.",
    align: "center",
    max: 660
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-trio",
    style: {
      marginTop: 56
    }
  }, PROOF.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.label,
    delay: i * 110,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    width: 296
  }, p.screen), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 16px/1.3 var(--font-sans)',
      color: 'var(--green-900)'
    }
  }, p.label), /*#__PURE__*/React.createElement("p", {
    className: "pu-body",
    style: {
      font: 'var(--type-body-sm)',
      marginTop: 4
    }
  }, p.caption)))))));
}
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--green-900)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 14,
      height: 14,
      borderRadius: 999,
      background: 'var(--yellow-500)',
      top: '18%',
      left: '8%',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--yellow-300)',
      bottom: '22%',
      left: '16%',
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'var(--yellow-500)',
      top: '26%',
      right: '10%',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap pu-split",
    style: {
      padding: '88px 24px',
      gap: 48,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h2", {
    className: "pu-display",
    style: {
      color: '#fff'
    }
  }, "Seu dinheiro.", /*#__PURE__*/React.createElement("br", null), "Do seu jeito."), /*#__PURE__*/React.createElement("p", {
    className: "pu-lead",
    style: {
      color: 'rgba(255,255,255,.82)'
    }
  }, "Comece a entender, organizar e cuidar melhor das suas finan\xE7as."), /*#__PURE__*/React.createElement("div", {
    className: "pu-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    as: "a",
    href: APP_URL
  }, "Come\xE7ar agora"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: "celebrating",
    size: 280,
    className: "pu-mascot-nudge pu-finalcta-mascot",
    style: {
      filter: 'drop-shadow(0 18px 32px rgba(0,0,0,.22))'
    }
  }))));
}
const FOOTER_COLUMNS = [{
  title: 'Produto',
  links: ['Produto', 'Como funciona', 'Benefícios']
}, {
  title: 'Legal',
  links: [{
    label: 'Privacidade',
    href: 'https://app.poupeu.com/privacidade'
  }, {
    label: 'Termos',
    href: 'https://app.poupeu.com/termos'
  }]
}];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream-50)',
      borderTop: '1px solid var(--cream-200)',
      padding: '48px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 4,
      paddingBottom: 28,
      borderBottom: '1px solid var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "Seu dinheiro, do seu jeito."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Organiza\xE7\xE3o financeira pessoal, feita no Brasil.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      paddingTop: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/mascot-cut/logo-horizontal.png",
    alt: "Poupeu",
    style: {
      height: 56,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, FOOTER_COLUMNS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.title), c.links.map(l => {
    const label = typeof l === 'string' ? l : l.label;
    const href = typeof l === 'string' ? '#' : l.href || '#';
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: href,
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-body)',
        fontWeight: 'var(--weight-regular)'
      }
    }, label);
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      textAlign: 'center',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Poupeu. Todos os direitos reservados."));
}
Object.assign(window, {
  NoJudgement,
  HowItWorks,
  ProductProof,
  FinalCTA,
  Footer,
  STEPS,
  PROOF
});