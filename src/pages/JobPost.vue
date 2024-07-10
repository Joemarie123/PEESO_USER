<template>
  <div class="q-pa-md" style="display: flex; justify-content: center; flex-wrap: wrap">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="amber"
      padding
      arrows
      height="300px"
   style="width: 80%; margin-right: 10px;"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-2  full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
           <q-img class="rounded-borders col-2  full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-2  full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-img class="rounded-borders col-2  full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
           <q-img class="rounded-borders col-2  full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
         <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
           <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
           <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/cat.jpg" />
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
           <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg" />
           <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-img class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/quasar.jpg" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>
