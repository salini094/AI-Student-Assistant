function askQuestion() {
  document.getElementById("output").innerHTML = "<b>AI:</b> Typing...";
  setTimeout(() => {
    document.getElementById("output").innerHTML =
      "<b>User:</b> When is the internal exam?<br><b>AI:</b> Your internal exam is scheduled next week.";
  }, 1500); // 1.5 seconds delay for realism
}

function uploadNotice() {
  document.getElementById("output").innerHTML = "<b>AI Vision:</b> Processing...";
  setTimeout(() => {
    document.getElementById("output").innerHTML =
      "<b>Uploading image...</b><br><b>AI Vision:</b> Extracted text: Internal exam starts Monday.";
  }, 1500);
}
