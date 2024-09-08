<template>
  <div class="subpage-wrap">
    <h1>RGB postcards</h1>
    <GalleryComponent
      :galleryData="galleryData['title_card']"
      :directory="directory"
      galleryClass="title_card"
    />
    <GalleryComponent
      :galleryData="galleryData['all_card']"
      :directory="directory"
      galleryClass="all_card"
    />
    <GalleryComponent
      :galleryData="galleryData['proofs']"
      :directory="directory"
      galleryClass="proofs"
    />
    <GalleryComponent
      :galleryData="galleryData['photo']"
      :directory="directory"
      galleryClass="photo"
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
      directory: "postcard", // Define the directory once for all galleries
      galleryData: {
        proofs: "01~03",
        photo: "04~13",
        title_card: "14",
        all_card: "15",
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

.photo::v-deep .image-gallery {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .image-item {
    aspect-ratio: 1 / 1;
    flex: 1 1 30%;
    max-width: 30%;
    box-sizing: border-box;
    overflow: hidden;
    margin: 10px;
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

.proofs::v-deep .image-gallery {
  flex-direction: row;
  justify-content: space-between;
  .image-item {
    flex-grow: 1;
  }
}

.wrapper {
  background-color: #889798;
}
</style>
