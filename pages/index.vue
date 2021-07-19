<template>
  <div>
    <v-container>

      <div class="ma-10">Cultural Japanで集約された展示会の情報をまとめました。 <a class="ml-2" href=""></a></div>
      
      <v-card outlined class="my-5" v-for="(collection, key) in collections.collections" :key="key">
        
        <div class="pa-5">
          <h2 class="mb-5">{{collection.label}}</h2>
          <div>{{collection.description}}</div>
          <div class="mt-5">
            <v-chip
              class="ma-2"
            >
              {{$t("access") + ": " + collection.attribution.ja}}
            </v-chip>
            <v-chip
              v-for="(item, key2) in collection.metadata"
              class="ma-2"
            >
              {{$t(item.label.split(":")[1]) + ": " + item.value}}
            </v-chip>
          </div>
          <div class="mt-5 text-right">
            <v-btn class="ma-1" target="_blank" :href="'https://self-museum.cultural.jp/?collection='+collection['@id']" rounded color="primary">Self Museum <v-icon class="ml-1">mdi-open-in-new</v-icon></v-btn>
            <v-btn class="ma-1" target="_blank" :href="'http://www.kanzaki.com/works/2016/pub/image-annotator?u='+collection['@id']" rounded color="primary">Image Annotator <v-icon class="ml-1">mdi-open-in-new</v-icon></v-btn>
            <!-- <v-btn class="ma-1" target="_blank" :href="'https://hi-ut.github.io/100ex/cp/?u='+'https://nakamura196.github.io/cj_ex/v3/'+collection['@id'].split('/collection/')[1]" rounded depressed color="primary">Slide Show</v-btn> -->
          </div>
        </div>

        <iframe loading="lazy" width="100%" frameBorder="0" height="600px" class="my-5" :src="'https://hi-ut.github.io/100ex/cp/?u='+'https://nakamura196.github.io/cj_ex/v3/'+collection['@id'].split('/collection/')[1]"></iframe>
        
      </v-card>
      
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
  },
})
export default class Item extends Vue {
  item: any = {}

  hide: any = process.env.hide

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const response = await $axios.$get(
        process.env.BASE_URL + '/top.json'
      )
      const collections = response

      return { collections }
    }
  }

  baseUrl: any = process.env.BASE_URL

  head() {
    const title = process.env.siteName
    return {
      titleTemplate: null,
      title,
    }
  }
}
</script>
