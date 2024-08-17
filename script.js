// navigation responsive burger menu
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
}

// hero section slideshow
let i = 0;
let images = [];
let time = 3000;

images[0] = 'images/Plavo-Strukirano-Odelo.jpg';
images[1] = 'images/Sivo-Odelo-sa-Prslukom.jpg';
images[2] = 'images/Krem-Odelo.jpeg';

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

window.onload = () => {
  changeImg();
  initializeCarousel();
}

// Ensure this function is declared only once
const initializeCarousel = () => {
  const productContainersCtg = [...document.querySelectorAll('.product-container-ctg')];
  const nxtBtnCtg = [...document.querySelectorAll('.nxt-btn-ctg')];
  const preBtnCtg = [...document.querySelectorAll('.pre-btn-ctg')];

  productContainersCtg.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    // Check if the buttons exist before adding event listeners
    if (nxtBtnCtg[i]) {
      nxtBtnCtg[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });
    }

    if (preBtnCtg[i]) {
      preBtnCtg[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    }
  });
}

// Category buttons data
const btns = [
  {
    id: 1,
    name: 'odela',
    icon: `<i class="fa-solid fa-user-tie"></i>`
  },
  {
    id: 2,
    name: 'kombinacije',
    icon: '<i class="fa-solid fa-hat-wizard"></i>'
  },
  {
    id: 3,
    name: 'kaputi',
    icon: '<i class="fa-solid fa-shirt"></i>'
  },
  {
    id: 4,
    name: 'kosulje',
    icon: '<i class="fa-solid fa-shirt"></i>'
  },
  {
    id: 5,
    name: 'jakne',
    icon: '<i class="fa-solid fa-shirt"></i>'
  },
  {
    id: 6,
    name: 'sakoi',
    icon: '<i class="fa-solid fa-shirt"></i>'
  },
  {
    id: 7,
    name: 'prsluci',
    icon: '<i class="fa-solid fa-vest"></i>'
  },
  {
    id: 8,
    name: 'jos',
    icon: '<i class="fa-solid fa-ellipsis"></i>'
  }
];

// Generate category icons
document.getElementById('category-icons-wrapper').innerHTML = btns.map((btn) => {
  var { name, icon } = btn;
  return (
    `
    <div class="category-icons">
      <div class="category-icon-item" onclick="filterItems('${name}')">${icon}</div>
      <div class="category-item-title">
        <span>${name}</span>
      </div>
    </div>
    `
  );
}).join('');

// Product data
const products = [
  {
    id: 1,
    image: 'images/belo-odelo.png',
    title: 'Belo Odelo',
    price: '22.990,00',
    category: 'odela'
  },
  {
    id: 1,
    image: 'images/plavo odelo.jpg',
    title: 'Plavo Odelo',
    price: '22.990,00',
    category: 'odela'
  },
  {
    id: 2,
    image: 'images/kombinacija.png',
    title: 'Blush Denim',
    price: '18.990,00',
    category: 'kombinacije'
  },
  {
    id: 2,
    image: 'images/bisque.png',
    title: 'bisque',
    price: '18.990,00',
    category: 'kombinacije'
  },
  {
    id: 2,
    image: 'images/dark.png',
    title: 'dark sepia',
    price: '18.990,00',
    category: 'kombinacije'
  },
  {
    id: 2,
    image: 'images/kombinacija.png',
    title: 'Blush Denim',
    price: '18.990,00',
    category: 'kombinacije'
  },
  {
    id: 3,
    image: 'images/29.png',
    title: 'Kaput Grafitno Sivi',
    price: '17.990,00',
    category: 'kaputi'
  },
  {
    id: 4,
    image: 'images/kosulja.jpg',
    title: 'Šampanj Košulja',
    price: '3.590,00',
    category: 'kosulje'
  },
  {
    id: 5,
    image: 'images/jakna.jpg',
    title: 'Jakna Crna',
    price: '22.490,00',
    category: 'jakne'
  },
  {
    id: 6,
    image: 'images/18.png',
    title: 'Sivi Karirani Sako',
    price: '6.990,00',
    category: 'sakoi'
  }
];

// Filtering function
const filterItems = (category) => {
  const filteredProducts = products.filter(item => item.category === category);
  displayItem(filteredProducts);
}

// Display products
const displayItem = (items) => {
  // Check if there are items to display
  if (!items || items.length === 0) {
    console.warn("No items to display");
    document.getElementById('product-container-ctg').innerHTML = "<p>No products found for this category.</p>";
    return;
  }

  document.getElementById('product-container-ctg').innerHTML = items.map((item) => {
    var { image, title, price, category } = item;
    return (`
      <div class="product-card">
        <div class="product-image">
          <span class="discount-tag">30% off</span>
          <img src="${image}" class="product-thumb" alt="">
          <button class="card-btn">add to wishlist</button>
        </div>
        <div class="product-info">
          <h2 class="product-brand">${title}</h2>
          <p class="product-short-description">${category}</p>
          <span class="price">${price}</span><span class="actual-price">9490,00</span>
        </div>
      </div>
    `);
  }).join('');

  // Reinitialize carousel logic after updating the DOM
  initializeCarousel();
}

// Initialize with all products
displayItem(products);


// Category icons style change function
document.addEventListener('DOMContentLoaded', () => {
  const categoryIcons = document.querySelectorAll('.category-icon-item');
  
  categoryIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      // Remove 'category-icon-item-active' class from all icons
      categoryIcons.forEach(item => item.classList.remove('category-icon-item-active'));
      
      // Add 'category-icon-item-active' class to the clicked icon
      icon.classList.add('category-icon-item-active');
    });
  });
});
