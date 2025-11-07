export async function onRequestGet(context) {
  try {
    const folderId = "17sWL-j-7bl0vqBr60a5tiIn865mSkj_4";
    const apiKey = context.env.GOOGLE_API_KEY;

    if (!apiKey) {
      throw new Error("Missing GOOGLE_API_KEY");
    }

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name)`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Google API error: ${res.status}`);
    }

    const data = await res.json();
    const images = data.files.map(file => `https://drive.google.com/uc?export=view&id=${file.id}`);

    return new Response(JSON.stringify(images), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(`Function error: ${err.message}`, { status: 500 });
  }
}
