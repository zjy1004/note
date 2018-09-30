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
      >
      </quill-editor>
      <div class="category">
        标签:
      </div>
      <el-button type="primary">
        发布笔记
      </el-button>
    </div>
  </div>
</template>

<script>
  import 'quill/dist/quill.snow.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend);
  export default {
    components: {quillEditor},
    data() {
      return {
        formData: {
          content: '',
          title: ''
        },
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action: 'https://qiniu.com',
              response: (res) => {
                return res.info
              }
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
  }
}
</style>
<style>
  .ql-container{
    min-height: 270px;
  }
</style>
