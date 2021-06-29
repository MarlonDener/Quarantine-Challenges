
<template>
  <section
    class="
      flex flex-col
      lg:flex-row
      flex-1
      lg:flex-none
      lg:mt-16
      sm:gap-x-10
      md:gap-x-20
    "
  >
    <div class="flex flex-col w-full lg:w-1/2">
      <Profile />
      <CompletedChallenges />
      <Countdown @completed="getNewChallenge" />
      <button v-if="hasCountDownCompleted" disabled class="button completed">
        Ciclo completado
      </button>
      <button
        v-else-if="isCountdownActive"
        class="button abandon"
        @click="setCountdownState(false)"
      >
        Abandonar ciclo
      </button>
      <button v-else class="button start" @click="setCountdownState(true)">
        Começar um ciclo
      </button>
    </div>
    <Card class="w-full lg:w-1/2" id="challenge" />
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import { mapState, mapGetters, mapMutations } from "vuex";
import { Mutations as ChallengesMT } from "~/store/Challengers/types";
import { Mutations as CountdownMT } from "~/store/Countdown/types";
import CompletedChallenges from "~/components/atoms/CompletedChallenges.vue";
import Profile from "~/components/molecules/Profile.vue";
import Countdown from "~/components/molecules/Countdown.vue";

import Card from "~/components/organisms/Card.vue";

import {
  playAudio,
  sendNotification,
  getRandomNumber,
  scrollToElement,
} from "~/utils";

type Head = {
  title: string;
};

export default Vue.extend({
  components: {
    CompletedChallenges,
    Profile,
    Countdown,
    Card,
  },
  head(): Head {
    return {
      title: "Home | movue.it",
    };
  },
  computed: {
    ...mapState("Countdown", {
      hasCountDownCompleted: "hasCompleted",
      isCountdownActive: "isActive",
    }),

    ...mapGetters("Challengers", ["challengesLength"]),
  },
  mounted() {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  },

  methods: {
    ...mapMutations({
      setCountdownHasCompleted: `Countdown/${CountdownMT.SET_HAS_COMPLETED}`,
      setCountdownIsActive: `Countdown/${CountdownMT.SET_IS_ACTIVE}`,
      setCurrentChallengeIndex: `Challengers/${ChallengesMT.SET_CURRENT_CHALLENGE_INDEX}`,
    }),
    setCountdownState(flag: boolean) {
      this.setCountdownHasCompleted(false);
      this.setCountdownIsActive(flag);
    },
    getNewChallenge() {
      const index = getRandomNumber(0, this.challengesLength);
      this.setCountdownHasCompleted(true);
      this.setCurrentChallengeIndex(index);

      if (Notification?.permission === "granted") {
        playAudio("/notification.mp3");
        sendNotification("Novo desafio", {
          body: "Um novo desafio vai começar, bora completar !!",
          icon: "/favicon.png",
        });
      }
      this.$nextTick(() => {
        scrollToElement("#challenge");
      });
    },
  },
});
</script>
