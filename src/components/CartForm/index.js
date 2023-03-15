export const keys = {
  itemsArr: "items",
  itemsInCart: "itemsInCart",
  totalItemCount: "totalItemCount",
};

export function getCartFormNodes() {
  const cartCounter = document.getElementById("cart-counter");
  const cartDropdown = document.getElementById("cart-dropdown");
  return { cartCounter, cartDropdown };
}

export function saveItemsInCart(totalItemCount = 0, items = []) {
  let itemsArr = [];
  const data = loadItemsInCart();
  if (data) itemsArr = data[keys.itemsArr];
  itemsArr = [...itemsArr, ...items];

  let obj = {};
  obj[keys.itemsArr] = itemsArr;
  obj[keys.totalItemCount] = totalItemCount;
  renderCartItems(itemsArr, getCartFormNodes().cartDropdown);
  window.localStorage.setItem(keys.itemsInCart, JSON.stringify(obj));
}

function createTextContent(name, price, amount, totalPrice) {
  const content = document.createElement("span");
  const highlight = content.cloneNode(false);
  const priceTag = content.cloneNode(false);
  const details = content.cloneNode(false);
  const title = content.cloneNode(false);

  highlight.classList.add("copy__heading--secondary");
  priceTag.classList.add("copy__paragraph");
  highlight.classList.add("copy__heading");
  title.classList.add("copy__paragraph");
  highlight.style.marginLeft = "0.5rem";
  details.style.display = "block";
  title.style.display = "block";
  content.classList.add("copy");

  priceTag.innerText = `$${price.toPrecision(5)} x ${amount}`;
  highlight.innerText = `$${totalPrice.toPrecision(5)}`;
  title.innerText = name;

  details.append(priceTag, highlight);
  content.append(title, details);
  return content;
}

function createDeleteButton(li, cartItems, id, root) {
  const counter = document.getElementById("cart-counter");

  const button = document.createElement("button");
  button.classList.add("cart-dropdown__delete");
  button.title = "Remove item";

  button.innerHTML = `
  <svg width="14" height="15" viewBox="0 0 14 16">
  <use href="#svg_icon-delete" fill-rule="nonzero" />
  </svg>
  `;

  button.onclick = () => {
    if (!cartItems[id]) id = 0;
    const existingAmount = +counter.innerText || 0;
    const amountToRemove = cartItems[id].amount;
    let newAmount = existingAmount - amountToRemove;

    li.remove();
    console.log(cartItems[id]);
    cartItems.splice(id, 1);

    if (newAmount <= 0) {
      counter.innerText = "";
      counter.style.display = "none";
      root.dataset.hasItems = false;
      newAmount = 0;
    } else counter.innerText = newAmount.toPrecision(1);

    const obj = {};
    obj[keys.itemsArr] = cartItems;
    obj[keys.totalItemCount] = newAmount;
    window.localStorage.setItem(keys.itemsInCart, JSON.stringify(obj));
  };

  return button;
}

export function renderCartItems(cartItems, cartItemsList) {
  const childNodes = cartItemsList.children;
  const root = cartItemsList.parentNode;
  Array.from(childNodes).forEach((child) => child.remove());
  cartItems.forEach((item, id) => {
    root.dataset.hasItems = true;
    const { name, thumbnail, price, amount, totalPrice } = item;
    const li = document.createElement("li");
    li.classList.add("cart-dropdown__item");
    li.classList.add("copy");

    const img = document.createElement("img");
    img.style.borderRadius = ".25rem";
    img.src = thumbnail;
    img.height = 64;
    img.width = 64;
    img.alt = "";

    const content = createTextContent(name, price, amount, totalPrice);
    const button = createDeleteButton(li, cartItems, id, root);
    li.append(img, content, button);
    cartItemsList.append(li);
  });
}

export function loadItemsInCart() {
  const itemsInCart = window.localStorage.getItem(keys.itemsInCart);
  if (itemsInCart !== null) {
    const data = JSON.parse(itemsInCart);
    const nodes = getCartFormNodes();

    const cartCounter = nodes.cartCounter;
    const totalCount = data[keys.totalItemCount];

    if (totalCount > 0) {
      cartCounter.innerText = totalCount.toPrecision(1);
      cartCounter.style.display = "block";
    }

    const cartDropdown = nodes.cartDropdown;
    renderCartItems(data[keys.itemsArr], cartDropdown);
    return data;
  }
}
