<template>
  <!-- Hero -->
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-center mb-8 lg:mb-16">
          <div
          v-if="data && data.title && data.title.value"
          class="mb-4 tracking-tight leading-normal font-semibold text-2xl lg:text-4xl"
          v-html="data.title.value"
       />
       <p class="mt-3 lg:text-lg text-normal text-light-grey">
          {{ data.description.value }}
       </p>
   </div>
   <!-- Grid -->
   <div class="grid lg:grid-cols-2">
      <div class="relative lg:ml-4 flex-grow">
          <div>
<!-- First Row -->
<div class="flex flex-wrap gap-4 mb-4">
  <!-- First Column -->
  <div class="dark p-4 ">
   <p class="mb-4 tracking-tight leading-normal font-semibold text-2xl lg:text-4xl">
      {{ data.title1.value }}
   </p>
   <h1
      v-if="
       data &&
       data.hero_header &&
       data.hero_header.value &&
       data.hero_header.value !== '<p><br></p>'
      "
      class="mb-4 text-orange-400 pre-line text-4xl lg:text-6xl font-semibold whitespace-pre-line"
      v-html="data.hero_header.value"
   ></h1>
   <p class="mt-3 lg:text-lg text-normal text-white">
      {{ data.description1.value }}
   </p>
  </div>

  <!-- Second Column -->
  <div class="w-full lg:w-1/2 coldark p-4">
   <p class="mb-4 tracking-tight leading-normal font-semibold text-2xl lg:text-4xl">
      {{ data.title2.value }}
   </p>
   <h1
      v-if="
       data &&
       data.hero_header &&
       data.hero_header.value &&
       data.hero_header.value !== '<p><br></p>'
      "
      class="mb-4 text-orange-400 pre-line text-4xl lg:text-6xl font-semibold whitespace-pre-line"
      v-html="data.hero_header.value"
   ></h1>
   <p class="mt-3 lg:text-lg text-normal text-light-grey">
      {{ data.description2.value }}
   </p>
  </div>
</div>
</div>

<div class="bg-gray-200 p-4 mb-4">
<!-- Second Row -->
<div class="flex flex-wrap items-center gap-4 mb-4">
  <p class="mb-4 tracking-tight leading-normal font-semibold text-2xl lg:text-4xl">
   {{ data.title3.value }}
  </p>
  <p class="mt-3 lg:text-lg text-normal text-light-grey ml-4">
   {{ data.description3.value }}
  </p>
</div>

<!-- Other content such as button -->
<div
  v-if="
   data &&
   data.button_cta &&
   data.button_cta.linkedItems &&
   data.button_cta.linkedItems[0] &&
   data.button_cta.linkedItems[0].elements
  "
  class="inline-flex items-center mt-5"
>
  <NaCta :data="data.button_cta.linkedItems[0].elements" />
  <NaCta
   v-if="
      data &&
      data.button_cta &&
      data.button_cta.linkedItems &&
      data.button_cta.linkedItems[1] &&
      data.button_cta.linkedItems[1].elements
   "
   :data="data.button_cta.linkedItems[1].elements"
  />
</div>
</div>

<!-- Third Row -->
<div class="flex flex-wrap gap-4 mb-4">
  <!-- First Column -->
  <div class=" coldark p-4">
   <p class="mb-4 tracking-tight leading-normal font-semibold text-2xl lg:text-4xl">
      {{ data.title4.value }}
   </p>
   <h1
      v-if="
       data &&
       data.hero_header &&
       data.hero_header.value &&
       data.hero_header.value !== '<p><br></p>'
      "
      class="mb-4 text-orange-400 pre-line text-4xl lg:text-6xl font-semibold whitespace-pre-line"
      v-html="data.hero_header.value"
   ></h1>
   <p class="mt-3 lg:text-lg text-normal text-light-grey">
      {{ data.description4.value }}
   </p>
  </div>

  <!-- Second Column -->
  <div class="dark p-4" style="width: 56%;">
   <p class="mb-4 tracking-tight leading-normal font-semibold text-2xl lg:text-4xl">
      {{ data.title5.value }}
   </p>
   <h1
      v-if="
       data &&
       data.hero_header &&
       data.hero_header.value &&
       data.hero_header.value !== '<p><br></p>'
      "
      class="mb-4 text-orange-400 pre-line text-4xl lg:text-6xl font-semibold whitespace-pre-line"
      v-html="data.hero_header.value"
   ></h1>
   <p class="mt-3 lg:text-lg text-normal text-white">
      {{ data.description5.value }}
   </p>
  </div>
</div>
</div>


      <!-- End Col -->
      <div class="relative lg:ml-4 flex flex-col justify-between h-full imgfull">
    <!-- Top Spacer -->
    <!-- <div class="flex-grow"></div> -->

    <!-- Image Container -->
    <div class="flex justify-center" style="height: 97%;">
        <img
            class="rounded-md w-auto"
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
        />
    </div>

    <!-- Bottom Spacer -->
    <!-- <div class="flex-grow"></div> -->
</div>

      <!-- End Col -->
   </div>
   <!-- End Grid -->
  </div>
  <!-- End Hero -->
</template>

<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "BgiB",
  props: {
   data: {
      type: Object,
      required: true,
   },
  },
  computed: {
   dynamicHeadingTag() {
      const headingTypeCode = this.data.heading__heading_type.value[0].codename;
      return getHeadingType(headingTypeCode);
   },
  },
  methods: {
   getHeadingWeight,
   getHeadingColor,
   getHeadingSize,
  },
};
</script>
<style>
  .hero-title p {

   color:#424242;
   font-weight: 800;
;
  }
  .hero-title p strong{
   color: #07D6A0 !important;
   font-weight: 800;
  }
  .hero-title em {
   color: #2443AB;
   font-family: "DM Serif Display", serif;
   font-weight: 600;
  }
  .dark{
  background: #424242;

  }
  .coldark{
      background: #07D5A7;

  }
  .imgfull{
    overflow: hidden;
    height: 100%;
    object-fit: cover;
  }
</style>