using FluentValidation;
using FluentValidation.AspNetCore;
using MenuPlanner.API.Entities;
using MenuPlanner.API.Middleware;
using MenuPlanner.API.Models.Dishes;
using MenuPlanner.API.Models.DishTypes;
using MenuPlanner.API.Models.Products;
using MenuPlanner.API.Models.Role;
using MenuPlanner.API.Models.Tags;
using MenuPlanner.API.Models.Units;
using MenuPlanner.API.Models.Users;
using MenuPlanner.API.Services;
using MenuPlanner.API.Services.AccountServices;
using MenuPlanner.API.Services.DishTypeServices;
using MenuPlanner.API.Services.FavoriteRecipeServices;
using MenuPlanner.API.Services.HttpContextServices;
using MenuPlanner.API.Services.IngredientServices;
using MenuPlanner.API.Services.InvitationServices;
using MenuPlanner.API.Services.ProductServices;
using MenuPlanner.API.Services.TrustedUserServices;
using MenuPlanner.API.Validators;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MenuPlanner.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;


        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            AuthenticationSettings authenticationSettings = new AuthenticationSettings();
            Configuration.GetSection("Authentication").Bind(authenticationSettings);
            services.AddAuthentication(option =>
            {
                option.DefaultAuthenticateScheme = "Bearer";
                option.DefaultScheme = "Bearer";
                option.DefaultChallengeScheme = "Bearer";
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = authenticationSettings.JwtIssuer,
                    ValidAudience = authenticationSettings.JwtIssuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(authenticationSettings.JwtKey)),
                };
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("Admin", builder => builder.RequireRole("Admin"));
                options.AddPolicy("Creator", builder => builder.RequireRole("Admin","Creator"));
                options.AddPolicy("Viewer", builder => builder.RequireRole("Admin","Creator","Viewer"));
            });

            services.AddAuthorization();
            services.AddDbContext<MenuPlannerDbContext>();
            services.AddAutoMapper(this.GetType().Assembly);
            services.AddScoped<IDishService, DishService>();
            services.AddScoped<IRecipeService, RecipeService>();
            services.AddScoped<IStepService, StepService>();
            services.AddScoped<IUnitService, UnitService>();
            services.AddScoped<ITagService, TagSevice>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IAccountService, AccountService>();
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IIngredientService, IngredientService>();
            services.AddScoped<IInvitationService, InvitationService>();
            services.AddScoped<IHttpContextService, HttpContextService>();
            services.AddScoped<ITrustedUserService, TrustedUserService>();
            services.AddScoped<IFavoriteRecipeService, FavoriteRecipeService>();
            services.AddScoped<IDishTypeService, DishTypeService>();

            services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();

            services.AddSingleton(authenticationSettings);

            services.AddScoped<IValidator<CreateRoleDto>, CreateRoleDtoValidator>();
            services.AddScoped<IValidator<CreateTagDto>, CreateTagDtoValidator>();
            services.AddScoped<IValidator<CreateUserDto>, RegisterUserDtoValidator>();
            services.AddScoped<IValidator<CreateProductDto>, CreateProductDtoValidator>();
            services.AddScoped<IValidator<CreateUnitDto>, CreateUnitDtoValidator>();
            services.AddScoped<IValidator<CreateDishTypeDto>, CreateDishTypeDtoValidator>();
            services.AddScoped<IValidator<CreateDishDto>, CreateDishDtoValidator>();

            services.AddScoped<ErrorHandlingMiddleware>();

            services.AddControllers();
            services.AddFluentValidation();
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "ToDo API",
                    Description = "An ASP.NET Core Web API for managing ToDo items",
                    TermsOfService = new Uri("https://example.com/terms"),
                    Contact = new OpenApiContact
                    {
                        Name = "Example Contact",
                        Url = new Uri("https://example.com/contact")
                    },
                    License = new OpenApiLicense
                    {
                        Name = "Example License",
                        Url = new Uri("https://example.com/license")
                    }

                });
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the Bearer scheme. \r\n\r\n 
                      Enter 'Bearer' [space] and then your token in the text input below.
                      \r\n\r\nExample: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });
                var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
            });

            services.AddHttpContextAccessor();
            services.AddRazorPages();
            services.AddCors(options =>
                options.AddPolicy("FrontEndClient", builder => builder.AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowAnyOrigin()
            ));

        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors("FrontEndClient");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseMiddleware<ErrorHandlingMiddleware>();

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseAuthentication();

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Menu planner API");
            });


            app.UseRouting();

            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
