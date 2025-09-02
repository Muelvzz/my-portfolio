async function loadHTML(getId, getFile) {
  const response = await fetch(getFile)
  const text = await response.text()
  document.getElementById(getId).innerHTML = text

}

loadHTML("nav", String.raw`template\nav.html`)
loadHTML("profile", String.raw`template\profile.html`)
loadHTML("about", String.raw`template\about.html`)
loadHTML("experience", String.raw`template\experience.html`)
loadHTML("project", String.raw`template\project.html`)
loadHTML("contact", String.raw`template\contact.html`)
loadHTML("footer", String.raw`template\footer.html`)