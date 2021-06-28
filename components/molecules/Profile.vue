<template>
  <div class="flex items-center">
    <img
      src="https://github.com/MarlonDener.png"
      alt="Marlon Dener"
      class="mr-6 w-20 h-20 rounded-full"
    />
    <div class="flex flex-col w-full">
      <strong class="text-white text-2xl font-medium">Marlon Dener</strong>
      <p class="flex items-center mt-2">
        <img src="icons/level.svg" alt="level" class="mr-2" />
        <span class="text-white font-bold">Level {{ level }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: mapState("Challengers", ["level"]),
});
</script>

<style>
</style>
