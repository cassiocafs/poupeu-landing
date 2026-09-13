const DS = window.PoupeuDesignSystem_d64c01;
const {
  Button,
  Card,
  Badge,
  Chip,
  Icon,
  Mascot,
  MascotMessage,
  InsightCard,
  FeatureCard,
  CTASection,
  SiteFooter,
  FinancialCard,
  StatCard,
  GoalCard,
  ProgressBar,
  TransactionItem,
  DonutChart,
  BarChart,
  LineChart
} = DS;

// Link único para todos os botões "Começar agora".
const APP_URL = 'https://app.poupeu.com/';
function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) {
        el.classList.add('pu-in');
        io.unobserve(el);
      }
    }), {
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const El = as;
  return /*#__PURE__*/React.createElement(El, {
    ref: ref,
    className: 'pu-rev ' + className,
    style: {
      transitionDelay: delay + 'ms',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'left',
  max = 620
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? max : undefined,
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "pu-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "pu-h2"
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "pu-lead",
    style: {
      margin: align === 'center' ? '16px auto 0' : '16px 0 0'
    }
  }, sub));
}
function PhoneFrame({
  children,
  width = 320,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pu-phone",
    style: {
      width,
      maxWidth: '100%',
      flex: 'none',
      background: 'var(--neutral-900)',
      borderRadius: 44,
      padding: 9,
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page-app)',
      borderRadius: 36,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px 4px',
      font: 'var(--weight-semibold) 11px/1 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal",
    size: 12
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 12
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, children)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '10px 0 2px',
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.7)'
    }
  }, label));
}
function AppGreeting({
  name = 'Marina'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: "happy",
    size: 34,
    framed: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Oi, ", name, " \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 13px/1.2 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "Agosto de 2026"))), /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    color: "var(--neutral-500)"
  }));
}
const CAT_SLICES = [{
  label: 'Casa',
  value: 1450,
  color: 'var(--cat-casa)'
}, {
  label: 'Alimentação',
  value: 980,
  color: 'var(--cat-alimentacao)'
}, {
  label: 'Transporte',
  value: 620,
  color: 'var(--cat-transporte)'
}, {
  label: 'Lazer',
  value: 410,
  color: 'var(--cat-lazer)'
}, {
  label: 'Outros',
  value: 430,
  color: 'var(--cat-outros)'
}];
const MONTH_BARS = [{
  label: 'Abr',
  entrou: 6100,
  saiu: 4200
}, {
  label: 'Mai',
  entrou: 6300,
  saiu: 4050
}, {
  label: 'Jun',
  entrou: 6200,
  saiu: 3980
}, {
  label: 'Jul',
  entrou: 6400,
  saiu: 4100
}, {
  label: 'Ago',
  entrou: 6500,
  saiu: 3890
}];
const BAR_SERIES = [{
  key: 'entrou',
  color: 'var(--chart-2)',
  label: 'Entrou'
}, {
  key: 'saiu',
  color: 'var(--chart-6)',
  label: 'Saiu'
}];
function ScreenHome({
  compact = false
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppGreeting, null), /*#__PURE__*/React.createElement(FinancialCard, {
    label: "Seu saldo",
    amount: "R$ 4.250,00",
    delta: "+8,4% este m\xEAs",
    footer: "Atualizado hoje, 9:12"
  }), /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "compact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, "Entrou e saiu"), /*#__PURE__*/React.createElement(BarChart, {
    data: MONTH_BARS,
    series: BAR_SERIES,
    height: 104
  })), compact ? /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Sal\xE1rio",
    category: "receita",
    amount: 6500,
    time: "01 ago"
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Mercado",
    category: "alimentacao",
    amount: -386.4,
    time: "09 ago"
  })) : /*#__PURE__*/React.createElement(InsightCard, null, "Voc\xEA gastou 12% menos com alimenta\xE7\xE3o este m\xEAs."));
}
function ScreenTransactions() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "Transa\xE7\xF5es"), /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 18,
    color: "var(--neutral-500)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['Todos', 'Receitas', 'Despesas'].map((c, i) => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    selected: i === 0,
    style: {
      padding: '0 11px',
      fontSize: 12,
      height: 30
    }
  }, c))), /*#__PURE__*/React.createElement(Card, {
    padding: "none",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Sal\xE1rio",
    category: "receita",
    amount: 6500,
    time: "01 ago"
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Aluguel",
    category: "casa",
    amount: -1450,
    time: "05 ago"
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Mercado",
    category: "alimentacao",
    amount: -386.4,
    time: "09 ago"
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Uber",
    category: "transporte",
    amount: -23.8,
    time: "Hoje"
  }), /*#__PURE__*/React.createElement(TransactionItem, {
    title: "Assinatura de streaming",
    category: "assinaturas",
    amount: -39.9,
    time: "Hoje"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "compact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, "Onde voc\xEA mais gasta"), /*#__PURE__*/React.createElement(DonutChart, {
    data: CAT_SLICES,
    size: 124,
    centerLabel: "Gastos",
    centerValue: "R$ 3.890"
  })));
}
function ScreenGoals() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, "Metas"), /*#__PURE__*/React.createElement(Icon, {
    name: "target",
    size: 18,
    color: "var(--neutral-500)"
  })), /*#__PURE__*/React.createElement(GoalCard, {
    name: "Minha viagem",
    icon: "plane",
    current: 3250,
    target: 5000,
    note: "Faltam R$ 1.750 para realizar."
  }), /*#__PURE__*/React.createElement(GoalCard, {
    name: "Minha reserva",
    icon: "piggy-bank",
    current: 2610,
    target: 6000
  }), /*#__PURE__*/React.createElement(GoalCard, {
    name: "Minha casa",
    icon: "house",
    current: 12000,
    target: 40000
  }));
}

// CTA de fechamento responsiva: no mobile empilha imagem, texto e depois o botão.
function ClosingCTA({
  title,
  subtitle,
  cta = 'Começar agora',
  mascot = 'encouraging'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pu-closing-cta"
  }, /*#__PURE__*/React.createElement(Mascot, {
    state: mascot,
    size: 132,
    className: "pu-closing-cta-mascot",
    style: {
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-closing-cta-body"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: '#fff'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-body-sm)',
      color: 'rgba(255,255,255,.8)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement(Button, {
    className: "pu-closing-cta-btn",
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    as: "a",
    href: APP_URL
  }, cta));
}
Object.assign(window, {
  DS,
  APP_URL,
  Button,
  Card,
  Badge,
  Chip,
  Icon,
  Mascot,
  MascotMessage,
  InsightCard,
  FeatureCard,
  CTASection,
  SiteFooter,
  FinancialCard,
  StatCard,
  GoalCard,
  ProgressBar,
  TransactionItem,
  DonutChart,
  BarChart,
  LineChart,
  Reveal,
  SectionHead,
  PhoneFrame,
  ClosingCTA,
  AppGreeting,
  ScreenHome,
  ScreenTransactions,
  ScreenGoals,
  CAT_SLICES,
  MONTH_BARS,
  BAR_SERIES
});