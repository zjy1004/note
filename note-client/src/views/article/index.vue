<template>
  <div class="article ">
    <div class="author-msg clearfix" v-if="content.author">
      <div class="img-wrap fll">
        <img class="img" :src="content.author.avatar">
      </div>
      <div class="author-details fll">
        <div class="author-name">
          {{content.author.username}}
        </div>
        <div class="date">
          <span class="format-date">{{content.updateTime}}</span>
          <span>阅读{{content.readnumber}}</span>
        </div>
      </div>
    </div>
    <div class="title">
      <h1> {{content.title}}</h1>
    </div>
    <div class="content-html" v-html="content.content">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: {}
      }
    },
    methods: {
      getData() {
        this.$axios.get(`/article/${this.$route.params.id}`).then(res => {
          console.log(res);
          this.content = res.data
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped lang="scss">
  .article{
    width: 980px;
    margin: 50px auto;
    box-sizing: border-box;
    background: #fff;
    border-radius: 6px;
    padding: 60px 40px;

    .img-wrap{
      width: 50px;
      height: 50px;
    }
    .author-details{
      margin-left: 15px;
    }
    .author-name{
      font-size: 16px;
      font-weight: 700;
      color: #333;
    }

    .date{
      padding: 10px 0;
      font-size: 12px;
      color: #555;

      .format-date{
        margin-right: 6px;
      }
    }
  }
</style>
