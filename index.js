
var menu = [
  { id: 1, title: 'Italian Abaya', category: 'product', price: 15.99, img: './images/Abayass (1).jpg', dec: 'goodFriday' },
  { id: 2, title: 'Italian Abaya', category: 'product', price: 15.99, img: './images/Abayass (2).jpg', dec: 'goodFriday' },
  { id: 3, title: 'Italian Abaya', category: 'product', price: 15.99, img: './images/Abayass (3).jpg', dec: 'goodFriday' },
  { id: 4, title: 'Italian Abaya', category: 'product', price: 15.99, img: './images/Abayass (4).jpg', dec: 'goodFriday' },
   {   id: 5,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (5).jpg',
    dec: 'goodFriday',
  },
  {
    id: 6,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (6).jpg',
    dec: 'goodFriday',
  },
  {
    id: 7,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (7).jpg',
    dec: 'goodFriday',
  },
  {
    id: 8,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (8).jpg',
    dec: 'goodFriday',
  },
  {
    id: 9,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (9).jpg',
    dec: 'goodFriday',
  },
  {
    id: 10,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (10).jpg',
    dec: 'goodFriday',
  },
  {
    id: 11,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (11).jpg',
    dec: 'goodFriday',
  },
  {
    id: 12,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (12).jpg',
    dec: 'goodFriday',
  },
  {
    id: 13,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (13).jpg',
    dec: 'goodFriday',
  },
  {
    id: 14,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (14).jpg',
    dec: '"goodFriday"',
  },
  {
    id: 15,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (15).jpg',
    dec: 'product',
  },
  {
    id: 16,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (15).jpg',
    dec: 'product',
  },
  {
    id: 17,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (17).jpg',
    dec: 'product',
  },
  {
    id: 18,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (21).jpg',
    dec: 'goodFriday',
  },
  {
    id: 19,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (21).jpg',
    dec: 'product',
  },
  {
    id: 20,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (21).jpg',
    dec: 'product',
  },
  {
    id: 21,
    title: 'Italian Abaya',
    category: 'product',
    price: 15.99,
    img: './images/Abayass (17).jpg',
    dec: 'goodFriday',
  },
];
// Cart items
var carticon = document.querySelectorAll('.cart');
var cartRemove = document.querySelectorAll('.remove-item');
var closeCart = document.querySelector('.close-cart');
var closecartbutton = document.querySelector('.cart-cart');
var cartoverlay = document.querySelector('.cart-page-overlay');
var claercartbutton = document.querySelector('.clear-cart');
var cartpage = document.querySelector('.cart-page');
var carttotal = document.querySelector('.cart-total');
var cartcontent = document.querySelector('.cart-content');
var cartItems = document.querySelector('.icon-items-number');
var cartItems2 = document.querySelector('.icon-items-number2');

var linkcontainer = document.querySelector('.links-container');
var btntoggle = document.querySelector('.nav-toggle');
var header = document.querySelector('header');
var productcontainer = document.querySelectorAll('.product-container');
var Links = document.querySelectorAll('.link');
var herolink = document.querySelector('.hero-container');
var textAnimation = document.querySelector('.hero-text-animation')
// Toggle button functionality
btntoggle.addEventListener('click', () => {
  linkcontainer.classList.toggle('show-links');
});

// Fixed navigation bar functionality
window.addEventListener('scroll', () => {
  var headerSize = header.getBoundingClientRect().height;
  var scrollPos = window.pageYOffset;
  if (scrollPos > headerSize) {
    header.classList.add('fixed');
    linkcontainer.classList.remove('show-links');
  } else {
    header.classList.remove('fixed');
  }
});

// Background slider
var slide = document.querySelector('.container');
var textAnimation = document.querySelector('.hero-text-animation');
var images = [
  './images/Abayass hero2.jpg',
  './images/Abayass hero4.jpg',
  './images/Abayass hero5.jpg',
  './images/Abayass hero6.jpg',
  './images/Abayass hero1.jpg'
];
var text = [
  'YOU GET YOUR DESIRE ABAYA IN YOUR FINGER TIP',
  'Luxury Meets Comfort—Fashion You’ll Love to Wear, Everywhere.',
  'Limited Edition Drops—Grab Yours Before They’re Gone!',
  'Unleash Your Style—Shop Trendsetting Fashion That Speaks Volumes!',
  'Your Perfect Outfit Starts Here—Find Your Signature Look Today!'
];
var i = 0;

function Slider() {
  if (!slide) {
    console.error("Element with class 'slider' not found.");
    return;
  }
  i = i % images.length;
  textAnimation.textContent = text[i];
  slide.style.backgroundImage = `url('${images[i]}')`;
  slide.style.backgroundSize = "cover";
  slide.style.backgroundPosition = "center";
  i++;
  setTimeout(Slider, 7000);
}

window.onload = Slider;

// Back to top button functionality
var topScroll = document.querySelector('.back-top');
var container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  var containerSize = container.getBoundingClientRect().height;
  var scrollPos = window.pageYOffset;
  if (scrollPos > containerSize) {
    topScroll.classList.add('top-show');
  } else {
    topScroll.classList.remove('top-show');
  }
});

// Link control functionality
Links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var headerSize = header.getBoundingClientRect().height;
    var navlinksSize = linkcontainer.getBoundingClientRect().height;
    var id = e.currentTarget.getAttribute('href').slice(1);
    var element = document.getElementById(id);
    let position = element.offsetTop - headerSize;
    var fixedHeader = header.classList.contains('fixed');

    if (!fixedHeader) {
      position -= headerSize;
    }
    if (headerSize > 99) {
      position += navlinksSize;
    }
    
    window.scrollTo({ left: 0, top: position });
  });
});

// Function to get product by ID
function getProduct(id) {
  return menu.find(product => product.id === id);
}

// Function to display products dynamically
function displayMenu(menuItems) {
  let section = menuItems.map(item => `
    <div class="items-container">
      <div class="items">
        <img src="${item.img}" alt="product image">
        <div class="cartto-container .hover-effect" data-id="${item.id}">
          Add to cart <img src="./images/shopping_cart_checkout_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="">
        </div>
      </div>
      <div class="items-text">
        <p>${item.title}</p>
        <p>Price:<span class="span">$${item.price}</span></p>
      </div>
    </div>`).join("");

  productcontainer.forEach(product => {
    product.innerHTML = section;
  });
}

// Function to handle item functionality
function itemFunctionality() {
  let today = new Date();
  console.log("Today is:", today.getDay());

  setTimeout(() => {
    document.querySelectorAll('.span').forEach(span => {
      let priceValue = parseFloat(span.innerHTML.replace("$", ""));
      span.innerHTML = today.getDay() === 5 
        ? `$${(priceValue / 2).toFixed(2)}`
        : `$${priceValue.toFixed(2)}`;
    });

    document.querySelectorAll('.items').forEach(item => {
      item.classList.toggle("black-friday", today.getDay() === 5);
    });

  
    document.querySelectorAll(".items").forEach(item => {
      item.addEventListener("mouseover", () => {
        item.querySelector(".cartto-container").classList.add("hover-effect");
      });
      item.addEventListener("mouseout", () => {
        item.querySelector(".cartto-container").classList.remove("hover-effect");
      });
    })
      
    

    let cartto = [...document.querySelectorAll(".cartto-container")];
    let carttoDom = cartto;

    cartto.forEach(item => {
      let id = parseInt(item.dataset.id);
      let incart = cart.find(items => items.id === id);

      if (incart) {
        item.innerHTML = 'IN CART';
        item.disabled = true;
      } 

      item.addEventListener('click', (e) => {
        e.target.innerText = 'IN CART';
        e.target.disabled = true;
        let cartItem = { ...getProduct(id), amount: 1 };
        cart = [...cart, cartItem];
        setCartValues(cart);
        addCartItem(cartItem); // Corrected function call
      });
    });
  }, 0);
  showCart()
  CloseCart()
  CartLogic()
  updateCartItemAmount()
}

// Function to calculate cart values
function setCartValues(cart) {
  let tempTotal = 0;
  let itemsTotal = 0;

  cart.forEach(item => {
    tempTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });

  var carttotal = document.querySelector('.cart-total');
  var cartItems = document.querySelectorAll('.icon-items-number'); // Use querySelectorAll for multiple elements

  if (carttotal) {
    carttotal.innerText = parseFloat(tempTotal.toFixed(2));
  }

  if (cartItems.length) {
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].textContent = itemsTotal; // Update all items
    }
  }
}

// Function to add item to the cart display
function addCartItem(item) {
  const div = document.createElement('div');
  div.classList.add('cart-item');
  div.innerHTML = `
    <img src="${item.img}" alt="product">
    <div>
      <h4>${item.title}</h4>
      <h5>$${item.price}</h5>
      <span class="remove-item" data-id="${item.id}">remove</span>
    </div>
    <div class="cartincrement">
      <i class="fas fa-chevron-up" data-id="${item.id}"></i>
      <p class="item-amount">${item.amount}</p>
      <i class="fas fa-chevron-down" data-id="${item.id}"></i>
    </div>
  `;

  if (cartcontent) {
    cartcontent.appendChild(div);
  } 
  console.log(cartcontent);
}
function showCart(){
  carticon.forEach(function(item){
    item.addEventListener('click',()=>{
      cartpage.classList.add('show-cart-page')
  cartoverlay.classList.add('show-cart-page-transparent-bg')
    })
  })

}
function CloseCart(){
closeCart.addEventListener('click',()=>{
  cartpage.classList.remove('show-cart-page')
  cartoverlay.classList.remove('show-cart-page-transparent-bg')
})
}

function CartLogic(){
claercartbutton.addEventListener('click', () => {

  cart = [];
  // Update the cart values
  setCartValues(cart);

  // Remove all cart items from the DOM
  var cartcontent = document.querySelector('.cart-content');
  cartcontent.innerHTML = ""; // Clears all items
});
}



function updateCartItemAmount() {

  cartcontent.addEventListener('click', (e) => {
    let target = e.target;
    let id = parseInt(target.dataset.id); // Get item ID

    // Find the item in the cart
    let cartItem = cart.find(item => item.id === id);

    if (target.classList.contains('fa-chevron-up')) {
      // Increase item amount
      if (cartItem) {
        cartItem.amount++;
        setCartValues(cart);
        updateCartUI(); // Refresh UI
      }
    }

    if (target.classList.contains('fa-chevron-down')) {
      // Decrease item amount
      if (cartItem) {
        cartItem.amount--;
        
        if (cartItem.amount === 0) {
          // Remove item when quantity reaches 0
          cart = cart.filter(item => item.id !== id);
        }
        
        setCartValues(cart);
        updateCartUI(); // Refresh UI
      }
    }
    if (target.classList.contains('remove-item')) {
      // Remove item from the cart
      cart = cart.filter(item => item.id !== id);
      setCartValues(cart);
      updateCartUI();
    }
  });
}


// Function to refresh cart UI
function updateCartUI() {
  var cartcontent = document.querySelector('.cart-content');
  cartcontent.innerHTML = ""; // Clear existing cart content

  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src="${item.img}" alt="product">
      <div>
        <h4>${item.title}</h4>
        <h5>$${item.price}</h5>
        <span class="remove-item" data-id="${item.id}">remove</span>
      </div>
      <div>
        <i class="fas fa-chevron-up" data-id="${item.id}"></i>
        <p class="item-amount">${item.amount}</p>
        <i class="fas fa-chevron-down" data-id="${item.id}"></i>
      </div>
    `;
    cartcontent.appendChild(div);
  });
}

// Function to update cart values
function setCartValues(cart) {
  let tempTotal = 0;
  let itemsTotal = 0;

  cart.forEach(item => {
    tempTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });

  var carttotal = document.querySelector('.cart-total');
  var cartItems = document.querySelectorAll('.icon-items-number');

  if (carttotal) {
    carttotal.innerText = parseFloat(tempTotal.toFixed(2));
  }

  if (cartItems.length) {
    for (let i = 0; i < cartItems.length; i++) {
      cartItems[i].textContent = itemsTotal;
    }
  }
}


 

// Cart setup
var cart = [];
var carttoDom = [];

// Ensure DOM content is loaded before running functions
document.addEventListener('DOMContentLoaded', function () {
  displayMenu(menu);
  itemFunctionality();
});


document.querySelector('.buy-stock').addEventListener('click', () => {
  let phoneNumber = "2347081343780"; // Replace with your WhatsApp number
  let cartMessage = "🛍 Cart Summary:\n\n";

  cart.forEach(item => {
    cartMessage += `🛒 *${item.title}*\nPrice: $${item.price}\nQuantity: ${item.amount}\nImage: ${item.img}\n\n`;
  });

  let totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  let totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  cartMessage += `📦 *Total Items:* ${totalItems}\n💰 *Total Price:* $${totalPrice.toFixed(2)}\n`;

  let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(cartMessage)}`;

  window.open(whatsappUrl, "_blank");
});









