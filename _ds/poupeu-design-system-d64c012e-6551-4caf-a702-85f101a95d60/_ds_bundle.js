/* @ds-bundle: {"format":4,"namespace":"PoupeuDesignSystem_d64c01","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"BottomSheet","sourcePath":"components/feedback/BottomSheet.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"InsightCard","sourcePath":"components/feedback/InsightCard.jsx"},{"name":"Mascot","sourcePath":"components/feedback/Mascot.jsx"},{"name":"MascotMessage","sourcePath":"components/feedback/MascotMessage.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"BarChart","sourcePath":"components/finance/BarChart.jsx"},{"name":"CategoryIcon","sourcePath":"components/finance/CategoryIcon.jsx"},{"name":"DonutChart","sourcePath":"components/finance/DonutChart.jsx"},{"name":"FinancialCard","sourcePath":"components/finance/FinancialCard.jsx"},{"name":"GoalCard","sourcePath":"components/finance/GoalCard.jsx"},{"name":"LineChart","sourcePath":"components/finance/LineChart.jsx"},{"name":"ProgressBar","sourcePath":"components/finance/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/finance/StatCard.jsx"},{"name":"TransactionItem","sourcePath":"components/finance/TransactionItem.jsx"},{"name":"CATEGORIES","sourcePath":"components/finance/categories.js"},{"name":"CATEGORY_LIST","sourcePath":"components/finance/categories.js"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"MoneyInput","sourcePath":"components/forms/MoneyInput.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"CTASection","sourcePath":"components/marketing/CTASection.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"SiteFooter","sourcePath":"components/marketing/SiteFooter.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"APP_NAV","sourcePath":"components/navigation/BottomNavigation.jsx"},{"name":"BottomNavigation","sourcePath":"components/navigation/BottomNavigation.jsx"},{"name":"Sidebar","sourcePath":"components/navigation/Sidebar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"cd943ccc30fe","components/core/Badge.jsx":"69358ad5930b","components/core/Button.jsx":"bc003c0fc73b","components/core/Card.jsx":"c0fe91db44df","components/core/Chip.jsx":"2e14684e7259","components/core/Icon.jsx":"488a0347a05f","components/core/IconButton.jsx":"2b99ce41d6ca","components/core/Tabs.jsx":"f957395b7579","components/core/Tooltip.jsx":"4118a1812c0c","components/feedback/BottomSheet.jsx":"c1796c74c32f","components/feedback/EmptyState.jsx":"768c0d4bcd40","components/feedback/InsightCard.jsx":"fbc084afcfd6","components/feedback/Mascot.jsx":"0cb97ac4c8d2","components/feedback/MascotMessage.jsx":"3fb69eeaaa5e","components/feedback/Modal.jsx":"edb38edf9895","components/feedback/Toast.jsx":"f9df72b84745","components/finance/BarChart.jsx":"17cecb174c8b","components/finance/CategoryIcon.jsx":"5245ebb49bc9","components/finance/DonutChart.jsx":"f5f5c4d647f4","components/finance/FinancialCard.jsx":"34b072926aba","components/finance/GoalCard.jsx":"529f970652d8","components/finance/LineChart.jsx":"c68c3a0f147d","components/finance/ProgressBar.jsx":"a60141601415","components/finance/StatCard.jsx":"e011813b4f6d","components/finance/TransactionItem.jsx":"3075965f72ea","components/finance/categories.js":"64cf86673cbd","components/finance/money.js":"d3ac05d79536","components/forms/DatePicker.jsx":"bd45d29062e0","components/forms/Field.jsx":"a92f428699a3","components/forms/Input.jsx":"3828c4148bf4","components/forms/MoneyInput.jsx":"0c6fba8828dc","components/forms/SearchInput.jsx":"cb146e2767d2","components/forms/Select.jsx":"d6a3297adaed","components/forms/Switch.jsx":"e84baa68db86","components/forms/Textarea.jsx":"030cd35ff0bd","components/marketing/CTASection.jsx":"72e14f4fc7a6","components/marketing/FeatureCard.jsx":"66a67f6fd456","components/marketing/SiteFooter.jsx":"3768c9a3d72c","components/navigation/AppHeader.jsx":"d90d824d01ef","components/navigation/BottomNavigation.jsx":"d99ac055335a","components/navigation/Sidebar.jsx":"926649f2d7fe"},"inlinedExternals":[],"unexposedExports":[{"name":"bareInput","sourcePath":"components/forms/Field.jsx"},{"name":"fieldBox","sourcePath":"components/forms/Field.jsx"},{"name":"formatBRL","sourcePath":"components/finance/money.js"},{"name":"formatPercent","sourcePath":"components/finance/money.js"}]} */

(() => {

const __ds_ns = (window.PoupeuDesignSystem_d64c01 = window.PoupeuDesignSystem_d64c01 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: {
    bg: 'var(--surface-card)',
    border: 'var(--border-subtle)',
    fg: 'var(--text-body)'
  },
  cream: {
    bg: 'var(--cream-50)',
    border: 'var(--cream-200)',
    fg: 'var(--text-body)'
  },
  brand: {
    bg: 'var(--green-900)',
    border: 'transparent',
    fg: 'rgba(255,255,255,.82)'
  },
  soft: {
    bg: 'var(--green-100)',
    border: 'transparent',
    fg: 'var(--text-body)'
  },
  sunken: {
    bg: 'var(--surface-sunken)',
    border: 'var(--border-subtle)',
    fg: 'var(--text-body)'
  }
};
const PAD = {
  none: 0,
  compact: 'var(--card-padding-compact)',
  default: 'var(--card-padding)',
  roomy: 'var(--space-8)'
};
function Card({
  children,
  tone = 'default',
  padding = 'default',
  radius = 'var(--radius-card)',
  elevation = 'sm',
  interactive = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.default;
  const [hover, setHover] = React.useState(false);
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      borderRadius: radius,
      padding: PAD[padding] ?? padding,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : shadow,
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.428.0/icons/';

/** Outline glyph from the Lucide set (see readme ICONOGRAPHY — CDN substitution). */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: `url(${CDN}${name}.svg)`,
      maskImage: `url(${CDN}${name}.svg)`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
};
function Avatar({
  src,
  name,
  size = 'md',
  icon = 'user',
  tone = 'cream',
  style,
  ...rest
}) {
  const d = S[size] || size;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase() : null;
  const palette = tone === 'brand' ? ['var(--green-900)', '#fff'] : ['var(--cream-100)', 'var(--green-900)'];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: d,
      height: d,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: palette[0],
      color: palette[1],
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: `var(--weight-semibold) ${Math.round(d * 0.38)}px/1 var(--font-sans)`,
      border: '1.5px solid var(--border-subtle)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(d * 0.45)
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  neutral: ['var(--neutral-100)', 'var(--neutral-700)'],
  success: ['var(--success-100)', 'var(--success-600)'],
  warning: ['var(--warning-100)', 'var(--warning-600)'],
  error: ['var(--error-100)', 'var(--error-600)'],
  info: ['var(--info-100)', 'var(--info-600)'],
  brand: ['var(--green-900)', '#fff'],
  accent: ['var(--yellow-100)', 'var(--yellow-700)'],
  onBrand: ['rgba(255,255,255,.16)', '#fff']
};
function Badge({
  children,
  tone = 'neutral',
  icon,
  size = 'md',
  style,
  ...rest
}) {
  const [bg, fg] = T[tone] || T.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: bg,
      color: fg,
      padding: sm ? '3px 8px' : '5px 12px',
      borderRadius: 'var(--radius-full)',
      font: `var(--weight-semibold) ${sm ? 11 : 13}px/1.2 var(--font-sans)`,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 12 : 14
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    bg: 'var(--green-900)',
    fg: '#fff',
    border: 'transparent',
    hover: 'var(--color-primary-hover)',
    active: 'var(--color-primary-active)'
  },
  secondary: {
    bg: 'var(--cream-100)',
    fg: 'var(--green-900)',
    border: 'transparent',
    hover: 'var(--cream-200)',
    active: '#E5CFA3'
  },
  tertiary: {
    bg: 'transparent',
    fg: 'var(--green-900)',
    border: 'transparent',
    hover: 'var(--green-100)',
    active: 'var(--green-200)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--green-900)',
    border: 'var(--border-default)',
    hover: 'var(--green-100)',
    active: 'var(--green-200)'
  },
  accent: {
    bg: 'var(--yellow-500)',
    fg: 'var(--green-900)',
    border: 'transparent',
    hover: 'var(--yellow-600)',
    active: 'var(--yellow-700)'
  },
  destructive: {
    bg: 'var(--error-500)',
    fg: '#fff',
    border: 'transparent',
    hover: 'var(--error-600)',
    active: '#9A241C'
  }
};
const SIZES = {
  sm: {
    h: 'var(--control-height-sm)',
    px: 16,
    fs: 14
  },
  md: {
    h: 'var(--control-height)',
    px: 24,
    fs: 15
  },
  lg: {
    h: 'var(--control-height-lg)',
    px: 28,
    fs: 16
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  as = 'button',
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const off = disabled || loading;
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? off : undefined,
    "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      minWidth: 'var(--touch-min)',
      font: `var(--weight-semibold) ${s.fs}px/1 var(--font-sans)`,
      color: off ? 'var(--text-disabled)' : v.fg,
      background: off ? 'var(--neutral-100)' : press ? v.active : hover ? v.hover : v.bg,
      border: `1.5px solid ${off ? 'transparent' : v.border}`,
      borderRadius: 'var(--radius-button)',
      cursor: off ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-hover), transform var(--duration-fast) var(--ease-standard)',
      transform: press && !off ? 'translateY(1px)' : 'none',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    color: off ? 'var(--text-disabled)' : v.fg
  }), !loading && iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.fs + 3
  }), /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 3
  }));
}
function Spinner({
  color
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, '@keyframes poupeu-spin{to{transform:rotate(360deg)}}'), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: '50%',
      flex: 'none',
      border: `2px solid ${color}`,
      borderTopColor: 'transparent',
      animation: 'poupeu-spin 700ms linear infinite'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  selected = false,
  icon,
  trailingIcon,
  onClick,
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": selected,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 38,
      padding: '0 16px',
      borderRadius: 'var(--radius-chip)',
      border: `1.5px solid ${selected ? 'var(--green-900)' : 'var(--border-default)'}`,
      background: selected ? 'var(--green-900)' : hover ? 'var(--green-100)' : 'var(--surface-card)',
      color: selected ? '#fff' : disabled ? 'var(--text-disabled)' : 'var(--text-body)',
      font: 'var(--type-label)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), children, trailingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: 15
  }));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  ghost: {
    bg: 'transparent',
    fg: 'var(--green-900)',
    hover: 'var(--green-100)'
  },
  soft: {
    bg: 'var(--neutral-100)',
    fg: 'var(--green-900)',
    hover: 'var(--neutral-200)'
  },
  solid: {
    bg: 'var(--green-900)',
    fg: '#fff',
    hover: 'var(--color-primary-hover)'
  },
  accent: {
    bg: 'var(--yellow-500)',
    fg: 'var(--green-900)',
    hover: 'var(--yellow-600)'
  },
  onBrand: {
    bg: 'rgba(255,255,255,.14)',
    fg: '#fff',
    hover: 'rgba(255,255,255,.24)'
  }
};
const S = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'circle',
  disabled,
  style,
  ...rest
}) {
  const v = V[variant] || V.ghost;
  const d = S[size] || S.md;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      padding: 0,
      border: 'none',
      borderRadius: shape === 'circle' ? 'var(--radius-full)' : 'var(--radius-md)',
      background: disabled ? 'var(--neutral-100)' : hover ? v.hover : v.bg,
      color: disabled ? 'var(--text-disabled)' : v.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(d * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  items,
  value,
  onChange,
  variant = 'underline',
  fullWidth = false,
  style
}) {
  const active = value ?? items[0]?.value;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'underline' ? 24 : 4,
      background: variant === 'segmented' ? 'var(--neutral-100)' : 'transparent',
      padding: variant === 'segmented' ? 4 : 0,
      borderRadius: variant === 'segmented' ? 'var(--radius-full)' : 0,
      borderBottom: variant === 'underline' ? '1px solid var(--divider)' : 'none',
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: fullWidth ? 1 : 'none',
        border: 'none',
        cursor: 'pointer',
        background: variant === 'segmented' ? on ? 'var(--surface-card)' : 'transparent' : 'transparent',
        color: on ? 'var(--green-900)' : 'var(--text-muted)',
        font: `var(--weight-${on ? 'semibold' : 'medium'}) 15px/1 var(--font-sans)`,
        padding: variant === 'segmented' ? '10px 18px' : '0 0 12px',
        borderRadius: variant === 'segmented' ? 'var(--radius-full)' : 0,
        boxShadow: variant === 'segmented' && on ? 'var(--shadow-sm)' : 'none',
        borderBottom: variant === 'underline' ? `2.5px solid ${on ? 'var(--green-900)' : 'transparent'}` : 'none',
        marginBottom: variant === 'underline' ? -1 : 0,
        transition: 'var(--transition-hover)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = 'top',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      background: 'var(--neutral-900)',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--type-caption)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: open ? 1 : 0,
      transition: `opacity var(--duration-fast) var(--ease-standard)`,
      boxShadow: 'var(--shadow-md)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/BottomSheet.jsx
try { (() => {
function BottomSheet({
  open = true,
  title,
  children,
  actions,
  onClose,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      background: 'var(--overlay)',
      display: 'flex',
      alignItems: 'flex-end'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sheet) var(--radius-sheet) 0 0',
      boxShadow: 'var(--shadow-lg)',
      padding: '12px 20px 24px',
      maxHeight: '88%',
      overflowY: 'auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 4,
      borderRadius: 'var(--radius-full)',
      background: 'var(--neutral-300)',
      margin: '0 auto 16px'
    }
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, title), children, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 20
    }
  }, actions)));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Mascot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Poupeu, the caramelo guide (§21). One illustration per emotional state. */
const FILES = {
  happy: 'happy.png',
  encouraging: 'encouraging.png',
  celebrating: 'celebrating.png',
  surprised: 'surprised.png',
  thinking: 'thinking.png',
  explaining: 'thinking.png',
  warning: 'surprised.png',
  welcome: 'welcome.png',
  standing: 'standing.png'
};
const S = {
  xs: 32,
  sm: 44,
  md: 64,
  lg: 96,
  xl: 140,
  hero: 260
};
function Mascot({
  state = 'happy',
  size = 'md',
  basePath,
  framed = false,
  style,
  alt,
  ...rest
}) {
  const base = basePath || typeof window !== 'undefined' && window.POUPEU_ASSET_BASE || 'assets/mascot/';
  const d = S[size] || size;
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: base + (FILES[state] || FILES.happy),
    alt: alt ?? `Poupeu ${state}`,
    style: {
      width: framed ? '86%' : d,
      height: 'auto',
      flex: 'none',
      ...(framed ? {} : style)
    }
  }, rest));
  if (!framed) return img;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: 'var(--cream-100)',
      display: 'inline-flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
      ...style
    }
  }, img);
}
Object.assign(__ds_scope, { Mascot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Mascot.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  title = 'Vamos começar?',
  children,
  state = 'welcome',
  action,
  basePath,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8,
      padding: '32px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mascot, {
    state: state,
    size: "xl",
    basePath: basePath,
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 320,
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InsightCard.jsx
try { (() => {
/** "Dica do Poupeu" (§37): small mascot, an observation, an optional CTA. */
function InsightCard({
  title = 'Dica do Poupeu',
  children,
  cta,
  onCta,
  state = 'encouraging',
  basePath,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cream-100)',
      borderRadius: 'var(--radius-card-special)',
      padding: '20px 132px 20px 20px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 16px/1.2 var(--font-sans)',
      color: 'var(--green-900)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lightbulb",
    size: 16,
    color: "var(--yellow-600)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      maxWidth: 320
    }
  }, children), cta && /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 14,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--weight-semibold) 14px/1 var(--font-sans)',
      color: 'var(--green-900)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  })), /*#__PURE__*/React.createElement(__ds_scope.Mascot, {
    state: state,
    size: 124,
    basePath: basePath,
    style: {
      position: 'absolute',
      right: -6,
      bottom: -8,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MascotMessage.jsx
try { (() => {
const TONES = {
  cream: {
    bg: 'var(--cream-50)',
    border: 'var(--cream-200)',
    fg: 'var(--text-body)',
    title: 'var(--text-primary)'
  },
  soft: {
    bg: 'var(--green-100)',
    border: 'transparent',
    fg: 'var(--text-body)',
    title: 'var(--green-900)'
  },
  brand: {
    bg: 'var(--green-900)',
    border: 'transparent',
    fg: 'rgba(255,255,255,.85)',
    title: '#fff'
  },
  white: {
    bg: 'var(--surface-card)',
    border: 'var(--border-subtle)',
    fg: 'var(--text-body)',
    title: 'var(--text-primary)'
  }
};

/** Mascot + title + message + optional CTA (§22). The product's voice, made visible. */
function MascotMessage({
  title,
  children,
  state = 'happy',
  tone = 'cream',
  cta,
  onCta,
  mascotSize = 'md',
  layout = 'row',
  basePath,
  style
}) {
  const t = TONES[tone] || TONES.cream;
  const column = layout === 'column';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: column ? 'column' : 'row',
      alignItems: column ? 'center' : 'center',
      gap: 16,
      textAlign: column ? 'center' : 'left',
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-card-feature)',
      padding: 'var(--card-padding-compact)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mascot, {
    state: state,
    size: mascotSize,
    basePath: basePath
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.35 var(--font-sans)',
      color: t.title,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: t.fg
    }
  }, children), cta && /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 12,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--weight-semibold) 14px/1 var(--font-sans)',
      color: tone === 'brand' ? '#fff' : 'var(--green-900)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  }))));
}
Object.assign(__ds_scope, { MascotMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MascotMessage.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  description,
  children,
  actions,
  onClose,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      background: 'var(--overlay)',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-modal)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20,
    color: "var(--text-muted)"
  }))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 0'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: 24
    }
  }, actions)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  success: {
    icon: 'circle-check',
    color: 'var(--success-600)',
    bg: 'var(--success-100)'
  },
  info: {
    icon: 'info',
    color: 'var(--info-600)',
    bg: 'var(--info-100)'
  },
  warning: {
    icon: 'triangle-alert',
    color: 'var(--warning-600)',
    bg: 'var(--warning-100)'
  },
  error: {
    icon: 'circle-x',
    color: 'var(--error-600)',
    bg: 'var(--error-100)'
  }
};
function Toast({
  tone = 'success',
  children,
  action,
  onAction,
  onClose,
  style
}) {
  const t = T[tone] || T.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: '14px 16px',
      minWidth: 300,
      maxWidth: 440,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flex: 'none',
      borderRadius: 'var(--radius-full)',
      background: t.bg,
      color: t.color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--type-body-sm)',
      color: 'var(--text-primary)'
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      font: 'var(--weight-semibold) 14px/1 var(--font-sans)',
      color: 'var(--green-900)'
    }
  }, action), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/finance/LineChart.jsx
try { (() => {
/** Balance-over-time line (§18): one series, soft area fill, no axis chrome. */
function LineChart({
  data = [],
  height = 150,
  color = 'var(--green-600)',
  fill = 'rgba(31,163,74,.12)',
  style
}) {
  const vals = data.map(d => Number(d.value) || 0);
  const max = Math.max(...vals, 1),
    min = Math.min(...vals, 0);
  const w = 300,
    h = 100;
  const pt = (v, i) => [i / Math.max(1, data.length - 1) * w, h - (v - min) / (max - min || 1) * h];
  const line = vals.map((v, i) => pt(v, i).join(',')).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height,
      display: 'block'
    },
    role: "img",
    "aria-label": "Evolu\xE7\xE3o do saldo"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: `0,${h} ${line} ${w},${h}`,
    fill: fill
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: color,
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8
    }
  }, data.map(d => /*#__PURE__*/React.createElement("span", {
    key: d.label,
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, d.label))));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/finance/ProgressBar.jsx
try { (() => {
/** Goal progress track (§19). Green while progressing, yellow near the finish, green + check when done. */
function ProgressBar({
  value = 0,
  max = 100,
  size = 'md',
  showValue = false,
  label,
  tone,
  style
}) {
  const pct = Math.max(0, Math.min(100, Number(value) / Number(max || 1) * 100));
  const state = tone || (pct >= 100 ? 'complete' : pct >= 85 ? 'near' : 'progress');
  const fill = state === 'complete' ? 'var(--green-600)' : state === 'near' ? 'var(--yellow-500)' : 'var(--green-600)';
  const h = size === 'sm' ? 6 : size === 'lg' ? 14 : 10;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      color: state === 'complete' ? 'var(--success-600)' : 'var(--text-body)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, state === 'complete' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-check",
    size: 13
  }), Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": Math.round(pct),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label,
    style: {
      height: h,
      background: 'var(--chart-track)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-inset-track)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: fill,
      borderRadius: 'var(--radius-full)',
      transition: 'var(--transition-progress)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/finance/categories.js
try { (() => {
/** The ten canonical spending categories (§17): name, Lucide glyph, colour tokens. */
const CATEGORIES = {
  alimentacao: {
    label: 'Alimentação',
    icon: 'utensils',
    color: 'var(--cat-alimentacao)',
    bg: 'var(--cat-alimentacao-bg)'
  },
  casa: {
    label: 'Casa',
    icon: 'house',
    color: 'var(--cat-casa)',
    bg: 'var(--cat-casa-bg)'
  },
  transporte: {
    label: 'Transporte',
    icon: 'car-front',
    color: 'var(--cat-transporte)',
    bg: 'var(--cat-transporte-bg)'
  },
  compras: {
    label: 'Compras',
    icon: 'shopping-bag',
    color: 'var(--cat-compras)',
    bg: 'var(--cat-compras-bg)'
  },
  lazer: {
    label: 'Lazer',
    icon: 'party-popper',
    color: 'var(--cat-lazer)',
    bg: 'var(--cat-lazer-bg)'
  },
  saude: {
    label: 'Saúde',
    icon: 'heart-pulse',
    color: 'var(--cat-saude)',
    bg: 'var(--cat-saude-bg)'
  },
  educacao: {
    label: 'Educação',
    icon: 'graduation-cap',
    color: 'var(--cat-educacao)',
    bg: 'var(--cat-educacao-bg)'
  },
  assinaturas: {
    label: 'Assinaturas',
    icon: 'repeat',
    color: 'var(--cat-assinaturas)',
    bg: 'var(--cat-assinaturas-bg)'
  },
  viagem: {
    label: 'Viagem',
    icon: 'plane',
    color: 'var(--cat-viagem)',
    bg: 'var(--cat-viagem-bg)'
  },
  outros: {
    label: 'Outros',
    icon: 'circle-ellipsis',
    color: 'var(--cat-outros)',
    bg: 'var(--cat-outros-bg)'
  },
  receita: {
    label: 'Receita',
    icon: 'banknote',
    color: 'var(--green-600)',
    bg: 'var(--green-100)'
  }
};
const CATEGORY_LIST = Object.entries(CATEGORIES).map(([key, v]) => ({
  key,
  ...v
}));
Object.assign(__ds_scope, { CATEGORIES, CATEGORY_LIST });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/categories.js", error: String((e && e.message) || e) }); }

// components/finance/CategoryIcon.jsx
try { (() => {
const S = {
  sm: 32,
  md: 44,
  lg: 52
};
function CategoryIcon({
  category = 'outros',
  size = 'md',
  shape = 'rounded',
  style
}) {
  const c = __ds_scope.CATEGORIES[category] || __ds_scope.CATEGORIES.outros;
  const d = S[size] || size;
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: d,
      height: d,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: c.bg,
      color: c.color,
      borderRadius: shape === 'circle' ? 'var(--radius-full)' : 'var(--radius-md)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: Math.round(d * 0.48)
  }));
}
Object.assign(__ds_scope, { CategoryIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/CategoryIcon.jsx", error: String((e && e.message) || e) }); }

// components/finance/money.js
try { (() => {
/** Brazilian currency + percentage helpers shared by the finance components. */
function formatBRL(value, {
  cents = true,
  sign = 'auto'
} = {}) {
  const n = Math.abs(Number(value) || 0);
  const body = n.toLocaleString('pt-BR', {
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0
  });
  const s = sign === 'never' ? '' : sign === 'always' || sign === 'auto' && Number(value) < 0 ? Number(value) < 0 ? '- ' : '+ ' : '';
  return `${s}R$ ${body}`;
}
function formatPercent(value, digits = 1) {
  return `${Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })}%`;
}
Object.assign(__ds_scope, { formatBRL, formatPercent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/money.js", error: String((e && e.message) || e) }); }

// components/finance/BarChart.jsx
try { (() => {
/** Monthly comparison bars (§18). Grouped in/out or a single series. */
function BarChart({
  data = [],
  height = 160,
  series = [{
    key: 'value',
    color: 'var(--chart-1)',
    label: ''
  }],
  style
}) {
  const max = Math.max(...data.flatMap(d => series.map(s => Number(d[s.key]) || 0)), 1);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height,
      padding: '0 2px'
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 6,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4,
      height: '100%'
    },
    title: `${d.label}: ${__ds_scope.formatBRL(d[series[0].key])}`
  }, series.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    style: {
      flex: 1,
      height: `${(Number(d[s.key]) || 0) / max * 100}%`,
      background: s.color,
      borderRadius: '6px 6px 3px 3px',
      minHeight: 4,
      transition: 'height var(--duration-slow) var(--ease-standard)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, d.label)))), series.some(s => s.label) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 12
    }
  }, series.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.key,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: s.color
    }
  }), s.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/finance/DonutChart.jsx
try { (() => {
const PALETTE = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)'];

/** Category breakdown donut (§18) with a total in the hole and a legend. */
function DonutChart({
  data = [],
  size = 168,
  thickness = 22,
  centerLabel = 'Total',
  centerValue,
  legend = true,
  style
}) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    },
    role: "img",
    "aria-label": `${centerLabel}: ${centerValue ?? __ds_scope.formatBRL(total)}`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--chart-track)",
    strokeWidth: thickness
  }), data.map((d, i) => {
    const len = d.value / total * c;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: d.label,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: d.color || PALETTE[i % PALETTE.length],
      strokeWidth: thickness,
      strokeDasharray: `${len} ${c - len}`,
      strokeDashoffset: -offset,
      strokeLinecap: "butt"
    });
    offset += len;
    return el;
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, centerLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 19px/1.2 var(--font-numeric)',
      color: 'var(--text-primary)'
    }
  }, centerValue ?? __ds_scope.formatBRL(total, {
    cents: false,
    sign: 'never'
  })))), legend && /*#__PURE__*/React.createElement("ul", {
    style: {
      flex: 1,
      minWidth: 190,
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("li", {
    key: d.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      flex: 'none',
      background: d.color || PALETTE[i % PALETTE.length]
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--text-body)'
    }
  }, d.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, __ds_scope.formatBRL(d.value, {
    cents: false,
    sign: 'never'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      width: 34,
      textAlign: 'right'
    }
  }, Math.round(d.value / total * 100), "%")))));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/finance/FinancialCard.jsx
try { (() => {
/** The balance hero (§15). One per screen, always at the top of the hierarchy. */
function FinancialCard({
  label = 'Seu saldo',
  amount,
  currency = true,
  delta,
  deltaTone = 'success',
  tone = 'brand',
  action,
  onAction,
  onToggleVisibility,
  hidden = false,
  footer,
  style
}) {
  const onBrand = tone === 'brand';
  const value = typeof amount === 'number' ? __ds_scope.formatBRL(amount, {
    sign: 'never'
  }) : amount;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    padding: "default",
    radius: "var(--radius-card-special)",
    elevation: onBrand ? 'md' : 'sm',
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: onBrand ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, label), onToggleVisibility && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: hidden ? 'eye-off' : 'eye',
    label: hidden ? 'Mostrar saldo' : 'Esconder saldo',
    size: "sm",
    variant: onBrand ? 'onBrand' : 'ghost',
    onClick: onToggleVisibility
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-money-lg)',
      letterSpacing: 'var(--tracking-tight)',
      color: onBrand ? '#fff' : 'var(--text-primary)',
      margin: '6px 0 16px'
    }
  }, hidden ? '•••••' : currency ? value : amount), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, delta && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: onBrand ? 'onBrand' : deltaTone,
    icon: deltaTone === 'error' ? 'arrow-down' : 'arrow-up'
  }, delta), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      border: `1.5px solid ${onBrand ? 'rgba(255,255,255,.3)' : 'var(--border-default)'}`,
      background: 'transparent',
      color: onBrand ? '#fff' : 'var(--green-900)',
      borderRadius: 'var(--radius-full)',
      padding: '9px 18px',
      font: 'var(--weight-semibold) 14px/1 var(--font-sans)',
      cursor: 'pointer',
      transition: 'var(--transition-hover)'
    }
  }, action)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      font: 'var(--type-body-sm)',
      color: onBrand ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, footer));
}
Object.assign(__ds_scope, { FinancialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/FinancialCard.jsx", error: String((e && e.message) || e) }); }

// components/finance/GoalCard.jsx
try { (() => {
/** Goal card (§20): icon, name, current / target, percentage, progress. */
function GoalCard({
  name,
  icon = 'plane',
  current = 0,
  target = 0,
  note,
  onClick,
  style
}) {
  const pct = target ? Math.min(100, current / target * 100) : 0;
  const done = pct >= 100;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: "cream",
    padding: "default",
    radius: "var(--radius-card-feature)",
    interactive: !!onClick,
    onClick: onClick,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: done ? 'var(--green-100)' : 'var(--neutral-0)',
      color: 'var(--green-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: done ? 'circle-check' : icon,
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 20px/1.2 var(--font-numeric)',
      color: 'var(--text-primary)'
    }
  }, __ds_scope.formatBRL(current, {
    sign: 'never'
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "de ", __ds_scope.formatBRL(target, {
    cents: false,
    sign: 'never'
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 15px/1 var(--font-numeric)',
      color: done ? 'var(--success-600)' : 'var(--green-900)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: current,
    max: target
  }), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, note));
}
Object.assign(__ds_scope, { GoalCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/GoalCard.jsx", error: String((e && e.message) || e) }); }

// components/finance/StatCard.jsx
try { (() => {
const TONES = {
  in: {
    icon: 'arrow-down',
    color: 'var(--green-600)',
    bg: 'var(--green-100)'
  },
  out: {
    icon: 'arrow-up',
    color: 'var(--neutral-700)',
    bg: 'var(--neutral-100)'
  },
  left: {
    icon: 'refresh-cw',
    color: 'var(--green-900)',
    bg: 'var(--green-100)'
  },
  saved: {
    icon: 'piggy-bank',
    color: 'var(--yellow-700)',
    bg: 'var(--yellow-100)'
  },
  alert: {
    icon: 'triangle-alert',
    color: 'var(--error-600)',
    bg: 'var(--error-100)'
  }
};

/** Compact three-up metric used in "Resumo do mês": Entrou · Saiu · Sobrou. */
function StatCard({
  label,
  amount,
  tone = 'out',
  icon,
  caption,
  style
}) {
  const t = TONES[tone] || TONES.out;
  const value = typeof amount === 'number' ? __ds_scope.formatBRL(amount, {
    sign: 'never'
  }) : amount;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--card-padding-compact)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      textAlign: 'center',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-full)',
      background: t.bg,
      color: t.color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-bold) 17px/1.2 var(--font-numeric)',
      color: tone === 'in' ? 'var(--money-in)' : 'var(--text-primary)'
    }
  }, value), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/finance/TransactionItem.jsx
try { (() => {
/** A single movement row (§16). Income is green and signed; ordinary expenses stay neutral. */
function TransactionItem({
  title,
  category = 'outros',
  amount,
  time,
  direction,
  note,
  onClick,
  showChevron = false,
  style
}) {
  const dir = direction || (Number(amount) >= 0 ? 'in' : 'out');
  const value = typeof amount === 'number' ? __ds_scope.formatBRL(Math.abs(amount), {
    sign: 'never'
  }) : String(amount).replace(/^[-+]\s*/, '');
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 4px',
      background: hover && onClick ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: 'var(--radius-md)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CategoryIcon, {
    category: category
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.35 var(--font-sans)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, (__ds_scope.CATEGORIES[category] || __ds_scope.CATEGORIES.outros).label, note ? ` · ${note}` : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.35 var(--font-numeric)',
      color: dir === 'in' ? 'var(--money-in)' : 'var(--money-out)'
    }
  }, dir === 'in' ? '+ ' : '- ', value), time && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, time)), showChevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--text-muted)"
  }));
}
Object.assign(__ds_scope, { TransactionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/TransactionItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-primary)'
    }
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--type-caption)',
      color: 'var(--error-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-alert",
    size: 13
  }), error) : hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
function fieldBox({
  focus,
  error,
  disabled
}) {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    height: 'var(--control-height)',
    padding: '0 14px',
    background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
    border: `1.5px solid ${error ? 'var(--error-500)' : focus ? 'var(--green-600)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-input)',
    boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
    transition: 'var(--transition-hover)',
    color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
  };
}
const bareInput = {
  flex: 1,
  minWidth: 0,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  font: 'var(--type-body)',
  color: 'inherit'
};
Object.assign(__ds_scope, { Field, fieldBox, bareInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DatePicker({
  label = 'Data',
  hint,
  error,
  value,
  onValueChange,
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: __ds_scope.fieldBox({
      focus,
      error: !!error,
      disabled
    })
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "date",
    value: value,
    disabled: disabled,
    onChange: e => onValueChange && onValueChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: __ds_scope.bareInput
  }, rest))));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  iconRight,
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: __ds_scope.fieldBox({
      focus,
      error: !!error,
      disabled
    })
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: __ds_scope.bareInput
  }, rest)), iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 18,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/MoneyInput.jsx
try { (() => {
/** Currency field with prominent numerals — the most important input in the product. */
function MoneyInput({
  label = 'Valor',
  hint,
  error,
  value,
  onValueChange,
  currency = 'R$',
  sign = 'none',
  disabled,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const accent = sign === 'in' ? 'var(--money-in)' : 'var(--text-primary)';
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      padding: '14px 18px',
      background: disabled ? 'var(--neutral-50)' : 'var(--cream-50)',
      border: `1.5px solid ${error ? 'var(--error-500)' : focus ? 'var(--green-600)' : 'var(--cream-200)'}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-hover)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-semibold) 18px/1 var(--font-numeric)',
      color: 'var(--text-muted)'
    }
  }, sign === 'in' ? '+ ' : sign === 'out' ? '- ' : '', currency), /*#__PURE__*/React.createElement("input", {
    id: uid,
    inputMode: "decimal",
    disabled: disabled,
    value: value,
    onChange: e => onValueChange && onValueChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    placeholder: "0,00",
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--weight-bold) 32px/1.1 var(--font-numeric)',
      color: disabled ? 'var(--text-disabled)' : accent,
      letterSpacing: 'var(--tracking-tight)'
    }
  })));
}
Object.assign(__ds_scope, { MoneyInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/MoneyInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  value,
  onValueChange,
  placeholder = 'Buscar transação',
  onClear,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...__ds_scope.fieldBox({
        focus
      }),
      background: 'var(--surface-sunken)',
      borderColor: focus ? 'var(--green-600)' : 'var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    placeholder: placeholder,
    "aria-label": placeholder,
    onChange: e => onValueChange && onValueChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: __ds_scope.bareInput
  }, rest)), value ? /*#__PURE__*/React.createElement("button", {
    onClick: onClear,
    "aria-label": "Limpar busca",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    color: "var(--text-muted)"
  })) : null);
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  onValueChange,
  placeholder = 'Selecione',
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: __ds_scope.fieldBox({
      focus,
      error: !!error,
      disabled
    })
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    value: value ?? '',
    disabled: disabled,
    onChange: e => onValueChange && onValueChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...__ds_scope.bareInput,
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 48,
      height: 28,
      flex: 'none',
      padding: 3,
      border: 'none',
      borderRadius: 'var(--radius-full)',
      background: disabled ? 'var(--neutral-200)' : checked ? 'var(--green-600)' : 'var(--neutral-300)',
      cursor: 'inherit',
      transition: `background var(--duration-base) var(--ease-standard)`,
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: `transform var(--duration-base) var(--ease-standard)`
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: uid,
    style: style
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: uid,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-primary)',
      padding: '12px 14px',
      background: disabled ? 'var(--neutral-50)' : 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--error-500)' : focus ? 'var(--green-600)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-input)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-hover)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CTASection.jsx
try { (() => {
/** Full-width closing CTA band (§38). */
function CTASection({
  title,
  subtitle,
  cta = 'Começar agora',
  onCta,
  mascot = 'encouraging',
  basePath,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--green-900)',
      borderRadius: 'var(--radius-card-special)',
      padding: '32px 40px',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mascot, {
    state: mascot,
    size: 132,
    basePath: basePath,
    style: {
      flex: 'none',
      marginBottom: -32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
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
  }, subtitle)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onCta,
    style: {
      flex: 'none'
    }
  }, cta));
}
Object.assign(__ds_scope, { CTASection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CTASection.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
/** Landing-page feature tile (§38). */
function FeatureCard({
  icon = 'wallet',
  title,
  children,
  align = 'left',
  tone = 'white',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === 'cream' ? 'var(--cream-50)' : 'var(--surface-card)';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      background: bg,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card-feature)',
      padding: 24,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--green-100)',
      color: 'var(--green-900)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      font: 'var(--type-h4)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteFooter.jsx
try { (() => {
/** Landing-page footer with three trust points and link columns. */
function SiteFooter({
  logoSrc = 'assets/logo-horizontal.png',
  trust = [],
  columns = [],
  legal = '© 2026 Poupeu. Seu dinheiro, do seu jeito.',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--cream-50)',
      borderTop: '1px solid var(--cream-200)',
      padding: '32px 40px',
      ...style
    }
  }, trust.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap',
      paddingBottom: 28,
      borderBottom: '1px solid var(--cream-200)'
    }
  }, trust.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.title,
    style: {
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, t.detail)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap',
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Poupeu",
    style: {
      width: 128,
      height: 'auto'
    }
  }), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-regular)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, legal));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
/** App screen header: greeting with the mascot, or a plain page title. */
function AppHeader({
  variant = 'greeting',
  greeting,
  subtitle,
  title,
  notifications = 0,
  onNotifications,
  onProfile,
  trailing,
  basePath,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: variant === 'greeting' ? '4px 0 16px' : '4px 0 12px',
      ...style
    }
  }, variant === 'greeting' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Mascot, {
    state: "happy",
    size: 52,
    framed: true,
    basePath: basePath
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-bold) 17px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, greeting), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, subtitle))) : /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: 1,
      font: 'var(--type-h2)',
      fontSize: 'var(--text-h3)',
      color: 'var(--text-primary)'
    }
  }, title), onNotifications && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bell",
    label: "Notifica\xE7\xF5es",
    variant: "soft",
    onClick: onNotifications
  }), notifications > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--error-500)',
      color: '#fff',
      font: 'var(--weight-bold) 11px/18px var(--font-sans)',
      textAlign: 'center',
      border: '2px solid var(--bg-page-app)'
    }
  }, notifications)), onProfile && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    icon: "user",
    onClick: onProfile,
    style: {
      cursor: 'pointer'
    }
  }), trailing);
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNavigation.jsx
try { (() => {
const APP_NAV = [{
  key: 'inicio',
  label: 'Início',
  icon: 'house'
}, {
  key: 'transacoes',
  label: 'Transações',
  icon: 'sliders-horizontal'
}, {
  key: 'metas',
  label: 'Metas',
  icon: 'target'
}, {
  key: 'mais',
  label: 'Mais',
  icon: 'ellipsis'
}];

/** Mobile tab bar with the central add action (§25). */
function BottomNavigation({
  items = APP_NAV,
  value,
  onChange,
  onAdd,
  style
}) {
  const left = items.slice(0, 2),
    right = items.slice(2);
  const Item = ({
    it
  }) => {
    const on = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => onChange && onChange(it.key),
      "aria-current": on ? 'page' : undefined,
      style: {
        flex: 1,
        minWidth: 0,
        minHeight: 'var(--touch-min)',
        border: 'none',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer',
        color: on ? 'var(--green-900)' : 'var(--neutral-500)',
        padding: '6px 0',
        transition: 'var(--transition-hover)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `var(--weight-${on ? 'semibold' : 'medium'}) 11px/1 var(--font-sans)`
      }
    }, it.label));
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 'var(--bottom-nav-height)',
      padding: '0 8px',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--divider)',
      ...style
    }
  }, left.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.key,
    it: it
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      flex: 'none',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    "aria-label": "Adicionar transa\xE7\xE3o",
    style: {
      width: 52,
      height: 52,
      marginTop: -22,
      border: '4px solid var(--surface-card)',
      borderRadius: 'var(--radius-full)',
      background: 'var(--green-900)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 24
  }))), right.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.key,
    it: it
  })));
}
Object.assign(__ds_scope, { APP_NAV, BottomNavigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNavigation.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Sidebar.jsx
try { (() => {
/** Desktop sidebar (§25) — same four destinations as mobile. */
function Sidebar({
  items = __ds_scope.APP_NAV,
  value,
  onChange,
  logoSrc = 'assets/logo-horizontal.png',
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--sidebar-width)',
      flex: 'none',
      height: '100%',
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--divider)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 16px',
      gap: 8,
      ...style
    }
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Poupeu",
    style: {
      width: 132,
      margin: '0 4px 20px'
    }
  }), items.map(it => {
    const on = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onChange && onChange(it.key),
      "aria-current": on ? 'page' : undefined,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        minHeight: 46,
        padding: '0 14px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--green-100)' : 'transparent',
        color: on ? 'var(--green-900)' : 'var(--neutral-600)',
        font: `var(--weight-${on ? 'semibold' : 'medium'}) 15px/1 var(--font-sans)`,
        transition: 'var(--transition-hover)',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    }), it.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, footer));
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.Mascot = __ds_scope.Mascot;

__ds_ns.MascotMessage = __ds_scope.MascotMessage;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.CategoryIcon = __ds_scope.CategoryIcon;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.FinancialCard = __ds_scope.FinancialCard;

__ds_ns.GoalCard = __ds_scope.GoalCard;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TransactionItem = __ds_scope.TransactionItem;

__ds_ns.CATEGORIES = __ds_scope.CATEGORIES;

__ds_ns.CATEGORY_LIST = __ds_scope.CATEGORY_LIST;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MoneyInput = __ds_scope.MoneyInput;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CTASection = __ds_scope.CTASection;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.APP_NAV = __ds_scope.APP_NAV;

__ds_ns.BottomNavigation = __ds_scope.BottomNavigation;

__ds_ns.Sidebar = __ds_scope.Sidebar;

})();
