package com.starterproject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.starterproject.Entity.Product;
import com.starterproject.Repository.repository;

@Service
public class serviceImpl implements service {
	@Autowired
	repository productrepository;

	@Override
	public Product saveProduct(Product product) {
		return productrepository.save(product);

	}

	@Override
	public String deleteProduct(Long productid) {
		productrepository.deleteById(productid);
		return "Your record deleted successfuly";
	}

}
