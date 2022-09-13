import React from 'react';

function AboutPage() {
  function handleToTop() {
    const p = document.querySelector('.about');
    p.scrollTo(0, 0);
  }
  return (
    <>
      <figure className="theme-bgc--b">
        <article className="theme-bgc--b__border">
          <main className="about container">
            <section className="about__title">
              <h1>WANG</h1>
              <h1>ZONG-KAI</h1>
            </section>
            <section className="about__photo">
              <figure></figure>
            </section>
            <section className="about__intro">
              <p>
                你好，我是王宗愷。
                <br />
                目前已從事設計行業3年，過往因為接案的時候接觸到了前端領域，於是深入研究開始自學前端相關語言及技術。
                <br />
                而我在今年決定轉職成為一名前端工程師。專長是
                HTML、CSS、JavaScript、能熟練完成網頁切版工作、互動式網頁的撰寫、串接API應用等。
                <br />
                在前端領域看似一樣的結果卻有著不同的撰寫方式，並且從錯誤中得出新的認知，一直是我保持熱忱的動力。
              </p>
            </section>
            <ul className="about__skill">
              <h1>SKILL</h1>
              <li>HTML、CSS、JavaScript</li>
              <li>React.js、Git、Node.js</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Adobe PhotoShop</li>
              <li>Adobe Illustrator</li>
            </ul>
            <section className="about__experience">
              <h1>EXPERIENCE</h1>
              <ul>
                <h2>社團法人亞太兒少領袖培訓發展協會</h2>
                <h3>平面、媒體、佈景設計師</h3>
                <li>· UI/UX 報名網頁設計</li>
                <li>· 8 場大型活動舞台佈景設計</li>
                <li>· 活動文宣、EDM 製作</li>
                <li>· 宣傳影片拍攝、剪輯</li>
                <li>· 直播串流 Youtube</li>
              </ul>
              <ul>
                <h2>微風廣場實業股份有限公司</h2>
                <h3>微風信義陳列助理設計師</h3>
                <li>· POP 排版設計</li>
                <li>· 大圖陳列製作</li>
                <li>· 花藝陳列製作維護</li>
              </ul>
            </section>
            <section className="about__connect">
              <h1>CONNECT</h1>
              <p>danielkai0107@gmail.com</p>
              <a href="https://github.com/Danielkai0107">
                <span></span> GitHub
              </a>
            </section>
            <section className="backToTop">
              <span onClick={handleToTop}>Back To Top</span>
            </section>
          </main>
        </article>
      </figure>
    </>
  );
}

export default AboutPage;
