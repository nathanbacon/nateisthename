terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.44.1"
    }
  }

  backend "azurerm" {
    resource_group_name  = "tfstateresources"
    storage_account_name = "ngtfstate21823"
    container_name       = "tfstatenateisthename"
    key                  = "terraform.tfstate"
  }
  required_version = ">= 1.1.0"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = var.website_name
  location = var.location
}

resource "azurerm_storage_account" "sa" {
  name                     = var.website_name
  resource_group_name      = azurerm_resource_group.rg.name
  account_tier             = "Standard"
  account_kind             = "StorageV2"
  account_replication_type = "RAGRS"
  location                 = azurerm_resource_group.rg.location

  static_website {
    index_document     = "index.html"
    error_404_document = "404.html"
  }
}

resource "azurerm_storage_account" "function_storage" {
  name                     = "nateisthenamesa"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

resource "azurerm_service_plan" "functions_app_service_plan" {
  name                = "nathan-app-service-plan"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = "Y1"
}

resource "azurerm_linux_function_app" "function_app" {
  name                = "nateisthename-function-app"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  storage_account_name       = azurerm_storage_account.function_storage.name
  storage_account_access_key = azurerm_storage_account.function_storage.primary_access_key
  service_plan_id            = azurerm_service_plan.functions_app_service_plan.id

  site_config {

  }
}
