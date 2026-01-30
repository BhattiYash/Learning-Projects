const galleryData = [
  { id: 1, title: "Aerodynamics", img: "https://media.istockphoto.com/id/1191941530/photo/black-modern-car-3d-illustration.jpg?s=612x612&w=0&k=20&c=fqQez-snbZfYIggo-_1-RzabLbU4UrTqhP5rDZJ_8RQ=" },
  { id: 2, title: "Engine Core", img: "https://images8.alphacoders.com/373/thumb-1920-373306.jpg" },
  { id: 3, title: "Interior Design", img: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=600&width=1200&fit=bounds" },
  { id: 4, title: "Torque", img: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/05/A-2024-05-21T185632.262.jpg?fit=1366%2C768&ssl=1" },
];
const STATS = [
  { k: '0–100 km/h', v: '2.1s', d: 'Torque vectoring preloads the line.' },
  { k: 'PEAK POWER', v: '1,250 hp', d: 'Tri-motor with active thermal control.' },
  { k: 'DOWNFORCE', v: '1,120 kg', d: 'Venturi floor + adaptive wing.' },
  { k: 'BRAKES', v: 'C/SiC', d: 'Carbon-ceramic bite with long fade margin.' },
  { k: 'TOP SPEED', v: '382 km/h', d: 'Low drag mode trims the wake.' },
  { k: 'RANGE', v: '540 km', d: 'Long legs. Short temper.' },
]

const SHOTS = [
  'LAUNCH',
  'APEX',
  'STRAIGHT',
  'PITLANE',
]

export default function Performance() {
  return (
    <section className="section section--perf" id="performance">
      <div className="section__bg" aria-hidden="true">
        <div className="perf__image" />
        <div className="diag" />
      </div>

      <div className="container">
        <div className="section__head">
          <div className="eyebrow">PERFORMANCE</div>
          <h2 className="h2">
            Speed isn’t a figure. It’s <span className="textLava">authority</span>.
          </h2>
          <p className="lede">
            Data is the receipt. The experience is the point: steering load, pedal feel, torque delivery, and the way it settles at speed.
          </p>
        </div>

        <div className="stats">
          {STATS.map((s) => (
            <article key={s.k} className="tile">
              <div className="tile__top">
                <div className="tile__k">{s.k}</div>
                <div className="tile__underline" aria-hidden="true" />
              </div>
              <div className="tile__v">{s.v}</div>
              <div className="tile__d">{s.d}</div>
            </article>
          ))}
        </div>

        <div className="perfGallery" aria-hidden="true">
        <div className="perfGallery__track">
      {galleryData.map((item) => (
        <div 
          key={item.id} 
          className="perfGallery__frame"
          /* This is the magic line that makes each one different */
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="perfGallery__overlay" />
          <span className="perfGallery__label">{item.title}</span>
        </div>
      ))}
    </div>
        </div>
      </div>
    </section>
  )
}

