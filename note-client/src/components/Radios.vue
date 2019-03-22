<template>
    <div class="radios clearfix">
      <label class="radio-label fll" v-for="(item, index) in options" :key="index">
        <input type="radio" v-model="currentValue" class="radios-item" :value="item._id">
        <div class="radios-title-wrap">
          <span class="radios-title">{{item.name}}</span>
        </div>
      </label>
    </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array
      },
      value: String
    },
    name: "Radios",
    data() {
        return {
          currentValue: this.value
        }
    },
    watch: {
      value(val) {
        this.currentValue = val
      },
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('change', val)
      }
    }
  }
</script>

<style scoped lang="scss">
  .radios-item {
    display: none;
  }
  .radios-title-wrap {
    padding: 10px 15px;
    font-size: 12px;
    color: #444;
    font-weight: 400;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    margin-right: 20px;
    cursor: pointer;
  }
  .radios-item:checked + .radios-title-wrap{
    color: #fff;
    background: #409eff;
  }

</style>
