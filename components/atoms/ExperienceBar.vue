<template>
  <header class="pb-10 flex items-center text-white">
    <p class="text-sm">{{ `${xp.start} XP` }}</p>
    <div class="mx-4 lg:mx-6 flex-1 bg-gray-line h-2 rounded-md m-2">
      <div
        class="relative bg-green h-2"
        :style="{ width: `${currentXpPercentage}%` }"
      >
        <p class="text-sm absolute -right-4 w-max top-4">
          {{ `${xp.current} XP (${currentXpPercentage}%)` }}
        </p>
      </div>
    </div>
    <p class="text-sm">
      {{ `${xp.end} XP` }}
    </p>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapState("Challengers", ["xp"]),
    ...mapGetters("Challengers", ["currentXpPercentage"]),
  },
});
</script>
