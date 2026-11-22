import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import {
  createProduct,
  getProductById,
  updateProduct,
} from "../../../services/productsService";
import { Spinner } from "../../Spinner/Spinner";
import "./ProductFormContainer.css";

export const ProductFormContainer = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [initialLoading, setInitialLoading] = useState(isEdit);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "bajos",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (!isEdit) return;

    setInitialLoading(true);
    getProductById(id)
      .then((data) => {
        if (!data) {
          toast.error("El producto que intentás editar no existe");
          navigate("/admin/dashboard", { replace: true });
          return;
        }
        setProduct({
          name: data.name || "",
          price: data.price ?? "",
          category: data.category || "bajos",
          description: data.description || "",
          image: data.image || "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error al cargar los datos del producto");
      })
      .finally(() => setInitialLoading(false));
  }, [id, isEdit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      let imageUrl = product.image;
      if (file) {
        imageUrl = await uploadImage(file);
      }

      const productData = {
        name: product.name.trim(),
        price: Number(product.price),
        category: product.category.trim(),
        description: product.description.trim(),
        image: imageUrl,
      };

      if (isEdit) {
        await updateProduct(id, productData);
        toast.success("Producto actualizado correctamente");
        navigate("/admin/dashboard", { replace: true });
      } else {
        const createdId = await createProduct(productData);
        setProduct({
          name: "",
          price: "",
          category: "bajos",
          description: "",
          image: "",
        });
        setFile(null);
        toast.success("Producto creado en Firestore");
        navigate(`/admin/products/success/${createdId}`, { replace: true });
      }
    } catch (error) {
      console.error(error);
      setErrors({ general: error.message || "Error al guardar el producto" });
      toast.error("No se pudo guardar el producto");
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return <Spinner text="Cargando producto para editar..." />;
  }

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      isEdit={isEdit}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
