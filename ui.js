function shade(hex, amt) {
  const c = hex.replace('#', '');
  const n = parseInt(c, 16);
  let r = (n >> 16) + amt,
    g = (n >> 8 & 0xff) + amt,
    b = (n & 0xff) + amt;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}
function ProjectShot({
  color = '#F5B83D',
  label = 'project shot',
  height = 180,
  radius = 18,
  locked = false,
  revealStyle = 'blur'
}) {
  const stripeBg = `repeating-linear-gradient(135deg,${color} 0 14px,${shade(color, -8)} 14px 28px)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height,
      borderRadius: radius,
      background: stripeBg,
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px rgba(31,26,44,0.08)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-10 70 Q 30 30,60 60 T 130 60 T 210 50",
    stroke: "#1F1A2C",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-10 80 Q 40 50,70 75 T 140 70 T 220 75",
    stroke: "#1F1A2C",
    strokeWidth: "2",
    fill: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace,"JetBrains Mono","Fira Code",monospace',
      fontSize: 10,
      padding: '3px 7px',
      background: 'rgba(255,248,240,0.85)',
      borderRadius: 6,
      color: '#1F1A2C',
      letterSpacing: 0.2
    }
  }, "[ ", label, " ]")), locked && /*#__PURE__*/React.createElement(LockOverlay, {
    style: revealStyle
  }));
}
function LockOverlay({
  style = 'blur'
}) {
  if (style === 'silhouette') return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#1F1A2C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: "60%",
    height: "60%",
    style: {
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 70 Q 30 40,50 50 T 80 70 Q 70 80,50 80 T 20 70 Z",
    fill: "#FFF8F0"
  })));
  if (style === 'locked') return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(31,26,44,0.92)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#F5B83D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2",
    fill: "#1F1A2C"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 018 0v3",
    stroke: "#1F1A2C",
    strokeWidth: "2",
    fill: "none"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#FFF8F0',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    }
  }, "Locked"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backdropFilter: 'blur(22px) saturate(140%)',
      WebkitBackdropFilter: 'blur(22px) saturate(140%)',
      background: 'rgba(255,248,240,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 14,
      fontWeight: 600,
      padding: '6px 14px',
      background: '#1F1A2C',
      color: '#FFF8F0',
      borderRadius: 999,
      letterSpacing: 0.4
    }
  }, "?  ?  ?"));
}
function Chip({
  active,
  onClick,
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 999,
      fontFamily: '"Plus Jakarta Sans",system-ui,sans-serif',
      fontSize: 13,
      fontWeight: 600,
      background: active ? color || '#1F1A2C' : '#FFF',
      color: active ? '#FFF8F0' : '#1F1A2C',
      boxShadow: active ? 'inset 0 0 0 1.5px ' + (color || '#1F1A2C') : 'inset 0 0 0 1.5px rgba(31,26,44,0.12)',
      transition: 'all 140ms ease',
      whiteSpace: 'nowrap'
    }
  }, children);
}
function SectionHead({
  title,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      padding: '0 20px',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 22,
      fontWeight: 700,
      color: '#1F1A2C',
      letterSpacing: -0.5
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 600,
      color: '#7B7CE0',
      padding: 0
    }
  }, action, " \u2192"));
}
function HeartBtn({
  saved,
  onClick,
  size = 36
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick && onClick();
    },
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: saved ? '#E8516E' : 'rgba(255,255,255,0.92)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(31,26,44,0.12)',
      transition: 'all 160ms ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.5,
    height: size * 0.5,
    viewBox: "0 0 24 24",
    fill: saved ? '#FFF8F0' : 'none',
    stroke: saved ? '#FFF8F0' : '#1F1A2C',
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.5-9.5-9.5C.5 7 4 3 8 4.5 10 5.2 11 7 12 8c1-1 2-2.8 4-3.5C20 3 23.5 7 21.5 11.5 19 16.5 12 21 12 21z",
    strokeLinejoin: "round"
  })));
}
function Tag({
  children,
  color = 'rgba(255,248,240,0.95)'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 10,
      fontWeight: 700,
      padding: '4px 8px',
      borderRadius: 999,
      background: color,
      color: '#1F1A2C',
      letterSpacing: 0.3,
      textTransform: 'uppercase'
    }
  }, children);
}
function Spec({
  icon,
  children
}) {
  const icons = {
    hook: /*#__PURE__*/React.createElement("path", {
      d: "M5 3 v14 a4 4 0 008 0",
      stroke: "currentColor",
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }),
    yarn: /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "6",
      stroke: "currentColor",
      strokeWidth: "1.8",
      fill: "none"
    }),
    time: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "10",
      r: "7",
      stroke: "currentColor",
      strokeWidth: "1.8",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 6 v4 l3 2",
      stroke: "currentColor",
      strokeWidth: "1.8",
      fill: "none",
      strokeLinecap: "round"
    }))
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 20 20"
  }, icons[icon]), children);
}
function PatternCard({
  p,
  saved,
  onSave,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: '#FFF',
      borderRadius: 20,
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 6px 18px rgba(31,26,44,0.06)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ProjectShot, {
    color: p.color,
    label: p.project.toLowerCase(),
    height: 150,
    radius: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(HeartBtn, {
    saved: saved,
    onClick: onSave
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Tag, null, p.type), /*#__PURE__*/React.createElement(Tag, null, p.skill))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 17,
      fontWeight: 700,
      color: '#1F1A2C',
      lineHeight: 1.15,
      letterSpacing: -0.3
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      color: 'rgba(31,26,44,0.6)',
      fontWeight: 500
    }
  }, "by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7B7CE0',
      fontWeight: 600
    }
  }, p.designer)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 10,
      fontSize: 11,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      color: 'rgba(31,26,44,0.7)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Spec, {
    icon: "hook"
  }, p.hookMm, "mm"), /*#__PURE__*/React.createElement(Spec, {
    icon: "yarn"
  }, p.yarn.split(' ')[0]), /*#__PURE__*/React.createElement(Spec, {
    icon: "time"
  }, p.time))));
}
function NavBtn({
  active,
  label,
  onClick,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      padding: '8px 0',
      color: active ? '#1F1A2C' : 'rgba(31,26,44,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 26,
      borderRadius: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: active ? '#F5B83D' : 'transparent',
      transition: 'background 160ms ease'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.2
    }
  }, label));
}
Object.assign(window, {
  ProjectShot,
  LockOverlay,
  Chip,
  SectionHead,
  HeartBtn,
  PatternCard,
  Tag,
  Spec,
  NavBtn,
  shade
});