package kr.co.quiltmom.product;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String name;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private ProductCategory category;

	@Column(nullable = false)
	private long price;

	@Column(name = "image_url", nullable = false)
	private String imageUrl;

	@Column(nullable = false)
	private boolean sellable;

	protected Product() {
	}

	public Long getId() { return id; }
	public String getName() { return name; }
	public ProductCategory getCategory() { return category; }
	public long getPrice() { return price; }
	public String getImageUrl() { return imageUrl; }
	public boolean isSellable() { return sellable; }
}
