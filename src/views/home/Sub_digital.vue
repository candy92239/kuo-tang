<template>
  <div class="subpage-wrap">
    <h1>Digital Illustration</h1>
    <GalleryComponent
      :galleryData="galleryData['all']"
      :directory="directory"
      galleryClass="all"
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
      directory: "digital",
      galleryData: {
        all: "01~25",
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

.all :deep(.image-gallery) {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em;
  .image-item {
    aspect-ratio: 1 / 1;
    flex: 1 1 30%;
    max-width: 30%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.wrapper {
  background-color: #889798;
}
</style>
