# Website DNS

data "azurerm_dns_zone" "wvh" {
  name                = "willandvillagehall.org.uk"
  resource_group_name = data.azurerm_resource_group.wvh.name
}


resource "azurerm_dns_cname_record" "wgc-web" {
  name                = "gardenclub"
  zone_name           = data.azurerm_dns_zone.wvh.name
  resource_group_name = data.azurerm_resource_group.wvh.name
  ttl                 = 3600
  target_resource_id  = azurerm_cdn_endpoint.web.id
}

