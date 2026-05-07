const PATTERNS = [
  {
    id:'p1',title:'Cloudpuff Bucket Hat',designer:'Mara Holloway',designerUrl:'https://ravelry.com/designers/mara-holloway',
    type:'Standard',project:'Accessory',skill:'Beginner',yarn:'Worsted (4)',yardage:220,hookMm:5.0,hookUS:'H/8',
    time:'3–4 hrs',stitches:['ch','sc','hdc','sl st'],color:'#F5B83D',
    blurb:'A squishy ribbed bucket with a tiny upturned brim. Worked in continuous rounds.',rows:18,
    fullPattern:`GAUGE: 14 sc x 16 rows = 4 inches

BRIM (worked flat):
R1: Ch 7. Sc in 2nd ch from hook and each ch across. (6 sts)
R2–40: Ch 1, turn. Sc in BLO of each st across. (6 sts)
Fold strip and sl st ends together to form a ring.

CROWN (worked in continuous rounds):
R1: Join yarn at seam. Ch 1. Work 60 sc evenly around brim. PM. (60)
R2: Sc in each sc around. (60)
R3: [Sc in next 4 sc, 2 sc in next] x12. (72)
R4–R10: Sc in each sc around. (72)
R11: [Sc in next 4 sc, sc2tog] x12. (60)
R12: [Sc in next 3 sc, sc2tog] x12. (48)
R13: [Sc in next 2 sc, sc2tog] x12. (36)
R14: [Sc in next sc, sc2tog] x12. (24)
R15: [Sc2tog] x12. (12)
R16: [Sc2tog] x6. (6)

Fasten off. Thread tail through remaining 6 sts, pull tight. Weave in ends. Fold brim up 1".`,
  },
  {
    id:'p2',title:'Tunisian Honeycomb Throw',designer:'Iris Okafor',designerUrl:'https://irisokafor.studio',
    type:'Tunisian',project:'Blanket',skill:'Intermediate',yarn:'Aran (4)',yardage:1800,hookMm:6.5,hookUS:'K/10.5',
    time:'20+ hrs',stitches:['tss','tps','tks'],color:'#7BA88B',
    blurb:'A textured honeycomb panel blanket. Forward and return passes throughout.',rows:96,
    fullPattern:`GAUGE: 14 sts x 12 rows = 4 inches in TSS

FOUNDATION:
Ch 90. Foundation FP: Pick up loop in 2nd ch from hook and each ch across. (90 loops)
Foundation RP: Yo, pull through 1; *yo, pull through 2* across.

RP (all rows): Yo, pull through 1; *yo, pull through 2* across.

HONEYCOMB PATTERN (6-st repeat):
R1 FP: *Tss 3, tps 3* across.
R2 FP: *Tss 3, tps 3* across.
R3 FP: *Tss 3, tps 3* across.
R4 FP: *Tps 3, tss 3* across.
R5 FP: *Tps 3, tss 3* across.
R6 FP: *Tps 3, tss 3* across.

Repeat R1–R6 a total of 16 times (96 rows total).

BIND OFF: Sl st in each vertical bar across. Fasten off.
Block lightly with steam. Weave in all ends.`,
  },
  {
    id:'p3',title:'Pocket Pal Octopus',designer:'June Castellanos',designerUrl:'https://junecastellanos.com',
    type:'Amigurumi',project:'Toy',skill:'Beginner',yarn:'DK (3)',yardage:140,hookMm:3.5,hookUS:'E/4',
    time:'2 hrs',stitches:['mr','sc','inc','dec'],color:'#E8516E',
    blurb:'Palm-sized octopus with eight curly tentacles. Stuffed firmly.',rows:22,
    fullPattern:`GAUGE: 18 sc x 20 rows = 4 inches

HEAD:
R1: Mr, 6 sc into ring. (6)
R2: [Inc] x6. (12)
R3: [Sc, inc] x6. (18)
R4: [2 sc, inc] x6. (24)
R5: [3 sc, inc] x6. (30)
R6: [4 sc, inc] x6. (36)
R7–R14: Sc in each sc around. (36)
R15: [4 sc, dec] x6. (30)
R16: [3 sc, dec] x6. (24)
— Stuff head firmly here —
R17: [2 sc, dec] x6. (18)
R18: [Sc, dec] x6. (12)
R19: [Dec] x6. (6)
Fasten off, close hole, weave in end.

EYES: Attach 9mm safety eyes between R12–R13, 6 sts apart.

TENTACLES (make 8):
Ch 25. Starting in 2nd ch from hook: *3 sc in next ch* across. (curls naturally)
Fasten off leaving 8" tail. Attach 8 tentacles evenly around bottom of head.`,
  },
  {
    id:'p4',title:'Filet Window Curtain',designer:'Petra Lindqvist',designerUrl:'https://petralindqvist.se',
    type:'Filet',project:'Home',skill:'Advanced',yarn:'Lace (0)',yardage:900,hookMm:1.75,hookUS:'6 steel',
    time:'15+ hrs',stitches:['ch','dc'],color:'#7B7CE0',
    blurb:'Open-mesh filet curtain with a vine motif. Charted, not written.',rows:140,
    fullPattern:`GAUGE: 28 dc x 14 rows = 4 inches

Open mesh (O): Ch 2, skip 2, dc in next.
Filled mesh (X): Dc in each of next 3 sts.
Each row: Ch 5 turn (= dc + ch 2).

FOUNDATION: Ch 203. Dc in 8th ch. *Ch 2, skip 2, dc* across. (67 mesh)

R1–R10: All open mesh — plain grid base.

R11–R30: Vine motif. Work filled meshes per chart:
  Row 11: 5O 3X 2O 3X 5O 3X 2O 3X 5O (repeat across)
  Rows 12–30: Tendrils extend; refer to chart for leaf positions.

R31–R60: Large leaf panels. Center 15 meshes form leaf; open mesh surrounds.

R61–R100: Repeat vine motif (rows 11–30) twice more.

R101–R130: Open mesh throughout.

R131–R140 (picot border): *Sc in next dc, ch 4, sc in same dc, sc in ch-2 sp* across bottom edge.

TOP: Work sl st and ch-4 loops evenly for hanging rod pocket.`,
  },
  {
    id:'p5',title:'Sunday Sweater Vest',designer:'Aki Tanaka',designerUrl:'https://akitanaka.knits',
    type:'Standard',project:'Garment',skill:'Intermediate',yarn:'Sport (2)',yardage:950,hookMm:4.0,hookUS:'G/6',
    time:'12 hrs',stitches:['ch','dc','fpdc','bpdc'],color:'#F5B83D',
    blurb:'Cropped vest with ribbed yoke. Seamless, top-down.',rows:64,
    fullPattern:`SIZE: S(M,L,XL) — instructions for M shown.
GAUGE: 16 dc x 10 rows = 4 inches

YOKE (top-down, in rounds):
Ch 72, sl st to join.
R1: Ch 3. Dc in each ch around. (72)
R2: Ch 3. [Fpdc, bpdc] around. (72) — rib established
R3–R10: Ch 3. [Fpdc over fpdc, bpdc over bpdc] around. (72)

BODY INCREASES:
R11: Ch 3. *Dc 8, inc* x8. (80)
R12: Dc around. (80)
R13: *Dc 9, inc* x8. (88)
R14–R20: Dc around. (88)

UNDERARM DIVIDE:
R21 (front): Dc 44, ch 4, skip 44 sts. Join and work 20 rows on front 44 sts.
Join yarn at back, work 44 sts same way for 20 rows.

ARMHOLE EDGING (each armhole):
Join yarn. Sc evenly around. [Fpdc, bpdc] x3 rounds. Fasten off.

BOTTOM RIBBING:
Join yarn at hem. [Fpdc, bpdc] x4 rounds. Fasten off.
Weave in all ends.`,
  },
  {
    id:'p6',title:'Broomstick Lace Shawl',designer:'Noor Hadid',designerUrl:'https://noorhadid.com',
    type:'Broomstick',project:'Accessory',skill:'Intermediate',yarn:'Fingering (1)',yardage:600,hookMm:4.0,hookUS:'G/6',
    time:'8 hrs',stitches:['ch','sc','broom loop'],color:'#E8516E',
    blurb:'Airy lace using a 25mm broomstick (or large knitting needle).',rows:40,
    fullPattern:`MATERIALS: G/6 (4mm) hook + 25mm dowel or large knitting needle

FOUNDATION: Ch 91. Sc in 2nd ch and each ch across. (90 sc)

BROOMSTICK REPEAT (2-row sequence):

Lace Row A — pull up loops:
  Insert hook in first st, pull loop up onto dowel.
  *Insert hook in next st, pull loop onto dowel* across. (90 loops on dowel)

Lace Row B — group and fill:
  *Slide 5 loops off dowel. Insert hook through all 5 loops together.
   Ch 1 to anchor. Work 5 sc through all 5 loops.*
  Repeat across. (18 groups of 5)

Repeat Lace Rows A & B for 40 rows total (20 full repeats).

BORDER:
Join yarn at corner. Sc evenly around all edges.
Round 2: *Sc 3, ch 3, sl st in 3rd ch from hook (picot)* around.
Fasten off.

Block firmly — pin to measurements, spritz with water, allow to dry fully.`,
  },
  {
    id:'p7',title:'Granny Square Tote',designer:'Lila Brennan',designerUrl:'https://lilabrennan.shop',
    type:'Standard',project:'Accessory',skill:'Beginner',yarn:'Worsted (4)',yardage:480,hookMm:5.5,hookUS:'I/9',
    time:'6 hrs',stitches:['ch','dc','sl st'],color:'#7BA88B',
    blurb:'Twelve classic granny squares seamed into a market bag.',rows:36,
    fullPattern:`MAKE 12 GRANNY SQUARES (each approx 6" x 6"):

ROUND 1:
Ch 4, sl st to join. Ch 3 (= dc). 2 dc in ring, ch 2. *3 dc, ch 2* x3. Sl st to ch-3. (4 clusters)

ROUND 2:
Sl st to ch-2 sp. Ch 3, 2 dc, ch 2, 3 dc (corner made).
*Ch 1, [3 dc, ch 2, 3 dc] in next ch-2 sp* x3. Ch 1. Sl st.

ROUND 3:
Sl st to ch-2 sp. Corner in sp.
*Ch 1, 3 dc in ch-1 sp, ch 1, corner in next ch-2 sp* x3. Ch 1, 3 dc, ch 1. Sl st.

ROUND 4 (border):
Sc in each dc and ch-1 sp; 3 sc in each corner ch-2 sp. Sl st. Fasten off.
Make 12 squares total.

ASSEMBLY:
Arrange: 3 wide x 2 tall for front panel; same for back.
Join with sl st through back loops, RS together.
Join front to back at sides and bottom.

HANDLES (make 2):
Ch 65. Sc across. Ch 1, turn. Work 3 more sc rows.
Fold and sl st edges together. Sew to inside top, 2" from each side.`,
  },
  {
    id:'p8',title:'Tunisian Wash Set',designer:'Sage Dubois',designerUrl:'https://sagedubois.fiber',
    type:'Tunisian',project:'Home',skill:'Beginner',yarn:'Cotton Worsted (4)',yardage:200,hookMm:5.0,hookUS:'H/8',
    time:'2 hrs',stitches:['tss','tks'],color:'#7B7CE0',
    blurb:'A trio of textured washcloths — perfect first Tunisian project.',rows:30,
    fullPattern:`MAKES 3 WASHCLOTHS (each approx 7" x 7")
GAUGE: 16 sts x 14 rows = 4 inches in TSS

FOUNDATION (all cloths):
Ch 29. FP: Pick up loop in 2nd ch and each ch. (29 loops)
RP: Yo, pull through 1; *yo, pull through 2* across.

— CLOTH A: Plain TSS —
R1–R30 FP: Tss in each vertical bar across.
R1–R30 RP: Standard return pass.

— CLOTH B: Stripe (TSS + TKS) —
R1–R2: Tss across.
R3–R4: Tks across (insert hook between front/back vertical bars).
Repeat R1–R4 for 30 rows.

— CLOTH C: Checkerboard —
R1–R2 FP: *Tss 4, tks 4* across, tss 1.
R3–R4 FP: *Tks 4, tss 4* across, tks 1.
Repeat R1–R4 for 30 rows.

BIND OFF (all cloths):
*Insert hook in vertical bar, yo, pull through bar AND loop on hook* across (sl st bind off).
Fasten off. Weave in ends. Block if desired.`,
  },
  {
    id:'p9',title:'Cozy Beehive Beanie',designer:'Rosa Ferreira',designerUrl:'https://rosaferreira.co',
    type:'Standard',project:'Accessory',skill:'Beginner',yarn:'Bulky (5)',yardage:180,hookMm:8.0,hookUS:'L/11',
    time:'2–3 hrs',stitches:['ch','sc','hdc','fpdc','bpdc'],color:'#F5B83D',
    blurb:'A textured beehive-stitch beanie worked from the brim up. Quick and cozy.',rows:16,
    fullPattern:`GAUGE: 9 hdc x 7 rows = 4 inches

BRIM (flat ribbing, then seamed):
Ch 9. Hdc in 2nd ch from hook and across. (8 sts)
R2–38: Ch 2, turn. Hdc in BLO across. (8 sts)
Sl st row 1 to row 38 to form brim ring.

CROWN (worked in joined rounds):
R1: Join yarn. Work 48 sc evenly around brim. Sl st. (48)
R2: Ch 2. Hdc in each sc around. Sl st. (48)
R3: Ch 2. *FPhdc around next, BPhdc around next* around. Sl st. (48)
R4: Ch 2. Hdc in each around. Sl st. (48)
R5–R12: Repeat R3–R4 four more times.

CROWN SHAPING:
R13: Ch 2. [Hdc 4, hdc2tog] x8. Sl st. (40)
R14: Ch 2. [Hdc 3, hdc2tog] x8. Sl st. (32)
R15: Ch 2. [Hdc 2, hdc2tog] x8. Sl st. (24)
R16: Ch 2. [Hdc2tog] x12. Sl st. (12)

Fasten off. Thread tail through 12 sts, pull tight. Weave in ends.`,
  },
  {
    id:'p10',title:'Linen Stitch Market Bag',designer:'Yuki Mori',designerUrl:'https://yukimori.craft',
    type:'Standard',project:'Accessory',skill:'Beginner',yarn:'DK (3)',yardage:320,hookMm:4.0,hookUS:'G/6',
    time:'5–6 hrs',stitches:['ch','sc','sl st'],color:'#7BA88B',
    blurb:'Sturdy flat-woven linen stitch bag. Great for farmers markets.',rows:44,
    fullPattern:`GAUGE: 20 sts x 22 rows = 4 inches in linen stitch

LINEN STITCH (flat, even number of sts):
Row A: Ch 1, turn. *Sc in next st, ch 1, skip 1* across, sc in last st.
Row B: Ch 1, turn. *Sc in ch-1 sp, ch 1, skip sc* across, sc in last sp.
Repeat rows A and B.

BAG PANELS (make 2):
Ch 61. R1: Sc in 2nd ch and each ch. (60 sts)
R2–R44: Work linen stitch. Fasten off. (approx 12" x 8")

ASSEMBLY:
Hold panels WS together. Join yarn at bottom corner.
Sc through both layers along bottom and side edges.

TOP EDGING:
Join yarn at top. Work 3 rows of sc around opening.

HANDLES (make 2):
Ch 101. Work 4 rows of sc. (100 sc wide)
Fold lengthwise, sl st edges to form tube.
Sew to inside top, 2" from each side seam.`,
  },
  {
    id:'p11',title:'Mini Cactus Trio',designer:'Bea Solano',designerUrl:'https://beasolano.craft',
    type:'Amigurumi',project:'Home',skill:'Beginner',yarn:'DK (3)',yardage:90,hookMm:3.0,hookUS:'D/3',
    time:'2–3 hrs',stitches:['mr','sc','inc','dec','sl st'],color:'#7BA88B',
    blurb:'Three tiny cacti in terracotta pots. No watering required.',rows:20,
    fullPattern:`COLORS: Dark green (A), Light green (B), Terracotta (C)

TALL CACTUS (Color A):
R1: Mr, 6 sc. (6)
R2: [Inc] x6. (12)
R3: [Sc, inc] x6. (18)
R4–R14: Sc around. (18)
R15: [Sc 4, dec] x3. (15)
R16–R18: Sc around. (15)
Stuff firmly. Close and fasten off.

ARMS (make 2, for tall cactus):
R1: Mr, 5 sc. R2–R6: Sc around. Stuff lightly. Fasten off.
Sew arms to sides of cactus.

SHORT ROUND CACTUS (Color A):
R1: Mr, 6 sc. R2: [Inc] x6. (12)
R3: [Sc, inc] x6. (18) R4: [2 sc, inc] x6. (24)
R5–R10: Sc around. (24)
R11: [2 sc, dec] x6. (18) Stuff.
R12: [Sc, dec] x6. (12) R13: [Dec] x6. (6) Close.

TERRACOTTA POT (Color C, make 3):
R1: Mr, 6 sc. R2: [Inc] x6. (12)
R3: [Sc, inc] x6 in BLO. (18) — BLO creates a ridge
R4–R7: Sc around. (18)
R8: Sc in FLO around (creates rim). Fasten off.
Add small stuffing to base. Tack cactus inside pot.`,
  },
  {
    id:'p12',title:'Ripple Baby Blanket',designer:'Clara Nwosu',designerUrl:'https://claranwosu.com',
    type:'Standard',project:'Blanket',skill:'Beginner',yarn:'DK (3)',yardage:700,hookMm:4.0,hookUS:'G/6',
    time:'10–12 hrs',stitches:['ch','dc','sl st'],color:'#E8516E',
    blurb:'Classic chevron ripple in soft pastels. A baby shower staple.',rows:80,
    fullPattern:`GAUGE: 14 dc x 9 rows = 4 inches
FINISHED: approx 30" x 36"
COLORS: A (main), B, C — change every 4 rows.

FOUNDATION (Color A): Ch 157.

RIPPLE STITCH:
R1: Dc in 4th ch from hook, dc in next 5 ch.
  *3 dc in next ch (peak), dc in 5 ch, dc3tog over next 3 (valley), dc in 5 ch* across.
  End 3 dc in last ch. Turn.

R2: Ch 3. Dc in next 5.
  *3 dc in center peak dc, dc in 5, dc3tog at valley, dc in 5* across.
  End 3 dc in turning ch. Turn.

R3–R4: Same as R2. Change to Color B.
R5–R8: Work ripple with Color B. Change to Color C.
R9–R12: Work ripple with Color C. Change to Color A.

Repeat 4-row color sequence until 80 rows / 36" long.

BORDER:
Join Color A at corner. Sc evenly around all edges, 3 sc in each corner.
Round 2: Sc around with corner increases. Fasten off. Weave in all ends.`,
  },
  {
    id:'p13',title:'Chunky Slouch Beret',designer:'Anika Patel',designerUrl:'https://anikapatel.yarn',
    type:'Standard',project:'Accessory',skill:'Beginner',yarn:'Bulky (5)',yardage:160,hookMm:9.0,hookUS:'M/13',
    time:'2 hrs',stitches:['ch','sc','dc','sl st'],color:'#7B7CE0',
    blurb:'A relaxed oversized beret with a snug ribbed band. Fast and cozy.',rows:14,
    fullPattern:`GAUGE: 8 dc x 5 rows = 4 inches

BAND (flat rib, then seamed):
Ch 7. Sc in 2nd ch and across. (6 sts)
R2–40: Ch 1, turn. Sc in BLO across. (6 sts)
Sl st row 1 to row 40. Ring fits most adult heads.

CROWN (worked in joined rounds from band):
R1: Join yarn. 48 sc evenly around band. Sl st. (48)
R2: Ch 3. Dc in each sc around. Sl st. (48)
R3: Ch 3. [Dc in 5, 2 dc in next] x8. Sl st. (56)
R4–R6: Ch 3. Dc around. Sl st. (56)
R7: Ch 3. [Dc in 5, dc2tog] x8. Sl st. (48)
R8: Ch 3. [Dc in 4, dc2tog] x8. Sl st. (40)
R9: Ch 3. [Dc in 3, dc2tog] x8. Sl st. (32)
R10: Ch 3. [Dc in 2, dc2tog] x8. Sl st. (24)
R11: Ch 3. [Dc, dc2tog] x8. Sl st. (16)
R12: Ch 1. [Sc2tog] x8. Sl st. (8)

Fasten off. Thread through 8 sts, pull closed. Weave in ends.`,
  },
  {
    id:'p14',title:'Sedge Stitch Cowl',designer:'Marie Lefebvre',designerUrl:'https://marielefebvre.fr',
    type:'Standard',project:'Accessory',skill:'Intermediate',yarn:'Worsted (4)',yardage:280,hookMm:5.5,hookUS:'I/9',
    time:'4–5 hrs',stitches:['ch','sc','hdc','dc'],color:'#E8516E',
    blurb:'An infinity cowl in sedge stitch — looks woven, works up fast.',rows:30,
    fullPattern:`GAUGE: 14 sts x 12 rows = 4 inches
FINISHED: approx 10" tall x 60" circumference

SEDGE STITCH (flat):
Row 1: Ch 1, turn. Sc in first st. *(Hdc, dc) in next, skip 1, sc in next* across.
Row 2: Ch 3, turn. Dc in first sc. *Skip (hdc+dc), sc in sc, (hdc, dc) in next sc* across. Dc in last.
Repeat rows 1–2.

COWL (worked in the round):
Ch 212. Sl st to join, being careful not to twist. (212 sts)

R1: Ch 1. *Sc, (hdc, dc) in next, skip 1* around. Sl st. (212)
R2: Ch 1. *(Hdc, dc) in sc, skip (hdc+dc), sc in dc* around. Sl st.

Repeat R1–R2 for 30 rounds (approx 10" tall).

Final round: Sc in each st around. Sl st. Fasten off.

FINISHING: Weave in ends. Block by soaking in cool water, gently squeeze, lay flat to dry.`,
  },
  {
    id:'p15',title:'C2C Lap Blanket',designer:'Thandi Dube',designerUrl:'https://thandidube.co.za',
    type:'Standard',project:'Blanket',skill:'Intermediate',yarn:'Worsted (4)',yardage:1200,hookMm:5.5,hookUS:'I/9',
    time:'15+ hrs',stitches:['ch','dc','sl st'],color:'#7B7CE0',
    blurb:'A classic corner-to-corner worked diagonally. Perfect for color-block or graphghan designs.',rows:60,
    fullPattern:`GAUGE: Each C2C tile = approx 1" x 1"
FINISHED: approx 40" x 40"

C2C TILE: Ch 6. Dc in 4th ch from hook, dc in next 2 ch. (3-dc cluster)

INCREASE SECTION (rows 1–30, each row adds one tile):
R1: Make 1 tile. (1 tile)
R2: Ch 6, turn. Dc3 cluster. Ch 3, sl st into ch-3 sp of prev tile. Ch 3, dc3 in same sp. (2 tiles)
R3: Ch 6, turn. Tile. *Ch 3, sl st to next sp, ch 3, dc3 in sp* across. (3 tiles)
Continue adding one tile per row until 30 tiles wide.

DECREASE SECTION (rows 31–60, each row removes one tile):
Turn. Sl st across first tile cluster into ch-3 sp.
Ch 3, dc2 in sp. *Ch 3, sl st to next sp, ch 3, dc3 in sp* across.
Continue until 1 tile remains. Fasten off.

COLOR CHANGES: Switch color at end of tile by pulling new color through final stitch.
For graphghan: Follow a pixel grid chart, changing per tile.

BORDER: Sc evenly around all 4 edges, 3 sc in each corner. Hdc border round. Fasten off.`,
  },
  {
    id:'p16',title:'Amigurumi Avocado',designer:'Pip Holloway',designerUrl:'https://pipholloway.com',
    type:'Amigurumi',project:'Toy',skill:'Beginner',yarn:'DK (3)',yardage:80,hookMm:3.0,hookUS:'D/3',
    time:'1.5 hrs',stitches:['mr','sc','inc','dec'],color:'#7BA88B',
    blurb:"The internet's favourite fruit in cute stuffed form.",rows:18,
    fullPattern:`COLORS: Dark green (A), Light green (B), Cream (C), Brown (D)

OUTER SHELL (Color A, then B):
R1: Mr, 6 sc. (6)
R2: [Inc] x6. (12)
R3: [Sc, inc] x6. (18)
R4: [2 sc, inc] x6. (24)
R5: [3 sc, inc] x6. (30)
R6–R10: Sc around. (30) — switch to Color B after R9
R11: Sc around. (30) [Color B]
R12: [3 sc, dec] x6. (24)
R13: [2 sc, dec] x6. (18)
— Attach 9mm safety eyes between R8–R9 (optional) —
— Begin stuffing —
R14: [Sc, dec] x6. (12)
R15: [Dec] x6. (6) Close.

SEED (Color D):
R1: Mr, 6 sc. R2: [Inc] x6. (12)
R3: [Sc, inc] x6. (18) R4–R6: Sc around.
R7: [Sc, dec] x6. (12) R8: [Dec] x6. (6) Close. Do not stuff. Flatten and sew to center.

INNER FLESH (Color C — flat oval):
Ch 4. 2 sc in 2nd ch, sc, 3 sc in last ch. Work around other side: sc, 2 sc. (9)
R2: [Inc] x2, sc, [inc] x3, sc, [inc] x2. (16)
R3: Sc around. Fasten off.
Sew flat flesh piece to B section before closing shell.`,
  },
];

const HOOK_SIZES = [
  {mm:2.25,us:'B/1'},{mm:2.75,us:'C/2'},{mm:3.0,us:'D/3'},{mm:3.25,us:'D/3+'},
  {mm:3.5,us:'E/4'},{mm:3.75,us:'F/5'},{mm:4.0,us:'G/6'},{mm:4.5,us:'7'},
  {mm:5.0,us:'H/8'},{mm:5.5,us:'I/9'},{mm:6.0,us:'J/10'},{mm:6.5,us:'K/10.5'},
  {mm:8.0,us:'L/11'},{mm:9.0,us:'M/13'},{mm:10.0,us:'N/15'},{mm:15.0,us:'P/Q'},
];
const YARN_WEIGHTS = [
  {n:0,name:'Lace'},{n:1,name:'Fingering'},{n:2,name:'Sport'},{n:3,name:'DK'},
  {n:4,name:'Worsted'},{n:5,name:'Bulky'},{n:6,name:'Super Bulky'},{n:7,name:'Jumbo'},
];
const CROCHET_TYPES = ['Standard','Tunisian','Amigurumi','Filet','Broomstick'];
const SKILL_LEVELS = ['Beginner','Intermediate','Advanced'];
const PROJECT_TYPES = ['Garment','Blanket','Toy','Accessory','Home'];
const STITCH_GLOSSARY = [
  {abbr:'ch',name:'Chain',cat:'Foundation',desc:'Yarn over, pull through loop on hook.'},
  {abbr:'sl st',name:'Slip Stitch',cat:'Foundation',desc:'Insert hook, yarn over, pull through stitch and loop on hook.'},
  {abbr:'sc',name:'Single Crochet',cat:'Basic',desc:'Insert hook, yarn over, pull up loop, yarn over, pull through both.'},
  {abbr:'hdc',name:'Half Double Crochet',cat:'Basic',desc:'Yarn over, insert hook, pull up loop, yarn over, pull through all three.'},
  {abbr:'dc',name:'Double Crochet',cat:'Basic',desc:'Yarn over, insert hook, pull up loop, [yarn over, pull through 2] twice.'},
  {abbr:'tr',name:'Treble Crochet',cat:'Basic',desc:'Yarn over twice, insert hook, pull up loop, [yarn over, pull through 2] three times.'},
  {abbr:'mr',name:'Magic Ring',cat:'Amigurumi',desc:'Adjustable starting loop for working in the round.'},
  {abbr:'inc',name:'Increase',cat:'Amigurumi',desc:'Two stitches worked into the same stitch.'},
  {abbr:'dec',name:'Invisible Decrease',cat:'Amigurumi',desc:'Insert hook in front loops of next two stitches, yarn over, pull through both, then yarn over and pull through.'},
  {abbr:'tss',name:'Tunisian Simple Stitch',cat:'Tunisian',desc:'Forward pass: pick up loops through vertical bars. Return pass: yarn over, pull through 2 across.'},
  {abbr:'tks',name:'Tunisian Knit Stitch',cat:'Tunisian',desc:'Forward pass: insert hook between vertical bars, behind front bar. Knit-like fabric.'},
  {abbr:'tps',name:'Tunisian Purl Stitch',cat:'Tunisian',desc:'Forward pass: yarn forward, insert hook through vertical bar, pull up loop.'},
  {abbr:'fpdc',name:'Front Post DC',cat:'Texture',desc:'Double crochet around the post of the stitch from the front.'},
  {abbr:'bpdc',name:'Back Post DC',cat:'Texture',desc:'Double crochet around the post of the stitch from the back.'},
];
const LESSONS = [
  {id:'l1',track:'Crochet Basics',title:'Holding Your Hook & Yarn',mins:6,done:true},
  {id:'l2',track:'Crochet Basics',title:'Slip Knot & Foundation Chain',mins:8,done:true},
  {id:'l3',track:'Crochet Basics',title:'Your First Single Crochet Row',mins:10,done:true},
  {id:'l4',track:'Crochet Basics',title:'Turning Chains, Explained',mins:7,done:false},
  {id:'l5',track:'Crochet Basics',title:'Reading a Written Pattern',mins:12,done:false},
  {id:'l6',track:'Crochet Basics',title:'Tension & Gauge Swatches',mins:9,done:false},
  {id:'t1',track:'Tunisian Crochet',title:'What Makes Tunisian Different',mins:5,done:true},
  {id:'t2',track:'Tunisian Crochet',title:'Forward Pass / Return Pass',mins:11,done:false},
  {id:'t3',track:'Tunisian Crochet',title:'Tunisian Simple Stitch (TSS)',mins:9,done:false},
  {id:'t4',track:'Tunisian Crochet',title:'Knit & Purl Stitches',mins:10,done:false},
  {id:'a1',track:'Amigurumi',title:'Magic Ring Without Tears',mins:6,done:false},
  {id:'a2',track:'Amigurumi',title:'Invisible Decrease',mins:5,done:false},
  {id:'a3',track:'Amigurumi',title:'Stuffing & Closing Spheres',mins:8,done:false},
];
Object.assign(window,{PATTERNS,HOOK_SIZES,YARN_WEIGHTS,CROCHET_TYPES,SKILL_LEVELS,PROJECT_TYPES,STITCH_GLOSSARY,LESSONS});
