<template>
  <div class="subpage-wrap">
    <h1>Mount Sinai Hospital Internal Training Module</h1>

    <GalleryComponent
      :galleryData="galleryData['title_screenshot']"
      :directory="directory"
      galleryClass="title_screenshot"
    />
    <GalleryComponent
      :galleryData="galleryData['screenshots']"
      :directory="directory"
      galleryClass="screenshots"
    />
    <GalleryComponent
      :galleryData="galleryData['logo_main']"
      :directory="directory"
      galleryClass="logo_main"
    />
    <GalleryComponent
      :galleryData="galleryData['logos']"
      :directory="directory"
      galleryClass="logos"
    />

    <GalleryComponent
      :galleryData="galleryData['icons']"
      :directory="directory"
      galleryClass="icons"
    />
    <GalleryComponent
      :galleryData="galleryData['cliparts']"
      :directory="directory"
      galleryClass="cliparts"
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
      directory: "msh", // Define the directory once for all galleries
      galleryData: {
        title_screenshot: "01",
        screenshots: "02~10",
        cliparts: "11",
        logos: "16~20",
        logo_main: "21",
        icons: "22~27",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.subpage-wrap {
  background-color: #798485;
  overflow: auto;
  height: 100vh;
}

.logos ::v-deep .image-gallery {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .image-item {
    flex-grow: 1;
  }
}

.screenshots::v-deep .image-gallery {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .image-item {
    flex: 1 1 30%;
    max-width: 30%;
    box-sizing: border-box;
  }
}

.icons::v-deep .image-gallery {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .image-item {
    flex: 1 1 30%;
    max-width: 30%;
    box-sizing: border-box;
  }
}
.wrapper {
  background-color: #889798;
}
</style>
