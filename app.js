// window.addEventListener('DOMContentLoaded', () => {
// })
const dropdown = document.querySelector('.dropdown')
const dropdownList = document.querySelector('.dropdown__list')
const shopLinks = document.querySelectorAll('.shop__link')
const dropdownLinks = document.querySelectorAll('.dropdown__link')
const dropdownMenu = document.querySelector('.dropdown__menu')
const shopContent = document.querySelector('.shop__content')
const formInput = document.querySelector('.form__input')
const formBtn = document.querySelector('.form__btn')
const nav = document.querySelector('.nav__link_shop-cart')
const modal = document.querySelector('.modal')

const cards = [
    {
        id: '01',
        name: 'ETHIOPIA COFFEE 100гр',
        img: 'img/s6-f1.png',
        price: '15',
        type: 'ETHIOPIA'
    },
    {
        id: '02',
        name: 'ETHIOPIA COFFEE 400гр',
        img: 'img/s6-f1.png',
        price: '23',
        type: 'ETHIOPIA'
    },
    {
        id: '03',
        name: 'ETHIOPIA COFFEE 900гр',
        img: 'img/s6-f1.png',
        price: '52',
        type: 'ETHIOPIA'
    },
    {
        id: '04',
        name: 'KENYA COFFEE 100гр',
        img: 'img/s6-f2.png',
        price: '15',
        type: 'KENYA'
    },
    {
        id: '05',
        name: 'KENYA COFFEE 400гр',
        img: 'img/s6-f2.png',
        price: '15',
        type: 'KENYA'
    },
    {
        id: '06',
        name: 'KENYA COFFEE 900гр',
        img: 'img/s6-f2.png',
        price: '15',
        type: 'KENYA'
    },
    {
        id: '07',
        name: 'COLUMBIA COFFEE 100гр',
        img: 'img/s6-f3.png',
        price: '15',
        type: 'COLUMBIA'
    },
    {
        id: '08',
        name: 'COLUMBIA COFFEE 400гр',
        img: 'img/s6-f3.png',
        price: '15',
        type: 'COLUMBIA'
    },
    {
        id: '09',
        name: 'COLUMBIA COFFEE 900гр',
        img: 'img/s6-f3.png',
        price: '15',
        type: 'COLUMBIA'
    },
    {
        id: '10',
        name: 'QUATEMALA COFFEE 100гр',
        img: 'img/s6-f4.png',
        price: '15',
        type: 'QUATEMALA'
    },
    {
        id: '11',
        name: 'QUATEMALA COFFEE 400гр',
        img: 'img/s6-f4.png',
        price: '15',
        type: 'QUATEMALA'
    },
    {
        id: '12',
        name: 'QUATEMALA COFFEE 900гр',
        img: 'img/s6-f4.png',
        price: '15',
        type: 'QUATEMALA'
    }
]

const imgCards = {
    'img/s6-f1.png' : 'shop__img_bg1', 
    'img/s6-f2.png': 'shop__img_bg2',
    'img/s6-f3.png': 'shop__img_bg3',
    'img/s6-f4.png': 'shop__img_bg4'
}

//функция для отрисовки карточек по типу
const paintCards = (selectionCards) => {
    shopContent.innerHTML = ""
    selectionCards.forEach(card => {
        const div = document.createElement('div');
        div.classList.add('shop__item')
        div.innerHTML = `
        <div class="shop__img ${imgCards[card.img]}">
            <a class="shop__link" href="#" data-type="${card.type} data-id=${card.id}">ПОКАЗАТЬ</a>
        </div>
        <h3>${card.name}</h3>
        <p>${card.price} бел. р.</p>
       `
       shopContent.append(div)
    })
}


//функция, которая фильтрует карточки по типу
const sortCards = (type) => {
    let selectionCards = cards.filter(card => card.type === type)
    paintCards(selectionCards)
}

//работает с элементами выпадающего меню через делегирование событий и обьект собыития event
dropdownList.addEventListener('click', (event) => {
    event.preventDefault();
    let el = event.target;
    if (el.closest('.dropdown__link')) {
        let type = el.innerHTML;
        sortCards(type)
    }
})

//каждой ссылке назначаем слушателя событий и ищем карточки по типу
shopLinks.forEach(link => {
    link.addEventListener('click', () => {
        let type = link.dataset.type;
        sortCards(type)
    })
})

//функция отвечающая за выпадающее меню
const showDropdownMenu = (e) => {
    e.preventDefault();
    if (e.target.closest('.dropdown')) {
        dropdownList.classList.toggle('active');
    }
}
//слушатель события "наведения мыши" для ссылки выпадающего меню
dropdown.addEventListener('mouseover', showDropdownMenu);
//слушатель события "убирания мыши" для ссылки выпадающего меню
dropdown.addEventListener('mouseout', showDropdownMenu);


//функция поиска
const searchCards = (inputValue) => {
    const selectionCards = cards.filter(card => {
        return card.name.toLowerCase().includes(inputValue.toLowerCase().trim())
    })
        paintCards(selectionCards);
}

formBtn.addEventListener('click',(e) => {
    e.preventDefault();
    let inputValue = formInput.value.trim();
    if (inputValue.trim() !== "" ) {
        searchCards(inputValue); 
    }
})



formInput.addEventListener('keydown', (e)=> {
    if (e.code === "Enter") {

   
    let inputValue = formInput.value;
    e.preventDefault();
    if (inputValue.trim() !== "" ) {
        searchCards(inputValue); 
    }
}
})

// formInput.addEventListener('input', (e)=> {
//     let inputValue = formInput.value;
//     e.preventDefault();
//     if (inputValue.trim() !== "" ) {
//         searchCards(inputValue); 
//     }
// })

nav.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('nav__link_shop-cart')) {
        modal.style.display = 'flex';
    } 
})