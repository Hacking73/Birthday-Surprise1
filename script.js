const openGift = document.getElementById('openGift');
const hero = document.getElementById('hero');
const surprise = document.getElementById('surprise');
const cake = document.getElementById('cake');
const candleBtn = document.getElementById('candleBtn');
const musicBtn = document.getElementById('musicBtn');
const song = document.getElementById('birthdaySong');
const letter = document.getElementById('letter');
const confetti = document.getElementById('confetti');
const replay = document.getElementById('replay');

const message = `Dear Jhili,

On your special day, I just want to wish you endless happiness, beautiful smiles and lots of wonderful memories.

May every new day bring you closer to your dreams. Keep smiling, keep shining and always stay the beautiful person you are.

Happy Birthday once again, Jhili! ❤️🎂✨`;

function burstConfetti(count=90){
  confetti.innerHTML='';
  for(let i=0;i<count;i++){
    const el=document.createElement('i');
    el.style.left=Math.random()*100+'vw';
    el.style.setProperty('--x',(Math.random()*220-110)+'px');
    el.style.animationDelay=(Math.random()*0.8)+'s';
    el.style.animationDuration=(2.2+Math.random()*2)+'s';
    el.style.transform=`rotate(${Math.random()*360}deg)`;
    el.style.background=`hsl(${Math.random()*360},80%,65%)`;
    confetti.appendChild(el);
  }
}
function heartRain(){
  for(let i=0;i<14;i++){
    const h=document.createElement('div');
    h.className='heart';
    h.textContent=['❤️','💕','💗','💖','💝'][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+'vw';
    h.style.setProperty('--drift',(Math.random()*120-60)+'px');
    h.style.animationDelay=Math.random()*3+'s';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),7000);
  }
}
function beep(freq=600,duration=.12){
  try{
    const C=window.AudioContext||window.webkitAudioContext;
    const ctx=new C(),o=ctx.createOscillator(),g=ctx.createGain();
    o.frequency.value=freq;o.type='sine';g.gain.value=.05;o.connect(g);g.connect(ctx.destination);
    o.start();o.stop(ctx.currentTime+duration);
  }catch(e){}
}
function typeLetter(){
  letter.textContent='';
  let i=0;
  const timer=setInterval(()=>{
    letter.textContent=message.slice(0,i++);
    if(i>message.length) clearInterval(timer);
  },18);
}

openGift.addEventListener('click',()=>{
  hero.classList.add('hidden');
  surprise.classList.remove('hidden');
  burstConfetti();
  heartRain();
  beep(720,.15);
  typeLetter();
  // Browsers commonly block autoplay. The song is started only after this user click.
  song.play().then(()=>musicBtn.textContent='❚❚').catch(()=>musicBtn.textContent='▶');
  window.scrollTo({top:0,behavior:'smooth'});
});

candleBtn.addEventListener('click',()=>{
  cake.src='assets/candle-on.png';
  candleBtn.textContent='✨ Make a Wish!';
  burstConfetti(120);
  heartRain();
  beep(880,.18);
});

musicBtn.addEventListener('click',()=>{
  if(song.paused){
    song.play().then(()=>musicBtn.textContent='❚❚').catch(()=>alert('Please add birthday-song.mp3 to the website folder.'));
  }else{
    song.pause();
    musicBtn.textContent='▶';
  }
});

replay.addEventListener('click',()=>location.reload());
