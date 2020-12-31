﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webAPI.Models;

namespace webAPI.Migrations
{
    [DbContext(typeof(CarContext))]
    [Migration("20201230163221_Initail2")]
    partial class Initail2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("webAPI.Models.Car", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("comment")
                        .HasColumnType("varchar(100)");

                    b.Property<int>("delivered");

                    b.Property<int>("engine_size");

                    b.Property<DateTime>("fix_date");

                    b.Property<bool>("four_on_four");

                    b.Property<DateTime>("last_updated");

                    b.Property<int>("model");

                    b.Property<int>("plate_id");

                    b.Property<int>("year");

                    b.HasKey("id");

                    b.ToTable("Car");
                });
#pragma warning restore 612, 618
        }
    }
}
