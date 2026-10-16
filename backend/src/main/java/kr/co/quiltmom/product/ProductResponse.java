package kr.co.quiltmom.product;

public record ProductResponse(
	Long id,
	String name,
	ProductCategory category,
	long price,
	String imageUrl,
	boolean sellable
) {
	public static ProductResponse from(Product product) {
		return new ProductResponse(product.getId(), product.getName(), product.getCategory(),
			product.getPrice(), product.getImageUrl(), product.isSellable());
	}
}
