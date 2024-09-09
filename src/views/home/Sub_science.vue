<template>
  <div class="subpage-wrap">
    <h1>Children's Book Illustration</h1>
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
      directory: "children_book",
      galleryData: {
        all: "01~18",
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

.all::v-deep .image-gallery {
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

  .image-item img,
  .image-item svg {
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
