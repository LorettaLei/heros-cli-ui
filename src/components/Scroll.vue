<template>
  <div class='scroll' ref="scrollLoaderRef">
    <p class='scroll-title' v-if='loading'>加载中...</p>
    <p class='scroll-title' v-else-if='!loadAll' @click='$emit("loadMore")'>点击加载更多</p>
    <p class='scroll-title' v-else>我已经到底啦～</p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  props: {
    loading: {
      type: Boolean
    }
  }
})
export default class Scroll extends Vue {
  @Prop(Boolean) loadAll?: boolean

  app: any;

  scroll () {
    const loaderBox = this.$refs.scrollLoaderRef as any
    if (this.app?.scrollTop > (loaderBox?.offsetTop - this.app?.offsetHeight) && !this.loadAll) {
      this.$emit('loadMore')
    }
  }

  mounted () {
    this.$nextTick(() => {
      this.app = document.getElementById('app') as any
      this.app.addEventListener('scroll', this.scroll)
    })
  }

  beforeDestory () {
    this.app.removeEventListener('scroll', this.scroll)
  }
}
</script>
<style lang="less" scoped>
.scroll{
  padding: 20px 0;
  &-title{
    font-size: 28px;
    color: #979AA2;
    line-height: 40px;
    text-align: center;
  }
}
</style>
