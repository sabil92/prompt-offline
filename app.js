function generatePrompt(){
  const ekspresi = document.getElementById("ekspresi").value;
  const waktu = document.getElementById("waktu").value;
  const cuaca = document.getElementById("cuaca").value;
  const suasana = document.getElementById("suasana").value;
  const shot = document.getElementById("shot").value;
  const sudut = document.getElementById("sudut").value;
  const gerakCam = document.getElementById("gerakCam").value;
  const focus = document.getElementById("focus").value;
  const lighting = document.getElementById("lighting").value;
  const tone = document.getElementById("tone").value;
  const style = document.getElementById("style").value;

  const prompt = `
PRIORITAS REFERENSI GAMBAR:
Karakter harus sangat mirip dengan gambar referensi. Pertahankan struktur wajah, proporsi tubuh, pose, dan identitas visual. Jangan mendesain ulang karakter. Jaga konsistensi visual dengan gambar referensi.

DESKRIPSI ADEGAN:

DETAIL KARAKTER:
Identitas:
Penampilan: humanoid kayu dengan tekstur kayu alami sesuai gambar referensi
Pakaian:
Ekspresi: ${ekspresi}
Gerakan:

LINGKUNGAN:
Lokasi:
Latar belakang:
Waktu: ${waktu}
Cuaca: ${cuaca}
Suasana: ${suasana}

KAMERA SINEMATIK:
Jenis shot: ${shot}
Sudut kamera: ${sudut}
Gerakan kamera: ${gerakCam}
Kedalaman fokus: ${focus} dengan latar blur lembut

PENCAHAYAAN:
${lighting}
bayangan realistis
kontras sedang
tone warna: ${tone}

GAYA VISUAL:
${style}
tekstur hiper-detail
detail sangat tajam
lipatan kain realistis
penceritaan visual emosional

EFEK TAMBAHAN:
kabut volumetrik tipis
film grain halus
ultra texture detail

KUALITAS OUTPUT:
Ultra Realistis 8K
masterpiece quality
ultra detail
rasio vertikal 9:16
`;
  document.getElementById("output").value = prompt;
}

function copyAll(){
  navigator.clipboard.writeText(document.getElementById("output").value);
  alert("Copied!");
}

function randomPrompt(){
  ["ekspresi","waktu","cuaca","suasana","shot","sudut","gerakCam","focus","lighting","tone","style"].forEach(id=>{
    const el = document.getElementById(id);
    el.selectedIndex = Math.floor(Math.random()*el.options.length);
  });
  generatePrompt();
}

// generate prompt otomatis saat halaman load
window.onload = function(){
    generatePrompt();
};
