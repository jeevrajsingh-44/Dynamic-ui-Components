function createCard(product_image, name, price, sizes, size1, size2, size3, rating, description, feedback_count, feedback1) {
    let card = document.createElement("div");
    card.classList.add("card");
    document.querySelector(".container").append(card);

    let item_image = document.createElement("div");
    item_image.classList.add("item_image");
    card.append(item_image);

    let img = document.createElement("img");
    img.src = product_image;
    item_image.append(img);

    let details = document.createElement("div");
    details.classList.add("details");
    card.append(details);

    let details_left = document.createElement("div");
    details_left.classList.add("details_left");
    details.append(details_left);

    let title = document.createElement("h3");
    title.innerText = name;
    details_left.append(title);

    let amount = document.createElement("h4");
    amount.innerText = price;
    details_left.append(amount);

    let details_right = document.createElement("div");
    details_right.classList.add("details_right");
    details.append(details_right);

    let sizes_title = document.createElement("h3");
    sizes_title.innerText = sizes;
    details_right.append(sizes_title);

    let measurements = document.createElement("p");
    measurements.innerText = `${size1} | ${size2} | ${size3}`;
    details_right.append(measurements);

    let review = document.createElement("div");
    review.classList.add("review");
    card.append(review);

    let ratings = document.createElement("h5");
    ratings.innerText = rating;
    review.append(ratings);

    let descriptions = document.createElement("h5");
    descriptions.innerText = description;
    review.append(descriptions);

    let feedbacks = document.createElement("div");
    feedbacks.classList.add("feedbacks");
    card.append(feedbacks);

    let review_count = document.createElement("h6");
    review_count.innerText = feedback_count;
    review_count.id = "review-count";
    feedbacks.append(review_count);

    let review1 = document.createElement("h2");
    review1.innerText = feedback1;
    review1.id = "review1"
    feedbacks.append(review1);

    let buying = document.createElement("div");
    buying.classList.add("buying");
    card.append(buying);

    let buy_button = document.createElement("button");
    buy_button.innerText = "Buy Now";
    buy_button.classList.add("buy-btn");

    let cart_button = document.createElement("button");
    cart_button.innerText = "Add To Cart";
    cart_button.classList.add("cart-btn");

    buying.append(buy_button);
    buying.append(cart_button);
}

createCard(
    "shoe.png",
    "Nike Air Max",
    "₹7,999",
    "Sizes:",
    "S",
    "M",
    "L",
    "★★★★☆",
    "Comfortable running shoes with breathable mesh.",
    "245 Reviews:",
    "-Very comfortable and worth the price!"
);

createCard(
    "tshirt.png",
    "Oversized Cotton T-Shirt",
    "₹999",
    "Sizes:",
    "M",
    "L",
    "XL",
    "★★★★★",
    "Premium cotton t-shirt with a relaxed fit.",
    "180 Reviews:",
    "-Soft fabric and perfect fitting."
);

createCard(
    "hoodie.png",
    "Winter Fleece Hoodie",
    "₹1,799",
    "Sizes:",
    "S",
    "M",
    "L",
    "★★★★☆",
    "Warm fleece hoodie for cold weather.",
    "320 Reviews:",
    "-Very comfortable and good quality."
);

createCard(
    "watch.png",
    "Classic Leather Watch",
    "₹2,499",
    "Sizes:",
    "Free",
    "N/A",
    "N/A",
    "★★★★☆",
    "Elegant leather strap watch with premium design.",
    "95 Reviews:",
    "-Looks expensive and feels premium."
);

createCard(
    "bag.png",
    "Travel Backpack",
    "₹1,299",
    "Sizes:",
    "Small",
    "Medium",
    "Large",
    "★★★★★",
    "Water resistant backpack for daily travel.",
    "410 Reviews:",
    "-Spacious and comfortable to carry."
);