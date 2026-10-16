package kr.co.quiltmom.product;

public class ProductNotFoundException extends RuntimeException {

	public ProductNotFoundException(long productId) {
		super("상품을 찾을 수 없습니다. id=" + productId);
	}
}
