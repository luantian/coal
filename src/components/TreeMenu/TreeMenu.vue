<script>
  export default {
    name: 'TreeMenu',
    props: {
      routes: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      elements(routes, r) {
        return routes.map(route => {
          if (!route.paths) route.paths = []
          if (route.children && route.children.length) {
            return r(
              'el-submenu',
              {
                props: {
                  index: route.path,
                }
              },
              [
                r(
                  'span',
                  {
                    slot: 'title'
                  },
                  [
                    route.meta.title
                  ]
                ),
                this.elements(route.children, r)
              ]
            )
          } else if (route.path) {
            return r(
              'el-menu-item',
              {
                props: {
                  index: route.path,
                },
              },
              [
                route.meta.title
              ]
            )
          } else {
            return null
          }
        })
        .filter(item => item)
      },
      /**
       *
       * @param path 当前最外层地址
       * @param paths 当前包含父级路由地址的数组
       * @param vm 当前组件实例
       */
      onSelect(path, paths) {
        const current = this.$router.history.current.fullPath
        const toPath = paths.join('/')
        if (current === toPath) return
        this.$router.push({
          path: toPath
        })
      }
    },
    render(r) {
      return r(
        'el-menu',
        {
          props: {
            backgroundColor: "#545c64",
            textColor: "#fff",
            activeTextColor: "#ffd04b",
            // router: true
          },
          on: {
            select: this.onSelect
          }
        },
        this.elements(this.routes, r)
      )
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu{
    border-right-width: 0;
  }
</style>
