<template>
    <el-container :style="{height:fullHeight+'px'}" class="frontboard-page">
      <el-aside width="auto">
        <!-- 左侧导航栏 -->
        <sidebar ref="vchild" @openMenu="openMenu" :menu="config.menu" :name="config.name" :img="config.img"></sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <top @parentMethod="setCollapse" style="height: 50px"></top>
        </el-header>
        <el-main>
          <tab ref="childtab" :homePageTab="config.homePageTab"></tab>
          <el-scrollbar style="height:100%;overflow: hidden" class="main-container">
            <keep-alive>
              <router-view class="frontboard-view"/>
            </keep-alive>
          </el-scrollbar>
        </el-main>
        <el-footer style="height: 30px">作者：刘宇才  QQ:2395783668@qq.com</el-footer>
      </el-container>
    </el-container>
</template>
<style lang="scss">

  .frontboard-page{
    .el-header{
      padding: 0;
    }
    .el-main{
      background: #f0f2f5;
      padding: 0;
      position: relative;
      /*padding-top: 40px;*/
      box-sizing: border-box;
      padding-top: 40px;
    }
    .el-main .tab-nav{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .main-container>.el-scrollbar__wrap{
      overflow-x: hidden;
    }
    .el-footer{
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      /*box-shadow: 0px -20px 5px #888888;*/
      border-top: 1px solid #f0f2f5;
    }
  }
</style>

<script>
  import top from "./top/index";
  import sidebar from "./sidebar/index";
  import tab from "./tab/index";
  import router from '@/router';

  export default {
    name: 'frontboard',
    components: {
      top,
      sidebar,
      tab,
    },

    props: {
      config: {
        type: Object,

        default: () => {
        }
      }
    },
    data() {
      return {
        fullHeight:document.documentElement.clientHeight-1
      }
    },
    methods: {
      setCollapse() {
         this.$refs.vchild.setCollapse();
      },
      openMenu(item){
        console.log("addTabParent");
        console.log(item);
        this.$router.push({
          path:item.path,
        })
        this.$refs.childtab.openMenu(item);
      },
      collapseOpen(){

      },
        collapseClose(){

      },
    },
    mounted(){
        let that = this;
        window.onresize = ()=>{
            //设置页面的大小
            that.fullHeight = document.documentElement.clientHeight-1
        }
    },
  }
</script>
