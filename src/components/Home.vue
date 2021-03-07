<template>
  <div>
    <v-img
      :aspect-ratio="16/6"
      width = 1800
      src="../assets/1.jpg"
    >
      <v-row
        no-gutters
        class=""
        style="margin-top:250px"
        align="center"
        justify="center"
      >
        <div class="display-1 white--text pl-5 pr-5"><strong>音樂創作生成工具</strong></div>
        
      </v-row>
      <v-row 
        no-gutters
        style="margin-bottom:250px"
        align="center"
        justify="center"
      >
        <div class="white--text pt-6 pl-5 pr-5">使用人工智慧來輔助您創作音樂</div>
      </v-row>
    </v-img>
    <div
      class="mt-10 text-uppercase text-center"
    >
      <span class="bg-white px-3 d-inline-block font-weight-bold">New Release </span>
    </div>
    <div class="mt-1 ml-16 mr-16">
      <v-divider class="mb-3" ></v-divider>
    </div>
    <div class="">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="8"
          md="6"
        >
          <v-card>
            <v-card
              class="pt-2 pb-2 pl-4"
            >
              <v-toolbar-title>熱門排行</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-card>

            <v-list two-line>
              <template v-for="(item, index) in items">
                
                <v-divider
                  v-if="item.divider"
                  :key="index"
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                  ripple
                >
                  <v-list-item-avatar tile size="100">
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row
      class="mt-9"
      justify="center"
      no-gutters
    >
      <v-col sm="1">
        <div
          class="text-uppercase text-right"
        >
          <span class="bg-white px-3 font-weight-bold">大家都聽</span>
        </div>
      </v-col >
      <v-col sm="8">
        <v-divider class="mt-3" ></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col lg="7">
        <v-carousel hide-delimiters style="box-shadow: 0px 0px">
          <v-carousel-item v-for="i in 2" :key="i">
            <v-layout row>
              <v-flex xs4 v-for="j in 3" :key="j" pl-1 pr-1>
                <v-card class="mr-5">
                  <v-img
                    :src="require('../assets/CD_carousel/CD'+(j*(i+2))+'.jpg')"
                    aspect-ratio="0.8"
                  ></v-img>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Card {{i}}-{{j}}</h3>
                      <div> Card text </div>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    
    <v-row
      class="mb-1"
      justify="center"
      no-gutters
    >
      <v-col sm="1">
        <div
          class="text-uppercase text-right"
        >
          <span class="bg-white px-3 font-weight-bold">音源推薦</span>
        </div>
      </v-col >
      <v-col sm="8">
        <v-divider class="mt-3" ></v-divider>
      </v-col>
    </v-row>
    <v-row 
      justify="center"
      no-gutters
    >
      <v-col sm="3">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
          >  
            <v-img
              class=""
              
              src="../assets/CD/CD0.jpg"
            >
              <div
                v-if="hover"
                class="d-flex orange darken-2"
                style="height: 100%; opacity:0.5;"
                
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="flex-column justify-center align-center"
                    
                    
                    style="margin-left:8rem"
                  >
                    <div  
                      v-if="hover"
                      
                    >
                      <p class="text-center" style="font-size:40px">
                        電音
                      </p>
                    </div>

                    <div class="align-center" v-if="hover">
                      <v-btn
                        icon
                      >
                        <v-icon
                          x-large
                          :class="{ 'show-btns': hover }"
                        >
                          mdi-play
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="3">
        <v-hover v-slot="{ hover }">
          <v-card
            
            class="justify-center align-center"
          >  
            <v-img
              class=""
              
              src="../assets/CD/CD1.jpg"
            >
              <div
                v-if="hover"
                class="d-flex orange darken-2"
                style="height: 100%; opacity:0.5;"
                
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="flex-column"
                    justify="center"
                    align="center"
                  >
                    <v-col>
                      <v-spacer></v-spacer>
                    </v-col>
                    <v-col>
                      <div  
                        v-if="hover"
                        
                      >
                        <p class="text-center" style="font-size:40px">
                          搖滾
                        </p>
                      </div>

                      <div class="align-center" v-if="hover">
                        <v-btn
                          icon
                        >
                          <v-icon
                            x-large
                            :class="{ 'show-btns': hover }"
                          >
                            mdi-play
                          </v-icon>
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-title>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row 
      justify="center"
      no-gutters
    >
      <v-col sm="3">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
          >  
            <v-img
              class=""
              
              src="../assets/CD/CD2.jpg"
            >
              <div
                v-if="hover"
                class="d-flex orange darken-2"
                style="height: 100%; opacity:0.5;"
                
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="flex-column justify-center align-center"
                    
                    
                    style="margin-left:8rem"
                  >
                    <div  
                      v-if="hover"
                      
                    >
                      <p class="text-center" style="font-size:40px">
                        流行
                      </p>
                    </div>

                    <div class="align-center" v-if="hover">
                      <v-btn
                        icon
                      >
                        <v-icon
                          x-large
                          :class="{ 'show-btns': hover }"
                        >
                          mdi-play
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
      <v-col sm="3">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
          >  
            <v-img
              class=""
              
              src="../assets/CD/CD3.jpg"
            >
              <div
                v-if="hover"
                class="d-flex orange darken-2"
                style="height: 100%; opacity:0.5;"
                
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="flex-column justify-center align-center"
                    
                    
                    style="margin-left:8rem"
                  >
                    <div  
                      v-if="hover"
                      
                    >
                      <p class="text-center" style="font-size:40px">
                        藍調
                      </p>
                    </div>

                    <div class="align-center" v-if="hover">
                      <v-btn
                        icon
                      >
                        <v-icon
                          x-large
                          :class="{ 'show-btns': hover }"
                        >
                          mdi-play
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    
    

  </div>
</template>

<script>

  
  
  export default {
    name: 'Home',
    data () {
      return {
        items: [  
          {
            avatar: require("../assets/CD/CD0.jpg"),
            title: 'Meeting @ Noon',
            subtitle:
              `<span class="font-weight-bold">Spike Lee</span> &mdash; I'll be in your neighborhood`,
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD1.jpg"),
            title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
            subtitle:
              '<span class="font-weight-bold">to Operations support</span> &mdash; Wish I could come.',
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD2.jpg"),
            title: 'Yes yes',
            subtitle:
              '<span class="font-weight-bold">Bella</span> &mdash; Do you have Paris recommendations',
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD3.jpg"),
            title: 'Dinner tonight?',
            subtitle:
              '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD4.jpg"),
            title: 'So long',
            subtitle:
              '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD5.jpg"),
            title: 'Breakfast?',
            subtitle:
              '<span class="font-weight-bold">LaToya</span> &mdash; Do you want to hang out?',
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD6.jpg"),
            title:
              'Winter Porridge <span class="grey--text text--lighten-1"></span>',
            subtitle:
              '<span class="font-weight-bold">cc: Daniel</span> &mdash; Tell me more...',
          },
          { divider: true },
          {
            avatar: require("../assets/CD/CD7.jpg"),
            title: 'Oui oui',
            subtitle:
              '<span class="font-weight-bold">Nancy</span> &mdash; Do you see what time it is?',
          },
        ],
        itest: [
          {
            link: require("../assets/CD/CD1.jpg"),
          },
          {
            link: require("../assets/CD/CD2.jpg"),
          },
          {
            link: require("../assets/CD/CD3.jpg"),
          },
          {
            link: require("../assets/CD/CD4.jpg"),
          },
          {
            link: require("../assets/CD/CD5.jpg"),
          },
          {
            link: require("../assets/CD/CD6.jpg"),
          },
          {
            link: require("../assets/CD/CD7.jpg"),
          },
          {
            link: require("../assets/CD/CD8.jpg"),
          },
        ]
      }
    },
    
  }
</script>

<style lang="scss">

.carousel-header {
  position: relative;
  line-height: 28px;

  &:before {
    position: absolute;
    top: 14px;
    right: 0;
    left: 0;
    content: "";
    background: #000;
    height: 1px;
  }
  > span {
    position: relative;
    font-size: 17px;
  }
  > p {
    font-size: 12px;
    color: #666;
  }
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.v-card.on-hover {
  backdrop-filter:blur(1rem);
 }
 
</style>
