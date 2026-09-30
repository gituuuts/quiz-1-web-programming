// Navbar dibuat dari satu tempat agar konsisten di semua halaman
(function(){
  const nav=document.getElementById('nav');
  const inRoot=nav.dataset.base==='./', active=nav.dataset.page;
  const items=[['home','Home',''],['profile','Profile','profile/'],['hometown','Hometown','hometown/'],['food','Local Food','food/'],['tourist','Tourist Places','tourist/']];
  nav.innerHTML=items.map(([k,label,path])=>{
    const href=inRoot?(path||'./'):('../'+path);
    return `<a href="${href}" class="${k===active?'on':''}">${label}</a>`;
  }).join('');
  const top=document.getElementById('toTop');
  if(top)top.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
})();