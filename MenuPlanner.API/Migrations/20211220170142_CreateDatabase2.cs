using Microsoft.EntityFrameworkCore.Migrations;

namespace MenuPlanner.API.Migrations
{
    public partial class CreateDatabase2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Dishes_UserId",
                table: "Dishes",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Dishes_Users_UserId",
                table: "Dishes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dishes_Users_UserId",
                table: "Dishes");

            migrationBuilder.DropIndex(
                name: "IX_Dishes_UserId",
                table: "Dishes");
        }
    }
}
