﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webAPI.Models;

namespace webAPI.Migrations
{
    [DbContext(typeof(CarContext))]
    partial class CarContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

            modelBuilder.Entity("webAPI.Models.Employee", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("first_name")
                        .IsRequired();

                    b.Property<string>("last_name")
                        .IsRequired();

                    b.HasKey("id");

                    b.ToTable("Employee");
                });

            modelBuilder.Entity("webAPI.Models.Model", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("model")
                        .IsRequired();

                    b.HasKey("id");

                    b.ToTable("Model");
                });
#pragma warning restore 612, 618
        }
    }
}
