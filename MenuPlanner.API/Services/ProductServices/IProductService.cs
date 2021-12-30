using MenuPlanner.API.Abstracts;
using MenuPlanner.API.Models.Products;

namespace MenuPlanner.API.Services.ProductServices
{
    public interface IProductService
    {
        int Create(CreateProductDto productDto);
        void Delete(int productId);
        PagedResponse<ProductDto> Get(ProductRequest request);
    }
}