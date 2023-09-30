const fs = require("fs");
const { productService } = require("../services");

/* Create product */
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.product_image = req.file.filename;
        } else {
            throw new Error("Product image is required!");
        }


        const product = await productService.createProduct(reqBody);

        if (!product) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product created successfully",
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* get product list */
const getProductList = async (req, res) => {
    try {
        const productList = await productService.getProductList(req, res);

        res.status(200).json({
            success: true,
            message: "get product list successfully",
            data: productList
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* delete product */
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productExists = await productService.getProductById(productId);
        if (!productExists) {
            throw new Error("Product not found!");
        }

        const deletedProduct = await productService.deleteProduct(productId);
        if (deletedProduct) {
            const filePath = `./public/product_images/${productExists.product_image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product deleted successfully",
            data: deletedProduct,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get product details by id */
const getProductById = async (req, res) => {
    try {
        const getDetails = await productService.getProductById(req.params.productId);
        if (!getDetails) {
            throw new Error("product not found!");
        }

        res.status(200).json({
            success: true,
            message: "product details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update product
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const productExists = await productService.getProductById(productId);
        if (!productExists) {
            throw new Error("product not found!");
        }

        if (req.file) {
            reqBody.product_image = req.file.filename;
        }
        const updatedProduct = await productService.updateProduct(productId, req.body);

        if (updatedProduct) {
            if (req.file) {
                const filePath = `./public/product_images/${productExists.product_image}`;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product details updated successfully!",
            data: updatedProduct,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createProduct,
    getProductList,
    deleteProduct,
    getProductById,
    updateProduct
}