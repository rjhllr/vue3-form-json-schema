<script setup>
import {ref} from 'vue';
import VueFormJsonSchema from 'vue3-form-json-schema';
import PrettyPrint from './helpers/PrettyPrint.vue';

const model = ref({});
const state = ref({});
const valid = ref(false);

const schema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
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
      },
    },
  }
];

function onChange(value) {
  model.value = value;
}

function onChangeState(value) {
  state.value = value;
}

function onValidated(value) {
  valid.value = value;
}

</script>

<template>

  <div id="example-one" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #1 <small class="text-muted">Minimal example</small></h3>
    <p class="lead">
      <span>A minimal example showing a simple <code>input</code> field.</span>
    </p>

    <vue-form-json-schema
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      @update:state="onChangeState"
      @update:validated="onValidated"
      @update:modelValue="onChange"
    >
    </vue-form-json-schema>

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

</template>

<style>
</style>
