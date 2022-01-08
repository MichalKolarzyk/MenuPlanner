using MenuPlanner.API.Abstracts;
using MenuPlanner.API.Models.Products;
using MenuPlanner.API.Services.ProductServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpPost]
        [Authorize("Creator")]
        public ActionResult Create([FromBody] CreateProductDto productDto)
        {
            int id = _productService.Create(productDto);
            return Created($"api/product/{id}", null);
        }

        [HttpDelete]
        [Authorize("Creator")]
        public ActionResult Delete([FromQuery] int id)
        {
            _productService.Delete(id);
            return NoContent();
        }


        [HttpGet]
        [Authorize("Viewer")]
        public ActionResult<PagedResponse<ProductDto>> Get(ProductRequest request)
        {
            PagedResponse<ProductDto> productResponse = _productService.Get(request);
            return Ok(productResponse);
        }

        [HttpGet("{id}")]
        [Authorize("Viewer")]
        public ActionResult<ProductDto> Get([FromRoute] int id)
        {
            ProductDto productDto = _productService.Get(id);
            return Ok(productDto);
        }
    }
}
