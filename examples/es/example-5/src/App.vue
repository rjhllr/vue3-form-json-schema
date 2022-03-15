<script setup>
import { ref } from 'vue';
import VueFormJsonSchema from 'vue3-form-json-schema';
import PrettyPrint from './helpers/PrettyPrint.vue';

const model = ref({});
const state = ref({});
const valid = ref(false);

const schema = ref({});
const uiSchema = ref([]);

const loaded = ref(false);
const delay = 5000;

function onChange(value) {
  model.value = value;
}

function onChangeState(value) {
  state.value = value;
}

function onValidated(value) {
  valid.value = value;
}


function getUiSchemaFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          component: 'input',
          model: 'firstName',
          fieldOptions: {
            class: ['form-control'],
            on: ['input'],
            attrs: {
              placeholder: 'Please enter your first name',
            },
          },
        },
      ]);
    }, delay);
  });
}

function getSchemaFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        type: 'object',
        required: ['firstName'],
        properties: {
          firstName: {
            type: 'string',
          },
        },
      });
    }, delay);
  });
}

function getDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        firstName: 'Tobias',
      });
    }, delay);
  });
}

function getForm() {
  // Reset properties
  uiSchema.value = [];
  schema.value = [];
  model.value = {};

  // Set form as not loaded
  loaded.value = false;

  // Get the data from the API
  return Promise.all([
    getUiSchemaFromAPI(),
    getSchemaFromAPI(),
    getDataFromAPI(),
  ]).then(([uiSchemaParam, schemaParam, modelParam]) => {
    // Update the form properties with data from the API
    uiSchema.value = uiSchemaParam;
    schema.value = schemaParam;
    model.value = modelParam;

    // Set form as loaded
    loaded.value = true;
  });
}

// implicit onCreated
getForm();

</script>

<template>

  <div>
    <div id="example-five" class="container mb-3 mt-3">
      <h1>vue-form-json-schema</h1>
      <h3>Example #5 <small class="text-muted">Async loading of form</small></h3>
      <p class="lead">
      <span
      >An example to show how to use remotely loaded JSON schema/uiSchema and
        model</span
      >
      </p>

      <vue-form-json-schema
        v-if="this.loaded"
        v-model="model"
        :schema="schema"
        :ui-schema="uiSchema"
        @update:state="onChangeState"
        @update:validated="onValidated"
      >
      </vue-form-json-schema>
      <div class="alert alert-info" v-if="!this.loaded">
        <h4 class="alert-heading">Hang on!</h4>
        <div>Loading form...</div>
      </div>
      <div v-if="this.loaded" class="text-center mt-2">
        <button class="btn btn-primary" @click="getForm">Reload form</button>
      </div>

      <hr />

      <p>
      <span>
        This demo shows how the <code>schema</code>,&nbsp;
        <code>uiSchema</code> and the <code>model</code> can be fetched from an
        API and rendered at a later time.
      </span>
      </p>

      <p>
      <span>
        In this demo we use <code>setTimeout</code> to simulate an asynchronous
        action so that the form can "loaded" after 5 seconds.
      </span>
      </p>

      <hr />

      <h4>Model</h4>
      <pretty-print :value="model"></pretty-print>

      <h4>Schema</h4>
      <pretty-print :value="schema"></pretty-print>

      <h4>UI Schema</h4>
      <pretty-print :value="uiSchema"></pretty-print>

      <h4>State</h4>
      <pretty-print :value="state"></pretty-print>

      <h4>Valid</h4>
      <div>{{ valid }}</div>
    </div>
  </div>

</template>

<style>
</style>
