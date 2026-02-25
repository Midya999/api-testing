const getAllProducts =async(req, res) => {
    res.status(200).json({message: "Get all products"});


};
const getAllProductsTesting =async(req, res) => {
    res.status(200).json({message: "Get all products testing"});
}; 

module.exports = {getAllProducts, getAllProductsTesting};