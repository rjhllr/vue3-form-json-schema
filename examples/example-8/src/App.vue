<script setup>
import {ref} from 'vue';
import VueFormJsonSchema from 'vue3-form-json-schema';
import PrettyPrint from './helpers/PrettyPrint.vue';

const model = ref({});
const state = ref({});
const valid = ref(false);

let options = ref({
  castToSchemaType: true
});

const submitted = ref(false);
const success = ref(false);

const schema = {
  type: 'object',
  required: ['firstName', 'lastName', 'age'],
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    age: {
      type: 'number',
      minimum: 18,
    }
  }
};
const uiSchema = [
  // Input for firstName
  {
    component: 'div',
    fieldOptions: {
      class: ['form-group'],
    },
    children: [
      {
        component: 'label',
        fieldOptions: {
          attrs: {
            for: 'first-name',
          },
          class: ['font-weight-bold'],
          domProps: {
            innerHTML: 'First name',
          },
        },
      },
      {
        component: 'input',
        model: 'firstName',
        errorOptions: {
          class: ['is-invalid'],
        },
        fieldOptions: {
          attrs: {
            id: 'first-name',
          },
          class: ['form-control'],
          on: ['input'],
        },
      },
      {
        component: 'small',
        fieldOptions: {
          class: ['text-muted'],
          domProps: {
            innerHTML: 'Please enter your first name',
          },
        },
      },
    ],
  },
  // Validation messages for firstName
  {
    component: 'transition',
    fieldOptions: {
      props: {
        name: 'fade',
      },
    },
    children: [
      {
        component: 'div',
        model: 'firstName',
        errorHandler: true,
        displayOptions: {
          model: 'firstName',
          schema: {
            not: {
              type: 'string',
            },
          },
        },
        fieldOptions: {
          class: ['alert alert-danger'],
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              domProps: {
                innerHTML: 'This field is required',
              },
            },
          },
        ],
      },
    ],
  },
  // Input for lastName
  {
    component: 'div',
    fieldOptions: {
      class: ['form-group'],
    },
    children: [
      {
        component: 'label',
        fieldOptions: {
          attrs: {
            for: 'last-name',
          },
          class: ['font-weight-bold'],
          domProps: {
            innerHTML: 'Last name',
          },
        },
      },
      {
        component: 'input',
        model: 'lastName',
        errorOptions: {
          class: ['is-invalid'],
        },
        fieldOptions: {
          attrs: {
            id: 'last-name',
          },
          class: ['form-control'],
          on: ['input'],
        },
      },
      {
        component: 'small',
        fieldOptions: {
          class: ['text-muted'],
          domProps: {
            innerHTML: 'Please enter your last name',
          },
        },
      },
    ],
  },
  // Validation messages for lastName
  {
    component: 'transition',
    fieldOptions: {
      props: {
        name: 'fade',
      },
    },
    children: [
      {
        component: 'div',
        model: 'lastName',
        errorHandler: true,
        displayOptions: {
          model: 'lastName',
          schema: {
            not: {
              type: 'string',
            },
          },
        },
        fieldOptions: {
          class: ['alert alert-danger'],
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              domProps: {
                innerHTML: 'This field is required',
              },
            },
          },
        ],
      },
    ],
  },
  // Input for age
  {
    component: 'div',
    fieldOptions: {
      class: ['form-group'],
    },
    children: [
      {
        component: 'label',
        fieldOptions: {
          attrs: {
            for: 'age',
          },
          class: ['font-weight-bold'],
          domProps: {
            innerHTML: 'Age',
          },
        },
      },
      {
        component: 'input',
        model: 'age',
        errorOptions: {
          class: ['is-invalid'],
        },
        fieldOptions: {
          attrs: {
            id: 'age',
            type: 'number',
            min: 0,
          },
          class: ['form-control'],
          on: ['input'],
        },
      },
      {
        component: 'small',
        fieldOptions: {
          class: ['text-muted'],
          domProps: {
            innerHTML: 'Please confirm that you are over 18 years of age',
          },
        },
      },
    ],
  },
  // Validation messages for age
  {
    component: 'transition',
    fieldOptions: {
      props: {
        name: 'fade',
        mode: 'out-in',
      },
    },
    children: [
      // Validation message shown when value is empty
      {
        component: 'div',
        model: 'age',
        errorHandler: true,
        displayOptions: {
          model: 'age',
          schema: {
            not: {
              type: 'number',
            },
          },
        },
        fieldOptions: {
          class: ['alert alert-danger'],
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              domProps: {
                innerHTML: 'This field is required',
              },
            },
          },
        ],
      },
      // Validation message when value < 18
      {
        component: 'div',
        model: 'age',
        errorHandler: true,
        displayOptions: {
          model: 'age',
          schema: {
            type: 'number',
            not: {
              minimum: 18,
            },
          },
        },
        fieldOptions: {
          class: ['alert alert-danger'],
        },
        children: [
          {
            component: 'div',
            fieldOptions: {
              domProps: {
                innerHTML: 'You must be 18 or older to submit this form',
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
      class: ['form-group'],
    },
    children: [
      {
        component: 'div',
        fieldOptions: {
          class: ['font-weight-bold'],
          domProps: {
            innerHTML: 'Message (optional)',
          },
        },
      },
      {
        component: 'textarea',
        model: 'message',
        fieldOptions: {
          attrs: {
            placeholder: 'Type a message here...',
          },
          class: ['form-control'],
          on: ['input'],
        },
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


function getDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        firstName: 'Firstname',
        lastName: 'Lastname',
        age: 18,
      });
    }, 1000);
  });
}

function onSubmit(e) {
  e.preventDefault();

  submitted.value = true;
  options.value = {
    ...options.value,
    showValidationErrors: true,
  };

  if (valid.value) {
    success.value = true;
  }
}

getDataFromAPI().then((response) => {
  model.value = response;
});

</script>

<template>


  <div id="example-eight" class="container mb-3 mt-3">
    <h1>vue-form-json-schema</h1>
    <h3>
      Example #8
      <small class="text-muted">Registration form example using <a href="https://composition-api.vuejs.org/">Vue's composition API</a></small>
    </h3>

    <form @submit="onSubmit" novalidate>
      <vue-form-json-schema
        v-model="model"
        :schema="schema"
        :ui-schema="uiSchema"
        :options="options"
        @update:state="onChangeState"
        @update:validated="onValidated"
      ></vue-form-json-schema>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit form</button>
      </div>

      <transition name="fade" mode="out-in">
        <div
          v-if="submitted && success"
          class="alert alert-success"
          key="success"
        >Form submitted successfully!</div>
        <div
          v-else-if="
          submitted &&
            !success &&
            state.vfjsErrors &&
            state.vfjsErrors.length > 0
        "
          class="alert alert-danger"
          key="has-errors"
        >Form has errors, please fix and resubmit!</div>
        <div
          v-else-if="
          submitted &&
            !success &&
            state.vfjsErrors &&
            state.vfjsErrors.length === 0
        "
          class="alert alert-success"
          key="has-no-errors"
        >Form errors have been corrected. You can now resubmit the form.</div>
      </transition>
    </form>

    <hr>

    <h4>Model</h4>
    <pretty-print :value="model"></pretty-print>

    <h4>Options</h4>
    <pretty-print :value="options"></pretty-print>

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

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
