package com.starterproject.Service;

import com.starterproject.Entity.Product;

public interface service {
	
	Product saveProduct(Product product);
	
	String deleteProduct(Long productid);
	
	

}
