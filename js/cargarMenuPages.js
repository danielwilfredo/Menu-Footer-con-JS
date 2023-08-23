document.addEventListener('DOMContentLoaded', function(){
    const contenedorMenu=document.getElementById("menuContenedor");
    const menuHTML = generarMenuPages();
    contenedorMenu.innerHTML=menuHTML;

        /* Cargar Footer */
        const FooterContainer = document.getElementById('footerContainer');
        const FooterHTML = generateFooter();
        FooterContainer.innerHTML = FooterHTML;
})