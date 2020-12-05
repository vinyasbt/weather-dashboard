<template>
  <div>
    <div>
      <table class="table" :class="tableClass">
        <thead>
          <slot name="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
          </slot>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <slot :row="item">
              <td
                v-for="(column, index) in columns"
                :key="index"
                v-if="hasValue(item, column)"
              >
                {{ itemValue(item, column) }}
              </td>
              <a @click="userDetails(item)" class="link">View Details</a>
              <!-- <button @click="userDetails(item)">show</button> -->
            </slot>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex justify-content-center" v-if="render">
      <p-modal 
      :close="handleModalClose" 
      v-if="showModal">
        <div class="col-xl-12 col-lg-5 col-md-5">
          <card class="card-user">
            <div slot="image">
              <img src="@/assets/img/background.jpg" alt="..." />
            </div>
            <div>
              <div class="author">
                <img
                  class="avatar border-white"
                  src="https://picsum.photos/200/300"
                  alt="..."
                />
                <h4 class="title">
                  Ozone Team
                  <br />
                  <a href="#">
                    <small>@ozone</small>
                  </a>
                </h4>
              </div>
              <p class="description text-center">
                "I like the way you work it
                <br />
                No diggity <br />
                I wanna bag it up"
              </p>
            </div>
            <hr />
            <div class="text-center">
              <div class="row">
                <div
                  v-for="(info, index) in details"
                  :key="index"
                  :class="getClasses(index)"
                >
                  <h5>
                    {{ info.title }}
                    <br />
                    <small>{{ info.subTitle }}</small>
                  </h5>
                </div>
              </div>
            </div>
          </card>
        </div>
      </p-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "paper-table",
  data() {
    return {
      render: false,
      showModal: false,
      details: [
        {
          title: "id",
          subTitle: "",
        },
        {
          title: "firstname",
          subTitle: "",
        },
        {
          title: "lastname",
          subTitle: "",
        },
        {
          title: "country",
          subTitle: "",
        },
      ],
    };
  },
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  
  methods: {
    handleModalClose(){
      this.showModal=false;
    },
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    userDetails(item) {
      this.render = true;
      this.showModal=true;
      console.log(item);
      this.details[0].subTitle = item.id;
      this.details[1].subTitle = item.firstname;
      this.details[2].subTitle = item.lastname;
      this.details[3].subTitle = item.country;
      console.log(this.details);
    },
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    },
  },
};
</script>
<style>
</style>
