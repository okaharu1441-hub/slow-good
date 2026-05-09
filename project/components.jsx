// Landing page sections — cafe-warm aesthetic
// Products grouped by design

const DESIGNS = [
{
  id: 'penguin',
  name: 'サーペンちゃん',
  tag: 'Minimal',
  desc: 'やわらかなベージュと深い藍。波のなかでひと休みする、すこし哲学的なサーファーのペンちゃん。穏やかな日常に寄り添うミニマルなシリーズです。',
  accent: '#3a4a6b',
  bg: '#ece4d2',
  products: [
  { name: 'マグカップ', price: '¥1,980', img: 'images/penguin-mug.png' },
  { name: 'マグカップ (square)', price: '¥1,980', img: 'images/penguin-mug2.png' },
  { name: 'スマホケース', price: '¥3,180', img: 'images/penguin-phonecase.png' },
  { name: 'アクリルキーホルダー', price: '¥1,320', img: 'images/penguin-keychain.png' },
  { name: 'ステッカー', price: '¥440', img: 'images/penguin-sticker.png' }]

},
{
  id: 'triangle',
  name: 'ヌコピラミッド',
  tag: 'Geometric',
  desc: '三つの三角と、ちいさな顔。重なる山々のような幾何学のなかに、ふと笑みのにじむねこちゃんを忍ばせて。',
  accent: '#a85c33',
  bg: '#e8dec5',
  products: [
  { name: 'トートバッグ', price: '¥3,080', img: 'images/triangle-tote.png' },
  { name: 'マグカップ', price: '¥1,980', img: 'images/triangle-mug.png' },
  { name: 'アクリルキーホルダー', price: '¥1,320', img: 'images/triangle-keychain.png' },
  { name: 'ステッカー', price: '¥440', img: 'images/triangle-sticker.png' }]

},
{
  id: 'cafe',
  name: 'CAFE RACER',
  tag: 'Vintage',
  desc: 'コーヒーとバイクの香り。古き良きスタイルのバッジロゴを、レッドとネイビーの2配色で。コーヒーブレイクのお供に。',
  accent: '#7a3a3a',
  bg: '#f0e6d4',
  products: [
  { name: 'サーモタンブラー', price: '¥3,300', img: 'images/cafe-cup.png' },
  { name: 'ステッカー (Navy)', price: '¥440', img: 'images/cafe-sticker-navy.png' },
  { name: 'ステッカー (Red)', price: '¥440', img: 'images/cafe-sticker-red.png' },
  { name: 'アクリルキーホルダー (Navy)', price: '¥1,320', img: 'images/cafe-keychain.png' },
  { name: 'アクリルキーホルダー (Red)', price: '¥1,320', img: 'images/cafe-keychain-red.png' }]

},
{
  id: 'munetaro',
  name: 'Mune-taro / 胸太郎くん',
  tag: 'Character',
  desc: 'きょうも筋トレに励む、はかま姿の胸太郎。ちょっと笑える、でも応援したくなる。胸筋を鍛えるあなたにおひとついかが。',
  accent: '#2c4a6b',
  bg: '#f0e9da',
  products: [
  { name: 'スタンダードTシャツ', price: '¥3,520', img: 'images/munetaro-tshirt.png' },
  { name: 'アクリルキーホルダー', price: '¥1,320', img: 'images/munetaro-keychain.png' },
  { name: 'ステッカー', price: '¥440', img: 'images/munetaro-sticker.png' }]

},
{
  id: 'cat',
  name: 'NEON ミケ',
  tag: 'Neon',
  desc: 'ピンクとシアンのネオン管が、夜の路地裏で目をひらく猫を描く。日常からすこし逸脱したい、そんな日のためのアイテム。',
  accent: '#c93a8a',
  bg: '#1c1620',
  dark: true,
  products: [
  { name: 'スタンダードTシャツ', price: '¥3,520', img: 'images/cat-tshirt.png' },
  { name: 'マグカップ', price: '¥1,980', img: 'images/cat-mug.png' },
  { name: 'アクリルキーホルダー', price: '¥1,320', img: 'images/cat-keychain.png' },
  { name: 'ステッカー', price: '¥440', img: 'images/cat-sticker.png' }]

},
{
  id: 'frog',
  name: 'F.R.O.G',
  tag: 'Graffiti',
  desc: 'ストリートのスプレー缶から滴る、きみょうなカエル。グラフィティの粗さと、すこしポップな配色で、肩の力を抜いて着られる一枚。',
  accent: '#d63a8e',
  bg: '#1c1820',
  dark: true,
  products: [
  { name: 'スタンダードTシャツ', price: '¥3,520', img: 'images/frog-tshirt.png' },
  { name: 'アクリルキーホルダー', price: '¥1,320', img: 'images/frog-keychain.png' },
  { name: 'ステッカー', price: '¥440', img: 'images/frog-sticker.png' }]

}];


const SHOP_URL = 'https://suzuri.jp/bandai_nameko/products';

const Hero = ({ t }) => {
  const totalProducts = DESIGNS.reduce((s, d) => s + d.products.length, 0);

  return (
    <section className="hero" data-screen-label="Hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            <span>SUZURI shop · {DESIGNS.length} designs / {totalProducts} items</span>
          </div>
          <h1 className="hero-title">
            すこし<em>ひと息</em>つきたい<br />
            日のための、<br />
            <em>すきな絵</em>と道具たち。
          </h1>
          <p className="hero-sub">ミニマルなペンギンから、ネオンに光るネコ、街角のグラフィティまで。 気分のかずだけ、絵柄をそろえました。 きょう手に取りたいデザインから、どうぞ。



          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href={SHOP_URL} target="_blank" rel="noopener">
              <span>SUZURIショップで見る</span>
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#designs">デザイン一覧へ</a>
          </div>
          <ul className="hero-meta">
            <li><strong>{DESIGNS.length}</strong><span>designs</span></li>
            <li><strong>{totalProducts}</strong><span>items</span></li>
            <li><strong>¥440〜</strong><span>from</span></li>
          </ul>
        </div>

        <div className="hero-art">
          <div className="hero-art-frame">
            <img src="images/penguin-mug.png" alt="ペンギンと波 マグカップ" />
            <div className="hero-tag">
              <span className="hero-tag-num">No.01</span>
              <span className="hero-tag-label">Today's pick</span>
            </div>
          </div>
          <div className="hero-art-side">
            <div className="hero-art-cell"><img src="images/triangle-tote.png" alt="三角の山 トートバッグ" /></div>
            <div className="hero-art-cell"><img src="images/cafe-keychain.png" alt="CAFE RACER キーホルダー" /></div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) =>
          <div className="marquee-row" key={k}>
              {DESIGNS.map((d) =>
            <React.Fragment key={d.id}>
                  <span>{d.name}</span><span aria-hidden="true">✦</span>
                </React.Fragment>
            )}
              <span>printed on demand</span><span aria-hidden="true">✦</span>
              <span>shipped from SUZURI</span><span aria-hidden="true">✦</span>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const Concept = ({ t }) => {
  const points = [
  {
    n: '01',
    title: 'すきな絵が、すきなかたちに',
    body: 'おなじ絵柄で、Tシャツ・マグ・ステッカー・キーホルダーまで。手にとりたい「かたち」を、自由に選んでください。'
  },
  {
    n: '02',
    title: '気分のかずだけ、絵がある',
    body: 'やさしいミニマルから、ストリートのネオンまで。きょうの気分にぴったりくる一枚を、すきに選んでください。'
  },
  {
    n: '03',
    title: 'SUZURIから、あなたの元へ',
    body: '注文を受けてから、一点ずつ丁寧にプリント。時間はすこしかかるけれど、その分まっさらな状態でお届けします。'
  }];


  return (
    <section className="concept" id="concept" data-screen-label="Concept">
      <div className="section-head">
        <div className="section-eyebrow">— concept</div>
        <h2 className="section-title">
          いそがない、<br />
          というブランドのこと。
        </h2>
        <p className="section-lead">
          午後3時のカフェのような、ゆっくりとした空気感を。
          すきな絵柄を、すきなかたちで。手にとるたびに、ほんの少し気持ちがほどけるアイテムを選んでいます。
        </p>
      </div>

      <div className="concept-grid">
        {points.map((p) =>
        <article className="concept-card" key={p.n}>
            <div className="concept-num">{p.n}</div>
            <h3 className="concept-title">{p.title}</h3>
            <p className="concept-body">{p.body}</p>
          </article>
        )}
      </div>
    </section>);

};

const DesignSection = ({ d, idx }) => {
  const [main, ...rest] = d.products;
  const isDark = d.dark;

  return (
    <section
      className={`design ${isDark ? 'design-dark' : ''}`}
      id={`design-${d.id}`}
      data-screen-label={`Design ${idx + 1}: ${d.name}`}
      style={{ '--bg': d.bg, '--accent': d.accent }}>
      
      <div className="design-inner">
        <div className="design-head">
          <div className="design-head-left">
            <div className="design-num">
              <span className="design-num-label">design</span>
              <span className="design-num-val">{String(idx + 1).padStart(2, '0')}</span>
              <span className="design-num-total">/ {String(DESIGNS.length).padStart(2, '0')}</span>
            </div>
            <span className="design-tag">{d.tag}</span>
          </div>
          <h2 className="design-title">{d.name}</h2>
          <p className="design-desc">{d.desc}</p>
          <div className="design-stats">
            <span>{d.products.length} items</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>¥{Math.min(...d.products.map((p) => parseInt(p.price.replace(/[^\d]/g, ''), 10))).toLocaleString()}〜</span>
          </div>
        </div>

        <div className="design-grid">
          <a className="design-feature" href={SHOP_URL} target="_blank" rel="noopener">
            <div className="design-feature-img">
              <img src={main.img} alt={`${d.name} ${main.name}`} loading="lazy" />
              <span className="design-feature-tag">FEATURED</span>
            </div>
            <div className="design-feature-meta">
              <span className="design-feature-name">{main.name}</span>
              <span className="design-feature-price">{main.price}</span>
            </div>
          </a>

          <div className="design-rest">
            {rest.map((p, i) =>
            <a className="design-mini" href={SHOP_URL} target="_blank" rel="noopener" key={i}>
                <div className="design-mini-img">
                  <img src={p.img} alt={`${d.name} ${p.name}`} loading="lazy" />
                </div>
                <div className="design-mini-meta">
                  <span className="design-mini-name">{p.name}</span>
                  <span className="design-mini-price">{p.price}</span>
                </div>
              </a>
            )}
          </div>
        </div>

        <div className="design-foot">
          <a className="btn btn-outline" href={SHOP_URL} target="_blank" rel="noopener">
            <span>{d.name} のすべての商品を見る</span>
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

};

const Designs = ({ t }) => {
  return (
    <div className="designs" id="designs" data-screen-label="Designs">
      <div className="designs-intro container">
        <div className="section-eyebrow">— lineup by design</div>
        <h2 className="section-title">{DESIGNS.length}つの絵柄、<br />それぞれの世界。</h2>
        <p className="section-lead">
          おなじ絵柄でも、Tシャツやマグカップやステッカーへ。
          かたちを変えて、毎日のすきな場所に居場所を見つけられるように。
        </p>
      </div>
      {DESIGNS.map((d, i) =>
      <DesignSection d={d} idx={i} key={d.id} />
      )}
    </div>);

};

const FAQ = ({ t }) => {
  const items = [
  { q: '購入はどこからできますか？', a: 'すべての商品はSUZURI（suzuri.jp）の当ショップページからご購入いただけます。各商品カードのリンクから、SUZURI上の商品ページに遷移します。' },
  { q: '配送はどのくらいかかりますか？', a: 'ご注文を受けてから1点ずつプリントするため、発送までに通常5〜10営業日ほどお時間をいただきます。お届け日数は配送先により前後します。' },
  { q: '返品・交換は可能ですか？', a: '商品の特性上、お客様都合での返品・交換は原則承っておりません。配送中の破損や不良品については、SUZURIのカスタマーサポートにてご対応いたします。' },
  { q: '色味は写真と同じですか？', a: 'モニター環境やプリント工程により、わずかに色味が異なる場合があります。あらかじめご了承ください。' },
  { q: 'デザインのリクエストはできますか？', a: '現在のデザインは予告なく追加・終了する場合があります。リクエストはSUZURIのショップページ経由でお寄せください。' }];

  const [open, setOpen] = React.useState(0);

  return (
    <section className="faq" id="faq" data-screen-label="FAQ">
      <div className="section-head">
        <div className="section-eyebrow">— faq</div>
        <h2 className="section-title">よくあるご質問。</h2>
      </div>
      <div className="faq-list">
        {items.map((it, i) =>
        <details className="faq-item" key={i} open={open === i} onToggle={(e) => {if (e.currentTarget.open) setOpen(i);}}>
            <summary>
              <span className="faq-q-num">Q.{String(i + 1).padStart(2, '0')}</span>
              <span className="faq-q-text">{it.q}</span>
              <span className="faq-q-mark" aria-hidden="true">+</span>
            </summary>
            <div className="faq-a">{it.a}</div>
          </details>
        )}
      </div>
    </section>);

};

const FinalCTA = ({ t }) => {
  return (
    <section className="final-cta" data-screen-label="FinalCTA">
      <div className="final-cta-inner">
        <div className="section-eyebrow eyebrow-on-dark">— shop now</div>
        <h2 className="final-cta-title">
          きょうの一杯のとなりに、<br />
          ひとつ、いかがですか。
        </h2>
        <p className="final-cta-body">
          すべての商品は、SUZURIの当ショップページよりお求めいただけます。
          ご購入いただいた一点ずつが、明日のすこしの「ゆっくり」になりますように。
        </p>
        <a className="btn btn-primary btn-large" href={SHOP_URL} target="_blank" rel="noopener">
          <span>SUZURIショップへ</span>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <p className="final-cta-note">※ 外部サイト（suzuri.jp）に遷移します</p>
      </div>
    </section>);

};

const SiteHeader = ({ t }) => {
  return (
    <header className="site-header" data-screen-label="Header">
      <div className="site-header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.18" />
              <circle cx="12" cy="12" r="5.5" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-name">slow goods</span>
          <span className="brand-sub">on SUZURI</span>
        </a>
        <nav className="site-nav">
          <a href="#concept">concept</a>
          <a href="#designs">designs</a>
          <a href="#faq">faq</a>
          <a className="nav-cta" href={SHOP_URL} target="_blank" rel="noopener">SUZURIで買う →</a>
        </nav>
      </div>
    </header>);

};

const SiteFooter = ({ t }) => {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.18" />
              <circle cx="12" cy="12" r="5.5" fill="currentColor" />
            </svg>
          </span>
          <span>slow goods · on SUZURI</span>
        </div>
        <nav className="footer-nav">
          <a href="#concept">concept</a>
          <a href="#designs">designs</a>
          <a href="#faq">faq</a>
          <a href={SHOP_URL} target="_blank" rel="noopener">SUZURI shop</a>
        </nav>
        <small className="footer-copy">© {new Date().getFullYear()} slow goods — printed & shipped by SUZURI</small>
      </div>
    </footer>);

};

Object.assign(window, {
  SiteHeader, Hero, Concept, Designs, FAQ, FinalCTA, SiteFooter
});