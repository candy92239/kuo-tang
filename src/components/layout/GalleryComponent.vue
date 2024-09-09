<template>
  <div :class="galleryClass">
    <div class="image-gallery">
      <div v-for="(image, index) in images" :key="index" class="image-item">
        <img v-if="!image.isSvg" :src="image.src" :alt="`Image ${index + 1}`" />
        <inline-svg v-else :src="image.src" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg,
  },
  props: {
    galleryData: {
      type: String,
      required: true,
    },
    directory: {
      type: String,
      required: true,
    },
    galleryClass: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const images = ref([]);

    const parseGalleryString = (str) => {
      const numbers = [];
      str.split(",").forEach((part) => {
        part = part.trim();
        if (part.includes("~")) {
          const [start, end] = part.split("~").map(Number);
          for (let i = start; i <= end; i++) {
            numbers.push(i);
          }
        } else {
          numbers.push(Number(part));
        }
      });
      return numbers;
    };

    const tryImportImage = async (paddedNum, directory) => {
      const extensions = [".jpg", ".JPG", ".jpeg", ".png", ".gif", ".svg"];
      for (const ext of extensions) {
        try {
          const image = await import(
            `@/assets/subpages/${directory}/${paddedNum}${ext}`
          );
          return { src: image.default, isSvg: ext === ".svg" };
        } catch {
          // Continue to the next extension
        }
      }
      console.error(`Image ${paddedNum} not found in any supported formats.`);
      return null;
    };

    const loadImages = async () => {
      const numberList = parseGalleryString(props.galleryData);
      const imagePaths = await Promise.all(
        numberList.map(async (num) => {
          const paddedNum = num.toString().padStart(2, "0");
          return await tryImportImage(paddedNum, props.directory);
        })
      );
      images.value = imagePaths.filter(Boolean);
    };

    onMounted(loadImages);
    watch(() => props.galleryData, loadImages);

    return {
      images,
    };
  },
};
</script>

<style scoped>
.image-gallery {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
.image-item {
  margin: 1em;
}
img {
  width: 100%;
}
svg {
  width: 100%;
}
</style>
