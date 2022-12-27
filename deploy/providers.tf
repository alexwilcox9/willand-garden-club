terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.34.0, < 4.0.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = "wgc-web"
    storage_account_name = "wgcweb"
    container_name       = "tfstate"
    key                  = "wgc-web.tfstate"
  }

}

provider "azurerm" {
  features {}
}
