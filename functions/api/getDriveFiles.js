export async function onRequestGet() {

  console.log("GOOGLE_API_KEY:", process.env.GOOGLE_API_KEY);
  const folderId = "17sWL-j-7bl0vqBr60a5tiIn865mSkj_4";
  const apiKey = process.env.GOOGLE_API_KEY;

  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name)`;

  const res = await fetch(url);
  const data = await res.json();

  const images = data.files.map(file => ({
    id: file.id,
    url: `https://drive.google.com/uc?export=view&id=${file.id}`
  }));

  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
}


