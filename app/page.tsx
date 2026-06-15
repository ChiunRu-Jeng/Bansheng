"use client";

import { useEffect, useState } from "react";

type Flavor = {
  ko: string;
  name: string;
  color: string;
  desc: string;
};

const flavorData: Flavor[] = [
  {
    ko: "Original",
    name: "經典原味",
    color: "#E7C98C",
    desc: "以北海道奶油乳酪為基底，烘烤出微酥外殼與濕潤內芯。純粹的乳香與恰到好處的鹹甜，是伴生最初、也最受歡迎的味道。",
  },
  {
    ko: "Uji Matcha",
    name: "宇治抹茶",
    color: "#8E9C5E",
    desc: "選用日本宇治抹茶，茶香在乳酪的綿密中緩緩展開，微苦回甘的尾韻，是大人系的優雅選擇。",
  },
  {
    ko: "Chocolat",
    name: "比利時巧克力",
    color: "#6B4A33",
    desc: "融入比利時調溫巧克力，可可的醇厚與乳酪的酸香交織，濃郁而不膩，是甜點控的心頭好。",
  },
  {
    ko: "Lemon",
    name: "西西里檸檬",
    color: "#E4D86A",
    desc: "點綴西西里檸檬皮屑，清新酸香劃過綿密乳酪，明亮而爽口，最適合炎炎午後的一口清爽。",
  },
  {
    ko: "Berry",
    name: "綜合莓果",
    color: "#C56B7A",
    desc: "草莓、藍莓與覆盆子交織的酸甜，與乳酪交融出粉嫩浪漫的滋味，是少女心的最佳代名詞。",
  },
];

export default function Home() {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  // sticky nav
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal on scroll (progressive enhancement)
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-anim");
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reveal = (el: Element) => el.classList.add("in");
    // reveal anything already in view immediately
    reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) reveal(el);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    reveals.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });
    // safety fallback: never leave content hidden
    const t = setTimeout(() => reveals.forEach(reveal), 2500);
    return () => {
      io.disconnect();
      clearTimeout(t);
      document.documentElement.classList.remove("js-anim");
    };
  }, []);

  const d = flavorData[active];

  return (
    <>
      <header id="hdr" className={solid ? "solid" : undefined}>
        <nav className="nav">
          <a href="#top" className="brand">
            <b>伴生乳酪</b>
            <small>BANSHENG CHEESE</small>
          </a>
          <div className={menuOpen ? "menu open" : "menu"} id="menu">
            <a href="#philo" onClick={() => setMenuOpen(false)}>
              品牌理念
            </a>
            <a href="#balls" onClick={() => setMenuOpen(false)}>
              乳酪球
            </a>
            <a href="#rare" onClick={() => setMenuOpen(false)}>
              生乳酪蛋糕
            </a>
            <a href="#gift" onClick={() => setMenuOpen(false)}>
              禮盒
            </a>
            <a href="#quality" onClick={() => setMenuOpen(false)}>
              嚴選
            </a>
          </div>
          <a href="#cta" className="nav-cta">
            立即訂購
          </a>
          <div
            className="burger"
            id="burger"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-text reveal">
              <div className="hero-latin">
                Cheese, as a companion of everyday.
              </div>
              <h1>
                每一口，
                <br />
                都是<span className="ac">日常的</span>
                <br />
                溫柔相伴。
              </h1>
              <p className="lead">
                伴生乳酪，以北海道乳酪為核心，手工製作一口乳酪球與冷藏生乳酪蛋糕。不過度甜膩、不喧賓奪主，只想成為你生活裡剛剛好的那份甜。
              </p>
              <div className="hero-actions">
                <a href="#balls" className="btn">
                  探索乳酪系列 <span className="ar">→</span>
                </a>
                <a href="#philo" className="btn ghost">
                  品牌故事
                </a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="ph">
                <span>[ 主視覺 · 乳酪球商品照 ]</span>
              </div>
              <div className="hero-badge">
                <b>100%</b>
                <small>北海道乳酪</small>
              </div>
              <div className="hero-dot">
                since
                <br />
                2021
              </div>
            </div>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              <span>一口乳酪球</span>
              <span>冷藏生乳酪蛋糕</span>
              <span>北海道乳酪</span>
              <span>每日手作</span>
              <span>冷凍宅配</span>
              <span>一口乳酪球</span>
              <span>冷藏生乳酪蛋糕</span>
              <span>北海道乳酪</span>
              <span>每日手作</span>
              <span>冷凍宅配</span>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="philo" id="philo">
          <div className="wrap">
            <div className="eyebrow center reveal">Our Philosophy</div>
            <p className="big reveal">
              「伴生」，是<b>相伴而生</b>的意思。
              <br />
              我們相信好的甜點不必張揚，
              <br />
              而是恰好在你需要的時刻，<b>靜靜陪著你</b>。
            </p>
            <p className="sub reveal">
              從一顆乳酪球開始，我們堅持以單純的原料、節制的甜度，做出能日日品嚐而不膩的乳酪甜點。讓每一次的相遇，都成為日常裡值得期待的小事。
            </p>
          </div>
        </section>

        {/* 乳酪球 */}
        <section className="balls" id="balls">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="latin">Signature No.1</span>
                <h2>一口乳酪球</h2>
              </div>
              <p>
                外層微酥、內裡綿密的一口尺寸。冷藏、常溫各有風味，是辦公室與午後的最佳夥伴。
              </p>
            </div>
            <div className="ball-stage">
              <div className="ball-img reveal">
                <div className="ball-ring"></div>
                <div
                  className="ph"
                  id="ballPh"
                  style={{ backgroundColor: active === 0 ? undefined : d.color }}
                >
                  <span>[ 乳酪球 · {d.name} ]</span>
                </div>
              </div>
              <div className="ball-meta reveal">
                <div className="ko" id="ballKo">
                  {d.ko}
                </div>
                <h3
                  id="ballName"
                  style={{ color: active === 0 ? undefined : d.color }}
                >
                  {d.name}
                </h3>
                <p className="desc" id="ballDesc">
                  {d.desc}
                </p>
                <div className="ball-note">
                  <div>
                    <b>12 入</b>
                    <small>盒裝 / 一口尺寸</small>
                  </div>
                  <div>
                    <b>-18°C</b>
                    <small>冷凍宅配到府</small>
                  </div>
                  <div>
                    <b>14 天</b>
                    <small>冷凍最佳賞味</small>
                  </div>
                </div>
                <div className="flavors" id="flavors">
                  {flavorData.map((f, i) => (
                    <div
                      key={f.ko}
                      className={i === active ? "flavor active" : "flavor"}
                      data-i={i}
                      onClick={() => setActive(i)}
                    >
                      <span className="sw" style={{ background: f.color }}></span>
                      <span>{f.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 生乳酪蛋糕 */}
        <section className="rare" id="rare">
          <div className="wrap rare-grid">
            <div className="rare-text reveal">
              <div className="eyebrow">Signature No.2</div>
              <span className="latin">Rare Cheesecake</span>
              <h2>冷藏生乳酪蛋糕</h2>
              <p>
                不經烘烤、以冷藏凝結的生乳酪蛋糕。入口即化的綿密質地，搭配宇治抹茶的清雅尾韻，盛裝於環保紙盒，是送禮與自享的雋永之選。
              </p>
              <ul className="feat">
                <li>
                  <span className="n">01</span>
                  <div>
                    <b>入口即化的生乳酪質地</b>
                    <small>低溫凝結，保留乳脂最純粹的綿密。</small>
                  </div>
                </li>
                <li>
                  <span className="n">02</span>
                  <div>
                    <b>宇治抹茶 × 北海道乳酪</b>
                    <small>茶香與乳香層層交疊，甜而不膩。</small>
                  </div>
                </li>
                <li>
                  <span className="n">03</span>
                  <div>
                    <b>環保紙盒包裝</b>
                    <small>可完整回收的 eco-box，優雅且友善地球。</small>
                  </div>
                </li>
              </ul>
              <a href="#cta" className="btn">
                預訂生乳酪蛋糕 <span className="ar">→</span>
              </a>
            </div>
            <div className="rare-img reveal">
              <span className="eco-tag">ECO BOX</span>
              <div className="ph sage">
                <span>[ 生乳酪蛋糕 · 環保禮盒照 ]</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY */}
        <section className="quality" id="quality">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <span className="latin">Why Bansheng</span>
                <h2>對乳酪的三個堅持</h2>
              </div>
              <p>從選料到製作，我們以職人的標準把關每一個環節。</p>
            </div>
            <div className="q-grid">
              <div className="q-card reveal">
                <div className="num">01</div>
                <h4>嚴選乳酪</h4>
                <p>
                  指定使用北海道進口奶油乳酪，乳脂飽滿、酸度柔和，是綿密口感的根本。
                </p>
              </div>
              <div className="q-card reveal">
                <div className="num">02</div>
                <h4>節制的甜</h4>
                <p>減糖配方，讓乳香成為主角。一口接一口，也不會有負擔的甜膩。</p>
              </div>
              <div className="q-card reveal">
                <div className="num">03</div>
                <h4>每日手作</h4>
                <p>
                  小批量、當日製作，無多餘添加。新鮮做、新鮮送，是我們不變的承諾。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GIFT */}
        <section className="gift" id="gift">
          <div className="wrap gift-grid">
            <div className="gift-img reveal">
              <div className="ph">
                <span>[ 節慶禮盒 · 情境照 ]</span>
              </div>
            </div>
            <div className="gift-text reveal">
              <div className="eyebrow">Gift Collection</div>
              <h2>
                把相伴，
                <br />
                包進每一份心意
              </h2>
              <p>
                無論是彌月、節慶或商務送禮，伴生乳酪皆提供質感禮盒與專屬卡片服務。一份溫柔的甜，替你說出說不出口的話。
              </p>
              <div className="chips">
                <span>彌月禮盒</span>
                <span>節慶禮盒</span>
                <span>企業送禮</span>
                <span>客製卡片</span>
                <span>大量訂購</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="cta">
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <div className="wrap">
            <div className="eyebrow center reveal">Order Now</div>
            <h2 className="reveal">
              讓伴生，
              <br />
              成為你日常的甜。
            </h2>
            <p className="reveal">
              線上訂購，冷凍宅配到府。也歡迎追蹤我們，掌握每一檔限定口味與優惠。
            </p>
            <div className="cta-actions reveal">
              <a href="#" className="btn">
                前往線上商店 <span className="ar">→</span>
              </a>
              <a href="#" className="btn ghost2">
                加入 LINE 訂購
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <b>伴生乳酪</b>
              <small>BANSHENG CHEESE</small>
              <p>
                相伴而生的乳酪甜點。以北海道乳酪，手作一口乳酪球與冷藏生乳酪蛋糕，陪你度過每一個值得的日常。
              </p>
            </div>
            <div className="foot-col">
              <h5>Products</h5>
              <a href="#balls">一口乳酪球</a>
              <a href="#rare">生乳酪蛋糕</a>
              <a href="#gift">節慶禮盒</a>
              <a href="#gift">企業送禮</a>
            </div>
            <div className="foot-col">
              <h5>About</h5>
              <a href="#philo">品牌理念</a>
              <a href="#quality">嚴選堅持</a>
              <a href="#cta">線上訂購</a>
              <a href="#">常見問題</a>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <a href="#">LINE 官方帳號</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">service@bansheng.com</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 伴生乳酪 BANSHENG CHEESE. All rights reserved.</span>
            <span>冷凍宅配 · 全台到府 · 每日新鮮手作</span>
          </div>
        </div>
      </footer>
    </>
  );
}
