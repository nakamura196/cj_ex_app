<template>
  <div>
    <v-container>
      <div class="ma-10">
        Cultural Japanで集約された展示会の情報をまとめました。
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

      <v-row>
        <v-col cols="12" sm="3" v-for="(collection, key) in items">
          <v-card outlined class="my-5" v-if="confMap[collection.label]">
            <div class="grey lighten-2 pa-2">
              <v-img
                contain
                max-height="150"
                style="height: 150px"
                width="100%"
                class="white"
                :src="confMap[collection.label].image"
              />
            </div>
            <!-- class="grey lighten-2" -->
            <div class="pa-5">
              <h3 class="mb-5">
                <nuxt-link
                  :to="
                    localePath({
                      name: 'list',
                      query: { id: collection.label },
                    })
                  "
                  >{{ confMap[collection.label].label }}</nuxt-link
                >
              </h3>
              <div>
                <v-chip class="ma-2">
                  {{ collection.collections.length + '件' }}
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
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

  async asyncData({ payload, app, query, $axios }: any) {
    if (payload) {
      return { item: payload }
    } else {
      //console.log({query})

      let url = 'https://api.jsonbin.io/b/6164afa29548541c29c1c651/1' //process.env.BASE_URL + '/top.json'
      if (query.u) {
        url = query.u
      }

      const response = await $axios.$get(url)
      const collections = response

      collections.collections = collections.collections //.slice(10)

      //console.log({collections})

      return { url, collections }
    }
  }

  confMap: any = {
    metmuseum: {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Metropolitan_Museum_of_Art_Logo.svg/220px-The_Metropolitan_Museum_of_Art_Logo.svg.png',
      label: 'メトロポリタン美術館',
    },
    minneapolis: {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Mia_minneapolis_logo.png/220px-Mia_minneapolis_logo.png',
      label: 'ミネアポリス美術館',
    },
    najda: {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/National_Archives_of_Japan_logo.svg/220px-National_Archives_of_Japan_logo.svg.png',
      label: '国立公文書館',
    },
    cleveland: {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cleveland_Museum_of_Art_logo.png/220px-Cleveland_Museum_of_Art_logo.png',
      label: 'クリーヴランド美術館',
    },
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
