async function Display() {
  let cards = document.querySelector(".cards_A");
  let products = await axios.get("https://fakestoreapi.in/api/products");
  products = products.data.products.slice(0, 10);
  products.forEach((obj) => {
    cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card_A">
            <img
              src="${obj.image}"
              alt=""
              class="cards_img"
            />
            <div class="card_content">
              <p>${obj.title.slice(0, 35)}.</p>
              <div class="bag_A">
                <p>${obj.price} so'm</p>
                <div class="bag_img">
                  <img src="./images/shopping-bag.png" alt="" class="bagimg" />
                </div>
              </div>
            </div>
          </div>`
    );
  });
}
Display();

async function Display2() {
    let cards = document.querySelector(".cards_A2");
    let products = await axios.get("https://fakestoreapi.in/api/products");
    products = products.data.products.slice(10, 20);
    products.forEach((obj) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card_A">
              <img
                src="${obj.image}"
                alt=""
                class="cards_img"
              />
              <div class="card_content">
                <p>${obj.title.slice(0, 35)}.</p>
                <div class="bag_A">
                  <p>${obj.price} so'm</p>
                  <div class="bag_img">
                    <img src="./images/shopping-bag.png" alt="" class="bagimg" />
                  </div>
                </div>
              </div>
            </div>`
      );
    });
  }
  Display2();
  