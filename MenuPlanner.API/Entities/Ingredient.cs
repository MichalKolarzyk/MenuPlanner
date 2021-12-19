namespace MenuPlanner.API.Entities
{
    public class Ingredient
    {
        public int Id { get; set; }
        public float Quantity { get; set; }

        public int ProductId { get; set; }
        public virtual Product Product { get; set; }
        public int DishId { get; set; }
        public virtual Dish Dish { get; set; }
    }
}