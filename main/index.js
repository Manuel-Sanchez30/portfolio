const hiddenElementsHTML = document.querySelectorAll(".hidden");
const linksHTML = document.querySelectorAll(".link");
const menuShowHTML = document.querySelector('.header__navbar--li');
const iconShowMenuHTML = document.querySelector('.iconShowMenu');
const iconThemeHTML = document.querySelector('.iconTheme');

const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach((entry)=>{

            if(entry.isIntersecting){
                entry.target.classList.add('show');

                linksHTML.forEach((link)=>{
                    const href = link.getAttribute("href").split("#")[1];
                    const id = entry.target.id;
                    
                    if(href === id){
                        link.classList.add('link--active')
                    }else{
                        link.classList.remove('link--active')
                    }
                });

            }else{
                entry.target.classList.remove('show')
            }
        });
    },
    {
        threshold: 0.5,
    }
);

hiddenElementsHTML.forEach( (element) => observer.observe(element) );

iconShowMenuHTML.addEventListener('click', () =>{

    if(menuShowHTML.classList.toggle('header__navbar--show'))
        return iconShowMenuHTML.classList.add("bx-x");
    
        iconShowMenuHTML.classList.remove("bx-x");
    
});

linksHTML.forEach((link)=>{
    link.addEventListener('click', () =>{

        if(menuShowHTML.classList.toggle('header__navbar--show'))
            return iconShowMenuHTML.classList.add("bx-x");
        
            iconShowMenuHTML.classList.remove("bx-x");
        
    });
})



// darkMode

iconThemeHTML.addEventListener('click', ()=>{
    if(document.body.classList.toggle('darkMode')){
        iconThemeHTML.classList.add('bx-moon')

    }else{
        
        iconThemeHTML.classList.remove('bx-moon') 
    }

});





