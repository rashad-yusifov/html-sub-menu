(function(){
    window.addEventListener('load', function(){
        let getNav = document.querySelector('.ui-nav');
        getNav.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', function(){
                document.querySelectorAll('.ui-nav li').forEach(function(item){
                    item.classList.remove('active')
                });
                item.classList.add('active');
            })
        });
    });
})();



function openSub(self){
    let getParent = self.closest('.head');
    let id = self.getAttribute('target-id');
    getParent.querySelectorAll('.icon').forEach(item => item.classList.remove('active'));
    self.classList.add('active');
    let element = getParent.parentNode.querySelector(`.sub-menu[wait-id="${id}"]`);
    getParent.parentNode.querySelectorAll('.sub-menu').forEach(item => item.classList.remove('active'));
    if(element){
        element.classList.add('active');
    }

    if(id == 'all'){
        getParent.parentNode.querySelectorAll('.sub-menu').forEach(item => item.classList.add('active'));
    }

    
}


