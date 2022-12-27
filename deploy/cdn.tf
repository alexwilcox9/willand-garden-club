data "azurerm_cdn_profile" "wvh" {
  name                = "willandvillagehall"
  resource_group_name = data.azurerm_resource_group.wvh.name
}

resource "azurerm_cdn_endpoint" "web" {
  name                      = "willandgardenclub"
  profile_name              = data.azurerm_cdn_profile.wvh.name
  location                  = data.azurerm_cdn_profile.wvh.location
  resource_group_name       = data.azurerm_resource_group.wvh.name
  is_http_allowed           = true
  is_https_allowed          = true
  content_types_to_compress = local.compress-types
  is_compression_enabled    = true
  optimization_type         = "GeneralWebDelivery"
  origin_host_header        = azurerm_storage_account.web.primary_web_host

  global_delivery_rule {
    modify_response_header_action {
      action = "Overwrite"
      name   = "cache-control"
      value  = "max-age=15552002"
    }
  }

  delivery_rule {
    name  = "EnforceHTTPS"
    order = 1
    request_scheme_condition {
      operator     = "Equal"
      match_values = ["HTTP"]
    }
    url_redirect_action {
      redirect_type = "Found"
      protocol      = "Https"
    }
  }

  delivery_rule {
    name  = "CacheExceptions"
    order = 2

    modify_response_header_action {
      action = "Overwrite"
      name   = "cache-control"
      value  = "no-cache"
    }

    url_file_extension_condition {
      match_values = [
        "json",
        "docx",
      ]
      operator   = "Equal"
      transforms = ["Lowercase"]
    }
  }

  origin {
    name       = "willandvillagehall"
    host_name  = azurerm_storage_account.web.primary_web_host
    https_port = 443
  }
}

resource "azurerm_cdn_endpoint_custom_domain" "wgc" {
  name            = "wgc"
  cdn_endpoint_id = azurerm_cdn_endpoint.web.id
  host_name       = trimsuffix(azurerm_dns_cname_record.wgc-web.fqdn, ".")

  cdn_managed_https {
    certificate_type = "Dedicated"
    protocol_type    = "ServerNameIndication"
  }

}
