<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            Pharma 2.0
          </v-list-item-title>
          <v-list-item-subtitle>
            The New Pharma Tech
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
        <v-list shaped>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        {title: "Home", icon: 'mdi-home', link: "/"},
        {title: "Add", icon: 'mdi-plus', link: "/add"},
        {title: "Scan", icon: 'mdi-qrcode-scan', link: "/scan"},
        {title: "Catalogue", icon: 'mdi-pill', link: "/catalogue"}
      ]
    }),
  }
</script>