const PATTERNS = [{
  id: 'p1',
  title: 'Cloudpuff Bucket Hat',
  designer: 'Mara Holloway',
  designerUrl: 'https://ravelry.com/designers/mara-holloway',
  type: 'Standard',
  project: 'Accessory',
  skill: 'Beginner',
  yarn: 'Worsted (4)',
  yardage: 220,
  hookMm: 5.0,
  hookUS: 'H/8',
  time: '3–4 hrs',
  stitches: ['ch', 'sc', 'hdc', 'sl st'],
  color: '#F5B83D',
  blurb: 'A squishy ribbed bucket with a tiny upturned brim. Worked in continuous rounds.',
  rows: 18
}, {
  id: 'p2',
  title: 'Tunisian Honeycomb Throw',
  designer: 'Iris Okafor',
  designerUrl: 'https://irisokafor.studio',
  type: 'Tunisian',
  project: 'Blanket',
  skill: 'Intermediate',
  yarn: 'Aran (4)',
  yardage: 1800,
  hookMm: 6.5,
  hookUS: 'K/10.5',
  time: '20+ hrs',
  stitches: ['tss', 'tps', 'tks'],
  color: '#7BA88B',
  blurb: 'A textured honeycomb panel blanket. Forward and return passes throughout.',
  rows: 96
}, {
  id: 'p3',
  title: 'Pocket Pal Octopus',
  designer: 'June Castellanos',
  designerUrl: 'https://junecastellanos.com',
  type: 'Amigurumi',
  project: 'Toy',
  skill: 'Beginner',
  yarn: 'DK (3)',
  yardage: 140,
  hookMm: 3.5,
  hookUS: 'E/4',
  time: '2 hrs',
  stitches: ['mr', 'sc', 'inc', 'dec'],
  color: '#E8516E',
  blurb: 'Palm-sized octopus with eight curly tentacles. Stuffed firmly.',
  rows: 22
}, {
  id: 'p4',
  title: 'Filet Window Curtain',
  designer: 'Petra Lindqvist',
  designerUrl: 'https://petralindqvist.se',
  type: 'Filet',
  project: 'Home',
  skill: 'Advanced',
  yarn: 'Lace (0)',
  yardage: 900,
  hookMm: 1.75,
  hookUS: '6 steel',
  time: '15+ hrs',
  stitches: ['ch', 'dc'],
  color: '#7B7CE0',
  blurb: 'Open-mesh filet curtain with a vine motif. Charted, not written.',
  rows: 140
}, {
  id: 'p5',
  title: 'Sunday Sweater Vest',
  designer: 'Aki Tanaka',
  designerUrl: 'https://akitanaka.knits',
  type: 'Standard',
  project: 'Garment',
  skill: 'Intermediate',
  yarn: 'Sport (2)',
  yardage: 950,
  hookMm: 4.0,
  hookUS: 'G/6',
  time: '12 hrs',
  stitches: ['ch', 'dc', 'fpdc', 'bpdc'],
  color: '#F5B83D',
  blurb: 'Cropped vest with ribbed yoke. Seamless, top-down.',
  rows: 64
}, {
  id: 'p6',
  title: 'Broomstick Lace Shawl',
  designer: 'Noor Hadid',
  designerUrl: 'https://noorhadid.com',
  type: 'Broomstick',
  project: 'Accessory',
  skill: 'Intermediate',
  yarn: 'Fingering (1)',
  yardage: 600,
  hookMm: 4.0,
  hookUS: 'G/6',
  time: '8 hrs',
  stitches: ['ch', 'sc', 'broom loop'],
  color: '#E8516E',
  blurb: 'Airy lace using a 25mm broomstick (or large knitting needle).',
  rows: 40
}, {
  id: 'p7',
  title: 'Granny Square Tote',
  designer: 'Lila Brennan',
  designerUrl: 'https://lilabrennan.shop',
  type: 'Standard',
  project: 'Accessory',
  skill: 'Beginner',
  yarn: 'Worsted (4)',
  yardage: 480,
  hookMm: 5.5,
  hookUS: 'I/9',
  time: '6 hrs',
  stitches: ['ch', 'dc', 'sl st'],
  color: '#7BA88B',
  blurb: 'Twelve classic granny squares seamed into a market bag.',
  rows: 36
}, {
  id: 'p8',
  title: 'Tunisian Wash Set',
  designer: 'Sage Dubois',
  designerUrl: 'https://sagedubois.fiber',
  type: 'Tunisian',
  project: 'Home',
  skill: 'Beginner',
  yarn: 'Cotton Worsted (4)',
  yardage: 200,
  hookMm: 5.0,
  hookUS: 'H/8',
  time: '2 hrs',
  stitches: ['tss', 'tks'],
  color: '#7B7CE0',
  blurb: 'A trio of textured washcloths — perfect first Tunisian project.',
  rows: 30
}];
const HOOK_SIZES = [{
  mm: 2.25,
  us: 'B/1'
}, {
  mm: 2.75,
  us: 'C/2'
}, {
  mm: 3.25,
  us: 'D/3'
}, {
  mm: 3.5,
  us: 'E/4'
}, {
  mm: 3.75,
  us: 'F/5'
}, {
  mm: 4.0,
  us: 'G/6'
}, {
  mm: 4.5,
  us: '7'
}, {
  mm: 5.0,
  us: 'H/8'
}, {
  mm: 5.5,
  us: 'I/9'
}, {
  mm: 6.0,
  us: 'J/10'
}, {
  mm: 6.5,
  us: 'K/10.5'
}, {
  mm: 8.0,
  us: 'L/11'
}, {
  mm: 9.0,
  us: 'M/13'
}, {
  mm: 10.0,
  us: 'N/15'
}, {
  mm: 15.0,
  us: 'P/Q'
}];
const YARN_WEIGHTS = [{
  n: 0,
  name: 'Lace'
}, {
  n: 1,
  name: 'Fingering'
}, {
  n: 2,
  name: 'Sport'
}, {
  n: 3,
  name: 'DK'
}, {
  n: 4,
  name: 'Worsted'
}, {
  n: 5,
  name: 'Bulky'
}, {
  n: 6,
  name: 'Super Bulky'
}, {
  n: 7,
  name: 'Jumbo'
}];
const CROCHET_TYPES = ['Standard', 'Tunisian', 'Amigurumi', 'Filet', 'Broomstick'];
const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const PROJECT_TYPES = ['Garment', 'Blanket', 'Toy', 'Accessory', 'Home'];
const STITCH_GLOSSARY = [{
  abbr: 'ch',
  name: 'Chain',
  cat: 'Foundation',
  desc: 'Yarn over, pull through loop on hook.'
}, {
  abbr: 'sl st',
  name: 'Slip Stitch',
  cat: 'Foundation',
  desc: 'Insert hook, yarn over, pull through stitch and loop on hook.'
}, {
  abbr: 'sc',
  name: 'Single Crochet',
  cat: 'Basic',
  desc: 'Insert hook, yarn over, pull up loop, yarn over, pull through both.'
}, {
  abbr: 'hdc',
  name: 'Half Double Crochet',
  cat: 'Basic',
  desc: 'Yarn over, insert hook, pull up loop, yarn over, pull through all three.'
}, {
  abbr: 'dc',
  name: 'Double Crochet',
  cat: 'Basic',
  desc: 'Yarn over, insert hook, pull up loop, [yarn over, pull through 2] twice.'
}, {
  abbr: 'tr',
  name: 'Treble Crochet',
  cat: 'Basic',
  desc: 'Yarn over twice, insert hook, pull up loop, [yarn over, pull through 2] three times.'
}, {
  abbr: 'mr',
  name: 'Magic Ring',
  cat: 'Amigurumi',
  desc: 'Adjustable starting loop for working in the round.'
}, {
  abbr: 'inc',
  name: 'Increase',
  cat: 'Amigurumi',
  desc: 'Two stitches worked into the same stitch.'
}, {
  abbr: 'dec',
  name: 'Invisible Decrease',
  cat: 'Amigurumi',
  desc: 'Insert hook in front loops of next two stitches, yarn over, pull through both, then yarn over and pull through.'
}, {
  abbr: 'tss',
  name: 'Tunisian Simple Stitch',
  cat: 'Tunisian',
  desc: 'Forward pass: pick up loops through vertical bars. Return pass: yarn over, pull through 2 across.'
}, {
  abbr: 'tks',
  name: 'Tunisian Knit Stitch',
  cat: 'Tunisian',
  desc: 'Forward pass: insert hook between vertical bars, behind front bar. Knit-like fabric.'
}, {
  abbr: 'tps',
  name: 'Tunisian Purl Stitch',
  cat: 'Tunisian',
  desc: 'Forward pass: yarn forward, insert hook through vertical bar, pull up loop.'
}, {
  abbr: 'fpdc',
  name: 'Front Post DC',
  cat: 'Texture',
  desc: 'Double crochet around the post of the stitch from the front.'
}, {
  abbr: 'bpdc',
  name: 'Back Post DC',
  cat: 'Texture',
  desc: 'Double crochet around the post of the stitch from the back.'
}];
const LESSONS = [{
  id: 'l1',
  track: 'Crochet Basics',
  title: 'Holding Your Hook & Yarn',
  mins: 6,
  done: true
}, {
  id: 'l2',
  track: 'Crochet Basics',
  title: 'Slip Knot & Foundation Chain',
  mins: 8,
  done: true
}, {
  id: 'l3',
  track: 'Crochet Basics',
  title: 'Your First Single Crochet Row',
  mins: 10,
  done: true
}, {
  id: 'l4',
  track: 'Crochet Basics',
  title: 'Turning Chains, Explained',
  mins: 7,
  done: false
}, {
  id: 'l5',
  track: 'Crochet Basics',
  title: 'Reading a Written Pattern',
  mins: 12,
  done: false
}, {
  id: 'l6',
  track: 'Crochet Basics',
  title: 'Tension & Gauge Swatches',
  mins: 9,
  done: false
}, {
  id: 't1',
  track: 'Tunisian Crochet',
  title: 'What Makes Tunisian Different',
  mins: 5,
  done: true
}, {
  id: 't2',
  track: 'Tunisian Crochet',
  title: 'Forward Pass / Return Pass',
  mins: 11,
  done: false
}, {
  id: 't3',
  track: 'Tunisian Crochet',
  title: 'Tunisian Simple Stitch (TSS)',
  mins: 9,
  done: false
}, {
  id: 't4',
  track: 'Tunisian Crochet',
  title: 'Knit & Purl Stitches',
  mins: 10,
  done: false
}, {
  id: 'a1',
  track: 'Amigurumi',
  title: 'Magic Ring Without Tears',
  mins: 6,
  done: false
}, {
  id: 'a2',
  track: 'Amigurumi',
  title: 'Invisible Decrease',
  mins: 5,
  done: false
}, {
  id: 'a3',
  track: 'Amigurumi',
  title: 'Stuffing & Closing Spheres',
  mins: 8,
  done: false
}];
Object.assign(window, {
  PATTERNS,
  HOOK_SIZES,
  YARN_WEIGHTS,
  CROCHET_TYPES,
  SKILL_LEVELS,
  PROJECT_TYPES,
  STITCH_GLOSSARY,
  LESSONS
});