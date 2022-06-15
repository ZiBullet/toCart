// This my cart
const showCart = document.querySelector('.showCart')
let myCart = []

let goBack = document.querySelector('.goBack')

// Container from my HTML document
const container = document.querySelector('.container')

function createMyDeal(arr) {
  container.innerHTML = ''
    for (let deal of arr) {
        // Creating all of box elements

        //  The box
        let box = document.createElement('div')
        // Its heading, it means the img block
        let heading = document.createElement('div')
        let img = document.createElement('img')

        // Its description
        let description = document.createElement('div')
        let h3 = document.createElement('h3')
        let info = document.createElement('p')
        let price = document.createElement('p')
        let btnBox = document.createElement('div')
        let btn = document.createElement('button')
        let select = document.createElement('select')
       
        // Decorating each of them

        box.classList.add('box')
        heading.classList.add('heading')
        img.src = deal.img
        description.classList.add('description')
        h3.innerHTML = deal.model
        info.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo corporis, aliquid cum sunt voluptates optio nulla et voluptatum vel laboriosam modi quod nobis dolore quae. Eos asperiores beatae sunt. Eum perspiciatis numquam alias magnam atque cum perferendis consequuntur, incidunt esse.'
        price.classList.add('price')
        for (let key in deal.price) {
            let option = new Option(key, deal.price)
            select.append(option)

            // Tried to add price changing which depends on its method, but I FAILED

            // if (key == 'cash') {
            //     price.innerHTML = deal.price.cash
            // } else if (key = 'credit') {
            //     price.innerHTML = deal.price.credit
            // } else {
            //     price.innerHTML = deal.price.card
            // }
        }
        btnBox.classList.add('btn')
        btn.classList.add('toCart')
        btn.innerHTML = 'To cart'

        container.append(box)
        box.append(heading, description)
        heading.append(img)
        description.append(h3, info, select, price, btnBox)
        btnBox.append(btn)

        btn.onclick = () => {
          myCart.push(deal)
        }
    }
}
let cars = [
  {
    id: Math.random(),
    model: "maluba 2",
    company: "chevrolette",
    engine: 2.2,
    img: "https://1.bp.blogspot.com/-6-s2BwymkcA/W4qoq7oh_sI/AAAAAAAA1AE/G7um1RohqHsx1X2GAJ-8h-aInt-TU_K3ACEwYBhgL/w800/2018_chevrolet_malibu_00.jpg",
      price: {
        cash: 24000,
        credit: 30000,
        card: 26000,
      },
    },
    {
      id: Math.random(),
      model: "mercedes benz amg",
      company: "mercedes",
      engine: 10,
      img: "https://i.pinimg.com/736x/8c/fb/e7/8cfbe7874f83b97c02356fe356cc9d02.jpg",
      price: {
        cash: 150000,
        credit: 200000,
        card: 156000,
      },
    },
  
    {
      id: Math.random(),
      model: "Laferrari",
      company: "Laferrari",
      engine: 5.2,
      img: "https://avatars.mds.yandex.net/get-zen_doc/3510533/pub_5ef5d560528d237f0e84566d_5ef5d5a30ee01058dfd2acab/scale_1200",
      price: {
        cash: 170000,
        credit: 210000,
        card: 175000,
      },
    },
    {
      id: Math.random(),
      model: "Tesla model s",
      company: "Tesla",
      engine: 6.3,
      img: "https://a.allegroimg.com/original/11c69d/aeae2c6443408328d5d1614c058e/TESLA-MODEL-S-LEWY-WAHACZ-PRZOD-1041570-00-A-Typ-samochodu-Samochody-osobowe",
      price: {
        cash: 180000,
        credit: 220000,
        card: 180000,
      },
    },
    {
      id: Math.random(),
      model: "rimac",
      company: "The Rimac Group",
      engine: 1.9,
      img: "https://avatars.mds.yandex.net/i?id=36394a42166318d0114cfe6f944a0c4e-4819767-images-thumbs&n=13",
      price: {
        cash: 2400000,
        credit: 2600000,
        card: 2500000,
      },
    },
    {
      id: Math.random(),
      model: "damas",
      company: "chevrollete",
      engine: 3.2,
      img: "https://i.cenyavto.com/2020/05/hJNB.jpeg",
      price: {
        cash: 24000,
        credit: 26000,
        card: 25000,
      },
    },
    {
      id: Math.random(),
      model: "BMW",
      company: "Dont know",
      engine: 2.1,
      img: "https://avatars.mds.yandex.net/i?id=7d0070ffb2e05f2b194c689ac0a86b9c-5584528-images-thumbs&n=13",
      price: {
        cash: 80000,
        credit: 830000,
        card: 810000,
      },
    },
    {
      id: Math.random(),
      model: "Jamolidin",
      company: "God",
      engine: 1000000,
      img: "https://avatars.mds.yandex.net/get-zen_doc/1906877/pub_61b1ec26266c4d483939a870_61b8b3890bb91e72b215f310/scale_1200",
      price: {
        cash: 0,
        credit: 0,
        card: 0,
      },
    },
    {
      id: Math.random(),
      model: "Lamborigini Aventador J",
      company: "Lamborigini",
      engine: 3,
      img: "https://wroom.ru/i/cars2/lamborghini_aventador_1.jpg",
      price: {
        cash: 360000,
        credit: 380000,
        card: 370000,
      },
    },
    {
      id: Math.random(),
      model: "SuperMarket Busket",
      company: "5-ochka",
      engine: 0.5,
      img: "https://safeguard.ru/wa-data/public/shop/products/29/26/2629/images/10410/10410.750x0.jpg",
      price: {
        cash: 6000,
        credit: 6800,
        card: 6700,
      },
    },
    {
      id: Math.random(),
      model: "Mitsubishi Lancer X",
      company: "Mitsubishi Motors",
      engine: 1.8,
      img: "https://st4.zr.ru/_ah/img/332P_4JQQYd7enXYrJ9Qnw=s800",
      price: {
        cash: 38995,
        credit: 40000,
        card: 39000,
      },
    },
    {
      id: Math.random(),
      model: "centra",
      company: "chevrolette",
      img: "https://www.zr.ru/d/story/b0/584368/201310170856-201310170856-gentra-026.jpg",
      engine: 1.5,
      price: {
        cash: 15000,
        credit: 21000,
        card: 17000,
      },
    },
    {
      id: Math.random(),
      model: "cobalt",
      company: "chevrolette",
      img: "https://mashintop.ru/uploads/attachments/complectation/1699161295/originals/chevrolet_cobalt_34121.jpg",
      engine: 1.6,
      price: {
        cash: 13000,
        credit: 18000,
        card: 15000,
      },
    },
    {
      id: Math.random(),
      model: "nexia",
      company: "chevrolette",
      img: "https://mashintop.ru/uploads/attachments/complectation/1699161295/originals/chevrolet_cobalt_34121.jpg",
  
      engine: 1.6,
      price: {
        cash: 10000,
        credit: 14000,
        card: 12000,
      },
    },
  ];
  createMyDeal(cars)
showCart.onclick = () => {
  createMyDeal(myCart)
}
goBack.onclick = () => {
  createMyDeal(cars)
}



