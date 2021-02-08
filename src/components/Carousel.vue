<template>
  <div
    id="container"
    @mouseenter="openCarousel(false)"
    @mouseleave="openCarousel(true)"
  >
    <router-link to="/product"><img :src="path" /></router-link>
    <div id="icon">
      <div
        v-for="icon in list"
        :class="icon.style"
        :id="icon.id"
        @click="change(icon.index)"
      ></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
export default defineComponent({
  name: "Home",
  setup() {
    let index = 0;
    let timer: any;
    const foloderPath = "/@/assets/images/";
    const list = reactive([
      {
        id: "circle1",
        style: "active",
        index: 0,
        img: "banner1.jpg",
      },
      {
        id: "circle2",
        style: "normal",
        index: 1,
        img: "banner2.jpg",
      },
      {
        id: "circle3",
        style: "normal",
        index: 2,
        img: "banner3.jpg",
      },
    ]);
    const path = ref(foloderPath + list[0].img);
    const change = (index: number) => {
      list
        .filter((icon) => (icon.style = "active"))
        .forEach((icon) => {
          icon.style = "normal";
        });
      path.value = foloderPath + list[index].img;
      list[index].style = "active";
    };

    const carousel = () => {
      if (++index > list.length - 1) {
        index = 0;
      }
      change(index);
    };

    const openCarousel = (flag: boolean) => {
      if (flag) {
        timer = setInterval(carousel, 3000);
      } else {
        clearInterval(timer);
      }
    };

    onMounted(() => {
      openCarousel(true);
    });

    return {
      path,
      list,
      openCarousel,
      change,
    };
  },
});
</script>

<style scoped>
/* ==================按需修改======================  */
#circle2 {
  left: 50%;
  transform: translateX(-50%);
}
#circle3 {
  right: 0px;
}
/* ================================================  */

/* ======================勿动======================  */
#container {
  position: relative;
}
img {
  width: 100%;
}
#icon {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  width: 90px;
  height: 24px;
}
#icon div {
  cursor: pointer;
  position: absolute;
  background-size: 24px, 24px;
  width: 24px;
  height: 24px;
}
.normal {
  background-image: url("../assets/images/circle.png");
}
.active {
  background-image: url("../assets/images/disc.png");
}
/* ================================================  */
</style>