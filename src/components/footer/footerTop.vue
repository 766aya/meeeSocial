<template>
  <div id="footerTop">
    <div class="content">
      <div class="lside">

      </div>
      <div class="rside">
        <input
          class="text-input"
          v-model="formData.name"
          type="text"
          autocomplete="off"
          placeholder="请输入您的姓名">
        <input
          class="text-input"
          v-model="formData.telphone"
          type="text"
          autocomplete="off"
          placeholder="请输入您的电话">
        <input
          class="text-input"
          v-model="formData.email"
          type="text"
          autocomplete="off"
          placeholder="请输入您的邮箱">
        <input
          class="text-input"
          v-model="formData.company"
          type="text"
          autocomplete="off"
          placeholder="请输入您的姓名">
        <textarea
          class="text-input text-textarea"
          v-model="formData.demand"
          cols="30"
          rows="10"
          placeholder="请输入您的需求内容">
        </textarea>
        <a href="javascript:;" class="learn-more-btn">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerTop',
  data () {
    return {
      formData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  #footerTop {
    width: 100%;
    padding: 40px 0;
    background: #F4F4F4;
    .content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .lside {
        flex: 1;
      }
      .rside {
        width: 500px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .text-input {
          outline: none;
          background: none;
          border: 1px solid #CCCCCC;
          margin: 0px 15px 15px 15px;
          padding: 0 0.5em;
          line-height: 30px;
          width: 40%;
        }
        .text-textarea {
          width: 444px;
          height: 100px;
        }
      }
    }
  }
</style>
