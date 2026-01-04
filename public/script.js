async function sendMessage() {
  const message = document.getElementById("message").value;
  const responseDiv = document.getElementById("response");

  responseDiv.innerText = "Thinking...";

  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  responseDiv.innerText = data.reply;
}
