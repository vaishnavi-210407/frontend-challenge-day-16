  let cart = [];

  const cartItems =
    document.getElementById("cartItems");

  const totalPrice =
    document.getElementById("totalPrice");

  // ADD TO CART

  function addToCart(name, price){

    const existingItem =
      cart.find(item => item.name === name);

    if(existingItem){

      existingItem.quantity++;

    }

    else{

      cart.push({
        name:name,
        price:price,
        quantity:1
      });

    }

    updateCart();

  }

  // UPDATE CART UI

  function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

      cartItems.innerHTML =
        `<div class="empty">Cart is Empty</div>`;

    }

    cart.forEach((item,index) => {

      total += item.price * item.quantity;

      cartItems.innerHTML += `

        <div class="cart-item">

          <div class="cart-info">

            <h3>${item.name}</h3>

            <p>
              ₹${item.price}
            </p>

            <div class="quantity">

              <button onclick="decreaseQty(${index})">
                -
              </button>

              <span>
                ${item.quantity}
              </span>

              <button onclick="increaseQty(${index})">
                +
              </button>

            </div>

          </div>

          <button class="remove-btn"
            onclick="removeItem(${index})">
            ✕
          </button>

        </div>

      `;

    });

    totalPrice.innerText = total;

  }

  // INCREASE QUANTITY

  function increaseQty(index){

    cart[index].quantity++;

    updateCart();

  }

  // DECREASE QUANTITY

  function decreaseQty(index){

    if(cart[index].quantity > 1){

      cart[index].quantity--;

    }

    else{

      cart.splice(index,1);

    }

    updateCart();

  }

  // REMOVE ITEM

  function removeItem(index){

    cart.splice(index,1);

    updateCart();

  }