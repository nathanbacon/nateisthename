// useful commands for deleteing custom domains
// az feature register --namespace Microsoft.Network --name BypassCnameCheckForCustomDomainDeletion
// az feature unregister --namespace Microsoft.Network --name BypassCnameCheckForCustomDomainDeletion

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

resource "azurerm_dns_a_record" "dns_alias_record" {
  name                = "@"
  zone_name           = data.azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_dns_zone.dns_zone.resource_group_name
  ttl                 = 3600
  target_resource_id  = azurerm_cdn_endpoint.cdn_endpoint.id
}
