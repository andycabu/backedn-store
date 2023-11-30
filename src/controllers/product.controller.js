import Product from "../models/product.models.js";

export const products = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

export const productAdd = async (req, res) => {
  const { title, category, description, price, rating } = req.body;

  try {
    const existingTitle = await Product.findOne({
      title,
    });

    if (existingTitle) {
      return res.status(400).json({ error: ["El producto ya existe "] });
    }
    const newProduct = new Product({
      title,
      category,
      description,
      price,
      rating,
    });
    const savedProduct = await newProduct.save();

    return res.json(savedProduct);
  } catch (err) {
    console.log("err", err);
    return res.status(400).json(err);
  }
};

export const productDelete = async (req, res) => {
  const { id } = req.params;

  try {
    const productFound = await Product.findById(id);
    if (!productFound) {
      return res.status(400).json({ message: "El producto no existe" });
    }
    const productDelete = await Product.findByIdAndDelete(id);
    return res.json(productDelete);
  } catch (err) {
    console.log("err", err);
    return res.status(400).json(err);
  }
};

export const productUpdate = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const productUpdate = await Product.findByIdAndUpdate(id, data, {
      new: true,
    });

    return res.json(productUpdate);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
