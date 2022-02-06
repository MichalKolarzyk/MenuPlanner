using Microsoft.EntityFrameworkCore.Migrations;

namespace MenuPlanner.API.Migrations
{
    public partial class DishTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DishTypeId",
                table: "Dishes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "DishTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DishTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Dishes_DishTypeId",
                table: "Dishes",
                column: "DishTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Dishes_DishTypes_DishTypeId",
                table: "Dishes",
                column: "DishTypeId",
                principalTable: "DishTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dishes_DishTypes_DishTypeId",
                table: "Dishes");

            migrationBuilder.DropTable(
                name: "DishTypes");

            migrationBuilder.DropIndex(
                name: "IX_Dishes_DishTypeId",
                table: "Dishes");

            migrationBuilder.DropColumn(
                name: "DishTypeId",
                table: "Dishes");
        }
    }
}
