<template>
    <section class="bg-primary">
        <div class="split">
            <div>
                <h2>{{field.title}}</h2>
                <p>{{field.description}}</p>
                <div class="image-container">
                    <img :src="field.image.src" :alt="field.image.alt" type="image/jpeg">
                    <p class="image-caption">
                        Photo by <a :href="field.image.author.link"> {{field.image.author.name}} </a>
                        on <a :href="field.image.provider.link"> {{field.image.provider.name}} </a>
                    </p>
                </div>
            </div>
            <div>
                <TheCard :card="field.card"></TheCard>
                <span class="go-back">
                    <button @click="$router.back()">Retour</button>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
import sourceData from '../profile.json'
import TheCard from '../components/TheCard.vue'
export default {
    components:{ TheCard },
    computed:{
        fieldId(){
            return parseInt(this.$route.params.id)
        },
        field(){
            return sourceData.profile.find(field => field.id === this.fieldId)
        }
    }
}
</script>
