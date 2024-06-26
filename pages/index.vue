<template>
  <div class="page wrapper">
    <header>
      <h1 class="title" v-html="title"></h1>
    </header>
    <SliceZone
      wrapper="div"
      class="flow"
      style="--spacing: 6.4rem"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
  </div>
</template>

<script setup lang="ts">
import { components } from "~/slices";
import { isFilled } from "@prismicio/client";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("home")
);

const title = computed(() => {
  const title_value = isFilled.keyText(page.value?.data.title)
    ? page.value.data.title
    : page.value?.data.meta_title;
  if (
    isFilled.keyText(page.value?.data.highlighted_term) &&
    page.value?.data.highlighted_term.length > 0
  ) {
    return title_value?.replaceAll(
      new RegExp(page.value?.data.highlighted_term, "gi"),
      "<span class='mark'>$&</span>"
    );
  }
  return title_value;
});

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
});
</script>

<style scoped>
.page {
  padding-block: 2.4rem 14rem;
  container: page-wrapper / inline-size;
}

header {
  margin-block-end: 6.4rem;
}

.title {
  font-size: clamp(3.6rem, 3.6rem + 2cqi, 7.2rem);
  line-height: 1.1;
  max-inline-size: 780px;
  --title-wght: 400;
}
</style>
