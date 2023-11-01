import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";


let all_product = [
      {
        id: 1,
        name: "Men's Blue Jeans",
        image: p1_img,
        category: "men",
        old_price: 49.99,
        new_price: 39.99,
      },
      {
        id: 2,
        name: "Men's Black Leather Jacket",
        image: p2_img,
        category: "men",
        old_price: 89.99,
        new_price: 79.99,
      },
      {
        id: 3,
        name: "Men's Plaid Shirt",
        image: p3_img,
        category: "men",
        old_price: 29.99,
        new_price: 24.99,
      },
      {
        id: 4,
        name: "Men's Sneakers",
        image: p4_img,
        category: "men",
        old_price: 59.99,
        new_price: 49.99,
      },
      {
        id: 5,
        name: "Men's Watch",
        image: p5_img,
        category: "men",
        old_price: 79.99,
        new_price: 69.99,
      },
      {
        id: 6,
        name: "Men's Dress Shoes",
        image: p6_img,
        category: "men",
        old_price: 69.99,
        new_price: 59.99,
      },
      {
        id: 7,
        name: "Men's Casual T-shirt",
        image: p7_img,
        category: "men",
        old_price: 19.99,
        new_price: 15.99
      },
      {
        id: 8,
        name: "Men's Hooded Sweatshirt",
        image: p8_img,
        category: "men",
        old_price: 34.99,
        new_price: 29.99,
      },
      {
        id: 9,
        name: "Men's Shorts",
        image: p9_img,
        category: "men",
        old_price: 24.99,
        new_price: 19.99,
      },
      {
        id: 10,
        name: "Men's Backpack",
        image: p10_img,
        category: "men",
        old_price: 39.99,
        new_price: 34.99,
      },
      {
        id: 11,
        name: "Men's Sunglasses",
        image: p11_img,
        category: "men",
        old_price: 29.99,
        new_price: 24.99,
      },
      {
        id: 12,
        name: "Men's Wallet",
        image: p12_img,
        category: "men",
        old_price: 14.99,
        new_price: 11.99,
      },
      {
        id: 13,
        name: "Women's Floral Dress",
        image: p13_img,
        category: "women",
        old_price: 59.99,
        new_price: 49.99,
      },
      {
        id: 14,
        name: "Women's High Heels",
        image: p14_img,
        category: "women",
        old_price: 49.99,
        new_price: 39.99,
      },
      {
        id: 15,
        name: "Women's Denim Skirt",
        image: p15_img,
        old_price: 39.99,
        new_price: 34.99,
      },
      {
        id: 16,
        name: "Women's Handbag",
        image: p16_img,
        category: "women",
        old_price: 69.99,
        new_price: 59.99,
      },
      {
        id: 17,
        name: "Women's Sunglasses",
        image: p17_img,
        category: "women",
        old_price: 29.99,
        new_price: 24.99,
      },
      {
        id: 18,
        name: "Women's Casual Blouse",
        image: p18_img,
        category: "women",
        old_price: 19.99,
        new_price: 15.99,
      },
      {
        id: 19,
        name: "Women's Running Shoes",
        image: p19_img,
        category: "women",
        old_price: 69.99,
        new_price: 59.99,
      },
      {
        id: 20,
        name: "Women's Earrings",
        image: p20_img,
        old_price: 14.99,
        new_price: 11.99,
      },
      {
        id: 21,
        name: "Women's Formal Dress",
        image: p21_img,
        category: "women",
        old_price: 79.99,
        new_price: 69.99,
      },
      {
        id: 22,
        name: "Women's Scarf",
        image: p22_img,
        category: "women",
        old_price: 24.99,
        new_price: 19.99,
      },
      {
        id: 23,
        name: "Women's Sandals",
        image: p23_img,
        category: "women",
        old_price: 34.99,
        new_price: 29.99,
      },
      {
        id: 24,
        name: "Women's Wristwatch",
        image: p24_img,
        category: "women",
        old_price: 44.99,
        new_price: 39.99,
      },
      {
        id: 25,
        name: "Kid's Cartoon T-shirt",
        image: p25_img,
        category: "kids",
        old_price: 14.99,
        new_price: 11.99,
      },
      {
        id: 26,
        name: "Kid's Hooded Sweatshirt",
        image: p26_img,
        category: "kids",
        old_price: 24.99,
        new_price: 19.99,
      },
      {
        id: 27,
        name: "Kid's Sneakers",
        image: p27_img,
        category: "kids",
        old_price: 34.99,
        new_price: 29.99,
      },
      {
        id: 28,
        name: "Kid's Backpack",
        image: p28_img,
        category: "kids",
        old_price: 39.99,
        new_price: 34.99,
      },
      {
        id: 29,
        name: "Kid's Lunchbox",
        image: p29_img,
        category: "kids",
        old_price: 12.99,
        new_price: 9.99,
      },
      {
        id: 30,
        name: "Kid's Pajamas",
        image: p30_img,
        category: "kids",
        old_price: 19.99,
        new_price: 15.99,
      },
      {
        id: 31,
        name: "Kid's Bicycle",
        image: p31_img,
        category: "kids",
        old_price: 129.99,
        new_price: 119.99,
      },
      {
        id: 32,
        name: "Kid's Art Supplies",
        image: p32_img,
        category: "kids",
        old_price: 9.99,
        new_price: 7.99,
      },
      {
        id: 33,
        name: "Kid's School Backpack",
        image: p33_img,
        category: "kids",
        old_price: 29.99,
        new_price: 24.99,
      },
      {
        id: 34,
        name: "Kid's Soccer Ball",
        image: p34_img,
        category: "kids",
        old_price: 14.99,
        new_price: 11.99,
      },
      {
        id: 35,
        name: "Kid's Doll",
        image: p35_img,
        category: "kids",
        old_price: 19.99,
        new_price: 14.99,
      },
      {
        id: 36,
        name: "Kid's Puzzle Set",
        image: p36_img,
        category: "kids",
        old_price: 9.99,
        new_price: 7.99,
      }
    ];

    export default all_product
  