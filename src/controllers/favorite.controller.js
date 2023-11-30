import Favorite from "../models/favorite.models.js";

export const favorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.params.userId,
    }).populate("product");

    const products = favorites.map((favorite) => favorite.product);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const favoriteAdd = async (req, res) => {
  const { productId, userId } = req.body;
  const newFavorite = new Favorite({ user: userId, product: productId });
  try {
    const savedFavorite = await newFavorite.save();
    const favoriteProduct = await Favorite.findById(savedFavorite._id).populate(
      "product"
    );

    return res.json(favoriteProduct.product);
  } catch (err) {
    console.log("err", err);
    return res.status(400).json(err);
  }
};

export const favoriteDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFavorite = await Favorite.findByIdAndDelete(id);
    if (!deletedFavorite)
      return res.status(404).json({ message: "Favorito no encontrado" });
    res.json({ message: "Favorito eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
