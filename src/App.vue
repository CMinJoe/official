<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
    

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-hover v-slot="{ hover }">
            <v-list-item-icon :elevation="hover ? 12 : 2">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-hover>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      shift
      fixed
      class="mb"
    >
      <v-btn
        fab
        dark
        small
        :color="color"
        to='./Home'
        >
        <span>首頁</span>
        <v-icon>mdi-home-city</v-icon>
      </v-btn>

      <v-btn
      :color="color"
      fab
      to='./TodoList'
      >
      <span>待辦清單</span>
        <v-icon>mdi-format-list-checks</v-icon>
      </v-btn>

      <v-btn
      fab
      :color="color"
      to='./Member'
      >
      <span>增刪</span>
        <v-icon>mdi-account-details</v-icon>
      </v-btn>

      <v-btn
      fab
      :color="color"
      to='./Taiwan'
      >
      <span>天氣預報</span>
        <v-icon>mdi-weather-partly-snowy-rainy</v-icon>
      </v-btn>
      

    </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home-city", to: "./Home" },
        {
          title: "todo-list",
          icon: "mdi-format-list-checks",
          to: "./TodoList",
        },
        { title: "Member", icon: "mdi-account-details ", to: "./Member" },
        {
          title: "weather",
          icon: "mdi-weather-partly-snowy-rainy",
          to: "./Taiwan",
        },
      ],
      mini: true,
      value: 1,
    };
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
};
</script>

<style scoped>
.v-icon {
  transition: transform 1s ease-in-out;
}
.v-icon:hover {
  transform: scale(1.2);
}

hr {
  margin-top: 0;
  margin-bottom: 0;
}

.v-btn{
  border-radius: 30px !important;
}
a{
  border-bottom:none;
}
</style>
