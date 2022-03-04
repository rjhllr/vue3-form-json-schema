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
    lastName: {
      type: 'string',
    },
  }
};
const uiSchema = [
  {
    component: 'div',
    fieldOptions: {
      class: 'row',
    },
    children: [
      {
        component: 'div',
        fieldOptions: {
          class: 'col-12 col-sm-6',
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              class: 'form-group',
            },
            children: [
              {
                component: 'input',
                model: 'firstName',
                fieldOptions: {
                  class: ['form-control'],
                  on: ['input'],
                  attrs: {
                    placeholder: 'First name',
                  },
                },
              },
            ],
          },
        ],
      },
      {
        component: 'div',
        fieldOptions: {
          class: 'col-12 col-sm-6',
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              class: 'form-group',
            },
            children: [
              {
                component: 'input',
                model: 'lastName',
                fieldOptions: {
                  class: ['form-control'],
                  on: ['input'],
                  attrs: {
                    placeholder: 'Last name',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
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

  <div id="example-two" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>Example #2 <small class="text-muted">Nested UI example</small></h3>

    <vue-form-json-schema
      :model="model"
      :schema="schema"
      :ui-schema="uiSchema"
      @update:state="onChangeState"
      @update:validated="onValidated"
      @update:modelValue="onChange"
    >
    </vue-form-json-schema>

    <div>
      <span>This example uses the <a href="https://getbootstrap.com" target="_blank">Bootstrap</a>&nbsp;<code>row</code> and <code>col-*</code>
        classes to create a two-column row for devices with larger screens and a single column row for devices with smaller screens.</span>
      <span>We also wrap each <code>input</code> in a <code>.form-group</code></span>
    </div>

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
