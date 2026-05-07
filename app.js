const {
  useState: useAppState,
  useEffect: useAppEffect,
  useMemo: useAppMemo
} = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mysteryStyle": "blur"
} /*EDITMODE-END*/;
function BottomNav({
  route,
  go,
  savedCount
}) {
  const items = [{
    k: 'home',
    label: 'Home',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l9-8 9 8v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V11z"
    }))
  }, {
    k: 'search',
    label: 'Search',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 16l5 5"
    }))
  }, {
    k: 'mystery',
    label: 'Mystery',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 9a3 3 0 116 0c0 2-3 3-3 5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "18",
      r: "1.2",
      fill: "currentColor"
    }))
  }, {
    k: 'saved',
    label: 'Saved',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 21s-7-4.5-9.5-9.5C.5 7 4 3 8 4.5 10 5.2 11 7 12 8c1-1 2-2.8 4-3.5C20 3 23.5 7 21.5 11.5 19 16.5 12 21 12 21z",
      strokeLinejoin: "round"
    }))
  }, {
    k: 'learn',
    label: 'Learn',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 6l9-3 9 3-9 3-9-3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 6v6c0 2 4 4 9 4s9-2 9-4V6"
    }))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(255,248,240,0.92)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderTop: '1px solid rgba(31,26,44,0.06)',
      padding: '6px 8px 28px',
      display: 'flex',
      justifyContent: 'space-around',
      zIndex: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement(NavBtn, {
    key: it.k,
    active: route === it.k,
    label: it.label,
    onClick: () => go(it.k)
  }, it.icon, it.k === 'saved' && savedCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      right: 8,
      minWidth: 14,
      height: 14,
      borderRadius: 999,
      background: '#E8516E',
      color: '#FFF8F0',
      fontSize: 9,
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 3px'
    }
  }, savedCount))));
}
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useAppState({
    name: 'home',
    id: null
  });
  const [filters, setFilters] = useAppState({});
  const [saved, setSaved] = useAppState(['p1', 'p3']);
  const [mysteryId, setMysteryId] = useAppState(null);
  const [mysteryDone, setMysteryDone] = useAppState(false);
  useAppEffect(() => {
    window.__mysteryStyle = tweaks.mysteryStyle;
  }, [tweaks.mysteryStyle]);
  const go = (name, id, extraFilters) => {
    if (extraFilters) setFilters(f => ({
      ...f,
      ...extraFilters
    }));
    setRoute({
      name,
      id
    });
    setTimeout(() => {
      const sc = document.getElementById('scroll-area');
      if (sc) sc.scrollTop = 0;
    }, 0);
  };
  const toggleSave = id => setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const filtered = useAppMemo(() => PATTERNS.filter(p => {
    if (filters.q) {
      const q = filters.q.toLowerCase();
      if (!p.title.toLowerCase().includes(q) && !p.designer.toLowerCase().includes(q) && !p.project.toLowerCase().includes(q) && !p.type.toLowerCase().includes(q)) return false;
    }
    if (filters.type && p.type !== filters.type) return false;
    if (filters.skill && p.skill !== filters.skill) return false;
    if (filters.projects && filters.projects.length && !filters.projects.includes(p.project)) return false;
    if (filters.designers && filters.designers.length && !filters.designers.includes(p.designer)) return false;
    if (filters.hookMm) {
      if (Math.abs(p.hookMm - filters.hookMm) > 1.0) return false;
    }
    if (filters.yarnN != null) {
      const yn = parseInt(p.yarn.match(/\((\d)\)/)?.[1] ?? -1);
      if (yn !== filters.yarnN) return false;
    }
    if (filters.yardage && filters.yardage > 0) {
      if (p.yardage > filters.yardage) return false;
    }
    return true;
  }), [filters]);
  const currentPattern = useAppMemo(() => route.name === 'detail' ? PATTERNS.find(p => p.id === route.id) : null, [route]);
  const isMysteryDetail = route.name === 'detail' && route.id === mysteryId;
  let screen;
  switch (route.name) {
    case 'home':
      screen = /*#__PURE__*/React.createElement(HomeScreen, {
        go: go,
        saved: saved,
        toggleSave: toggleSave
      });
      break;
    case 'search':
      screen = /*#__PURE__*/React.createElement(SearchScreen, {
        go: go,
        filters: filters,
        setFilters: setFilters,
        resultCount: filtered.length
      });
      break;
    case 'results':
      screen = /*#__PURE__*/React.createElement(ResultsScreen, {
        go: go,
        patterns: filtered,
        saved: saved,
        toggleSave: toggleSave,
        filters: filters
      });
      break;
    case 'detail':
      screen = /*#__PURE__*/React.createElement(DetailScreen, {
        go: go,
        p: currentPattern,
        saved: saved.includes(route.id),
        toggleSave: () => toggleSave(route.id),
        isMystery: isMysteryDetail && !mysteryDone,
        onMysteryComplete: () => setMysteryDone(true)
      });
      break;
    case 'mystery':
      screen = /*#__PURE__*/React.createElement(MysteryScreen, {
        go: go,
        onPick: id => {
          setMysteryId(id);
          setMysteryDone(false);
          go('detail', id);
        },
        mysteryStyle: tweaks.mysteryStyle
      });
      break;
    case 'saved':
      screen = /*#__PURE__*/React.createElement(SavedScreen, {
        go: go,
        saved: saved,
        toggleSave: toggleSave
      });
      break;
    case 'learn':
      screen = /*#__PURE__*/React.createElement(LearnScreen, {
        go: go
      });
      break;
    default:
      screen = /*#__PURE__*/React.createElement(HomeScreen, {
        go: go,
        saved: saved,
        toggleSave: toggleSave
      });
  }
  const hideNav = ['detail', 'mystery', 'search', 'results'].includes(route.name);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IOSDevice, {
    width: 402,
    height: 874
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: '#FFF8F0',
      fontFamily: '"Plus Jakarta Sans",system-ui,sans-serif',
      color: '#1F1A2C',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, null), /*#__PURE__*/React.createElement("div", {
    id: "scroll-area",
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      WebkitOverflowScrolling: 'touch'
    }
  }, screen), !hideNav && /*#__PURE__*/React.createElement(BottomNav, {
    route: route.name,
    go: go,
    savedCount: saved.length
  }))), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Mystery reveal style"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Style",
    value: tweaks.mysteryStyle,
    options: ['blur', 'silhouette', 'locked'],
    onChange: v => setTweak('mysteryStyle', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(ProjectShot, {
    color: "#F5B83D",
    label: "preview",
    height: 120,
    radius: 12,
    locked: true,
    revealStyle: tweaks.mysteryStyle
  })))));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));