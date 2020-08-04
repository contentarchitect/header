<template>
    <css-grid :columns="['1fr', '2fr']" gap="8px">
        <css-grid-item>Level</css-grid-item>
        <css-grid-item>
            <radio-buttons v-model="value.level" inline>
                <radio-button v-for="option in options" :value="option.value" :key="option.value">
                    {{option.label}}
                </radio-button>
            </radio-buttons>
        </css-grid-item>
    </css-grid>
</template>

<script>
import { CssGrid, CssGridItem, RadioButtons, RadioButton } from "@contentarchitect/editor"

export default {
    components: { CssGrid, CssGridItem, RadioButtons, RadioButton },
    props: ['value'],
    computed: {
        options () {
            return this.value.constructor.settings.levels.map(level => {
                return {
                    label: 'H' + level,
                    value: level
                }
            });
        }
    },
    methods: {
        handleVal (value) {
            this.value.level = value
        }
    }
}
</script>

<style>

</style>