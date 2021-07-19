<template>
  <div>
    <v-container>
      <div class="ma-10">
        Cultural Japanで集約された展示会（{{ total }}件）の情報をまとめました。
        <a
          class="ml-2"
          href="https://ld.cultural.jp/snorql/?query=SELECT+*+WHERE+%7B%0D%0A%09%3Fcho+a+type%3A%E5%B1%95%E8%A6%A7%E4%BC%9A%3B+rdfs%3Alabel+%3Flabel%0D%0A%7D+%0D%0A"
          target="_blank"
          >RDFストア <v-icon class="ml-1">mdi-open-in-new</v-icon></a
        >
        <a
          class="ml-2"
          :href="
            'http://www.kanzaki.com/works/2016/pub/image-annotator?u=' + url
          "
          target="_blank"
          >Image Annotator <v-icon class="ml-1">mdi-open-in-new</v-icon></a
        >
      </div>

      <v-card
        outlined
        class="my-5"
        v-for="(collection, key) in items"
        :key="key"
      >
        <div class="pa-5">
          <h2 class="mb-5">{{ collection.label }}</h2>
          <div>{{ collection.description }}</div>
          <div class="my-5">
            <v-chip class="ma-2">
              {{ $t('access') + ': ' + collection.attribution.ja }}
            </v-chip>
            <v-chip v-for="(item, key2) in collection.metadata" class="ma-2">
              {{ $t(item.label.split(':')[1]) + ': ' + item.value }}
            </v-chip>
          </div>

          </div>

          <!-- loading="lazy" -->
        <iframe
          v-if="key === opened"
          width="100%"
          frameBorder="0"
          height="600px"
          class="my-5"
          :src="
            'https://hi-ut.github.io/100ex/cp/?u=' +
            'https://nakamura196.github.io/cj_ex/v3/' +
            collection['@id'].split('/collection/')[1]
          "
        ></iframe>

        <div class="pa-5">

          <div class="text-right">
            <v-btn class="ma-1" @click="opened = key" rounded color="primary">{{$t(opened !== key ? "Open" : "close")}}</v-btn>

            <v-btn
              class="ma-1"
              target="_blank"
              :href="
                'https://self-museum.cultural.jp/?collection=' +
                collection['@id']
              "
              rounded
              
              >Self Museum <v-icon class="ml-1">mdi-open-in-new</v-icon></v-btn
            >
            <!-- color="primary" -->

            <v-btn
              class="ma-1"
              target="_blank"
              :href="
                'http://www.kanzaki.com/works/2016/pub/image-annotator?u=' +
                collection['@id']
              "
              rounded
              
              >Image Annotator
              <v-icon class="ml-1">mdi-open-in-new</v-icon></v-btn
            >
            <!-- color="primary" -->
            <!-- <v-btn class="ma-1" target="_blank" :href="'https://hi-ut.github.io/100ex/cp/?u='+'https://nakamura196.github.io/cj_ex/v3/'+collection['@id'].split('/collection/')[1]" rounded depressed color="primary">Slide Show</v-btn> -->

            
          </div>
        </div>

        
      </v-card>

      <div class="text-center" v-if="false">
        <v-pagination
          v-model="page"
          :length="length"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Item extends Vue {
  item: any = {}

  hide: any = process.env.hide

  opened: number = -1

  async asyncData({ payload, app, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      const url = process.env.BASE_URL + '/top.json'
      const response = await $axios.$get(url)
      const collections = response

      collections.collections = collections.collections//.slice(10)

      return { url, collections }
    }
  }

  page: number = 1
  perPage: number = 10

  get items() {
    /*
    const from = (this.page - 1) * this.perPage
    return (this as any).collections.collections.slice(
      from,
      from + this.perPage
    )
    */
    return (this as any).collections.collections
  }

  get total() {
    return (this as any).collections.collections.length
  }

  get length() {
    return Math.ceil(this.total / this.perPage)
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
