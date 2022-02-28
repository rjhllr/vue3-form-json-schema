import { set, cloneDeep } from 'lodash-es';

function vfjsHelperApplyFieldModel(key, value) {
  const vfjsModel = this.getVfjsModel();

  const newVfjsModel = cloneDeep(vfjsModel);
  set(newVfjsModel, key, value);

  return newVfjsModel;
}

export default vfjsHelperApplyFieldModel;
