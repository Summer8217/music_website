<template>
  <div>
    <v-app-bar 
      color="teal lighten-3" 
      elevation="0"
      elevate-on-scrollnpm
    >

      <v-toolbar-title
        style="width: 430px"
      >
        <a href="/" class="white--text" style="text-decoration: none"><v-icon>mdi-music-circle</v-icon>&nbsp;Noname</a>
      </v-toolbar-title>
      
      <v-spacer />
      <div>
        <a href="/" class="v-btn mr-7" style="fontSize:14px">
          <span>關於我們</span>
        </a>
        <a href="/" class="v-btn mr-7" style="fontSize:14px">
          <span>排行榜</span>
        </a>
        <a href="/" class="v-btn mr-7" style="fontSize:14px">
          <span>Beats創作</span>
        </a>
        <a href="/" class="v-btn mr-7" style="fontSize:14px">
          <span>各類音源</span>
        </a>
      </div>
      <v-divider
        vertical
      ></v-divider>

      <v-btn icon >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            href="/login"
          >
            <v-list-item-title>
              登入
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn v-on="on" icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>
    <div style="background-color:rgb(234, 233, 229)">
      <router-view/>
    </div>
    <v-footer
      :padless="true"
    >
      <v-card
        flat
        tile
        width="100%"
        class="secondary white--text text-center"
      >
        <v-card-text>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
           <v-btn
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>

        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Noname</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data () {
    return {

      isLogin: "",
      account: 0
    }
  },
  /**created() {
    if(localStorage.getItem("accessToken") != null){
      this.isLogin = "登出";
      this.account = 1;
    }
    else{
      this.isLogin = "登入";
      this.account = 0;
    }
  },*/
  methods: {
    /*judge(){
      console.log("in")
      if(localStorage.getItem("accessToken") != null){
        this.isLogin = "登入"
        localStorage.removeItem("accessToken");
        alert("已登出");
        this.$router.push({ name: "Home" });
        location.reload();
      }
      else{
        this.$router.push({ name: "Login" });
      }  
    },
    login(){
      this.$router.push({name:'Login'});
    }*/
  },

}
</script>
