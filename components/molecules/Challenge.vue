<template>
  <section
    class="flex flex-col flex-1 justify-center items-center py-6 px-10 md:px-16"
  >
    <header class="w-full pb-6 border-b-2 border-background">
      <h2 class="text-xl text-blue font-semicold text-center">
        {{ `Ganhe ${amount} xp` }}
      </h2>
    </header>
    <main class="flex flex-col flex-1 justify-center items-center mt-6">
      <img
        :src="`icons/${type}.svg`"
        :alt="type"
        :style="{ minHeight: '70px' }"
      />
      <h1 class="font-semibold text-3xl text-title mt-6 mb-2">Desafio</h1>
      <p class="text-center text-base leanding-6">
        {{ description }}
      </p>
    </main>

    <footer class="flex w-full gap-x-2">
      <button class="button failed" @click="resetChallenges">Falhei</button>
      <button class="button succeeded" @click="challengeSucceeded">
        Completei
      </button>
    </footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { Mutations as CountdownMT } from '~/store/Countdown/types'
import { Challenge as ChallengesType, Mutations as ChallengesMT } from '~/store/Challengers/types'
export default Vue.extend<unknown, any, unknown, ChallengesType>({
  props: {
    type: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true }
  },
	computed: mapState('Challengers', ['level', 'xp', 'completedChallenges']),

})

</script>
