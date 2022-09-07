const inputText = document.querySelector(".textInput");
const message = document.querySelector(".message");

//& Toma el texto

function cryptBtn() {
  validar(inputText.value);
}

function validar(str) {
  const ptrn = /^[a-z áéíóú]+$/g;
  if (!ptrn.test(str)) {
    Swal.fire({
      title: "Recuerda ingresar solo letras",
      icon: "info",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else {
    const encryptedText = encrypt(inputText.value);
    message.value = encryptedText;
    function encrypt(encryptedString) {
      let matrixCode = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"],
      ];
      encryptedString = encryptedString.toLowerCase();
      for (let i = 0; i < matrixCode.length; i++) {
        if (encryptedString.includes(matrixCode[i][0])) {
          encryptedString = encryptedString.replaceAll(
            matrixCode[i][0],
            matrixCode[i][1]
          );
        }
      }
      return encryptedString;
    }
  }
}

function decryptBtn() {
  const decryptedText = decrypt(inputText.value);
  message.value = decryptedText;
  inputText.value = "";
}

function decrypt(decryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  decryptedString = decryptedString.toLowerCase();
  for (let i = 0; i < matrixCode.length; i++) {
    if (decryptedString.includes(matrixCode[i][1])) {
      decryptedString = decryptedString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }
  return decryptedString;
}

function copy() {
  message.select();
  navigator.clipboard.writeText(message.value);
  Swal.fire({
    title: "Texto copiado en portapapeles",
    icon: "info",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}
