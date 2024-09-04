const items = [
  {
    id: 1,
    dot: "rgba(165, 212, 255, 1)",
    imageUrl:
      "../../image/category/items/elongated-wave-form-modern-mirror-light-blue-color.png",
    name: "Kristin",
    type: "Зеркало напольно",
    price: 150000,
  },
  {
    id: 2,
    dot: "rgba(240, 179, 234, 1)",
    imageUrl:
      "../../image/category/items/tall-flower-form-modern-mirror-light-blue-color-wh.png",
    name: "Arlene",
    type: "Зеркало напольно",
    price: 150000,
  },
  {
    id: 3,
    dot: "rgba(142, 205, 250, 1)",
    imageUrl:
      "../../image/category/items/tall-sun-form-modern-mirror-light-blue-color-white.png",
    name: "Colleen",
    type: "Зеркало напольно",
    price: 150000,
  },
  {
    id: 4,
    dot: "rgba(251, 228, 202, 1)",
    imageUrl:
      "../../image/category/items/tall-flower-form-modern-mirror-light-blue-color-wh (1).png",
    name: "coppelia",
    type: "Зеркало напольно",
    price: 150000,
  },
  {
    id: 5,
    dot: "rgba(240, 181, 250, 1)",
    imageUrl:
      "../../image/category/items/tall-wave-form-modern-mirror-light-lavender-color- (1).png",
    name: "artemide",
    type: "Зеркало напольно",
    price: 150000,
  },
  {
    id: 6,
    dot: "rgba(255, 196, 165, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-lamp-wave-form-- (1).png",
    name: "Aubrey",
    type: "Лампа настольная",
    price: 150000,
  },
  {
    id: 7,
    dot: "rgba(136, 227, 121, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-lamp-tree-form--.png",
    name: "Leslie",
    type: "Лампа настольная",
    price: 150000,
  },
  {
    id: 8,
    dot: "rgba(250, 142, 239, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-lamp-wave-form-- (3) 1.png",
    name: "Darrell",
    type: "Лампа настольная",
    price: 150000,
  },
  {
    id: 9,
    dot: "rgba(41, 208, 217, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-lamp-wave-form-- (2).png",
    name: "coppelia",
    type: "Лампа настольная",
    price: 150000,
  },
  {
    id: 10,
    dot: "rgba(137, 213, 255, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-lamp-wave-form--.png",
    name: "artemide",
    type: "Лампа настольная",
    price: 150000,
  },
  {
    id: 11,
    dot: "rgba(251, 228, 202, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-chair-wave-form- (1).png",
    name: "Kathryn",
    type: "Кресла и стулья",
    price: 150000,
  },
  {
    id: 12,
    dot: "rgba(240, 179, 234, 1)",
    imageUrl:
      "../../image/category/items/sophisticated-unusual-modern-high-chair-wave-form-.png",
    name: "Wendy",
    type: "Кресла и стулья",
    price: 150000,
  },
  {
    id: 13,
    dot: "rgba(241, 142, 250, 1)",
    imageUrl:
      "../../image/category/items/tall-unusual-modern-chair-light-lavender-color-whi (1).png",
    name: "Judith",
    type: "Кресла и стулья",
    price: 150000,
  },
  {
    id: 14,
    dot: "rgba(92, 84, 74, 1)",
    imageUrl: "../../image/category/items/Subtract.png",
    name: "Jane",
    type: "Кресла и стулья",
    price: 150000,
  },
  {
    id: 15,
    dot: "rgba(240, 181, 250, 1)",
    imageUrl:
      "../../image/category/items/unusual-modern-high-chair-wave-form.png",
    name: "Darlene",
    type: "Кресла и стулья",
    price: 150000,
  },
  {
    id: 16,
    dot: "rgba(165, 212, 255, 1)",
    imageUrl:
      "../../image/category/items/elongated-form-tall-modern-table-light-blue-color- (2).png",
    name: "Kathryn",
    type: "Столы и тумбы",
    price: 150000,
  },
  {
    id: 17,
    dot: "rgba(240, 223, 179, 1)",
    imageUrl:
      "../../image/category/items/unusual-modern-high-wide-wave-glowing-light-table- (1).png",
    name: "Wendy",
    type: "Столы и тумбы",
    price: 150000,
  },
  {
    id: 18,
    dot: "rgba(240, 223, 179, 1)",
    imageUrl:
      "../../image/category/items/unusual-modern-tall-wide-wave-glowing-light-table- 1.png",
    name: "Judith",
    type: "Столы и тумбы",
    price: 150000,
  },
  {
    id: 19,
    dot: "rgba(202, 207, 251, 1)",
    imageUrl:
      "../../image/category/items/unusual-modern-high-wide-wave-glowing-light-table- (2) 1.png",
    name: "Jane",
    type: "Столы и тумбы",
    price: 150000,
  },
  {
    id: 20,
    dot: "rgba(240, 181, 250, 1)",
    imageUrl:
      "../../image/category/items/wide-form-hight-modern-table-light-lavender-color- (2).png",
    name: "Darlene",
    type: "Столы и тумбы",
    price: 150000,
  },
];

let currentIndex = 0;
const itemsPerPage = 5;

function generateItems(items) {
  const container = document.getElementById("items");
  if (!container) {
    console.error("Items container not found");
    return;
  }

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
        <div class="item-element" id='${item.id}'>
        <div class="item-element-dot" style="background: ${item.dot}"></div>
            <img src="${item.imageUrl}" alt="${item.name}" class="item-element-image"/>
            <h2 class="item-element-name">${item.name}</h2>
            <p class="item-element-type">${item.type}</p>
            <hr class="item-element-hr">
            <div class="item-element-information-bye">
            <p class="item-element-price">${item.price} <span>₽</span></p>
            <button class="item-element-price-button"><img src='../../image/category/Union.png' /> Купить</button>
        </div>
        </div>
    `;
    container.appendChild(itemDiv);
  });
}

function loadMoreItems() {
  const itemsToLoad = items.slice(currentIndex, currentIndex + itemsPerPage);
  generateItems(itemsToLoad);
  currentIndex += itemsPerPage;

  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    if (currentIndex >= items.length) {
      loadMoreButton.disabled = true;
    }
  } else {
    console.error("Load More button not found");
  }
}

function filterItems(type) {
  const filteredItems = items.filter((item) => item.type === type);
  const container = document.getElementById("items");
  if (container) {
    container.innerHTML = "";
    currentIndex = 0;
    generateItems(filteredItems.slice(0, itemsPerPage));
    currentIndex += itemsPerPage;

    const loadMoreButton = document.getElementById("load-more");
    if (loadMoreButton) {
      loadMoreButton.disabled = filteredItems.length <= currentIndex;
    } else {
      console.error("Load More button not found");
    }
  } else {
    console.error("Items container not found");
  }
}

document.getElementById("categoties").addEventListener("click", (event) => {
  if (event.target.classList.contains("categoty-button")) {
    const type = event.target.getAttribute("data-type");
    const categories = document.getElementById("items-container");
    document.getElementById("items").innerHTML = "";
    if (categories.classList.contains("display-none")) {
      categories.classList.remove("display-none");
    }
    filterItems(type);
  }
});

const loadMoreButton = document.getElementById("load-more");
if (loadMoreButton) {
  loadMoreButton.addEventListener("click", loadMoreItems);
} else {
  console.error("Load More button not found");
}

const minSlider = document.getElementById("range-min");
const maxSlider = document.getElementById("range-max");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const minValueDisplay = document.getElementById("min-value");
const maxValueDisplay = document.getElementById("max-value");

function updateSlider() {
  if (parseInt(minSlider.value) > parseInt(maxSlider.value) - 1000) {
    minSlider.value = parseInt(maxSlider.value) - 1000;
  }

  if (parseInt(maxSlider.value) < parseInt(minSlider.value) + 1000) {
    maxSlider.value = parseInt(minSlider.value) + 1000;
  }

  minPriceInput.placeholder = `от ${minSlider.value}`;
  maxPriceInput.placeholder = `до ${maxSlider.value}`;

  minValueDisplay.textContent = minSlider.value;
  maxValueDisplay.textContent = maxSlider.value;

  minValueDisplay.style.left = `${
    ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100
  }%`;
  maxValueDisplay.style.left = `${
    ((maxSlider.value - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100
  }%`;

  const percentMin =
    ((minSlider.value - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
  const percentMax =
    ((maxSlider.value - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;

  document.querySelector(".filter-slider-track").style.background = `
    linear-gradient(to right, #fff ${percentMin}%, rgba(217, 255, 90, 1) ${percentMin}%, rgba(217, 255, 90, 1) ${percentMax}%, #fff ${percentMax}%)
  `;
}

function updateInput() {
  minSlider.value = Math.min(
    parseInt(minPriceInput.value),
    parseInt(maxSlider.value) - 1000
  );
  maxSlider.value = Math.max(
    parseInt(maxPriceInput.value),
    parseInt(minSlider.value) + 1000
  );

  updateSlider();
}

minSlider.addEventListener("input", updateSlider);
maxSlider.addEventListener("input", updateSlider);

minPriceInput.addEventListener("input", updateInput);
maxPriceInput.addEventListener("input", updateInput);

document.getElementById("filter").addEventListener("click", () => {
    const filter = document.getElementById("filter-options");
    if (filter.classList.contains("display-none")) {
      filter.classList.remove("display-none");
    }
  }
);

updateSlider();
