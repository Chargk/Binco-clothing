function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} by Dmytro Podolian</p>
      <a href="https://github.com/Chargk" target="_blank">
        <i class="footer-links brands-footer fa-brands fa-github fa-2x"></i>
      </a>
      <a href="https://steamcommunity.com/id/Chargerrrok" target="_blank">
        <i class="footer-links fa-brands brands-footer fa-steam fa-2x"></i>
      </a>
      <a
        href="https://discordapp.com/users/318783428608917505/"
        target="_blank"
      >
        <i class="footer-links fa-brands fa-discord brands-footer fa-2x"></i>
      </a>
    </footer>
  );
}

export default Footer;
