export const validateProduct = (product) => {
  const errors = {};

  if (!product.name || !product.name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!product.price || Number(product.price) <= 0) {
    errors.price = "El precio debe ser mayor que 0";
  }

  if (!product.category || !product.category.trim()) {
    errors.category = "La categoría es obligatoria";
  }

  if (!product.description || !product.description.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  // Validación dual: en alta exige archivo; en edición acepta mantener product.image
  if (!product.file && !product.image) {
    errors.file = "Debes seleccionar una imagen";
  }

  return errors;
};
