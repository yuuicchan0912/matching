<template>
  <div>
    <h1 class="title">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.test();
  },
  data() {
    return {
      text: 'API接続前',
    };
  },
  methods: {
    test() {
      this.$axios
        .$get('/')
        .then((response) => {
          console.log('API接続成功');
          console.log(response);
          this.text = response;
        })
        .catch((error) => {
          console.log('API接続失敗');
          console.log(error);
        });
    },
  },
};
</script>
