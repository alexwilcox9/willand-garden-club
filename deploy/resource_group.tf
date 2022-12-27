
resource "azurerm_resource_group" "wgc" {
  name     = "wgc-web"
  location = "UK South"
}

data "azurerm_resource_group" "wvh" {
  name = "wvh-web"
}
