<template>
  <div id="app">
    <p>{{ message }}</p>
    <img alt="Vue logo" src="./assets/logo.png" @click="increment">
    <HelloWorld :msg="`Welcome to Your Vue.js + TypeScript App ${this.counter}`"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

// Use Store2
import { Getter, Action } from 'vuex-class';
import * as app from './store2/modules/app';
//

@Component({
  components: {
    HelloWorld,
  },
  // Use Store2
  methods: {
    ...app.mapActions(['incrementAction']),
    ...app.mapActions(['getMessageAction']),
  },
  //
})
export default class App extends Vue {
  // use Store
  // private get counter(): number {
  //   return this.$store.getters.getCounter();
  // }
  // private get message(): string {
  //   return this.$store.getters.getMessage();
  // }
  //

  // Use Store2
  @Getter('app/counter') private counter!: number;
  @Getter('app/message') private message!: string;
  private incrementAction!: (payload: {}) => void;
  private getMessageAction!: (payload: {}) => void;
  //


  private increment(): void {
    // use Store
    // this.$store.dispatch('incrementAction');
    // this.$store.dispatch('getMessageAction');
    //

    // use Store2
    this.incrementAction({});
    this.getMessageAction({});
    //
  }

  private created() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
