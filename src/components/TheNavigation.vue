<template>
    <div id="nav">
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <label for="nav-toggle"><img class="nav-logo" src="../assets/favicon.png" alt="logo"></label>
        <div class="nav-link-container">
            <router-link to="/vue-portfolio/">
            Home
            </router-link>
            <router-link
            v-for="field in profile"
            :key="field.id"
            :to="`/vue-portfolio/profile/${field.id}`"
            >
                {{field.title}}
            </router-link>
        </div>
    </div>
</template>

<script>
import sourceData from '../profile.json'
export default {
    data(){
        return {
            profile: sourceData.profile,
        }
    }
}
</script>
