const app = Vue.createApp({
  data() {
    return {
      title: "First title",
      count: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
