terraform {
  required_version = "~> 1.7"
  required_providers {
    aws={
        source = "hashicorp/aws"
        version= "~> 5.35"
    }
  }
}
provider "aws" {
  profile = "default"
  region = "ca-cetral"
}