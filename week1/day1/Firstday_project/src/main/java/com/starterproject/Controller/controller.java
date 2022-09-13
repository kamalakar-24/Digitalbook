package com.starterproject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starterproject.Entity.Product;
import com.starterproject.Service.service;

@RestController
@RequestMapping("/product")
public class controller {
	@Autowired
	service productservice;

	@PostMapping
	@RequestMapping("/saveproduct")
	public Product saveProduct(@RequestBody Product product) {
		return productservice.saveProduct(product);
	}

	@DeleteMapping
	@RequestMapping("/deleteproduct")
	public String deleteProduct(@RequestBody Long productid) {
		return productservice.deleteProduct(productid);
	}

}
