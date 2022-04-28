<template>
    <div class="home-container">
        <div class="home">
            <div class="welcome-container">
                <div class="img-container">
                    <img class="profile-img" src="/images/profile.png" alt="moi">
                    <h2 class="image-caption">Adrien Forcada</h2>
                </div>
                <div>
                    <h2 class="welcome-text">Bienvenue sur mon Portfolio!</h2>
                    <p> "Ainsi ce qui est utile est beau relativement à l'usage auquel il est utile." <strong>-Socrate</strong> </p>
                </div>
            </div>
        </div>
        <div class="home">
            <router-link
            v-for="field in profile"
            :key="field.id"
            :to="`/profile/${field.id}`"
            >
            <div class="image-link-container">
                <img :src="field.image.src" :alt="field.image.alt" style="width:100%;">
                <div class="centered">{{field.title}}</div>
            </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import sourceData from '@/profile.json'
export default {
    data(){
        return {
            profile: sourceData.profile,
        }
    }
}
</script>