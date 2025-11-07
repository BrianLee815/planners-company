export async function onRequestGet({ env }) {
  const folderId = "17sWL-j-7bl0vqBr60a5tiIn865mSkj_4";
  const apiKey = env.GOOGLE_API_KEY; // ✅ 수정됨!

  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;

  const res = await fetch(url);
  const data = await res.json();

  const images = data.files
    .filter(file => file.mimeType.includes("image"))
    .map(file => `https://drive.google.com/uc?export=view&id=${file.id}`);

  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
}


