/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2014                    */
/* Created on:     4/22/2022 9:06:56 PM                         */
/*==============================================================*/
create database IMOS
go 
use IMOS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('ATTENDENCE') and o.name = 'FK_ATTENDEN_MARKS_REG_PROJECTE')
alter table ATTENDENCE
   drop constraint FK_ATTENDEN_MARKS_REG_PROJECTE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DELIVERY') and o.name = 'FK_DELIVERY_IS_SCHEDU_SUPPLIER')
alter table DELIVERY
   drop constraint FK_DELIVERY_IS_SCHEDU_SUPPLIER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DELIVERY') and o.name = 'FK_DELIVERY_SCHEDULES_PROJECT')
alter table DELIVERY
   drop constraint FK_DELIVERY_SCHEDULES_PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('EMPLOYEE') and o.name = 'FK_EMPLOYEE_HAS_______DOCUMENT')
alter table EMPLOYEE
   drop constraint FK_EMPLOYEE_HAS_______DOCUMENT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('EQUIPMENTCHECK') and o.name = 'FK_EQUIPMEN_RECORDS_USER')
alter table EQUIPMENTCHECK
   drop constraint FK_EQUIPMEN_RECORDS_USER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('INVOICE') and o.name = 'FK_INVOICE_IS_FOR_TASK')
alter table INVOICE
   drop constraint FK_INVOICE_IS_FOR_TASK
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('INVOICE') and o.name = 'FK_INVOICE_IS_SENT_PROJECT')
alter table INVOICE
   drop constraint FK_INVOICE_IS_SENT_PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MATERIAL') and o.name = 'FK_MATERIAL___________MATERIAL')
alter table MATERIAL
   drop constraint FK_MATERIAL___________MATERIAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECT') and o.name = 'FK_PROJECT_IS_MADE_REQUEST')
alter table PROJECT
   drop constraint FK_PROJECT_IS_MADE_REQUEST
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECT') and o.name = 'FK_PROJECT___HAS_CONSTRUC')
alter table PROJECT
   drop constraint FK_PROJECT___HAS_CONSTRUC
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTEMPLOYEE') and o.name = 'FK_PROJECTE_HAS___PROJECT')
alter table PROJECTEMPLOYEE
   drop constraint FK_PROJECTE_HAS___PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTEMPLOYEE') and o.name = 'FK_PROJECTE_PART__OF_EMPLOYEE')
alter table PROJECTEMPLOYEE
   drop constraint FK_PROJECTE_PART__OF_EMPLOYEE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTEQUIPMENT') and o.name = 'FK_PROJECTE_____HAS_EQUIPMEN')
alter table PROJECTEQUIPMENT
   drop constraint FK_PROJECTE_____HAS_EQUIPMEN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTEQUIPMENT') and o.name = 'FK_PROJECTE___________PROJECT')
alter table PROJECTEQUIPMENT
   drop constraint FK_PROJECTE___________PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTMATERIAL') and o.name = 'FK_PROJECTM_IS_ALLOCA_PROJECT')
alter table PROJECTMATERIAL
   drop constraint FK_PROJECTM_IS_ALLOCA_PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTMATERIAL') and o.name = 'FK_PROJECTM_IS_TAKEN_MATERIAL')
alter table PROJECTMATERIAL
   drop constraint FK_PROJECTM_IS_TAKEN_MATERIAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTMATERIALREQUEST') and o.name = 'FK_PROJECTM_HAVE_URGENCYL')
alter table PROJECTMATERIALREQUEST
   drop constraint FK_PROJECTM_HAVE_URGENCYL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTMATERIALREQUEST') and o.name = 'FK_PROJECTM_MUST_HAVE_PROJECT')
alter table PROJECTMATERIALREQUEST
   drop constraint FK_PROJECTM_MUST_HAVE_PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTMATERIALREQUESTLIST') and o.name = 'FK_PROJECTM_APPROVAL_PROJECTM')
alter table PROJECTMATERIALREQUESTLIST
   drop constraint FK_PROJECTM_APPROVAL_PROJECTM
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('PROJECTMATERIALREQUESTLIST') and o.name = 'FK_PROJECTM_IS_IN_MATERIAL')
alter table PROJECTMATERIALREQUESTLIST
   drop constraint FK_PROJECTM_IS_IN_MATERIAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('REQUEST') and o.name = 'FK_REQUEST_MAKES_CLIENT')
alter table REQUEST
   drop constraint FK_REQUEST_MAKES_CLIENT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SAFETYFILECHECKLIST') and o.name = 'FK_SAFETYFI_ATTACH_SAFETYFI')
alter table SAFETYFILECHECKLIST
   drop constraint FK_SAFETYFI_ATTACH_SAFETYFI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SAFETYFILECHECKLIST') and o.name = 'FK_SAFETYFI_KEEPS_PROJECT')
alter table SAFETYFILECHECKLIST
   drop constraint FK_SAFETYFI_KEEPS_PROJECT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('STOCKTAKE') and o.name = 'FK_STOCKTAK_CONDUCTS_USER')
alter table STOCKTAKE
   drop constraint FK_STOCKTAK_CONDUCTS_USER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SUPPLIER') and o.name = 'FK_SUPPLIER________HA_SUPPLIER')
alter table SUPPLIER
   drop constraint FK_SUPPLIER________HA_SUPPLIER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SUPPLIERORDERLINE') and o.name = 'FK_SUPPLIER_SUPPLIES_SUPPLIER')
alter table SUPPLIERORDERLINE
   drop constraint FK_SUPPLIER_SUPPLIES_SUPPLIER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('SUPPLIERORDERLINE') and o.name = 'FK_SUPPLIER___________MATERIAL')
alter table SUPPLIERORDERLINE
   drop constraint FK_SUPPLIER___________MATERIAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('TASK') and o.name = 'FK_TASK_CREATED_USER')
alter table TASK
   drop constraint FK_TASK_CREATED_USER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('TASK') and o.name = 'FK_TASK___________TASKTYPE')
alter table TASK
   drop constraint FK_TASK___________TASKTYPE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('TASKMATERIAL') and o.name = 'FK_TASKMATE__HAS_TASK')
alter table TASKMATERIAL
   drop constraint FK_TASKMATE__HAS_TASK
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('TASKMATERIAL') and o.name = 'FK_TASKMATE___________MATERIAL')
alter table TASKMATERIAL
   drop constraint FK_TASKMATE___________MATERIAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('"USER"') and o.name = 'FK_USER_IS_EMPLOYEE')
alter table "USER"
   drop constraint FK_USER_IS_EMPLOYEE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('"USER"') and o.name = 'FK_USER_IS_ASSIGN_USERROLE')
alter table "USER"
   drop constraint FK_USER_IS_ASSIGN_USERROLE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('USERINCIDENT') and o.name = 'FK_USERINCI____HAS_USER')
alter table USERINCIDENT
   drop constraint FK_USERINCI____HAS_USER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('USERINCIDENT') and o.name = 'FK_USERINCI___________INCIDENT')
alter table USERINCIDENT
   drop constraint FK_USERINCI___________INCIDENT
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('VEHICLE') and o.name = 'FK_VEHICLE_ASSIGN_USER')
alter table VEHICLE
   drop constraint FK_VEHICLE_ASSIGN_USER
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('VEHICLE') and o.name = 'FK_VEHICLE_HAS__VEHICLET')
alter table VEHICLE
   drop constraint FK_VEHICLE_HAS__VEHICLET
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEEQUIPMENT') and o.name = 'FK_WAREHOUS_IS_AT_EQUIPMEN')
alter table WAREHOUSEEQUIPMENT
   drop constraint FK_WAREHOUS_IS_AT_EQUIPMEN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEEQUIPMENT') and o.name = 'FK_WAREHOUS__CONTAINS_WAREHOUS')
alter table WAREHOUSEEQUIPMENT
   drop constraint FK_WAREHOUS__CONTAINS_WAREHOUS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEEQUIPMENTCHECK') and o.name = 'FK_WAREHOUS_CAN___HAV_WAREHOUS')
alter table WAREHOUSEEQUIPMENTCHECK
   drop constraint FK_WAREHOUS_CAN___HAV_WAREHOUS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEEQUIPMENTCHECK') and o.name = 'FK_WAREHOUS_HAS_______EQUIPMEN')
alter table WAREHOUSEEQUIPMENTCHECK
   drop constraint FK_WAREHOUS_HAS_______EQUIPMEN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEEQUIPMENTWRITEOFF') and o.name = 'FK_WAREHOUS_CAN_CONTA_WRITEOFF')
alter table WAREHOUSEEQUIPMENTWRITEOFF
   drop constraint FK_WAREHOUS_CAN_CONTA_WRITEOFF
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEEQUIPMENTWRITEOFF') and o.name = 'FK_WAREHOUS_CAN_HAVE_WAREHOUS')
alter table WAREHOUSEEQUIPMENTWRITEOFF
   drop constraint FK_WAREHOUS_CAN_HAVE_WAREHOUS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEMATERIAL') and o.name = 'FK_WAREHOUS_CAN_BE_MATERIAL')
alter table WAREHOUSEMATERIAL
   drop constraint FK_WAREHOUS_CAN_BE_MATERIAL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEMATERIAL') and o.name = 'FK_WAREHOUS__CONTAIN_WAREHOUS')
alter table WAREHOUSEMATERIAL
   drop constraint FK_WAREHOUS__CONTAIN_WAREHOUS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEMATERIALSTOCKTAKE') and o.name = 'FK_WAREHOUS_IS_CONDUC_STOCKTAK')
alter table WAREHOUSEMATERIALSTOCKTAKE
   drop constraint FK_WAREHOUS_IS_CONDUC_STOCKTAK
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEMATERIALSTOCKTAKE') and o.name = 'FK_WAREHOUS_UNDERGOES_WAREHOUS')
alter table WAREHOUSEMATERIALSTOCKTAKE
   drop constraint FK_WAREHOUS_UNDERGOES_WAREHOUS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEMATERIALWRITEOFF') and o.name = 'FK_WAREHOUS_HAVE______WRITEOFF')
alter table WAREHOUSEMATERIALWRITEOFF
   drop constraint FK_WAREHOUS_HAVE______WRITEOFF
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WAREHOUSEMATERIALWRITEOFF') and o.name = 'FK_WAREHOUS_HAVE______WAREHOUS')
alter table WAREHOUSEMATERIALWRITEOFF
   drop constraint FK_WAREHOUS_HAVE______WAREHOUS
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('WRITEOFF') and o.name = 'FK_WRITEOFF_HAS_TO_WRITEOFF')
alter table WRITEOFF
   drop constraint FK_WRITEOFF_HAS_TO_WRITEOFF
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('ATTENDENCE')
            and   name  = 'MARKS_REGISTER_FK'
            and   indid > 0
            and   indid < 255)
   drop index ATTENDENCE.MARKS_REGISTER_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('ATTENDENCE')
            and   type = 'U')
   drop table ATTENDENCE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CLIENT')
            and   type = 'U')
   drop table CLIENT
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CONSTRUCTIONSITE')
            and   type = 'U')
   drop table CONSTRUCTIONSITE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DELIVERY')
            and   name  = 'IS_SCHEDULED_FK'
            and   indid > 0
            and   indid < 255)
   drop index DELIVERY.IS_SCHEDULED_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DELIVERY')
            and   name  = 'SCHEDULES_FK'
            and   indid > 0
            and   indid < 255)
   drop index DELIVERY.SCHEDULES_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DELIVERY')
            and   type = 'U')
   drop table DELIVERY
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DOCUMENT')
            and   type = 'U')
   drop table DOCUMENT
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('EMPLOYEE')
            and   name  = 'HAS__________________FK'
            and   indid > 0
            and   indid < 255)
   drop index EMPLOYEE.HAS__________________FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('EMPLOYEE')
            and   type = 'U')
   drop table EMPLOYEE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('EQUIPMENT')
            and   type = 'U')
   drop table EQUIPMENT
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('EQUIPMENTCHECK')
            and   name  = 'RECORDS_FK'
            and   indid > 0
            and   indid < 255)
   drop index EQUIPMENTCHECK.RECORDS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('EQUIPMENTCHECK')
            and   type = 'U')
   drop table EQUIPMENTCHECK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('INCIDENT')
            and   type = 'U')
   drop table INCIDENT
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('INVOICE')
            and   name  = 'IS_FOR_FK'
            and   indid > 0
            and   indid < 255)
   drop index INVOICE.IS_FOR_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('INVOICE')
            and   name  = 'IS_SENT_FK'
            and   indid > 0
            and   indid < 255)
   drop index INVOICE.IS_SENT_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('INVOICE')
            and   type = 'U')
   drop table INVOICE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('MATERIAL')
            and   name  = '___________________________________________HAS___FK'
            and   indid > 0
            and   indid < 255)
   drop index MATERIAL.___________________________________________HAS___FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('MATERIAL')
            and   type = 'U')
   drop table MATERIAL
go

if exists (select 1
            from  sysobjects
           where  id = object_id('MATERIALTYPE')
            and   type = 'U')
   drop table MATERIALTYPE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECT')
            and   name  = 'IS_MADE_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECT.IS_MADE_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECT')
            and   name  = '__HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECT.__HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PROJECT')
            and   type = 'U')
   drop table PROJECT
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTEMPLOYEE')
            and   name  = 'PART__OF_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTEMPLOYEE.PART__OF_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTEMPLOYEE')
            and   name  = 'HAS___FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTEMPLOYEE.HAS___FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PROJECTEMPLOYEE')
            and   type = 'U')
   drop table PROJECTEMPLOYEE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTEQUIPMENT')
            and   name  = '________________________________HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTEQUIPMENT.________________________________HAS_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTEQUIPMENT')
            and   name  = '____HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTEQUIPMENT.____HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PROJECTEQUIPMENT')
            and   type = 'U')
   drop table PROJECTEQUIPMENT
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTMATERIAL')
            and   name  = 'IS_ALLOCATED_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTMATERIAL.IS_ALLOCATED_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTMATERIAL')
            and   name  = 'IS_TAKEN_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTMATERIAL.IS_TAKEN_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PROJECTMATERIAL')
            and   type = 'U')
   drop table PROJECTMATERIAL
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTMATERIALREQUEST')
            and   name  = 'HAVE_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTMATERIALREQUEST.HAVE_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTMATERIALREQUEST')
            and   name  = 'MUST_HAVE_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTMATERIALREQUEST.MUST_HAVE_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PROJECTMATERIALREQUEST')
            and   type = 'U')
   drop table PROJECTMATERIALREQUEST
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTMATERIALREQUESTLIST')
            and   name  = 'IS_IN_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTMATERIALREQUESTLIST.IS_IN_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('PROJECTMATERIALREQUESTLIST')
            and   name  = 'APPROVAL_FK'
            and   indid > 0
            and   indid < 255)
   drop index PROJECTMATERIALREQUESTLIST.APPROVAL_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PROJECTMATERIALREQUESTLIST')
            and   type = 'U')
   drop table PROJECTMATERIALREQUESTLIST
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('REQUEST')
            and   name  = 'MAKES_FK'
            and   indid > 0
            and   indid < 255)
   drop index REQUEST.MAKES_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('REQUEST')
            and   type = 'U')
   drop table REQUEST
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SAFETYFILECHECKLIST')
            and   name  = 'KEEPS_FK'
            and   indid > 0
            and   indid < 255)
   drop index SAFETYFILECHECKLIST.KEEPS_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SAFETYFILECHECKLIST')
            and   name  = 'ATTACH_FK'
            and   indid > 0
            and   indid < 255)
   drop index SAFETYFILECHECKLIST.ATTACH_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SAFETYFILECHECKLIST')
            and   type = 'U')
   drop table SAFETYFILECHECKLIST
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SAFETYFILEITEM')
            and   type = 'U')
   drop table SAFETYFILEITEM
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('STOCKTAKE')
            and   name  = 'CONDUCTS_FK'
            and   indid > 0
            and   indid < 255)
   drop index STOCKTAKE.CONDUCTS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('STOCKTAKE')
            and   type = 'U')
   drop table STOCKTAKE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SUPPLIER')
            and   name  = '_______HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index SUPPLIER._______HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SUPPLIER')
            and   type = 'U')
   drop table SUPPLIER
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SUPPLIERORDERLINE')
            and   name  = 'SUPPLIES_FK'
            and   indid > 0
            and   indid < 255)
   drop index SUPPLIERORDERLINE.SUPPLIES_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('SUPPLIERORDERLINE')
            and   name  = '________________HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index SUPPLIERORDERLINE.________________HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SUPPLIERORDERLINE')
            and   type = 'U')
   drop table SUPPLIERORDERLINE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('SUPPLIERTYPE')
            and   type = 'U')
   drop table SUPPLIERTYPE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('TASK')
            and   name  = 'CREATED_FK'
            and   indid > 0
            and   indid < 255)
   drop index TASK.CREATED_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('TASK')
            and   name  = '_______________________HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index TASK._______________________HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TASK')
            and   type = 'U')
   drop table TASK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('TASKMATERIAL')
            and   name  = '______________HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index TASKMATERIAL.______________HAS_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('TASKMATERIAL')
            and   name  = '_HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index TASKMATERIAL._HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TASKMATERIAL')
            and   type = 'U')
   drop table TASKMATERIAL
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TASKTYPE')
            and   type = 'U')
   drop table TASKTYPE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('URGENCYLEVEL')
            and   type = 'U')
   drop table URGENCYLEVEL
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('"USER"')
            and   name  = 'IS_FK'
            and   indid > 0
            and   indid < 255)
   drop index "USER".IS_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('"USER"')
            and   name  = 'IS_ASSIGNED_FK'
            and   indid > 0
            and   indid < 255)
   drop index "USER".IS_ASSIGNED_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('"USER"')
            and   type = 'U')
   drop table "USER"
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('USERINCIDENT')
            and   name  = '___HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index USERINCIDENT.___HAS_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('USERINCIDENT')
            and   name  = '__________________________HAS_FK'
            and   indid > 0
            and   indid < 255)
   drop index USERINCIDENT.__________________________HAS_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('USERINCIDENT')
            and   type = 'U')
   drop table USERINCIDENT
go

if exists (select 1
            from  sysobjects
           where  id = object_id('USERROLE')
            and   type = 'U')
   drop table USERROLE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('VEHICLE')
            and   name  = 'ASSIGN_FK'
            and   indid > 0
            and   indid < 255)
   drop index VEHICLE.ASSIGN_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('VEHICLE')
            and   name  = 'HAS__FK'
            and   indid > 0
            and   indid < 255)
   drop index VEHICLE.HAS__FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('VEHICLE')
            and   type = 'U')
   drop table VEHICLE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('VEHICLETYPE')
            and   type = 'U')
   drop table VEHICLETYPE
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSE')
            and   type = 'U')
   drop table WAREHOUSE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEEQUIPMENT')
            and   name  = '_CONTAINS_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEEQUIPMENT._CONTAINS_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEEQUIPMENT')
            and   name  = 'IS_AT_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEEQUIPMENT.IS_AT_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSEEQUIPMENT')
            and   type = 'U')
   drop table WAREHOUSEEQUIPMENT
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEEQUIPMENTCHECK')
            and   name  = 'HAS____________________FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEEQUIPMENTCHECK.HAS____________________FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEEQUIPMENTCHECK')
            and   name  = 'CAN___HAVE_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEEQUIPMENTCHECK.CAN___HAVE_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSEEQUIPMENTCHECK')
            and   type = 'U')
   drop table WAREHOUSEEQUIPMENTCHECK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEEQUIPMENTWRITEOFF')
            and   name  = 'CAN_CONTAIN_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEEQUIPMENTWRITEOFF.CAN_CONTAIN_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEEQUIPMENTWRITEOFF')
            and   name  = 'CAN_HAVE_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEEQUIPMENTWRITEOFF.CAN_HAVE_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSEEQUIPMENTWRITEOFF')
            and   type = 'U')
   drop table WAREHOUSEEQUIPMENTWRITEOFF
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEMATERIAL')
            and   name  = 'CAN_BE_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEMATERIAL.CAN_BE_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEMATERIAL')
            and   name  = '_CONTAIN_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEMATERIAL._CONTAIN_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSEMATERIAL')
            and   type = 'U')
   drop table WAREHOUSEMATERIAL
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEMATERIALSTOCKTAKE')
            and   name  = 'IS_CONDUCTED_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEMATERIALSTOCKTAKE.IS_CONDUCTED_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEMATERIALSTOCKTAKE')
            and   name  = 'UNDERGOES_FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEMATERIALSTOCKTAKE.UNDERGOES_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSEMATERIALSTOCKTAKE')
            and   type = 'U')
   drop table WAREHOUSEMATERIALSTOCKTAKE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEMATERIALWRITEOFF')
            and   name  = 'HAVE__________FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEMATERIALWRITEOFF.HAVE__________FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WAREHOUSEMATERIALWRITEOFF')
            and   name  = 'HAVE______________________FK'
            and   indid > 0
            and   indid < 255)
   drop index WAREHOUSEMATERIALWRITEOFF.HAVE______________________FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WAREHOUSEMATERIALWRITEOFF')
            and   type = 'U')
   drop table WAREHOUSEMATERIALWRITEOFF
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('WRITEOFF')
            and   name  = 'HAS_TO_FK'
            and   indid > 0
            and   indid < 255)
   drop index WRITEOFF.HAS_TO_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WRITEOFF')
            and   type = 'U')
   drop table WRITEOFF
go

if exists (select 1
            from  sysobjects
           where  id = object_id('WRITEOFFREASON')
            and   type = 'U')
   drop table WRITEOFFREASON
go

/*==============================================================*/
/* Table: ATTENDENCE                                            */
/*==============================================================*/
create table ATTENDENCE (
   ATTENDENCE_ID        int IDENTITY(1,1)                  not null,
   EMPLOYEE_ID          int                  not null,
   PROJECT_ID           int                  not null,
   PRESENT              bit                  null,
   DATE                 datetime             null,
   constraint PK_ATTENDENCE primary key (ATTENDENCE_ID)
)
go

/*==============================================================*/
/* Index: MARKS_REGISTER_FK                                     */
/*==============================================================*/




create nonclustered index MARKS_REGISTER_FK on ATTENDENCE (EMPLOYEE_ID ASC,
  PROJECT_ID ASC)
go

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
create table CLIENT (
   CLIENT_ID            int IDENTITY(1,1)                  not null,
   CONTACTNUMBER        varchar(255)         null,
   CLIENTNAME           varchar(255)         null,
   CLIENTEMAIL          varchar(255)         null,
   constraint PK_CLIENT primary key (CLIENT_ID)
)
go

/*==============================================================*/
/* Table: CONSTRUCTIONSITE                                      */
/*==============================================================*/
create table CONSTRUCTIONSITE (
   CONSTRUCTIONSITE_ID  int IDENTITY(1,1)                  not null,
   ADDRESS              varchar(255)         null,
   constraint PK_CONSTRUCTIONSITE primary key (CONSTRUCTIONSITE_ID)
)
go

/*==============================================================*/
/* Table: DELIVERY                                              */
/*==============================================================*/
create table DELIVERY (
   DELIVERY_ID          int IDENTITY(1,1)                  not null,
   PROJECT_ID           int                  not null,
   SUPPLIER_ID          int                  not null,
   MATERIAL_ID          int                  not null,
   DATE                 datetime             null,
   DELIVERYNOTE         image                null,
   constraint PK_DELIVERY primary key (DELIVERY_ID)
)
go

/*==============================================================*/
/* Index: SCHEDULES_FK                                          */
/*==============================================================*/




create nonclustered index SCHEDULES_FK on DELIVERY (PROJECT_ID ASC)
go

/*==============================================================*/
/* Index: IS_SCHEDULED_FK                                       */
/*==============================================================*/




create nonclustered index IS_SCHEDULED_FK on DELIVERY (SUPPLIER_ID ASC,
  MATERIAL_ID ASC)
go

/*==============================================================*/
/* Table: DOCUMENT                                              */
/*==============================================================*/
create table DOCUMENT (
   DOCUMENT_ID          int IDENTITY(1,1)                  not null,
   CONTRACTFILE         image                null,
   constraint PK_DOCUMENT primary key (DOCUMENT_ID)
)
go

/*==============================================================*/
/* Table: EMPLOYEE                                              */
/*==============================================================*/
create table EMPLOYEE (
   EMPLOYEE_ID          int IDENTITY(1,1)                  not null,
   DOCUMENT_ID          int                  null,
   NAME                 varchar(255)         null,
   EMAIL                varchar(255)         null,
   CONTACTNUMBER        varchar(255)         null,
   constraint PK_EMPLOYEE primary key (EMPLOYEE_ID)
)
go

/*==============================================================*/
/* Index: HAS__________________FK                               */
/*==============================================================*/




create nonclustered index HAS__________________FK on EMPLOYEE (DOCUMENT_ID ASC)
go

/*==============================================================*/
/* Table: EQUIPMENT                                             */
/*==============================================================*/
create table EQUIPMENT (
   EQUIPMENT_ID         int IDENTITY(1,1)                  not null,
   NAME                 varchar(255)         null,
   DESCRIPTION          varchar(255)         null,	
   Quantity             int                  null,
   constraint PK_EQUIPMENT primary key (EQUIPMENT_ID)
)
go

/*==============================================================*/
/* Table: EQUIPMENTCHECK                                        */
/*==============================================================*/
create table EQUIPMENTCHECK (
   EQUIPMENTCHECK_ID    int IDENTITY(1,1)                  not null,
   USER_ID              int                  not null,
   constraint PK_EQUIPMENTCHECK primary key (EQUIPMENTCHECK_ID)
)
go

/*==============================================================*/
/* Index: RECORDS_FK                                            */
/*==============================================================*/




create nonclustered index RECORDS_FK on EQUIPMENTCHECK (USER_ID ASC)
go

/*==============================================================*/
/* Table: INCIDENT                                              */
/*==============================================================*/
create table INCIDENT (
   INCIDENT_ID          int IDENTITY(1,1)                  not null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_INCIDENT primary key (INCIDENT_ID)
)
go

/*==============================================================*/
/* Table: INVOICE                                               */
/*==============================================================*/
create table INVOICE (
   INVOICE_ID           int IDENTITY(1,1)                  not null,
   PROJECT_ID           int                  not null,
   TASK_ID              int                  not null,
   AMOUNT               int                  null,
   constraint PK_INVOICE primary key (INVOICE_ID)
)
go

/*==============================================================*/
/* Index: IS_SENT_FK                                            */
/*==============================================================*/




create nonclustered index IS_SENT_FK on INVOICE (PROJECT_ID ASC)
go

/*==============================================================*/
/* Index: IS_FOR_FK                                             */
/*==============================================================*/




create nonclustered index IS_FOR_FK on INVOICE (TASK_ID ASC)
go

/*==============================================================*/
/* Table: MATERIAL                                              */
/*==============================================================*/
create table MATERIAL (
   MATERIAL_ID          int IDENTITY(1,1)                  not null,
   MATERIALTYPE_ID      int                  not null,
   NAME                 varchar(255)         null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_MATERIAL primary key (MATERIAL_ID)
)
go

/*==============================================================*/
/* Index: ___________________________________________HAS___FK   */
/*==============================================================*/




create nonclustered index ___________________________________________HAS___FK on MATERIAL (MATERIALTYPE_ID ASC)
go

/*==============================================================*/
/* Table: MATERIALTYPE                                          */
/*==============================================================*/
create table MATERIALTYPE (
   MATERIALTYPE_ID      int IDENTITY(1,1)                  not null,
   NAME                 varchar(255)         null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_MATERIALTYPE primary key (MATERIALTYPE_ID)
)
go

/*==============================================================*/
/* Table: PROJECT                                               */
/*==============================================================*/
create table PROJECT (
   PROJECT_ID           int IDENTITY(1,1)                  not null,
   CONSTRUCTIONSITE_ID  int                  not null,
   INITIALREQUEST_ID    int                  not null,
   SAFETYFILECREATED    bit                  null,
   constraint PK_PROJECT primary key (PROJECT_ID)
)
go

/*==============================================================*/
/* Index: __HAS_FK                                              */
/*==============================================================*/




create nonclustered index __HAS_FK on PROJECT (CONSTRUCTIONSITE_ID ASC)
go

/*==============================================================*/
/* Index: IS_MADE_FK                                            */
/*==============================================================*/




create nonclustered index IS_MADE_FK on PROJECT (INITIALREQUEST_ID ASC)
go

/*==============================================================*/
/* Table: PROJECTEMPLOYEE                                       */
/*==============================================================*/
create table PROJECTEMPLOYEE (
   EMPLOYEE_ID          int                  not null,
   PROJECT_ID           int                  not null,
   constraint PK_PROJECTEMPLOYEE primary key (EMPLOYEE_ID, PROJECT_ID)
)
go

/*==============================================================*/
/* Index: HAS___FK                                              */
/*==============================================================*/




create nonclustered index HAS___FK on PROJECTEMPLOYEE (PROJECT_ID ASC)
go

/*==============================================================*/
/* Index: PART__OF_FK                                           */
/*==============================================================*/




create nonclustered index PART__OF_FK on PROJECTEMPLOYEE (EMPLOYEE_ID ASC)
go

/*==============================================================*/
/* Table: PROJECTEQUIPMENT                                      */
/*==============================================================*/
create table PROJECTEQUIPMENT (
   PROJECT_ID           int                  not null,
   EQUIPMENT_ID         int                  not null,
   constraint PK_PROJECTEQUIPMENT primary key (PROJECT_ID, EQUIPMENT_ID)
)
go

/*==============================================================*/
/* Index: ____HAS_FK                                            */
/*==============================================================*/




create nonclustered index ____HAS_FK on PROJECTEQUIPMENT (EQUIPMENT_ID ASC)
go

/*==============================================================*/
/* Index: ________________________________HAS_FK                */
/*==============================================================*/




create nonclustered index ________________________________HAS_FK on PROJECTEQUIPMENT (PROJECT_ID ASC)
go

/*==============================================================*/
/* Table: PROJECTMATERIAL                                       */
/*==============================================================*/
create table PROJECTMATERIAL (
   PROJECT_ID           int                 not null,
   MATERIAL_ID          int                  not null,
   QUANTITY             int                  null,
   constraint PK_PROJECTMATERIAL primary key (PROJECT_ID, MATERIAL_ID)
)
go

/*==============================================================*/
/* Index: IS_TAKEN_FK                                           */
/*==============================================================*/




create nonclustered index IS_TAKEN_FK on PROJECTMATERIAL (MATERIAL_ID ASC)
go

/*==============================================================*/
/* Index: IS_ALLOCATED_FK                                       */
/*==============================================================*/




create nonclustered index IS_ALLOCATED_FK on PROJECTMATERIAL (PROJECT_ID ASC)
go

/*==============================================================*/
/* Table: PROJECTMATERIALREQUEST                                */
/*==============================================================*/
create table PROJECTMATERIALREQUEST (
   PROJECTMATERIALREQUEST_ID int IDENTITY(1,1)                  not null,
   PROJECT_ID           int                  null,
   URGENCYLEVEL_ID      int                  not null,
   FULFILLMENTTYPE      bit                  null,
   constraint PK_PROJECTMATERIALREQUEST primary key (PROJECTMATERIALREQUEST_ID)
)
go

/*==============================================================*/
/* Index: MUST_HAVE_FK                                          */
/*==============================================================*/




create nonclustered index MUST_HAVE_FK on PROJECTMATERIALREQUEST (PROJECT_ID ASC)
go

/*==============================================================*/
/* Index: HAVE_FK                                               */
/*==============================================================*/




create nonclustered index HAVE_FK on PROJECTMATERIALREQUEST (URGENCYLEVEL_ID ASC)
go

/*==============================================================*/
/* Table: PROJECTMATERIALREQUESTLIST                            */
/*==============================================================*/
create table PROJECTMATERIALREQUESTLIST (
   MATERIAL_ID          int                 not null,
   PROJECTMATERIALREQUEST_ID int                  not null,
   QUANTITY             int                  null,
   constraint PK_PROJECTMATERIALREQUESTLIST primary key (MATERIAL_ID, PROJECTMATERIALREQUEST_ID)
)
go

/*==============================================================*/
/* Index: APPROVAL_FK                                           */
/*==============================================================*/




create nonclustered index APPROVAL_FK on PROJECTMATERIALREQUESTLIST (PROJECTMATERIALREQUEST_ID ASC)
go

/*==============================================================*/
/* Index: IS_IN_FK                                              */
/*==============================================================*/




create nonclustered index IS_IN_FK on PROJECTMATERIALREQUESTLIST (MATERIAL_ID ASC)
go

/*==============================================================*/
/* Table: REQUEST                                               */
/*==============================================================*/
create table REQUEST (
   REQUEST_ID           int IDENTITY(1,1)                  not null,
   CLIENT_ID            int                  not null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_REQUEST primary key (REQUEST_ID)
)
go

/*==============================================================*/
/* Index: MAKES_FK                                              */
/*==============================================================*/




create nonclustered index MAKES_FK on REQUEST (CLIENT_ID ASC)
go

/*==============================================================*/
/* Table: SAFETYFILECHECKLIST                                   */
/*==============================================================*/
create table SAFETYFILECHECKLIST (
   PROJECT_ID           int                  not null,
   SAFETYFILEITEM_ID    int                  not null,
   constraint PK_SAFETYFILECHECKLIST primary key (PROJECT_ID, SAFETYFILEITEM_ID)
)
go

/*==============================================================*/
/* Index: ATTACH_FK                                             */
/*==============================================================*/




create nonclustered index ATTACH_FK on SAFETYFILECHECKLIST (SAFETYFILEITEM_ID ASC)
go

/*==============================================================*/
/* Index: KEEPS_FK                                              */
/*==============================================================*/




create nonclustered index KEEPS_FK on SAFETYFILECHECKLIST (PROJECT_ID ASC)
go

/*==============================================================*/
/* Table: SAFETYFILEITEM                                        */
/*==============================================================*/
create table SAFETYFILEITEM (
   SAFETYFILEITEM_ID    int IDENTITY(1,1)                  not null,
   NAME                 varchar(255)         null,
   constraint PK_SAFETYFILEITEM primary key (SAFETYFILEITEM_ID)
)
go

/*==============================================================*/
/* Table: STOCKTAKE                                             */
/*==============================================================*/
create table STOCKTAKE (
   STOCKTAKE_ID         int IDENTITY(1,1)                  not null,
   USER_ID              int                  not null,
   constraint PK_STOCKTAKE primary key (STOCKTAKE_ID)
)
go

/*==============================================================*/
/* Index: CONDUCTS_FK                                           */
/*==============================================================*/




create nonclustered index CONDUCTS_FK on STOCKTAKE (USER_ID ASC)
go

/*==============================================================*/
/* Table: SUPPLIER                                              */
/*==============================================================*/
create table SUPPLIER (
   SUPPLIER_ID          int IDENTITY(1,1)                  not null,
   SUPPLIERTYPE_ID      int                  not null,
   NAME                 varchar(255)         null,
   ADDRESS              varchar(255)         null,
   EMAIL                varchar(255)         null,
   CONTACTNUMBER        varchar(255)         null,
   constraint PK_SUPPLIER primary key (SUPPLIER_ID)
)
go

/*==============================================================*/
/* Index: _______HAS_FK                                         */
/*==============================================================*/




create nonclustered index _______HAS_FK on SUPPLIER (SUPPLIERTYPE_ID ASC)
go

/*==============================================================*/
/* Table: SUPPLIERORDERLINE                                     */
/*==============================================================*/
create table SUPPLIERORDERLINE (
   SUPPLIER_ID          int                  not null,
   MATERIAL_ID          int                  not null,
   QUANTITY             int                  null,
   ADDRESS              varchar(255)         null,
   constraint PK_SUPPLIERORDERLINE primary key (SUPPLIER_ID, MATERIAL_ID)
)
go

/*==============================================================*/
/* Index: ________________HAS_FK                                */
/*==============================================================*/




create nonclustered index ________________HAS_FK on SUPPLIERORDERLINE (MATERIAL_ID ASC)
go

/*==============================================================*/
/* Index: SUPPLIES_FK                                           */
/*==============================================================*/




create nonclustered index SUPPLIES_FK on SUPPLIERORDERLINE (SUPPLIER_ID ASC)
go

/*==============================================================*/
/* Table: SUPPLIERTYPE                                          */
/*==============================================================*/
create table SUPPLIERTYPE (
   SUPPLIERTYPE_ID      int IDENTITY(1,1)                  not null,
   NAME                 varchar(255)         null,
   constraint PK_SUPPLIERTYPE primary key (SUPPLIERTYPE_ID)
)
go

/*==============================================================*/
/* Table: TASK                                                  */
/*==============================================================*/
create table TASK (
   TASK_ID              int IDENTITY(1,1)                  not null,
   TASKTYPE             int                  not null,
   USER_ID              int                  not null,
   STARTDATE            datetime             null,
   ENDDATE              datetime             null,
   QNAPASSED            bit                  null,
   constraint PK_TASK primary key (TASK_ID)
)
go

/*==============================================================*/
/* Index: _______________________HAS_FK                         */
/*==============================================================*/




create nonclustered index _______________________HAS_FK on TASK (TASKTYPE ASC)
go

/*==============================================================*/
/* Index: CREATED_FK                                            */
/*==============================================================*/




create nonclustered index CREATED_FK on TASK (USER_ID ASC)
go

/*==============================================================*/
/* Table: TASKMATERIAL                                          */
/*==============================================================*/
create table TASKMATERIAL (
   MATERIAL_ID          int                  not null,
   TASK_ID              int                  not null,
   constraint PK_TASKMATERIAL primary key (MATERIAL_ID, TASK_ID)
)
go

/*==============================================================*/
/* Index: _HAS_FK                                               */
/*==============================================================*/




create nonclustered index _HAS_FK on TASKMATERIAL (TASK_ID ASC)
go

/*==============================================================*/
/* Index: ______________HAS_FK                                  */
/*==============================================================*/




create nonclustered index ______________HAS_FK on TASKMATERIAL (MATERIAL_ID ASC)
go

/*==============================================================*/
/* Table: TASKTYPE                                              */
/*==============================================================*/
create table TASKTYPE (
   TASKTYPE             int IDENTITY(1,1)                  not null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_TASKTYPE primary key (TASKTYPE)
)
go

/*==============================================================*/
/* Table: URGENCYLEVEL                                          */
/*==============================================================*/
create table URGENCYLEVEL (
   URGENCYLEVEL_ID      int IDENTITY(1,1)                  not null,
   LEVEL                varchar(20)          null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_URGENCYLEVEL primary key (URGENCYLEVEL_ID)
)
go

/*==============================================================*/
/* Table: "USER"                                                */
/*==============================================================*/
create table "USER" (
   USER_ID              int                  not null,
   USERROLE             int                  not null,
   EMPLOYEE_ID          int                  not null,
   USERNAME             varchar(255)         null,
   USERPASSWORD         varchar(255)         null,
   constraint PK_USER primary key (USER_ID)
)
go

/*==============================================================*/
/* Index: IS_ASSIGNED_FK                                        */
/*==============================================================*/




create nonclustered index IS_ASSIGNED_FK on "USER" (USERROLE ASC)
go

/*==============================================================*/
/* Index: IS_FK                                                 */
/*==============================================================*/




create nonclustered index IS_FK on "USER" (EMPLOYEE_ID ASC)
go

/*==============================================================*/
/* Table: USERINCIDENT                                          */
/*==============================================================*/
create table USERINCIDENT (
   USER_ID              int                  not null,
   INCIDENT_ID          int                  not null,
   constraint PK_USERINCIDENT primary key (USER_ID, INCIDENT_ID)
)
go

/*==============================================================*/
/* Index: __________________________HAS_FK                      */
/*==============================================================*/




create nonclustered index __________________________HAS_FK on USERINCIDENT (INCIDENT_ID ASC)
go

/*==============================================================*/
/* Index: ___HAS_FK                                             */
/*==============================================================*/




create nonclustered index ___HAS_FK on USERINCIDENT (USER_ID ASC)
go

/*==============================================================*/
/* Table: USERROLE                                              */
/*==============================================================*/
create table USERROLE (
   USERROLE             int IDENTITY(1,1)                  not null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_USERROLE primary key (USERROLE)
)
go

/*==============================================================*/
/* Table: VEHICLE                                               */
/*==============================================================*/
create table VEHICLE (
   VEHICLE_ID           int IDENTITY(1,1)                  not null,
   VEHICLETYPE_ID       int                  not null,
   USER_ID              int                  not null,
   constraint PK_VEHICLE primary key (VEHICLE_ID)
)
go

/*==============================================================*/
/* Index: HAS__FK                                               */
/*==============================================================*/




create nonclustered index HAS__FK on VEHICLE (VEHICLETYPE_ID ASC)
go

/*==============================================================*/
/* Index: ASSIGN_FK                                             */
/*==============================================================*/




create nonclustered index ASSIGN_FK on VEHICLE (USER_ID ASC)
go

/*==============================================================*/
/* Table: VEHICLETYPE                                           */
/*==============================================================*/
create table VEHICLETYPE (
   VEHICLETYPE_ID       int IDENTITY(1,1)                  not null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_VEHICLETYPE primary key (VEHICLETYPE_ID)
)
go

/*==============================================================*/
/* Table: WAREHOUSE                                             */
/*==============================================================*/
create table WAREHOUSE (
   WAREHOUSE_ID         int IDENTITY(1,1)                  not null,
   NAME                 varchar(255)         null,
   LOCATION             varchar(255)         null,
   constraint PK_WAREHOUSE primary key (WAREHOUSE_ID)
)
go

/*==============================================================*/
/* Table: WAREHOUSEEQUIPMENT                                    */
/*==============================================================*/
create table WAREHOUSEEQUIPMENT (
   WAREHOUSE_ID         int                  not null,
   EQUIPMENT_ID         int                  not null,
   QUANTITY             int                  null,
   constraint PK_WAREHOUSEEQUIPMENT primary key (WAREHOUSE_ID, EQUIPMENT_ID)
)
go

/*==============================================================*/
/* Index: IS_AT_FK                                              */
/*==============================================================*/




create nonclustered index IS_AT_FK on WAREHOUSEEQUIPMENT (EQUIPMENT_ID ASC)
go

/*==============================================================*/
/* Index: _CONTAINS_FK                                          */
/*==============================================================*/




create nonclustered index _CONTAINS_FK on WAREHOUSEEQUIPMENT (WAREHOUSE_ID ASC)
go

/*==============================================================*/
/* Table: WAREHOUSEEQUIPMENTCHECK                               */
/*==============================================================*/
create table WAREHOUSEEQUIPMENTCHECK (
   EQUIPMENTCHECK_ID    int IDENTITY(1,1)                  not null,
   WAREHOUSE_ID         int                  not null,
   EQUIPMENT_ID         int                  not null,
   CHECK_IN             datetime             null,
   CHECK_OUT            datetime             null,
   constraint PK_WAREHOUSEEQUIPMENTCHECK primary key (EQUIPMENTCHECK_ID, WAREHOUSE_ID, EQUIPMENT_ID)
)
go

/*==============================================================*/
/* Index: CAN___HAVE_FK                                         */
/*==============================================================*/




create nonclustered index CAN___HAVE_FK on WAREHOUSEEQUIPMENTCHECK (WAREHOUSE_ID ASC,
  EQUIPMENT_ID ASC)
go

/*==============================================================*/
/* Index: HAS____________________FK                             */
/*==============================================================*/




create nonclustered index HAS____________________FK on WAREHOUSEEQUIPMENTCHECK (EQUIPMENTCHECK_ID ASC)
go

/*==============================================================*/
/* Table: WAREHOUSEEQUIPMENTWRITEOFF                            */
/*==============================================================*/
create table WAREHOUSEEQUIPMENTWRITEOFF (
   WRITEOFF_ID          int                  not null,
   WAREHOUSE_ID         int                  not null,
   EQUIPMENT_ID         int                  not null,
   QUANTITY             int                  null,
   constraint PK_WAREHOUSEEQUIPMENTWRITEOFF primary key (WRITEOFF_ID, WAREHOUSE_ID, EQUIPMENT_ID)
)
go

/*==============================================================*/
/* Index: CAN_HAVE_FK                                           */
/*==============================================================*/




create nonclustered index CAN_HAVE_FK on WAREHOUSEEQUIPMENTWRITEOFF (WAREHOUSE_ID ASC,
  EQUIPMENT_ID ASC)
go

/*==============================================================*/
/* Index: CAN_CONTAIN_FK                                        */
/*==============================================================*/




create nonclustered index CAN_CONTAIN_FK on WAREHOUSEEQUIPMENTWRITEOFF (WRITEOFF_ID ASC)
go

/*==============================================================*/
/* Table: WAREHOUSEMATERIAL                                     */
/*==============================================================*/
create table WAREHOUSEMATERIAL (
   MATERIAL_ID          int                  not null,
   WAREHOUSE_ID         int                  not null,
   QUANTITY             int                  null,
   constraint PK_WAREHOUSEMATERIAL primary key (MATERIAL_ID, WAREHOUSE_ID)
)
go

/*==============================================================*/
/* Index: _CONTAIN_FK                                           */
/*==============================================================*/




create nonclustered index _CONTAIN_FK on WAREHOUSEMATERIAL (WAREHOUSE_ID ASC)
go

/*==============================================================*/
/* Index: CAN_BE_FK                                             */
/*==============================================================*/




create nonclustered index CAN_BE_FK on WAREHOUSEMATERIAL (MATERIAL_ID ASC)
go

/*==============================================================*/
/* Table: WAREHOUSEMATERIALSTOCKTAKE                            */
/*==============================================================*/
create table WAREHOUSEMATERIALSTOCKTAKE (
   STOCKTAKE_ID         int                  not null,
   MATERIAL_ID          int                  not null,
   WAREHOUSE_ID         int                  not null,
   QUANTITY             int                  null,
   constraint PK_WAREHOUSEMATERIALSTOCKTAKE primary key (STOCKTAKE_ID, MATERIAL_ID, WAREHOUSE_ID)
)
go

/*==============================================================*/
/* Index: UNDERGOES_FK                                          */
/*==============================================================*/




create nonclustered index UNDERGOES_FK on WAREHOUSEMATERIALSTOCKTAKE (MATERIAL_ID ASC,
  WAREHOUSE_ID ASC)
go

/*==============================================================*/
/* Index: IS_CONDUCTED_FK                                       */
/*==============================================================*/




create nonclustered index IS_CONDUCTED_FK on WAREHOUSEMATERIALSTOCKTAKE (STOCKTAKE_ID ASC)
go

/*==============================================================*/
/* Table: WAREHOUSEMATERIALWRITEOFF                             */
/*==============================================================*/
create table WAREHOUSEMATERIALWRITEOFF (
   WRITEOFF_ID          int                  not null,
   MATERIAL_ID          int                  not null,
   WAREHOUSE_ID         int                  not null,
   constraint PK_WAREHOUSEMATERIALWRITEOFF primary key (WRITEOFF_ID, MATERIAL_ID, WAREHOUSE_ID)
)
go

/*==============================================================*/
/* Index: HAVE______________________FK                          */
/*==============================================================*/




create nonclustered index HAVE______________________FK on WAREHOUSEMATERIALWRITEOFF (MATERIAL_ID ASC,
  WAREHOUSE_ID ASC)
go

/*==============================================================*/
/* Index: HAVE__________FK                                      */
/*==============================================================*/




create nonclustered index HAVE__________FK on WAREHOUSEMATERIALWRITEOFF (WRITEOFF_ID ASC)
go

/*==============================================================*/
/* Table: WRITEOFF                                              */
/*==============================================================*/
create table WRITEOFF (
   WRITEOFF_ID          int IDENTITY(1,1)                  not null,
   WRITEOFFREASON_ID    int                  not null,
   constraint PK_WRITEOFF primary key (WRITEOFF_ID)
)
go

/*==============================================================*/
/* Index: HAS_TO_FK                                             */
/*==============================================================*/




create nonclustered index HAS_TO_FK on WRITEOFF (WRITEOFFREASON_ID ASC)
go

/*==============================================================*/
/* Table: WRITEOFFREASON                                        */
/*==============================================================*/
create table WRITEOFFREASON (
   WRITEOFFREASON_ID    int IDENTITY(1,1)                  not null,
   DESCRIPTION          varchar(255)         null,
   constraint PK_WRITEOFFREASON primary key (WRITEOFFREASON_ID)
)
go

alter table ATTENDENCE
   add constraint FK_ATTENDEN_MARKS_REG_PROJECTE foreign key (EMPLOYEE_ID, PROJECT_ID)
      references PROJECTEMPLOYEE (EMPLOYEE_ID, PROJECT_ID)
go

alter table DELIVERY
   add constraint FK_DELIVERY_IS_SCHEDU_SUPPLIER foreign key (SUPPLIER_ID, MATERIAL_ID)
      references SUPPLIERORDERLINE (SUPPLIER_ID, MATERIAL_ID)
go

alter table DELIVERY
   add constraint FK_DELIVERY_SCHEDULES_PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table EMPLOYEE
   add constraint FK_EMPLOYEE_HAS_______DOCUMENT foreign key (DOCUMENT_ID)
      references DOCUMENT (DOCUMENT_ID)
go

alter table EQUIPMENTCHECK
   add constraint FK_EQUIPMEN_RECORDS_USER foreign key (USER_ID)
      references "USER" (USER_ID)
go

alter table INVOICE
   add constraint FK_INVOICE_IS_FOR_TASK foreign key (TASK_ID)
      references TASK (TASK_ID)
go

alter table INVOICE
   add constraint FK_INVOICE_IS_SENT_PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table MATERIAL
   add constraint FK_MATERIAL___________MATERIAL foreign key (MATERIALTYPE_ID)
      references MATERIALTYPE (MATERIALTYPE_ID)
go

alter table PROJECT
   add constraint FK_PROJECT_IS_MADE_REQUEST foreign key (INITIALREQUEST_ID)
      references REQUEST (REQUEST_ID)
go

alter table PROJECT
   add constraint FK_PROJECT___HAS_CONSTRUC foreign key (CONSTRUCTIONSITE_ID)
      references CONSTRUCTIONSITE (CONSTRUCTIONSITE_ID)
go

alter table PROJECTEMPLOYEE
   add constraint FK_PROJECTE_HAS___PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table PROJECTEMPLOYEE
   add constraint FK_PROJECTE_PART__OF_EMPLOYEE foreign key (EMPLOYEE_ID)
      references EMPLOYEE (EMPLOYEE_ID)
go

alter table PROJECTEQUIPMENT
   add constraint FK_PROJECTE_____HAS_EQUIPMEN foreign key (EQUIPMENT_ID)
      references EQUIPMENT (EQUIPMENT_ID)
go

alter table PROJECTEQUIPMENT
   add constraint FK_PROJECTE___________PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table PROJECTMATERIAL
   add constraint FK_PROJECTM_IS_ALLOCA_PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table PROJECTMATERIAL
   add constraint FK_PROJECTM_IS_TAKEN_MATERIAL foreign key (MATERIAL_ID)
      references MATERIAL (MATERIAL_ID)
go

alter table PROJECTMATERIALREQUEST
   add constraint FK_PROJECTM_HAVE_URGENCYL foreign key (URGENCYLEVEL_ID)
      references URGENCYLEVEL (URGENCYLEVEL_ID)
go

alter table PROJECTMATERIALREQUEST
   add constraint FK_PROJECTM_MUST_HAVE_PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table PROJECTMATERIALREQUESTLIST
   add constraint FK_PROJECTM_APPROVAL_PROJECTM foreign key (PROJECTMATERIALREQUEST_ID)
      references PROJECTMATERIALREQUEST (PROJECTMATERIALREQUEST_ID)
go

alter table PROJECTMATERIALREQUESTLIST
   add constraint FK_PROJECTM_IS_IN_MATERIAL foreign key (MATERIAL_ID)
      references MATERIAL (MATERIAL_ID)
go

alter table REQUEST
   add constraint FK_REQUEST_MAKES_CLIENT foreign key (CLIENT_ID)
      references CLIENT (CLIENT_ID)
go

alter table SAFETYFILECHECKLIST
   add constraint FK_SAFETYFI_ATTACH_SAFETYFI foreign key (SAFETYFILEITEM_ID)
      references SAFETYFILEITEM (SAFETYFILEITEM_ID)
go

alter table SAFETYFILECHECKLIST
   add constraint FK_SAFETYFI_KEEPS_PROJECT foreign key (PROJECT_ID)
      references PROJECT (PROJECT_ID)
go

alter table STOCKTAKE
   add constraint FK_STOCKTAK_CONDUCTS_USER foreign key (USER_ID)
      references "USER" (USER_ID)
go

alter table SUPPLIER
   add constraint FK_SUPPLIER________HA_SUPPLIER foreign key (SUPPLIERTYPE_ID)
      references SUPPLIERTYPE (SUPPLIERTYPE_ID)
go

alter table SUPPLIERORDERLINE
   add constraint FK_SUPPLIER_SUPPLIES_SUPPLIER foreign key (SUPPLIER_ID)
      references SUPPLIER (SUPPLIER_ID)
go

alter table SUPPLIERORDERLINE
   add constraint FK_SUPPLIER___________MATERIAL foreign key (MATERIAL_ID)
      references MATERIAL (MATERIAL_ID)
go

alter table TASK
   add constraint FK_TASK_CREATED_USER foreign key (USER_ID)
      references "USER" (USER_ID)
go

alter table TASK
   add constraint FK_TASK___________TASKTYPE foreign key (TASKTYPE)
      references TASKTYPE (TASKTYPE)
go

alter table TASKMATERIAL
   add constraint FK_TASKMATE__HAS_TASK foreign key (TASK_ID)
      references TASK (TASK_ID)
go

alter table TASKMATERIAL
   add constraint FK_TASKMATE___________MATERIAL foreign key (MATERIAL_ID)
      references MATERIAL (MATERIAL_ID)
go

alter table "USER"
   add constraint FK_USER_IS_EMPLOYEE foreign key (EMPLOYEE_ID)
      references EMPLOYEE (EMPLOYEE_ID)
go

alter table "USER"
   add constraint FK_USER_IS_ASSIGN_USERROLE foreign key (USERROLE)
      references USERROLE (USERROLE)
go

alter table USERINCIDENT
   add constraint FK_USERINCI____HAS_USER foreign key (USER_ID)
      references "USER" (USER_ID)
go

alter table USERINCIDENT
   add constraint FK_USERINCI___________INCIDENT foreign key (INCIDENT_ID)
      references INCIDENT (INCIDENT_ID)
go

alter table VEHICLE
   add constraint FK_VEHICLE_ASSIGN_USER foreign key (USER_ID)
      references "USER" (USER_ID)
go

alter table VEHICLE
   add constraint FK_VEHICLE_HAS__VEHICLET foreign key (VEHICLETYPE_ID)
      references VEHICLETYPE (VEHICLETYPE_ID)
go

alter table WAREHOUSEEQUIPMENT
   add constraint FK_WAREHOUS_IS_AT_EQUIPMEN foreign key (EQUIPMENT_ID)
      references EQUIPMENT (EQUIPMENT_ID)
go

alter table WAREHOUSEEQUIPMENT
   add constraint FK_WAREHOUS__CONTAINS_WAREHOUS foreign key (WAREHOUSE_ID)
      references WAREHOUSE (WAREHOUSE_ID)
go

alter table WAREHOUSEEQUIPMENTCHECK
   add constraint FK_WAREHOUS_CAN___HAV_WAREHOUS foreign key (WAREHOUSE_ID, EQUIPMENT_ID)
      references WAREHOUSEEQUIPMENT (WAREHOUSE_ID, EQUIPMENT_ID)
go

alter table WAREHOUSEEQUIPMENTCHECK
   add constraint FK_WAREHOUS_HAS_______EQUIPMEN foreign key (EQUIPMENTCHECK_ID)
      references EQUIPMENTCHECK (EQUIPMENTCHECK_ID)
go

alter table WAREHOUSEEQUIPMENTWRITEOFF
   add constraint FK_WAREHOUS_CAN_CONTA_WRITEOFF foreign key (WRITEOFF_ID)
      references WRITEOFF (WRITEOFF_ID)
go

alter table WAREHOUSEEQUIPMENTWRITEOFF
   add constraint FK_WAREHOUS_CAN_HAVE_WAREHOUS foreign key (WAREHOUSE_ID, EQUIPMENT_ID)
      references WAREHOUSEEQUIPMENT (WAREHOUSE_ID, EQUIPMENT_ID)
go

alter table WAREHOUSEMATERIAL
   add constraint FK_WAREHOUS_CAN_BE_MATERIAL foreign key (MATERIAL_ID)
      references MATERIAL (MATERIAL_ID)
go

alter table WAREHOUSEMATERIAL
   add constraint FK_WAREHOUS__CONTAIN_WAREHOUS foreign key (WAREHOUSE_ID)
      references WAREHOUSE (WAREHOUSE_ID)
go

alter table WAREHOUSEMATERIALSTOCKTAKE
   add constraint FK_WAREHOUS_IS_CONDUC_STOCKTAK foreign key (STOCKTAKE_ID)
      references STOCKTAKE (STOCKTAKE_ID)
go

alter table WAREHOUSEMATERIALSTOCKTAKE
   add constraint FK_WAREHOUS_UNDERGOES_WAREHOUS foreign key (MATERIAL_ID, WAREHOUSE_ID)
      references WAREHOUSEMATERIAL (MATERIAL_ID, WAREHOUSE_ID)
go

alter table WAREHOUSEMATERIALWRITEOFF
   add constraint FK_WAREHOUS_HAVE______WRITEOFF foreign key (WRITEOFF_ID)
      references WRITEOFF (WRITEOFF_ID)
go

alter table WAREHOUSEMATERIALWRITEOFF
   add constraint FK_WAREHOUS_HAVE______WAREHOUS foreign key (MATERIAL_ID, WAREHOUSE_ID)
      references WAREHOUSEMATERIAL (MATERIAL_ID, WAREHOUSE_ID)
go

alter table WRITEOFF
   add constraint FK_WRITEOFF_HAS_TO_WRITEOFF foreign key (WRITEOFFREASON_ID)
      references WRITEOFFREASON (WRITEOFFREASON_ID)
go

