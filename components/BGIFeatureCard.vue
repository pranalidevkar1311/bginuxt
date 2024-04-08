<template>
    <div class="h-full bg-white flex flex-col justify-center items-center">
      <!-- Rest of your code -->
  
      <!-- Ensure the image, star icon, and description are stacked vertically -->
      <div
        v-if="
          data &&
          data.text_alignment &&
          data.text_alignment.value[0] &&
          data.text_alignment.value[0].codename === 'image_content'
        "
        class="flex m-0 h-full flex-col items-center"
      >
        <!-- Image div -->
        <div class="mb-4" v-if="data && data.icon && data.icon.value[0] && data.icon.value[0].url">
          <img :src="data.icon.value[0].url" :alt="data.icon.value[0].description" />
        </div>
  
        <!-- Star icon image div -->
        <div class="mb-4" v-if="data && data.star && data.star.value[0] && data.star.value[0].url">
          <img :src="data.star.value[0].url" :alt="data.star.value[0].description" />
        </div>
  
        <!-- Description div -->
        <div class="text-center">
          <component
            :is="dynamicHeadingTag"
            class="mb-2 tracking-tight leading-normal text-xl font-bold"
            :class="[
              getHeadingWeight(data.heading__heading_weight.value[0].codename),
              getHeadingSize(data.heading__heading_size.value[0].codename),
              getHeadingColor(data.heading__heading_color.value[0].codename),
            ]"
          >
            {{ data.heading__heading_text.value }}
          </component>
          <p class="mb-4 text-gray-500" v-if="data && data.description && data.description.value">
            {{ data.description.value }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  <script>
  import {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    getHeadingType,
  } from "/utils/dynamicOptions";
  export default {
    name: "BGIFeatureCard",
    props: {
      data: {
        type: Object,
        required: true,
      },
      length: {
        type: Number,
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
  