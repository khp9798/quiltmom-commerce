package kr.co.quiltmom.product;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProductService {

	private final ProductRepository productRepository;

	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	public List<ProductResponse> findAll() {
		return productRepository.findAll().stream()
			.map(ProductResponse::from)
			.toList();
	}

	public ProductResponse findById(long productId) {
		return productRepository.findById(productId)
			.map(ProductResponse::from)
			.orElseThrow(() -> new ProductNotFoundException(productId));
	}
}
