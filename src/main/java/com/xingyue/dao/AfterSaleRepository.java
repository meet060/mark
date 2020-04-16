package com.xingyue.dao;
import com.xingyue.pojo.AfterSale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author hgl
 */
@Repository
public interface AfterSaleRepository extends JpaRepository<AfterSale, Integer> {

}
