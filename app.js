const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(function(btn){//access individual elements in var NodeList
    btn.addEventListener('click', function(ev){
        // console.log(ev.currentTarget.dataset.id)
        const index = ev.currentTarget.dataset.id //save event in a var for easy accessibilty


        menuItems.forEach(function(item){ 
            //console.log(item)
            const newItem = item.dataset.id

            if(index === newItem){
                //console.log('yez')
                item.style.display = "grid"
            }else if(index !== newItem){
                //console.log('none')
                item.style.display = "none"
            }
        })
    })
})


