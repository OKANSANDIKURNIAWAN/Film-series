function createFooter() {
  const footerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-col">
          <b>VINMOEC</b><br />
          Situs informasi film & series Indonesia Tahun 2025.
        </div>
        <div class="footer-col">
          <b>MENU</b><br />
          <a href="index.html">Home</a><br />
          <a href="film.html">Film & Series</a><br />
          <a href="aboout.html">About Us</a><br />
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <b>INFORMATION</b><br />
          <a href="#">Privacy Policy</a><br />
          <a href="#">Terms & Conditions</a><br />
          <a href="#">Disclaimer</a>
        </div>
      </div>
      <div class="footer-bottom">&copy; 2025 CINMOEV | Created by Team 4</div>
      <div class="overlay" id="overlay"></div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
}

document.addEventListener("DOMContentLoaded", createFooter);
