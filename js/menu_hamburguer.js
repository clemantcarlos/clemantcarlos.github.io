export default function hamburgerMenu(panelBtn,panel,menuLink){
    $(document).click((e)=>{
        console.log(e.target);
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            // $(panel).toggleClass('is-active')
            $(panelBtn).toggleClass('is-active')
        }
        // if(e.target.matches(menuLink)){
        //     $(panel).toggleClass('is-active')
        //     $(panelBtn).toggleClass('is-active')
        // }
    })
}
