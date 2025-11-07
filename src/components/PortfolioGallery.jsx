export async function onRequestGet() {
  const FOLDER_ID = "17sWL-j-7bl0vqBr60a5tiIn865mSkj_4"; // ✅ 네 폴더 ID
  const API_KEY = import.meta.env.GOOGLE_DRIVE_KEY;

  try {
    const listURL = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}`;
    const res = await fetch(listURL);
    const json = await res.json();

    const files = json.files || [];

    const images = files.map(file => ({
      id: file.id,
      url: `https://drive.google.com/uc?export=download&id=${file.id}` // ✅ CORS 문제 없음
    }));

    return new Response(JSON.stringify(images), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

