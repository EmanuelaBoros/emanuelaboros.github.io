// Shared step-through player. Stepper({steps:[{h,p,render(stage)}], ...}) fills #stage, #caph, #capp, #prev, #play, #next, #nav.
function Stepper(cfg){
  var $=function(id){return document.getElementById(id)};
  var S=cfg.steps, cur=0, timer=null, playing=false;
  var nav=S.map(function(s,i){return '<button type="button" aria-label="Step '+(i+1)+': '+s.h+'" data-s="'+i+'"></button>'}).join('');
  $('nav').innerHTML=nav;
  function paint(){
    var s=S[cur];
    $('stage').innerHTML=s.render();
    $('caph').textContent=s.h; $('capp').innerHTML=s.p;
    $('prev').disabled=cur===0; $('next').disabled=cur===S.length-1;
    var b=$('nav').children; for(var j=0;j<b.length;j++)b[j].setAttribute('aria-current',j===cur?'true':'false');
  }
  function go(n){cur=Math.max(0,Math.min(S.length-1,n));paint()}
  function setPlay(on){
    playing=on; $('play').textContent=on?'Pause':'Play';
    if(timer){clearInterval(timer);timer=null}
    if(on)timer=setInterval(function(){go(cur>=S.length-1?0:cur+1)},cfg.interval||4500);
  }
  $('prev').onclick=function(){setPlay(false);go(cur-1)};
  $('next').onclick=function(){setPlay(false);go(cur+1)};
  $('play').onclick=function(){ if(playing){setPlay(false)} else { go(cur>=S.length-1?0:cur+1); setPlay(true) } };
  $('nav').onclick=function(e){var s=e.target.getAttribute&&e.target.getAttribute('data-s');if(s!==null&&s!==undefined){setPlay(false);go(+s)}};
  go(0);
}
