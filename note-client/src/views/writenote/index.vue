<template>
  <div class="writenote">
    <div class="main-content w1170">
      <div class="title">
        标题
      </div>
      <div class="input-wrap">
        <el-input v-model="formData.title"></el-input>
      </div>
      <div class="title">
        内容
      </div>
      <quill-editor
        v-model="formData.content"
        ref="myQuillEditor"
        :options="editorOption"
        @change="handleChange"
      >
      </quill-editor>
      <div class="category clearfix">
        <span class="fll text">分类:</span>
        <div class="fll radios">
          <Radios :options="categories" v-model="formData.category"></Radios>
        </div>
      </div>
      <el-button type="primary" @click="handleSubmit">
        发布笔记
      </el-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import 'quill/dist/quill.snow.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  Quill.register('modules/ImageExtend', ImageExtend);
  import Radios from '@/components/Radios'
  export default {
    components: {quillEditor, Radios},
    data() {
      return {
        formData: {
          content: '',
          title: '',
          contentText: '',
          category: ''
        },
        token: '',
        categories: [],
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              // action: 'https://qiniu.com',
              action: 'https://upload-z1.qiniup.com',
              response: (res) => {
                return res.url
              },
              change: (xhr, formData) => {
                formData.append('token', this.token)
              } // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    },
    methods: {
      handleChange({quill, html, text}) {
          this.formData.contentText = text
          this.formData.contentText = this.formData.contentText.substring(0, 200) + '...'
      },
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          if (res.data.code == 200) {
            this.token = res.data.data
          }
        })
      },
      getCategory() {
        this.$axios.get('/category').then(res => {
          console.log(res)
          this.categories = res.data
        })
      },
      handleSubmit() {
        this.$axios.post('/article', this.formData).then(res => {
          if (res.code == 200) {
            this.$message.success(res.msg);
            this.$router.push('/index')
          } else {
            if (res.code == 403) {
              this.$message.error(res.msg);
              this.$router.push('/index')
            }
          }
        })
      }
    },
    created () {
      this.getCategory()
      this.getToken()
    }
  }
</script>

<style scoped lang="scss">
.main-content{
  margin-top: 30px;
  background-color: #fff;
  border-radius: 6px;
  padding: 30px;
  box-sizing: border-box;

  .title{
    line-height: 2;
    font-size: 20px;
    font-weight: 600;
    color: #444;
  }
  .category{
    margin: 20px;
    font-size: 14px;
    font-weight: 700;
    color: #409eff;
    .text{
      margin-top: 10px;
    }
    .radios{
      margin-left: 5px;
    }
  }
}
</style>
<style>
  .ql-container{
    min-height: 270px;
  }
</style>
