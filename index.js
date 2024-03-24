import axios from "axios";

async function autoSpam() {
  try {
    setInterval(
      () =>
        axios
          .get(
            "https://api.telegram.org/bot7163005555:AAFdbmyNeQlPk6G4N6zw0M-DC3DUNQQ74kw/sendMessage?parse_mode=markdown&chat_id=6124062727&text=Berhasil Kirim SMS dari Jauh  %0AKepada  : _KadalMerkurius_,%0A𝐦𝐞𝐬𝐬𝐚𝐠𝐞 : _Ciyeeeeeee yang mau phising_"
          )
          .then(() => console.log("Sukses spam hacker")),
      100
    );
  } catch (error) {
    autoSpam();
  }
}

autoSpam();
