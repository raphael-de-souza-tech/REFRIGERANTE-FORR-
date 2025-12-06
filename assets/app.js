const garrafasMenores = document.querySelector(".conj");
const banner = document.querySelector(".banner");


garrafasMenores.addEventListener("mouseenter", ()=>{
    banner.classList.add("active-conj")
})