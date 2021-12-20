namespace MenuPlanner.API.Entities
{
    public class Step
    {
        public int Id { get; set; }
        public int Position { get; set; }
        public string Description { get; set; }
        public int RecipeId { get; set; }
        public virtual Recipe Recipe { get; set; }
    }
}