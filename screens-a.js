const {
  useState,
  useMemo
} = React;
function HomeScreen({
  go,
  saved,
  toggleSave
}) {
  const featured = PATTERNS.slice(0, 4);
  const fresh = PATTERNS.slice(2, 6);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 18px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      color: 'rgba(31,26,44,0.55)',
      fontWeight: 600,
      letterSpacing: 0.3
    }
  }, "Tuesday, May 6"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 0',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 34,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1,
      letterSpacing: -1.2
    }
  }, "Hey, hooker.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#E8516E'
    }
  }, "What's on the hook?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 10,
      padding: '0 20px',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('search'),
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      background: '#1F1A2C',
      color: '#FFF8F0',
      borderRadius: 22,
      padding: 18,
      fontFamily: '"Bricolage Grotesque",serif',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "9",
    stroke: "#F5B83D",
    strokeWidth: "2.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 24 L32 32",
    stroke: "#F5B83D",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
      opacity: 0.7
    }
  }, "Find a pattern"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: -0.6
    }
  }, "Search by yarn,", /*#__PURE__*/React.createElement("br", null), "hook, or vibe")), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('mystery'),
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      textAlign: 'left',
      background: '#E8516E',
      color: '#FFF8F0',
      borderRadius: 22,
      padding: 18,
      fontFamily: '"Bricolage Grotesque",serif',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 38,
      height: 38,
      borderRadius: 999,
      background: 'rgba(255,248,240,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      fontWeight: 800
    }
  }, "?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, "Surprise me"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: -0.6
    }
  }, "Mystery", /*#__PURE__*/React.createElement("br", null), "pattern"))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Featured today",
    action: "See all",
    onAction: () => go('search')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: '0 20px',
      overflowX: 'auto',
      marginBottom: 26,
      scrollbarWidth: 'none'
    }
  }, featured.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      flex: '0 0 220px'
    }
  }, /*#__PURE__*/React.createElement(PatternCard, {
    p: p,
    saved: saved.includes(p.id),
    onSave: () => toggleSave(p.id),
    onClick: () => go('detail', p.id)
  })))), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Browse by craft"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      padding: '0 20px',
      marginBottom: 26
    }
  }, CROCHET_TYPES.map((t, i) => {
    const colors = ['#F5B83D', '#7BA88B', '#E8516E', '#7B7CE0', '#1F1A2C'];
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => go('search', null, {
        type: t
      }),
      style: {
        appearance: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        padding: '14px 14px 16px',
        borderRadius: 16,
        background: colors[i % 5],
        color: i === 4 ? '#FFF8F0' : '#1F1A2C',
        fontFamily: '"Bricolage Grotesque",serif',
        fontSize: 16,
        fontWeight: 700,
        display: 'flex',
        flexDirection: 'column',
        gap: 22,
        minHeight: 88,
        letterSpacing: -0.3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: '"Plus Jakarta Sans",sans-serif',
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: 'uppercase',
        opacity: 0.65
      }
    }, PATTERNS.filter(p => p.type === t).length, " patterns"), /*#__PURE__*/React.createElement("span", null, t));
  })), /*#__PURE__*/React.createElement(SectionHead, {
    title: "Fresh from makers",
    action: "See all",
    onAction: () => go('search')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, fresh.map(p => /*#__PURE__*/React.createElement(PatternCard, {
    key: p.id,
    p: p,
    saved: saved.includes(p.id),
    onSave: () => toggleSave(p.id),
    onClick: () => go('detail', p.id)
  }))));
}
function FilterBlock({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      color: 'rgba(31,26,44,0.55)'
    }
  }, title), children);
}
function ChipRow({
  values,
  selected,
  onToggle
}) {
  const colors = ['#F5B83D', '#7BA88B', '#E8516E', '#7B7CE0', '#1F1A2C'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement(Chip, {
    key: v,
    active: selected.includes(v),
    onClick: () => onToggle(v),
    color: colors[i % colors.length]
  }, v)));
}
function HookSlider({
  value,
  onChange
}) {
  const idx = HOOK_SIZES.findIndex(h => h.mm === value);
  const safeIdx = idx === -1 ? 7 : idx;
  const cur = HOOK_SIZES[safeIdx];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 32,
      fontWeight: 800,
      color: '#1F1A2C',
      letterSpacing: -1
    }
  }, cur.mm, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      opacity: 0.5
    }
  }, "mm")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(31,26,44,0.55)'
    }
  }, "\xB7 US ", cur.us)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: HOOK_SIZES.length - 1,
    step: 1,
    value: safeIdx,
    onChange: e => onChange(HOOK_SIZES[+e.target.value].mm),
    style: {
      width: '100%',
      accentColor: '#E8516E'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 4,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 10,
      color: 'rgba(31,26,44,0.4)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "2.25mm"), /*#__PURE__*/React.createElement("span", null, "15mm")));
}
function YarnStepper({
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, YARN_WEIGHTS.map(w => /*#__PURE__*/React.createElement("button", {
    key: w.n,
    onClick: () => onChange(value === w.n ? null : w.n),
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 12px',
      borderRadius: 12,
      background: value === w.n ? '#1F1A2C' : '#FFF',
      color: value === w.n ? '#FFF8F0' : '#1F1A2C',
      boxShadow: 'inset 0 0 0 1.5px ' + (value === w.n ? '#1F1A2C' : 'rgba(31,26,44,0.12)'),
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      minWidth: 64,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'flex-start',
      transition: 'all 140ms ease'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      fontFamily: '"Bricolage Grotesque",serif'
    }
  }, w.n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      opacity: 0.7
    }
  }, w.name))));
}
function SearchScreen({
  go,
  filters,
  setFilters,
  resultCount
}) {
  const update = (k, v) => setFilters({
    ...filters,
    [k]: v
  });
  const toggle = (k, v) => {
    const cur = filters[k] || [];
    update(k, cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 130
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
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
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setFilters({}),
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      fontWeight: 600,
      color: '#7B7CE0'
    }
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 18px'
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
  }, "Find your", /*#__PURE__*/React.createElement("br", null), "next make.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF',
      borderRadius: 14,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 4px 12px rgba(31,26,44,0.05)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
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
    placeholder: "Try 'cardigan' or 'amigurumi cat'\u2026",
    value: filters.q || '',
    onChange: e => update('q', e.target.value),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      color: '#1F1A2C'
    }
  }))), /*#__PURE__*/React.createElement(FilterBlock, {
    title: "Hook size"
  }, /*#__PURE__*/React.createElement(HookSlider, {
    value: filters.hookMm ?? 5.0,
    onChange: v => update('hookMm', v)
  })), /*#__PURE__*/React.createElement(FilterBlock, {
    title: "Yarn weight"
  }, /*#__PURE__*/React.createElement(YarnStepper, {
    value: filters.yarnN ?? null,
    onChange: v => update('yarnN', v)
  })), /*#__PURE__*/React.createElement(FilterBlock, {
    title: "Crochet type"
  }, /*#__PURE__*/React.createElement(ChipRow, {
    values: CROCHET_TYPES,
    selected: filters.type ? [filters.type] : [],
    onToggle: v => update('type', filters.type === v ? null : v)
  })), /*#__PURE__*/React.createElement(FilterBlock, {
    title: "Skill level"
  }, /*#__PURE__*/React.createElement(ChipRow, {
    values: SKILL_LEVELS,
    selected: filters.skill ? [filters.skill] : [],
    onToggle: v => update('skill', filters.skill === v ? null : v)
  })), /*#__PURE__*/React.createElement(FilterBlock, {
    title: "Project type"
  }, /*#__PURE__*/React.createElement(ChipRow, {
    values: PROJECT_TYPES,
    selected: filters.projects || [],
    onToggle: v => toggle('projects', v)
  })), /*#__PURE__*/React.createElement(FilterBlock, {
    title: "Designer"
  }, /*#__PURE__*/React.createElement(ChipRow, {
    values: [...new Set(PATTERNS.map(p => p.designer))],
    selected: filters.designers || [],
    onToggle: v => toggle('designers', v)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 76,
      padding: '10px 20px',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('results'),
    style: {
      width: '100%',
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      background: '#1F1A2C',
      color: '#FFF8F0',
      borderRadius: 16,
      padding: '16px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: -0.2,
      boxShadow: '0 8px 24px rgba(31,26,44,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Show ", resultCount, " patterns"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\u2192"))));
}
function ResultsScreen({
  go,
  patterns,
  saved,
  toggleSave,
  filters
}) {
  const [sort, setSort] = useState('relevant');
  const sorted = useMemo(() => {
    const arr = [...patterns];
    if (sort === 'time') arr.sort((a, b) => a.yardage - b.yardage);
    if (sort === 'skill') arr.sort((a, b) => SKILL_LEVELS.indexOf(a.skill) - SKILL_LEVELS.indexOf(b.skill));
    return arr;
  }, [patterns, sort]);
  const activeFilters = [filters.type, filters.skill, ...(filters.projects || []), filters.q && `"${filters.q}"`].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('search'),
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      fontSize: 24,
      color: '#1F1A2C'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('search'),
    style: {
      appearance: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 999,
      background: '#FFF',
      boxShadow: 'inset 0 0 0 1.5px rgba(31,26,44,0.12)',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: '#1F1A2C',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    stroke: "#1F1A2C",
    strokeWidth: "2.4",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M6 12h12M10 18h4"
  })), "Filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 16px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 30,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1,
      letterSpacing: -1
    }
  }, patterns.length, " patterns", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(31,26,44,0.4)'
    }
  }, "match your stash"))), activeFilters.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      padding: '0 20px 14px',
      flexWrap: 'wrap'
    }
  }, activeFilters.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 11,
      fontWeight: 700,
      padding: '5px 10px',
      borderRadius: 999,
      background: '#1F1A2C',
      color: '#FFF8F0'
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '0 20px 16px',
      overflowX: 'auto',
      scrollbarWidth: 'none'
    }
  }, [['relevant', 'Best match'], ['time', 'Smallest yardage'], ['skill', 'Easiest first']].map(([k, lbl]) => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    active: sort === k,
    onClick: () => setSort(k)
  }, lbl))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, sorted.map(p => /*#__PURE__*/React.createElement(PatternCard, {
    key: p.id,
    p: p,
    saved: saved.includes(p.id),
    onSave: () => toggleSave(p.id),
    onClick: () => go('detail', p.id)
  }))), patterns.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 8
    }
  }, "\uD83E\uDDF6"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 20,
      fontWeight: 700,
      margin: '0 0 6px',
      color: '#1F1A2C'
    }
  }, "No matches"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 13,
      color: 'rgba(31,26,44,0.6)',
      margin: 0
    }
  }, "Try loosening a filter or two.")));
}
function SavedScreen({
  go,
  saved,
  toggleSave
}) {
  const items = PATTERNS.filter(p => saved.includes(p.id));
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
  }, "Your stash."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      color: 'rgba(31,26,44,0.6)',
      fontWeight: 500
    }
  }, items.length, " saved ", items.length === 1 ? 'pattern' : 'patterns')), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 30px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 999,
      background: '#FFF',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset 0 0 0 1.5px rgba(31,26,44,0.1)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#E8516E",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.5-9.5-9.5C.5 7 4 3 8 4.5 10 5.2 11 7 12 8c1-1 2-2.8 4-3.5C20 3 23.5 7 21.5 11.5 19 16.5 12 21 12 21z"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 22,
      fontWeight: 700,
      margin: '0 0 6px',
      color: '#1F1A2C',
      letterSpacing: -0.5
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      color: 'rgba(31,26,44,0.6)',
      margin: '0 0 18px',
      fontWeight: 500
    }
  }, "Tap the heart on a pattern to save it for later."), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('search'),
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      background: '#1F1A2C',
      color: '#FFF8F0',
      padding: '12px 22px',
      borderRadius: 999,
      fontFamily: '"Plus Jakarta Sans",sans-serif',
      fontSize: 14,
      fontWeight: 700
    }
  }, "Browse patterns")) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, items.map(p => /*#__PURE__*/React.createElement(PatternCard, {
    key: p.id,
    p: p,
    saved: true,
    onSave: () => toggleSave(p.id),
    onClick: () => go('detail', p.id)
  }))));
}
Object.assign(window, {
  HomeScreen,
  SearchScreen,
  ResultsScreen,
  SavedScreen
});