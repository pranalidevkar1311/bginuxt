<template>
  <section>
    <div class="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div class="mx-auto text-center mb-8 lg:mb-16">
        <HeaderSection
          v-if="
            data && data.section_header && data.section_header.linkedItems[0]
          "
          :data="data.section_header.linkedItems[0].elements"
        />
      </div>

      <div
        class="w-full grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-20"
      >
        <div
          class="rounded shadow overflow-hidden"
          :class="[
            data?.card_color?.value?.[0]?.codename === 'green'
              ? 'bg-green'
              : 'white',
            {
              'border border-[#96B624]':
                data?.card_border?.value?.[0]?.codename === 'yes' &&
                data?.border_color?.value?.[0]?.codename === 'yellow',
            },
          ]"
          v-for="codename in data.section_grid.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard
            :data="codename?.elements"
            :length="data?.section_grid?.linkedItems?.length"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureE",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
