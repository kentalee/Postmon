<template lang="pug">
ul
  li(v-for="item in menuItems", :class="{active: current === item.title}")
    span.icon.pmIcons(v-if="item.icon!==''" :class="['pm-'+item.icon]")
    div.title {{item.title}}
</template>

<style lang="scss">

@import "@/assets/style/vals.scss";

ul {
  user-select: none;
  -webkit-touch-callout: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0 4px;
  height: 60px;
  width: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  &.active {
    background-color: adjust-color($clWhite, $lightness: -10%);
    border-left: 2px solid $clFront;
  }

  &:hover {
    background-color: adjust-color($clWhite, $lightness: -7.5%);
  }

  & > .icon {
    font-size: 16px;
    line-height: 20px;
  }

  & > .title {
    font-size-adjust: none;
    height: 16px;
    font-size: 10px;
    font-weight: 300;
    line-height: 16px;
  }
}
</style>

<script lang="ts">
import {defineComponent, reactive, toRefs, PropType} from 'vue';

export declare interface menuItem {
  title: String
  icon: String
}

export default defineComponent({
  props: {
    menuItems: {
      type: Array as PropType<menuItem[]>,
      default: () => []
    },
    current: String
  },
  setup(props) {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
})

</script>

