<template>
 <v-row class="my-16">
    <v-col cols="10" md="4" offset="1" sm="8" offset-sm="2" offset-md="4">
        <form>
     <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
        <v-text-field
      v-model="subject"
      :error-messages="subjectErrors"
      label="Subject"
      required
      @input="$v.subject.$touch()"
      @blur="$v.subject.$touch()"
    ></v-text-field>
        <v-text-field
      v-model="text"
      :error-messages="textErrors"
      label="Text"
      required
      @input="$v.text.$touch()"
      @blur="$v.text.$touch()"
    ></v-text-field>
        <v-text-field
      v-model="content"
      :error-messages="contentErrors"
      label="Content"
      required
      @input="$v.content.$touch()"
      @blur="$v.content.$touch()"
    ></v-text-field>
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</v-col>
</v-row>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
    },
    data: () => ({
      name: '',
      email: '',
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
      ],
    }),
    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    //   subjectErrors () {
    //     const errors = []
    //     if (!this.$v.subject.$dirty) return errors
    //     !this.$v.subject.subject && errors.push('Must be valid subject')
    //     !this.$v.subject.required && errors.push('subject is required')
    //     return errors
    //   },
    //   textErrors () {
    //     const errors = []
    //     if (!this.$v.text.$dirty) return errors
    //     !this.$v.text.text && errors.push('Must be valid text')
    //     !this.$v.text.required && errors.push('text is required')
    //     return errors
    //   },
    //   contentErrors () {
    //     const errors = []
    //     if (!this.$v.content.$dirty) return errors
    //     !this.$v.content.content && errors.push('Must be valid content')
    //     !this.$v.content.required && errors.push('content is required')
    //     return errors
    //   },
    },
    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.subject = ''
        this.text = ''
        this.content = ''
      },
    },
  }
</script>


