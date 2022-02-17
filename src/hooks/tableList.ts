import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TableList extends Vue {
  pager = {
    pageNo: 1,
    pageSize: 20,
    lastLength: 0
  }

  query (type?:number): void {
    console.log('请重新定义query函数')
  }

  loader = {
    loading: false,
    loadAll: true,
    nodata: false,
    loadMore: () => {
      if (this.loader.loading) { return }
      if (this.pager.lastLength === this.pager.pageSize || this.pager.pageNo === 1) { this.pager.pageNo++; this.query() }
    }
  }

  listData = <any>[]

  initPage () {
    this.query(1)
  }

  created () {
    this.initPage()
  }
}
