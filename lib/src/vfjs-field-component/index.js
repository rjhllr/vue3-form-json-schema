import vfjsFieldMixin from '../vfjs-field-mixin';
import vfjsHelperCreateElement from '../vfjs-global-mixin/methods/vfjs-helpers/vfjsHelperCreateElement';
import { resolveComponent } from 'vue';

const VueFormJsonSchemaFieldComponent = {
  name: 'vue-form-json-schema-field-component',
  mixins: [vfjsFieldMixin],
  render() {
    return vfjsHelperCreateElement(
      resolveComponent(this.vfjsComponent),
      {
        ...this.getVfjsAttributes(),
      },
      this.getVfjsChildren(),
    );
  },
};

export default VueFormJsonSchemaFieldComponent;
