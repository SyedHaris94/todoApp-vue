<template>
  <div class="listView">
    <v-card :class="['mx-auto', 'cardView']" width="300" tile>
      <v-list-item-title class="title"> Current Location </v-list-item-title>

      <v-list-item v-if="Object.keys(currentLocation).length">
        <v-icon v-text="'mdi-map-marker-outline'"></v-icon>
        <v-list-item-content>
          <v-list-item-title> {{ currentLocation.address }}</v-list-item-title>
          <v-list-item-subtitle
            >{{ currentLocation.latitude }},
            {{ currentLocation.longitude }}</v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon
            @click="deleteLocation(currentLocation)"
            v-text="'mdi-delete'"
          ></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-card>
    <v-card :class="['mx-auto', 'cardView']" width="300" tile>
      <v-list-item-title class="title"> Previous Location </v-list-item-title>
      <v-list dense>
        <v-list-item-group
          color="primary"
          v-for="(item, i) in location"
          :key="i"
        >
          <v-list-item>
            <v-icon v-text="'mdi-map-marker-outline'"></v-icon>

            <v-list-item-content>
              <v-list-item-title> {{ item.address }}</v-list-item-title>
              <v-list-item-subtitle
                >{{ item.latitude }}, {{ item.longitude }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon
                @click="deleteLocation(item)"
                v-text="'mdi-delete'"
              ></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    location() {
      return this.$store.getters["getLocation"];
    },
    currentLocation() {
      return this.$store.getters["getCurrentLocation"];
    },
  },
  created() {
    console.log("this.location", this.location);
  },
  methods: {
    deleteLocation(item) {
      console.log("-------", item);
      this.$store.dispatch("deleteLocation", item);
    },
  },
};
</script>

<style>
</style>