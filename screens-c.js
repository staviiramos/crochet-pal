const {
  useState: useStateC,
  useEffect: useEffectC,
  useRef: useRefC
} = React;
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'openai/gpt-oss-120b';
const KEY_GROQ = 'cp.groqKey';
const KEY_DRAFT = 'cp.draft';
const KEY_MINE = 'cp.myPatterns';
const EMPTY_DRAFT = {
  title: '',
  notes: '',
  result: ''
};
const WRITE_UP_PROMPT = `You turn a crocheter's dictated, messy notes into a clean written crochet pattern.
Output plain text only, no markdown symbols (no #, *, or backticks).
Use this layout:
Title on the first line.
MATERIALS: yarn, hook size, other notions (only what the notes mention; write "not mentioned" if nothing is).
GAUGE: only if the notes mention it; otherwise omit this section.
ABBREVIATIONS: US terms used (sc, dc, inc, dec, ch, sl st, etc.).
PATTERN: numbered rows or rounds ("Rnd 1:" for work in the round, "Row 1:" for flat work), each ending with the stitch count in parentheses, e.g. "(12 sts)". Collapse repeated identical rows into ranges like "Rnd 5-8: sc around (24 sts)".
FINISHING: if the notes mention it.
Do not invent steps, sizes or counts the notes do not support. If a stitch count cannot be worked out, write "(count?)" so the maker can fill it in.`;
const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  border: 'none',
  outline: 'none',
  background: '#FFF',
  borderRadius: 14,
  padding: '12px 14px',
  fontFamily: '"Plus Jakarta Sans",sans-serif',
  fontSize: 15,
  fontWeight: 500,
  color: '#1F1A2C',
  boxShadow: 'inset 0 0 0 1.5px rgba(31,26,44,0.12)'
};
const textareaStyle = {
  ...inputStyle,
  minHeight: 180,
  lineHeight: 1.5,
  resize: 'vertical'
};
function pillBtn(bg, fg) {
  return {
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    background: bg,
    color: fg,
    padding: '12px 22px',
    borderRadius: 999,
    fontFamily: '"Plus Jakarta Sans",sans-serif',
    fontSize: 14,
    fontWeight: 700
  };
}
const labelStyle = {
  display: 'block',
  margin: '18px 0 8px',
  fontFamily: '"Plus Jakarta Sans",sans-serif',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: 1,
  textTransform: 'uppercase',
  color: 'rgba(31,26,44,0.55)'
};
async function writeUpPattern(key, title, notes) {
  const res = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + key
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.2,
      messages: [{
        role: 'system',
        content: WRITE_UP_PROMPT
      }, {
        role: 'user',
        content: (title ? 'Working title: ' + title + '\n\n' : '') + 'Notes:\n' + notes
      }]
    })
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error?.message || 'Groq request failed (' + res.status + ')');
  return body.choices[0].message.content.trim();
}

// Chrome on Android repeats results in continuous mode, so recognise one
// utterance at a time and restart on `end` while the mic is on.
function useDictation(onFinal) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const [listening, setListening] = useStateC(false);
  const [interim, setInterim] = useStateC('');
  const [error, setError] = useStateC(null);
  const recRef = useRefC(null);
  const wantRef = useRefC(false);
  const onFinalRef = useRefC(onFinal);
  onFinalRef.current = onFinal;
  const start = () => {
    setError(null);
    const rec = new Recognition();
    rec.lang = navigator.language;
    rec.continuous = false;
    rec.interimResults = true;
    rec.onresult = e => {
      let text = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) onFinalRef.current(r[0].transcript.trim());else text += r[0].transcript;
      }
      setInterim(text);
    };
    rec.onerror = e => {
      if (e.error === 'no-speech' || e.error === 'aborted') return;
      wantRef.current = false;
      setError(e.error === 'not-allowed' ? 'Microphone access was blocked. Allow it in Chrome site settings.' : 'Dictation error: ' + e.error);
    };
    rec.onend = () => {
      setInterim('');
      if (wantRef.current) rec.start();else setListening(false);
    };
    recRef.current = rec;
    wantRef.current = true;
    rec.start();
    setListening(true);
  };
  const stop = () => {
    wantRef.current = false;
    recRef.current.stop();
  };
  useEffectC(() => () => {
    wantRef.current = false;
    if (recRef.current) recRef.current.abort();
  }, []);
  return {
    supported: !!Recognition,
    listening,
    interim,
    error,
    start,
    stop
  };
}
function MicButton({
  listening,
  onClick
}) {
  return React.createElement("button", {
    onClick: onClick,
    "aria-label": listening ? 'Stop dictation' : 'Start dictation',
    style: {
      width: 88,
      height: 88,
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: listening ? '#E8516E' : '#1F1A2C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: listening ? '0 0 0 8px rgba(232,81,110,0.18),0 8px 22px rgba(232,81,110,0.35)' : '0 8px 22px rgba(31,26,44,0.25)',
      transition: 'all 160ms ease'
    }
  }, listening ? React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 6,
      background: '#FFF8F0'
    }
  }) : React.createElement("svg", {
    width: "34",
    height: "34",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#FFF8F0",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "11",
    rx: "3",
    fill: "#FFF8F0"
  }), React.createElement("path", {
    d: "M5 11a7 7 0 0014 0M12 18v3"
  })));
}
function GroqKeyBox({
  onSave
}) {
  const [value, setValue] = useStateC('');
  return React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 16,
      background: '#FFF',
      borderRadius: 18,
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 6px 18px rgba(31,26,44,0.06)'
    }
  }, React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.4
    }
  }, "Paste your Groq API key to write up patterns. It stays on this phone."), React.createElement("input", {
    type: "password",
    value: value,
    placeholder: "gsk_…",
    onChange: e => setValue(e.target.value),
    style: inputStyle
  }), React.createElement("button", {
    onClick: () => onSave(value.trim()),
    disabled: !value.trim(),
    style: {
      ...pillBtn('#1F1A2C', '#FFF8F0'),
      marginTop: 12,
      opacity: value.trim() ? 1 : 0.4
    }
  }, "Save key"));
}
function RecordView({
  onSaved
}) {
  const [draft, setDraft] = useStateC(() => loadJSON(KEY_DRAFT, EMPTY_DRAFT));
  const [groqKey, setGroqKey] = useStateC(() => localStorage.getItem(KEY_GROQ));
  const [busy, setBusy] = useStateC(false);
  const [apiError, setApiError] = useStateC(null);
  useEffectC(() => saveJSON(KEY_DRAFT, draft), [draft]);
  const update = patch => setDraft(d => ({
    ...d,
    ...patch
  }));
  const dictation = useDictation(text => {
    if (text) setDraft(d => ({
      ...d,
      notes: d.notes ? d.notes + '\n' + text : text
    }));
  });
  const saveKey = k => {
    localStorage.setItem(KEY_GROQ, k);
    setGroqKey(k);
  };
  const forgetKey = () => {
    localStorage.removeItem(KEY_GROQ);
    setGroqKey(null);
  };
  const writeUp = async () => {
    setBusy(true);
    setApiError(null);
    try {
      update({
        result: await writeUpPattern(groqKey, draft.title, draft.notes)
      });
    } catch (e) {
      setApiError(e.message);
    } finally {
      setBusy(false);
    }
  };
  const save = () => {
    const now = Date.now();
    const title = draft.title.trim() || draft.result.split('\n')[0].trim() || 'Untitled pattern';
    const mine = loadJSON(KEY_MINE, []);
    saveJSON(KEY_MINE, [{
      id: 'm' + now,
      title,
      notes: draft.notes,
      text: draft.result,
      createdAt: now,
      updatedAt: now
    }, ...mine]);
    // onSaved unmounts this view, so the draft effect won't run; clear storage here.
    saveJSON(KEY_DRAFT, EMPTY_DRAFT);
    onSaved();
  };
  const canWrite = !!draft.notes.trim() && !busy;
  return React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, React.createElement("label", {
    style: labelStyle
  }, "Working title"), React.createElement("input", {
    value: draft.title,
    placeholder: "e.g. Chunky bee amigurumi",
    onChange: e => update({
      title: e.target.value
    }),
    style: inputStyle
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      margin: '24px 0 6px'
    }
  }, dictation.supported ? React.createElement(React.Fragment, null, React.createElement(MicButton, {
    listening: dictation.listening,
    onClick: dictation.listening ? dictation.stop : dictation.start
  }), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(31,26,44,0.6)',
      minHeight: 18,
      textAlign: 'center'
    }
  }, dictation.interim || (dictation.listening ? 'Listening… say each row as you finish it' : 'Tap to dictate rows'))) : React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'rgba(31,26,44,0.6)'
    }
  }, "Dictation isn't available in this browser. Type your notes below."), dictation.error && React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#E8516E',
      textAlign: 'center'
    }
  }, dictation.error)), React.createElement("label", {
    style: labelStyle
  }, "Notes"), React.createElement("textarea", {
    value: draft.notes,
    placeholder: "Round 1, magic ring, six single crochet…",
    onChange: e => update({
      notes: e.target.value
    }),
    style: textareaStyle
  }), !groqKey ? React.createElement(GroqKeyBox, {
    onSave: saveKey
  }) : React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, React.createElement("button", {
    onClick: writeUp,
    disabled: !canWrite,
    style: {
      ...pillBtn('#F5B83D', '#1F1A2C'),
      opacity: canWrite ? 1 : 0.4
    }
  }, busy ? 'Writing…' : draft.result ? 'Write it up again' : 'Write it up'), React.createElement("button", {
    onClick: forgetKey,
    style: {
      ...pillBtn('transparent', '#7B7CE0'),
      padding: '12px 0'
    }
  }, "Change key")), apiError && React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 13,
      fontWeight: 600,
      color: '#E8516E'
    }
  }, apiError), draft.result && React.createElement(React.Fragment, null, React.createElement("label", {
    style: labelStyle
  }, "Written pattern"), React.createElement("textarea", {
    value: draft.result,
    onChange: e => update({
      result: e.target.value
    }),
    style: {
      ...textareaStyle,
      minHeight: 320,
      fontFamily: '"JetBrains Mono",ui-monospace,monospace',
      fontSize: 13
    }
  }), React.createElement("button", {
    onClick: save,
    style: {
      ...pillBtn('#1F1A2C', '#FFF8F0'),
      marginTop: 14
    }
  }, "Save to My patterns")));
}
function MyPatternEditor({
  pattern,
  onSave,
  onDelete,
  onBack
}) {
  const [title, setTitle] = useStateC(pattern.title);
  const [text, setText] = useStateC(pattern.text);
  const [notes, setNotes] = useStateC(pattern.notes);
  return React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, React.createElement("button", {
    onClick: onBack,
    style: {
      ...pillBtn('transparent', '#7B7CE0'),
      padding: '4px 0'
    }
  }, "← My patterns"), React.createElement("label", {
    style: labelStyle
  }, "Title"), React.createElement("input", {
    value: title,
    onChange: e => setTitle(e.target.value),
    style: inputStyle
  }), React.createElement("label", {
    style: labelStyle
  }, "Pattern"), React.createElement("textarea", {
    value: text,
    onChange: e => setText(e.target.value),
    style: {
      ...textareaStyle,
      minHeight: 320,
      fontFamily: '"JetBrains Mono",ui-monospace,monospace',
      fontSize: 13
    }
  }), React.createElement("label", {
    style: labelStyle
  }, "Original notes"), React.createElement("textarea", {
    value: notes,
    onChange: e => setNotes(e.target.value),
    style: textareaStyle
  }), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 14
    }
  }, React.createElement("button", {
    onClick: () => onSave({
      ...pattern,
      title: title.trim() || 'Untitled pattern',
      text,
      notes,
      updatedAt: Date.now()
    }),
    style: pillBtn('#1F1A2C', '#FFF8F0')
  }, "Save changes"), React.createElement("button", {
    onClick: () => {
      if (confirm('Delete "' + pattern.title + '"?')) onDelete(pattern.id);
    },
    style: pillBtn('#FFF', '#E8516E')
  }, "Delete")));
}
function MyPatternsView() {
  const [mine, setMine] = useStateC(() => loadJSON(KEY_MINE, []));
  const [openId, setOpenId] = useStateC(null);
  const persist = next => {
    saveJSON(KEY_MINE, next);
    setMine(next);
  };
  const open = mine.find(m => m.id === openId);
  if (open) return React.createElement(MyPatternEditor, {
    key: open.id,
    pattern: open,
    onBack: () => setOpenId(null),
    onSave: p => {
      persist(mine.map(m => m.id === p.id ? p : m));
      setOpenId(null);
    },
    onDelete: id => {
      persist(mine.filter(m => m.id !== id));
      setOpenId(null);
    }
  });
  if (mine.length === 0) return React.createElement("p", {
    style: {
      padding: '40px 30px',
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 500,
      color: 'rgba(31,26,44,0.6)'
    }
  }, "No recorded patterns yet. Dictate one in Record.");
  return React.createElement("div", {
    style: {
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, mine.map(m => React.createElement("div", {
    key: m.id,
    onClick: () => setOpenId(m.id),
    style: {
      background: '#FFF',
      borderRadius: 18,
      padding: '14px 16px',
      cursor: 'pointer',
      boxShadow: '0 1px 0 rgba(31,26,44,0.04),0 6px 18px rgba(31,26,44,0.06)'
    }
  }, React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, m.title), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      fontWeight: 500,
      color: 'rgba(31,26,44,0.6)'
    }
  }, "Edited ", new Date(m.updatedAt).toLocaleDateString()))));
}
function MakeScreen() {
  const [tab, setTab] = useStateC('record');
  return React.createElement("div", {
    style: {
      paddingBottom: 110
    }
  }, React.createElement("div", {
    style: {
      padding: '8px 20px 14px'
    }
  }, React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: '"Bricolage Grotesque",serif',
      fontSize: 34,
      fontWeight: 800,
      color: '#1F1A2C',
      lineHeight: 1,
      letterSpacing: -1.2
    }
  }, "Make your own."), React.createElement("p", {
    style: {
      margin: '6px 0 14px',
      fontSize: 14,
      color: 'rgba(31,26,44,0.6)',
      fontWeight: 500
    }
  }, "Talk through rows as you hook, then write it up."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, React.createElement(Chip, {
    active: tab === 'record',
    onClick: () => setTab('record')
  }, "Record"), React.createElement(Chip, {
    active: tab === 'mine',
    onClick: () => setTab('mine')
  }, "My patterns"))), tab === 'record' ? React.createElement(RecordView, {
    onSaved: () => setTab('mine')
  }) : React.createElement(MyPatternsView, null));
}
Object.assign(window, {
  MakeScreen
});
