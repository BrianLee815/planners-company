export async function onRequestGet({ request }) {
  const folderId = "17sWL-j-7bl0vqBr60a5tiIn865mSkj_4"; // 공유 폴더 ID
  const apiKey = process.env.GOOGLE_API_KEY; // Cloudflare 환경변수에 설정

  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name)`;

  const res = await fetch(url);
  const data = await res.json();

  // 파일 목록에서 직접 이미지 링크 생성
  const images = data.files.map(file => `https://drive.google.com/uc?export=view&id=${file.id}`);

  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
}