// =======================================================
// CONFIG — change these as needed
// =======================================================
const TIME_LIMIT_MINUTES = 30;
const PASS_PERCENT = 60;

// Paste the Apps Script "/exec" web app URL here once you have it.
// Leave empty ("") to skip sending scores anywhere.
const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxItSR4jzIEFbWTwDPYZxOzuKhLEKBoLmQjxDpUV0V-uLnYeE_jYARLEFcaUL7YYUyePw/exec";

// Each question: text, list of options, index (0-based) of the correct option.
const QUESTIONS = [
{q:"The handbook presents Christianity simultaneously as privilege, responsibility, surrender, and sacrifice. Which interpretation most faithfully preserves the relationship among these ideas?",
 options:["Privilege establishes access to Christ, while responsibility primarily concerns maintaining church attendance after conversion.","Privilege describes the value of following Christ, while sacrifice is an optional expression of unusually deep commitment.","Privilege and responsibility are presented together: following Christ is an extraordinary privilege precisely because it entails surrender, responsibility, and willingness to bear costs for Him.","Responsibility replaces privilege once a believer understands the demands of discipleship."],
 correct:2},
{q:"A member argues: \"If the Christian life has an easy yoke and light burden, then anything that causes me significant discomfort must necessarily be outside God's will.\" Which reading of the handbook most directly exposes the conceptual error?",
 options:["The handbook treats sacrifice as evidence that the Christian has misunderstood grace.","The handbook distinguishes the nature of Christ's yoke from the absence of cost: following Christ may cost friendship, comfort, popularity, pleasures, and require sacrifice.","The handbook teaches that God's will should always produce immediate emotional peace.","The handbook considers suffering incompatible with the Christian life except during persecution."],
 correct:1},
{q:"Consider these propositions: I. Whatever a believer surrenders for Christ is temporary. II. Whatever Christ gives the believer is eternal. III. Therefore, present sacrifice and future reward should be evaluated as though they possess equivalent value. Which conclusion is most consistent with the handbook?",
 options:["I and II are accepted, but III contradicts the handbook's argument.","I is rejected while II and III are accepted.","II is qualified because the handbook teaches that some rewards are temporary.","All three propositions are accepted because sacrifice and reward are presented as equivalent realities."],
 correct:0},
{q:"A ministry unit claims that excellence culture means refusing to submit anything until it reaches absolute perfection. Based strictly on the handbook, what is the most precise correction?",
 options:["Excellence is primarily the avoidance of mistakes.","Excellence is synonymous with perfection when serving God.","Excellence rejects careless work but is explicitly distinguished from perfection; it means giving one's best with available resources.","Excellence applies only to spiritual assignments and not administrative work."],
 correct:2},
{q:"Which pair represents the handbook's deliberate distinction between soul-winning culture and discipleship culture?",
 options:["Soul-winning gathers people; discipleship keeps people inside church programmes.","Soul-winning intentionally seeks opportunities to introduce people to Jesus; discipleship begins from conversion and aims at establishment, maturity, fruitfulness, and reproduction.","Soul-winning is evangelism outside the church; discipleship is worship inside the church.","Soul-winning concerns unbelievers exclusively; discipleship concerns church workers exclusively."],
 correct:1},
{q:"What distinguishes the handbook's understanding of prayer culture from treating prayer merely as an emergency response?",
 options:["Prayer is primarily for solving crises","Prayer is mainly required before major church programmes","Prayer is a lifestyle involving fellowship with God, dependence on Him, and intercession","Prayer is primarily the responsibility of spiritual leaders"],
 correct:2},
{q:"A church successfully gathers many people but rarely helps them become established, mature, fruitful, or capable of discipling others. Which culture is most clearly missing?",
 options:["Honour culture","Excellence culture","Soul-winning culture","Discipleship culture"],
 correct:3},
{q:"According to the handbook, the most appropriate preparation before leaving home for church is to:",
 options:["Review the previous sermon and arrive when convenient","Pray, expect an encounter with God, and prepare to participate","Wait until the service begins before becoming spiritually attentive","Focus mainly on dressing appropriately and inviting someone"],
 correct:1},
{q:"Why does the handbook describe punctuality as part of honour?",
 options:["Because arriving late always means a person does not love God","Because punctuality demonstrates regard for the gathering and avoids consistently arriving late when one could arrive early","Because only workers are expected to arrive early","Because punctuality guarantees spiritual growth"],
 correct:1},
{q:"A member says, \"I've heard this teaching before, so I don't need to take notes or learn anything new.\" Which response best reflects the handbook?",
 options:["Previous exposure automatically means maturity","A disciple is a learner, so previous exposure does not eliminate the possibility of learning","Only new members need to take notes","Listening is unnecessary if the believer already knows the Bible"],
 correct:1},
{q:"Which situation most clearly violates the handbook's instruction concerning distractions?",
 options:["A member responding actively during worship","A member writing important truths from the teaching","A member repeatedly using a phone and engaging in unnecessary conversations during the Word","A member inviting another person to church"],
 correct:2},
{q:"The handbook's teaching on appropriate dressing emphasizes:",
 options:["Fashion, expense, and personal preference","Modesty, honour, decency, and wisdom","Uniformity and expensive clothing","Formal clothing regardless of the nature of the gathering"],
 correct:1},
{q:"What does the handbook mean by \"Do not become a passive church member\"?",
 options:["Every member must become a preacher","Members should actively respond, participate, serve, and follow godly instructions","Members must always speak during church services","Members should perform every available church responsibility"],
 correct:1},
{q:"According to the handbook, the relationship between love for Christ and service is best expressed as:",
 options:["Love for Christ should produce service","Service produces salvation","Service is required only from pastors","Love for Christ removes the need for practical service"],
 correct:0},
{q:"When the Word is taught, the handbook gives a progression that moves beyond merely listening. Which is correct?",
 options:["Listen → debate → memorize → teach","Receive → believe → apply → take action steps","Hear → evaluate → reject → reconsider","Listen → respond emotionally → remember → repeat"],
 correct:1},
{q:"What is the handbook's central correction to someone who watches others pray without personally engaging?",
 options:["Prayer should be left to those with spiritual gifts","Prayer must produce participation and faith; when prayer is being made, the believer should pray","Watching prayer is acceptable as long as the person agrees with it","Prayer is primarily a leadership responsibility"],
 correct:1},
{q:"Why does the handbook encourage believers to always rejoice in church?",
 options:["Because Christians should never experience difficulties","Because joy is connected with God's Kingdom, God's presence, and the fruit of the Spirit","Because sadness is always evidence of unbelief","Because joyful people are automatically spiritually mature"],
 correct:1},
{q:"Which statement most accurately represents the handbook's position on pastors?",
 options:["Pastors are perfect representatives of God who cannot make mistakes","Pastors are ordinary leaders whose opinions should always be questioned","Pastors are not perfect people, but they are gifts Christ has given to His Church","Pastors are responsible for doing the spiritual work of every believer"],
 correct:2},
{q:"Which of the following is NOT one of the three reasons given for needing a pastor?",
 options:["Spiritual growth","Protection against false doctrine","Equipping believers for ministry","Guaranteeing material prosperity"],
 correct:3},
{q:"According to the handbook, a pastor's assignment is not simply to do ministry on behalf of members but also to:",
 options:["Prevent members from doing ministry independently","Equip believers to fulfil their own assignments","Ensure every member performs the same ministry function","Replace the believer's responsibility toward the Gospel"],
 correct:1},
{q:"A member attends church occasionally, remains unknown to leaders, appears mainly when needing assistance, and rarely serves. Which combination of handbook principles does this person most clearly neglect?",
 options:["Receive your pastor, be committed, be known and counted, be available","Pray, fast, evangelize, and preach","Excellence, worship, generosity, and dressing","Career, happiness, education, and finances"],
 correct:0},
{q:"According to the handbook, purpose is best defined as:",
 options:["The career through which a person earns a living","The personal goals a person chooses to accomplish","The God-given reason for one's existence—the assignment and contribution God designed one's life to fulfil","The activity that produces the greatest personal happiness"],
 correct:2},
{q:"A person becomes wealthy, famous, and successful in business but never fulfils God's assignment for his life. According to the handbook, this person has:",
 options:["Automatically fulfilled purpose because success proves divine approval","Possibly succeeded in several things while still missing God's purpose","Fulfilled purpose because career and purpose are identical","Fulfilled purpose if the wealth is personally satisfying"],
 correct:1},
{q:"Which statement best distinguishes career from purpose according to the handbook?",
 options:["Career is spiritual while purpose is professional","Career answers what you do, while purpose addresses why you exist and what God wants to accomplish through your life","Career and purpose are identical when a person enjoys the work","Purpose begins only after a person has established a career"],
 correct:1},
{q:"Why does the handbook reject the definition of purpose as \"whatever makes me happy\"?",
 options:["Because happiness has no place in Christianity","Because God's purpose may require sacrifice, and difficulty may cause a person to reject the assignment if happiness is the standard","Because Christians are expected to be unhappy","Because every divine assignment must always produce suffering"],
 correct:1},
{q:"If purpose is determined by God, what should logically follow according to the handbook?",
 options:["A person should design God's purpose around personal goals","A person should discover and align with what God intends rather than ultimately determining the reason for his own creation","A person's career should determine his purpose","A person's happiness should determine his assignment"],
 correct:1},
{q:"Which statement best represents the handbook's teaching about personal goals?",
 options:["Personal goals should replace God's purposes when they become difficult","Personal goals should be pursued independently from God's purpose","Education, career, finances, relationships, and influence should serve God's purpose","Only spiritual goals need to align with God's purpose"],
 correct:2},
{q:"According to the handbook, the heart of the believer's purpose can be summarized as:",
 options:["Become wealthy and use wealth responsibly","Know God and make Him known","Discover one's career and become successful","Attend church and avoid worldly relationships"],
 correct:1},
{q:"Which sequence best reflects the handbook's summary of a man's life?",
 options:["Believe God → become wealthy → serve others → enjoy life","Know God → fear God → obey God → reveal His glory","Fear people → obey leaders → become successful → influence others","Know yourself → develop your career → achieve happiness → serve God"],
 correct:1},
{q:"According to the handbook, the Great Commission is:",
 options:["Primarily the responsibility of pastors and missionaries","Mainly the responsibility of evangelists and church leaders","A responsibility of every believer to represent Christ","Required only when a believer has received formal ministry training"],
 correct:2},
{q:"Which of the following is specifically identified in the handbook as a mission field?",
 options:["Only the local church","Only foreign nations","Campus, workplace, family, neighbourhood, and social media platform","Only places where organized evangelistic programmes occur"],
 correct:2},
{q:"Which option most accurately defines evangelism according to the handbook?",
 options:["Informing people that you are a Christian","Intentionally communicating the Gospel of Jesus Christ, calling people to believe in Him and respond to His message","Winning arguments about Christianity","Inviting people to church without explaining Christ"],
 correct:1},
{q:"What is the practical meaning of \"live like a dead man\" in the evangelism section?",
 options:["Withdraw completely from society","Become less concerned about embarrassment and more concerned about obedience because of dying to self","Avoid all friendships with unbelievers","Refuse to use ordinary opportunities for evangelism"],
 correct:1},
{q:"A student says, \"I don't have a microphone, a church platform, or a ministry title, so I cannot evangelize effectively.\" Which principle from the handbook most directly answers this?",
 options:["Wait until the church gives you an official assignment","Use what you already have—your phone, friendships, school, network, testimony, and other opportunities","Evangelism requires professional equipment","Evangelism should only happen during organized programmes"],
 correct:1},
{q:"According to the handbook, preaching intentionally means:",
 options:["Waiting until every circumstance becomes perfect before speaking","Looking for opportunities and making the most of them to preach Christ","Speaking only when someone directly asks about Christianity","Preaching whenever doing so will guarantee a positive response"],
 correct:1},
{q:"Why does the handbook emphasize dependence on the Holy Spirit in soul winning?",
 options:["Because human communication is unnecessary","Because soul winning is spiritual work and Jesus connected the Holy Spirit's power with being His witnesses","Because only pastors can evangelize without the Holy Spirit","Because technology cannot be used for evangelism"],
 correct:1},
{q:"When beginning a Gospel conversation, the example of Philip and the Ethiopian eunuch teaches the believer to:",
 options:["Begin with a theological argument regardless of the person's understanding","Begin from the person's current understanding and use the conversation as an opening for the Gospel","Avoid questions because questions weaken authority","Focus first on proving that the other person is wrong"],
 correct:1},
{q:"According to the handbook, the goal of a Gospel conversation is primarily:",
 options:["To win an argument","To prove one's superior Bible knowledge","To open a door for the Gospel while speaking with wisdom, love, humility, and respect","To force an immediate conversion"],
 correct:2},
{q:"Which set contains the elements the handbook says an evangelist should know in order to communicate the Gospel effectively?",
 options:["Career development, leadership, finance, influence, and communication","God, man, sin, why Jesus came, His death and resurrection, salvation by grace through faith, repentance, faith in Christ, and the call to follow Jesus","Church history, denominations, apologetics, prophecy, and leadership","Prayer, fasting, worship, church administration, and technology"],
 correct:1},
{q:"What is the handbook's balanced position concerning technology and evangelism?",
 options:["Technology should replace personal evangelism","Technology has no significant place in evangelism","Technology can greatly increase the Gospel's reach but should not replace personal evangelism","Technology should only be used by church media departments"],
 correct:2},
{q:"According to the handbook, the Church is best understood as:",
 options:["Primarily a physical building where Christians meet","An institution controlled by spiritual leaders","A people called out from the world and gathered together in Christ","A weekly gathering designed mainly for worship services"],
 correct:2},
{q:"Why does the handbook emphasize gathering rather than isolated Christianity?",
 options:["Christianity requires attendance at every church programme","Believers need spiritual family, mutual consideration, encouragement, and an environment where they can grow together","Isolation automatically means someone has lost salvation","Large gatherings are the only effective form of discipleship"],
 correct:1},
{q:"What is one distinctive value of a house fellowship or campus fellowship according to the handbook?",
 options:["It replaces the need for the larger church","It provides deeper opportunities for community, accountability, and mutual encouragement","It exists mainly to organize social events","It allows members to avoid accountability from church leadership"],
 correct:1},
{q:"A believer says, \"I don't need anyone to correct or challenge me because my spiritual growth is entirely private.\" Which principle most directly challenges this?",
 options:["Mutual encouragement involves people who challenge, encourage, correct, and help one another grow","Spiritual growth only happens through personal Bible study","Fellowship is primarily for new believers","Accountability is unnecessary for mature Christians"],
 correct:0},
{q:"According to the handbook's workforce teaching, which statement best reflects the relationship between individual assignments and the Church?",
 options:["Everyone must perform the same assignment to maintain unity","Only visible ministers are important to the body","Not everyone has the same assignment, but everyone has a part to play","Administrative and support roles are secondary to spiritual ministry"],
 correct:2},
{q:"A church needs preaching, administration, worship, follow-up, media, welcoming, evangelism, and children's ministry. What principle from the handbook best explains why all these functions matter?",
 options:["Different gifts can operate together as one body","Only preaching directly advances God's Kingdom","Administrative functions are necessary but are not ministry","Every believer should eventually become a preacher"],
 correct:0},
{q:"Why does the handbook say, \"You are an answer to prayer\" in relation to the workforce?",
 options:["Because every believer automatically receives a leadership position","Because Jesus said the harvest is great and labourers are few, so believers should be willing to become the labourers they pray for","Because workers are more important than non-workers","Because praying for labourers removes the need for personal involvement"],
 correct:1},
{q:"Which sequence most accurately reflects the handbook's recommended process for joining the workforce?",
 options:["Choose your favourite department → begin serving → ask questions later","Pray for guidance → identify your gift → commit to excellence","Wait for a leader to assign you → serve → discover your gift","Identify the most prestigious department → join → develop character afterward"],
 correct:1},
{q:"A member has been active for seven months, completed Membership School, is genuinely connected to the church family, and has a verifiable urgent need. According to the handbook, what is the most accurate statement?",
 options:["Welfare is automatically guaranteed","The member may generally qualify to access welfare support, subject to the appropriate process and available resources","Welfare is available only after one year of membership","The member can collect support without documentation because the need is genuine"],
 correct:1},
{q:"A member needs welfare assistance. According to the handbook, which sequence most accurately describes the formal process?",
 options:["Ask any church member → receive immediate assistance → submit evidence afterward","Submit a formal request through the Church Family/Tribe Pastor → provide supporting documents where applicable → undergo review and approval","Contact the Resident Pastor privately → receive approval → inform the Welfare Committee later","Submit documents directly to the church account department → receive assistance according to membership duration"],
 correct:1}
];

// =======================================================
// STATE — simple variables, no framework
// =======================================================
let order = [];          // question order for this attempt (shuffled indices)
let current = 0;         // position in `order` we're currently viewing
let answers = {};         // { questionIndex: chosenOptionIndex }
let secondsLeft = TIME_LIMIT_MINUTES * 60;
let timerId = null;
let done = false;         // true once submitted — locks everything
let takerName = "";

const app = document.getElementById("app");

// =======================================================
// HELPERS
// =======================================================
function shuffledIndexes(length) {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(totalSeconds) {
  const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const s = String(totalSeconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// =======================================================
// TIMER
// =======================================================
function startTimer() {
  timerId = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      secondsLeft = 0;
      clearInterval(timerId);
      submitTest(true); // auto-submit
      return;
    }
    const el = document.getElementById("timerDisplay");
    if (el) {
      el.textContent = formatTime(secondsLeft);
      el.classList.toggle("low", secondsLeft <= 60);
    }
  }, 1000);
}

// =======================================================
// SCREENS
// =======================================================
function showIntro() {
  app.innerHTML = `
    <div class="card intro">
      <span class="title">Timed Assessment</span>
      <p>${QUESTIONS.length} questions, shown in a different order for every person.
         You get ${TIME_LIMIT_MINUTES} minutes once you start. It submits automatically
         the moment time runs out, using whatever you've answered so far.</p>
      <input type="text" id="nameInput" placeholder="Enter your full name">
      <div><button class="btn-primary" id="startBtn">Start test</button></div>
    </div>`;

  document.getElementById("startBtn").onclick = () => {
    takerName = document.getElementById("nameInput").value.trim() || "Anonymous";
    order = shuffledIndexes(QUESTIONS.length);
    current = 0;
    showQuestion();
    startTimer();
  };
}

function showQuestion() {
  const qIndex = order[current];
  const q = QUESTIONS[qIndex];
  const answeredCount = Object.keys(answers).length;
  const percentDone = Math.round((current / order.length) * 100);
  const isLastQuestion = current === order.length - 1;

  app.innerHTML = `
    <header class="top">
      <div class="barrow">
        <div class="title">Timed Assessment</div>
        <div class="timer" id="timerDisplay">${formatTime(secondsLeft)}</div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${percentDone}%"></div></div>
      <div class="progress-label">Question ${current + 1} of ${order.length} · ${answeredCount} answered</div>
    </header>
    <main>
      <div class="card">
        <p class="q-text">${q.q}</p>
        <div class="options">
          ${q.options.map((text, i) => `
            <div class="option ${answers[qIndex] === i ? "selected" : ""}" data-option="${i}">
              <span class="dot"></span><span>${text}</span>
            </div>`).join("")}
        </div>
      </div>
      <div class="navrow">
        <button class="btn-ghost" id="prevBtn" ${current === 0 ? "disabled" : ""}>Previous</button>
        ${isLastQuestion
          ? `<button class="btn-primary" id="submitBtn">Submit test</button>`
          : `<button class="btn-primary" id="nextBtn">Next</button>`}
      </div>
    </main>`;

  // wire up option clicks
  document.querySelectorAll(".option").forEach((el) => {
    el.onclick = () => {
      answers[qIndex] = parseInt(el.dataset.option);
      showQuestion(); // re-render to show the selection
    };
  });

  const prevBtn = document.getElementById("prevBtn");
  if (prevBtn) prevBtn.onclick = () => { current--; showQuestion(); };

  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.onclick = () => { current++; showQuestion(); };

  const submitBtn = document.getElementById("submitBtn");
  if (submitBtn) submitBtn.onclick = () => submitTest(false);
}

function submitTest(wasAutoSubmitted) {
  if (done) return; // never allow a second submission
  done = true;
  if (timerId) clearInterval(timerId);

  let correctCount = 0;
  QUESTIONS.forEach((q, i) => { if (answers[i] === q.correct) correctCount++; });
  const percentScore = Math.round((correctCount / QUESTIONS.length) * 100);
  const passed = percentScore >= PASS_PERCENT;
  const timeUsed = TIME_LIMIT_MINUTES * 60 - secondsLeft;

  sendScoreToSheet({
    name: takerName,
    score: `${correctCount}/${QUESTIONS.length}`,
    percentage: percentScore,
    timeUsed: formatTime(timeUsed),
  });

  // Results + review — no way back into the test from here.
  app.innerHTML = `
    <div class="card results">
      ${wasAutoSubmitted ? `<div class="autonote">Time ran out — your answers were submitted automatically.</div>` : ""}
      <div class="muted">${takerName}</div>
      <div class="score ${passed ? "pass" : "fail"}">${percentScore}%</div>
      <div class="muted">${correctCount} of ${QUESTIONS.length} correct · ${passed ? "Passed" : "Not passed"} (pass mark ${PASS_PERCENT}%) · time used ${formatTime(timeUsed)}</div>
    </div>
    <div class="card review">
      <div class="title" style="margin-bottom:12px;">Review</div>
      ${order.map((qIndex, i) => {
        const q = QUESTIONS[qIndex];
        const chosen = answers[qIndex];
        const isRight = chosen === q.correct;
        return `<div class="review-item">
          <div class="qn">${i + 1}. ${q.q} <span class="tag ${isRight ? "right" : "wrong"}">${isRight ? "Correct" : "Incorrect"}</span></div>
          <div class="muted">Your answer: ${chosen === undefined ? "— no answer —" : q.options[chosen]}</div>
          ${!isRight ? `<div class="muted">Correct answer: ${q.options[q.correct]}</div>` : ""}
        </div>`;
      }).join("")}
    </div>`;
}

// =======================================================
// GOOGLE SHEETS — sends one summary row per attempt
// =======================================================
function sendScoreToSheet(data) {
  const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzzVRwhHgDzaazaMm3xPJUFAzQkRlXgUlZ0xN2KOQ9_Pvx-ie6pzcPfDiK9u8cea-R_Fg/exec";
  if (!GOOGLE_SHEET_WEBHOOK_URL) return; // nothing configured yet — skip quietly
  fetch(GOOGLE_SHEET_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors", // Apps Script doesn't send CORS headers; we don't need to read the response
    body: JSON.stringify(data),
  }).catch(() => {}); // if it fails, don't block the person from seeing their results
}

// =======================================================
// START
// =======================================================
showIntro();