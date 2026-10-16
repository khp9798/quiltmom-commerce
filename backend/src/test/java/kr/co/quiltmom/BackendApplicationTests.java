package kr.co.quiltmom;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class BackendApplicationTests {

	@LocalServerPort
	private int port;

	@Test
	void returnsProducts() throws IOException, InterruptedException {
		HttpResponse<String> response = get("/api/products");

		assertThat(response.statusCode()).isEqualTo(200);
		assertThat(response.body()).contains("동백 패치워크 가방 (임시)");
		assertThat(response.body()).contains("\"category\":\"BAG\"");
	}

	@Test
	void returnsNotFoundForUnknownProduct() throws IOException, InterruptedException {
		HttpResponse<String> response = get("/api/products/999");

		assertThat(response.statusCode()).isEqualTo(404);
		assertThat(response.body()).contains("PRODUCT_NOT_FOUND");
	}

	private HttpResponse<String> get(String path) throws IOException, InterruptedException {
		HttpRequest request = HttpRequest.newBuilder()
			.uri(URI.create("http://localhost:" + port + path))
			.GET()
			.build();

		return HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
	}
}
