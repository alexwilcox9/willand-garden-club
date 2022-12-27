resource "azurerm_storage_account" "web" {
  name                     = "wgcweb"
  resource_group_name      = azurerm_resource_group.wgc.name
  location                 = azurerm_resource_group.wgc.location
  account_kind             = "StorageV2"
  account_tier             = "Standard"
  account_replication_type = "ZRS"
  min_tls_version          = "TLS1_2"

  static_website {
    index_document     = "index.html"
    error_404_document = "index.html"
  }


}

resource "azurerm_storage_container" "tfstate" {
  name                 = "tfstate"
  storage_account_name = azurerm_storage_account.web.name
}


# All files in the "dist/garden-club" folder will be uploaded to the scripts container
resource "azurerm_storage_blob" "web-files" {
  for_each               = fileset("${path.module}/../web/dist/garden-club", "**")
  name                   = each.value
  storage_account_name   = azurerm_storage_account.web.name
  storage_container_name = "$web"
  type                   = "Block"
  source                 = "${path.module}/../web/dist/garden-club/${each.value}"
  content_type           = lookup(local.mime-types, element(split(".", each.value), length(split(".", each.value)) - 1))
  content_md5            = filemd5("${path.module}/../web/dist/garden-club/${each.value}")
}
