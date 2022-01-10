const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <section class="footer">

    <h4>About Us</h4>
    <p>About us pages serve much the same purpose for retailers who sell less-common or unique items as well. <br>
        Additionally, they allow for an in-depth explanation of what brought the ecommerce store owner to the
        specific market </p>

    <div class="icons">
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="#" class="google"><i class="fa fa-google"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
        <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>

    </div>



    </section>

        <p class="footer-credits">Aashir-Outfitters, Best suiting online store</p>

    `;
};

createFooter();
