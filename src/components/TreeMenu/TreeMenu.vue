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
                class: {
                  active: this.$route.path.indexOf(route.path) > -1
                },
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
            console.log('route+++++', route)

            return r(
              'el-menu-item',
              {
                class: {
                  active: this.$route.path.indexOf(route.path) > -1
                },
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
        console.log('paths', paths)
        const current = this.$router.history.current.fullPath
        const toPath = paths.join('/')
        console.log('toPath', toPath)
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
          // props: {
          //   backgroundColor: "#545c64",
          //   textColor: "#fff",
          //   activeTextColor: "#ffd04b",
          //   // router: true
          // },
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

  /deep/ .el-submenu.active {
    .el-submenu__title {
      color: green;
      background: red;
    }
  }

  /deep/ .el-menu-item:hover {
    background-color: orange;
  }

  /deep/ .el-menu-item.active {
    background: red;
  }

</style>
