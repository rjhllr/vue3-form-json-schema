function vfjsHelperGetRelativeModel(model, parentModel) {
  if (model) {
    return String(model).substring(parentModel.length + 1);
  }

  return model;
}

export default vfjsHelperGetRelativeModel;
