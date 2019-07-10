<template>
  <div id="app">
    <ContentArchitect />
  </div>
</template>

<script>
import { EditorComponent } from '@contentarchitect/editor'

export default {
  name: 'app',
  components: {
    [EditorComponent.name]: EditorComponent
  }
}
</script>


<style src="@contentarchitect/editor/dist/Contentarchitect.css">
</style>
<style>
</style>
