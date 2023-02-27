<template>
  <div class="menu-wrapper" style="overflow: hidden">
    <template v-for="item in menu">
      <el-menu-item v-if="!item.isParent"
                    :index="item.path"
                    @click="open(item)">
          <el-icon><location /></el-icon>
        <span class="menuName">{{item.menuName}}</span>
      </el-menu-item>
      <el-sub-menu v-else-if="item.isParent"
                  :index="item.id+''">
        <template #title>
          <el-icon><location /></el-icon>
          <span class="menuName">{{item.menuName}}</span>
        </template>
        <el-menu-item-group>
          <sidebar-item :menu="item.child" @selectItemParentMethod="selectItem"></sidebar-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </div>
</template>
<script>
  export default {
    name: "sidebarItem",
    data() {
      return {
      };
    },
    props: {
      menu: {
        type: Array
      }
    },
    methods: {
      open(item) {
        this.$emit("selectItemParentMethod",item);
      },
      selectItem(item){
        this.$emit("selectItemParentMethod",item);
      }
    }
  };
</script>

<style scoped>
  ::v-deep .el-menu-item-group__title{
    display: none;
  }
</style>
