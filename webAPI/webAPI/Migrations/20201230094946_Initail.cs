using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webAPI.Migrations
{
    public partial class Initail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    plate_id = table.Column<int>(nullable: false),
                    model = table.Column<int>(nullable: false),
                    four_on_four = table.Column<bool>(nullable: false),
                    engine_size = table.Column<int>(nullable: false),
                    year = table.Column<int>(nullable: false),
                    comment = table.Column<string>(type: "varchar(100)", nullable: true),
                    delivered = table.Column<int>(nullable: false),
                    fix_date = table.Column<DateTime>(nullable: false),
                    last_updated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Car");
        }
    }
}
