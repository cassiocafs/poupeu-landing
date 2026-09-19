const BASE_FEATURES = ['Multi usuários', 'Transações ilimitadas', 'Categorias ilimitadas', 'Importação de transações', 'Todos relatórios', 'Gestão de Orçamentos', 'Gestão de Metas'];
const PLANS = [{
  name: 'Grátis',
  price: 'R$ 0',
  period: 'para sempre',
  note: 'Para começar a entender seu dinheiro.',
  highlights: ['2 contas para transações'],
  features: BASE_FEATURES,
  cta: 'Começar de graça',
  variant: 'secondary'
}, {
  name: 'Leve',
  price: 'R$ 9,90',
  period: '/mês',
  note: 'Para quem tem dinheiro em vários lugares.',
  highlights: ['Contas ilimitadas para transações'],
  features: BASE_FEATURES,
  cta: 'Assinar o Leve',
  variant: 'secondary'
}, {
  name: 'Top',
  price: 'R$ 14,90',
  period: '/mês',
  note: 'Registre no WhatsApp, na hora do gasto.',
  highlights: ['Integração com Whatsapp', 'Contas ilimitadas para transações'],
  features: BASE_FEATURES,
  cta: 'Assinar o Top',
  variant: 'primary',
  badge: 'Mais escolhido',
  featured: true
}, {
  name: 'Master',
  price: 'R$ 19,90',
  period: '/mês',
  note: 'Suas contas conectadas, tudo em um lugar.',
  highlights: ['Integração com OpenFinance', 'Integração com Whatsapp', 'Contas ilimitadas para transações'],
  features: BASE_FEATURES,
  cta: 'Assinar o Master',
  variant: 'secondary'
}];
function PlanLine({
  children,
  strong,
  onDark
}) {
  return /*#__PURE__*/React.createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 18,
      height: 18,
      marginTop: 2,
      borderRadius: 'var(--radius-full)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: strong ? onDark ? 'var(--yellow-500)' : 'var(--green-600)' : onDark ? 'rgba(255,255,255,.14)' : 'var(--green-50, var(--cream-bg))'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    color: strong ? onDark ? 'var(--green-900)' : '#fff' : onDark ? 'rgba(255,255,255,.85)' : 'var(--green-600)'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: (strong ? 'var(--weight-semibold)' : 'var(--weight-regular)') + ' 14px/1.45 var(--font-sans)',
      color: onDark ? strong ? '#fff' : 'rgba(255,255,255,.78)' : strong ? 'var(--green-900)' : 'var(--text-body)'
    }
  }, children));
}
function PlanCard({
  plan
}) {
  const onDark = !!plan.featured;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: 28,
      borderRadius: 'var(--radius-xl, 20px)',
      background: onDark ? 'var(--green-900)' : 'var(--neutral-0)',
      border: '1px solid ' + (onDark ? 'var(--green-900)' : 'var(--border-subtle)'),
      boxShadow: onDark ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      minHeight: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-h4)',
      color: onDark ? '#fff' : 'var(--green-900)'
    }
  }, plan.name), plan.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 11px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--green-900)',
      background: 'var(--yellow-500)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, plan.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-extrabold) 34px/1 var(--font-numeric)',
      letterSpacing: 'var(--tracking-tight)',
      color: onDark ? '#fff' : 'var(--green-900)'
    }
  }, plan.price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: onDark ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, plan.period)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: 'var(--type-body-sm)',
      color: onDark ? 'rgba(255,255,255,.78)' : 'var(--text-body)',
      minHeight: 42,
      textWrap: 'pretty'
    }
  }, plan.note), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '22px 0',
      height: 1,
      background: onDark ? 'rgba(255,255,255,.16)' : 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, plan.highlights.map(f => /*#__PURE__*/React.createElement(PlanLine, {
    key: f,
    strong: true,
    onDark: onDark
  }, f)), plan.features.map(f => /*#__PURE__*/React.createElement(PlanLine, {
    key: f,
    onDark: onDark
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: onDark ? 'accent' : plan.variant,
    size: "md",
    as: "a",
    href: APP_URL
  }, plan.cta)));
}
function Pricing() {
  return /*#__PURE__*/React.createElement("section", {
    id: "planos",
    className: "pu-cream pu-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pu-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Planos",
    title: "Comece de gra\xE7a. Cres\xE7a quando fizer sentido.",
    sub: "Todo plano tem transa\xE7\xF5es, categorias, relat\xF3rios, or\xE7amentos e metas sem limite. Voc\xEA paga s\xF3 pelo que quiser a mais.",
    align: "center",
    max: 680
  }), /*#__PURE__*/React.createElement("div", {
    className: "pu-grid4",
    style: {
      marginTop: 56,
      alignItems: 'stretch'
    }
  }, PLANS.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.name,
    delay: i * 90,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(PlanCard, {
    plan: p
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200,
    style: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(MascotMessage, {
    state: "encouraging",
    mascotSize: 72
  }, "Sem contrato e sem pegadinha: voc\xEA troca ou cancela o plano quando quiser."))));
}
Object.assign(window, {
  Pricing,
  PlanCard,
  PlanLine,
  PLANS,
  BASE_FEATURES
});