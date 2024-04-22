function shopCart() {
    const modal = document.querySelector('.modal')
    modal.addEventListener('click', (e)=> {
        if (e.target.closest('.modal')) {
            modal.style.display = 'none'
        }
    })








}
shopCart()

