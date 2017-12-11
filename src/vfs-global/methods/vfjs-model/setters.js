import {
  VFS_EVENT_FIELD_MODEL_UPDATE,
  VFS_EVENT_MODEL_UPDATED,
} from '../../../constants';

const vfjsModelSetters = {
  setVfjsFieldModel(value, key) {
    return new Promise((resolve, reject) => {
      this.vfjsBus.$emit(VFS_EVENT_FIELD_MODEL_UPDATE, {
        key: key || this.vfjsFieldModelKey,
        value,
        cb: (errors) => {
          if (errors && errors.length > 0) {
            reject(errors);
          }

          resolve();
        },
      });
    });
  },
  setVfjsModel(model) {
    this.vfjsModel = Object.assign({}, this.getVfjsModel(), model);
    this.vfjsBus.$emit(VFS_EVENT_MODEL_UPDATED, this.getVfjsModel());
  },
};

export default vfjsModelSetters;
