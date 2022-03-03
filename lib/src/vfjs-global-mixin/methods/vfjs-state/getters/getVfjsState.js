import { get } from 'lodash-es';

function getVfjsState(key) {
  if (key) {
    return get(this.vfjsState, key);
  }

  return this.vfjsState;
}

export default getVfjsState;
