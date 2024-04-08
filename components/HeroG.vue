<template>
    <!-- Hero -->
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid -->
      <div class="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <div
            v-if="data && data.title && data.title.value"
            class="tracking-tight text-[#323232] font-serif text-5xl leading-[60px] font-semibold hero-title hero-line-height"
            v-html="data.title.value"
          />
           
          <h1
            v-if="
              data &&
              data.hero_header &&
              data.hero_header.value &&
              data.hero_header.value !== '<p><br></p>'
            "
            class="mb-4 text-orange-400 pre-line text-4xl lg:text-6xl font-semibold whitespace-pre-line"
            v-html="data.hero_header.value"
          />
          <p class="mt-3 lg:text-lg text-normal text-light-grey">
            {{ data.description.value }}
          </p>
          <div>
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
            <NaCta v-if="
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
        </div>
        <!-- End Col -->
  
        <div class="relative lg:ml-4">
          <img
            class="rounded-md mx-auto w-auto"
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
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
    name: "HeroG",
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
  </style>