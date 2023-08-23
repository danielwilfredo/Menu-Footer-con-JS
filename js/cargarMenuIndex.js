document.addEventListener('DOMContentLoaded', function(){
    
    /*Cargar menu */
    const contenedorMenu=document.getElementById("menuContenedor");
    const menuHTML = generarMenuIndex();
    contenedorMenu.innerHTML=menuHTML;

    /* Cargar Footer */
    const FooterContainer = document.getElementById('footerContainer');
    const FooterHTML = generateFooter();
    FooterContainer.innerHTML = FooterHTML;
})