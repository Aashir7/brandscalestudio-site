document.getElementById('leadForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    data: [{
      Name: form.elements["Name"].value,
      Email: form.elements["Email"].value,
      Phone: form.elements["Phone"].value,
      TikTokShop: form.elements["TikTokShop"].value,
      Product: form.elements["Product"].value,
      RunningAds: form.elements["RunningAds"].value,
      AdDuration: form.elements["AdDuration"].value,
      MonthlyBudget: form.elements["MonthlyBudget"].value,
      TiktokGoal: form.elements["TiktokGoal"].value, // ✅ ← New line added
      Timestamp: new Date().toLocaleString()
    }]
  };
  try {
    await fetch("https://sheetdb.io/api/v1/5ilwj4yuingeu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    window.location.href = "/thank-you.html";
  } catch (err) {
    alert("Something went wrong. Please try again.");
  }
});
