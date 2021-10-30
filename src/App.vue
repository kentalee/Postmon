<template lang="pug">
a-config-provider(:locale="zh_CN")
  a-layout.full-Height
    a-layout-sider#app-sidebar(width="380")
      .sidebarHeader
        .sidebarHeaderTitle
          span.pmIcons.pm-user
          | CardInfoLink
        .sidebarHeaderOperations
          a-button(type="primary", size="small" :ghost="true") New
          a-button(type="primary", size="small" :ghost="true") Import
      .sidebarBody
        .sidebarBodyCategory
          sidebarMenu(:menuItems="menuItems", current="Environments")
        .sidebarBodyDetailed
          | ccccc
    a-layout#app-content
      router-view
</template>

<style lang="scss">
@import "@/assets/style/vals.scss";

$backgroundColor: adjust-color($clWhite, $lightness: -2.5%);
$borderColor: adjust-color($clWhite, $lightness: -7.5%);
#app-sidebar {
  background-color: $backgroundColor;
  border-right: 1px solid $borderColor;

  & > div { // antd children wrapper
    display: flex;
    flex-direction: column;
  }

  .sidebarHeader {
    width: 100%;
    height: 40px;
    flex-shrink: 0;
    border-bottom: 1px solid $borderColor;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sidebarHeaderTitle {
      margin-left: 12px;
      font-size: 12px;
      font-weight: bold;
      padding-top: 4px;

      span {
        vertical-align: baseline;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        font-weight: normal;
        margin: 0 6px 0 0;
      }
    }

    .sidebarHeaderOperations {
      padding: 8px;

      button {
        background-color: rgb(237, 237, 237) !important;
        color: rgb(33, 33, 33) !important;
        border: none;
        font-size: 11px;
        font-weight: 600;
        height: 24px;
        border-radius: 4px;
      }

      & > * {
        margin-right: 4px;
      }

      & > *:last-child {
        margin-right: 0px;
      }
    }
  }

  .sidebarBody {
    flex: 1;
    flex-shrink: 0;
    display: flex;

    .sidebarBodyCategory {
      width: 80px;
      border-right: 1px solid $borderColor;
    }

    .sidebarBodyDetailed {
      flex: 1;
    }
  }
}

#app-content {
  background-color: $clWhite;
}
</style>

<script lang="ts">
import {defineComponent, reactive, toRefs, watch} from 'vue';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import {default as sidebarMenu, menuItem} from './components/appSidebarMenu.vue';

const menuItems: menuItem[] = [{
  title: "Collections",
  icon: "deploymentunit"
}, {
  title: "Environments",
  icon: "group"
}, {
  title: "Specific",
  icon: "barcode"
}, {
  title: "History",
  icon: "reloadtime"
}]

export default defineComponent({
  components: {
    sidebarMenu
  },
  setup() {
    const state = reactive({
      menuItems, zh_CN
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>