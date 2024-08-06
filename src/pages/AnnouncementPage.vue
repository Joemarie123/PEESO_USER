<template>
  <div class="announce-card ">
    <q-card class="card ">
      <p class="title text-white">ANNOUNCEMENT</p>
      <q-separator class="q-ma-md" inset />
      <div>
        <q-list
          v-for="user in announcement"
          :key="user.id"
          class="custom-card q-mb-md"
          style="width: 100%; height: auto; margin-bottom: auto"
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar style="margin-left: -10px;">
                <img src="/public/TagumLogo.jpg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label lines="1">{{ user.Title }}</q-item-label>
              <q-item-label caption lines="2">
                {{ getLimitedWords(user.Desc) }}</q-item-label
              >
            </q-item-section>
            <q-item-section side top>
              {{ user.DatePosted }}
            </q-item-section>
          </q-item>

           <q-separator inset="item" />
        </q-list>
      </div>
    </q-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      announcement: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests
    };
  },
  methods: {
    async loadMoreUsers() {
      if (this.loading) return;
      this.loading = true;

      try {
        const response = await axios.get(
          `https://marj28.github.io/job-listing-api/announcement.json`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("Response Data:", response.data); // Log the response data
        // Extract the jobs array from the response
        const newAnnouncement = response.data.announcement;

        this.announcement = this.announcement.concat(newAnnouncement); // Append new jobs to the existing list
        this.page++;
        this.hasMore = newAnnouncement.length === this.limit;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
    getLimitedWords(text) {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length <= 10) return text;
      return words.slice(0, 10).join(" ") + "...";
    },
  },
  created() {
    this.loadMoreUsers();
  },
};
</script>

<style scoped>
.title {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px 10px 10px 10px;
  background-color: #06372c;
}
.announce-card {
  max-width: 95%;
  margin: auto;
  margin-top: 2%;
  border-radius: 5px;
  overflow: hidden;
}
.card{
  /* max-width: ; */
}
</style>

<!-- <template>
  <q-page class="q-pa-md">
    <div
      class="row"
      style="display: flex; justify-content: center; flex-wrap: wrap"
    >
      <div
        class="col-12 q-gutter-md card"
        style="
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        "
      >
        <q-card
          v-for="user in announcement"
          :key="user.id"
          class="custom-card q-mb-md"
          style="width: 100%; height: auto; margin-bottom: auto"
        >

          <q-item>
            <q-item-section>
              <q-item-label>{{ user.Title }}</q-item-label>
              <q-item-label caption>{{ user.DatePosted }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item-section>
            <q-item-label class="q-pa-sm q-ml-sm">
              {{ getLimitedWords(user.Desc) }}
            </q-item-label>
          </q-item-section>
          <q-separator></q-separator>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      announcement: [], // This should be initialized here, not users
      page: 1,
      limit: 10, // Number of records per request
      hasMore: true, // To check if more data is available
      loading: false, // To prevent multiple simultaneous requests
    };
  },
  methods: {
    async loadMoreUsers() {
      if (this.loading) return;
      this.loading = true;

      try {
        const response = await axios.get(
          `https://marj28.github.io/job-listing-api/announcement.json`,
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        console.log("Response Data:", response.data); // Log the response data
        // Extract the jobs array from the response
        const newAnnouncement = response.data.announcement;

        this.announcement = this.announcement.concat(newAnnouncement); // Append new jobs to the existing list
        this.page++;
        this.hasMore = newAnnouncement.length === this.limit;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
    getLimitedWords(text) {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length <= 10) return text;
      return words.slice(0, 10).join(" ") + "...";
    },
  },
  created() {
    this.loadMoreUsers();
  },
};
</script>

<style scoped>
.card {

}
.title {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px 10px 10px 10px;
  background-color: #06372C ;
}
.q-page {
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.q-card {
  margin: 10px 0;
}

.custom-card {
  border: none;
  box-shadow: none;
}
</style> -->
