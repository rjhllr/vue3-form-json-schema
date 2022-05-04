<script setup>
import {ref} from 'vue';
import VueFormJsonSchema from 'vue3-form-json-schema';

const model = ref({});
const state = ref({});
const valid = ref(false);

const options = {
  validate: true,
  showValidationErrors: true
}

const schema = {
  type: 'object',
  required: ['firstName'],
  properties: {
    firstName: {
      type: 'string',
      minLength: 3
    },
    lastName: {
      type: 'string',
    }
  }
};
const uiSchema = [
  {
    component: 'input',
    model: 'firstName',
    fieldOptions: {
      class: ['form-control'],
      on: ['input'],
      attrs: {
        placeholder: 'Please enter your first name',
      }
    },
    errorOptions: {
      attrs: {
        style: 'color: red',
      }
    }
  },
  {
    component: 'input',
    model: 'lastName',
    fieldOptions: {
      class: ['form-control'],
      on: ['input'],
      attrs: {
        placeholder: 'Please enter your last name',
      }
    }
  }
];

function onChange(value) {
  // console.log('onChange' + JSON.stringify(value));
  model.value = value;
}

function onChangeState(value) {
  // console.log('onChangeState' + value);
  state.value = value;
}

function onValidated(value) {
  // console.log('onValidated' + value);
  valid.value = value;
}

</script>

<template>

  <h1>vue-form-json-schema</h1>
  <h3>Example #1 <small class="text-muted">Minimal example</small></h3>
  <p class="lead">
    <span>A minimal example showing a simple <code>input</code> field.</span>
  </p>

  <vue-form-json-schema
    :model="model"
    :schema="schema"
    :ui-schema="uiSchema"
    :options="options"
    @update:state="onChangeState"
    @update:validated="onValidated"
    @update:modelValue="onChange"
  ></vue-form-json-schema>

  <!-- alternative version with v-model and without onChange use
  <vue-form-json-schema
      v-model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      :options="options"
      @update:state="onChangeState"
      @update:validated="onValidated"
  ></vue-form-json-schema>
  -->

  <hr />

  <h4>Model</h4>
  <pre>{{model}}</pre>

  <h4>Schema</h4>
  <pre>{{schema}}</pre>

  <h4>UI Schema</h4>
  <pre>{{uiSchema}}</pre>

  <h4>State</h4>
  <pre>{{state}}</pre>

  <h4>Valid</h4>
  <div>{{ valid }}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
