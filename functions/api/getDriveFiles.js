export async function onRequestGet({ env }) {
  const folderId = "17sWL-j-7bl0vqBr60a5tiIn865mSkj_4";
  const apiKey = env.GOOGLE_API_KEY; // ✅ 이렇게 수정

  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;

  const res = await fetch(url);
  const data = await res.json();

  const images = data.files.map((file) => ({
    id: file.id,
    url: `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${apiKey}`
  }));

  return new Response(JSON.stringify(images), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  });
}

