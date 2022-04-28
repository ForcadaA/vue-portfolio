<template>
    <ul>
        <li v-for="(el, index) in card"
        :key="index">
            {{el}}
        </li>
    </ul>
</template>

<script>
export default {
    props:['card']
}
</script>