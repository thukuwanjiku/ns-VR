<template>
    <Page>
        <ActionBar>
            <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
        </ActionBar>

        <!--<RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#ffffff">
                <Label class="drawer-header" text="Drawer"/>

                <Button @tap="$router.replace('/first')" class="drawer-item" text="Item 1"/>
                <Button @tap="$router.replace('/second')" class="drawer-item" text="Item 2"/>
                <Label class="drawer-item" text="Item 3"/>
            </StackLayout>
            <StackLayout ~mainContent>
                <Label text="Some Text"></Label>
                <router-view></router-view>
            </StackLayout>
        </RadSideDrawer>-->

        <StackLayout>
            <Label text="Hope you see this" class="message"></Label>
        </StackLayout>

    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!!'
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
