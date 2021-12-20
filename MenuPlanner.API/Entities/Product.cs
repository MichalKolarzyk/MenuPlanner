namespace MenuPlanner.API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public int UnitId { get; set; }
        public string Name { get; set; }
        public virtual Unit Unit { get; set; }
        public float KcalPerUnit { get; set; }
    }
}