
function setLanguage(lang) {
    let en = document.querySelectorAll(".lang-en");
    let sq = document.querySelectorAll(".lang-sq");
    
    if (lang === "en") {
        en.forEach(el => el.style.display = "inline");
        sq.forEach(el => el.style.display = "none");
    } 
    else if (lang === "sq") {
        en.forEach(el => el.style.display = "none");
        sq.forEach(el => el.style.display = "inline");
    }
}
const phone= '355685432377';

document.querySelectorAll('.btnbuy').forEach(button =>{

    button.addEventListener('click',function(e){
        e.preventDefault();
        const product= this.dataset.product;
        const price= this.dataset.price;
        const message=' Pershendetje, jam i interesuar per produktin:'+product+' me cmimin :'+price+'. A ka ende gjendje ne dispozicion?';
        const url =
        `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
    