<template>
  <div>
    <div class="produkt-flex">
      <h1 v-text="selectedData.produkti"></h1>
      <!-- <p v-text="selectedData.txt"></p> -->
      <div
        id="pijaloci"
        class="produkt-flex__item"
        v-for="(value, key) in selectedData.produkt"
        :key="key"
      >
        <img :src="value.img" />
        <span v-text="value.ime"></span>
        <span v-text="value.cena"></span>
        <span v-text="value.sostav"></span>
        <div id="pici">
          <div class="pici__item" v-for="(value, key) in value.pici" :key="key">
            <img :src="value.img" />
            <span v-text="value.ime"></span>
            <span v-text="value.cena"></span>
            <span v-text="value.sostav"></span>
          </div>
        </div>
        <div class="burgeri__item" v-for="(value, key) in value.burgeri" :key="key">
          <img :src="value.img" />
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
        <div
          class="ladnisendvici__item"
          v-for="(value, key) in value.ladnisendvici"
          :key="key"
        >
          <img :src="value.img" />
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
        <div v-for="(value, key) in value.deserti" :key="key">
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {produkti} from "../data/produkti";
export default {
  name: "page",
  data() {
    return {
      produkti,
      slug: "",
      selectedData: [],
      main: [
        {
          // ПИЈАЛОЦИ ---------------------------------------------------------------
          produkti: "Пијалоци",
          link: "/produkti/pijaloci",
          //   img: "",
          produkt: [
            {
              ime: "Милк Шејк - ",
              cena: "80/100 Ден",
              sostav: "",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-u3176imqyit3ACRlHzFj17hGTX6Qb1lBIQ&usqp=CAU",
            },
            {
              ime: "Еспресо - ",
              cena: "50 Ден",
              sostav: "",
              img:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/1200px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
            },
            {
              ime: "Макијато - ",
              cena: "50/80 Ден",
              sostav: "",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEijBSSqSuE2a_HXzdChCyCpC2phzhmT1EjA&usqp=CAU",
            },
            {
              ime: "Капучино - ",
              cena: "80 Ден",
              sostav: "",
              img:
                "https://www.10wallpaper.com/wallpaper/2560x1440/1808/Casual_Cafe_Cappuccino_Coffee_Photography_2560x1440.jpg",
            },
            {
              ime: "Кока Кола - 330мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTwLW0IH4VpJry7kPZTI6ZHFGGMcInONohmg&usqp=CAU",
            },
            {
              ime: "Кола Зеро - 330мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIcyJ_0E6fMwL5PEr2Po8rqyf_DUbnhHJbiA&usqp=CAU",
            },
            {
              ime: "Џој Мултивитамин - 500мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://d3el976p2k4mvu.cloudfront.net/medias/sys_master/h0c/h49/8850325667870.png",
            },
            {
              ime: "Џој Портокал - 500мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBelaGjnvMvXKtBnGMdq1UgiUpb4EA4wC_8g&usqp=CAU",
            },
            {
              ime: "Џој Вишна - 500мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2PgHteUyInc1J50f1vsq5b0380rX0KyAXjA&usqp=CAU",
            },
            {
              ime: "Фанта - 330мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw36138087/products/L5285408/large/L5285408.JPG",
            },
            {
              ime: "Спрајт - 330мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://mozartmarket.com/wp-content/uploads/2020/04/SPRITE-0-5L-300x300.jpg",
            },
            {
              ime: "Швепс - 330мл",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://cenoteka.rs/assets/images/articles/schweppes-bitter-lemon-1-5l-1000083-large.jpg",
            },
            {
              ime: "Роса",
              cena: " 50 Ден",
              sostav: "",
              img:
                "https://probar.rs/wp-content/uploads/2019/09/rosa1.5-scaled.jpg",
            },
          ],
          txt: "",
          slug: "pijaloci",
        },
        {
          // БРЗА ХРАНА ---------------------------------------------------------------
          produkti: "Брза Храна",
          link: "/produkti/brza-hrana",
          produkt: [
            {
              // ПИЦИ -----------------------------
              pici: [
                {
                  ime: "Маргарита - ",
                  cena: "120 / 220 Ден ",
                  sostav: "доматен сос, кашкавал",
                  img:
                    "https://5.imimg.com/data5/TK/WQ/GLADMIN-69655639/1-500x500.png",
                },
                {
                  ime: "Везувио - ",
                  cena: "130 / 240 Ден ",
                  sostav: "доматен сос, кашкавал, пилешка шунка",
                  img:
                    "https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Whisk_PI_190919_Pizzas_006_MEAT_LOVERS.jpg",
                },
                {
                  ime: "Наполитана - ",
                  cena: "130 / 140 Ден ",
                  sostav: "доматен сос, кашкавал, печурки",
                  img:
                    "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/20/0/FNK_Gluten-Free-Mushroom-Ricotta_Pizza_s4x3.jpg.rend.hgtvcom.826.620.suffix/1483737096931.jpeg",
                },
                {
                  ime: "Капричоза - ",
                  cena: "150 / 260 Ден ",
                  sostav: "доматен сос, кашкавал, печурки, пилешка шунка",
                  img:
                    "https://media.istockphoto.com/photos/pizza-capricciosa-served-in-the-restaurant-picture-id1149549162",
                },
                {
                  ime: "Пеперони - ",
                  cena: "150 / 260 Ден ",
                  sostav: "доматен сос, кашкавал, кулен",
                  img:
                    "https://winnerscirclesportsbar.com/wp-content/uploads/2018/01/pepperonipizza.jpg",
                },
              ],
              // БУРГЕРИ -----------------------------
              burgeri: [
                {
                  ime: "Чизбургер - ",
                  cena: "150 Ден",
                  sostav:
                    "100г плескавица, бургерсос , чедар, кисели краставички, кромид",
                  img:
                    "https://scontent.fskp3-1.fna.fbcdn.net/v/t1.0-9/101123456_10156906123266790_8941826463766675456_o.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=RJtQNrVOflAAX9Ua-4W&_nc_ht=scontent.fskp3-1.fna&oh=513b732423b18674f248f3e9d39e77e2&oe=5F9B6145",
                },
                {
                  ime: "Двоен Чизбургер - ",
                  cena: "180 Ден",
                  sostav:
                    "100г плескавица, x2 чедар, бургер сос, кисели краставички, кромид",
                  img:
                    "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-In-N-Out-Style-Double-Cheeseburgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494458913444.jpeg",
                },
                {
                  ime: "Крцкаво Пилешко - ",
                  cena: "180 Ден",
                  sostav: "100г пилешки стек, мајонез, кисели краставички",
                  img:
                    "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe.jpg",
                },
                {
                  ime: "Фалафел Бургер - ",
                  cena: "150 Ден",
                  sostav:
                    "100г фалафел плескавица, рукола, сос од павлака, кромид, домат",
                  img:
                    "https://chowhound1.cbsistatic.com/assets/2015/02/31319_falafel_burgers.jpg",
                },
                {
                  ime: "Џуси Луси - ",
                  cena: "230 Ден",
                  sostav:
                    "200г плескавица, чедар, бургер сос, марула, кисели краставички",
                  img:
                    "https://www.thespruceeats.com/thmb/utmPsUbmkYN9y53i5kA6IFIXogY=/4000x3000/smart/filters:no_upscale()/juicy-lucy-cheeseburger-2217150-hero-01-e35ccea7817e4600bdb97c97cbabc6e3.jpg",
                },
              ],
              // ЛАДНИ СЕНДВИЧИ -----------------------------
              ladnisendvici: [
                {
                  ime: "Крем Салата Сендвич - ",
                  cena: "120 Ден",
                  sostav: "крем салата со туна, марула",
                  img:
                    "https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Heinz-Salad-Cream-could-be-renamed-sandwich-cream-for-this-surprising-reason-1369640.jpg?r=1534755465568",
                },
                {
                  ime: "Пилешка Салата - ",
                  cena: "80 Ден",
                  sostav: "крем салата со пилешко и печурки, марула",
                  img:
                    "https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Heinz-Salad-Cream-could-be-renamed-sandwich-cream-for-this-surprising-reason-1369640.jpg?r=1534755465568",
                },
                {
                  ime: "Вегански Сендвич - ",
                  cena: "100 Ден",
                  sostav: "хумус, црвена пиперка, маслинки, рукола",
                  img:
                    "https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Heinz-Salad-Cream-could-be-renamed-sandwich-cream-for-this-surprising-reason-1369640.jpg?r=1534755465568",
                },
                {
                  ime: "Мисирка Сендвич - ",
                  cena: "120 Ден",
                  sostav:
                    "мисиркино месо, ајдамер, мајонез, црвен кромид, марула, халапењо",
                  img:
                    "https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Heinz-Salad-Cream-could-be-renamed-sandwich-cream-for-this-surprising-reason-1369640.jpg?r=1534755465568",
                },
                {
                  ime: "Пршута Сендвич - ",
                  cena: "150 Ден",
                  sostav:
                    "пршута, овчо сирење, маслиново масло, босилек, кромид, печена црвена пиперка",
                  img:
                    "https://cdn.images.express.co.uk/img/dynamic/14/590x/secondary/Heinz-Salad-Cream-could-be-renamed-sandwich-cream-for-this-surprising-reason-1369640.jpg?r=1534755465568",
                },
              ],
            },
          ],
          txt: "",
          slug: "brza-hrana",
        },
        {
          // ДЕСЕРТИ ---------------------------------------------------------------
          produkti: "Десерти",
          link: "/produkti/deserti",
          // img: "",
          produkt: [
            {
              deserti: [
                {
                  ime: "Сладолед Чашка - ",
                  cena: "40 / 80 Ден ",
                  sostav: "Ванила / Чоколадо",
                  img: "",
                },
                {
                  ime: "Сладолед Корнет - ",
                  cena: "50 / 90 Ден ",
                  sostav: "Ванила / Чоколадо ",
                  img: "",
                },
                {
                  ime: "ЧоколаДен Мус - ",
                  cena: "100 Ден ",
                  sostav: "чоколаден фил, вишна",
                  img: "",
                },
                {
                  ime: "Орео Мус - ",
                  cena: "100 Ден ",
                  sostav: "орео фил",
                  img: "",
                },
              ],
            },
          ],
          txt: "",
          slug: "deserti",
        },
      ],
    };
  },
  watch: {
    $route(to) {
      this.main.filter((element) => {
        if (element.slug === to.params.slug) {
          this.selectedData = element;
        }
      });
      // react to route changes...
      //   this.title = to.params.slug;
    },
  },
};
</script>

<style></style>
