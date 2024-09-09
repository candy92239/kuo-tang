<template>
  <div class="subpage-wrap">
    <h1>Research, Work and Learning Conference</h1>

    <GalleryComponent
      :galleryData="galleryData['banners']"
      :directory="directory"
      galleryClass="banners"
    />
    <div class="logos-wrap">
      <GalleryComponent
        :galleryData="galleryData['logo_full']"
        :directory="directory"
        galleryClass="logo_full"
      />
      <GalleryComponent
        :galleryData="galleryData['logo']"
        :directory="directory"
        galleryClass="logo"
      />
    </div>

    <GalleryComponent
      :galleryData="galleryData['logo_idea']"
      :directory="directory"
      galleryClass="logo_idea"
    />
    <GalleryComponent
      :galleryData="galleryData['icon']"
      :directory="directory"
      galleryClass="icon"
    />
    <GalleryComponent
      :galleryData="galleryData['vi']"
      :directory="directory"
      galleryClass="vi"
    />
  </div>
</template>

<script>
import GalleryComponent from "@/components/layout/GalleryComponent.vue";

export default {
  components: {
    GalleryComponent,
  },
  data() {
    return {
      directory: "oise_rwl", // Define the directory once for all galleries
      galleryData: {
        banners: "01~03",
        logo: "04~06",
        logo_full: "08",
        logo_idea: "09",
        vi: "11",
        icon: "10",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #ffffff;
  padding: 0.5em;
}
.subpage-wrap {
  background-color: #677479;
  overflow: auto;
  height: 100vh;
  padding: 1em;
}

.logos-wrap {
  //   background-color: #b8d0d2;
}
.logo :deep(.image-gallery) {
  flex-direction: row;
  justify-content: space-between;
  .image-item {
    flex-grow: 1;
  }
}

.vi :deep(.image-gallery) {
  width: 60%;
}

.wrapper {
  background-color: #889798;
}
</style>
