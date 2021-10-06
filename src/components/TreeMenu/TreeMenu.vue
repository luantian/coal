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
            console.log('a', this.$route.path)
            console.log('b', route.path)
            return r(
              'el-submenu',
              {
                class: {
                  active: this.$route.path === route.path
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
            return r(
              'el-menu-item',
              {
                class: {
                  active: this.$route.path === route.path
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
        this.$emit('onSelect', path, paths)
      }
    },
    render(r) {
      return r(
        'el-menu',
        {
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
  .el-menu {
    border-right: none;
    background-color: transparent;
  }

  ::v-deep .el-menu.el-menu--inline {
    color: red;
    background-color: transparent;
  }

  ::v-deep .el-menu-item {
    color: #fff;
    background: transparent;

    &:hover, &.is-active {
      color: $--color-primary;
      background: url("~@/assets/img/menu-item-bg.png") no-repeat;
      background-size: 100% 100%;
    }
  }

  ::v-deep .el-submenu__title {
    color: #fff;
    &:hover, &.is-active {
      color: $--color-primary;
      background: url("~@/assets/img/menu-item-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    i {
      color: #fff;
    }
  }

  .el-submenu .el-menu {
    background: transparent;
  }


</style>
