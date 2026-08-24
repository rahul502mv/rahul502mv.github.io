const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='74px';nav.style.left='0';nav.style.right='0';nav.style.padding='22px';nav.style.background='#090b0f';nav.style.flexDirection='column';nav.style.borderBottom='1px solid #202631'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<851)nav.style.display='none'}));
