import { get } from 'lodash-es';

function getVfjsModel(key) {
  if (!key || key === true) {
    return this.vfjsModel;
  }

  return get(this.vfjsModel, key);
}

export default getVfjsModel;
