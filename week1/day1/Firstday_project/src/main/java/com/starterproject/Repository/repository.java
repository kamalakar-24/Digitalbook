package com.starterproject.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.starterproject.Entity.Product;

@Repository
public interface repository extends JpaRepository<Product, Long>{

}
