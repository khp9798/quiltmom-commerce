import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);

test("현재 운영 사실과 다른 주문 안내를 노출하지 않는다", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.doesNotMatch(page, /DM으로 주문|DM으로 문의|가격 · 주문 문의/);
  assert.doesNotMatch(page, /인스타그램에 가장 먼저 소개/);
  assert.match(page, /온라인 판매 준비 중/);
  assert.match(page, /실제 판매 정보는 오픈 전에 확정됩니다/);
});

test("상품 탐색과 향후 온라인 주문 흐름을 설명한다", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /찜 버튼으로 마음에 드는 작품을 모아보세요/);
  assert.match(page, /옵션과 수량을 선택해 장바구니에서 주문/);
  assert.match(page, /안전한 온라인 결제와 주문 상태 확인/);
});
