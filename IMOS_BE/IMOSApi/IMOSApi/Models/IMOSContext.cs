﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace IMOSApi.Models
{
    public partial class IMOSContext : DbContext
    {
        public IMOSContext()
        {
        }

        public IMOSContext(DbContextOptions<IMOSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Attendence> Attendences { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Constructionsite> Constructionsites { get; set; }
        public virtual DbSet<Delivery> Deliveries { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Equipment> Equipment { get; set; }
        public virtual DbSet<Equipmentcheck> Equipmentchecks { get; set; }
        public virtual DbSet<Incident> Incidents { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<Material> Materials { get; set; }
        public virtual DbSet<Materialtype> Materialtypes { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Projectemployee> Projectemployees { get; set; }
        public virtual DbSet<Projectequipment> Projectequipments { get; set; }
        public virtual DbSet<Projectmaterial> Projectmaterials { get; set; }
        public virtual DbSet<Projectmaterialrequest> Projectmaterialrequests { get; set; }
        public virtual DbSet<Projectmaterialrequestlist> Projectmaterialrequestlists { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<Safetyfilechecklist> Safetyfilechecklists { get; set; }
        public virtual DbSet<Safetyfileitem> Safetyfileitems { get; set; }
        public virtual DbSet<Stocktake> Stocktakes { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }
        public virtual DbSet<Supplierorderline> Supplierorderlines { get; set; }
        public virtual DbSet<Suppliertype> Suppliertypes { get; set; }
        public virtual DbSet<Task> Tasks { get; set; }
        public virtual DbSet<Taskmaterial> Taskmaterials { get; set; }
        public virtual DbSet<Tasktype> Tasktypes { get; set; }
        public virtual DbSet<Urgencylevel> Urgencylevels { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Userincident> Userincidents { get; set; }
        public virtual DbSet<Userrole> Userroles { get; set; }
        public virtual DbSet<Vehicle> Vehicles { get; set; }
        public virtual DbSet<VehicleCheckIn> VehicleCheckIns { get; set; }
        public virtual DbSet<VehicleCheckOut> VehicleCheckOuts { get; set; }
        public virtual DbSet<Vehicletype> Vehicletypes { get; set; }
        public virtual DbSet<Warehouse> Warehouses { get; set; }
        public virtual DbSet<Warehouseequipment> Warehouseequipments { get; set; }
        public virtual DbSet<Warehouseequipmentcheck> Warehouseequipmentchecks { get; set; }
        public virtual DbSet<Warehouseequipmentwriteoff> Warehouseequipmentwriteoffs { get; set; }
        public virtual DbSet<Warehousematerial> Warehousematerials { get; set; }
        public virtual DbSet<Warehousematerialstocktake> Warehousematerialstocktakes { get; set; }
        public virtual DbSet<Warehousematerialwriteoff> Warehousematerialwriteoffs { get; set; }
        public virtual DbSet<Writeoff> Writeoffs { get; set; }
        public virtual DbSet<Writeoffreason> Writeoffreasons { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.;Database=IMOS;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Attendence>(entity =>
            {
                entity.ToTable("ATTENDENCE");

                entity.HasIndex(e => new { e.EmployeeId, e.ProjectId }, "MARKS_REGISTER_FK");

                entity.Property(e => e.AttendenceId).HasColumnName("ATTENDENCE_ID");

                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasColumnName("DATE");

                entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.Present).HasColumnName("PRESENT");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.HasOne(d => d.Projectemployee)
                    .WithMany(p => p.Attendences)
                    .HasForeignKey(d => new { d.EmployeeId, d.ProjectId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ATTENDEN_MARKS_REG_PROJECTE");
            });

            modelBuilder.Entity<Client>(entity =>
            {
                entity.ToTable("CLIENT");

                entity.Property(e => e.ClientId).HasColumnName("CLIENT_ID");

                entity.Property(e => e.Clientname)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("CLIENTNAME");

                entity.Property(e => e.Contactnumber)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("CONTACTNUMBER");
            });

            modelBuilder.Entity<Constructionsite>(entity =>
            {
                entity.ToTable("CONSTRUCTIONSITE");

                entity.Property(e => e.ConstructionsiteId).HasColumnName("CONSTRUCTIONSITE_ID");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");
            });

            modelBuilder.Entity<Delivery>(entity =>
            {
                entity.ToTable("DELIVERY");

                entity.HasIndex(e => new { e.SupplierId, e.MaterialId }, "IS_SCHEDULED_FK");

                entity.HasIndex(e => e.ProjectId, "SCHEDULES_FK");

                entity.Property(e => e.DeliveryId).HasColumnName("DELIVERY_ID");

                entity.Property(e => e.Date)
                    .HasColumnType("datetime")
                    .HasColumnName("DATE");

                entity.Property(e => e.Deliverynote)
                    .HasColumnType("image")
                    .HasColumnName("DELIVERYNOTE");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.SupplierId).HasColumnName("SUPPLIER_ID");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Deliveries)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DELIVERY_SCHEDULES_PROJECT");

                entity.HasOne(d => d.Supplierorderline)
                    .WithMany(p => p.Deliveries)
                    .HasForeignKey(d => new { d.SupplierId, d.MaterialId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DELIVERY_IS_SCHEDU_SUPPLIER");
            });

            modelBuilder.Entity<Document>(entity =>
            {
                entity.ToTable("Document");

                entity.Property(e => e.DocumentId).HasColumnName("Document_ID");

                entity.Property(e => e.EmployeeId).HasColumnName("Employee_ID");

                entity.Property(e => e.FileUrl).IsRequired();

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Documents)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Documnt__Employe__634EBE90");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("EMPLOYEE");

                entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.Contactnumber)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("CONTACTNUMBER");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Equipment>(entity =>
            {
                entity.ToTable("EQUIPMENT");

                entity.Property(e => e.EquipmentId).HasColumnName("EQUIPMENT_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Equipmentcheck>(entity =>
            {
                entity.ToTable("EQUIPMENTCHECK");

                entity.HasIndex(e => e.UserId, "RECORDS_FK");

                entity.Property(e => e.EquipmentcheckId).HasColumnName("EQUIPMENTCHECK_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Equipmentchecks)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EQUIPMEN_RECORDS_USER");
            });

            modelBuilder.Entity<Incident>(entity =>
            {
                entity.ToTable("INCIDENT");

                entity.Property(e => e.IncidentId).HasColumnName("INCIDENT_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");
            });

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.ToTable("INVOICE");

                entity.HasIndex(e => e.TaskId, "IS_FOR_FK");

                entity.HasIndex(e => e.ProjectId, "IS_SENT_FK");

                entity.Property(e => e.InvoiceId).HasColumnName("INVOICE_ID");

                entity.Property(e => e.Amount).HasColumnName("AMOUNT");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.TaskId).HasColumnName("TASK_ID");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_INVOICE_IS_SENT_PROJECT");

                entity.HasOne(d => d.Task)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.TaskId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_INVOICE_IS_FOR_TASK");
            });

            modelBuilder.Entity<Material>(entity =>
            {
                entity.ToTable("MATERIAL");

                entity.HasIndex(e => e.MaterialtypeId, "___________________________________________HAS___FK");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");

                entity.Property(e => e.MaterialtypeId).HasColumnName("MATERIALTYPE_ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.SupplierId).HasColumnName("Supplier_Id");

                entity.HasOne(d => d.Materialtype)
                    .WithMany(p => p.Materials)
                    .HasForeignKey(d => d.MaterialtypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MATERIAL_MATERIALTYPE");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.Materials)
                    .HasForeignKey(d => d.SupplierId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MATERIAL_SUPPLIER");
            });

            modelBuilder.Entity<Materialtype>(entity =>
            {
                entity.ToTable("MATERIALTYPE");

                entity.Property(e => e.MaterialtypeId).HasColumnName("MATERIALTYPE_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Project>(entity =>
            {
                entity.ToTable("PROJECT");

                entity.HasIndex(e => e.InitialrequestId, "IS_MADE_FK");

                entity.HasIndex(e => e.ConstructionsiteId, "__HAS_FK");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.ConstructionsiteId).HasColumnName("CONSTRUCTIONSITE_ID");

                entity.Property(e => e.InitialrequestId).HasColumnName("INITIALREQUEST_ID");

                entity.Property(e => e.Safetyfilecreated).HasColumnName("SAFETYFILECREATED");

                entity.HasOne(d => d.Constructionsite)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.ConstructionsiteId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECT___HAS_CONSTRUC");

                entity.HasOne(d => d.Initialrequest)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.InitialrequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECT_IS_MADE_REQUEST");
            });

            modelBuilder.Entity<Projectemployee>(entity =>
            {
                entity.HasKey(e => new { e.EmployeeId, e.ProjectId });

                entity.ToTable("PROJECTEMPLOYEE");

                entity.HasIndex(e => e.ProjectId, "HAS___FK");

                entity.HasIndex(e => e.EmployeeId, "PART__OF_FK");

                entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Projectemployees)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTE_PART__OF_EMPLOYEE");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Projectemployees)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTE_HAS___PROJECT");
            });

            modelBuilder.Entity<Projectequipment>(entity =>
            {
                entity.HasKey(e => new { e.ProjectId, e.EquipmentId });

                entity.ToTable("PROJECTEQUIPMENT");

                entity.HasIndex(e => e.EquipmentId, "____HAS_FK");

                entity.HasIndex(e => e.ProjectId, "________________________________HAS_FK");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.EquipmentId).HasColumnName("EQUIPMENT_ID");

                entity.HasOne(d => d.Equipment)
                    .WithMany(p => p.Projectequipments)
                    .HasForeignKey(d => d.EquipmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTE_____HAS_EQUIPMEN");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Projectequipments)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTE___________PROJECT");
            });

            modelBuilder.Entity<Projectmaterial>(entity =>
            {
                entity.HasKey(e => new { e.ProjectId, e.MaterialId });

                entity.ToTable("PROJECTMATERIAL");

                entity.HasIndex(e => e.ProjectId, "IS_ALLOCATED_FK");

                entity.HasIndex(e => e.MaterialId, "IS_TAKEN_FK");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Material)
                    .WithMany(p => p.Projectmaterials)
                    .HasForeignKey(d => d.MaterialId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTM_IS_TAKEN_MATERIAL");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Projectmaterials)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTM_IS_ALLOCA_PROJECT");
            });

            modelBuilder.Entity<Projectmaterialrequest>(entity =>
            {
                entity.ToTable("PROJECTMATERIALREQUEST");

                entity.HasIndex(e => e.UrgencylevelId, "HAVE_FK");

                entity.HasIndex(e => e.ProjectId, "MUST_HAVE_FK");

                entity.Property(e => e.ProjectmaterialrequestId).HasColumnName("PROJECTMATERIALREQUEST_ID");

                entity.Property(e => e.Fulfillmenttype).HasColumnName("FULFILLMENTTYPE");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.UrgencylevelId).HasColumnName("URGENCYLEVEL_ID");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Projectmaterialrequests)
                    .HasForeignKey(d => d.ProjectId)
                    .HasConstraintName("FK_PROJECTM_MUST_HAVE_PROJECT");

                entity.HasOne(d => d.Urgencylevel)
                    .WithMany(p => p.Projectmaterialrequests)
                    .HasForeignKey(d => d.UrgencylevelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTM_HAVE_URGENCYL");
            });

            modelBuilder.Entity<Projectmaterialrequestlist>(entity =>
            {
                entity.HasKey(e => new { e.MaterialId, e.ProjectmaterialrequestId });

                entity.ToTable("PROJECTMATERIALREQUESTLIST");

                entity.HasIndex(e => e.ProjectmaterialrequestId, "APPROVAL_FK");

                entity.HasIndex(e => e.MaterialId, "IS_IN_FK");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.ProjectmaterialrequestId).HasColumnName("PROJECTMATERIALREQUEST_ID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Material)
                    .WithMany(p => p.Projectmaterialrequestlists)
                    .HasForeignKey(d => d.MaterialId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTM_IS_IN_MATERIAL");

                entity.HasOne(d => d.Projectmaterialrequest)
                    .WithMany(p => p.Projectmaterialrequestlists)
                    .HasForeignKey(d => d.ProjectmaterialrequestId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PROJECTM_APPROVAL_PROJECTM");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                entity.ToTable("REQUEST");

                entity.HasIndex(e => e.ClientId, "MAKES_FK");

                entity.Property(e => e.RequestId).HasColumnName("REQUEST_ID");

                entity.Property(e => e.ClientId).HasColumnName("CLIENT_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.ClientId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_REQUEST_MAKES_CLIENT");
            });

            modelBuilder.Entity<Safetyfilechecklist>(entity =>
            {
                entity.HasKey(e => new { e.ProjectId, e.SafetyfileitemId });

                entity.ToTable("SAFETYFILECHECKLIST");

                entity.HasIndex(e => e.SafetyfileitemId, "ATTACH_FK");

                entity.HasIndex(e => e.ProjectId, "KEEPS_FK");

                entity.Property(e => e.ProjectId).HasColumnName("PROJECT_ID");

                entity.Property(e => e.SafetyfileitemId).HasColumnName("SAFETYFILEITEM_ID");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.Safetyfilechecklists)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SAFETYFI_KEEPS_PROJECT");

                entity.HasOne(d => d.Safetyfileitem)
                    .WithMany(p => p.Safetyfilechecklists)
                    .HasForeignKey(d => d.SafetyfileitemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SAFETYFI_ATTACH_SAFETYFI");
            });

            modelBuilder.Entity<Safetyfileitem>(entity =>
            {
                entity.ToTable("SAFETYFILEITEM");

                entity.Property(e => e.SafetyfileitemId).HasColumnName("SAFETYFILEITEM_ID");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Stocktake>(entity =>
            {
                entity.ToTable("STOCKTAKE");

                entity.HasIndex(e => e.UserId, "CONDUCTS_FK");

                entity.Property(e => e.StocktakeId).HasColumnName("STOCKTAKE_ID");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Stocktakes)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_STOCKTAK_CONDUCTS_USER");
            });

            modelBuilder.Entity<Supplier>(entity =>
            {
                entity.ToTable("SUPPLIER");

                entity.HasIndex(e => e.SuppliertypeId, "_______HAS_FK");

                entity.Property(e => e.SupplierId).HasColumnName("SUPPLIER_ID");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.Contactnumber)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("CONTACTNUMBER");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("EMAIL");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");

                entity.Property(e => e.SuppliertypeId).HasColumnName("SUPPLIERTYPE_ID");

                entity.HasOne(d => d.Suppliertype)
                    .WithMany(p => p.Suppliers)
                    .HasForeignKey(d => d.SuppliertypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SUPPLIER________HA_SUPPLIER");
            });

            modelBuilder.Entity<Supplierorderline>(entity =>
            {
                entity.HasKey(e => new { e.SupplierId, e.MaterialId });

                entity.ToTable("SUPPLIERORDERLINE");

                entity.HasIndex(e => e.SupplierId, "SUPPLIES_FK");

                entity.HasIndex(e => e.MaterialId, "________________HAS_FK");

                entity.Property(e => e.SupplierId).HasColumnName("SUPPLIER_ID");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("ADDRESS");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Material)
                    .WithMany(p => p.Supplierorderlines)
                    .HasForeignKey(d => d.MaterialId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SUPPLIER___________MATERIAL");

                entity.HasOne(d => d.Supplier)
                    .WithMany(p => p.Supplierorderlines)
                    .HasForeignKey(d => d.SupplierId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SUPPLIER_SUPPLIES_SUPPLIER");
            });

            modelBuilder.Entity<Suppliertype>(entity =>
            {
                entity.ToTable("SUPPLIERTYPE");

                entity.Property(e => e.SuppliertypeId).HasColumnName("SUPPLIERTYPE_ID");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Task>(entity =>
            {
                entity.ToTable("TASK");

                entity.HasIndex(e => e.UserId, "CREATED_FK");

                entity.HasIndex(e => e.Tasktype, "_______________________HAS_FK");

                entity.Property(e => e.TaskId).HasColumnName("TASK_ID");

                entity.Property(e => e.Enddate)
                    .HasColumnType("datetime")
                    .HasColumnName("ENDDATE");

                entity.Property(e => e.Qnapassed).HasColumnName("QNAPASSED");

                entity.Property(e => e.Startdate)
                    .HasColumnType("datetime")
                    .HasColumnName("STARTDATE");

                entity.Property(e => e.Tasktype).HasColumnName("TASKTYPE");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.HasOne(d => d.TasktypeNavigation)
                    .WithMany(p => p.Tasks)
                    .HasForeignKey(d => d.Tasktype)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TASK___________TASKTYPE");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Tasks)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TASK_CREATED_USER");
            });

            modelBuilder.Entity<Taskmaterial>(entity =>
            {
                entity.HasKey(e => new { e.MaterialId, e.TaskId });

                entity.ToTable("TASKMATERIAL");

                entity.HasIndex(e => e.TaskId, "_HAS_FK");

                entity.HasIndex(e => e.MaterialId, "______________HAS_FK");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.TaskId).HasColumnName("TASK_ID");

                entity.HasOne(d => d.Material)
                    .WithMany(p => p.Taskmaterials)
                    .HasForeignKey(d => d.MaterialId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TASKMATE___________MATERIAL");

                entity.HasOne(d => d.Task)
                    .WithMany(p => p.Taskmaterials)
                    .HasForeignKey(d => d.TaskId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TASKMATE__HAS_TASK");
            });

            modelBuilder.Entity<Tasktype>(entity =>
            {
                entity.HasKey(e => e.Tasktype1);

                entity.ToTable("TASKTYPE");

                entity.Property(e => e.Tasktype1).HasColumnName("TASKTYPE");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");
            });

            modelBuilder.Entity<Urgencylevel>(entity =>
            {
                entity.ToTable("URGENCYLEVEL");

                entity.Property(e => e.UrgencylevelId).HasColumnName("URGENCYLEVEL_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");

                entity.Property(e => e.Level)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("LEVEL");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USER");

                entity.HasIndex(e => e.UserroleId, "IS_ASSIGNED_FK");

                entity.HasIndex(e => e.EmployeeId, "IS_FK");

                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("USER_ID");

                entity.Property(e => e.EmployeeId).HasColumnName("EMPLOYEE_ID");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("USERNAME");

                entity.Property(e => e.Userpassword)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("USERPASSWORD");

                entity.Property(e => e.UserroleId).HasColumnName("USERROLE_ID");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.EmployeeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USER_IS_EMPLOYEE");

                entity.HasOne(d => d.Userrole)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.UserroleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USER_IS_ASSIGN_USERROLE");
            });

            modelBuilder.Entity<Userincident>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.IncidentId });

                entity.ToTable("USERINCIDENT");

                entity.HasIndex(e => e.UserId, "___HAS_FK");

                entity.HasIndex(e => e.IncidentId, "__________________________HAS_FK");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.IncidentId).HasColumnName("INCIDENT_ID");

                entity.HasOne(d => d.Incident)
                    .WithMany(p => p.Userincidents)
                    .HasForeignKey(d => d.IncidentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USERINCI___________INCIDENT");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Userincidents)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_USERINCI____HAS_USER");
            });

            modelBuilder.Entity<Userrole>(entity =>
            {
                entity.ToTable("USERROLE");

                entity.Property(e => e.UserroleId).HasColumnName("USERROLE_ID");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("VEHICLE");

                entity.HasIndex(e => e.UserId, "ASSIGN_FK");

                entity.HasIndex(e => e.VehicletypeId, "HAS__FK");

                entity.Property(e => e.VehicleId).HasColumnName("VEHICLE_ID");

                entity.Property(e => e.Color)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.DatePurchased).HasColumnType("date");

                entity.Property(e => e.LastServiced).HasColumnType("date");

                entity.Property(e => e.Make)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.VehicletypeId).HasColumnName("VEHICLETYPE_ID");

                entity.Property(e => e.Year).HasColumnType("date");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_VEHICLE_ASSIGN_USER");

                entity.HasOne(d => d.Vehicletype)
                    .WithMany(p => p.Vehicles)
                    .HasForeignKey(d => d.VehicletypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VEHICLE_HAS__VEHICLET");
            });

            modelBuilder.Entity<VehicleCheckIn>(entity =>
            {
                entity.HasKey(e => e.CheckInId);

                entity.ToTable("VehicleCheckIn");

                entity.Property(e => e.CheckInId).HasColumnName("CheckIn_Id");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle_Id");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.VehicleCheckIns)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VehicleCheckIn_VEHICLE");
            });

            modelBuilder.Entity<VehicleCheckOut>(entity =>
            {
                entity.HasKey(e => e.CheckOutId);

                entity.ToTable("VehicleCheckOut");

                entity.Property(e => e.CheckOutId).HasColumnName("CheckOut_Id");

                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle_Id");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.VehicleCheckOuts)
                    .HasForeignKey(d => d.VehicleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VehicleCheckOut_VEHICLE");
            });

            modelBuilder.Entity<Vehicletype>(entity =>
            {
                entity.ToTable("VEHICLETYPE");

                entity.Property(e => e.VehicletypeId).HasColumnName("VEHICLETYPE_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");
            });

            modelBuilder.Entity<Warehouse>(entity =>
            {
                entity.ToTable("WAREHOUSE");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.Property(e => e.Location)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("LOCATION");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("NAME");
            });

            modelBuilder.Entity<Warehouseequipment>(entity =>
            {
                entity.HasKey(e => new { e.WarehouseId, e.EquipmentId });

                entity.ToTable("WAREHOUSEEQUIPMENT");

                entity.HasIndex(e => e.EquipmentId, "IS_AT_FK");

                entity.HasIndex(e => e.WarehouseId, "_CONTAINS_FK");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.Property(e => e.EquipmentId).HasColumnName("EQUIPMENT_ID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Equipment)
                    .WithMany(p => p.Warehouseequipments)
                    .HasForeignKey(d => d.EquipmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_IS_AT_EQUIPMEN");

                entity.HasOne(d => d.Warehouse)
                    .WithMany(p => p.Warehouseequipments)
                    .HasForeignKey(d => d.WarehouseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS__CONTAINS_WAREHOUS");
            });

            modelBuilder.Entity<Warehouseequipmentcheck>(entity =>
            {
                entity.HasKey(e => new { e.EquipmentcheckId, e.WarehouseId, e.EquipmentId });

                entity.ToTable("WAREHOUSEEQUIPMENTCHECK");

                entity.HasIndex(e => new { e.WarehouseId, e.EquipmentId }, "CAN___HAVE_FK");

                entity.HasIndex(e => e.EquipmentcheckId, "HAS____________________FK");

                entity.Property(e => e.EquipmentcheckId)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("EQUIPMENTCHECK_ID");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.Property(e => e.EquipmentId).HasColumnName("EQUIPMENT_ID");

                entity.Property(e => e.CheckIn)
                    .HasColumnType("datetime")
                    .HasColumnName("CHECK_IN");

                entity.Property(e => e.CheckOut)
                    .HasColumnType("datetime")
                    .HasColumnName("CHECK_OUT");

                entity.HasOne(d => d.Equipmentcheck)
                    .WithMany(p => p.Warehouseequipmentchecks)
                    .HasForeignKey(d => d.EquipmentcheckId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_HAS_______EQUIPMEN");

                entity.HasOne(d => d.Warehouseequipment)
                    .WithMany(p => p.Warehouseequipmentchecks)
                    .HasForeignKey(d => new { d.WarehouseId, d.EquipmentId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_CAN___HAV_WAREHOUS");
            });

            modelBuilder.Entity<Warehouseequipmentwriteoff>(entity =>
            {
                entity.HasKey(e => new { e.WriteoffId, e.WarehouseId, e.EquipmentId });

                entity.ToTable("WAREHOUSEEQUIPMENTWRITEOFF");

                entity.HasIndex(e => e.WriteoffId, "CAN_CONTAIN_FK");

                entity.HasIndex(e => new { e.WarehouseId, e.EquipmentId }, "CAN_HAVE_FK");

                entity.Property(e => e.WriteoffId).HasColumnName("WRITEOFF_ID");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.Property(e => e.EquipmentId).HasColumnName("EQUIPMENT_ID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Writeoff)
                    .WithMany(p => p.Warehouseequipmentwriteoffs)
                    .HasForeignKey(d => d.WriteoffId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_CAN_CONTA_WRITEOFF");

                entity.HasOne(d => d.Warehouseequipment)
                    .WithMany(p => p.Warehouseequipmentwriteoffs)
                    .HasForeignKey(d => new { d.WarehouseId, d.EquipmentId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_CAN_HAVE_WAREHOUS");
            });

            modelBuilder.Entity<Warehousematerial>(entity =>
            {
                entity.HasKey(e => new { e.MaterialId, e.WarehouseId });

                entity.ToTable("WAREHOUSEMATERIAL");

                entity.HasIndex(e => e.MaterialId, "CAN_BE_FK");

                entity.HasIndex(e => e.WarehouseId, "_CONTAIN_FK");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Material)
                    .WithMany(p => p.Warehousematerials)
                    .HasForeignKey(d => d.MaterialId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_CAN_BE_MATERIAL");

                entity.HasOne(d => d.Warehouse)
                    .WithMany(p => p.Warehousematerials)
                    .HasForeignKey(d => d.WarehouseId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS__CONTAIN_WAREHOUS");
            });

            modelBuilder.Entity<Warehousematerialstocktake>(entity =>
            {
                entity.HasKey(e => new { e.StocktakeId, e.MaterialId, e.WarehouseId });

                entity.ToTable("WAREHOUSEMATERIALSTOCKTAKE");

                entity.HasIndex(e => e.StocktakeId, "IS_CONDUCTED_FK");

                entity.HasIndex(e => new { e.MaterialId, e.WarehouseId }, "UNDERGOES_FK");

                entity.Property(e => e.StocktakeId).HasColumnName("STOCKTAKE_ID");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.Property(e => e.Quantity).HasColumnName("QUANTITY");

                entity.HasOne(d => d.Stocktake)
                    .WithMany(p => p.Warehousematerialstocktakes)
                    .HasForeignKey(d => d.StocktakeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_IS_CONDUC_STOCKTAK");

                entity.HasOne(d => d.Warehousematerial)
                    .WithMany(p => p.Warehousematerialstocktakes)
                    .HasForeignKey(d => new { d.MaterialId, d.WarehouseId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_UNDERGOES_WAREHOUS");
            });

            modelBuilder.Entity<Warehousematerialwriteoff>(entity =>
            {
                entity.HasKey(e => new { e.WriteoffId, e.MaterialId, e.WarehouseId });

                entity.ToTable("WAREHOUSEMATERIALWRITEOFF");

                entity.HasIndex(e => e.WriteoffId, "HAVE__________FK");

                entity.HasIndex(e => new { e.MaterialId, e.WarehouseId }, "HAVE______________________FK");

                entity.Property(e => e.WriteoffId).HasColumnName("WRITEOFF_ID");

                entity.Property(e => e.MaterialId).HasColumnName("MATERIAL_ID");

                entity.Property(e => e.WarehouseId).HasColumnName("WAREHOUSE_ID");

                entity.HasOne(d => d.Writeoff)
                    .WithMany(p => p.Warehousematerialwriteoffs)
                    .HasForeignKey(d => d.WriteoffId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_HAVE______WRITEOFF");

                entity.HasOne(d => d.Warehousematerial)
                    .WithMany(p => p.Warehousematerialwriteoffs)
                    .HasForeignKey(d => new { d.MaterialId, d.WarehouseId })
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WAREHOUS_HAVE______WAREHOUS");
            });

            modelBuilder.Entity<Writeoff>(entity =>
            {
                entity.ToTable("WRITEOFF");

                entity.HasIndex(e => e.WriteoffreasonId, "HAS_TO_FK");

                entity.Property(e => e.WriteoffId).HasColumnName("WRITEOFF_ID");

                entity.Property(e => e.WriteoffreasonId).HasColumnName("WRITEOFFREASON_ID");

                entity.HasOne(d => d.Writeoffreason)
                    .WithMany(p => p.Writeoffs)
                    .HasForeignKey(d => d.WriteoffreasonId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WRITEOFF_HAS_TO_WRITEOFF");
            });

            modelBuilder.Entity<Writeoffreason>(entity =>
            {
                entity.ToTable("WRITEOFFREASON");

                entity.Property(e => e.WriteoffreasonId).HasColumnName("WRITEOFFREASON_ID");

                entity.Property(e => e.Description)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("DESCRIPTION");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
