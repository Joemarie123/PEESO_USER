<template>
  <div>
    <div
      class="q-pa-md"
      style="display: flex; justify-content: center; flex-wrap: wrap;"
    >
      <q-carousel
        v-model="slide"
        swipeable
        animated
        control-color="amber"
        arrows
        padding
        transition-prev="slide-right"
        transition-next="slide-left"
        class="q-mb-md"
      >
        <q-carousel-slide
          v-for="(imageGroup, index) in computedImages"
          :key="index"
          :name="index"
          class="row no-wrap justify-start items-center"
        >
          <q-img
            v-for="(src, idx) in imageGroup"
            :key="idx"
            :src="src"
            class="my-story-img"
            style="margin: 3px"
            @click="openImage(src, idx + index * imagesPerSlide)"
          />
        </q-carousel-slide>
      </q-carousel>
    </div>

    <!-- Dialog for showing the selected image in full-screen -->
    <q-dialog v-model="dialogVisible" persistent>
      <q-carousel
        v-model="selectedImageIndex"
        control-color="amber"
        arrows
        infinite
        animated
      >
        <q-carousel-slide
          v-for="(src, index) in LogoCompany"
          :key="index"
          :name="index"
        >
          <q-img :src="src" class="full-screen-image" />
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import {useLoginCheck} from "src/stores/SignUp_Store";

export default {
  data(){
    return {
      LogoCompany: [],
    }
  },
  created(){
    const store = useLoginCheck();
    this.LogoCompany = store.Logos;


  },
  setup() {
    const slide = ref(0);
    const dialogVisible = ref(false);
    const selectedImageIndex = ref(0);
    const images = [
      "https://cdn.quasar.dev/img/mountains.jpg",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/quasar.jpg",
      "https://cdn.quasar.dev/img/cat.jpg",
      "https://cdn.quasar.dev/img/linux-avatar.png",
      "https://cdn.quasar.dev/img/mountains.jpg",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/quasar.jpg",
      "https://cdn.quasar.dev/img/cat.jpg",
      "https://cdn.quasar.dev/img/linux-avatar.png",
    ];

    const imagesPerSlide = ref(3);

    const computedImages = computed(() => {
      let groups = [];
      for (let i = 0; i < images.length; i += imagesPerSlide.value) {
        groups.push(images.slice(i, i + imagesPerSlide.value));
      }
      return groups;
    });

    const updateImagesPerSlide = () => {
      if (window.innerWidth < 300) {
        imagesPerSlide.value = 2;
      } else if (window.innerWidth < 600) {
        imagesPerSlide.value = 2;
      } else if (window.innerWidth < 900) {
        imagesPerSlide.value = 3;
      } else if (window.innerWidth < 1300) {
        imagesPerSlide.value = 4;
      } else if (window.innerWidth < 1500) {
        imagesPerSlide.value = 5;
      } else {
        imagesPerSlide.value = 6;
      }
    };

    const openImage = (src, index) => {
      selectedImageIndex.value = index;
      dialogVisible.value = true;
    };

    onMounted(() => {
      updateImagesPerSlide();
      window.addEventListener("resize", updateImagesPerSlide);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateImagesPerSlide);
    });

    return {
      slide,
      computedImages,
      dialogVisible,
      selectedImageIndex,
      openImage,
    };
  },
};
</script>

<style scoped>
.q-carousel {
  overflow: hidden;
  margin-top: 10px;
  height: 200px;
  width: 90%;
}

.q-carousel-slide {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
}

.my-story-img {
  height: 200px;
  object-fit: contain;
  border-radius: 3%;
  cursor: pointer;
}

.full-screen-image {
  height: 100vh;
  object-fit: contain;
  background-color: black;
}
</style>
