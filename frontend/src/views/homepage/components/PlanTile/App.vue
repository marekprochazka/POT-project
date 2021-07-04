<template>
  <div class="planTile__container">
    <div class="planTile__innerContainer">
      <h3 class="planTile__title">{{planTitle}}</h3>
      <p class="planTile__trainingSnippet">{{trainingsSnippet}}</p>
      <Icon class="planTile__icon-menu" icon-type="menu" />
      <Icon class="planTile__icon-add" icon-type="add" />
    </div>


  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from '@/views/utils/icon/App.vue'

export default defineComponent({
  name: 'vue-plan-tile',
  props: {
    planTitle: {type:String, required:true},
    trainingsSnippet: {type:String, required:true}
  },
  components:{Icon}
})
</script>
