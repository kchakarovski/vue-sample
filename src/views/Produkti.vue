<template>
  <div>
    <div class="produkt-flex">
      <h1 v-text="selectedData.produkti"></h1>
      <p v-text="selectedData.txt"></p>
      <div
        class="produkt-flex__item"
        v-for="(value, key) in selectedData.produkt"
        :key="key"
      >
        <span v-text="value.ime"></span>
        <span v-text="value.cena"></span>
        <span v-text="value.sostav"></span>
        <div
          class="produkt-flex__item"
          v-for="(value, key) in value.pici"
          :key="key"
        >
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
        <div
          class="produkt-flex__item"
          v-for="(value, key) in value.burgeri"
          :key="key"
        >
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
        <div
          class="produkt-flex__item"
          v-for="(value, key) in value.ladnisendvici"
          :key="key"
        >
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
        <div
          class="produkt-flex__item"
          v-for="(value, key) in value.deserti"
          :key="key"
        >
          <span v-text="value.ime"></span>
          <span v-text="value.cena"></span>
          <span v-text="value.sostav"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
  data() {
    return {
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
              // img: ""
            },
            {
              ime: "Еспресо - ",
              cena: "50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Макијато - ",
              cena: "50/80 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Капучино - ",
              cena: "80 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Кока Кола - 330мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Кола Зеро - 330мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Џој Мултивитамин - 500мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Џој Портокал - 500мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Џој Вишна - 500мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Кола Зеро - 330мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Фанта - 330мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Спрајт - 330мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Швепс - 330мл",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
            {
              ime: "Роса",
              cena: " 50 Ден",
              sostav: "",
              // img: ""
            },
          ],
          txt: "",
          slug: "pijaloci",
        },
        {
          // БРЗА ХРАНА ---------------------------------------------------------------
          produkti: "Брза Храна",
          link: "/produkti/brza-hrana",
          // img: "",
          produkt: [
            {
              // ПИЦИ -----------------------------
              pici: [
                {
                  ime: "Маргарита - ",
                  cena: "120 / 220 Ден ",
                  sostav: "доматен сос, кашкавал",
                },
                {
                  ime: "Везувио - ",
                  cena: "130 / 240 Ден ",
                  sostav: "доматен сос, кашкавал, пилешка шунка",
                },
                {
                  ime: "Наполитана - ",
                  cena: "130 / 140 Ден ",
                  sostav: "доматен сос, кашкавал, печурки",
                },
                {
                  ime: "Капричоза - ",
                  cena: "150 / 260 Ден ",
                  sostav: "доматен сос, кашкавал, печурки, пилешка шунка",
                },
                {
                  ime: "Пеперони - ",
                  cena: "150 / 260 Ден ",
                  sostav: "доматен сос, кашкавал, кулен",
                },
              ],
              // БУРГЕРИ -----------------------------
              burgeri: [
                {
                  ime: "Чизбургер - ",
                  cena: "150 Ден",
                  sostav:
                    "100г плескавица, бургерсос , чедар, кисели краставички, кромид",
                },
                {
                  ime: "Двоен Чизбургер - ",
                  cena: "180 Ден",
                  sostav:
                    "100г плескавица, x2 чедар, бургер сос, кисели краставички, кромид",
                },
                {
                  ime: "Крцкаво Пилешко - ",
                  cena: "180 Ден",
                  sostav: "100г пилешки стек, мајонез, кисели краставички",
                },
                {
                  ime: "Фалафел Бургер - ",
                  cena: "150 Ден",
                  sostav:
                    "100г фалафел плескавица, рукола, сос од павлака, кромид, домат",
                },
                {
                  ime: "Џуси Луси - ",
                  cena: "230 Ден",
                  sostav:
                    "200г плескавица, чедар, бургер сос, марула, кисели краставички",
                },
              ],
              // ЛАДНИ СЕНДВИЧИ -----------------------------
              ladnisendvici: [
                {
                  ime: "Крем Салата Сендвич - ",
                  cena: "120 Ден",
                  sostav: "крем салата со туна, марула",
                },
                {
                  ime: "Пилешка Салата - ",
                  cena: "80 Ден",
                  sostav: "крем салата со пилешко и печурки, марула",
                },
                {
                  ime: "Вегански Сендвич - ",
                  cena: "100 Ден",
                  sostav: "хумус, црвена пиперка, маслинки, рукола",
                },
                {
                  ime: "Мисирка Сендвич - ",
                  cena: "120 Ден",
                  sostav:
                    "мисиркино месо, ајдамер, мајонез, црвен кромид, марула, халапењо",
                },
                {
                  ime: "Пршута Сендвич - ",
                  cena: "150 Ден",
                  sostav:
                    "пршута, овчо сирење, маслиново масло, босилек, кромид, печена црвена пиперка",
                },
              ],
            },
          ],
          txt:
            "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla ipsum bla bla ipsum bla bla lorem ipsum ipsum lorem",
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
                },
                {
                  ime: "Сладолед Корнет - ",
                  cena: "50 / 90 Ден ",
                  sostav: "Ванила / Чоколадо ",
                },
                {
                  ime: "ЧоколаДен Мус - ",
                  cena: "100 Ден ",
                  sostav: "чоколаден фил, вишна",
                },
                {
                  ime: "Орео Мус - ",
                  cena: "100 Ден ",
                  sostav: "орео фил",
                },
              ],
            },
          ],
          txt:
            "Lorem ipsum bla bla ipsum ipsum bla bla ipsum bla ipsum bla bla ipsum bla bla lorem ipsum ipsum lorem",
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
