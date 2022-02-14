<template>
  <div class="render-wrapper">
    <Renderer :resize="true" :orbitCtrl="true">
      <Camera :position="{ z: 10 }" />
      <Scene>
        <FbxModel src="@/assets/models/testcube2.fbx" />
      </Scene>
    </Renderer>
  </div>
</template>

<script>
import { FbxModel, Camera, Renderer, Scene } from "troisjs";
export default {
  components: {
    FbxModel,
    Camera,
    Renderer,
    Scene,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
