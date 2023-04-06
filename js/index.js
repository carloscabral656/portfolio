(function(d){
    document.addEventListener('DOMContentLoaded', function(){
        let menuFooter = d.querySelector('.menu-footer')
        menuFooter.addEventListener('click', function(e){
            e.target.classList.toggle('menu-footer-animation')
        })
    })
})(document)
