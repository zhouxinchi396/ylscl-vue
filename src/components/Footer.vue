<template>
  <div class="footer">
    <div id="about" class="gray"></div>
    <div id="link" class="gray"></div>
    <div id="brands" class="gray"></div>
    <div id="copyright" class="gray">
      Copyright © 2021 Anker Technology (UK) Ltd
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Footer",
});
</script>
<style scoped>
.gray {
  background: #242424;
  color: #cfcfcf;
  font-size: 1rem;
  display: table;
  width: 100%;
  overflow: hidden;
  position: relative;
  border: 1px solid red;
}
#about {
  margin-top: 12.2px;
  height: 346px;
}
#link {
  height: 369.8px;
}

#brands {
  height: 72px;
  padding: 12px 0;
  background: #000;
  line-height: 1.5;
  text-align: center;
}
#copyright {
  line-height: 1.15;
  color: #767676;
  padding-bottom: 36px;
  background: #000;
  font-size: 12px;
  text-align: center;
}
</style>