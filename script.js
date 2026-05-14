const form=document.getElementById("form"),lista=document.getElementById("lista");let entradas=JSON.parse(localStorage.getItem("entradas"))||[];function salvarLocalStorage(){localStorage.setItem("entradas",JSON.stringify(entradas))}function renderizarEntradas(){lista.innerHTML="",entradas.forEach((e,t)=>{let r=document.createElement("div");r.classList.add("card"),r.innerHTML=`
<h3>${e.titulo}</h3>
<p>${e.descricao}</p>
<small>${e.data}</small>
<button
class="remover"
onclick="removerEntrada(${t})"
>
Remover
</button>
`,lista.appendChild(r)})}function removerEntrada(e){entradas.splice(e,1),salvarLocalStorage(),renderizarEntradas()}form.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("titulo").value,r=document.getElementById("descricao").value,a=document.getElementById("data").value;entradas.push({titulo:t,descricao:r,data:a}),salvarLocalStorage(),renderizarEntradas(),form.reset()}),renderizarEntradas(),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js");let deferredPrompt;const installBtn=document.getElementById("installBtn");window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),deferredPrompt=e,installBtn.hidden=!1}),installBtn.addEventListener("click",async()=>{deferredPrompt&&(deferredPrompt.prompt(),deferredPrompt=null,installBtn.hidden=!0)});