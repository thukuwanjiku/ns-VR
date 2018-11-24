<template>
    <RadSideDrawer ref="drawer" :gesturesEnabled="isGesturesEnabled">
        <StackLayout ~drawerContent backgroundColor="#ffffff">
            <Label class="drawer-header" text="Drawer"/>

            <Button @tap="handleNavigation('home')" class="drawer-item" text="Home"/>
            <Button @tap="handleNavigation('sda')" class="drawer-item" text="Page 3"/>
            <Button @tap="handleNavigation('another')" class="drawer-item" text="Item another"/>
        </StackLayout>
        <Frame ~mainContent>
            <router-view></router-view>
        </Frame>
    </RadSideDrawer>
</template>

<script>
  export default {
      data(){
          return{
              isGesturesEnabled: true,
              hiddenDrawerRoutes: ['another'],
          }
      },
      watch: {
          $route (to, from){
              /*if(this.hiddenDrawerRoutes.indexOf(to.name)){
                  this.isGesturesEnabled = false;
              }else{
                  this.isGesturesEnabled = true;
              }*/

              
              /*console.log(to.name);
              console.log(from.name);*/
          }
      },
      methods:{
          handleNavigation(routeName){
              this.$refs.drawer.nativeView.closeDrawer()
              this.$router.replace({name: routeName})
          }
      }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  .title {
    text-align: left;
    padding-left: 16;
  }

  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
  }

  .drawer-header {
    padding: 50 16 16 16;
    margin-bottom: 16;
    background-color: #53ba82;
    color: #ffffff;
    font-size: 24;
  }

  .drawer-item {
    padding: 8 16;
    color: #333333;
    font-size: 16;
  }
</style>
