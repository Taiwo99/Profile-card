function updateTimeUTC() {
  const utcTimeElement = document.querySelector(
    "[data-testid='currentTimeUTC']"
  );
  const now = new Date();
  const utcTime = now.toUTCString();
  utcTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
}

updateTimeUTC();
