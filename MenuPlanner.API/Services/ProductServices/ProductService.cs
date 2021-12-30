using AutoMapper;
using MenuPlanner.API.Abstracts;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Exceptions;
using MenuPlanner.API.Models.Products;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MenuPlanner.API.Services.ProductServices
{
    public class ProductService : IProductService
    {
        private readonly MenuPlannerDbContext _context;
        private readonly IMapper _mapper;

        public ProductService(MenuPlannerDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }



        public int Create(CreateProductDto productDto)
        {
            Product product = _mapper.Map<Product>(productDto);

            _context.Add(product);
            _context.SaveChanges();

            return product.Id;
        }

        public void Delete(int productId)
        {
            Product product = _context.Products.FirstOrDefault(p => p.Id == productId);

            if (product == null)
                throw new NotFoundException("Product not found.");

            _context.Products.Remove(product);
            _context.SaveChanges();
        }

        public PagedResponse<ProductDto> Get(ProductRequest request)
        {
            var baseQuery = _context.Products
                .Include(p => p.Unit)
                .Where(p => p.Name.ToLower().Contains(request.SearchPhrase));

            var products = baseQuery
                .Skip(request.PageSize * (request.PageNumber - 1))
                .Take(request.PageSize)
                .ToList();

            int totalItemCount = baseQuery.Count();
            var productDtos = _mapper.Map<List<ProductDto>>(products);

            var response = new PagedResponse<ProductDto>(productDtos, totalItemCount, request.PageSize, request.PageNumber);
            return response;
        }

    }
}
