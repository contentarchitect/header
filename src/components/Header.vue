<template>
    <block
        ref="block"
        :ind="ind"
        :disable-move-up="ind == 0"
        :disable-move-down="ind == blocks.length - 1">

        <template slot="view">
            <h1>Merhaba Header</h1>
        </template>

        <template slot="conf">
            Header ayarlari
        </template>
    </block>
</template>

<script>
import { Block } from "@contentarchitect/base"

export default {
    mixins: [Block],
    methods: {
        renderedHtml () {
            return `<h1>Merhaba Baslik!</h1>`
        }
    }
}
</script>

<style>
</style>