const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");
const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");
const profileForm = document.querySelector("#profileForm");
const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");
const formMessage = document.getElementById("formMessage");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const initialProfile = {
  name: "Maria Santos",
  program: "BS Information Technology",
  year: "3rd Year",
  status: "active"
};

function isValidStudentName(name) {
  return name.trim().length >= 2;
}

function formatStudentStatus(status) {
  return status === "active" ? "Active" : "Inactive";
}

function setStatus(status) {
  if (!profileCard || !profileStatus) return;

  profileCard.dataset.status = status;
  profileStatus.textContent = formatStudentStatus(status);
  profileCard.classList.toggle("active", status === "active");
  profileCard.classList.toggle("inactive", status === "inactive");
}

function updateProfile() {
  if (!nameInput || !isValidStudentName(nameInput.value)) {
    if (formMessage) formMessage.textContent = "Student name is required";
    return;
  }

  if (profileName) profileName.textContent = nameInput.value.trim();
  if (profileProgram) profileProgram.textContent = programInput.value;
  if (profileYear) profileYear.textContent = yearInput.value;
  setStatus(statusInput.value);
  if (formMessage) formMessage.textContent = "Profile updated";
}

function toggleDetails() {
  if (detailsPanel) detailsPanel.classList.toggle("hidden");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function resetProfile() {
  if (nameInput) nameInput.value = initialProfile.name;
  if (programInput) programInput.value = initialProfile.program;
  if (yearInput) yearInput.value = initialProfile.year;
  if (statusInput) statusInput.value = initialProfile.status;
  if (profileName) profileName.textContent = initialProfile.name;
  if (profileProgram) profileProgram.textContent = initialProfile.program;
  if (profileYear) profileYear.textContent = initialProfile.year;
  setStatus(initialProfile.status);
  if (studentIdDisplay && profileCard) {
    studentIdDisplay.textContent = `Student ID: ${profileCard.dataset.studentId}`;
  }
  if (detailsPanel) detailsPanel.classList.remove("hidden");
  if (formMessage) formMessage.textContent = "";
  document.body.classList.remove("dark-theme");
}

if (profileForm) profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateProfile();
});
if (toggleDetailsBtn) toggleDetailsBtn.addEventListener("click", toggleDetails);
if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
if (resetBtn) resetBtn.addEventListener("click", resetProfile);
