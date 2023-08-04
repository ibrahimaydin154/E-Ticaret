window.onload = async function () {
  let OrijinalData = await fetch("./Api/data.json");
  let TransferedData = await OrijinalData.json();
  let count = 0;
  let pirice = 0;
  console.log(count);
  let card = document.querySelector("#RowDiv_1");
  let card2 = document.querySelector(".products-slick");
  let card3 = document.querySelector(".cart-list");

  function updateCounter() {
    console.log(count);
    let counterElement = document.querySelector("#sepet");
    counterElement.innerHTML = count;

    let counterElement2 = document.querySelector("#sepet2");
    counterElement2.innerHTML = count + " Adet Ürün eklendi";

    let Sepet_tutar = document.querySelector("#Sepet_tutar");
    Sepet_tutar.innerHTML = " Sepet Toplamı " + pirice;

    console.log(pirice);
  }

  TransferedData.forEach((item, index) => {
    // TAG OLUŞTUR

    if (index < 3) {
      let product = document.createElement("div");
      let product_img = document.createElement("div");
      let product_body = document.createElement("div");
      let add_to_cart = document.createElement("div");
      // ----------------------------------------------------------

      let product_img_img = document.createElement("img");
      let product_img_div = document.createElement("div");
      let product_img_span1 = document.createElement("span");
      let product_img_span2 = document.createElement("span");

      product_img_img.src = item.src;

      product_img_span1.setAttribute("class", "sale");
      product_img_span1.innerHTML = "-30%";

      product_img_span2.setAttribute("class", "new");
      product_img_span2.innerHTML = "NEW";

      product_img_div.appendChild(product_img_span1);
      product_img_div.appendChild(product_img_span2);

      product_img_div.setAttribute("class", "product-label");

      product_img.appendChild(product_img_img);
      product_img.appendChild(product_img_div);

      product_img.setAttribute("class", "product-img");
      product.appendChild(product_img);
      //---------------------------------------------------------

      let product_body_p = document.createElement("p");
      let product_body_h3 = document.createElement("h3");
      let product_body_h3_a = document.createElement("a");
      let product_body_h4 = document.createElement("h4");
      let product_body_h4_del = document.createElement("del");
      let product_body_product_rating = document.createElement("div");
      let product_body_product_rating_i1 = document.createElement("i");
      let product_body_product_rating_i2 = document.createElement("i");
      let product_body_product_rating_i3 = document.createElement("i");
      let product_body_product_rating_i4 = document.createElement("i");
      let product_body_product_rating_i5 = document.createElement("i");
      let product_body_product_btns = document.createElement("div");
      let product_body_product_btns_btn1 = document.createElement("button");
      let product_body_product_btns_btn1_i = document.createElement("i");
      let product_body_product_btns_btn1_span = document.createElement("span");

      let product_body_product_btns_btn2 = document.createElement("button");
      let product_body_product_btns_btn2_i = document.createElement("i");
      let product_body_product_btns_btn2_span = document.createElement("span");

      let product_body_product_btns_btn3 = document.createElement("button");
      let product_body_product_btns_btn3_i = document.createElement("i");
      let product_body_product_btns_btn3_span = document.createElement("span");

      product_body_p.setAttribute("class", "product-category");
      product_body_p.innerHTML = item.category;
      product_body.appendChild(product_body_p);

      product_body_h3_a.src = "#";
      product_body_h3_a.innerHTML = item.description;
      product_body_h3.appendChild(product_body_h3_a);
      product_body_h3.setAttribute("class", "product-name");
      product_body.appendChild(product_body_h3);

      product_body_h4.setAttribute("class", "product-old-price");
      product_body_h4_del.innerHTML = item.price + 200 + " TL ";
      product_body_h4.setAttribute("class", "product-price");
      product_body_h4.innerHTML = item.price + " TL ";
      product_body_h4.appendChild(product_body_h4_del);
      product_body.appendChild(product_body_h4);

      product_body_product_rating.setAttribute("class", "product-rating");
      product_body_product_rating_i1.setAttribute("class", "fa fa-star");
      product_body_product_rating_i2.setAttribute("class", "fa fa-star");
      product_body_product_rating_i3.setAttribute("class", "fa fa-star");
      product_body_product_rating_i4.setAttribute("class", "fa fa-star");
      product_body_product_rating_i5.setAttribute("class", "fa fa-star");
      product_body_product_rating.appendChild(product_body_product_rating_i1);
      product_body_product_rating.appendChild(product_body_product_rating_i2);
      product_body_product_rating.appendChild(product_body_product_rating_i3);
      product_body_product_rating.appendChild(product_body_product_rating_i4);
      product_body_product_rating.appendChild(product_body_product_rating_i5);

      product_body.appendChild(product_body_product_rating);
      //--------------------------------------------------------------------------------------

      product_body_product_btns_btn1_i.setAttribute("class", "fa fa-heart-o");
      product_body_product_btns_btn1.appendChild(
        product_body_product_btns_btn1_i
      );
      product_body_product_btns_btn1_span.setAttribute("class", "tooltipp");
      product_body_product_btns_btn1_span.innerHTML = " istek listesine ekle ";
      product_body_product_btns_btn1.appendChild(
        product_body_product_btns_btn1_span
      );
      product_body_product_btns_btn1.setAttribute("class", "add-to-wishlist");

      product_body_product_btns_btn2_i.setAttribute("class", "fa fa-exchange");
      product_body_product_btns_btn2.appendChild(
        product_body_product_btns_btn2_i
      );
      product_body_product_btns_btn2_span.setAttribute("class", "tooltipp");
      product_body_product_btns_btn2_span.innerHTML =
        " karşılaştırmak için ekle ";
      product_body_product_btns_btn2.appendChild(
        product_body_product_btns_btn2_span
      );
      product_body_product_btns_btn2.setAttribute("class", "add-to-compare");

      product_body_product_btns_btn3_i.setAttribute("class", "fa fa-eye");
      product_body_product_btns_btn3.appendChild(
        product_body_product_btns_btn3_i
      );
      product_body_product_btns_btn3_span.setAttribute("class", "tooltipp");
      product_body_product_btns_btn3_span.innerHTML = " hızlı Görünüm ";
      product_body_product_btns_btn3.appendChild(
        product_body_product_btns_btn3_span
      );
      product_body_product_btns_btn3.setAttribute("class", "quick-view");

      product_body_product_btns.setAttribute("class", "product-btns");
      product_body_product_btns.appendChild(product_body_product_btns_btn1);
      product_body_product_btns.appendChild(product_body_product_btns_btn2);
      product_body_product_btns.appendChild(product_body_product_btns_btn3);

      product_body.appendChild(product_body_product_btns);

      product_body.setAttribute("class", "product-body");
      product.appendChild(product_body);

      // -------------------------------------------------------

      let add_to_cart_button = document.createElement("button");
      let add_to_cart_button_i = document.createElement("i");

      add_to_cart_button.setAttribute("class", "add-to-cart-btn");
      add_to_cart_button_i.setAttribute("class", "fa fa-shopping-cart");
      add_to_cart_button.appendChild(add_to_cart_button_i);
      add_to_cart_button.innerHTML = "Sepete ekle";
      add_to_cart.appendChild(add_to_cart_button);

      add_to_cart.setAttribute("class", "add-to-cart");
      product.appendChild(add_to_cart);

      add_to_cart.addEventListener("click", () => {
        // TAG OLUŞTUR
        let product_widget = document.createElement("div");
        let product_img_div = document.createElement("div");

        let product_img_div_img = document.createElement("img");

        let product_body = document.createElement("div");

        let product_body_h3 = document.createElement("h3");
        let product_body_h3_a = document.createElement("a");
        let product_body_h4 = document.createElement("h4");
        let product_body_h4_span = document.createElement("span");
        let deleteBtn = document.createElement("button");
        let deleteBtn_i = document.createElement("button");

        product_img_div_img.src = item.src;
        product_img_div.setAttribute("class", "product-img");
        product_img_div.appendChild(product_img_div_img);

        product_body_h3.setAttribute("class", "product-name");
        product_body_h3_a.innerHTML = item.description;
        product_body_h3.appendChild(product_body_h3_a);

        product_body_h4.setAttribute("class", "product-price");
        product_body_h4_span.setAttribute("class", "qty");
        product_body_h4_span.innerText = " X 1";
        product_body_h4.innerHTML = item.price;

        product_body_h4.appendChild(product_body_h4_span);

        product_body.setAttribute("class", "product-body");
        product_body.appendChild(product_body_h3);
        product_body.appendChild(product_body_h4);

        deleteBtn.setAttribute("class", "delete");
        deleteBtn_i.setAttribute("class", "fa fa-close");

        deleteBtn.appendChild(deleteBtn_i);

        product_widget.setAttribute("class", "product-widget");
        product_widget.appendChild(product_img_div);
        product_widget.appendChild(product_body);
        product_widget.appendChild(deleteBtn);
        // İÇERİKLER
        card3.appendChild(product_widget);
        pirice = pirice + item.price;
        count++;
        updateCounter();

        deleteBtn.addEventListener("click", () => {
          product_widget.remove();
          pirice = pirice - item.price;
          count--;
          updateCounter();
        });
      });

      // -------------------------------------------------------

      product.setAttribute("class", "product");
      card2.appendChild(product);
    }

    if (index < 9) {
      console.log(item.src);

      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");

      let img = document.createElement("img");
      let h3 = document.createElement("h3");
      let h4 = document.createElement("h4");
      let a = document.createElement("a");
      let i = document.createElement("i");
      i.setAttribute("class", "fa fa-arrow-circle-right");

      img.src = item.src;

      a.appendChild(i);

      // a.innerHTML = item.description;
      h3.innerHTML = "2023 Koleksiyon";
      h4.innerHTML = item.description;

      div1.setAttribute("class", "col-md-4 col-xs-6");
      div2.setAttribute("class", "shop");
      div3.setAttribute("class", "shop-img");
      div4.setAttribute("class", "shop-body");

      div4.appendChild(h3);
      div4.appendChild(h4);
      div4.appendChild(a);

      div3.appendChild(img);

      div2.appendChild(div3);
      div2.appendChild(div4);

      div1.appendChild(div2);

      card.appendChild(div1);
    }
  });

  let koltuk = document.querySelector("#Koltuk");
  koltuk.addEventListener("click", () => {
    card2.innerHTML = "";
    TransferedData.filter((item, index) => {
      if (item.category === "Koltuk") {
        let product = document.createElement("div");
        let product_img = document.createElement("div");
        let product_body = document.createElement("div");
        let add_to_cart = document.createElement("div");
        // ----------------------------------------------------------

        let product_img_img = document.createElement("img");
        let product_img_div = document.createElement("div");
        let product_img_span1 = document.createElement("span");
        let product_img_span2 = document.createElement("span");

        product_img_img.src = item.src;

        product_img_span1.setAttribute("class", "sale");
        product_img_span1.innerHTML = "-30%";

        product_img_span2.setAttribute("class", "new");
        product_img_span2.innerHTML = "NEW";

        product_img_div.appendChild(product_img_span1);
        product_img_div.appendChild(product_img_span2);

        product_img_div.setAttribute("class", "product-label");

        product_img.appendChild(product_img_img);
        product_img.appendChild(product_img_div);

        product_img.setAttribute("class", "product-img");
        product.appendChild(product_img);
        //---------------------------------------------------------

        let product_body_p = document.createElement("p");
        let product_body_h3 = document.createElement("h3");
        let product_body_h3_a = document.createElement("a");
        let product_body_h4 = document.createElement("h4");
        let product_body_h4_del = document.createElement("del");
        let product_body_product_rating = document.createElement("div");
        let product_body_product_rating_i1 = document.createElement("i");
        let product_body_product_rating_i2 = document.createElement("i");
        let product_body_product_rating_i3 = document.createElement("i");
        let product_body_product_rating_i4 = document.createElement("i");
        let product_body_product_rating_i5 = document.createElement("i");
        let product_body_product_btns = document.createElement("div");
        let product_body_product_btns_btn1 = document.createElement("button");
        let product_body_product_btns_btn1_i = document.createElement("i");
        let product_body_product_btns_btn1_span =
          document.createElement("span");

        let product_body_product_btns_btn2 = document.createElement("button");
        let product_body_product_btns_btn2_i = document.createElement("i");
        let product_body_product_btns_btn2_span =
          document.createElement("span");

        let product_body_product_btns_btn3 = document.createElement("button");
        let product_body_product_btns_btn3_i = document.createElement("i");
        let product_body_product_btns_btn3_span =
          document.createElement("span");

        product_body_p.setAttribute("class", "product-category");
        product_body_p.innerHTML = item.category;
        product_body.appendChild(product_body_p);

        product_body_h3_a.src = "#";
        product_body_h3_a.innerHTML = item.description;
        product_body_h3.appendChild(product_body_h3_a);
        product_body_h3.setAttribute("class", "product-name");
        product_body.appendChild(product_body_h3);

        product_body_h4.setAttribute("class", "product-old-price");
        product_body_h4_del.innerHTML = item.price + 200 + " TL ";
        product_body_h4.setAttribute("class", "product-price");
        product_body_h4.innerHTML = item.price + " TL ";
        product_body_h4.appendChild(product_body_h4_del);
        product_body.appendChild(product_body_h4);

        product_body_product_rating.setAttribute("class", "product-rating");
        product_body_product_rating_i1.setAttribute("class", "fa fa-star");
        product_body_product_rating_i2.setAttribute("class", "fa fa-star");
        product_body_product_rating_i3.setAttribute("class", "fa fa-star");
        product_body_product_rating_i4.setAttribute("class", "fa fa-star");
        product_body_product_rating_i5.setAttribute("class", "fa fa-star");
        product_body_product_rating.appendChild(product_body_product_rating_i1);
        product_body_product_rating.appendChild(product_body_product_rating_i2);
        product_body_product_rating.appendChild(product_body_product_rating_i3);
        product_body_product_rating.appendChild(product_body_product_rating_i4);
        product_body_product_rating.appendChild(product_body_product_rating_i5);

        product_body.appendChild(product_body_product_rating);
        //--------------------------------------------------------------------------------------

        product_body_product_btns_btn1_i.setAttribute("class", "fa fa-heart-o");
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_i
        );
        product_body_product_btns_btn1_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn1_span.innerHTML =
          " istek listesine ekle ";
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_span
        );
        product_body_product_btns_btn1.setAttribute("class", "add-to-wishlist");

        product_body_product_btns_btn2_i.setAttribute(
          "class",
          "fa fa-exchange"
        );
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_i
        );
        product_body_product_btns_btn2_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn2_span.innerHTML =
          " karşılaştırmak için ekle ";
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_span
        );
        product_body_product_btns_btn2.setAttribute("class", "add-to-compare");

        product_body_product_btns_btn3_i.setAttribute("class", "fa fa-eye");
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_i
        );
        product_body_product_btns_btn3_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn3_span.innerHTML = " hızlı Görünüm ";
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_span
        );
        product_body_product_btns_btn3.setAttribute("class", "quick-view");

        product_body_product_btns.setAttribute("class", "product-btns");
        product_body_product_btns.appendChild(product_body_product_btns_btn1);
        product_body_product_btns.appendChild(product_body_product_btns_btn2);
        product_body_product_btns.appendChild(product_body_product_btns_btn3);

        product_body.appendChild(product_body_product_btns);

        product_body.setAttribute("class", "product-body");
        product.appendChild(product_body);

        // -------------------------------------------------------

        let add_to_cart_button = document.createElement("button");
        let add_to_cart_button_i = document.createElement("i");

        add_to_cart_button.setAttribute("class", "add-to-cart-btn");
        add_to_cart_button_i.setAttribute("class", "fa fa-shopping-cart");
        add_to_cart_button.appendChild(add_to_cart_button_i);
        add_to_cart_button.innerHTML = "Sepete ekle";
        add_to_cart.appendChild(add_to_cart_button);

        add_to_cart.setAttribute("class", "add-to-cart");
        product.appendChild(add_to_cart);

        add_to_cart.addEventListener("click", () => {
          // TAG OLUŞTUR
          let product_widget = document.createElement("div");
          let product_img_div = document.createElement("div");

          let product_img_div_img = document.createElement("img");

          let product_body = document.createElement("div");

          let product_body_h3 = document.createElement("h3");
          let product_body_h3_a = document.createElement("a");
          let product_body_h4 = document.createElement("h4");
          let product_body_h4_span = document.createElement("span");
          let deleteBtn = document.createElement("button");
          let deleteBtn_i = document.createElement("button");

          product_img_div_img.src = item.src;
          product_img_div.setAttribute("class", "product-img");
          product_img_div.appendChild(product_img_div_img);

          product_body_h3.setAttribute("class", "product-name");
          product_body_h3_a.innerHTML = item.description;
          product_body_h3.appendChild(product_body_h3_a);

          product_body_h4.setAttribute("class", "product-price");
          product_body_h4_span.setAttribute("class", "qty");
          product_body_h4_span.innerText = " X 1";
          product_body_h4.innerHTML = item.price;

          product_body_h4.appendChild(product_body_h4_span);

          product_body.setAttribute("class", "product-body");
          product_body.appendChild(product_body_h3);
          product_body.appendChild(product_body_h4);

          deleteBtn.setAttribute("class", "delete");
          deleteBtn_i.setAttribute("class", "fa fa-close");

          deleteBtn.appendChild(deleteBtn_i);

          product_widget.setAttribute("class", "product-widget");
          product_widget.appendChild(product_img_div);
          product_widget.appendChild(product_body);
          product_widget.appendChild(deleteBtn);
          // İÇERİKLER
          card3.appendChild(product_widget);
          pirice = pirice + item.price;
          count++;
          updateCounter();

          deleteBtn.addEventListener("click", () => {
            product_widget.remove();
            pirice = pirice - item.price;
            count--;
            updateCounter();
          });
        });

        // -------------------------------------------------------

        product.setAttribute("class", "product");
        card2.appendChild(product);
      }
    });
  });

  let kose = document.querySelector("#köse");
  kose.addEventListener("click", () => {
    card2.innerHTML = "";
    TransferedData.filter((item, index) => {
      if (item.category === "Köse") {
        let product = document.createElement("div");
        let product_img = document.createElement("div");
        let product_body = document.createElement("div");
        let add_to_cart = document.createElement("div");
        // ----------------------------------------------------------

        let product_img_img = document.createElement("img");
        let product_img_div = document.createElement("div");
        let product_img_span1 = document.createElement("span");
        let product_img_span2 = document.createElement("span");

        product_img_img.src = item.src;

        product_img_span1.setAttribute("class", "sale");
        product_img_span1.innerHTML = "-30%";

        product_img_span2.setAttribute("class", "new");
        product_img_span2.innerHTML = "NEW";

        product_img_div.appendChild(product_img_span1);
        product_img_div.appendChild(product_img_span2);

        product_img_div.setAttribute("class", "product-label");

        product_img.appendChild(product_img_img);
        product_img.appendChild(product_img_div);

        product_img.setAttribute("class", "product-img");
        product.appendChild(product_img);
        //---------------------------------------------------------

        let product_body_p = document.createElement("p");
        let product_body_h3 = document.createElement("h3");
        let product_body_h3_a = document.createElement("a");
        let product_body_h4 = document.createElement("h4");
        let product_body_h4_del = document.createElement("del");
        let product_body_product_rating = document.createElement("div");
        let product_body_product_rating_i1 = document.createElement("i");
        let product_body_product_rating_i2 = document.createElement("i");
        let product_body_product_rating_i3 = document.createElement("i");
        let product_body_product_rating_i4 = document.createElement("i");
        let product_body_product_rating_i5 = document.createElement("i");
        let product_body_product_btns = document.createElement("div");
        let product_body_product_btns_btn1 = document.createElement("button");
        let product_body_product_btns_btn1_i = document.createElement("i");
        let product_body_product_btns_btn1_span =
          document.createElement("span");

        let product_body_product_btns_btn2 = document.createElement("button");
        let product_body_product_btns_btn2_i = document.createElement("i");
        let product_body_product_btns_btn2_span =
          document.createElement("span");

        let product_body_product_btns_btn3 = document.createElement("button");
        let product_body_product_btns_btn3_i = document.createElement("i");
        let product_body_product_btns_btn3_span =
          document.createElement("span");

        product_body_p.setAttribute("class", "product-category");
        product_body_p.innerHTML = item.category;
        product_body.appendChild(product_body_p);

        product_body_h3_a.src = "#";
        product_body_h3_a.innerHTML = item.description;
        product_body_h3.appendChild(product_body_h3_a);
        product_body_h3.setAttribute("class", "product-name");
        product_body.appendChild(product_body_h3);

        product_body_h4.setAttribute("class", "product-old-price");
        product_body_h4_del.innerHTML = item.price + 200 + " TL ";
        product_body_h4.setAttribute("class", "product-price");
        product_body_h4.innerHTML = item.price + " TL ";
        product_body_h4.appendChild(product_body_h4_del);
        product_body.appendChild(product_body_h4);

        product_body_product_rating.setAttribute("class", "product-rating");
        product_body_product_rating_i1.setAttribute("class", "fa fa-star");
        product_body_product_rating_i2.setAttribute("class", "fa fa-star");
        product_body_product_rating_i3.setAttribute("class", "fa fa-star");
        product_body_product_rating_i4.setAttribute("class", "fa fa-star");
        product_body_product_rating_i5.setAttribute("class", "fa fa-star");
        product_body_product_rating.appendChild(product_body_product_rating_i1);
        product_body_product_rating.appendChild(product_body_product_rating_i2);
        product_body_product_rating.appendChild(product_body_product_rating_i3);
        product_body_product_rating.appendChild(product_body_product_rating_i4);
        product_body_product_rating.appendChild(product_body_product_rating_i5);

        product_body.appendChild(product_body_product_rating);
        //--------------------------------------------------------------------------------------

        product_body_product_btns_btn1_i.setAttribute("class", "fa fa-heart-o");
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_i
        );
        product_body_product_btns_btn1_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn1_span.innerHTML =
          " istek listesine ekle ";
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_span
        );
        product_body_product_btns_btn1.setAttribute("class", "add-to-wishlist");

        product_body_product_btns_btn2_i.setAttribute(
          "class",
          "fa fa-exchange"
        );
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_i
        );
        product_body_product_btns_btn2_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn2_span.innerHTML =
          " karşılaştırmak için ekle ";
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_span
        );
        product_body_product_btns_btn2.setAttribute("class", "add-to-compare");

        product_body_product_btns_btn3_i.setAttribute("class", "fa fa-eye");
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_i
        );
        product_body_product_btns_btn3_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn3_span.innerHTML = " hızlı Görünüm ";
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_span
        );
        product_body_product_btns_btn3.setAttribute("class", "quick-view");

        product_body_product_btns.setAttribute("class", "product-btns");
        product_body_product_btns.appendChild(product_body_product_btns_btn1);
        product_body_product_btns.appendChild(product_body_product_btns_btn2);
        product_body_product_btns.appendChild(product_body_product_btns_btn3);

        product_body.appendChild(product_body_product_btns);

        product_body.setAttribute("class", "product-body");
        product.appendChild(product_body);

        // -------------------------------------------------------

        let add_to_cart_button = document.createElement("button");
        let add_to_cart_button_i = document.createElement("i");

        add_to_cart_button.setAttribute("class", "add-to-cart-btn");
        add_to_cart_button_i.setAttribute("class", "fa fa-shopping-cart");
        add_to_cart_button.appendChild(add_to_cart_button_i);
        add_to_cart_button.innerHTML = "Sepete ekle";
        add_to_cart.appendChild(add_to_cart_button);

        add_to_cart.setAttribute("class", "add-to-cart");
        product.appendChild(add_to_cart);

        add_to_cart.addEventListener("click", () => {
          // TAG OLUŞTUR
          let product_widget = document.createElement("div");
          let product_img_div = document.createElement("div");

          let product_img_div_img = document.createElement("img");

          let product_body = document.createElement("div");

          let product_body_h3 = document.createElement("h3");
          let product_body_h3_a = document.createElement("a");
          let product_body_h4 = document.createElement("h4");
          let product_body_h4_span = document.createElement("span");
          let deleteBtn = document.createElement("button");
          let deleteBtn_i = document.createElement("button");

          product_img_div_img.src = item.src;
          product_img_div.setAttribute("class", "product-img");
          product_img_div.appendChild(product_img_div_img);

          product_body_h3.setAttribute("class", "product-name");
          product_body_h3_a.innerHTML = item.description;
          product_body_h3.appendChild(product_body_h3_a);

          product_body_h4.setAttribute("class", "product-price");
          product_body_h4_span.setAttribute("class", "qty");
          product_body_h4_span.innerText = " X 1";
          product_body_h4.innerHTML = item.price;

          product_body_h4.appendChild(product_body_h4_span);

          product_body.setAttribute("class", "product-body");
          product_body.appendChild(product_body_h3);
          product_body.appendChild(product_body_h4);

          deleteBtn.setAttribute("class", "delete");
          deleteBtn_i.setAttribute("class", "fa fa-close");

          deleteBtn.appendChild(deleteBtn_i);

          product_widget.setAttribute("class", "product-widget");
          product_widget.appendChild(product_img_div);
          product_widget.appendChild(product_body);
          product_widget.appendChild(deleteBtn);
          // İÇERİKLER
          card3.appendChild(product_widget);
          pirice = pirice + item.price;
          count++;
          updateCounter();

          deleteBtn.addEventListener("click", () => {
            product_widget.remove();
            pirice = pirice - item.price;
            count--;
            updateCounter();
          });
        });

        // -------------------------------------------------------

        product.setAttribute("class", "product");
        card2.appendChild(product);
      }
    });
  });

  let yatak = document.querySelector("#Yatak");
  yatak.addEventListener("click", () => {
    card2.innerHTML = "";
    TransferedData.filter((item, index) => {
      if (item.category === "YatakSet") {
        let product = document.createElement("div");
        let product_img = document.createElement("div");
        let product_body = document.createElement("div");
        let add_to_cart = document.createElement("div");
        // ----------------------------------------------------------

        let product_img_img = document.createElement("img");
        let product_img_div = document.createElement("div");
        let product_img_span1 = document.createElement("span");
        let product_img_span2 = document.createElement("span");

        product_img_img.src = item.src;

        product_img_span1.setAttribute("class", "sale");
        product_img_span1.innerHTML = "-30%";

        product_img_span2.setAttribute("class", "new");
        product_img_span2.innerHTML = "NEW";

        product_img_div.appendChild(product_img_span1);
        product_img_div.appendChild(product_img_span2);

        product_img_div.setAttribute("class", "product-label");

        product_img.appendChild(product_img_img);
        product_img.appendChild(product_img_div);

        product_img.setAttribute("class", "product-img");
        product.appendChild(product_img);
        //---------------------------------------------------------

        let product_body_p = document.createElement("p");
        let product_body_h3 = document.createElement("h3");
        let product_body_h3_a = document.createElement("a");
        let product_body_h4 = document.createElement("h4");
        let product_body_h4_del = document.createElement("del");
        let product_body_product_rating = document.createElement("div");
        let product_body_product_rating_i1 = document.createElement("i");
        let product_body_product_rating_i2 = document.createElement("i");
        let product_body_product_rating_i3 = document.createElement("i");
        let product_body_product_rating_i4 = document.createElement("i");
        let product_body_product_rating_i5 = document.createElement("i");
        let product_body_product_btns = document.createElement("div");
        let product_body_product_btns_btn1 = document.createElement("button");
        let product_body_product_btns_btn1_i = document.createElement("i");
        let product_body_product_btns_btn1_span =
          document.createElement("span");

        let product_body_product_btns_btn2 = document.createElement("button");
        let product_body_product_btns_btn2_i = document.createElement("i");
        let product_body_product_btns_btn2_span =
          document.createElement("span");

        let product_body_product_btns_btn3 = document.createElement("button");
        let product_body_product_btns_btn3_i = document.createElement("i");
        let product_body_product_btns_btn3_span =
          document.createElement("span");

        product_body_p.setAttribute("class", "product-category");
        product_body_p.innerHTML = item.category;
        product_body.appendChild(product_body_p);

        product_body_h3_a.src = "#";
        product_body_h3_a.innerHTML = item.description;
        product_body_h3.appendChild(product_body_h3_a);
        product_body_h3.setAttribute("class", "product-name");
        product_body.appendChild(product_body_h3);

        product_body_h4.setAttribute("class", "product-old-price");
        product_body_h4_del.innerHTML = item.price + 200 + " TL ";
        product_body_h4.setAttribute("class", "product-price");
        product_body_h4.innerHTML = item.price + " TL ";
        product_body_h4.appendChild(product_body_h4_del);
        product_body.appendChild(product_body_h4);

        product_body_product_rating.setAttribute("class", "product-rating");
        product_body_product_rating_i1.setAttribute("class", "fa fa-star");
        product_body_product_rating_i2.setAttribute("class", "fa fa-star");
        product_body_product_rating_i3.setAttribute("class", "fa fa-star");
        product_body_product_rating_i4.setAttribute("class", "fa fa-star");
        product_body_product_rating_i5.setAttribute("class", "fa fa-star");
        product_body_product_rating.appendChild(product_body_product_rating_i1);
        product_body_product_rating.appendChild(product_body_product_rating_i2);
        product_body_product_rating.appendChild(product_body_product_rating_i3);
        product_body_product_rating.appendChild(product_body_product_rating_i4);
        product_body_product_rating.appendChild(product_body_product_rating_i5);

        product_body.appendChild(product_body_product_rating);
        //--------------------------------------------------------------------------------------

        product_body_product_btns_btn1_i.setAttribute("class", "fa fa-heart-o");
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_i
        );
        product_body_product_btns_btn1_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn1_span.innerHTML =
          " istek listesine ekle ";
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_span
        );
        product_body_product_btns_btn1.setAttribute("class", "add-to-wishlist");

        product_body_product_btns_btn2_i.setAttribute(
          "class",
          "fa fa-exchange"
        );
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_i
        );
        product_body_product_btns_btn2_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn2_span.innerHTML =
          " karşılaştırmak için ekle ";
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_span
        );
        product_body_product_btns_btn2.setAttribute("class", "add-to-compare");

        product_body_product_btns_btn3_i.setAttribute("class", "fa fa-eye");
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_i
        );
        product_body_product_btns_btn3_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn3_span.innerHTML = " hızlı Görünüm ";
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_span
        );
        product_body_product_btns_btn3.setAttribute("class", "quick-view");

        product_body_product_btns.setAttribute("class", "product-btns");
        product_body_product_btns.appendChild(product_body_product_btns_btn1);
        product_body_product_btns.appendChild(product_body_product_btns_btn2);
        product_body_product_btns.appendChild(product_body_product_btns_btn3);

        product_body.appendChild(product_body_product_btns);

        product_body.setAttribute("class", "product-body");
        product.appendChild(product_body);

        // -------------------------------------------------------

        let add_to_cart_button = document.createElement("button");
        let add_to_cart_button_i = document.createElement("i");

        add_to_cart_button.setAttribute("class", "add-to-cart-btn");
        add_to_cart_button_i.setAttribute("class", "fa fa-shopping-cart");
        add_to_cart_button.appendChild(add_to_cart_button_i);
        add_to_cart_button.innerHTML = "Sepete ekle";
        add_to_cart.appendChild(add_to_cart_button);

        add_to_cart.setAttribute("class", "add-to-cart");
        product.appendChild(add_to_cart);

        add_to_cart.addEventListener("click", () => {
          // TAG OLUŞTUR
          let product_widget = document.createElement("div");
          let product_img_div = document.createElement("div");

          let product_img_div_img = document.createElement("img");

          let product_body = document.createElement("div");

          let product_body_h3 = document.createElement("h3");
          let product_body_h3_a = document.createElement("a");
          let product_body_h4 = document.createElement("h4");
          let product_body_h4_span = document.createElement("span");
          let deleteBtn = document.createElement("button");
          let deleteBtn_i = document.createElement("button");

          product_img_div_img.src = item.src;
          product_img_div.setAttribute("class", "product-img");
          product_img_div.appendChild(product_img_div_img);

          product_body_h3.setAttribute("class", "product-name");
          product_body_h3_a.innerHTML = item.description;
          product_body_h3.appendChild(product_body_h3_a);

          product_body_h4.setAttribute("class", "product-price");
          product_body_h4_span.setAttribute("class", "qty");
          product_body_h4_span.innerText = " X 1";
          product_body_h4.innerHTML = item.price;

          product_body_h4.appendChild(product_body_h4_span);

          product_body.setAttribute("class", "product-body");
          product_body.appendChild(product_body_h3);
          product_body.appendChild(product_body_h4);

          deleteBtn.setAttribute("class", "delete");
          deleteBtn_i.setAttribute("class", "fa fa-close");

          deleteBtn.appendChild(deleteBtn_i);

          product_widget.setAttribute("class", "product-widget");
          product_widget.appendChild(product_img_div);
          product_widget.appendChild(product_body);
          product_widget.appendChild(deleteBtn);
          // İÇERİKLER
          card3.appendChild(product_widget);
          pirice = pirice + item.price;
          count++;
          updateCounter();

          deleteBtn.addEventListener("click", () => {
            product_widget.remove();
            pirice = pirice - item.price;
            count--;
            updateCounter();
          });
        });

        // -------------------------------------------------------

        product.setAttribute("class", "product");
        card2.appendChild(product);
      }
    });
  });

  let deluxe = document.querySelector("#deluxe");
  deluxe.addEventListener("click", () => {
    card2.innerHTML = "";
    TransferedData.filter((item, index) => {
      if (item.category === "Deluxe") {
        let product = document.createElement("div");
        let product_img = document.createElement("div");
        let product_body = document.createElement("div");
        let add_to_cart = document.createElement("div");
        // ----------------------------------------------------------

        let product_img_img = document.createElement("img");
        let product_img_div = document.createElement("div");
        let product_img_span1 = document.createElement("span");
        let product_img_span2 = document.createElement("span");

        product_img_img.src = item.src;

        product_img_span1.setAttribute("class", "sale");
        product_img_span1.innerHTML = "-30%";

        product_img_span2.setAttribute("class", "new");
        product_img_span2.innerHTML = "NEW";

        product_img_div.appendChild(product_img_span1);
        product_img_div.appendChild(product_img_span2);

        product_img_div.setAttribute("class", "product-label");

        product_img.appendChild(product_img_img);
        product_img.appendChild(product_img_div);

        product_img.setAttribute("class", "product-img");
        product.appendChild(product_img);
        //---------------------------------------------------------

        let product_body_p = document.createElement("p");
        let product_body_h3 = document.createElement("h3");
        let product_body_h3_a = document.createElement("a");
        let product_body_h4 = document.createElement("h4");
        let product_body_h4_del = document.createElement("del");
        let product_body_product_rating = document.createElement("div");
        let product_body_product_rating_i1 = document.createElement("i");
        let product_body_product_rating_i2 = document.createElement("i");
        let product_body_product_rating_i3 = document.createElement("i");
        let product_body_product_rating_i4 = document.createElement("i");
        let product_body_product_rating_i5 = document.createElement("i");
        let product_body_product_btns = document.createElement("div");
        let product_body_product_btns_btn1 = document.createElement("button");
        let product_body_product_btns_btn1_i = document.createElement("i");
        let product_body_product_btns_btn1_span =
          document.createElement("span");

        let product_body_product_btns_btn2 = document.createElement("button");
        let product_body_product_btns_btn2_i = document.createElement("i");
        let product_body_product_btns_btn2_span =
          document.createElement("span");

        let product_body_product_btns_btn3 = document.createElement("button");
        let product_body_product_btns_btn3_i = document.createElement("i");
        let product_body_product_btns_btn3_span =
          document.createElement("span");

        product_body_p.setAttribute("class", "product-category");
        product_body_p.innerHTML = item.category;
        product_body.appendChild(product_body_p);

        product_body_h3_a.src = "#";
        product_body_h3_a.innerHTML = item.description;
        product_body_h3.appendChild(product_body_h3_a);
        product_body_h3.setAttribute("class", "product-name");
        product_body.appendChild(product_body_h3);

        product_body_h4.setAttribute("class", "product-old-price");
        product_body_h4_del.innerHTML = item.price + 200 + " TL ";
        product_body_h4.setAttribute("class", "product-price");
        product_body_h4.innerHTML = item.price + " TL ";
        product_body_h4.appendChild(product_body_h4_del);
        product_body.appendChild(product_body_h4);

        product_body_product_rating.setAttribute("class", "product-rating");
        product_body_product_rating_i1.setAttribute("class", "fa fa-star");
        product_body_product_rating_i2.setAttribute("class", "fa fa-star");
        product_body_product_rating_i3.setAttribute("class", "fa fa-star");
        product_body_product_rating_i4.setAttribute("class", "fa fa-star");
        product_body_product_rating_i5.setAttribute("class", "fa fa-star");
        product_body_product_rating.appendChild(product_body_product_rating_i1);
        product_body_product_rating.appendChild(product_body_product_rating_i2);
        product_body_product_rating.appendChild(product_body_product_rating_i3);
        product_body_product_rating.appendChild(product_body_product_rating_i4);
        product_body_product_rating.appendChild(product_body_product_rating_i5);

        product_body.appendChild(product_body_product_rating);
        //--------------------------------------------------------------------------------------

        product_body_product_btns_btn1_i.setAttribute("class", "fa fa-heart-o");
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_i
        );
        product_body_product_btns_btn1_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn1_span.innerHTML =
          " istek listesine ekle ";
        product_body_product_btns_btn1.appendChild(
          product_body_product_btns_btn1_span
        );
        product_body_product_btns_btn1.setAttribute("class", "add-to-wishlist");

        product_body_product_btns_btn2_i.setAttribute(
          "class",
          "fa fa-exchange"
        );
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_i
        );
        product_body_product_btns_btn2_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn2_span.innerHTML =
          " karşılaştırmak için ekle ";
        product_body_product_btns_btn2.appendChild(
          product_body_product_btns_btn2_span
        );
        product_body_product_btns_btn2.setAttribute("class", "add-to-compare");

        product_body_product_btns_btn3_i.setAttribute("class", "fa fa-eye");
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_i
        );
        product_body_product_btns_btn3_span.setAttribute("class", "tooltipp");
        product_body_product_btns_btn3_span.innerHTML = " hızlı Görünüm ";
        product_body_product_btns_btn3.appendChild(
          product_body_product_btns_btn3_span
        );
        product_body_product_btns_btn3.setAttribute("class", "quick-view");

        product_body_product_btns.setAttribute("class", "product-btns");
        product_body_product_btns.appendChild(product_body_product_btns_btn1);
        product_body_product_btns.appendChild(product_body_product_btns_btn2);
        product_body_product_btns.appendChild(product_body_product_btns_btn3);

        product_body.appendChild(product_body_product_btns);

        product_body.setAttribute("class", "product-body");
        product.appendChild(product_body);

        // -------------------------------------------------------

        let add_to_cart_button = document.createElement("button");
        let add_to_cart_button_i = document.createElement("i");

        add_to_cart_button.setAttribute("class", "add-to-cart-btn");
        add_to_cart_button_i.setAttribute("class", "fa fa-shopping-cart");
        add_to_cart_button.appendChild(add_to_cart_button_i);
        add_to_cart_button.innerHTML = "Sepete ekle";
        add_to_cart.appendChild(add_to_cart_button);

        add_to_cart.setAttribute("class", "add-to-cart");
        product.appendChild(add_to_cart);

        add_to_cart.addEventListener("click", () => {
          // TAG OLUŞTUR
          let product_widget = document.createElement("div");
          let product_img_div = document.createElement("div");

          let product_img_div_img = document.createElement("img");

          let product_body = document.createElement("div");

          let product_body_h3 = document.createElement("h3");
          let product_body_h3_a = document.createElement("a");
          let product_body_h4 = document.createElement("h4");
          let product_body_h4_span = document.createElement("span");
          let deleteBtn = document.createElement("button");
          let deleteBtn_i = document.createElement("button");

          product_img_div_img.src = item.src;
          product_img_div.setAttribute("class", "product-img");
          product_img_div.appendChild(product_img_div_img);

          product_body_h3.setAttribute("class", "product-name");
          product_body_h3_a.innerHTML = item.description;
          product_body_h3.appendChild(product_body_h3_a);

          product_body_h4.setAttribute("class", "product-price");
          product_body_h4_span.setAttribute("class", "qty");
          product_body_h4_span.innerText = " X 1";
          product_body_h4.innerHTML = item.price;

          product_body_h4.appendChild(product_body_h4_span);

          product_body.setAttribute("class", "product-body");
          product_body.appendChild(product_body_h3);
          product_body.appendChild(product_body_h4);

          deleteBtn.setAttribute("class", "delete");
          deleteBtn_i.setAttribute("class", "fa fa-close");

          deleteBtn.appendChild(deleteBtn_i);

          product_widget.setAttribute("class", "product-widget");
          product_widget.appendChild(product_img_div);
          product_widget.appendChild(product_body);
          product_widget.appendChild(deleteBtn);
          // İÇERİKLER
          card3.appendChild(product_widget);
          pirice = pirice + item.price;
          count++;
          updateCounter();

          deleteBtn.addEventListener("click", () => {
            product_widget.remove();
            pirice = pirice - item.price;
            count--;
            updateCounter();
          });
        });

        // -------------------------------------------------------

        product.setAttribute("class", "product");
        card2.appendChild(product);
      }
    });
  });
};
