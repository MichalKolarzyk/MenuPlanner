using Microsoft.EntityFrameworkCore.Migrations;

namespace MenuPlanner.API.Migrations
{
    public partial class addTags2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTag_Tag_TagsId",
                table: "RecipeTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tag",
                table: "Tag");

            migrationBuilder.RenameTable(
                name: "Tag",
                newName: "RecipeTags");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RecipeTags",
                table: "RecipeTags",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTag_RecipeTags_TagsId",
                table: "RecipeTag",
                column: "TagsId",
                principalTable: "RecipeTags",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeTag_RecipeTags_TagsId",
                table: "RecipeTag");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RecipeTags",
                table: "RecipeTags");

            migrationBuilder.RenameTable(
                name: "RecipeTags",
                newName: "Tag");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tag",
                table: "Tag",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeTag_Tag_TagsId",
                table: "RecipeTag",
                column: "TagsId",
                principalTable: "Tag",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
