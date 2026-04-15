# hamonius — Design Guide
### Inspired by ABST Studio (abst.kr) · Applied to hamonius Brand

> **Design Principle**
> *"Pure canvas. Quiet structure. Loud finishing."*
> 검정 캔버스 위에 브랜드 컬러(#303AE4 / #FFC209)가 완성의 순간을 표시한다.

---

## 0. Design Tokens (요약)

```css
:root {
  /* Brand */
  --brand-main:   #040A43;  /* Deep Navy — 브랜드 기반 */
  --brand-sub:    #303AE4;  /* Electric Blue — 강조 / 링크 */
  --brand-point:  #FFC209;  /* Signal Yellow — 완성/포인트 */

  /* Canvas (ABST 스타일) */
  --canvas-black: #000000;
  --canvas-ink:   #0B0B10;
  --canvas-white: #FFFFFF;

  /* Text */
  --text-primary:   #FFFFFF;
  --text-secondary: rgba(255,255,255,0.72);
  --text-muted:     rgba(255,255,255,0.48);
  --text-divider:   rgba(255,255,255,0.10);

  /* Spacing (8px base) */
  --s-1: 8px;   --s-2: 16px;  --s-3: 24px;
  --s-4: 40px;  --s-5: 80px;  --s-6: 120px; --s-7: 160px;

  /* Radius */
  --r-sm: 8px; --r-md: 16px; --r-lg: 24px; --r-xl: 32px;

  /* Motion */
  --ease: cubic-bezier(.2,.8,.2,1);
  --dur-fast: 200ms;
  --dur-base: 600ms;
  --dur-slow: 1000ms;
}
```

---

## 1. 색상 체계 (Color System)

### 1-1. Canvas Layer (배경 / 톤)
| Token | HEX | 용도 |
|-------|------|------|
| `--canvas-black` | `#000000` | 메인 배경 (Hero, Work) |
| `--canvas-ink` | `#0B0B10` | 섹션 대비 배경 |
| `--brand-main` | `#040A43` | 딥 네이비 섹션 (Message / Contact) |

### 1-2. Text Layer
| Token | Value | 용도 |
|-------|-------|------|
| Primary | `#FFFFFF` | 타이틀 / 본문 |
| Secondary | `rgba(255,255,255,.72)` | 부연 설명 |
| Muted | `rgba(255,255,255,.48)` | 캡션 / 라벨 |
| Divider | `rgba(255,255,255,.10)` | 섹션 / 카드 경계 |

### 1-3. Accent Layer
| Token | HEX | 용도 |
|-------|------|------|
| `--brand-sub` | `#303AE4` | 링크 / 인터랙션 / 호버 |
| `--brand-point` | `#FFC209` | CTA / 완성 표시 / 하이라이트 |

### 1-4. 사용 규칙
- **80 / 15 / 5 규칙** — Black 80%, Sub Blue 15%, Point Yellow 5%
- Point Yellow는 "완성"의 순간에만 사용 (CTA, 현재 상태, 핵심 숫자)
- Blue는 링크/호버/강조 텍스트에 한정, 면적 사용 금지

---

## 2. 타이포그래피 (Typography)

### 2-1. Font Family
```css
font-family: 'Pretendard', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```
- **국문:** Pretendard 600~800
- **영문:** Inter 500~800 (라벨은 uppercase + tracking 확대)

### 2-2. Scale
| Role | Size (desktop) | Weight | Line-height | Letter-spacing |
|------|----------------|--------|-------------|----------------|
| Display (Hero) | `clamp(64px, 9vw, 140px)` | 800 | 1.02 | -2.5px |
| H1 | `clamp(48px, 5vw, 72px)` | 800 | 1.1 | -1.5px |
| H2 | `clamp(32px, 4vw, 56px)` | 700 | 1.15 | -1px |
| H3 | `24~28px` | 700 | 1.3 | -0.3px |
| Body L | `18px` | 400 | 1.7 | 0 |
| Body M | `16px` | 400 | 1.65 | 0 |
| Caption | `13~14px` | 500 | 1.4 | 0.3px |
| Eyebrow / Label | `12px` | 700 | 1 | **2px / UPPERCASE** |

### 2-3. 이중 레이어 타이틀 패턴
```
— BRAND OF EXECUTION        ← eyebrow (영문, uppercase, sub color)
Handled to the End.         ← display (국/영 혼용, white)
끝까지 맡아 완성합니다.      ← sub title (secondary)
```

---

## 3. 간격 시스템 (Spacing)

### 3-1. Base Scale (8px)
`8 · 16 · 24 · 40 · 80 · 120 · 160`

### 3-2. Layout Spacing
| Context | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Section padding (Y) | `160px` | `120px` | `80px` |
| Container max-width | `1440px` | — | — |
| Container padding (X) | `48px` | `32px` | `20px` |
| Grid gutter | `40px` | `28px` | `16px` |
| Card padding | `40px` | `32px` | `24px` |

### 3-3. Component Spacing
- 텍스트 블록 내부: `--s-2` (16px)
- 요소 간: `--s-3` (24px)
- 카드 간: `--s-4` (40px)
- 섹션 내 블록 간: `--s-5` (80px)

---

## 4. 컴포넌트 (Components)

### 4-1. Navigation — Fixed Header
- Height: `72px`
- Background: `rgba(0,0,0,.7)` + `backdrop-filter: blur(14px)`
- Scroll state: `.scr` → `box-shadow: 0 8px 30px rgba(0,0,0,.3)`
- Items: Logo · About · Services · Work · Contact

### 4-2. Button
```css
/* Primary — CTA (Point Yellow) */
.btn-primary{
  padding:16px 28px; border-radius:999px;
  background:var(--brand-point); color:var(--brand-main);
  font-weight:700; font-size:15px;
  transition:all var(--dur-fast) var(--ease);
}
.btn-primary:hover{ transform:translateY(-2px);
  box-shadow:0 14px 30px rgba(255,194,9,.3); }

/* Secondary — Ghost */
.btn-ghost{ color:#fff; border:1px solid rgba(255,255,255,.24);
  padding:16px 28px; border-radius:999px; }
.btn-ghost:hover{ border-color:var(--brand-point); color:var(--brand-point); }

/* Link — Underline */
.btn-link::after{ content:"→"; margin-left:6px;
  transition:transform var(--dur-fast) var(--ease); }
.btn-link:hover::after{ transform:translateX(4px); }
```

### 4-3. Card
- Background: `rgba(255,255,255,.04)`
- Border: `1px solid var(--text-divider)`
- Radius: `--r-lg` (24px)
- Padding: `40px 32px`
- Hover: translateY(-8px) + border → `--brand-sub`

### 4-4. Work Grid Item (ABST 스타일)
- Aspect ratio: `532 / 591` ≈ `9 / 10`
- Image cover, 타이틀은 하단 외부
- Hover: image `scale(1.04)`, 600ms ease-out

### 4-5. Slider (Swiper)
| Device | slidesPerView | spaceBetween |
|--------|---------------|--------------|
| Mobile | 1.5 | 10px |
| Tablet | 2.7 | 28px |
| Desktop | 4 | 40px |

- Pagination: `{current} / {total}` 포맷, 우측 정렬
- Logo loop: `speed: 5000ms`, linear, 2줄 반대방향

### 4-6. Form Input
- Background: `rgba(255,255,255,.05)`
- Border: `1px solid rgba(255,255,255,.15)`
- Focus: border → `var(--brand-point)`, bg → `rgba(255,255,255,.1)`
- Radius: `12px`, Padding: `14px 18px`

### 4-7. Overlay / Modal
- Backdrop: `rgba(0,0,0,.85)` + blur 20px
- Close btn: 우상단 고정, 크기 48×48

---

## 5. 레이아웃 구조 (Layout)

### 5-1. 페이지 시퀀스 (ABST 내러티브 패턴 적용)
```
① Hero             — 풀블리드 영상/이미지 + 메인 슬로건
② Philosophy       — "시작 → 완성" 스크롤 전환 스토리
③ Services         — 3대 서비스 (행사 · 디자인 · 콘텐츠)
④ Work             — 프로젝트 그리드 + Swiper
⑤ Core Message     — 8개 핵심 메시지 (Point Yellow 강조)
⑥ Clients          — 파트너 로고 무한 루프 슬라이더
⑦ Contact CTA      — 딥 네이비 배경 + Yellow CTA
⑧ Footer           — 정보 + SNS
```

### 5-2. Grid 규칙
- 기본 12컬럼, gutter 40px
- 섹션별 권장 컬럼:
  - Services: 3열 (desktop) → 1열 (mobile)
  - Work: 4열 → 2열 → 1.5열
  - Message cards: 4열 → 2열 → 1열
  - Clients logo: 무한 loop, 고정 높이 56px

### 5-3. Breakpoints
```css
/* Mobile First */
@media (min-width: 767px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Wide */ }
```

---

## 6. 디자인 패턴 (Patterns & Motion)

### 6-1. Scroll-driven Narrative (ABST 시그니처)
- `IntersectionObserver` 또는 AOS 라이브러리
- Default: `duration: 1000ms, ease-out, once: true`
- 섹션 진입 시 `.active` 클래스 → 텍스트 / 이미지 전환

### 6-2. Hero Video Treatment
- Vimeo/MP4 자동재생, muted, loop
- 로드 완료 후 썸네일 이미지 `opacity: 0` 페이드아웃 (800ms)

### 6-3. Hover Interaction
| 대상 | 효과 |
|------|------|
| Button | translateY(-2px) + shadow |
| Card | translateY(-8px) + border color |
| Image | scale(1.04), 600ms |
| Link | 언더라인 grow (left → right) |
| Nav item | color → `--brand-sub` |

### 6-4. Infinite Loop
- 파트너 로고 2줄, 서로 반대 방향
- `@keyframes scroll-x` 무한 linear

### 6-5. Section Transition
- 섹션 간 radius 처리: 상단 섹션 `border-radius: 0 0 32px 32px`
- 배경색 대비로 깊이감 표현 (Black → Navy → Black)

### 6-6. Typography Pattern
- 모든 주요 타이틀은 **eyebrow label + display title + sub description** 3단 구조
- 국문/영문 병기 시 영문을 상단 라벨로

---

## 7. 브랜드 적용 원칙 (hamonius Specific)

1. **"Handled to the End"** — Hero는 반드시 1회 풀블리드, 마지막 CTA로 수미상관
2. **Yellow = 완성** — Point Yellow는 "결과/완성 지점"에만 사용
3. **Blue = 실무** — Sub Blue는 링크/과정/진행 상태에 사용
4. **Black = 무대** — 콘텐츠(이미지·영상·타이포)를 돋보이게 하는 배경
5. **Silence before Motion** — 초기 로드 시 정적 → 스크롤 시 전개
6. **End-to-End 내러티브** — 섹션 순서 자체가 "시작 → 완성"의 서사여야 함

---

## 8. Do & Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| 검정 배경 위 흰색 타이포 | 여러 컬러 면 혼용 |
| Point Yellow는 CTA·완성 지점에만 | Yellow를 배경 면으로 사용 |
| 섹션별 명확한 내러티브 단계 | 정보 나열식 배치 |
| 영문 라벨 + 국문 타이틀 이중 레이어 | 국문만 단독 대형 헤더 |
| 호버 시 미세 모션 (≤8px) | 과도한 bounce/rotate |
| 8px 베이스 스페이싱 준수 | 즉흥적 px 값 |

---

**Document Version:** v1.0 · 2026-04-14
**Reference:** abst.kr Design Analysis
**Applied to:** hamonius Brand Website
