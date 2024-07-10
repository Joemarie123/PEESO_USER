<template>
  <div
    class="q-pa-md"
    style="display: flex; justify-content: center; flex-wrap: wrap"
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
      style="height: 300px; width: 80%; max-width: 100%; "
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        class="row no-wrap justify-start items-center"
      >
        <q-img
          v-for="(src, idx) in image"
          :key="idx"
          :src="src"
          class="my-story-img"
          style="margin: 3px"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const slide = ref(0);
    const images = [
      [
        "https://cdn.quasar.dev/img/mountains.jpg",
        "https://cdn.quasar.dev/img/parallax1.jpg",
        "https://cdn.quasar.dev/img/parallax2.jpg",
        "https://cdn.quasar.dev/img/quasar.jpg",
        "https://cdn.quasar.dev/img/cat.jpg",
        "https://cdn.quasar.dev/img/linux-avatar.png",
      ],
      [
        "https://cdn.quasar.dev/img/mountains.jpg",
        "https://cdn.quasar.dev/img/parallax1.jpg",
        "https://cdn.quasar.dev/img/parallax2.jpg",
        "https://cdn.quasar.dev/img/quasar.jpg",
        "https://cdn.quasar.dev/img/cat.jpg",
        "https://cdn.quasar.dev/img/linux-avatar.png",
      ],
    ];

    return {
      slide,
      images,
    };
  },
};
</script>
<style scoped>
.q-carousel {
  width: 80%;
  overflow: hidden;
  margin-top: 10px;
}

.q-carousel-slide {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
}

.my-story-img {
  width: 70%; /* Set width of each image */
  height: 300px; /* Set height of each image */
  object-fit: cover;
  border-radius: 3%;
  cursor: pointer; /* Add a pointer cursor for UX */
}
</style>
