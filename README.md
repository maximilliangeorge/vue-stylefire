# vue-stylefire

Stylefire is a tiny HTML/SVG style-setter for use with the Popmotion animation library.

This Vue plugin makes it easy to create stylers in VueJS via a simple directive. The styler will become available in the parent scope under the `$stylers` key for easy access.

```

 import VueStylefire from 'vue-stylefire'
 Vue.use(VueStylefire)

 // ...

 <template>
  <div v-styler:myDiv />
 </template>

<script>
  export default {
    mounted() {
      
      const { myDiv } = this.$stylers

      myDiv.set({ x: 100 }) // Or, do something with popmotion.

    }
  }
</script>

```
