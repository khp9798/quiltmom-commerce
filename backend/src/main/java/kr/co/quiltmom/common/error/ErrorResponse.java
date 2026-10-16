package kr.co.quiltmom.common.error;

public record ErrorResponse(
	String code,
	String message
) {
}
