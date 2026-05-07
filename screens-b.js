const {
  useState: useStateB,
  useEffect: useEffectB
} = React;
function SpecCard({
  label,
  value,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF',
      padding: '12px 14px',
      borderRadius: 12,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.8,
      textTransform: 'uppercase',
      color: 'rgba(31,26,44,0.5)'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 1px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 17,
      fontWeight: 700,
      color: '#1F1A2C',
      letterSpacing: -0.3
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      color: 'rgba(31,26,44,0.55)',
      fontWeight: 500
    }
  }, sub));
}
function counterBtn(primary) {
  return {
    flex: primary ? 2 : 1,
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '14px',
    borderRadius: 14,
    background: primary ? '#1F1A2C' : '#FFF',
    color: primary ? '#FFF8F0' : '#1F1A2C',
    boxShadow: primary ? 'none' : 'inset 0 0 0 1.5px rgba(31,26,44,0.12)',
    fontFamily: '"Bricolage Grotesque",serif',
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: -0.3
  };
}
function generateRow(p, n) {
  if (p.type === 'Amigurumi') {
    if (n === 1) return 'Mr, 6 sc into ring. (6)';
    if (n === 2) return '[inc] x6. (12)';
    if (n === 3) return '[sc, inc] x6. (18)';
    if (n === 4) return '[2 sc, inc] x6. (24)';
    return `${30 + n} sc around. (${30 + n})`;
  }
  if (p.type === 'Tunisian') {
    if (n === 1) return `Ch ${20 + n * 2}. Forward: pick up loop in 2nd ch from hook and across.`;
    return `Forward: tss across. Return: yo, pull through 2 across. (${20 + n * 2} sts)`;
  }
  if (p.type === 'Filet') return `Ch 3, dc in next dc, [ch 2, sk 2 ch, dc] across. Turn.`;
  if (p.type === 'Broomstick') {
    if (n === 1) return `Ch 30. Sc in 2nd ch from hook and across.`;
    return `Pull up loops onto broomstick across. Group 5 loops, sc 5 in group across.`;
  }
  if (n === 1) return `Ch ${24 + n}. Turn. Sc in 2nd ch from hook and across. (${23 + n})`;
  return `Ch 1, turn. Sc in each st across. (${23 + n})`;
}
function DetailScreen({
  go,
  p,
  saved,
  toggleSave,
  isMystery,
  onMysteryComplete
}) {
  const [tab, setTab] = useStateB('pattern');
  const [progress, setProgress] = useStateB(0);
  if (!p) return null;
  const pct = Math.round(progress / p.rows * 100);
  const done = progress >= p.rows;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(ProjectShot, {
    color: p.color,
    label: p.project.toLowerCase(),
    height: 280,
    radius: 0,
    locked: isMystery && !done,
    revealStyle: window.__mysteryStyle || 'blur'
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(isMystery ? 'mystery' : 'results'),
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      width: 40,
      height: 40,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: 'rgba(255,248,240,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(31,26,44,0.18)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      color: '#1F1A2C'
    }
  }, "\u2190")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      right: 14
    }
  }, /*#__PURE__*/React.createElement(HeartBtn, {
    saved: saved,
    onClick: toggleSave,
    size: 40
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "#F5B83D"
  }, p.type), /*#__PURE__*/React.createElement(Tag, {
    color: "#7BA88B"
  }, p.skill), /*#__PURE__*/React.createElement(Tag, {
    color: "#FFF"
  }, p.project)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 30,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1.05,
      letterSpacing: -1
    }
  }, isMystery && !done ? 'Mystery Project' : p.title), /*#__PURE__*/React.createElement("a", {
    href: p.designerUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 14,
      marginBottom: 16,
      padding: '12px 14px',
      background: '#FFF',
      borderRadius: 14,
      textDecoration: 'none',
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: '#7B7CE0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFF8F0',
      fontFamily: '"Bricolage Grotesque",serif',
      fontWeight: 700,
      fontSize: 14,
      flexShrink: 0
    }
  }, p.designer.split(' ').map(s => s[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(31,26,44,0.5)',
      letterSpacing: 0.8,
      textTransform: 'uppercase'
    }
  }, "Pattern by"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 16,
      fontWeight: 700,
      color: '#1F1A2C',
      letterSpacing: -0.2
    }
  }, p.designer)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7B7CE0',
      fontSize: 12,
      fontWeight: 700,
      fontFamily: '"Plus Jakarta Sans",sans-serif'
    }
  }, "Visit \u2192")), !isMystery && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      color: 'rgba(31,26,44,0.7)',
      lineHeight: 1.5,
      margin: '0 0 18px',
      fontWeight: 500
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(SpecCard, {
    label: "Hook",
    value: `${p.hookMm}mm`,
    sub: `US ${p.hookUS}`
  }), /*#__PURE__*/React.createElement(SpecCard, {
    label: "Yarn",
    value: p.yarn.split(' ')[0],
    sub: `${p.yardage} yds`
  }), /*#__PURE__*/React.createElement(SpecCard, {
    label: "Time",
    value: p.time,
    sub: `${p.rows} rows`
  }), /*#__PURE__*/React.createElement(SpecCard, {
    label: "Stitches",
    value: p.stitches.length + ' types',
    sub: p.stitches.slice(0, 3).join(', ')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 14px',
      display: 'flex',
      gap: 22,
      borderBottom: '1px solid rgba(31,26,44,0.08)'
    }
  }, ['pattern', 'progress', 'notes'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: '8px 0',
      position: 'relative',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      fontWeight: 700,
      color: tab === t ? '#1F1A2C' : 'rgba(31,26,44,0.4)',
      textTransform: 'capitalize'
    }
  }, t, tab === t && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -1,
      left: 0,
      right: 0,
      height: 3,
      background: '#E8516E',
      borderRadius: 2
    }
  })))), tab === 'pattern' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1F1A2C',
      color: '#FFF8F0',
      padding: 16,
      borderRadius: 14,
      fontFamily: 'ui-monospace,"JetBrains Mono",monospace',
      fontSize: 15,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 14,
      fontWeight: 700,
      color: '#F5B83D',
      letterSpacing: 0.5
    }
  }, "// MATERIALS"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px'
    }
  }, p.yardage, " yds \xB7 ", p.yarn), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px'
    }
  }, "Hook: ", p.hookMm, "mm (US ", p.hookUS, ")"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px'
    }
  }, "Notions: scissors, tapestry needle", p.type === 'Amigurumi' ? ', stuffing, stitch markers' : ''), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 14,
      fontWeight: 700,
      color: '#F5B83D',
      letterSpacing: 0.5
    }
  }, "// PATTERN"), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      color: 'inherit'
    }
  }, p.fullPattern || '')))), tab === 'progress' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF',
      padding: 22,
      borderRadius: 18,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: 'rgba(31,26,44,0.5)'
    }
  }, "Row counter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 64,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1,
      letterSpacing: -2
    }
  }, progress), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 24,
      fontWeight: 700,
      color: 'rgba(31,26,44,0.4)'
    }
  }, "/ ", p.rows)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      height: 8,
      background: 'rgba(31,26,44,0.08)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: 'linear-gradient(90deg,#F5B83D,#E8516E)',
      transition: 'width 280ms ease'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      color: 'rgba(31,26,44,0.55)',
      fontWeight: 600
    }
  }, pct, "% complete"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setProgress(Math.max(0, progress - 1)),
    style: counterBtn(false)
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const np = Math.min(p.rows, progress + 1);
      setProgress(np);
      if (np === p.rows && isMystery) onMysteryComplete && onMysteryComplete();
    },
    style: counterBtn(true)
  }, "+1 row")), done && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 14,
      background: '#7BA88B',
      color: '#1F1A2C',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 16,
      fontWeight: 700
    }
  }, "Finished!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 600
    }
  }, "Tag ", p.designer, " when you share it \u2661"))))), tab === 'notes' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF',
      padding: 16,
      borderRadius: 14,
      minHeight: 200,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Tension a little tight on R6 \u2014 switched to a bigger hook\u2026",
    style: {
      width: '100%',
      height: 180,
      border: 'none',
      outline: 'none',
      resize: 'none',
      background: 'transparent',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      color: '#1F1A2C',
      lineHeight: 1.5,
      boxSizing: 'border-box'
    }
  }))));
}
function MysterySpinner() {
  const items = ['Bucket Hat', 'Sweater', 'Octopus', 'Curtain', 'Vest', 'Shawl', 'Tote', 'Wash Set', 'Granny', 'Hat', 'Scarf', 'Cardigan'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 400,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 180,
      borderRadius: '50%',
      background: 'conic-gradient(#F5B83D 0deg 90deg,#7BA88B 90deg 180deg,#E8516E 180deg 270deg,#7B7CE0 270deg 360deg)',
      animation: 'spin 1.4s cubic-bezier(.22,.61,.36,1) infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 20px 50px rgba(31,26,44,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: '50%',
      background: '#1F1A2C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F5B83D',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 56,
      fontWeight: 800
    }
  }, "?")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 22,
      fontWeight: 700,
      color: '#1F1A2C',
      textAlign: 'center',
      letterSpacing: -0.5
    }
  }, "Casting your stitches\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      overflow: 'hidden',
      width: 220,
      position: 'relative',
      WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 25%,#000 75%,transparent)',
      maskImage: 'linear-gradient(90deg,transparent,#000 25%,#000 75%,transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      animation: 'ticker 2.4s linear infinite',
      whiteSpace: 'nowrap'
    }
  }, [...items, ...items].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      fontWeight: 600,
      color: 'rgba(31,26,44,0.6)'
    }
  }, w)))), /*#__PURE__*/React.createElement("style", null, `@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`));
}
function Mini({
  label,
  v
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 9,
      fontWeight: 700,
      letterSpacing: 0.8,
      textTransform: 'uppercase',
      color: 'rgba(31,26,44,0.5)'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 14,
      fontWeight: 700,
      color: '#1F1A2C',
      letterSpacing: -0.2
    }
  }, v));
}
function MysteryReveal({
  p,
  onOpen,
  onReroll,
  mysteryStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      animation: 'fadeUp 480ms ease'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      color: '#E8516E'
    }
  }, "Your mystery"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '6px 0 18px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 32,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1,
      letterSpacing: -1.2
    }
  }, "It's a ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(120deg,transparent 50%,#F5B83D 50%)'
    }
  }, p.project.toLowerCase(), ".")), /*#__PURE__*/React.createElement(ProjectShot, {
    color: p.color,
    label: "locked until you finish",
    height: 240,
    radius: 20,
    locked: true,
    revealStyle: mysteryStyle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 16,
      background: '#FFF',
      borderRadius: 16,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Mini, {
    label: "Type",
    v: p.type
  }), /*#__PURE__*/React.createElement(Mini, {
    label: "Skill",
    v: p.skill
  }), /*#__PURE__*/React.createElement(Mini, {
    label: "Time",
    v: p.time
  }), /*#__PURE__*/React.createElement(Mini, {
    label: "Hook",
    v: `${p.hookMm}mm`
  }), /*#__PURE__*/React.createElement(Mini, {
    label: "Yarn",
    v: p.yarn.split(' ')[0]
  }), /*#__PURE__*/React.createElement(Mini, {
    label: "Yards",
    v: `${p.yardage}`
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      padding: '10px 12px',
      background: '#FFF8F0',
      borderRadius: 10,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      color: 'rgba(31,26,44,0.7)',
      fontWeight: 500,
      lineHeight: 1.45
    }
  }, "By ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7B7CE0',
      fontWeight: 700
    }
  }, p.designer), " \xB7 credit will be visible the whole time, even while the photo is hidden.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onReroll,
    style: {
      flex: 1,
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      background: '#FFF',
      color: '#1F1A2C',
      borderRadius: 14,
      padding: '14px',
      boxShadow: 'inset 0 0 0 1.5px rgba(31,26,44,0.12)',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: -0.2
    }
  }, "\u21BB Reroll"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      flex: 2,
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      background: '#1F1A2C',
      color: '#FFF8F0',
      borderRadius: 14,
      padding: '14px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: -0.2
    }
  }, "Start the pattern \u2192")), /*#__PURE__*/React.createElement("style", null, `@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`));
}
function MysteryScreen({
  go,
  onPick,
  mysteryStyle
}) {
  const [stage, setStage] = useStateB('intro');
  const [picked, setPicked] = useStateB(null);
  const start = () => {
    setStage('spinning');
    const choice = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
    setTimeout(() => {
      setPicked(choice);
      setStage('revealed');
    }, 2400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100,
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 14px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('home'),
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      fontSize: 24,
      color: '#1F1A2C'
    }
  }, "\u2190")), stage === 'intro' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1F1A2C',
      borderRadius: 24,
      padding: 24,
      color: '#FFF8F0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -30,
      right: -10,
      fontSize: 180,
      fontWeight: 800,
      color: 'rgba(245,184,61,0.18)',
      fontFamily: '"Bricolage Grotesque",serif',
      lineHeight: 1
    }
  }, "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      color: '#F5B83D',
      position: 'relative'
    }
  }, "Mystery pattern"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 14px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 36,
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: -1.2,
      position: 'relative'
    }
  }, "Trust the", /*#__PURE__*/React.createElement("br", null), "process."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'rgba(255,248,240,0.8)',
      fontWeight: 500,
      position: 'relative'
    }
  }, "You'll get the pattern, materials, and row-by-row instructions \u2014 but the finished photo stays locked until you complete the project.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    icon: '🧶',
    label: 'You pick the yarn & hook',
    sub: 'We narrow patterns to fit your stash.'
  }, {
    icon: '👁️',
    label: 'No spoilers along the way',
    sub: 'Project shot stays hidden until your last row.'
  }, {
    icon: '🎉',
    label: 'Big reveal at the finish',
    sub: 'Unblur the photo, share with #crochetpal.'
  }].map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: '#FFF',
      padding: '14px 16px',
      borderRadius: 14,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, it.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 15,
      fontWeight: 700,
      color: '#1F1A2C',
      letterSpacing: -0.2
    }
  }, it.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      color: 'rgba(31,26,44,0.6)',
      fontWeight: 500
    }
  }, it.sub))))), /*#__PURE__*/React.createElement("button", {
    onClick: start,
    style: {
      width: '100%',
      marginTop: 24,
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      background: '#E8516E',
      color: '#FFF8F0',
      borderRadius: 18,
      padding: '18px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: -0.3,
      boxShadow: '0 8px 24px rgba(232,81,110,0.35)'
    }
  }, "Roll my mystery \u2192")), stage === 'spinning' && /*#__PURE__*/React.createElement(MysterySpinner, null), stage === 'revealed' && picked && /*#__PURE__*/React.createElement(MysteryReveal, {
    p: picked,
    onOpen: () => onPick(picked.id),
    onReroll: () => setStage('intro'),
    mysteryStyle: mysteryStyle
  }));
}
function GlossaryView() {
  const [q, setQ] = useStateB('');
  const cats = [...new Set(STITCH_GLOSSARY.map(s => s.cat))];
  const filtered = STITCH_GLOSSARY.filter(s => !q || s.name.toLowerCase().includes(q.toLowerCase()) || s.abbr.toLowerCase().includes(q.toLowerCase()));
  const colors = ['#F5B83D', '#7BA88B', '#E8516E', '#7B7CE0', '#1F1A2C'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF',
      borderRadius: 14,
      padding: '12px 14px',
      marginBottom: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(31,26,44,0.5)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 16l5 5"
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search 'magic ring', 'tss'\u2026",
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      color: '#1F1A2C'
    }
  })), cats.map((cat, ci) => {
    const items = filtered.filter(s => s.cat === cat);
    if (!items.length) return null;
    const accent = colors[ci % colors.length];
    return /*#__PURE__*/React.createElement("div", {
      key: cat,
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 8px',
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
        color: 'rgba(31,26,44,0.55)'
      }
    }, cat), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, items.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.abbr,
      style: {
        background: '#FFF',
        borderRadius: 12,
        padding: 12,
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 3px 8px rgba(31,26,44,0.04)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 10,
        flexShrink: 0,
        background: accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Bricolage Grotesque",serif',
        fontWeight: 800,
        fontSize: 14,
        color: ci === 4 ? '#FFF8F0' : '#1F1A2C'
      }
    }, s.abbr), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: '"Bricolage Grotesque",serif',
        fontSize: 15,
        fontWeight: 700,
        color: '#1F1A2C',
        letterSpacing: -0.2
      }
    }, s.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 12,
        color: 'rgba(31,26,44,0.65)',
        fontWeight: 500,
        lineHeight: 1.45
      }
    }, s.desc))))));
  }));
}
function LearnScreen({
  go
}) {
  const [tab, setTab] = useStateB('lessons');
  const tracks = [...new Set(LESSONS.map(l => l.track))];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 18px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 34,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1,
      letterSpacing: -1.2
    }
  }, "Learn the", /*#__PURE__*/React.createElement("br", null), "ropes (literally).")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 16px',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    active: tab === 'lessons',
    onClick: () => setTab('lessons')
  }, "Lessons"), /*#__PURE__*/React.createElement(Chip, {
    active: tab === 'glossary',
    onClick: () => setTab('glossary')
  }, "Stitch glossary")), tab === 'lessons' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, tracks.map((tr, ti) => {
    const lessons = LESSONS.filter(l => l.track === tr);
    const done = lessons.filter(l => l.done).length;
    const accents = ['#F5B83D', '#7BA88B', '#E8516E'];
    const accent = accents[ti % accents.length];
    return /*#__PURE__*/React.createElement("div", {
      key: tr,
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: '"Bricolage Grotesque",serif',
        fontSize: 19,
        fontWeight: 700,
        color: '#1F1A2C',
        letterSpacing: -0.4
      }
    }, tr), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 11,
        fontWeight: 700,
        padding: '4px 10px',
        borderRadius: 999,
        background: accent,
        color: '#1F1A2C'
      }
    }, done, "/", lessons.length)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'rgba(31,26,44,0.08)',
        borderRadius: 999,
        overflow: 'hidden',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${done / lessons.length * 100}%`,
        height: '100%',
        background: accent
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, lessons.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: l.id,
      style: {
        background: '#FFF',
        borderRadius: 14,
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.04)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 999,
        flexShrink: 0,
        background: l.done ? accent : 'transparent',
        boxShadow: l.done ? 'none' : 'inset 0 0 0 1.5px rgba(31,26,44,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#1F1A2C',
        fontFamily: '"Bricolage Grotesque",serif',
        fontWeight: 800,
        fontSize: 13
      }
    }, l.done ? '✓' : i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: '"Bricolage Grotesque",serif',
        fontSize: 15,
        fontWeight: 700,
        color: '#1F1A2C',
        letterSpacing: -0.2
      }
    }, l.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 11,
        color: 'rgba(31,26,44,0.55)',
        fontWeight: 600
      }
    }, l.mins, " min \xB7 video + transcript")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(31,26,44,0.4)',
        fontSize: 18
      }
    }, "\u203A")))));
  })), tab === 'glossary' && /*#__PURE__*/React.createElement(GlossaryView, null));
}
Object.assign(window, {
  DetailScreen,
  MysteryScreen,
  LearnScreen
});