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

resource "azurerm_cdn_profile" "cdn_profile" {
  name                = "${var.website_name}cdnprofile"
  location            = "Global"
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "cdn_endpoint" {
  name                   = "${var.website_name}cdnendpoint"
  profile_name           = azurerm_cdn_profile.cdn_profile.name
  location               = azurerm_cdn_profile.cdn_profile.location
  resource_group_name    = azurerm_resource_group.rg.name
  origin_host_header     = azurerm_storage_account.sa.primary_web_host
  is_compression_enabled = true
  content_types_to_compress = [
    "application/eot",
    "application/font",
    "application/font-sfnt",
    "application/javascript",
    "application/json",
    "application/opentype",
    "application/otf",
    "application/pkcs7-mime",
    "application/truetype",
    "application/ttf",
    "application/vnd.ms-fontobject",
    "application/xhtml+xml",
    "application/xml",
    "application/xml+rss",
    "application/x-font-opentype",
    "application/x-font-truetype",
    "application/x-font-ttf",
    "application/x-httpd-cgi",
    "application/x-javascript",
    "application/x-mpegurl",
    "application/x-opentype",
    "application/x-otf",
    "application/x-perl",
    "application/x-ttf",
    "font/eot",
    "font/ttf",
    "font/otf",
    "font/opentype",
    "image/svg+xml",
    "text/css",
    "text/csv",
    "text/html",
    "text/javascript",
    "text/js",
    "text/plain",
    "text/richtext",
    "text/tab-separated-values",
    "text/xml",
    "text/x-script",
    "text/x-component",
    "text/x-java-source"
  ]

  origin {
    host_name = azurerm_storage_account.sa.primary_web_host
    name      = "origin"
  }
}

data "azurerm_dns_zone" "dns_zone" {
  name                = var.domain
  resource_group_name = "dnszones"
}

resource "azurerm_dns_cname_record" "dns_cname_record_www" {
  name                = "www"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_dns_zone.dns_zone.resource_group_name
  ttl                 = 3600
  target_resource_id  = azurerm_cdn_endpoint.cdn_endpoint.id
}

resource "azurerm_cdn_endpoint_custom_domain" "custom_domain_www" {
  depends_on = [
    azurerm_dns_cname_record.dns_cname_record_www
  ]
  name            = "www-domain"
  cdn_endpoint_id = azurerm_cdn_endpoint.cdn_endpoint.id
  host_name       = "www.${var.domain}"
}

resource "azurerm_dns_a_record" "dns_alias_record" {
  name                = "@"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_dns_zone.dns_zone.resource_group_name
  ttl                 = 3600
  target_resource_id  = azurerm_cdn_endpoint.cdn_endpoint.id
}

resource "azurerm_cdn_endpoint_custom_domain" "custom_domain" {
  depends_on = [
    azurerm_dns_a_record.dns_alias_record
  ]
  name            = "domain"
  cdn_endpoint_id = azurerm_cdn_endpoint.cdn_endpoint.id
  host_name       = var.domain
}
