<template>

  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title class="headingStyled" >Users</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search for users"
          single-line
          hide-details
      ></v-text-field>

        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :loading="loading5"
              :disabled="loading5"
              color="blue-grey"
              class="ma-2 white--text"
              fab
              @click="loader = 'loading5'"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>

          <v-card>

            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.firstname"
                      label="Firstname"
                      :rules="nameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.lastname"
                      label="Lastname"
                      :rules="nameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                      :rules="emailRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                      v-model="editedItem.role"
                      :items="roles"
                      label="Select Role"
                      :rules="roleRules"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                  </v-col>
                </v-row>
              </v-container>
                </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this user?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">No</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Yes</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>

  export default {
    data: () => ({
      search: '',
      valid: true,
      loader: null,
      loading: false,
      loading5: false,
      dialog: false,
      dialogDelete: false,
      select: null,
      nameRules: [
        v => !!v || 'Field is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
        v => /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/.test(v) || 'Field must be valid'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      roleRules: [
        v => !!v || 'Field is required'
      ],
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        { text: 'Firstname', value: 'firstname' },
        { text: 'Lastname', value: 'lastname' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      users: [],
      roles: [],
      editedIndex: -1,
      editedItem: {
        firstname: '',
        lastname: '',
        email: '',
        Role: ''
      },
      defaultItem: {
        firstname: '',
        lastname: '',
        email: '',
        Role: 'Staff'
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New User' : 'Edit User'
      }
    },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      validate () {
        return this.$refs.form.validate()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      initialize () {
        this.users = [
          {
            id: '123',
            firstname: 'Matias',
            lastname: 'Gramkow',
            email: 'Matias_gramkow@hotmail.com',
            role: 'Founder'
          },
          {
            id: '321',
            firstname: 'Søren',
            lastname: 'Gramkow',
            email: 's.gramkow@total-revision.com',
            role: 'Founder'
          },
          {
            id: '312',
            firstname: 'Emilie',
            lastname: 'Lydolph',
            email: 'krumme-line@live.com',
            role: 'Extended Admin'
          },
          {
            id: '231',
            firstname: 'Anette',
            lastname: 'Lydolph',
            email: 'mozart@hotmail.dk',
            role: 'Admin'
          }
        ]
        this.roles = ['Founder', 'Extended Admin', 'Admin', 'Staff']
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.resetValidation()
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        let checkForm = this.validate()
        if (checkForm) {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close()
        }
      }
    }
  }
</script>

<style lang="scss">
@media (max-width:1000px) {
  .headingStyled {
    display: flex;
    padding-right: 20px;
  }
}

</style>